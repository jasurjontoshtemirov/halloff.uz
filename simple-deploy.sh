#!/bin/bash

# Halloff - Oddiy Deploy Script
# ISPmanager'da ishlatish uchun

echo "🚀 Halloff deploy boshlandi..."

# 1. Loyiha papkasiga o'tish
DEPLOY_DIR="/home/$(whoami)/halloff/docs-website"
cd $DEPLOY_DIR || exit

echo "📁 Papka: $DEPLOY_DIR"

# 2. Node.js versiyasini tekshirish
echo "🔍 Node.js versiyasi:"
node --version

# 3. Dependencies o'rnatish
echo "📦 Dependencies o'rnatilmoqda..."
npm install --production

# 4. Build qilish
echo "🔨 Build qilinmoqda..."
npm run build

# 5. PM2 o'rnatish (agar yo'q bo'lsa)
if ! command -v pm2 &> /dev/null
then
    echo "📥 PM2 o'rnatilmoqda..."
    npm install -g pm2
fi

# 6. Eski jarayonni to'xtatish
echo "🛑 Eski jarayon to'xtatilmoqda..."
pm2 delete halloff 2>/dev/null || true

# 7. Yangi jarayonni ishga tushirish
echo "▶️ Yangi jarayon ishga tushirilmoqda..."
pm2 start npm --name "halloff" -- start

# 8. Avtomatik restart sozlash
pm2 startup
pm2 save

# 9. Status ko'rsatish
echo ""
echo "✅ Deploy tugadi!"
echo ""
pm2 status
echo ""
echo "📊 Logs ko'rish uchun: pm2 logs halloff"
echo "🌐 Sayt: http://localhost:3001"
echo ""
