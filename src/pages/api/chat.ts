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