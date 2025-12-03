# WhatsApp Order System - Setup Guide

This guide will help you set up the WhatsApp Cloud API integration for real-time order notifications.

## Overview

- **Frontend**: React modal form that submits order data to backend
- **Backend**: Node/Express server that sends orders to WhatsApp via Meta's Cloud API
- **WhatsApp**: Meta's WhatsApp Cloud API sends messages to your business account

## Prerequisites

1. **Meta Business Account** - [Create one here](https://business.facebook.com/)
2. **WhatsApp Business Account** - Connected to your Meta Business Account
3. **Node.js 16+** installed locally
4. **Your WhatsApp phone number** with country code (e.g., 212600000000)

## Step 1: Create Meta App & Get Credentials

### 1.1 Create a Meta App
1. Go to [Meta Developers](https://developers.facebook.com/)
2. Click **"My Apps"** → **"Create App"**
3. Choose **"Business"** as app type
4. Fill in app name and contact email
5. Click **"Create App"**

### 1.2 Add WhatsApp to Your App
1. In your app dashboard, click **"Add Product"**
2. Search for **"WhatsApp"** and click **"Set Up"**
3. Select **"Cloud API"** (not On-Premises)

### 1.3 Get Your Credentials
1. Go to **WhatsApp** → **"Getting Started"**
2. Copy your **Phone Number ID** (looks like a large number)
3. Go to **Settings** → **"System User Access Tokens"**
4. Generate a token with these permissions:
   - `whatsapp_business_messaging`
   - `whatsapp_business_account_management`
5. Copy the **Access Token**

## Step 2: Configure Your .env File

```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your credentials
```

```env
# From Meta App Dashboard
WHATSAPP_PHONE_ID=123456789012345
WHATSAPP_TOKEN=YOUR_ACCESS_TOKEN_HERE

# Your WhatsApp number where orders should be sent (country code required, no + or spaces)
# Example: 212600000000 (Morocco)
MY_WHATSAPP_NUMBER=YOUR_WHATSAPP_NUMBER_HERE

# Server port
PORT=3001
```

## Step 3: Install Dependencies

```bash
npm install
```

This will install both frontend and backend dependencies:
- Frontend: React, Vite, Tailwind, Shadcn UI
- Backend: Express, CORS, node-fetch, dotenv

## Step 4: Run the Application

### Option A: Development (Run both servers)
```bash
npm run dev:all
```

This starts:
- ✓ Frontend Vite server on `http://localhost:8080`
- ✓ Backend Express server on `http://localhost:3001`

### Option B: Run separately
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server
```

## Step 5: Test the Order System

1. Navigate to your app at `http://localhost:8080`
2. Go to **Products** page
3. Click on any product
4. Click **"Order Now"** button
5. Fill in the order form:
   - Full Name
   - Phone Number
   - Location/Address
6. Click **"Submit Order"**
7. You should see a success message
8. Check your WhatsApp - you'll receive the order message!

## Step 6: Update Frontend API Endpoint

By default, the frontend calls `http://localhost:3001/api/order` for local development.

For production, update the fetch URL in `src/components/OrderForm.tsx`:

```tsx
// Before (local development)
const response = await fetch("/api/order", {

// After (production)
const response = await fetch("https://your-domain.com/api/order", {
```

## Deployment

### Deploy to Vercel

1. **Connect GitHub repository** to Vercel
2. **Set Environment Variables** in Vercel Dashboard:
   - `WHATSAPP_PHONE_ID`
   - `WHATSAPP_TOKEN`
   - `MY_WHATSAPP_NUMBER`
3. Deploy frontend as usual
4. For backend, use **Vercel Serverless Functions** or **Railway**

### Deploy Backend to Railway

1. Go to [Railway](https://railway.app)
2. Create new project from GitHub repo
3. Add environment variables (same as .env)
4. Deploy
5. Copy public URL and update frontend fetch endpoint

### Deploy Backend to Heroku

```bash
# Install Heroku CLI
# Login
heroku login

# Create app
heroku create your-app-name

# Add environment variables
heroku config:set WHATSAPP_PHONE_ID=xxx
heroku config:set WHATSAPP_TOKEN=xxx
heroku config:set MY_WHATSAPP_NUMBER=xxx

# Deploy
git push heroku main
```

## API Endpoint Reference

### POST `/api/order`

**Request:**
```json
{
  "name": "John Doe",
  "phone": "212600000000",
  "location": "123 Main St, Casablanca",
  "product": "Rose Blossom"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Order submitted successfully",
  "whatsappMessageId": "wamid.xxx"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error description",
  "error": "Details"
}
```

### GET `/api/health`

Check if server is running:
```json
{
  "status": "OK",
  "timestamp": "2024-12-03T10:30:00.000Z"
}
```

## Troubleshooting

### "Missing required fields" error
- Check all form fields are filled
- Verify phone number format (no + or spaces)

### "WhatsApp API error: Invalid access token"
- Verify token in .env is correct and not expired
- Generate a new token from Meta Dashboard

### "CORS error"
- Backend CORS is already configured
- Make sure backend is running on correct port
- Check browser console for exact error

### Messages not appearing on WhatsApp
- Verify `MY_WHATSAPP_NUMBER` has country code (e.g., 212 for Morocco)
- Check Meta Dashboard for API health status
- Ensure your WhatsApp Business Account is set up correctly

## File Structure

```
project-root/
├── server.js                 # Express backend
├── .env.example             # Environment variables template
├── src/
│   ├── components/
│   │   └── OrderForm.tsx    # Frontend modal form
│   └── pages/
│       └── ProductDetail.tsx # Updated with OrderForm
└── package.json             # Dependencies and scripts
```

## Next Steps

1. ✅ Set up Meta Business Account
2. ✅ Get WhatsApp credentials
3. ✅ Configure .env file
4. ✅ Install dependencies
5. ✅ Run dev server
6. ✅ Test order submission
7. ✅ Deploy to production

## Support

- [Meta WhatsApp Cloud API Docs](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started)
- [Express Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)

## Security Notes

- ⚠️ Never commit `.env` file to git
- ⚠️ Rotate access tokens periodically
- ⚠️ Use HTTPS in production only
- ⚠️ Validate all form inputs on backend
- ⚠️ Keep dependencies updated

---

**Version**: 1.0.0  
**Last Updated**: December 2024
