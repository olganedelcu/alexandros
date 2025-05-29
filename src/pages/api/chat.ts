import { MongoClient, AuthMechanism } from 'mongodb';
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
      const options = {
        serverSelectionTimeoutMS: 5000,
        connectTimeoutMS: 10000,
        ssl: true,
        tls: true,
        tlsInsecure: true,
        directConnection: true,
        retryWrites: true,
        retryReads: true,
        maxPoolSize: 10,
        minPoolSize: 1,
        maxIdleTimeMS: 60000,
        socketTimeoutMS: 45000,
        authSource: 'admin',
        authMechanism: 'SCRAM-SHA-1' as AuthMechanism,
      };

      // Add query parameters to the connection string
      const connectionString = MONGODB_URI.includes('?') 
        ? `${MONGODB_URI}&ssl=true&tls=true&tlsAllowInvalidCertificates=true&directConnection=true`
        : `${MONGODB_URI}?ssl=true&tls=true&tlsAllowInvalidCertificates=true&directConnection=true`;

      console.log('MongoDB connection options:', JSON.stringify(options, null, 2));
      console.log('Using connection string:', connectionString.replace(/\/\/[^:]+:[^@]+@/, '//****:****@')); // Hide credentials
      
      client = new MongoClient(connectionString, options);
      
      try {
        await client.connect();
        console.log('Successfully connected to MongoDB');
      } catch (error) {
        const connectError = error as Error;
        console.error('Failed to connect to MongoDB:', connectError);
        throw new Error(`Failed to connect to database: ${connectError.message}`);
      }
    }
    
    const db = client.db(MONGODB_DB);
    try {
      // Test the connection
      await db.command({ ping: 1 });
      console.log('Database connection is healthy');
      return db;
    } catch (error) {
      const pingError = error as Error;
      console.error('Database ping failed:', pingError);
      throw new Error(`Database connection is not healthy: ${pingError.message}`);
    }
  } catch (error) {
    const dbError = error as Error;
    console.error('MongoDB connection error:', dbError);
    throw new Error(`Failed to connect to database: ${dbError.message}`);
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