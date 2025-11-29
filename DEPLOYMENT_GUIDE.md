# ISPmanager'ga Deploy qilish bo'yicha qo'llanma

## 1. Loyihani tayyorlash

### package.json'da scriptlarni tekshirish
```json
{
  "scripts": {
    "dev": "next dev -p 3001",
    "build": "next build",
    "start": "next start -p 3000",
    "lint": "next lint"
  }
}
```

### .env.production faylini yaratish
```env
# Production Environment Variables
NEXTAUTH_URL=https://halloff.uz
NEXTAUTH_SECRET=your-super-secret-production-key-change-this

# Database (ISPmanager'dan olingan)
DB_HOST=localhost
DB_PORT=3306
DB_USER=halloff_db
DB_PASSWORD=your-strong-password
DB_NAME=halloff_db

# JWT Secret
JWT_SECRET=your-jwt-secret-production-key

# Telegram Bot
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
```

## 2. ISPmanager'da tayyorgarlik

### 2.1. Node.js o'rnatish
1. ISPmanager'ga kiring
2. **Dasturlar** → **Node.js** → **O'rnatish**
3. Node.js versiyasi: **18.x yoki 20.x** (tavsiya etiladi)

### 2.2. MySQL Database yaratish
1. **Veb-saytlar** → **Bazalar** → **Yangi baza**
2. Baza nomi: `halloff_db`
3. Foydalanuvchi: `halloff_db`
4. Parol: kuchli parol yarating
5. Database'ni yaratgandan keyin SQL fayllarni import qiling

### 2.3. Domen sozlash
1. **Veb-saytlar** → **Yangi veb-sayt**
2. Domen: `halloff.uz`
3. PHP versiyasi: **O'chirish** (Node.js ishlatamiz)
4. Katalog: `/var/www/halloff/data`

## 3. Fayllarni serverga yuklash

### Variant 1: Git orqali (Tavsiya etiladi)
```bash
# Serverga SSH orqali ulanish
ssh user@your-server-ip

# Loyiha katalogiga o'tish
cd /var/www/halloff/data

# Git'dan clone qilish
git clone https://github.com/your-username/halloff.git .

# Yoki mavjud loyihani pull qilish
git pull origin main
```

### Variant 2: FTP/SFTP orqali
1. **FileZilla** yoki **WinSCP** ishlatib ulanish
2. Barcha fayllarni `/var/www/halloff/data` ga yuklash
3. **MUHIM:** `node_modules` va `.next` papkalarini yuklamaslik!

## 4. Loyihani build qilish

```bash
# SSH orqali serverga ulanish
ssh user@your-server-ip

# Loyiha katalogiga o'tish
cd /var/www/halloff/data/docs-website

# Dependencies o'rnatish
npm install --production

# Production build
npm run build

# Build muvaffaqiyatli bo'lganini tekshirish
ls -la .next
```

## 5. Database'ni sozlash

```bash
# MySQL'ga kirish
mysql -u halloff_db -p halloff_db

# SQL fayllarni import qilish
mysql -u halloff_db -p halloff_db < setup-database.sql
mysql -u halloff_db -p halloff_db < setup-access-codes.sql
mysql -u halloff_db -p halloff_db < setup-payments.sql
```

## 6. PM2 bilan ishga tushirish

### PM2 o'rnatish
```bash
npm install -g pm2
```

### Loyihani ishga tushirish
```bash
cd /var/www/halloff/data/docs-website

# PM2 bilan ishga tushirish
pm2 start npm --name "halloff" -- start

# Avtomatik restart sozlash
pm2 startup
pm2 save

# Statusni tekshirish
pm2 status
pm2 logs halloff
```

## 7. Nginx Reverse Proxy sozlash

ISPmanager'da Nginx konfiguratsiyasi:

```nginx
server {
    listen 80;
    server_name halloff.uz www.halloff.uz;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 8. SSL sertifikat o'rnatish (Let's Encrypt)

```bash
# ISPmanager'da
# Veb-saytlar → halloff.uz → SSL → Let's Encrypt → Olish
```

Yoki qo'lda:
```bash
# Certbot o'rnatish
apt-get install certbot python3-certbot-nginx

# SSL olish
certbot --nginx -d halloff.uz -d www.halloff.uz

# Avtomatik yangilanish
certbot renew --dry-run
```

## 9. Xavfsizlik sozlamalari

### Firewall
```bash
# Faqat kerakli portlarni ochish
ufw allow 22    # SSH
ufw allow 80    # HTTP
ufw allow 443   # HTTPS
ufw enable
```

### Environment variables xavfsizligi
```bash
# .env.production faylini himoya qilish
chmod 600 .env.production
chown www-data:www-data .env.production
```

## 10. Monitoring va Logs

### PM2 logs
```bash
pm2 logs halloff
pm2 monit
```

### Nginx logs
```bash
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

## 11. Yangilanishlar

```bash
# Serverga ulanish
ssh user@your-server-ip

# Loyiha katalogiga o'tish
cd /var/www/halloff/data/docs-website

# Yangi kodlarni olish
git pull origin main

# Dependencies yangilash
npm install --production

# Qayta build qilish
npm run build

# PM2'ni restart qilish
pm2 restart halloff
```

## 12. Muammolarni hal qilish

### Port band bo'lsa
```bash
# 3000 portda ishlovchi jarayonni topish
lsof -i :3000

# Jarayonni to'xtatish
kill -9 <PID>
```

### Build xatolari
```bash
# Cache'ni tozalash
rm -rf .next
npm run build
```

### Database ulanish xatolari
```bash
# MySQL ishlab turganini tekshirish
systemctl status mysql

# MySQL'ni qayta ishga tushirish
systemctl restart mysql
```

## 13. Performance optimizatsiya

### Next.js Image optimization
```javascript
// next.config.ts
module.exports = {
  images: {
    domains: ['halloff.uz'],
    formats: ['image/avif', 'image/webp'],
  },
}
```

### Gzip compression (Nginx)
```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/json;
```

## 14. Backup strategiyasi

```bash
# Database backup
mysqldump -u halloff_db -p halloff_db > backup_$(date +%Y%m%d).sql

# Fayllar backup
tar -czf backup_files_$(date +%Y%m%d).tar.gz /var/www/halloff/data

# Cron job (har kuni 3:00 da)
0 3 * * * /path/to/backup-script.sh
```

## Foydali havolalar
- Next.js Production: https://nextjs.org/docs/deployment
- PM2 Documentation: https://pm2.keymetrics.io/
- ISPmanager: https://docs.ispsystem.com/
