import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://olganedelcuam:deXayJyZF1ifS0Lu@cluster0.1eufq6q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function testConnection() {
  const client = new MongoClient(uri);
  
  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Successfully connected to MongoDB');
    
    const db = client.db('newsletter');
    await db.command({ ping: 1 });
    console.log('Database ping successful');
    
    // Test inserting a document
    const result = await db.collection('test').insertOne({ test: 'connection' });
    console.log('Successfully inserted test document:', result);
    
    // Clean up
    await db.collection('test').deleteOne({ _id: result.insertedId });
    console.log('Test document cleaned up');
    
  } catch (error) {
    console.error('Connection test failed:', error);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

testConnection(); 