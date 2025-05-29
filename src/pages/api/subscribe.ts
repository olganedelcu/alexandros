import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

// Ensure the connection string has the correct SSL parameters
const MONGODB_URI = process.env.MONGODB_URI!.replace('mongodb+srv://', 'mongodb+srv://') + '&ssl=true&tls=true';
const MONGODB_DB = process.env.MONGODB_DB || 'newsletter';

let client: MongoClient | null = null;

async function connectToDatabase() {
  if (!client) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      ssl: true,
      tls: true,
      tlsAllowInvalidCertificates: true,
    };

    console.log('Connecting to MongoDB with URI:', MONGODB_URI.replace(/\/\/[^:]+:[^@]+@/, '//****:****@'));
    client = new MongoClient(MONGODB_URI, options);
    
    try {
      await client.connect();
      console.log('Successfully connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw error;
    }
  }
  return client.db(MONGODB_DB);
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