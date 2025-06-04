import { MongoClient } from 'mongodb';
import type { Db } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

// Modify the connection string to use a different format
const MONGODB_URI = process.env.MONGODB_URI!.replace('mongodb+srv://', 'mongodb://');
const MONGODB_DB = process.env.MONGODB_DB || 'newsletter';

// Create a cached connection variable
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

async function connectToDatabase() {
  // If the database connection is cached, use it instead of creating a new connection
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // If no connection is cached, create a new one
  const client = new MongoClient(MONGODB_URI, {
    maxPoolSize: 10,
    minPoolSize: 5,
    maxIdleTimeMS: 60000,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4,
    retryWrites: true,
    retryReads: true,
    ssl: true,
    tls: true,
    tlsAllowInvalidCertificates: true,
  });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Successfully connected to MongoDB');
    
    const db = client.db(MONGODB_DB);
    
    // Cache the database connection
    cachedClient = client;
    cachedDb = db;
    
    return { client, db };
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate request body
    if (!req.body || typeof req.body !== 'object') {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const { email } = req.body;
    console.log('Received subscription request for:', email);

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log('Invalid email format:', email);
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Connect to MongoDB
    console.log('Attempting to connect to database...');
    let db;
    try {
      const { db: database } = await connectToDatabase();
      db = database;
      console.log('Successfully connected to database');
    } catch (dbError) {
      console.error('Database connection error:', dbError);
      return res.status(500).json({ 
        error: 'Database connection failed',
        details: dbError instanceof Error ? dbError.message : 'Unknown database error'
      });
    }

    // Check if email already exists
    console.log('Checking for existing subscriber...');
    try {
      const existingSubscriber = await db
        .collection('subscribers')
        .findOne({ email });

      if (existingSubscriber) {
        console.log('Email already exists:', email);
        return res.status(400).json({ error: 'Email already subscribed' });
      }
    } catch (queryError) {
      console.error('Database query error:', queryError);
      return res.status(500).json({ 
        error: 'Failed to check existing subscription',
        details: queryError instanceof Error ? queryError.message : 'Unknown query error'
      });
    }

    // Add new subscriber
    console.log('Adding new subscriber...');
    try {
      await db.collection('subscribers').insertOne({
        email,
        createdAt: new Date(),
        source: req.headers.referer || 'direct',
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      });
      console.log('Successfully added subscriber:', email);
      return res.status(200).json({ message: 'Successfully subscribed' });
    } catch (insertError) {
      console.error('Failed to insert subscriber:', insertError);
      return res.status(500).json({ 
        error: 'Failed to save subscription',
        details: insertError instanceof Error ? insertError.message : 'Unknown insert error'
      });
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  } finally {
    // Ensure we always send a response
    if (!res.writableEnded) {
      res.status(500).json({ error: 'No response was sent' });
    }
  }
} 