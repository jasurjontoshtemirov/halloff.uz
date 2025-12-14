#!/bin/bash

# Quick update script for Halloff.uz
# This script pulls latest changes and restarts the application

echo "🔄 Updating Halloff.uz..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Pull latest changes from GitHub
echo -e "${YELLOW}📥 Pulling latest changes...${NC}"
git pull origin main

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to pull changes${NC}"
    exit 1
fi

# Install any new dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install --production

# Build the application
echo -e "${YELLOW}🔨 Building application...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi

# Restart PM2 process
echo -e "${YELLOW}🔄 Restarting application...${NC}"
pm2 restart halloff

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Update successful!${NC}"
    echo -e "${GREEN}🌐 Application restarted${NC}"
    echo -e "${YELLOW}📊 Check status: pm2 status${NC}"
    echo -e "${YELLOW}📋 View logs: pm2 logs halloff${NC}"
else
    echo -e "${RED}❌ Failed to restart application${NC}"
    exit 1
fi

echo -e "${GREEN}🎉 Update completed successfully!${NC}"