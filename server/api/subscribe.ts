import { MongoClient } from 'mongodb';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const MONGODB_URI = process.env.MONGODB_URI as string;
const MONGODB_DB = process.env.MONGODB_DB || 'newsletter';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

async function connectToDatabase() {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db(MONGODB_DB);
  return { client, db };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;
    console.log('Received subscription request for:', email);

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const { client, db } = await connectToDatabase();

    // Check if email already exists
    const existingSubscriber = await db
      .collection('subscribers')
      .findOne({ email });

    if (existingSubscriber) {
      await client.close();
      return res.status(400).json({ error: 'Email already subscribed' });
    }

    // Add new subscriber
    await db.collection('subscribers').insertOne({
      email,
      createdAt: new Date(),
      source: req.headers.referer || 'direct',
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    });

    await client.close();
    return res.status(200).json({ message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 