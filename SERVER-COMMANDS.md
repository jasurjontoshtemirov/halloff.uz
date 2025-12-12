# Server Commands - ISPmanager

## 🔄 Yangi o'zgarishlarni serverga qo'llash

### Avtomatik usul (Tavsiya etiladi):
```bash
# SSH orqali serverga kiring
ssh root@your-server-ip

# Loyiha papkasiga o'ting
cd /var/www/halloff.uz/data/

# Update script ishga tushiring
chmod +x update-server.sh
./update-server.sh
```

### Manual usul:
```bash
# 1. Git'dan yangi o'zgarishlarni olish
git pull origin main

# 2. Dependencies yangilash
npm install --production

# 3. Application build qilish
npm run build

# 4. PM2 restart qilish
pm2 restart halloff

# Yoki to'liq reset:
pm2 delete halloff
npm run pm2:start
```

## 📊 Monitoring Commands

### PM2 boshqaruvi:
```bash
pm2 status              # Barcha jarayonlar holati
pm2 logs halloff        # Real-time loglar
pm2 restart halloff     # Graceful restart
pm2 stop halloff        # To'xtatish
pm2 delete halloff      # To'liq o'chirish
pm2 save                # Konfiguratsiyani saqlash
```

### Database monitoring:
```bash
# MySQL'ga kirish
mysql -u halloff_user -p

# Foydalanuvchilar soni
SELECT COUNT(*) as total_users FROM users;

# Aktiv sessiyalar
SELECT u.email, d.device_name, d.last_login, d.is_active 
FROM users u 
JOIN user_devices d ON u.id = d.user_id 
WHERE d.is_active = TRUE;

# Bugungi registratsiyalar
SELECT COUNT(*) as today_registrations 
FROM users 
WHERE DATE(created_at) = CURDATE();
```

### System monitoring:
```bash
# Server resurslari
htop                    # CPU va RAM
df -h                   # Disk space
free -h                 # Memory usage
netstat -tlnp | grep 3001  # Port holati
```

## 🔧 Troubleshooting

### Umumiy muammolar:

#### 1. Application ishlamayapti:
```bash
# PM2 statusni tekshiring
pm2 status

# Loglarni ko'ring
pm2 logs halloff --lines 50

# Qayta ishga tushiring
pm2 restart halloff
```

#### 2. Database connection error:
```bash
# .env.production faylini tekshiring
cat .env.production

# MySQL service holatini tekshiring
systemctl status mysql

# Database connection test
mysql -u halloff_user -p -e "SELECT 1"
```

#### 3. Port busy error:
```bash
# 3001 portni ishlatayotgan jarayonni topish
lsof -i :3001

# Jarayonni to'xtatish
kill -9 PID_NUMBER

# PM2 qayta ishga tushirish
pm2 restart halloff
```

#### 4. Build errors:
```bash
# Node modules tozalash
rm -rf node_modules package-lock.json
npm install --production

# Cache tozalash
npm run build -- --no-cache
```

#### 5. SSL certificate issues:
```bash
# Certificate holatini tekshiring
openssl x509 -in /path/to/certificate.crt -text -noout

# Nginx konfiguratsiyasini test qiling
nginx -t

# Nginx restart
systemctl restart nginx
```

## 🔄 Regular Maintenance

### Haftalik:
```bash
# Loglarni tozalash
pm2 flush

# System yangilanishlar
apt update && apt upgrade

# Backup tekshirish
ls -la /var/backups/halloff/
```

### Oylik:
```bash
# Eski backup fayllarni tozalash
find /var/backups/halloff/ -name "*.gz" -mtime +30 -delete

# Database optimization
mysql -u halloff_user -p -e "OPTIMIZE TABLE users, user_devices;"

# PM2 konfiguratsiyasini yangilash
pm2 save
```

## 📋 Useful Aliases

`.bashrc` fayliga qo'shing:
```bash
# Halloff shortcuts
alias halloff-status='pm2 status'
alias halloff-logs='pm2 logs halloff'
alias halloff-restart='pm2 restart halloff'
alias halloff-update='cd /var/www/halloff.uz/data && ./update-server.sh'
alias halloff-backup='cd /var/www/halloff.uz/data && ./backup.sh'
```

## 🚨 Emergency Commands

### Application to'liq restart:
```bash
pm2 delete halloff
cd /var/www/halloff.uz/data
npm run pm2:start
```

### Database backup (emergency):
```bash
mysqldump -u halloff_user -p halloff_db > emergency_backup_$(date +%Y%m%d_%H%M%S).sql
```

### Rollback to previous version:
```bash
git log --oneline -5  # Oxirgi commitlarni ko'rish
git reset --hard COMMIT_HASH
npm run build
pm2 restart halloff
```