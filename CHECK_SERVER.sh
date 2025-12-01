#!/bin/bash

# Server holatini tekshirish scripti
# Bu scriptni serverda ishga tushiring va natijani menga yuboring

echo "=========================================="
echo "HALLOFF.UZ - Server diagnostika"
echo "=========================================="
echo ""

# 1. Node.js versiyasi
echo "1️⃣ Node.js versiyasi:"
node --version 2>&1 || echo "❌ Node.js o'rnatilmagan!"
echo ""

# 2. NPM versiyasi
echo "2️⃣ NPM versiyasi:"
npm --version 2>&1 || echo "❌ NPM o'rnatilmagan!"
echo ""

# 3. PM2 o'rnatilganmi?
echo "3️⃣ PM2 holati:"
pm2 --version 2>&1 || echo "❌ PM2 o'rnatilmagan!"
echo ""

# 4. PM2 jarayonlar
echo "4️⃣ PM2 jarayonlar:"
pm2 list 2>&1
echo ""

# 5. 3001 portda ishlovchi jarayon
echo "5️⃣ Port 3001 holati:"
lsof -i :3001 2>&1 || netstat -tulpn | grep 3001 2>&1 || echo "❌ Port 3001 bo'sh"
echo ""

# 6. Nginx holati
echo "6️⃣ Nginx holati:"
systemctl status nginx 2>&1 | head -5 || service nginx status 2>&1 | head -5
echo ""

# 7. Nginx konfiguratsiyasi
echo "7️⃣ Nginx config (halloff.uz):"
ls -la /etc/nginx/sites-available/ 2>&1 | grep halloff
ls -la /etc/nginx/sites-enabled/ 2>&1 | grep halloff
echo ""

# 8. Loyiha papkasi
echo "8️⃣ Loyiha papkasi:"
echo "Qayerda joylashgan? (masalan: /home/username/halloff)"
echo "Papka ichidagi fayllar:"
# Bu qismni o'zingiz to'ldiring
# ls -la /home/username/halloff/docs-website
echo ""

# 9. .env fayli bormi?
echo "9️⃣ Environment fayllar:"
# ls -la /home/username/halloff/docs-website/.env*
echo ""

# 10. Build qilinganmi?
echo "🔟 Build holati:"
# ls -la /home/username/halloff/docs-website/.next
echo ""

echo "=========================================="
echo "✅ Diagnostika tugadi!"
echo "Bu natijalarni menga yuboring"
echo "=========================================="
