import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

// Ensure the connection string has the correct SSL parameters
const MONGODB_URI = process.env.MONGODB_URI!.replace('mongodb+srv://', 'mongodb+srv://') + '&ssl=true&tls=true';
const MONGODB_DB = process.env.MONGODB_DB || 'chat';

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

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const db = await connectToDatabase();
    await db.collection('messages').insertOne({
      message,
      createdAt: new Date(),
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    });

    return res.status(200).json({ message: 'Message received' });
  } catch (error) {
    const err = error as Error;
    console.error('Error processing message:', err);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: err.message 
    });
  }
} 