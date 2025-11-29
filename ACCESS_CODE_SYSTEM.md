# Access Code System - Qo'llanma

## 🔑 **Kirish Kod Tizimi**

Foydalanuvchilar admin tomonidan berilgan kod bilan kiradi.

---

## 📋 **Qanday ishlaydi:**

### **1. Foydalanuvchi:**
```
Bosh sahifa → "Boshlash" → Kod kiriting → Darslar
```

### **2. Admin:**
```
Admin Panel → Kirish Kodlari → Yangi Kod → Foydalanuvchiga berish
```

---

## 🗄️ **Database Setup:**

```bash
mysql -u root -p halloff_db < setup-access-codes.sql
```

Yoki manual:
```sql
-- Access codes table
CREATE TABLE access_codes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  code VARCHAR(50) UNIQUE,
  name VARCHAR(255),
  is_active BOOLEAN DEFAULT TRUE,
  max_uses INT NULL,
  used_count INT DEFAULT 0,
  expires_at DATETIME NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Demo codes
INSERT INTO access_codes (code, name) VALUES
('DEMO-2024-FREE', 'Demo Code'),
('TEST-1234-ABCD', 'Test Code'),
('ADMIN-FULL-2024', 'Admin Code');
```

---

## 🧪 **Test qilish:**

### **1. Database'ni sozlang:**
```bash
mysql -u root -p halloff_db < setup-access-codes.sql
```

### **2. Bosh sahifaga boring:**
```
http://localhost:3001
```

### **3. "Boshlash" tugmasini bosing**

### **4. Kod kiriting:**
```
DEMO-2024-FREE
```

### **5. Darslar sahifasiga o'tasiz!** ✅

---

## 👑 **Admin Panel:**

### **Kirish Kodlarini boshqarish:**
```
http://localhost:3001/admin/access-codes
```

**Xususiyatlar:**
- ✅ Yangi kod yaratish
- ✅ Kodlarni ko'rish
- ✅ Foydalanish statistikasi
- ✅ Kod nusxalash
- ✅ Kodlarni o'chirish

**Kod parametrlari:**
- **Kod:** XXXX-XXXX-XXXX format
- **Nomi:** Kod nomi (masalan: "VIP Kod")
- **Max uses:** Necha marta ishlatish mumkin (NULL = cheksiz)
- **Expires at:** Muddat (NULL = cheksiz)
- **Is active:** Aktiv/Nofaol

---

## 📊 **Kod turlari:**

### **1. Cheksiz kod:**
```sql
INSERT INTO access_codes (code, name, max_uses, expires_at) 
VALUES ('UNLIMITED-2024', 'Cheksiz', NULL, NULL);
```

### **2. Bir martalik kod:**
```sql
INSERT INTO access_codes (code, name, max_uses) 
VALUES ('ONETIME-ABCD', 'Bir marta', 1);
```

### **3. Muddatli kod:**
```sql
INSERT INTO access_codes (code, name, expires_at) 
VALUES ('MONTH-2024', '1 oylik', DATE_ADD(NOW(), INTERVAL 30 DAY));
```

### **4. Limitli kod:**
```sql
INSERT INTO access_codes (code, name, max_uses, expires_at) 
VALUES ('LIMITED-100', '100 kishi', 100, DATE_ADD(NOW(), INTERVAL 90 DAY));
```

---

## 🎯 **Jarayon:**

```
[Foydalanuvchi]
    ↓
[Bosh sahifa] → "Boshlash"
    ↓
[Access Page] → Kod kiriting
    ↓
[API Verify] → Database tekshirish
    ↓
[Success] → localStorage'ga saqlash
    ↓
[Docs Page] → Darslarni ko'rish
```

---

## 🔒 **Xavfsizlik:**

- ✅ Kod uppercase'ga o'zgartiriladi
- ✅ Foydalanish soni hisoblanadi
- ✅ Muddat tekshiriladi
- ✅ Limit tekshiriladi
- ✅ IP va User Agent loglanadi

---

## 📈 **Statistika:**

Admin panelda ko'rish mumkin:
- Jami kodlar
- Aktiv kodlar
- Jami foydalanish
- Muddati tugagan kodlar

---

## 💡 **Foydalanish:**

### **Admin:**
1. Admin panelga kiring
2. "Kirish Kodlari" bo'limiga o'ting
3. "Yangi Kod" tugmasini bosing
4. Kod yarating
5. Kodni nusxalang
6. Foydalanuvchiga yuboring

### **Foydalanuvchi:**
1. Bosh sahifaga kiring
2. "Boshlash" tugmasini bosing
3. Admin'dan olingan kodni kiriting
4. Darslarni ko'ring!

---

**Tayyor! Access Code tizimi ishlaydi!** 🔑✨
