# Vercel'ga Deploy qilish (ENG OSON USUL)

## Nima uchun Vercel?
- ✅ **Bepul** (hobby plan)
- ✅ **5 daqiqada** deploy
- ✅ **Avtomatik SSL** (HTTPS)
- ✅ **Avtomatik deploy** (Git push qilsangiz)
- ✅ **Next.js uchun** maxsus optimizatsiya
- ✅ **O'z domeningizni** ulash mumkin

---

## Qadamma-qadam

### 1. GitHub'ga yuklash

```bash
cd docs-website

# Git init (agar qilmagan bo'lsangiz)
git init
git add .
git commit -m "Initial commit"

# GitHub'ga push
git remote add origin https://github.com/your-username/halloff.git
git branch -M main
git push -u origin main
```

### 2. Vercel'ga ro'yxatdan o'tish

1. https://vercel.com ga o'ting
2. **Sign Up** → **Continue with GitHub**
3. GitHub hisobingiz bilan kiring

### 3. Loyihani import qilish

1. Vercel dashboard'da **Add New** → **Project**
2. GitHub'dan `halloff` repositoriyasini tanlang
3. **Import** tugmasini bosing

### 4. Sozlamalar

**Root Directory:** `docs-website` ni tanlang

**Environment Variables** qo'shing:
```
NEXTAUTH_URL=https://your-project.vercel.app
NEXTAUTH_SECRET=your-secret-key
DB_HOST=your-db-host
DB_PORT=3306
DB_USER=halloff_db
DB_PASSWORD=your-password
DB_NAME=halloff_db
JWT_SECRET=your-jwt-secret
```

### 5. Deploy!

**Deploy** tugmasini bosing va 2-3 daqiqa kuting.

### 6. O'z domeningizni ulash (ixtiyoriy)

1. Vercel dashboard → **Settings** → **Domains**
2. `halloff.uz` ni qo'shing
3. DNS sozlamalarini yangilang:
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`
   
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

---

## ✅ Tayyor!

Saytingiz: `https://your-project.vercel.app`

Har safar GitHub'ga push qilsangiz, avtomatik deploy bo'ladi! 🚀
