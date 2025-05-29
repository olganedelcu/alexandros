import express from 'express';
import type { Request, Response, RequestHandler } from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB || 'newsletter';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let client: MongoClient | null = null;

async function connectToDatabase() {
  try {
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined');
    }
    
    if (!client) {
      console.log('Creating new MongoDB connection...');
      client = new MongoClient(MONGODB_URI);
      await client.connect();
      console.log('Successfully connected to MongoDB');
    }
    
    const db = client.db(MONGODB_DB);
    await db.command({ ping: 1 });
    console.log('Database connection is healthy');
    return db;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to database');
  }
}

// Subscribe endpoint
app.post('/api/subscribe', (async (req, res) => {
  try {
    const { email } = req.body as { email: string };
    console.log('Received subscription request for:', email);

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Connect to MongoDB
    const db = await connectToDatabase();

    // Check if email already exists
    const existingSubscriber = await db
      .collection('subscribers')
      .findOne({ email });

    if (existingSubscriber) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }

    // Add new subscriber
    await db.collection('subscribers').insertOne({
      email,
      createdAt: new Date(),
      source: req.headers.referer || 'direct',
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    });

    res.status(200).json({ message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}) as RequestHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 