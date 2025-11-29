# Database'ga O'tkazish Yo'riqnomasi

Hozirda loyiha **vaqtinchalik in-memory storage** bilan ishlayapti. Serverga qo'yganingizda database'ga o'tkazish uchun quyidagi qadamlarni bajaring.

## 📋 Hozirgi Holat

- ✅ Kodlar vaqtinchalik xotirada saqlanmoqda
- ✅ "Nusxalash va Ro'yxatga Kiritish" tugmasi ishlaydi
- ✅ 1 oylik muddat avtomatik qo'yiladi
- ⚠️ Server restart qilganda ma'lumotlar yo'qoladi

## 🚀 Database'ga O'tkazish

### 1. MySQL/MariaDB'ni ishga tushiring

```bash
# XAMPP ishlatayotgan bo'lsangiz
# XAMPP Control Panel → MySQL → Start

# Yoki service orqali
net start MySQL
```

### 2. Database'ni yarating

```bash
cd docs-website
mysql -u root -p < setup-access-codes.sql
```

Yoki manual:
```sql
CREATE DATABASE IF NOT EXISTS halloff_db;
USE halloff_db;

-- setup-access-codes.sql faylidagi SQL'larni bajaring
```

### 3. .env.local faylini tekshiring

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=halloff_db
DB_PASSWORD=@Qwer1234
DB_NAME=halloff_db
```

### 4. Database connection'ni test qiling

```bash
cd docs-website
node test-db.js
```

Natija:
```
✅ Connection successful!
✅ Query successful
✅ Connection closed
```

### 5. API fayllarini almashtiring

**a) GET va POST uchun:**
```bash
# Eski faylni backup qiling
mv app/api/admin/access-codes/route.ts app/api/admin/access-codes/route.MEMORY.ts

# Database versiyasini faollashtiring
mv app/api/admin/access-codes/route.DATABASE.ts app/api/admin/access-codes/route.ts
```

**b) DELETE uchun:**
```bash
# Eski faylni backup qiling
mv app/api/admin/access-codes/[id]/route.ts app/api/admin/access-codes/[id]/route.MEMORY.ts

# Database versiyasini faollashtiring
mv app/api/admin/access-codes/[id]/route.DATABASE.ts app/api/admin/access-codes/[id]/route.ts
```

### 6. Storage faylini o'chiring (ixtiyoriy)

```bash
# Endi kerak emas
rm lib/access-codes-storage.ts
```

### 7. Serverni restart qiling

```bash
npm run dev
```

## ✅ Tekshirish

1. Admin panelga kiring: `http://localhost:3001/admin/access-codes`
2. "Nusxalash va Ro'yxatga Kiritish" tugmasini bosing
3. Yangi kod ro'yxatda paydo bo'lishi kerak
4. Serverni restart qiling va kodlar saqlanganligini tekshiring

## 🔄 Agar Muammo Bo'lsa

Eski versiyaga qaytish:
```bash
# Memory versiyasiga qaytish
mv app/api/admin/access-codes/route.MEMORY.ts app/api/admin/access-codes/route.ts
mv app/api/admin/access-codes/[id]/route.MEMORY.ts app/api/admin/access-codes/[id]/route.ts
```

## 📝 Eslatma

- Hozirgi in-memory versiya development uchun yaxshi
- Production'da albatta database ishlatish kerak
- Database versiyasi avtomatik jadval yaratadi
- Barcha ma'lumotlar saqlanadi va yo'qolmaydi
