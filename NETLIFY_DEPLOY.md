# Netlify'ga Deploy qilish

## Qadamma-qadam

### 1. GitHub'ga yuklash (Vercel'dagi kabi)

```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 2. Netlify'ga ro'yxatdan o'tish

1. https://netlify.com ga o'ting
2. **Sign Up** → **GitHub** bilan kiring

### 3. Deploy qilish

1. **Add new site** → **Import an existing project**
2. **GitHub** ni tanlang
3. Repositoriyangizni tanlang
4. Sozlamalar:
   - **Base directory:** `docs-website`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`

### 4. Environment Variables

**Site settings** → **Environment variables**:
```
NEXTAUTH_URL=https://your-site.netlify.app
NEXTAUTH_SECRET=your-secret
DB_HOST=your-db-host
DB_USER=halloff_db
DB_PASSWORD=your-password
DB_NAME=halloff_db
```

### 5. Deploy!

**Deploy site** tugmasini bosing.

---

## ✅ Tayyor!

Saytingiz: `https://your-site.netlify.app`
