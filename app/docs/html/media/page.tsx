"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Film, Sparkles, Music, Play } from "lucide-react";

export default function HTMLMediaPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-red-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-full text-sm mb-6">
            <Film className="w-4 h-4 text-pink-400" />
            <span className="text-pink-300 font-semibold">HTML MEDIA</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 mb-4">
            Media Elementlari
          </h1>
          <p className="text-2xl text-gray-300">
            Video, Audio va boshqa multimedia
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-2xl p-8 hover:border-pink-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="aspect-video rounded-xl overflow-hidden border border-gray-700 hover:border-pink-500/50 transition-all">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/l-GaRkk5t2Y?si=Obr_bKief63PlVP0" 
            title="Media Elementlari - Video dars"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Rasm qo'yish */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Rasm qo'yish (img)</h2>
        <p className="text-gray-300 mb-6 text-lg">
          <code className="bg-gray-800 px-2 py-1 rounded text-pink-400">&lt;img&gt;</code> tegi veb sahifaga rasm qo'shish uchun ishlatiladi.
        </p>
        
        <CodeBlock 
          language="HTML"
          code={`<!-- Oddiy rasm -->
<img src="rasm.jpg" alt="Rasm tavsifi">

<!-- O'lchamli rasm -->
<img src="logo.png" alt="Logo" width="200" height="100">

<!-- Internet rasm -->
<img src="https://example.com/photo.jpg" alt="Foto">

<!-- Responsive rasm -->
<img src="rasm.jpg" alt="Rasm" style="max-width: 100%; height: auto;">

<!-- Lazy loading -->
<img src="katta-rasm.jpg" alt="Katta rasm" loading="lazy">

<!-- Rasm yuklash xatosi -->
<img src="mavjud-emas.jpg" alt="Rasm" onerror="this.src='default.jpg'">`}
        />

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-pink-500/10 border border-pink-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong className="text-pink-400">src</strong> - Rasm manzili (majburiy)
            </p>
          </div>
          <div className="bg-pink-500/10 border border-pink-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong className="text-pink-400">alt</strong> - Muqobil matn (majburiy)
            </p>
          </div>
          <div className="bg-pink-500/10 border border-pink-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong className="text-pink-400">loading="lazy"</strong> - Kerak bo'lganda yuklash
            </p>
          </div>
          <div className="bg-pink-500/10 border border-pink-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong className="text-pink-400">onerror</strong> - Xato bo'lganda boshqa rasm
            </p>
          </div>
        </div>
      </div>

      {/* Favicon */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Favicon qo'yish</h2>
        <p className="text-gray-300 mb-6 text-lg">
          Favicon - brauzer tabida ko'rinadigan kichik icon. <code className="bg-gray-800 px-2 py-1 rounded text-rose-400">&lt;head&gt;</code> qismiga qo'shiladi.
        </p>
        
        <CodeBlock 
          language="HTML"
          code={`<!-- Oddiy favicon -->
<link rel="icon" href="favicon.ico" type="image/x-icon">

<!-- PNG favicon -->
<link rel="icon" href="favicon.png" type="image/png">

<!-- Turli o'lchamdagi faviconlar -->
<link rel="icon" sizes="16x16" href="favicon-16x16.png" type="image/png">
<link rel="icon" sizes="32x32" href="favicon-32x32.png" type="image/png">
<link rel="icon" sizes="96x96" href="favicon-96x96.png" type="image/png">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="apple-touch-icon.png">

<!-- Android Chrome -->
<link rel="manifest" href="manifest.json">

<!-- To'liq misol -->
<!DOCTYPE html>
<html>
<head>
    <title>Mening saytim</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" sizes="32x32" href="favicon-32x32.png">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
</head>
<body>
    <!-- Sahifa kontenti -->
</body>
</html>`}
        />

        <div className="mt-6 bg-rose-500/10 border-l-4 border-rose-500 p-4 rounded-r">
          <p className="text-gray-300">
            <strong className="text-rose-400">Maslahat:</strong> Favicon 16x16, 32x32, 96x96 o'lchamlarida tayyorlang. ICO format eng keng qo'llab-quvvatlanadi.
          </p>
        </div>
      </div>

      {/* Video */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Video Element</h2>
        
        <CodeBlock 
          language="HTML"
          code={`<!-- Oddiy video -->
<video src="video.mp4" controls></video>

<!-- To'liq parametrlar bilan -->
<video width="640" height="360" controls autoplay muted loop>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Brauzeringiz video ni qo'llab-quvvatlamaydi.
</video>`}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <code className="text-blue-400">controls</code> - Boshqaruv tugmalari
            </p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <code className="text-blue-400">autoplay</code> - Avtomatik boshlash
            </p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <code className="text-blue-400">muted</code> - Ovoz o&apos;chirilgan
            </p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <code className="text-blue-400">loop</code> - Takroriy ijro
            </p>
          </div>
        </div>
      </div>

      {/* Audio */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Audio Element</h2>
        
        <CodeBlock 
          language="HTML"
          code={`<!-- Oddiy audio -->
<audio src="music.mp3" controls></audio>

<!-- Bir nechta format -->
<audio controls>
  <source src="music.mp3" type="audio/mpeg">
  <source src="music.ogg" type="audio/ogg">
  Brauzeringiz audio ni qo'llab-quvvatlamaydi.
</audio>`}
        />
      </div>

      {/* iframe */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">iframe - Boshqa sahifani joylashtirish</h2>
        
        <CodeBlock 
          language="HTML"
          code={`<!-- YouTube video -->
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameborder="0" 
  allowfullscreen>
</iframe>

<!-- Google Maps -->
<iframe 
  src="https://www.google.com/maps/embed?..."
  width="600" 
  height="450" 
  style="border:0;" 
  allowfullscreen>
</iframe>

<!-- Boshqa web sahifa -->
<iframe src="https://example.com" width="800" height="600"></iframe>`}
        />

        <div className="mt-6 bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded-r">
          <p className="text-gray-300">
            <strong className="text-orange-400">Eslatma:</strong> iframe xavfsizlik muammolariga olib kelishi mumkin. Faqat ishonchli manbalardan foydalaning.
          </p>
        </div>
      </div>



      {/* Darsdagi topshiriqlar */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">📝</span> Darsdagi topshiriqlar
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Rasm galereya</h3>
              <p className="text-gray-300 mb-4">Foto galereya yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>6 ta rasm (3x2 grid)</li>
                <li>Har biriga alt matn</li>
                <li>Lazy loading qo'shing</li>
                <li>Favicon ham qo'ying</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Video va Audio pleyer</h3>
              <p className="text-gray-300 mb-4">Multimedia pleyer yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>2 ta video (controls, width, height)</li>
                <li>3 ta audio fayl</li>
                <li>Har biriga tavsif qo'shing</li>
                <li>Autoplay va loop sinab ko'ring</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: iframe bilan joylashtirish</h3>
              <p className="text-gray-300 mb-4">Tashqi kontentni joylashtiring:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>YouTube video (iframe)</li>
                <li>Google Maps (iframe)</li>
                <li>Boshqa sayt sahifasi</li>
                <li>Xavfsizlik choralarini unutmang</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga vazifa */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">🏠</span> Uyga vazifa
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">1️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Multimedia portfolio</h3>
                  <p className="text-gray-300 mb-4">To&apos;liq multimedia portfolio yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Taqdimot video (autoplay, muted, loop)</li>
                    <li>Background musiqa (audio)</li>
                    <li>YouTube video (iframe)</li>
                    <li>Google Maps joylashuv (iframe)</li>
                    <li>Favicon va logo</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 1.5-2 soat | 📊 Qiyinlik: Qiyin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">2️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Video blog sahifasi</h3>
                  <p className="text-gray-300 mb-4">Video blog uchun sahifa:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Asosiy video (katta, controls)</li>
                    <li>3-4 ta qo&apos;shimcha video (kichikroq)</li>
                    <li>Har bir video uchun tavsif</li>
                    <li>Ijtimoiy tarmoqlar (iframe)</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 1-1.5 soat | 📊 Qiyinlik: O&apos;rta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/html/forms" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Formalar
        </Link>
        
        <Link href="/docs/html/semantic" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Semantic HTML
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
