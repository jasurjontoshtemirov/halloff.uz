#!/bin/bash
# Server deployment script

echo "Starting deployment..."

# 1. Pull latest changes
git pull origin main

# 2. Install dependencies (in case of new packages)
npm install --legacy-peer-deps

# 3. Build the application
# Note: Next.js build will create the production build in .next/
npm run build

# 4. Restart the application using PM2
# Assumes the app is named 'halloff' in PM2
pm2 restart halloff

echo "✅ Deployment success! Application restarted."
