# Netlify'ga halloff.uz ni deploy qilish

## 1️⃣ GitHub'ga yuklash

Local kompyuterda (bu papkada):

```bash
git add .
git commit -m "Netlify uchun tayyor"
git push origin main
```

---

## 2️⃣ Netlify'ga ro'yxatdan o'tish

1. https://netlify.com ga o'ting
2. **Sign up** tugmasini bosing
3. **GitHub** bilan kiring (yoki Email bilan)

---

## 3️⃣ Loyihani import qilish

1. Netlify dashboard'da **Add new site** tugmasini bosing
2. **Import an existing project** ni tanlang
3. **Deploy with GitHub** ni bosing
4. GitHub'dan **halloff** repositoriyasini tanlang
5. **Authorize Netlify** ga ruxsat bering

---

## 4️⃣ Sozlamalar

### Site settings:
- **Base directory:** `docs-website`
- **Build command:** `npm run build`
- **Publish directory:** `.next`

### Environment variables qo'shing:

**Site configuration** → **Environment variables** → **Add a variable**

```
NEXTAUTH_URL = https://halloff.uz
NEXTAUTH_SECRET = halloff-production-secret-key-2024
DB_HOST = localhost
DB_PORT = 3306
DB_USER = halloff_db
DB_PASSWORD = @Qwer1234
DB_NAME = halloff_db
JWT_SECRET = halloff-jwt-production-secret-2024
NODE_ENV = production
```

---

## 5️⃣ Deploy qilish

**Deploy site** tugmasini bosing va 2-3 daqiqa kuting.

Netlify sizga domen beradi: `https://your-site-name.netlify.app`

---

## 6️⃣ halloff.uz domenini ulash

### A. Netlify'da:

1. **Site settings** → **Domain management**
2. **Add custom domain** tugmasini bosing
3. `halloff.uz` ni kiriting
4. **Verify** tugmasini bosing

### B. DNS sozlamalari (domeningiz qayerda bo'lsa):

Domeningiz qayerda sotib olingan? (Masalan: reg.ru, beget.com, va h.k.)

U yerda DNS sozlamalariga o'ting va quyidagilarni qo'shing:

#### Variant 1: A Record (tavsiya)
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 3600
```

```
Type: CNAME
Name: www
Value: your-site-name.netlify.app
TTL: 3600
```

#### Variant 2: CNAME (oddiyroq)
```
Type: CNAME
Name: @
Value: your-site-name.netlify.app
TTL: 3600
```

```
Type: CNAME
Name: www
Value: your-site-name.netlify.app
TTL: 3600
```

---

## 7️⃣ SSL (HTTPS) avtomatik

Netlify avtomatik ravishda **Let's Encrypt SSL** o'rnatadi.

5-10 daqiqadan keyin `https://halloff.uz` ishlaydi! 🎉

---

## 8️⃣ Avtomatik deploy

Har safar GitHub'ga `git push` qilsangiz, Netlify avtomatik deploy qiladi!

---

## ✅ Tayyor!

- 🌐 Saytingiz: **https://halloff.uz**
- 🔒 HTTPS: Avtomatik
- 🚀 Deploy: Avtomatik (git push qilsangiz)
- 💰 Narx: **BEPUL!**

---

## 🐛 Muammolar

### Agar domen ishlamasa:

1. DNS sozlamalarni tekshiring (24 soatgacha vaqt ketishi mumkin)
2. Netlify'da **Verify DNS configuration** tugmasini bosing
3. `nslookup halloff.uz` buyrug'i bilan tekshiring

### Agar build xatosi bo'lsa:

1. Netlify dashboard → **Deploys** → **Deploy log**
2. Xatolikni ko'ring va tuzating
3. GitHub'ga qayta push qiling

---

## 📞 Yordam

Agar muammo bo'lsa, menga yuboring:
- Deploy log'ni
- DNS sozlamalar screenshot'ini
- Qanday xatolik ko'rsatyapti

Men yordam beraman! 💪
