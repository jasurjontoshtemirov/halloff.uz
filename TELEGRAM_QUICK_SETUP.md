# Telegram Bot - Tezkor Sozlash

## 🚀 5 daqiqada sozlash

### 1️⃣ Telegram Bot yaratish

1. Telegram'da **@BotFather** ni oching
2. `/newbot` yuboring
3. Bot nomini kiriting: `Halloff Subscription Bot`
4. Username kiriting: `halloff_sub_bot` (yoki boshqa unique nom)
5. Token oling (masalan: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`)

### 2️⃣ Chat ID olish

1. Telegram'da **@userinfobot** ni oching
2. `/start` yuboring
3. Sizning ID'ingizni ko'rsatadi (masalan: `123456789`)

### 3️⃣ .env.local fayliga qo'shing

Faylni oching: `docs-website/.env.local`

Quyidagilarni o'zgartiring:
```env
# Telegram Bot (Obuna xabarlari uchun)
TELEGRAM_BOT_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
TELEGRAM_CHAT_ID=123456789
```

**MUHIM:** `your_telegram_bot_token_here` va `your_telegram_chat_id_here` ni o'z ma'lumotlaringizga almashtiring!

### 4️⃣ Serverni qayta ishga tushiring

Terminal'da:
```bash
# Ctrl+C bilan to'xtating
# Keyin qayta ishga tushiring:
npm run dev
```

### 5️⃣ Test qiling

1. Saytga kiring: http://localhost:3000/auth/login
2. Login qiling: `admin@halloff.uz` / `admin123`
3. "Obuna bo'lish" tugmasini bosing
4. **Telegram'ingizga xabar kelishi kerak!** 📱

---

## ✅ Xabar ko'rinishi:

```
🔔 Yangi obuna so'rovi!

👤 Foydalanuvchi:
   • Ism: Admin
   • Email: admin@halloff.uz
   • ID: 1

💳 To'lov ID: PAY_1234567890_1
💰 Summa: 10,000 so'm

📝 Admin panelda tasdiqlang:
http://localhost:3000/admin/subscriptions
```

---

## ❌ Agar xabar kelmasa:

### Console'ni tekshiring:
Terminal'da quyidagilarni ko'ring:
```
📱 Telegram xabar yuborilmoqda...
✅ Telegram xabar yuborildi!
```

Agar `❌ Telegram xabar yuborilmadi` ko'rsatsa:
- Token to'g'ri emasligini bildiradi
- Chat ID to'g'ri emasligini bildiradi

### Token va Chat ID'ni qayta tekshiring:

1. **Token test qilish:**
   Browser'da oching:
   ```
   https://api.telegram.org/bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11/getMe
   ```
   (O'z tokeningizni qo'ying)
   
   Agar `"ok":true` ko'rsatsa - token to'g'ri ✅

2. **Chat ID test qilish:**
   - @userinfobot'dan qayta oling
   - Raqamlar faqat (harflar yo'q)

3. **.env.local'ni saqlashni unutmang!**
   - Faylni o'zgartirgandan keyin `Ctrl+S` bosing
   - Serverni qayta ishga tushiring

---

## 🎯 Qisqacha:

```bash
# 1. Bot yarating
@BotFather → /newbot

# 2. Chat ID oling  
@userinfobot → /start

# 3. .env.local'ga qo'shing
TELEGRAM_BOT_TOKEN=sizning_tokeningiz
TELEGRAM_CHAT_ID=sizning_chat_id

# 4. Qayta ishga tushiring
npm run dev

# 5. Test qiling
Login → Obuna bo'lish → Telegram'da xabar! 🎉
```

---

**Tayyor!** Endi har safar kimdir obuna bo'lsa, sizning Telegram'ingizga xabar keladi! 📱✨
