import express, { RequestHandler } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './lib/mongodb';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

interface MessageRequest {
  name: string;
  phone: string;
  subject: string;
  message: string;
}

// API Routes
const handleMessage: RequestHandler = async (req, res) => {
  try {
    console.log('Starting message submission process...');
    console.log('Environment check:', {
      NODE_ENV: process.env.NODE_ENV,
      MONGODB_URI: process.env.MONGODB_URI ? 'Set' : 'Not set'
    });

    console.log('Attempting to connect to MongoDB...');
    await connectDB();
    console.log('MongoDB connected successfully');
    
    const { name, phone, subject, message } = req.body as MessageRequest;
    console.log('Received request body:', { name, phone, subject, message });

    if (!name || !phone || !subject || !message) {
      console.log('Missing required fields:', {
        name: !!name,
        phone: !!phone,
        subject: !!subject,
        message: !!message
      });
      return res.status(400).json({ message: 'All fields are required' });
    }

    console.log('Creating new message...');
    const Message = require('./models/Message');
    const newMessage = await Message.create({ name, phone, subject, message });
    console.log('Message created successfully:', newMessage);

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: newMessage,
    });
  } catch (error) {
    console.error('Detailed error:', {
      name: (error as Error).name,
      message: (error as Error).message,
      stack: (error as Error).stack,
      type: typeof error
    });
    
    // Check if it's a MongoDB connection error
    if ((error as Error).name === 'MongoServerError') {
      console.error('MongoDB specific error:', error);
    }
    
    return res.status(500).json({
      success: false,
      message: 'Error saving message',
      error: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
    });
  }
};

app.post('/api/messages', handleMessage);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 