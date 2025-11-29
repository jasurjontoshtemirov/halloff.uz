# Telegram Bot Sozlash

## 📱 Telegram Bot yaratish

### 1. BotFather'ga boring
Telegram'da `@BotFather` ni toping va `/start` yuboring

### 2. Yangi bot yarating
```
/newbot
```

### 3. Bot nomini kiriting
```
Halloff Subscription Bot
```

### 4. Bot username'ini kiriting (unique bo'lishi kerak)
```
halloff_subscription_bot
```

### 5. Token oling
BotFather sizga token beradi, masalan:
```
1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
```

Bu tokenni `.env.local` fayliga qo'shing:
```env
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
```

---

## 👤 Chat ID olish

### 1. @userinfobot'ga boring
Telegram'da `@userinfobot` ni toping

### 2. `/start` yuboring
Bot sizga ma'lumotlaringizni yuboradi:
```
Id: 123456789
First name: Jasurjon
...
```

### 3. Chat ID'ni nusxalang
`Id: 123456789` - bu sizning chat ID'ingiz

`.env.local` fayliga qo'shing:
```env
TELEGRAM_CHAT_ID=123456789
```

---

## ✅ To'liq .env.local

```env
# Telegram Bot (Obuna xabarlari uchun)
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

---

## 🧪 Test qilish

### 1. Loyihani qayta ishga tushiring
```bash
npm run dev
```

### 2. Obuna bo'ling
- Login qiling
- "Obuna bo'lish" tugmasini bosing

### 3. Telegram'da xabar kelishini tekshiring
Sizga quyidagicha xabar kelishi kerak:
```
🔔 Yangi obuna so'rovi!

👤 Foydalanuvchi:
   • Ism: Test User
   • Email: test@example.com
   • ID: 1

💳 To'lov ID: PAY_1234567890_1
💰 Summa: 10,000 so'm

📝 Admin panelda tasdiqlang:
http://localhost:3000/admin/subscriptions
```

---

## 🎯 Qanday ishlaydi?

### 1. Foydalanuvchi obuna bo'ladi
```
/subscription → "Obuna bo'lish" tugmasi
```

### 2. Telegram'ga xabar yuboriladi
```
Sizning Telegram'ingizga xabar keladi
```

### 3. Foydalanuvchi pending sahifasida kutadi
```
/subscription/pending?id=PAY_123
```

### 4. Siz admin panelda tasdiqlaysiz
```
/admin/subscriptions → "Tasdiqlash" tugmasi
```

### 5. Obuna faollashadi (30 kun)
```
subscription_status = 'active'
subscription_end = +30 kun
```

### 6. Foydalanuvchi darslarni ko'ra oladi
```
Avtomatik /docs ga yo'naltiriladi
```

---

## 🔄 Obuna tugashi

### Avtomatik tekshirish
Har safar foydalanuvchi kirganida obuna tekshiriladi:

```javascript
if (subscription_end < new Date()) {
  // Obuna tugagan
  redirect('/subscription');
}
```

### Cron job (keyinroq qo'shish)
Har kuni obuna tugaganlarni tekshirish:
```javascript
// Har kuni 00:00 da
cron.schedule('0 0 * * *', async () => {
  // Obuna tugaganlarni topish
  const expired = await findExpiredSubscriptions();
  
  // Status'ni yangilash
  await updateSubscriptionStatus(expired, 'expired');
});
```

---

## 📊 Admin Panel

### Obunalar sahifasi
```
http://localhost:3000/admin/subscriptions
```

**Xususiyatlar:**
- ✅ Kutilayotgan to'lovlar
- ✅ Tasdiqlangan to'lovlar
- ✅ Jami daromad
- ✅ To'lovni tasdiqlash tugmasi
- ✅ Obuna tugash sanasi
- ✅ Avtomatik yangilanish (10 soniyada)

---

## 🚀 Production uchun

### 1. Real Telegram bot yarating
- Production bot alohida bo'lishi kerak
- Token'ni xavfsiz saqlang

### 2. Webhook sozlang (optional)
Tezroq ishlash uchun:
```javascript
await fetch(
  `https://api.telegram.org/bot${token}/setWebhook`,
  {
    method: 'POST',
    body: JSON.stringify({
      url: 'https://yourdomain.com/api/telegram/webhook'
    })
  }
);
```

### 3. Environment variables
Production `.env.production`:
```env
TELEGRAM_BOT_TOKEN=production_bot_token
TELEGRAM_CHAT_ID=your_production_chat_id
```

---

## 💡 Qo'shimcha imkoniyatlar

### 1. Telegram bot commands
```
/start - Bot haqida ma'lumot
/stats - Statistika
/pending - Kutilayotgan to'lovlar
```

### 2. Inline buttons
Telegram xabarida to'g'ridan-to'g'ri tasdiqlash:
```javascript
{
  reply_markup: {
    inline_keyboard: [[
      { text: '✅ Tasdiqlash', callback_data: `approve_${paymentId}` },
      { text: '❌ Rad etish', callback_data: `reject_${paymentId}` }
    ]]
  }
}
```

### 3. Eslatmalar
Obuna tugashidan 3 kun oldin eslatma:
```javascript
if (daysLeft === 3) {
  await sendTelegramMessage(
    `⚠️ Obuna 3 kundan keyin tugaydi!\nFoydalanuvchi: ${user.email}`
  );
}
```

---

## 🔒 Xavfsizlik

### 1. Token'ni himoyalang
- ❌ Git'ga commit qilmang
- ✅ `.env.local` faylida saqlang
- ✅ `.gitignore` da bo'lsin

### 2. Chat ID'ni tekshiring
Faqat sizning chat ID'ingizga xabar yuborilsin

### 3. Rate limiting
Spam'dan himoyalanish uchun

---

**Tayyor! Telegram bot sozlandi!** 🎉
