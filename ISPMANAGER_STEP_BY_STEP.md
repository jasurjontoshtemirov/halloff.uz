# ISPmanager'da halloff.uz ni ishga tushirish

## Serverda bajariladigan buyruqlar

SSH orqali serverga ulaning va quyidagi buyruqlarni ketma-ket bajaring:

---

### 1. Loyiha papkasini toping
```bash
# Agar bilmasangiz, qidiring:
find /home -name "halloff" -type d 2>/dev/null
# yoki
find /var/www -name "halloff" -type d 2>/dev/null
```

**Natijani menga yuboring!**

---

### 2. Papkaga o'ting
```bash
# Masalan (o'z papkangizni yozing):
cd /home/your-username/halloff/docs-website
# yoki
cd /var/www/halloff/data/docs-website

# Papka ichidagi fayllarni ko'ring:
ls -la
```

**package.json borligini tekshiring!**

---

### 3. Node.js va NPM tekshirish
```bash
node --version
npm --version
```

**Agar Node.js 18+ bo'lmasa, yangilash kerak!**

---

### 4. Dependencies o'rnatish
```bash
npm install
```

**Xatolik bo'lsa, menga yuboring!**

---

### 5. Build qilish
```bash
npm run build
```

**Bu 1-2 daqiqa davom etadi. Xatolik bo'lsa, to'liq natijani yuboring!**

---

### 6. PM2 o'rnatish (agar yo'q bo'lsa)
```bash
npm install -g pm2
pm2 --version
```

---

### 7. Loyihani ishga tushirish
```bash
# Eski jarayonni o'chirish (agar bor bo'lsa)
pm2 delete halloff

# Yangi jarayonni boshlash
pm2 start npm --name "halloff" -- start

# Statusni ko'rish
pm2 status

# Logsni ko'rish
pm2 logs halloff --lines 30
```

**PM2 status va logs natijasini menga yuboring!**

---

### 8. Port tekshirish
```bash
# 3001 portda ishlab turganini tekshiring:
curl http://localhost:3001

# yoki
lsof -i :3001
```

**Agar "Cannot GET /" yoki HTML ko'rsatsa - ISHLAYAPTI! ✅**

---

### 9. Nginx sozlash

#### A. Nginx config faylini yaratish
```bash
sudo nano /etc/nginx/sites-available/halloff.uz
```

Quyidagini yozing:
```nginx
server {
    listen 80;
    server_name halloff.uz www.halloff.uz;

    location / {
        proxy_pass http://localhost:3001;
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

Saqlash: `Ctrl+X` → `Y` → `Enter`

#### B. Config'ni faollashtirish
```bash
sudo ln -s /etc/nginx/sites-available/halloff.uz /etc/nginx/sites-enabled/

# Nginx config'ni tekshirish
sudo nginx -t

# Nginx'ni restart qilish
sudo systemctl restart nginx
```

---

### 10. Firewall (agar kerak bo'lsa)
```bash
# 80 va 443 portlarni ochish
sudo ufw allow 80
sudo ufw allow 443
sudo ufw status
```

---

### 11. Test qilish
```bash
# Local'da test
curl http://localhost:3001

# Domen orqali test
curl http://halloff.uz
```

---

### 12. SSL o'rnatish (HTTPS)
```bash
# Certbot o'rnatish
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# SSL olish
sudo certbot --nginx -d halloff.uz -d www.halloff.uz
```

---

## ✅ Tayyor!

Saytingiz: **https://halloff.uz**

---

## 🐛 Agar ishlamasa

### PM2 logs ko'ring:
```bash
pm2 logs halloff --lines 50
```

### Nginx logs ko'ring:
```bash
sudo tail -f /var/log/nginx/error.log
```

### Port band bo'lsa:
```bash
lsof -i :3001
# Jarayonni o'chirish:
kill -9 <PID>
```

---

## Menga yuboring:

1. `pm2 status` natijasi
2. `pm2 logs halloff` natijasi
3. `curl http://localhost:3001` natijasi
4. Qanday xatolik ko'rsatyapti?

Shunda men aniq yordam bera olaman! 🚀
