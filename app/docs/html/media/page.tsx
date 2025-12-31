"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Film, Sparkles, Play, Image, Globe, CheckCircle, Volume2 } from "lucide-react";

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
            Video, Audio, Rasm va Multimedia
          </p>
        </div>
      </div>

      {/* Media nima? */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Media nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="text-pink-400 font-semibold">Media elementlari</span> - bu web sahifaga rasm, video, audio va boshqa multimedia kontentni qo'shish uchun ishlatiladigan HTML teglari.
          </p>
        </div>

        <div className="bg-gradient-to-br from-rose-500/10 to-red-500/10 rounded-xl p-8 border border-rose-500/20">
          <div className="flex items-center gap-3 mb-6">
            <Film className="w-6 h-6 text-rose-400" />
            <h3 className="text-2xl font-semibold text-gray-100">Media turlari</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Rasmlar (img) - JPEG, PNG, GIF, SVG",
              "Video fayllar (video) - MP4, WebM, OGV", 
              "Audio fayllar (audio) - MP3, WAV, OGG",
              "Tashqi kontentlar (iframe) - YouTube, Maps",
              "Favicon - sayt ikonkasi",
              "Multimedia galereya va pleerlar"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/70 transition-all">
                <CheckCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rasm qo'yish - IMG elementi */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl">
            <Image className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Rasm qo'yish (img)</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            <code className="bg-gray-800 px-2 py-1 rounded text-blue-400">&lt;img&gt;</code> tegi web sahifaga rasm qo'shish uchun ishlatiladi. Bu self-closing tag (o'z-o'zidan yopiladigan).
          </p>
        </div>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Asosiy Sintaksis</h3>
        <CodeBlock 
          language="HTML"
          code={`<!-- Eng oddiy rasm -->
<img src="rasm.jpg" alt="Rasm tavsifi">

<!-- To'liq parametrlar bilan -->
<img src="manzil/rasm.png" 
     alt="Rasm haqida tavsif" 
     width="300" 
     height="200"
     title="Hover qilganda ko'rinadigan matn">

<!-- Internet rasmlar -->
<img src="https://example.com/photo.jpg" 
     alt="Internet rasmlar" 
     loading="lazy">

<!-- Responsive rasm -->
<img src="rasm.jpg" 
     alt="Responsive rasm" 
     style="max-width: 100%; height: auto;">

<!-- Xato holatida boshqa rasm -->
<img src="mavjud-emas.jpg" 
     alt="Rasm yuklanmadi" 
     onerror="this.src='default-image.jpg'">

<!-- Lazy loading bilan -->
<img src="katta-rasm.jpg" 
     alt="Katta rasm" 
     loading="lazy" 
     decoding="async">`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">IMG Atributlari</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h4 className="text-lg font-medium text-blue-400 mb-3">Majburiy Atributlar</h4>
            <ul className="space-y-3 text-gray-300">
              <li><code className="text-blue-300">src</code> - Rasm manzili (fayl yo'li yoki URL)</li>
              <li><code className="text-blue-300">alt</code> - Muqobil matn (accessibility uchun)</li>
            </ul>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h4 className="text-lg font-medium text-green-400 mb-3">Ixtiyoriy Atributlar</h4>
            <ul className="space-y-3 text-gray-300">
              <li><code className="text-green-300">width</code> - Rasm kengligi (piksel)</li>
              <li><code className="text-green-300">height</code> - Rasm balandligi (piksel)</li>
              <li><code className="text-green-300">title</code> - Hover matn</li>
              <li><code className="text-green-300">loading</code> - Yuklash turi (lazy/eager)</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Rasm Formatlari</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg text-center">
            <h4 className="text-lg font-medium text-purple-400 mb-2">JPEG</h4>
            <p className="text-gray-300 text-sm">Fotografiyalar uchun</p>
            <p className="text-gray-400 text-xs mt-1">Kichik hajm, sifat yo'qotadi</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg text-center">
            <h4 className="text-lg font-medium text-green-400 mb-2">PNG</h4>
            <p className="text-gray-300 text-sm">Shaffof fonlar uchun</p>
            <p className="text-gray-400 text-xs mt-1">Katta hajm, sifat saqlanadi</p>
          </div>
          <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-lg text-center">
            <h4 className="text-lg font-medium text-orange-400 mb-2">GIF</h4>
            <p className="text-gray-300 text-sm">Animatsiyalar uchun</p>
            <p className="text-gray-400 text-xs mt-1">256 rang, animatsiya</p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg text-center">
            <h4 className="text-lg font-medium text-blue-400 mb-2">SVG</h4>
            <p className="text-gray-300 text-sm">Vektor grafikalar</p>
            <p className="text-gray-400 text-xs mt-1">Masshtablanadi, kichik</p>
          </div>
        </div>

        <div className="mt-6 bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r">
          <p className="text-gray-300">
            <strong className="text-blue-400">Maslahat:</strong> Web uchun rasmlarni optimizatsiya qiling. JPEG fotografiyalar uchun, PNG shaffof elementlar uchun, SVG ikonlar uchun ishlatiladi.
          </p>
        </div>
      </div>
      {/* Favicon */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Favicon - Sayt Ikonkasi</h2>
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="text-purple-400 font-semibold">Favicon</span> - bu brauzer tabida, bookmark'larda va boshqa joylarda ko'rinadigan kichik icon. HTML ning <code className="bg-gray-800 px-2 py-1 rounded text-purple-400">&lt;head&gt;</code> qismiga qo'shiladi.
          </p>
        </div>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Favicon Turlari</h3>
        <CodeBlock 
          language="HTML"
          code={`<!DOCTYPE html>
<html>
<head>
    <title>Mening Saytim</title>
    
    <!-- Klassik favicon (ICO format) -->
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    
    <!-- PNG favicon (zamonaviy) -->
    <link rel="icon" href="favicon.png" type="image/png">
    
    <!-- Turli o'lchamdagi faviconlar -->
    <link rel="icon" sizes="16x16" href="favicon-16x16.png" type="image/png">
    <link rel="icon" sizes="32x32" href="favicon-32x32.png" type="image/png">
    <link rel="icon" sizes="48x48" href="favicon-48x48.png" type="image/png">
    <link rel="icon" sizes="96x96" href="favicon-96x96.png" type="image/png">
    <link rel="icon" sizes="192x192" href="favicon-192x192.png" type="image/png">
    
    <!-- Apple Touch Icon (iOS Safari) -->
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon-180x180.png">
    
    <!-- Android Chrome -->
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#ffffff">
    
    <!-- Microsoft Tiles -->
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="mstile-144x144.png">
    <meta name="msapplication-config" content="browserconfig.xml">
</head>
<body>
    <h1>Mening saytim</h1>
</body>
</html>`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Favicon O'lchamlari</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h4 className="text-lg font-medium text-purple-400 mb-3">Asosiy O'lchamlar</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• 16x16px - Brauzer tab</li>
              <li>• 32x32px - Taskbar</li>
              <li>• 48x48px - Desktop</li>
              <li>• 96x96px - Android</li>
            </ul>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h4 className="text-lg font-medium text-blue-400 mb-3">Apple O'lchamlari</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• 57x57px - iPhone (eski)</li>
              <li>• 120x120px - iPhone</li>
              <li>• 152x152px - iPad</li>
              <li>• 180x180px - iPhone Plus</li>
            </ul>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h4 className="text-lg font-medium text-green-400 mb-3">Boshqa Platformalar</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• 192x192px - Android</li>
              <li>• 144x144px - Windows</li>
              <li>• 512x512px - PWA</li>
              <li>• 270x270px - Microsoft</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-purple-500/10 border-l-4 border-purple-500 p-4 rounded-r">
          <p className="text-gray-300">
            <strong className="text-purple-400">Maslahat:</strong> Favicon generator vositalaridan foydalaning. Realfavicongenerator.net kabi saytlar barcha kerakli o'lchamlarda favicon yaratadi.
          </p>
        </div>
      </div>
      {/* Video Element */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-red-600 to-pink-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Video Element</h2>
        </div>
        
        <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            <code className="bg-gray-800 px-2 py-1 rounded text-red-400">&lt;video&gt;</code> tegi web sahifaga video qo'shish uchun ishlatiladi. HTML5 da qo'shilgan va zamonaviy brauzerlar tomonidan qo'llab-quvvatlanadi.
          </p>
        </div>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Asosiy Video Sintaksis</h3>
        <CodeBlock 
          language="HTML"
          code={`<!-- Eng oddiy video -->
<video src="video.mp4" controls></video>

<!-- To'liq parametrlar bilan -->
<video width="640" 
       height="360" 
       controls 
       autoplay 
       muted 
       loop 
       preload="auto"
       poster="video-poster.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogv" type="video/ogg">
  Sizning brauzeringiz video elementini qo'llab-quvvatlamaydi.
</video>

<!-- Responsive video -->
<video controls style="width: 100%; height: auto;">
  <source src="responsive-video.mp4" type="video/mp4">
</video>

<!-- Autoplay bilan (faqat muted) -->
<video autoplay muted loop controls>
  <source src="background-video.mp4" type="video/mp4">
</video>`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Video Atributlari</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-red-500/30">
            <h4 className="text-lg font-medium text-red-400 mb-4">Asosiy Atributlar</h4>
            <div className="space-y-3">
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-red-300">controls</code>
                <p className="text-gray-400 text-sm mt-1">Play, pause, volume tugmalari</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-red-300">autoplay</code>
                <p className="text-gray-400 text-sm mt-1">Avtomatik boshlash (muted bilan)</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-red-300">muted</code>
                <p className="text-gray-400 text-sm mt-1">Ovoz o'chirilgan holda</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-red-300">loop</code>
                <p className="text-gray-400 text-sm mt-1">Takroriy ijro</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-pink-500/30">
            <h4 className="text-lg font-medium text-pink-400 mb-4">Qo'shimcha Atributlar</h4>
            <div className="space-y-3">
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-pink-300">poster="image.jpg"</code>
                <p className="text-gray-400 text-sm mt-1">Video boshlanishidan oldingi rasm</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-pink-300">preload="auto"</code>
                <p className="text-gray-400 text-sm mt-1">Yuklash turi (auto/metadata/none)</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-pink-300">width="640"</code>
                <p className="text-gray-400 text-sm mt-1">Video kengligi (piksel)</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-pink-300">height="360"</code>
                <p className="text-gray-400 text-sm mt-1">Video balandligi (piksel)</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Video Formatlari</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg text-center">
            <h4 className="text-lg font-medium text-blue-400 mb-2">MP4</h4>
            <p className="text-gray-300 text-sm">Eng keng tarqalgan</p>
            <p className="text-gray-400 text-xs mt-1">H.264 codec, barcha brauzerlar</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg text-center">
            <h4 className="text-lg font-medium text-green-400 mb-2">WebM</h4>
            <p className="text-gray-300 text-sm">Google formati</p>
            <p className="text-gray-400 text-xs mt-1">VP8/VP9 codec, ochiq manba</p>
          </div>
          <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-lg text-center">
            <h4 className="text-lg font-medium text-orange-400 mb-2">OGV</h4>
            <p className="text-gray-300 text-sm">Ogg formati</p>
            <p className="text-gray-400 text-xs mt-1">Theora codec, Firefox</p>
          </div>
        </div>

        <div className="mt-6 bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r">
          <p className="text-gray-300">
            <strong className="text-red-400">Muhim:</strong> Autoplay faqat muted video uchun ishlaydi. Brauzerlar foydalanuvchi tajribasini yaxshilash uchun ovozli autoplay ni bloklaydi.
          </p>
        </div>
      </div>
      {/* Audio Element */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Volume2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Audio Element</h2>
        </div>
        
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            <code className="bg-gray-800 px-2 py-1 rounded text-green-400">&lt;audio&gt;</code> tegi web sahifaga audio fayllar qo'shish uchun ishlatiladi. Musiqa, podcast va boshqa ovozli kontentlar uchun.
          </p>
        </div>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Asosiy Audio Sintaksis</h3>
        <CodeBlock 
          language="HTML"
          code={`<!-- Eng oddiy audio -->
<audio src="music.mp3" controls></audio>

<!-- To'liq parametrlar bilan -->
<audio controls 
       autoplay 
       loop 
       muted 
       preload="auto"
       volume="0.5">
  <source src="music.mp3" type="audio/mpeg">
  <source src="music.ogg" type="audio/ogg">
  <source src="music.wav" type="audio/wav">
  Sizning brauzeringiz audio elementini qo'llab-quvvatlamaydi.
</audio>

<!-- Background musiqa -->
<audio autoplay loop muted>
  <source src="background-music.mp3" type="audio/mpeg">
</audio>

<!-- Podcast pleyer -->
<audio controls preload="metadata">
  <source src="podcast-episode-1.mp3" type="audio/mpeg">
  <p>Podcast yuklab olinmoqda...</p>
</audio>`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Audio Atributlari</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h4 className="text-lg font-medium text-green-400 mb-4">Asosiy Atributlar</h4>
            <div className="space-y-3">
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-green-300">controls</code>
                <p className="text-gray-400 text-sm mt-1">Play, pause, volume boshqaruvi</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-green-300">autoplay</code>
                <p className="text-gray-400 text-sm mt-1">Avtomatik ijro (muted bilan)</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-green-300">loop</code>
                <p className="text-gray-400 text-sm mt-1">Takroriy ijro</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-green-300">muted</code>
                <p className="text-gray-400 text-sm mt-1">Ovoz o'chirilgan</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-emerald-500/30">
            <h4 className="text-lg font-medium text-emerald-400 mb-4">Qo'shimcha Atributlar</h4>
            <div className="space-y-3">
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-emerald-300">preload="auto"</code>
                <p className="text-gray-400 text-sm mt-1">Yuklash turi (auto/metadata/none)</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-emerald-300">volume="0.5"</code>
                <p className="text-gray-400 text-sm mt-1">Boshlang'ich ovoz darajasi (0.0-1.0)</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-emerald-300">crossorigin</code>
                <p className="text-gray-400 text-sm mt-1">CORS sozlamalari</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-emerald-300">mediagroup</code>
                <p className="text-gray-400 text-sm mt-1">Media guruhi</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Audio Formatlari</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg text-center">
            <h4 className="text-lg font-medium text-blue-400 mb-2">MP3</h4>
            <p className="text-gray-300 text-sm">Eng mashhur format</p>
            <p className="text-gray-400 text-xs mt-1">Kichik hajm, yaxshi sifat</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg text-center">
            <h4 className="text-lg font-medium text-green-400 mb-2">OGG</h4>
            <p className="text-gray-300 text-sm">Ochiq manba format</p>
            <p className="text-gray-400 text-xs mt-1">Firefox, Chrome</p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg text-center">
            <h4 className="text-lg font-medium text-purple-400 mb-2">WAV</h4>
            <p className="text-gray-300 text-sm">Siqilmagan format</p>
            <p className="text-gray-400 text-xs mt-1">Katta hajm, eng yaxshi sifat</p>
          </div>
        </div>

        <div className="mt-6 bg-green-500/10 border-l-4 border-green-500 p-4 rounded-r">
          <p className="text-gray-300">
            <strong className="text-green-400">Maslahat:</strong> Web uchun MP3 format eng yaxshi tanlov. Kichik hajm va barcha brauzerlar qo'llab-quvvatlaydi.
          </p>
        </div>
      </div>
      {/* iframe - Tashqi Kontentni Joylashtirish */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-xl">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">iframe - Tashqi Kontentni Joylashtirish</h2>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            <code className="bg-gray-800 px-2 py-1 rounded text-orange-400">&lt;iframe&gt;</code> tegi boshqa web sahifa yoki kontentni joriy sahifaga joylashtirish uchun ishlatiladi. YouTube videolar, Google Maps va boshqa tashqi kontentlar uchun.
          </p>
        </div>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Asosiy iframe Sintaksis</h3>
        <CodeBlock 
          language="HTML"
          code={`<!-- Oddiy iframe -->
<iframe src="https://example.com" width="800" height="600"></iframe>

<!-- To'liq parametrlar bilan -->
<iframe src="https://example.com"
        width="800"
        height="600"
        frameborder="0"
        scrolling="auto"
        allowfullscreen
        loading="lazy"
        title="Tashqi sahifa">
</iframe>

<!-- Responsive iframe -->
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
  <iframe src="https://example.com"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
  </iframe>
</div>`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">iframe Atributlari</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
            <h4 className="text-lg font-medium text-orange-400 mb-4">Asosiy Atributlar</h4>
            <div className="space-y-3">
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-orange-300">src="URL"</code>
                <p className="text-gray-400 text-sm mt-1">Joylashtiriladigan sahifa manzili</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-orange-300">width="800"</code>
                <p className="text-gray-400 text-sm mt-1">iframe kengligi (piksel yoki %)</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-orange-300">height="600"</code>
                <p className="text-gray-400 text-sm mt-1">iframe balandligi (piksel yoki %)</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-orange-300">title="Tavsif"</code>
                <p className="text-gray-400 text-sm mt-1">Accessibility uchun tavsif</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-yellow-500/30">
            <h4 className="text-lg font-medium text-yellow-400 mb-4">Xavfsizlik Atributlari</h4>
            <div className="space-y-3">
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-yellow-300">sandbox</code>
                <p className="text-gray-400 text-sm mt-1">Xavfsizlik cheklovlari</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-yellow-300">allow="permissions"</code>
                <p className="text-gray-400 text-sm mt-1">Ruxsat berilgan funksiyalar</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-yellow-300">referrerpolicy</code>
                <p className="text-gray-400 text-sm mt-1">Referrer ma'lumotlari</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-yellow-300">loading="lazy"</code>
                <p className="text-gray-400 text-sm mt-1">Kerak bo'lganda yuklash</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Mashhur iframe Misollar</h3>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-red-500/30">
            <h4 className="text-lg font-medium text-red-400 mb-4">YouTube Video</h4>
            <CodeBlock 
              language="HTML"
              code={`<!-- YouTube video joylashtirish -->
<iframe width="560" 
        height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube video player"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
</iframe>

<!-- Autoplay bilan -->
<iframe width="560" 
        height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
</iframe>

<!-- Responsive YouTube -->
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
  </iframe>
</div>`}
            />
          </div>
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h4 className="text-lg font-medium text-green-400 mb-4">Google Maps</h4>
            <CodeBlock 
              language="HTML"
              code={`<!-- Google Maps joylashtirish -->
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzU4LjIiTiA2OcKwMTQnMjQuNCJF!5e0!3m2!1sen!2s!4v1234567890"
        width="600" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
</iframe>

<!-- Responsive Maps -->
<div style="position: relative; width: 100%; height: 400px;">
  <iframe src="https://www.google.com/maps/embed?pb=..."
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
          allowfullscreen=""
          loading="lazy">
  </iframe>
</div>`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h4 className="text-lg font-medium text-blue-400 mb-4">Boshqa Tashqi Kontentlar</h4>
            <CodeBlock 
              language="HTML"
              code={`<!-- Twitter Tweet -->
<iframe src="https://platform.twitter.com/embed/Tweet.html?id=TWEET_ID"
        width="550"
        height="400"
        frameborder="0"
        scrolling="no">
</iframe>

<!-- Instagram Post -->
<iframe src="https://www.instagram.com/p/POST_ID/embed/"
        width="400"
        height="480"
        frameborder="0"
        scrolling="no">
</iframe>

<!-- CodePen -->
<iframe height="300" 
        style="width: 100%;" 
        scrolling="no" 
        title="CodePen Embed" 
        src="https://codepen.io/username/embed/pen-id?default-tab=html%2Cresult" 
        frameborder="no" 
        loading="lazy" 
        allowtransparency="true" 
        allowfullscreen="true">
</iframe>

<!-- PDF fayl -->
<iframe src="document.pdf"
        width="100%"
        height="600px"
        type="application/pdf">
  <p>PDF ko'rish uchun <a href="document.pdf">bu yerga bosing</a></p>
</iframe>`}
            />
          </div>
        </div>

        <div className="mt-6 bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded-r">
          <p className="text-gray-300">
            <strong className="text-orange-400">Xavfsizlik Eslatmasi:</strong> iframe xavfsizlik muammolariga olib kelishi mumkin. Faqat ishonchli manbalardan foydalaning va sandbox atributini qo'llang.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">iframe Xavfsizlik Sozlamalari</h3>
        <CodeBlock 
          language="HTML"
          code={`<!-- Xavfsiz iframe -->
<iframe src="https://trusted-site.com"
        sandbox="allow-scripts allow-same-origin"
        allow="geolocation; microphone; camera"
        referrerpolicy="strict-origin-when-cross-origin"
        loading="lazy">
</iframe>

<!-- Sandbox qiymatlari -->
<!-- allow-forms: Formalarni yuborish -->
<!-- allow-scripts: JavaScript ishlatish -->
<!-- allow-same-origin: Same-origin policy -->
<!-- allow-popups: Popup oynalar -->
<!-- allow-top-navigation: Asosiy oynani boshqarish -->`}
        />
      </div>
      {/* Darsdagi topshiriqlar */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">📝</span> Darsdagi Topshiriqlar
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Media Portfolio</h3>
              <p className="text-gray-300 mb-4">Shaxsiy media portfolio yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Bosh sahifada taqdimot video (autoplay, muted)</li>
                <li>Foto galereya (kamida 8 ta rasm)</li>
                <li>Video galereya (3-4 ta video)</li>
                <li>Audio playlist (5 ta musiqa)</li>
                <li>Favicon va to'liq meta taglar</li>
                <li>Responsive dizayn</li>
              </ul>
              <div className="mt-4 bg-yellow-500/10 p-3 rounded">
                <p className="text-yellow-300 text-sm">⏱️ Vaqt: 45 daqiqa | 📊 Qiyinlik: O'rta</p>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Multimedia Blog</h3>
              <p className="text-gray-300 mb-4">Blog sahifasi yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Asosiy maqola videosi (YouTube iframe)</li>
                <li>Qo'shimcha rasmlar va videolar</li>
                <li>Background musiqa (audio)</li>
                <li>Google Maps (manzil)</li>
                <li>Ijtimoiy tarmoq iframe'lari</li>
                <li>Lazy loading barcha media uchun</li>
              </ul>
              <div className="mt-4 bg-yellow-500/10 p-3 rounded">
                <p className="text-yellow-300 text-sm">⏱️ Vaqt: 30 daqiqa | 📊 Qiyinlik: Oson</p>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Xavfsiz iframe Test</h3>
              <p className="text-gray-300 mb-4">Xavfsizlik bilan iframe test:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Sandbox atributlari bilan iframe</li>
                <li>Allow permissions sozlash</li>
                <li>Referrer policy test</li>
                <li>Loading lazy qo'llash</li>
                <li>Turli xil tashqi kontentlar</li>
              </ul>
              <div className="mt-4 bg-yellow-500/10 p-3 rounded">
                <p className="text-yellow-300 text-sm">⏱️ Vaqt: 20 daqiqa | 📊 Qiyinlik: Qiyin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga vazifa */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">🏠</span> Uyga Vazifa
          </h2>
          
          <div className="space-y-6">
            {[
              {
                num: "1",
                title: "Multimedia Restaurant Website",
                desc: "Restoran uchun to'liq multimedia website yarating:",
                items: [
                  "Hero video (background, autoplay, muted, loop)",
                  "Ovqat rasmlar galereya (lazy loading)",
                  "Chef video taqdimoti (YouTube iframe)",
                  "Background musiqa (audio controls)",
                  "Google Maps joylashuv",
                  "Instagram feed (iframe)",
                  "Favicon va barcha meta taglar",
                  "Mobile responsive dizayn"
                ],
                time: "2-3 soat",
                difficulty: "Qiyin"
              },
              {
                num: "2", 
                title: "Online Kurs Platform",
                desc: "Ta'lim platformasi uchun sahifa yarating:",
                items: [
                  "Kurs taqdimot videosi (controls, poster)",
                  "Dars videolar ro'yxati (YouTube iframe)",
                  "Audio podcast bo'limi",
                  "O'qituvchi foto galereya",
                  "Sertifikat namuna (PDF iframe)",
                  "Zoom meeting iframe",
                  "Responsive video player",
                  "Accessibility optimizatsiya"
                ],
                time: "2.5-3 soat", 
                difficulty: "Qiyin"
              },
              {
                num: "3",
                title: "Travel Blog",
                desc: "Sayohat blog sahifasi yarating:",
                items: [
                  "Sayohat videolar (multiple sources)",
                  "Foto galereya (turli formatlar)",
                  "Audio travel diary",
                  "Google Maps marshrutlar",
                  "Weather widget (iframe)",
                  "Social media integration",
                  "Lazy loading optimization",
                  "SEO meta tags"
                ],
                time: "1.5-2 soat",
                difficulty: "O'rta"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center font-bold text-white">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-purple-400 mb-3">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.desc}</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4 mb-4">
                      {item.items.map((listItem, i) => (
                        <li key={i}>{listItem}</li>
                      ))}
                    </ul>
                    <div className="bg-purple-500/10 p-3 rounded">
                      <p className="text-purple-300 text-sm">⏱️ Vaqt: {item.time} | 📊 Qiyinlik: {item.difficulty}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-[#30363d] flex justify-between items-center">
        <Link
          href="/docs/html/lists-tables"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <span>←</span>
          <span>Oldingi: HTML Elementlari</span>
        </Link>
        
        <Link
          href="/docs/html/forms"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <span>Keyingi: HTML Formalar</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}