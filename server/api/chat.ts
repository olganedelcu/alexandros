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

const defaultWelcomeMessage = "Hello! I'm your AI business coach. How can I help you today?";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    console.log('Received message:', message);

    const { client, db } = await connectToDatabase();

    // Store user message
    await db.collection('chat_messages').insertOne({
      role: 'user',
      content: message,
      timestamp: new Date(),
      metadata: {
        source: 'web',
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }
    });

    let response;

    // Check if it's a greeting
    if (message.toLowerCase().match(/^(hi|hello|hey|greetings)/)) {
      response = defaultWelcomeMessage;
    } else {
      // Try to find a trained response
      const trainedResponse = await db.collection('training_data').findOne({
        $or: [
          { question: { $regex: message, $options: 'i' } },
          { keywords: { $in: [new RegExp(message, 'i')] } }
        ]
      });

      if (trainedResponse) {
        response = trainedResponse.answer;
      } else {
        // Fallback to default coaching responses
        const defaultResponses = [
          "That's an interesting point. Could you tell me more about that?",
          "I understand your concern. What steps have you considered so far?",
          "Let's break this down together. What's the main challenge you're facing?",
          "I hear you. What would success look like in this situation?",
          "That's a common challenge. What resources do you currently have available?"
        ];
        response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
      }
    }

    // Store assistant response
    await db.collection('chat_messages').insertOne({
      role: 'assistant',
      content: response,
      timestamp: new Date(),
      metadata: {
        source: 'web',
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
      }
    });

    await client.close();
    return res.status(200).json({ response });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 