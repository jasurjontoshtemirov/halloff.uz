# ISPmanager bilan sozlash

## 1. Database User yaratish

ISPmanager'da:

1. **Databases** > **MySQL databases** ga o'ting
2. `halloff_db` database'ini tanlang
3. **Users** tab'ga o'ting
4. **Add user** tugmasini bosing
5. Ma'lumotlarni kiriting:
   - Username: `halloff_user`
   - Password: kuchli parol yarating (masalan: `HalloffDB2024!`)
   - Privileges: **ALL PRIVILEGES** ni tanlang
6. **Save** tugmasini bosing

## 2. .env.local faylini yangilash

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=halloff_user
DB_PASSWORD=HalloffDB2024!
DB_NAME=halloff_db
```

## 3. Database'ni sozlash

### Variant 1: phpMyAdmin orqali

1. ISPmanager'da **phpMyAdmin** ni oching
2. `halloff_db` ni tanlang
3. **SQL** tab'ga o'ting
4. `setup-database.sql` faylini oching va SQL kodni nusxalang
5. **Go** tugmasini bosing

### Variant 2: MySQL command line orqali

```bash
mysql -u halloff_user -p halloff_db < setup-database.sql
```

### Variant 3: API orqali (server ishga tushgandan keyin)

Brauzerda oching:
```
http://localhost:3000/api/init-db
```

Yoki:
```
http://your-domain.com/api/init-db
```

## 4. Test qilish

1. Serverni ishga tushiring: `npm run dev`
2. `/auth/login` ga o'ting
3. Admin hisobi bilan kiring:
   - Email: `k6yd2007@gmail.com`
   - Parol: `@Qwer1234`
4. Admin panelga kiring

## 5. Production deployment

### Build qilish:

```bash
npm run build
```

### ISPmanager'da Node.js sozlash:

1. **Web** > **Node.js** ga o'ting
2. **Create application** tugmasini bosing
3. Ma'lumotlarni kiriting:
   - Node.js version: 20.x
   - Application root: `/home/username/halloff`
   - Application URL: `yourdomain.com`
   - Startup file: `npm start`
4. **Environment variables** qo'shing:
   ```
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=halloff_user
   DB_PASSWORD=HalloffDB2024!
   DB_NAME=halloff_db
   JWT_SECRET=your-super-secret-key
   NODE_ENV=production
   ```
5. **Create** tugmasini bosing

### Serverni ishga tushirish:

```bash
npm run start
```

## 6. Troubleshooting

### Connection refused:

MySQL service ishga tushirilganligini tekshiring:
```bash
systemctl status mysql
```

### Access denied:

User privileges tekshiring:
```sql
SHOW GRANTS FOR 'halloff_user'@'localhost';
```

### Table doesn't exist:

Database'ni qayta initialize qiling:
```
http://localhost:3000/api/init-db
```

## 7. Backup

### Backup olish:

```bash
mysqldump -u halloff_user -p halloff_db > backup_$(date +%Y%m%d).sql
```

### Restore qilish:

```bash
mysql -u halloff_user -p halloff_db < backup_20241122.sql
```

## 8. Xavfsizlik

- ✅ Kuchli parollar ishlating
- ✅ Database user'ga faqat kerakli privileges bering
- ✅ Firewall sozlang
- ✅ SSL/TLS ishlating
- ✅ Regular backup oling
- ✅ .env.local faylini git'ga qo'shmang

## 9. Monitoring

ISPmanager'da database monitoring:
- **Databases** > **MySQL databases** > **Statistics**
- Disk usage
- Connection count
- Query performance

## 10. Yordam

Agar muammo bo'lsa:
1. ISPmanager logs tekshiring
2. MySQL error log: `/var/log/mysql/error.log`
3. Application logs: `npm run dev` output
4. Database connection test: `http://localhost:3000/api/init-db`
