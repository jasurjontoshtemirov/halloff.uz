# ISPmanager Server Setup Guide

## 1. Server Requirements
- Node.js 18+ 
- MySQL 8.0+
- PM2 (process manager)
- Nginx (reverse proxy)

## 2. Database Setup

### MySQL Database yaratish:
```sql
-- ISPmanager MySQL panelida:
CREATE DATABASE halloff_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'halloff_user'@'localhost' IDENTIFIED BY 'STRONG_PASSWORD_HERE';
GRANT ALL PRIVILEGES ON halloff_db.* TO 'halloff_user'@'localhost';
FLUSH PRIVILEGES;
```

### Environment Variables (.env.production):
```bash
# Database
DB_HOST=localhost
DB_PORT=3306
DB_USER=halloff_user
DB_PASSWORD=STRONG_PASSWORD_HERE
DB_NAME=halloff_db

# NextAuth
NEXTAUTH_URL=https://halloff.uz
NEXTAUTH_SECRET=RANDOM_SECRET_STRING_HERE

# JWT
JWT_SECRET=ANOTHER_RANDOM_SECRET_HERE

# Node
NODE_ENV=production
```

## 3. Deployment Steps

### 1. Upload files to server:
```bash
# ISPmanager File Manager orqali yoki FTP/SFTP
# Fayllarni /var/www/halloff.uz/data/ ga yuklang
```

### 2. Install dependencies:
```bash
cd /var/www/halloff.uz/data/
npm install --production
```

### 3. Build application:
```bash
npm run build
```

### 4. Database initialization:
```bash
# Database tables avtomatik yaratiladi birinchi ishga tushganda
node -e "
const { initDatabase } = require('./lib/db.ts');
initDatabase().then(() => {
  console.log('Database initialized');
  process.exit(0);
}).catch(err => {
  console.error('Database init error:', err);
  process.exit(1);
});
"
```

### 5. PM2 setup:
```bash
# PM2 install qilish
npm install -g pm2

# Application ishga tushirish
pm2 start npm --name "halloff" -- start

# Auto-restart setup
pm2 startup
pm2 save
```

## 4. Nginx Configuration

### /etc/nginx/sites-available/halloff.uz:
```nginx
server {
    listen 80;
    server_name halloff.uz www.halloff.uz;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name halloff.uz www.halloff.uz;

    ssl_certificate /path/to/ssl/certificate.crt;
    ssl_certificate_key /path/to/ssl/private.key;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 5. SSL Certificate
ISPmanager SSL panelidan Let's Encrypt yoki boshqa SSL sertifikat o'rnating.

## 6. Monitoring

### PM2 monitoring:
```bash
pm2 status
pm2 logs halloff
pm2 restart halloff
```

### Database monitoring:
```sql
-- Active connections
SHOW PROCESSLIST;

-- Device sessions
SELECT u.email, d.device_name, d.last_login, d.is_active 
FROM users u 
JOIN user_devices d ON u.id = d.user_id 
WHERE d.is_active = TRUE;
```

## 7. Backup Strategy

### Database backup:
```bash
# Daily backup script
mysqldump -u halloff_user -p halloff_db > backup_$(date +%Y%m%d).sql
```

### Files backup:
```bash
# Application files backup
tar -czf halloff_backup_$(date +%Y%m%d).tar.gz /var/www/halloff.uz/data/
```

## 8. Security Checklist

✅ Strong database passwords
✅ SSL certificate installed  
✅ Firewall configured (ports 80, 443, 22)
✅ Regular security updates
✅ Database access restricted to localhost
✅ Environment variables secured
✅ Single device login enforced

## 9. Performance Optimization

### PM2 cluster mode:
```bash
pm2 start npm --name "halloff" -i max -- start
```

### Nginx caching:
```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## 10. Troubleshooting

### Common issues:
- Database connection errors: Check credentials in .env.production
- Port conflicts: Change port in package.json
- SSL issues: Verify certificate paths in Nginx
- Memory issues: Increase server RAM or optimize queries

### Logs:
```bash
# Application logs
pm2 logs halloff

# Nginx logs
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log

# MySQL logs
tail -f /var/log/mysql/error.log
```