"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Tag, Sparkles, Settings, Play } from "lucide-react";

export default function HTMLAttributesPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm mb-6">
            <Tag className="w-4 h-4 text-green-400" />
            <span className="text-green-300 font-semibold">HTML ATTRIBUTES</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 mb-4">
            HTML Atributlar
          </h1>
          <p className="text-2xl text-gray-300">
            Elementlarga qo'shimcha ma'lumot berish
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
          <p className="text-gray-400 mb-4">HTML Atributlar - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-green-500/50 transition-all">
            <div className="text-center">
              <Play className="w-16 h-16 text-green-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Atribut nima */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Atribut nima?</h2>
        <div className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border-l-4 border-blue-500 p-6 rounded-r">
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            <strong className="text-blue-400">Atributlar</strong> - bu HTML elementlariga qo&apos;shimcha ma&apos;lumot beruvchi xususiyatlar. 
            Ular har doim ochilish tegida yoziladi.
          </p>
          <CodeBlock 
            language="HTML"
            code={`<element atribut="qiymat">Kontent</element>`}
          />
        </div>
      </div>

      {/* Asosiy atributlar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Asosiy Atributlar</h2>
        
        <div className="space-y-6">
          {/* id */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-2xl font-medium text-blue-400 mb-4">id - Noyob identifikator</h3>
            <p className="text-gray-300 mb-4">Har bir elementga noyob nom beradi. Sahifada faqat bir marta ishlatiladi.</p>
            <CodeBlock 
              language="HTML"
              code={`<h1 id="sarlavha">Asosiy sarlavha</h1>
<p id="birinchi-paragraf">Bu birinchi paragraf</p>

<!-- Havolada ishlatish -->
<a href="#sarlavha">Sarlavhaga o'tish</a>`}
            />
            <div className="mt-4 bg-blue-500/10 p-3 rounded">
              <p className="text-blue-300 text-sm">💡 CSS va JavaScript da elementni topish uchun ishlatiladi</p>
            </div>
          </div>

          {/* class */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-medium text-green-400 mb-4">class - Sinf nomi</h3>
            <p className="text-gray-300 mb-4">Bir nechta elementga bir xil stil berish uchun. Ko&apos;p marta ishlatiladi.</p>
            <CodeBlock 
              language="HTML"
              code={`<p class="matn">Birinchi paragraf</p>
<p class="matn">Ikkinchi paragraf</p>
<p class="matn muhim">Muhim paragraf</p>

<!-- Bir nechta class -->
<div class="karta katta qizil">Kontent</div>`}
            />
            <div className="mt-4 bg-green-500/10 p-3 rounded">
              <p className="text-green-300 text-sm">💡 Bir elementda bir nechta class bo&apos;lishi mumkin (bo&apos;sh joy bilan ajratiladi)</p>
            </div>
          </div>

          {/* style */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-medium text-purple-400 mb-4">style - Inline stil</h3>
            <p className="text-gray-300 mb-4">To&apos;g&apos;ridan-to&apos;g&apos;ri CSS yozish</p>
            <CodeBlock 
              language="HTML"
              code={`<p style="color: red;">Qizil matn</p>
<h1 style="color: blue; font-size: 40px;">Katta ko'k sarlavha</h1>
<div style="background-color: yellow; padding: 20px;">
  Sariq fon
</div>`}
            />
          </div>

          {/* title */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-2xl font-medium text-orange-400 mb-4">title - Tooltip</h3>
            <p className="text-gray-300 mb-4">Sichqoncha ustiga kelganda ko&apos;rinadigan matn</p>
            <CodeBlock 
              language="HTML"
              code={`<p title="Bu qo'shimcha ma'lumot">Sichqonchani ustiga olib keling</p>
<a href="#" title="Bu havolaga bosing">Havola</a>
<img src="rasm.jpg" alt="Rasm" title="Go'zal manzara">`}
            />
          </div>
        </div>
      </div>

      {/* Havola atributlari */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Havola Atributlari</h2>
        
        <CodeBlock 
          language="HTML"
          code={`<!-- href - manzil -->
<a href="https://google.com">Google</a>

<!-- target - qayerda ochish -->
<a href="page.html" target="_blank">Yangi oynada</a>
<a href="page.html" target="_self">Shu oynada (default)</a>

<!-- download - yuklab olish -->
<a href="file.pdf" download>PDF yuklab olish</a>

<!-- rel - munosabat -->
<a href="https://example.com" rel="nofollow">Tashqi havola</a>`}
        />
      </div>

      {/* Rasm atributlari */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Rasm Atributlari</h2>
        
        <CodeBlock 
          language="HTML"
          code={`<!-- src - rasm manzili (majburiy) -->
<img src="photo.jpg">

<!-- alt - tavsif (majburiy) -->
<img src="photo.jpg" alt="Mening rasmim">

<!-- width va height - o'lcham -->
<img src="logo.png" alt="Logo" width="200" height="100">

<!-- loading - yuklash usuli -->
<img src="big-image.jpg" alt="Katta rasm" loading="lazy">

<!-- title - tooltip -->
<img src="photo.jpg" alt="Foto" title="2024 yil">`}
        />

        <div className="mt-6 bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded-r">
          <p className="text-gray-300">
            <strong className="text-orange-400">Muhim:</strong> <code className="bg-gray-800 px-2 py-1 rounded">src</code> va 
            <code className="bg-gray-800 px-2 py-1 rounded ml-1">alt</code> har doim yozilishi kerak!
          </p>
        </div>
      </div>

      {/* Amaliy mashq */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-500 p-8 rounded-r">
          <h2 className="text-3xl font-semibold text-gray-100 mb-4 flex items-center gap-3">
            <span className="text-4xl">💻</span> Amaliy mashq
          </h2>
          <p className="text-gray-300 mb-6 text-lg">Quyidagi kodda atributlarni to&apos;ldiring:</p>
          
          <CodeBlock 
            language="HTML"
            code={`<h1 id="___">Mening sahifam</h1>
<p class="___" style="color: ___;">Matn</p>
<a href="___" target="___">Havola</a>
<img src="___" alt="___" width="___">`}
          />
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
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Vizitka yarating</h3>
              <p className="text-gray-300 mb-4">HTML vizitka yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>id=&quot;ism&quot; bilan h1</li>
                <li>class=&quot;lavozim&quot; bilan h2</li>
                <li>Email va telefon havolalari</li>
                <li>Profil rasmi (width=150)</li>
                <li>Har bir elementga title qo&apos;shing</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Rangli sahifa</h3>
              <p className="text-gray-300 mb-4">style atributi bilan rangli sahifa yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Qizil sarlavha</li>
                <li>Ko&apos;k paragraf</li>
                <li>Yashil fon bilan div</li>
                <li>Sariq matn bilan span</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Galereya</h3>
              <p className="text-gray-300 mb-4">3 ta rasm bilan galereya yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Har bir rasm class=&quot;rasm&quot;</li>
                <li>width=300 va height=200</li>
                <li>To&apos;g&apos;ri alt matn</li>
                <li>title bilan tavsif</li>
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
                  <h3 className="text-xl font-medium text-purple-400 mb-3">To&apos;liq portfolio</h3>
                  <p className="text-gray-300 mb-4">Barcha atributlardan foydalanib portfolio yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>id va class atributlari</li>
                    <li>style bilan ranglar</li>
                    <li>Rasmlar (to&apos;g&apos;ri atributlar bilan)</li>
                    <li>Havolalar (target, title)</li>
                    <li>Tooltip lar (title)</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 1-1.5 soat | 📊 Qiyinlik: O&apos;rta</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">2️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Mahsulot kartochkasi</h3>
                  <p className="text-gray-300 mb-4">Online do&apos;kon uchun mahsulot kartochkasi:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Mahsulot rasmi (alt, title, width, height)</li>
                    <li>Nomi (id, class, style)</li>
                    <li>Narxi (style bilan katta va qalin)</li>
                    <li>&quot;Sotib olish&quot; tugmasi (havola)</li>
                    <li>Batafsil ma&apos;lumot havolasi (target=&quot;_blank&quot;)</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 45-60 daqiqa | 📊 Qiyinlik: Oson</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Qo'shimcha resurslar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">📚 Qo&apos;shimcha resurslar</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2">📖 Global Attributes</h3>
            <p className="text-gray-400 text-sm mb-3">Barcha atributlar ro&apos;yxati</p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes" target="_blank" rel="noopener noreferrer" 
               className="text-blue-400 hover:text-blue-300 text-sm">
              MDN Docs →
            </a>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2">🎯 Attribute Selector</h3>
            <p className="text-gray-400 text-sm mb-3">CSS da atributlar bilan ishlash</p>
            <a href="https://www.w3schools.com/css/css_attribute_selectors.asp" target="_blank" rel="noopener noreferrer"
               className="text-green-400 hover:text-green-300 text-sm">
              W3Schools →
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/html/elements" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: HTML Elementlari
        </Link>
        
        <Link href="/docs/html/lists-tables" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Ro&apos;yxat va Jadvallar
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
