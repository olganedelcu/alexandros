import express from 'express';
import type { Request, Response, RequestHandler } from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple coaching responses
const coachingResponses: string[] = [
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

// Default welcome message
const welcomeMessage = "Hi! I'm your AI coach. Ask me anything about your goals, challenges, or anything you'd like to discuss. I'm here to help you grow and achieve your potential.";

// Chat endpoint
app.post('/api/chat', (async (req, res) => {
  try {
    const { message } = req.body as { message: string };
    console.log('Received chat message:', message);

    const db = await connectToDatabase();

    // Store the user message
    await db.collection('chat_messages').insertOne({
      message,
      role: 'user',
      timestamp: new Date(),
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      consentGiven: true,
      retentionPeriod: 30,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    // If it's the first message, return welcome message
    if (message.toLowerCase().includes('hi') || message.toLowerCase().includes('hello') || message.toLowerCase().includes('hey')) {
      const response = welcomeMessage;
      
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

      return res.status(200).json({ response });
    }

    // Get a random response for other messages
    const response = coachingResponses[Math.floor(Math.random() * coachingResponses.length)];

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

    res.status(200).json({ response });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}) as RequestHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 