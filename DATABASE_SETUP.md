# Database Setup Guide

## ISPmanager bilan MySQL/MariaDB sozlash

### 1. ISPmanager'da Database yaratish

1. **ISPmanager**ga kiring
2. **Databases** > **MySQL databases** ga o'ting
3. **Create** tugmasini bosing
4. Database ma'lumotlarini kiriting:
   - Database name: `halloff_db`
   - User name: `halloff_user`
   - Password: kuchli parol yarating
5. **OK** tugmasini bosing

### 2. .env.local faylini sozlash

`.env.local` faylida database ma'lumotlarini yangilang:

```env
# Database (MySQL/MariaDB)
DB_HOST=localhost
DB_PORT=3306
DB_USER=halloff_user
DB_PASSWORD=your_database_password_here
DB_NAME=halloff_db

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### 3. Database'ni initialize qilish

Serverni ishga tushiring:

```bash
npm run dev
```

Database avtomatik yaratiladi va admin foydalanuvchilar qo'shiladi.

### 4. Database strukturasi

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('user', 'admin') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 5. Default admin hisoblar

Database initialize qilinganda avtomatik yaratiladi:

1. **Default Admin:**
   - Email: admin@halloff.uz
   - Parol: admin123

2. **Main Admin:**
   - Email: k6yd2007@gmail.com
   - Parol: @Qwer1234

### 6. Production deployment

#### ISPmanager'da Node.js sozlash:

1. **Web** > **Node.js** ga o'ting
2. **Create** tugmasini bosing
3. Ma'lumotlarni kiriting:
   - Node.js version: 18 yoki 20
   - Application root: `/path/to/docs-website`
   - Application URL: `yourdomain.com`
   - Application startup file: `npm run start`
4. Environment variables qo'shing (.env.local dan)
5. **OK** tugmasini bosing

#### Build qilish:

```bash
npm run build
npm run start
```

### 7. Xavfsizlik

Production uchun:
- ✅ Kuchli parollar ishlating
- ✅ JWT_SECRET ni o'zgartiring
- ✅ HTTPS ishlating
- ✅ Database backup qiling
- ✅ Rate limiting qo'shing
- ✅ CORS sozlang

### 8. Troubleshooting

#### Database connection error:

```bash
# Database connection test
node -e "require('./lib/db').testConnection().then(console.log)"
```

#### Port allaqachon ishlatilmoqda:

```bash
# Boshqa port ishlatish
PORT=3001 npm run dev
```

#### Permission denied:

ISPmanager'da file permissions tekshiring:
- Folders: 755
- Files: 644

### 9. Backup

Database backup olish:

```bash
mysqldump -u halloff_user -p halloff_db > backup.sql
```

Restore qilish:

```bash
mysql -u halloff_user -p halloff_db < backup.sql
```

### 10. Migration

LocalStorage'dan Database'ga o'tish:

1. Eski localStorage ma'lumotlarini export qiling
2. Database'ni sozlang
3. Ma'lumotlarni import qiling (admin panel > settings)
4. Test qiling
5. LocalStorage'ni tozalang
