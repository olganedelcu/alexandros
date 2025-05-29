import express from 'express';
import type { RequestHandler } from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from both server and root directories
dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = parseInt(process.env.PORT || '3001', 10);

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

// Default welcome message
const welcomeMessage = "Hi! I'm your AI coach. Ask me anything about your goals, challenges, or anything you'd like to discuss. I'm here to help you grow and achieve your potential.";

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

    return res.status(200).json({ message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}) as RequestHandler);

// Training endpoint
app.post('/api/train', (async (req, res) => {
  try {
    const { question, response } = req.body as { question: string; response: string };
    
    if (!question || !response) {
      return res.status(400).json({ error: 'Question and response are required' });
    }

    const db = await connectToDatabase();
    
    // Store the training data
    await db.collection('training_data').insertOne({
      question: question.toLowerCase(),
      response,
      timestamp: new Date(),
      usageCount: 0
    });

    return res.status(200).json({ message: 'Training data added successfully' });
  } catch (error) {
    console.error('Training error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}) as RequestHandler);

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

    // If it's a greeting, return welcome message
    if (message.toLowerCase().includes('hi') || message.toLowerCase().includes('hello') || message.toLowerCase().includes('hey')) {
      const response = welcomeMessage;
      
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

    return res.status(200).json({ response });
  } catch (error) {
    console.error('Chat error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}) as RequestHandler);

const startServer = (retryPort: number) => {
  app.listen(retryPort, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${retryPort}`);
  }).on('error', (err: NodeJS.ErrnoException) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${retryPort} is busy, trying ${retryPort + 1}...`);
      startServer(retryPort + 1);
    } else {
      console.error('Server error:', err);
    }
  });
};

startServer(port); 