#!/bin/bash

echo "🔍 Server diagnostika boshlandi..."
echo ""

# 1. Node.js versiyasi
echo "1️⃣ Node.js versiyasi:"
node --version
echo ""

# 2. PM2 status
echo "2️⃣ PM2 jarayonlar:"
pm2 status
echo ""

# 3. PM2 logs (oxirgi 20 qator)
echo "3️⃣ PM2 logs (oxirgi 20 qator):"
pm2 logs halloff --lines 20 --nostream
echo ""

# 4. Port 3001 band yoki yo'qligini tekshirish
echo "4️⃣ Port 3001 holati:"
lsof -i :3001 || echo "Port 3001 bo'sh"
echo ""

# 5. Nginx status
echo "5️⃣ Nginx holati:"
systemctl status nginx --no-pager | head -10
echo ""

# 6. Nginx konfiguratsiya tekshiruvi
echo "6️⃣ Nginx konfiguratsiya:"
nginx -