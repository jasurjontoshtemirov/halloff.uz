# Halloff - Dasturlash Kurslari Platformasi

Zamonaviy va professional dasturlash kurslari platformasi. HTML, CSS va JavaScript darslarini o'rganing.

## 🚀 Ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda ochish: **http://localhost:3000**

⚠️ **Muhim:** Admin panel uchun faqat `localhost:3000` dan foydalaning. IP manzil (192.168.x.x) localStorage bilan ishlamaydi.

## 👤 Foydalanuvchi hisobi

### Oddiy foydalanuvchi
1. `/auth/signup` ga o'ting
2. Ro'yxatdan o'ting
3. Login qiling va darslarni ko'ring

### Admin hisobi
- **Email:** admin@halloff.uz
- **Parol:** admin123

Admin hisobi avtomatik yaratiladi va localStorage'da saqlanadi.

## 📚 Xususiyatlar

### Foydalanuvchilar uchun
- ✅ Ro'yxatdan o'tish va kirish
- ✅ HTML darslari (7 ta)
- ✅ CSS darslari (18 ta)
- ✅ JavaScript darslari (34+ ta)
- ✅ Video darslar (YouTube integratsiyasi)
- ✅ Qidiruv funksiyasi (Ctrl+K)
- ✅ Kod namunalari (syntax highlighting)

### Admin panel
- 👥 Foydalanuvchilarni boshqarish
- 📊 Statistika va hisobotlar
- 📝 Kontent boshqaruvi
- ⚙️ Sozlamalar
- 🗑️ Ma'lumotlar bazasini tozalash

## 🛠️ Texnologiyalar

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Syntax Highlighting:** Prism.js
- **Authentication:** Custom (localStorage)
- **Database:** LocalStorage

## 📁 Struktura

```
docs-website/
├── app/
│   ├── admin/          # Admin panel
│   ├── auth/           # Login/Signup
│   ├── docs/           # Darslar
│   └── page.tsx        # Bosh sahifa
├── components/         # Komponentlar
├── lib/               # Helper funksiyalar
└── public/            # Static fayllar
```

## 🔐 Authentication

Hozirda localStorage ishlatiladi. Production uchun:
- Database (PostgreSQL, MongoDB)
- NextAuth.js
- JWT tokens
- Password hashing (bcrypt)

## 📝 Admin panel

Admin panelga kirish:
1. `http://localhost:3000/auth/login`
2. Admin ma'lumotlari bilan kiring
3. Header'da "Admin" tugmasini bosing
4. Yoki `/admin` ga o'ting

## 🎨 Dizayn

- Dark mode
- Responsive design
- Modern UI/UX
- GitHub-style interface

## 📄 License

MIT License

## 👨‍💻 Developer

Halloff Team
