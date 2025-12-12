# Halloff - Dasturlash Kurslari Platformasi

Zamonaviy va professional dasturlash kurslari platformasi. HTML, CSS va JavaScript darslarini o'rganing.

## 🚀 Ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda ochish: **http://localhost:3000**

⚠️ **Muhim:** Admin panel uchun faqat `localhost:3000` dan foydalaning. IP manzil (192.168.x.x) localStorage bilan ishlamaydi.

## 👤 Foydalanuvchi hisobi

### Oddiy foydalanuvchi
1. `/auth/signup` ga o'ting
2. Ro'yxatdan o'ting
3. Login qiling va darslarni ko'ring

### Admin hisobi
- **Email:** admin@halloff.uz
- **Parol:** admin123

Admin hisobi avtomatik yaratiladi va localStorage'da saqlanadi.

## 📚 Xususiyatlar

### Foydalanuvchilar uchun
- ✅ Ro'yxatdan o'tish va kirish
- ✅ HTML darslari (7 ta)
- ✅ CSS darslari (18 ta)
- ✅ JavaScript darslari (34+ ta)
- ✅ Video darslar (YouTube integratsiyasi)
- ✅ Qidiruv funksiyasi (Ctrl+K)
- ✅ Kod namunalari (syntax highlighting)

### Admin panel
- 👥 Foydalanuvchilarni boshqarish
- 📊 Statistika va hisobotlar
- 📝 Kontent boshqaruvi
- ⚙️ Sozlamalar
- 🗑️ Ma'lumotlar bazasini tozalash

## 🛠️ Texnologiyalar

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Syntax Highlighting:** Prism.js
- **Authentication:** Custom (localStorage)
- **Database:** LocalStorage

## 📁 Struktura

```
docs-website/
├── app/
│   ├── admin/          # Admin panel
│   ├── auth/           # Login/Signup
│   ├── docs/           # Darslar
│   └── page.tsx        # Bosh sahifa
├── components/         # Komponentlar
├── lib/               # Helper funksiyalar
└── public/            # Static fayllar
```

## 🔐 Authentication

Hozirda localStorage ishlatiladi. Production uchun:
- Database (PostgreSQL, MongoDB)
- NextAuth.js
- JWT tokens
- Password hashing (bcrypt)

## 📝 Admin panel

Admin panelga kirish:
1. `http://localhost:3000/auth/login`
2. Admin ma'lumotlari bilan kiring
3. Header'da "Admin" tugmasini bosing
4. Yoki `/admin` ga o'ting

## 🎨 Dizayn

- Dark mode
- Responsive design
- Modern UI/UX
- GitHub-style interface

## 📄 License

MIT License

## 👨‍💻 Developer

Halloff Team

## 🔒 Device Management (Qurilma Boshqaruvi)

Xavfsizlik uchun har bir foydalanuvchi faqat **1 ta qurilmada** login qila oladi.

### Qanday ishlaydi:
- Foydalanuvchi yangi qurilmadan login qilganda, eski qurilmadagi session avtomatik o'chiriladi
- Device fingerprint orqali qurilmalar aniqlanadi
- Har bir login vaqtida eski qurilmalar nofaol qilinadi

### Xususiyatlar:
- ✅ Avtomatik device detection
- ✅ Eski session'larni o'chirish
- ✅ Device fingerprinting
- ✅ Real-time session monitoring
- ✅ Xavfsiz logout

### Database Schema:
```sql
CREATE TABLE user_devices (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  device_name VARCHAR(255) NOT NULL,
  device_fingerprint VARCHAR(255) NOT NULL,
  user_agent TEXT,
  ip_address VARCHAR(45),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### API Endpoints:
- `POST /api/auth/check-device` - Device tekshirish
- `POST /api/auth/logout-device` - Device'ni logout qilish
- `GET /api/auth/devices` - Foydalanuvchi qurilmalarini olish
- `POST /api/auth/remove-device` - Qurilmani o'chirish
## 🚀 ISPmanager Server Deployment

### Quick Deployment Steps:

1. **Upload files** to ISPmanager File Manager
2. **Create MySQL database** in ISPmanager
3. **Configure environment** variables
4. **Run deployment script**

### Detailed Instructions:

#### 1. Server Preparation
```bash
# SSH orqali serverga kirish
ssh root@your-server-ip

# Node.js va PM2 o'rnatish (agar yo'q bo'lsa)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install -y nodejs
npm install -g pm2
```

#### 2. Database Setup
ISPmanager MySQL panelida:
- Database yarating: `halloff_db`
- User yarating: `halloff_user`
- Strong password o'rnating

#### 3. Environment Configuration
`.env.production` faylini yarating:
```bash
DB_HOST=localhost
DB_PORT=3306
DB_USER=halloff_user
DB_PASSWORD=YOUR_STRONG_PASSWORD
DB_NAME=halloff_db
NEXTAUTH_URL=https://halloff.uz
NEXTAUTH_SECRET=RANDOM_SECRET_STRING
JWT_SECRET=ANOTHER_RANDOM_SECRET
NODE_ENV=production
```

#### 4. Deployment
```bash
# Fayllarni yuklash
cd /var/www/halloff.uz/data/

# Deployment script ishga tushirish
chmod +x deploy.sh
./deploy.sh
```

#### 5. Nginx Configuration
```bash
# Nginx config faylini nusxalash
cp nginx.conf /etc/nginx/sites-available/halloff.uz
ln -s /etc/nginx/sites-available/halloff.uz /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

#### 6. SSL Certificate
ISPmanager SSL panelidan Let's Encrypt sertifikat o'rnating.

#### 7. Automated Backup
```bash
# Backup script sozlash
chmod +x backup.sh
crontab -e
# Quyidagi qatorni qo'shing:
# 0 2 * * * /var/www/halloff.uz/data/backup.sh
```

### Monitoring Commands:
```bash
# Application status
pm2 status
pm2 logs halloff

# Database monitoring
mysql -u halloff_user -p -e "SELECT COUNT(*) as users FROM halloff_db.users;"

# Active sessions
mysql -u halloff_user -p -e "
SELECT u.email, d.device_name, d.last_login 
FROM halloff_db.users u 
JOIN halloff_db.user_devices d ON u.id = d.user_id 
WHERE d.is_active = TRUE;"
```

### Troubleshooting:
- **Port conflicts**: Change port in package.json
- **Database errors**: Check credentials in .env.production
- **SSL issues**: Verify certificate paths in Nginx
- **Memory issues**: Restart PM2 or increase server RAM

### Performance Tips:
- Enable Nginx gzip compression
- Use PM2 cluster mode for high traffic
- Set up database indexing
- Monitor server resources regularly