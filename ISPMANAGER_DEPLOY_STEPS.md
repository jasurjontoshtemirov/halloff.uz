# ISPmanager'da ishga tushirish - Qadamma-qadam

## 1️⃣ Fayllarni serverga yuklash

### FTP/SFTP orqali:
1. **FileZilla** yoki **WinSCP** ochib, ISPmanager ma'lumotlari bilan ulanish
2. Serverda papka yarating: `/home/your-username/halloff`
3. Barcha loyiha fayllarini yuklang (node_modules va .next dan tashqari)

### Yoki Git orqali (tavsiya):
```bash
ssh your-username@your-server-ip
cd /home/your-username
git clone https://github.com/your-repo/halloff.git
```

---

## 2️⃣ Node.js va dependencies o'rnatish

SSH orqali serverga ulanib:

```bash
# Loyiha papkasiga o'tish
cd /home/your-username/halloff/docs-website

# Node.js versiyasini tekshirish (18+ bo'lishi kerak)
node --version

# Dependencies o'rnatish
npm install --production

# Build qilish
npm run build
```

---

## 3️⃣ Database sozlash

### ISPmanager'da MySQL database yaratish:
1. **Databases** → **MySQL databases** → **Create**
2. Database nomi: `halloff_db`
3. User: `halloff_db`
4. Parol: kuchli parol yarating (masalan: `HalloffDB2024!`)

### SQL fayllarni import qilish:
```bash
# SSH orqali
cd /home/your-username/halloff/docs-website

mysql -u halloff_db -p halloff_db < setup-database.sql
mysql -u halloff_db -p halloff_db < setup-access-codes.sql
mysql -u halloff_db -p halloff_db < setup-payments.sql
```

Yoki **phpMyAdmin** orqali:
1. ISPmanager → **phpMyAdmin**
2. `halloff_db` ni tanlang
3. **Import** → SQL fayllarni yuklang

---

## 4️⃣ Environment variables sozlash

`.env.production` faylini tahrirlang:

```bash
nano .env.production
```

Quyidagilarni to'ldiring:
```env
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-random-secret-key-here

DB_HOST=localhost
DB_PORT=3306
DB_USER=halloff_db
DB_PASSWORD=HalloffDB2024!
DB_NAME=halloff_db

JWT_SECRET=your-jwt-secret-here
NODE_ENV=production
```

---

## 5️⃣ PM2 bilan ishga tushirish

### PM2 o'rnatish:
```bash
npm install -g pm2
```

### Loyihani ishga tushirish:
```bash
cd /home/your-username/halloff/docs-website

# PM2 bilan ishga tushirish
pm2 start npm --name "halloff" -- start

# Avtomatik restart sozlash (server qayta ishga tushganda)
pm2 startup
pm2 save

# Statusni tekshirish
pm2 status
pm2 logs halloff
```

---

## 6️⃣ ISPmanager'da Nginx sozlash

### Variant 1: ISPmanager UI orqali
1. **Websites** → **Create website**
2. Domain: `your-domain.com`
3. **Nginx settings** → **Additional directives**:

```nginx
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
```

### Variant 2: SSH orqali
```bash
nano /etc/nginx/sites-available/halloff.conf
```

Quyidagini qo'shing:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Nginx'ni restart qiling:
```bash
nginx -t
systemctl restart nginx
```

---

## 7️⃣ SSL sertifikat (HTTPS)

### ISPmanager orqali:
1. **Websites** → Saytingizni tanlang
2. **SSL** → **Let's Encrypt** → **Issue**

### Yoki SSH orqali:
```bash
apt-get install certbot python3-certbot-nginx
certbot --nginx -d your-domain.com -d www.your-domain.com
```

---

## 8️⃣ Tekshirish

1. Brauzerda oching: `https://your-domain.com`
2. Login sahifasiga o'ting: `/auth/login`
3. Admin hisobi:
   - Email: `k6yd2007@gmail.com`
   - Parol: `@Qwer1234`

---

## 🔄 Yangilanishlar (keyinchalik)

```bash
cd /home/your-username/halloff/docs-website
git pull origin main
npm install --production
npm run build
pm2 restart halloff
```

---

## 🐛 Muammolarni hal qilish

### Port band bo'lsa:
```bash
lsof -i :3001
kill -9 <PID>
```

### PM2 ishlamasa:
```bash
pm2 delete halloff
pm2 start npm --name "halloff" -- start
```

### Database ulanish xatosi:
```bash
# MySQL ishlab turganini tekshirish
systemctl status mysql

# Qayta ishga tushirish
systemctl restart mysql
```

### Logs ko'rish:
```bash
pm2 logs halloff
tail -f /var/log/nginx/error.log
```

---

## ✅ Tayyor!

Saytingiz endi ishlab turibdi: **https://your-domain.com** 🎉
