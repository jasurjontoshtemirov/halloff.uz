# Manual To'lov Tizimi - Qo'llanma

## 🎯 Qanday ishlaydi?

### 1. **Foydalanuvchi obuna bo'ladi**
```
Login → /subscription → "Obuna bo'lish" tugmasi
```

### 2. **Pending sahifaga yo'naltiriladi**
```
/subscription/pending?id=PAY_123456
```

Sahifada:
- ✅ To'lov ID ko'rsatiladi
- ✅ "@jasurjontoshtemirov ga yozish" tugmasi
- ✅ Xabar matni (nusxalash mumkin)
- ✅ Har 5 soniyada status tekshiriladi

### 3. **Foydalanuvchi sizga Telegram'da yozadi**
```
Assalomu alaykum! Obuna uchun to'lov qildim.

To'lov ID: PAY_1234567890_1
Summa: 10,000 so'm
```

### 4. **Siz to'lovni qabul qilasiz**
- Click, Payme, Uzum yoki naqd pul
- To'lov ID'ni eslab qoling

### 5. **Admin panelda tasdiqlaysiz**
```
http://localhost:3000/admin/subscriptions
```

- "Kutilayotgan to'lovlar" bo'limida ko'rasiz
- "✅ To'lovni tasdiqlash" tugmasini bosasiz
- Avtomatik 30 kunlik obuna beriladi

### 6. **Foydalanuvchi avtomatik /docs ga yo'naltiriladi**
```
Pending sahifa har 5 soniyada tekshiradi
Status 'completed' bo'lsa → /docs
```

---

## 📱 Telegram orqali to'lov qabul qilish

### Variant 1: Click/Payme/Uzum
```
1. Foydalanuvchi sizga yozadi
2. Siz to'lov linkini yuborasiz
3. To'lov amalga oshadi
4. Admin panelda tasdiqlaysiz
```

### Variant 2: Naqd pul
```
1. Foydalanuvchi sizga yozadi
2. Siz naqd pul qabul qilasiz
3. Admin panelda tasdiqlaysiz
```

### Variant 3: Karta o'tkazma
```
1. Foydalanuvchi sizga yozadi
2. Siz karta raqamini yuborasiz
3. Foydalanuvchi o'tkazadi
4. Admin panelda tasdiqlaysiz
```

---

## 🖥️ Admin Panel

### Obunalar sahifasi
```
http://localhost:3000/admin/subscriptions
```

### Statistika:
- 📊 Kutilmoqda: X ta
- ✅ Tasdiqlangan: Y ta
- 💰 Jami daromad: Z so'm

### Kutilayotgan to'lovlar:
Har bir to'lov uchun:
- 👤 Foydalanuvchi (ism, email)
- 💳 To'lov ID
- 💰 Summa (10,000 so'm)
- 📅 Sana
- ✅ "To'lovni tasdiqlash" tugmasi

### Tasdiqlash:
1. Tugmani bosing
2. Confirm qiling
3. Avtomatik:
   - `subscription_status = 'active'`
   - `subscription_end = +30 kun`
   - `payment status = 'completed'`

---

## ⏰ Obuna muddati

### 30 kunlik obuna:
```javascript
const subscriptionEnd = new Date();
subscriptionEnd.setDate(subscriptionEnd.getDate() + 30);
```

### Obuna tugashi:
Foydalanuvchi kirganida tekshiriladi:
```javascript
if (subscription_end < new Date()) {
  // Obuna tugagan
  redirect('/subscription');
}
```

---

## 🔄 Jarayon diagrammasi

```
Foydalanuvchi                    Admin                      Tizim
     |                             |                          |
     |--[Obuna bo'lish]----------->|                          |
     |                             |                          |
     |<--[Pending sahifa]----------|                          |
     |   (To'lov ID ko'rsatiladi)  |                          |
     |                             |                          |
     |--[Telegram'da yozadi]------>|                          |
     |   "To'lov qildim"           |                          |
     |                             |                          |
     |                             |--[To'lovni qabul qiladi] |
     |                             |                          |
     |                             |--[Admin panelda]-------->|
     |                             |   tasdiqlaydi            |
     |                             |                          |
     |                             |                          |--[Obuna]
     |                             |                          |   faollashadi
     |                             |                          |   (+30 kun)
     |                             |                          |
     |<--[Avtomatik /docs ga]------|<-------------------------|
     |   yo'naltiriladi            |                          |
```

---

## 📊 Database

### payments jadvali:
```sql
CREATE TABLE payments (
  id INT PRIMARY KEY,
  user_id INT,
  amount DECIMAL(10, 2),
  status ENUM('pending', 'completed', 'failed'),
  payment_id VARCHAR(255),
  created_at TIMESTAMP
);
```

### users jadvali (qo'shimcha):
```sql
ALTER TABLE users 
ADD COLUMN subscription_status ENUM('free', 'active', 'expired'),
ADD COLUMN subscription_end DATETIME;
```

---

## 🧪 Test qilish

### 1. Foydalanuvchi sifatida:
```
1. Login: admin@halloff.uz / admin123
2. "Obuna bo'lish" tugmasini bosing
3. Pending sahifada kutasiz
4. "@jasurjontoshtemirov ga yozish" tugmasini bosing
5. Xabarni nusxalang va yuboring
```

### 2. Admin sifatida:
```
1. Admin panel: /admin/subscriptions
2. Yangi to'lovni ko'rasiz
3. "✅ To'lovni tasdiqlash" tugmasini bosing
4. Confirm qiling
```

### 3. Natija:
```
- Foydalanuvchi avtomatik /docs ga yo'naltiriladi
- Obuna 30 kun davom etadi
- Barcha darslarni ko'ra oladi
```

---

## 💡 Qo'shimcha imkoniyatlar

### 1. Email notification (keyinroq):
```javascript
// To'lov tasdiqlanganda email yuborish
await sendEmail({
  to: user.email,
  subject: 'Obuna faollashtirildi!',
  body: 'Tabriklaymiz! Obunangiz 30 kun davom etadi.'
});
```

### 2. SMS notification (keyinroq):
```javascript
// To'lov tasdiqlanganda SMS yuborish
await sendSMS({
  phone: user.phone,
  message: 'Obunangiz faollashtirildi! 30 kun.'
});
```

### 3. Obuna tugashi eslatmasi:
```javascript
// 3 kun qolganda eslatma
if (daysLeft === 3) {
  await sendNotification('Obuna 3 kundan keyin tugaydi!');
}
```

---

## 🔒 Xavfsizlik

### 1. Admin faqat:
```javascript
if (user.role !== 'admin') {
  return { error: 'Ruxsat yo\'q' };
}
```

### 2. To'lov ID unique:
```sql
payment_id VARCHAR(255) UNIQUE
```

### 3. Status tekshirish:
```javascript
if (payment.status !== 'pending') {
  return { error: 'Allaqachon tasdiqlangan' };
}
```

---

## 📞 Yordam

Savollar bo'lsa:
- Database: `DATABASE_SETUP.md`
- Auth: `AUTH_SETUP.md`
- Production: `PRODUCTION_DEPLOY.md`

---

**Tayyor! Manual to'lov tizimi ishlaydi!** 💳✨

**Asosiy afzalliklar:**
- ✅ Oddiy va tushunarli
- ✅ Telegram orqali to'g'ridan-to'g'ri aloqa
- ✅ Admin to'liq nazorat qiladi
- ✅ Har qanday to'lov usuli (Click, Payme, naqd, karta)
- ✅ Avtomatik obuna faollashadi
- ✅ 30 kunlik muddat
