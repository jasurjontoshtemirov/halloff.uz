# Deployment Guide - Halloff.uz

## Server Setup Commands

### 1. Pull latest changes
```bash
cd /home/kh_5241/www/halloff.uz
git pull origin main
```

### 2. Install dependencies
```bash
npm install
```

### 3. Build the application
```bash
npm run build
```

### 4. Initialize database (first time only)
```bash
# Test database connection
curl http://localhost:3001/api/init-db
```

### 5. Start with PM2
```bash
# Stop existing process
pm2 stop halloff

# Start new process
pm2 start npm --name "halloff" -- start

# Save PM2 configuration
pm2 save
```

### 6. Ch``-lines 50
`gs halloff -pm2 los
etailed log

# View drt halloffstaM2
pm2 reart PRest``bash
# 2 Issues
`## PM``

#uild
`t
npm run bexd
rm -rf .nand rebuilache 
# Clear chas
```bd Errorsil
### Bu
```
f_db-p hallofdb loff_ql -u hal
mys manuallyionect connql

# Test mysmctl status
systerviceSQL se# Check My
```bash
ion Issuesnectse ConDataba## ting

#ooshrouble

## Tdmin/usersff.uz/aallo://h panel: httpck adminhe
4. C with admint or loginounster new acc
3. Regiogino lrect t should redish" -oshla"Bick 2. Clf.uz
/hallofttp:/. Visit: hsting

13

## Tez / admin12ff.uallomin@h adt Admin**:es*Tr1234
2. *om / @Qwe007@gmail.c k6yd2min**: **Main Ad

1.created:ll be nts wicouadmin ac these tion,aliza initier databasents

AftAccoun Admi Default 
```

##4-productiont-key-202ecret-jwloff-super-sT=hal_SECREb
JWTE=halloff_dDB_NAMr1234
SWORD=@Qweb
DB_PAS_dfflo=hal
DB_USERPORT=3306st
DB_T=localho_HOSction
DBhis-in-produe-ty-2024-changkeon-t-productiecre-super-salloffTH_SECRET=h.uz
NEXTAUffttp://halloURL=h
NEXTAUTH_v`en

``cal`:.lon `.envet ithese are ske sure quired

Maariables Ret Vironmen
## Envoff
```
m2 logs hall status
p
pm2```bashtus
eck sta