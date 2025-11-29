# 🚀 Git va GitHub Setup

## 1️⃣ GitHub'da repository yaratish

1. https://github.com ga kiring
2. **"New repository"** tugmasini bosing
3. Repository nomi: `halloff`
4. **Private** tanlang (yoki Public)
5. **"Create repository"** tugmasini bosing

## 2️⃣ Local'dan GitHub'ga yuklash

```bash
# GitHub repository URL'ini qo'shish
git remote add origin https://github.com/YOUR_USERNAME/halloff.git

# Asosiy branch'ni main qilish
git branch -M main

# GitHub'ga push qilish
git push -u origin main
```

**Masalan:**
```bash
git remote add origin https://github.com/jasurjon/halloff.git
git branch -M main
git push -u origin main
```

## 3️⃣ Serverda Git setup

SSH orqali serverga ulanish:
```bash
ssh u5241@142.132.219.117
# yoki
ssh u5241@halloff.uz
```

Serverda:
```bash
# Katalogga o'tish
cd /www/halloff.uz

# Git'dan clone qilish
git clone https://github.com/YOUR_USERNAME/halloff.git .

# Yoki agar private bo'lsa, SSH key kerak
```

## 4️⃣ Keyingi yangilanishlar

### Local'da (kompyuteringizda):
```bash
cd docs-website

# O'zgarishlarni ko'rish
git status

# Barcha o'zgarishlarni qo'shish
git add .

# Commit qilish
git commit -m "Yangilanish tavsifi"

# GitHub'ga yuklash
git push origin main
```

### Serverda:
```bash
ssh u5241@halloff.uz

cd /www/halloff.uz

# GitHub'dan yangilanishlarni olish
git pull origin main

# Dependencies yangilash (agar package.json o'zgardi)
npm install --production

# Qayta build qilish
npm run build

# PM2'ni restart qilish
pm2 restart halloff
```

## 5️⃣ Avtomatik deploy script

Serverda `deploy.sh` faylini ishlatish:
```bash
cd /www/halloff.uz
chmod +x deploy.sh
./deploy.sh
```

Bu script avtomatik:
- Git pull qiladi
- npm install qiladi
- Build qiladi
- PM2'ni restart qiladi

## 6️⃣ .gitignore

Quyidagilar Git'ga yuklanmaydi:
- `node_modules/`
- `.next/`
- `.env*`
- `logs/`

## 7️⃣ GitHub Personal Access Token (agar private repo bo'lsa)

1. GitHub → Settings → Developer settings → Personal access tokens
2. **"Generate new token (classic)"**
3. Scope: `repo` (full control)
4. Token'ni nusxalash

Serverda:
```bash
git clone https://YOUR_TOKEN@github.com/YOUR_USERNAME/halloff.git .
```

## 8️⃣ SSH Key setup (tavsiya etiladi)

Serverda:
```bash
# SSH key yaratish
ssh-keygen -t ed25519 -C "your_email@example.com"

# Public key'ni ko'rish
cat ~/.ssh/id_ed25519.pub
```

GitHub'da:
1. Settings → SSH and GPG keys → New SSH key
2. Public key'ni qo'shish

Keyin:
```bash
git clone git@github.com:YOUR_USERNAME/halloff.git .
```

---

## ✅ Tayyor!

Endi kompyuteringizda o'zgartirganingizni:
1. `git add .`
2. `git commit -m "message"`
3. `git push`

Serverda:
1. `ssh u5241@halloff.uz`
2. `cd /www/halloff.uz`
3. `./deploy.sh`

🎉 Yangilanish tayyor!
