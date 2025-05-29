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

const defaultWelcomeMessage = "Hi! I'm your AI coach. Ask me anything about your goals, challenges, or anything you'd like to discuss. I'm here to help you grow and achieve your potential.";

export default async function handler(req: VercelRequest, res: VercelResponse) {
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
    console.log('Received message:', message);

    const { client, db } = await connectToDatabase();

    // Store user message
    await db.collection('chat_messages').insertOne({
      message,
      role: 'user',
      timestamp: new Date(),
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      consentGiven: true,
      retentionPeriod: 30,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    // If it's a greeting, return welcome message
    if (message.toLowerCase().includes('hi') || message.toLowerCase().includes('hello') || message.toLowerCase().includes('hey')) {
      const response = defaultWelcomeMessage;
      
      await db.collection('chat_messages').insertOne({
        message: response,
        role: 'assistant',
        timestamp: new Date(),
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        consentGiven: true,
        retentionPeriod: 30,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      });

      await client.close();
      return res.status(200).json({ response });
    }

    // Try to find a matching trained response
    const trainedResponse = await db.collection('training_data').findOne({
      question: { $regex: new RegExp(message.toLowerCase(), 'i') }
    });

    let response;
    if (trainedResponse) {
      response = trainedResponse.response;
      // Update usage count
      await db.collection('training_data').updateOne(
        { _id: trainedResponse._id },
        { $inc: { usageCount: 1 } }
      );
    } else {
      // Fallback to default coaching responses
      const defaultResponses = [
        "What's your main goal right now?",
        "How can I help you achieve that?",
        "What's the first step you'd like to take?",
        "What's holding you back?",
        "What would success look like for you?",
        "How do you feel about this situation?",
        "What have you tried so far?",
        "What resources do you need?",
        "What's your timeline for this?",
        "How can we break this down into smaller steps?",
        "What's most important to you?",
        "What would you like to focus on first?",
        "How can I support you in this?",
        "What's your ideal outcome?",
        "What's one thing you could do today?"
      ];
      response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    // Store the assistant's response
    await db.collection('chat_messages').insertOne({
      message: response,
      role: 'assistant',
      timestamp: new Date(),
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      consentGiven: true,
      retentionPeriod: 30,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    await client.close();
    return res.status(200).json({ response });
  } catch (error) {
    console.error('Chat error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 