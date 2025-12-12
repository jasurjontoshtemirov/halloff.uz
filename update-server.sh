#!/bin/bash

# Server Update Script - Yangi o'zgarishlarni serverga qo'llash uchun
# ISPmanager serverda ishga tushiring

echo "🔄 Updating Halloff.uz server..."

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# 1. Git pull - yangi o'zgarishlarni olish
echo -e "${YELLOW}📥 Pulling latest changes from Git...${NC}"
git pull origin main

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Git pull failed${NC}"
    exit 1
fi

# 2. Dependencies yangilash (agar package.json o'zgargan bo'lsa)
echo -e "${YELLOW}📦 Installing/updating dependencies...${NC}"
npm install --production

# 3. Application build qilish
echo -e "${YELLOW}🔨 Building application...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi

# 4. PM2 restart (graceful restart)
echo -e "${YELLOW}🔄 Restarting PM2 application...${NC}"
pm2 restart halloff

if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️ PM2 restart failed, trying to start fresh...${NC}"
    pm2 delete halloff 2>/dev/null || true
    npm run pm2:start
fi

# 5. PM2 status ko'rsatish
echo -e "${YELLOW}📊 PM2 Status:${NC}"
pm2 status

# 6. Database migration (agar kerak bo'lsa)
echo -e "${YELLOW}🗄️ Checking database...${NC}"
npm run db:init

echo -e "${GREEN}✅ Server update completed successfully!${NC}"
echo -e "${YELLOW}🌐 Application should be running on port 3001${NC}"
echo -e "${YELLOW}📋 Check logs: pm2 logs halloff${NC}"