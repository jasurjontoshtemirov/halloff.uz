# 🚀 Tezkor Deploy Qo'llanma

## ISPmanager'ga birinchi marta deploy qilish

### 1. ISPmanager'da tayyorgarlik (5 daqiqa)

```bash
# SSH orqali serverga ulanish
ssh root@your-server-ip

# Node.js o'rnatish (agar yo'q bo'lsa)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# PM2 o'rnatish
npm install -g pm2

# MySQL tekshirish
systemctl status mysql
```

### 2. Database yaratish (3 daqiqa)

```bash
# MySQL'ga kirish
mysql -u root -p

# Database va user yaratish
CREATE DATABASE halloff_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'halloff_db'@'localhost' IDENTIFIED BY 'YOUR_STRONG_PASSWORD';
GRANT ALL PRIVILEGES ON halloff_db.* TO 'halloff_db'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### 3. Loyihani yuklash (5 daqiqa)

```bash
# Katalog yaratish
mkdir -p /var/www/halloff/data
cd /var/www/halloff/data

# Git'dan clone qilish (agar GitHub'da bo'lsa)
git clone https://github.com/your-username/halloff.git .

# Yoki FTP orqali fayllarni yuklash
# FileZilla/WinSCP ishlatib barcha fayllarni yuklang
```

### 4. Environment sozlash (2 daqiqa)

```bash
cd /var/www/halloff/data/docs-website

# .env.production faylini tahrirlash
nano .env.production

# Quyidagilarni o'zgartiring:
# - DB_PASSWORD=your_actual_password
# - NEXTAUTH_SECRET=random_string_here
# - JWT_SECRET=another_random_string
```

### 5. Database'ni import qilish (2 daqiqa)

```bash
cd /var/www/halloff/data/docs-website

# SQL fayllarni import qilish
mysql -u halloff_db -p halloff_db < setup-database.sql
mysql -u halloff_db -p halloff_db < setup-access-codes.sql
mysql -u halloff_db -p halloff_db < setup-payments.sql
```

### 6. Build va ishga tushirish (5 daqiqa)

```bash
cd /var/www/halloff/data/docs-website

# Dependencies o'rnatish
npm install --production

# Build qilish
npm run build

# PM2 bilan ishga tushirish
pm2 start npm --name "halloff" -- start

# Avtomatik restart
pm2 startup
pm2 save

# Status tekshirish
pm2 status
pm2 logs halloff
```

### 7. Nginx sozlash (3 daqiqa)

```bash
# Nginx config yaratish
nano /etc/nginx/sites-available/halloff.uz
```

Quyidagi konfiguratsiyani kiriting:

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

```bash
# Symlink yaratish
ln -s /etc/nginx/sites-available/halloff.uz /etc/nginx/sites-enabled/

# Nginx test va restart
nginx -t
systemctl restart nginx
```

### 8. SSL o'rnatish (2 daqiqa)

```bash
# Certbot o'rnatish
apt-get install certbot python3-certbot-nginx

# SSL olish
certbot --nginx -d halloff.uz -d www.halloff.uz

# Avtomatik yangilanish test
certbot renew --dry-run
```

---

## ✅ Tayyor! Saytingiz ishlayapti

🌐 **Sayt:** https://halloff.uz

---

## Keyingi yangilanishlar uchun (1 daqiqa)

```bash
# Serverga ulanish
ssh root@your-server-ip

# Deploy script ishga tushirish
cd /var/www/halloff/data/docs-website
chmod +x deploy.sh
./deploy.sh
```

Yoki qo'lda:

```bash
cd /var/www/halloff/data/docs-website
git pull origin main
npm install --production
npm run build
pm2 restart halloff
```

---

## Foydali buyruqlar

```bash
# Logs ko'rish
pm2 logs halloff

# Status tekshirish
pm2 status

# Restart qilish
pm2 restart halloff

# To'xtatish
pm2 stop halloff

# O'chirish
pm2 delete halloff

# Database backup
mysqldump -u halloff_db -p halloff_db > backup_$(date +%Y%m%d).sql

# Nginx restart
systemctl restart nginx

# Nginx logs
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

---

## Muammolar va yechimlar

### Port band bo'lsa
```bash
lsof -i :3000
kill -9 <PID>
pm2 restart halloff
```

### Database ulanmasa
```bash
systemctl status mysql
systemctl restart mysql
mysql -u halloff_db -p halloff_db
```

### Build xatolari
```bash
rm -rf .next node_modules
npm install --production
npm run build
```

---

## Yordam kerak bo'lsa

📧 Email: k6yd2007@gmail.com
📱 Telegram: @jasurjontoshtemirov
