# Obuna Tizimi - Sozlash Qo'llanmasi

## 📋 Tayyorlangan Fayllar

### 1. Frontend
- ✅ `/app/subscription/page.tsx` - Obuna sahifasi (chiroyli card)
- ✅ `/app/subscription/payment/page.tsx` - To'lov jarayoni sahifasi

### 2. Backend API
- ✅ `/app/api/subscription/create/route.ts` - Obuna yaratish
- ✅ `/app/api/subscription/confirm/route.ts` - To'lovni tasdiqlash

### 3. Database
- ✅ `setup-payments.sql` - Payments jadvali va subscription ustunlari

### 4. UI
- ✅ Navbar'da Premium tugmasi qo'shildi

---

## 🗄️ Database Sozlash

### 1. Payments jadvalini yaratish:

```bash
# MySQL'ga kiring
mysql -u root -p

# Database'ni tanlang
USE halloff_db;

# SQL faylni import qiling
source setup-payments.sql;

# Yoki to'g'ridan-to'g'ri:
```

```sql
-- Payments table
CREATE TABLE IF NOT EXISTS payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
  payment_id VARCHAR(255) UNIQUE NOT NULL,
  payment_method VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_id (user_id),
  INDEX idx_payment_id (payment_id),
  INDEX idx_status (status)
);

-- Users table'ga subscription ustunlari
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS subscription_status ENUM('free', 'active', 'expired') DEFAULT 'free',
ADD COLUMN IF NOT EXISTS subscription_end DATETIME NULL;

-- Index qo'shish
CREATE INDEX IF NOT EXISTS idx_subscription_status ON users(subscription_status);
CREATE INDEX IF NOT EXISTS idx_subscription_end ON users(subscription_end);
```

---

## 🎨 Obuna Sahifasi Xususiyatlari

### Chiroyli Card Design:
- ✅ Gradient background
- ✅ Glow effect
- ✅ Premium badge
- ✅ Crown icon
- ✅ Narx: **10,000 so'm/oy**
- ✅ Feature list (7 ta)
- ✅ To'lov usullari (Click, Payme, Uzum)
- ✅ Free vs Premium taqqoslash
- ✅ FAQ bo'limi

### Responsive:
- ✅ Mobile
- ✅ Tablet
- ✅ Desktop

---

## 💳 To'lov Jarayoni

### 1. Foydalanuvchi obuna bo'ladi:
```
/subscription → "Obuna bo'lish" tugmasi
```

### 2. API obuna yaratadi:
```
POST /api/subscription/create
→ Payment ID yaratiladi
→ Database'ga saqlanadi (status: pending)
```

### 3. To'lov sahifasiga yo'naltiriladi:
```
/subscription/payment?id=PAY_123456
→ Loading animation
→ To'lov simulyatsiyasi (2 soniya)
```

### 4. To'lov tasdiqlanadi:
```
POST /api/subscription/confirm
→ User subscription_status = 'active'
→ subscription_end = +30 kun
→ Payment status = 'completed'
```

### 5. Muvaffaqiyat sahifasi:
```
✅ To'lov muvaffaqiyatli!
→ 3 soniyadan keyin bosh sahifaga
```

---

## 🔌 Real To'lov Tizimi Integratsiyasi

### Hozirgi holat:
- ⚠️ Test rejimi (simulyatsiya)
- ⚠️ Real to'lov yo'q

### Production uchun:

#### 1. Click integratsiyasi:
```typescript
// app/api/subscription/create/route.ts
const clickResponse = await fetch('https://api.click.uz/v2/merchant/invoice/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Auth': 'YOUR_CLICK_API_KEY'
  },
  body: JSON.stringify({
    amount: 10000,
    merchant_trans_id: paymentId,
    return_url: `${process.env.NEXTAUTH_URL}/subscription/payment?id=${paymentId}`,
  })
});

const paymentUrl = clickResponse.data.invoice_url;
```

#### 2. Payme integratsiyasi:
```typescript
const paymeResponse = await fetch('https://checkout.paycom.uz', {
  method: 'POST',
  body: JSON.stringify({
    m: 'YOUR_MERCHANT_ID',
    ac: { user_id: user.id },
    a: 1000000, // 10,000 so'm = 1,000,000 tiyin
    c: paymentId,
  })
});
```

#### 3. Uzum integratsiyasi:
```typescript
// Uzum API documentation'ga qarang
```

---

## 🧪 Test Qilish

### 1. Obuna sahifasini ochish:
```
http://localhost:3000/subscription
```

### 2. "Obuna bo'lish" tugmasini bosing

### 3. To'lov jarayonini kuzating:
- Loading (2 soniya)
- Success sahifasi
- Bosh sahifaga yo'naltirish

### 4. Database'ni tekshiring:
```sql
-- Foydalanuvchi obunasini tekshirish
SELECT id, email, subscription_status, subscription_end 
FROM users 
WHERE email = 'test@example.com';

-- To'lovlarni ko'rish
SELECT * FROM payments ORDER BY created_at DESC LIMIT 10;
```

---

## 🔒 Obuna Tekshirish (Middleware)

### Darslarni himoyalash:

```typescript
// app/docs/[category]/[lesson]/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import pool from "@/lib/db";

export default async function LessonPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/auth/signin");
  }

  // Obunani tekshirish
  const connection = await pool.getConnection();
  const [users]: any = await connection.query(
    "SELECT subscription_status, subscription_end FROM users WHERE email = ?",
    [session.user.email]
  );
  connection.release();

  const user = users[0];
  const hasActiveSubscription = 
    user.subscription_status === 'active' && 
    new Date(user.subscription_end) > new Date();

  if (!hasActiveSubscription) {
    // Premium darslar uchun obuna kerak
    return <SubscriptionRequired />;
  }

  // Darsni ko'rsatish
  return <LessonContent />;
}
```

---

## 📊 Admin Panel

### Obunalarni boshqarish:

```typescript
// app/admin/subscriptions/page.tsx
- Barcha obunalarni ko'rish
- Aktiv obunalar soni
- Oylik daromad
- To'lovlar tarixi
- Obunani bekor qilish
```

---

## 🚀 Production Checklist

- [ ] Database'ga payments jadvali qo'shildi
- [ ] Users table'ga subscription ustunlari qo'shildi
- [ ] Real to'lov tizimi integratsiya qilindi (Click/Payme/Uzum)
- [ ] Webhook'lar sozlandi
- [ ] Obuna tekshirish middleware qo'shildi
- [ ] Premium darslar belgilandi
- [ ] Email notification (obuna tugashi)
- [ ] Admin panel (obunalarni boshqarish)
- [ ] Test qilindi
- [ ] Security tekshirildi

---

## 💡 Keyingi Qadamlar

### 1. Real to'lov tizimi:
- Click API key oling
- Payme merchant ID oling
- Uzum integratsiya qiling

### 2. Webhook sozlash:
- Click webhook endpoint
- Payme webhook endpoint
- To'lov statusini avtomatik yangilash

### 3. Email notifications:
- Obuna muvaffaqiyatli
- Obuna tugashi (3 kun oldin)
- To'lov muvaffaqiyatsiz

### 4. Premium content:
- Qaysi darslar premium?
- Video darslar
- Amaliy loyihalar
- Sertifikatlar

---

## 📞 Yordam

Savollar bo'lsa:
1. Database xatosi → `DATABASE_SETUP.md`
2. Auth xatosi → `AUTH_SETUP.md`
3. Production → `PRODUCTION_DEPLOY.md`

**Tayyor! 🎉**
