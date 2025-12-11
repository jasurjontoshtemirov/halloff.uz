# Server Deployment Steps

## 1. Pull changes
```bash
cd /home/kh_5241/www/halloff.uz
git pull origin main
```

## 2. Install & Build
```bash
npm install
npm run build
```

## 3. Initialize Database
```bash
curl http://localhost:3001/api/init-db
```

## 4. Restart PM2
```bash
pm2 restart halloff
pm2 logs halloff
```

## Admin Accounts
- k6yd2007@gmail.com / @Qwer1234
- admin@halloff.uz / admin123