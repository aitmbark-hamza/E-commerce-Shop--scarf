import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// WhatsApp Cloud API Configuration
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const WHATSAPP_PHONE_ID = process.env.WHATSAPP_PHONE_ID;
const MY_WHATSAPP_NUMBER = process.env.MY_WHATSAPP_NUMBER;

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Order submission endpoint
app.post('/api/order', async (req, res) => {
  try {
    const { name, phone, location, product } = req.body;

    // Validate required fields
    if (!name || !phone || !location || !product) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, phone, location, product',
      });
    }

    // Validate environment variables
    if (!WHATSAPP_TOKEN || !WHATSAPP_PHONE_ID || !MY_WHATSAPP_NUMBER) {
      console.error('Missing WhatsApp environment variables');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error',
      });
    }

    // Format the message
    const messageBody = `New Order:\nProduct: ${product}\nName: ${name}\nPhone: ${phone}\nLocation: ${location}`;

    // Send to WhatsApp Cloud API
    const whatsappResponse = await fetch(
      `https://graph.facebook.com/v18.0/${WHATSAPP_PHONE_ID}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: MY_WHATSAPP_NUMBER,
          type: 'text',
          text: {
            body: messageBody,
          },
        }),
      }
    );

    const whatsappData = await whatsappResponse.json();

    if (!whatsappResponse.ok) {
      console.error('WhatsApp API error:', whatsappData);
      return res.status(500).json({
        success: false,
        message: 'Failed to send order to WhatsApp',
        error: whatsappData.error?.message || 'Unknown error',
      });
    }

    // Success response
    res.json({
      success: true,
      message: 'Order submitted successfully',
      whatsappMessageId: whatsappData.messages?.[0]?.id,
    });
  } catch (error) {
    console.error('Order submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: err instanceof Error ? err.message : 'Unknown error',
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
  console.log(`✓ Order API endpoint: POST http://localhost:${PORT}/api/order`);
  console.log(`✓ Health check: GET http://localhost:${PORT}/api/health`);
});
