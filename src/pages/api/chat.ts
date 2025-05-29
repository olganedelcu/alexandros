import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

// MongoDB connection string - you'll need to replace this with your actual connection string
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB || 'chat';

if (!MONGODB_URI) {
  console.error('MONGODB_URI is not defined in environment variables');
  throw new Error('Please define the MONGODB_URI environment variable');
}

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
    console.error('Error processing message:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 