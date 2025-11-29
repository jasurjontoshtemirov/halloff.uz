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
        <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
          <p className="text-gray-400 mb-4">Media Elementlari - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-pink-500/50 transition-all">
            <div className="text-center">
              <Play className="w-16 h-16 text-pink-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
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

      {/* SVG */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">SVG - Vektor grafika</h2>
        
        <CodeBlock 
          language="HTML"
          code={`<svg width="200" height="200">
  <!-- Doira -->
  <circle cx="100" cy="100" r="80" fill="blue" />
  
  <!-- To'rtburchak -->
  <rect x="50" y="50" width="100" height="100" fill="red" />
  
  <!-- Chiziq -->
  <line x1="0" y1="0" x2="200" y2="200" stroke="green" stroke-width="2" />
  
  <!-- Matn -->
  <text x="100" y="100" fill="white" text-anchor="middle">SVG</text>
</svg>`}
        />
      </div>

      {/* Canvas */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Canvas - Rasm chizish</h2>
        
        <CodeBlock 
          language="HTML"
          code={`<canvas id="myCanvas" width="400" height="300"></canvas>

<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  
  // To'rtburchak chizish
  ctx.fillStyle = 'blue';
  ctx.fillRect(50, 50, 200, 100);
  
  // Doira chizish
  ctx.beginPath();
  ctx.arc(200, 150, 50, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
</script>`}
        />
      </div>

      {/* Darsdagi topshiriqlar */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">📝</span> Darsdagi topshiriqlar
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Video galereya</h3>
              <p className="text-gray-300 mb-4">3 ta video bilan galereya yarating (controls bilan)</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Musiqa pleyer</h3>
              <p className="text-gray-300 mb-4">5 ta qo&apos;shiq bilan audio pleyer yarating</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: YouTube joylashtirish</h3>
              <p className="text-gray-300 mb-4">Sevimli YouTube videolaringizni iframe bilan joylashtiring</p>
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
                    <li>SVG logo yoki icon</li>
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
