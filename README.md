# Halloff - Dasturlash Kurslari Platformasi

Zamonaviy va professional dasturlash kurslari platformasi. HTML, CSS va JavaScript darslarini o'rganing.

## 🚀 Ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda ochish: **http://localhost:3001**

## 📚 Xususiyatlar

### Foydalanuvchilar uchun
- ✅ Ro'yxatdan o'tish va kirish
- ✅ HTML darslari
- ✅ CSS darslari  
- ✅ JavaScript darslari
- ✅ Video darslar (YouTube + Custom Video Player)
- ✅ Custom video player (MP4, WebM, OGV qo'llab-quvvatlash)
- ✅ Qidiruv funksiyasi (Ctrl+K)
- ✅ Kod namunalari (syntax highlighting)

### Admin panel
- 👥 Foydalanuvchilarni boshqarish
- 📊 Statistika va hisobotlar
- 📝 Kontent boshqaruvi
- ⚙️ Sozlamalar

## 🛠️ Texnologiyalar

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Syntax Highlighting:** Prism.js
- **Authentication:** JWT + Cookies
- **Database:** MySQL

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

## 🎨 Dizayn

- Dark mode
- Responsive design
- Modern UI/UX
- GitHub-style interface

## 🎥 Video Player

Platformada ikki xil video player mavjud:

### YouTube Integration
- YouTube videolarni to'g'ridan-to'g'ri embed qilish
- Responsive design
- Autoplay va boshqa sozlamalar

### Custom Video Player
- MP4, WebM, OGV formatlarini qo'llab-quvvatlash
- To'liq boshqaruv paneli (play/pause, volume, seek, fullscreen)
- Responsive va mobile-friendly
- Custom styling

#### Video qo'shish:
1. **YouTube uchun:** Admin panelda YouTube URL yoki video ID kiriting
2. **Custom video uchun:** 
   - Video faylni `/public/videos/` papkasiga joylashtiring
   - Admin panelda "Custom Video URL" maydoniga `/videos/fayl-nomi.mp4` kiriting

#### Qo'llab-quvvatlanadigan formatlar:
- **MP4** (H.264) - eng yaxshi qo'llab-quvvatlash
- **WebM** (VP9) - zamonaviy brauzerlar
- **OGV** (Theora) - eski brauzerlar

## 🔒 Xavfsizlik

- JWT token authentication
- Device management
- Rate limiting
- Input validation
- Secure cookies

## 📄 License

MIT License

## �‍💻 Deveeloper

Jasurjon Toshtemirov