import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

// MongoDB connection string - you'll need to replace this with your actual connection string
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB || 'newsletter';

if (!MONGODB_URI) {
  console.error('MONGODB_URI is not defined in environment variables');
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Rate limiting
const RATE_LIMIT = 5; // requests
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const ipRequests = new Map<string, { count: number; timestamp: number }>();

// MongoDB connection
let client: MongoClient | null = null;

async function connectToDatabase() {
  try {
    if (!MONGODB_URI) {
      console.error('MONGODB_URI is not defined');
      throw new Error('MONGODB_URI is not defined');
    }
    
    if (!client) {
      console.log('Creating new MongoDB connection...');
      client = new MongoClient(MONGODB_URI, {
        serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
        connectTimeoutMS: 10000, // Give up initial connection after 10s
      });
      
      try {
        await client.connect();
        console.log('Successfully connected to MongoDB');
      } catch (connectError) {
        console.error('Failed to connect to MongoDB:', connectError);
        throw new Error('Failed to connect to database');
      }
    }
    
    const db = client.db(MONGODB_DB);
    try {
      // Test the connection
      await db.command({ ping: 1 });
      console.log('Database connection is healthy');
      return db;
    } catch (pingError) {
      console.error('Database ping failed:', pingError);
      throw new Error('Database connection is not healthy');
    }
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to database');
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Set response headers
  res.setHeader('Content-Type', 'application/json');

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
      db = await connectToDatabase();
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