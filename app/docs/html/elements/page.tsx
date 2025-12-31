"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Box, Sparkles, Layers, Play } from "lucide-react";

export default function HTMLElementsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-sm mb-6">
            <Box className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-semibold">HTML ELEMENTS</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mb-4">
            HTML Elementlari
          </h1>
          <p className="text-2xl text-gray-300">
            Asosiy HTML teglar va ularning ishlatilishi
          </p>
        </div>
      </div>

      {/* Sarlavha elementlari */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Sarlavha Elementlari (Headings)</h2>
        <p className="text-gray-300 mb-6 text-lg">
          HTML da 6 xil sarlavha mavjud: <code className="bg-gray-800 px-2 py-1 rounded text-blue-400">h1</code> dan 
          <code className="bg-gray-800 px-2 py-1 rounded text-blue-400 ml-1">h6</code> gacha.
        </p>
        
        <CodeBlock 
          language="HTML"
          code={`<h1>Eng katta sarlavha</h1>
<h2>Ikkinchi darajali sarlavha</h2>
<h3>Uchinchi darajali sarlavha</h3>
<h4>To'rtinchi darajali sarlavha</h4>
<h5>Beshinchi darajali sarlavha</h5>
<h6>Eng kichik sarlavha</h6>`}
        />

        <div className="mt-6 bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r">
          <p className="text-gray-300">
            <strong className="text-blue-400">Muhim:</strong> Har bir sahifada faqat bitta <code className="bg-gray-800 px-2 py-1 rounded">h1</code> bo&apos;lishi kerak!
          </p>
        </div>
      </div>

      {/* Paragraf va matn */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Paragraf va Matn Elementlari</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-medium text-gray-100 mb-3">
              <code className="text-green-400">&lt;p&gt;</code> - Paragraf
            </h3>
            <p className="text-gray-400 mb-4">Oddiy matn yozish uchun</p>
            <CodeBlock 
              language="HTML"
              showHeader={false}
              code={`<p>Bu oddiy paragraf.</p>`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-medium text-gray-100 mb-3">
              <code className="text-green-400">&lt;br&gt;</code> - Qator o&apos;tkazish
            </h3>
            <p className="text-gray-400 mb-4">Yangi qatorga o&apos;tish</p>
            <CodeBlock 
              language="HTML"
              showHeader={false}
              code={`<p>Birinchi qator<br>Ikkinchi qator</p>`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-medium text-gray-100 mb-3">
              <code className="text-green-400">&lt;strong&gt;</code> - Qalin matn
            </h3>
            <p className="text-gray-400 mb-4">Muhim matnni ajratish</p>
            <CodeBlock 
              language="HTML"
              showHeader={false}
              code={`<p>Bu <strong>muhim</strong> matn</p>`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-medium text-gray-100 mb-3">
              <code className="text-green-400">&lt;em&gt;</code> - Kursiv matn
            </h3>
            <p className="text-gray-400 mb-4">Ta&apos;kidlangan matn</p>
            <CodeBlock 
              language="HTML"
              showHeader={false}
              code={`<p>Bu <em>ta'kidlangan</em> matn</p>`}
            />
          </div>
        </div>
      </div>

      {/* Havolalar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Havolalar (Links)</h2>
        <p className="text-gray-300 mb-6 text-lg">
          <code className="bg-gray-800 px-2 py-1 rounded text-purple-400">&lt;a&gt;</code> tegi boshqa sahifalarga havola yaratish uchun ishlatiladi.
        </p>

        <CodeBlock 
          language="HTML"
          code={`<!-- Oddiy havola -->
<a href="https://google.com">Google ga o'tish</a>

<!-- Yangi oynada ochish -->
<a href="https://youtube.com" target="_blank">YouTube</a>

<!-- Email havola -->
<a href="mailto:info@example.com">Bizga yozing</a>

<!-- Telefon havola -->
<a href="tel:+998901234567">Qo'ng'iroq qiling</a>`}
        />

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong className="text-purple-400">href</strong> - Havola manzili
            </p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong className="text-purple-400">target=&quot;_blank&quot;</strong> - Yangi oynada ochish
            </p>
          </div>
        </div>
      </div>

      {/* Rasmlar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Rasmlar (Images)</h2>
        <p className="text-gray-300 mb-6 text-lg">
          <code className="bg-gray-800 px-2 py-1 rounded text-orange-400">&lt;img&gt;</code> tegi rasm qo&apos;shish uchun.
        </p>

        <CodeBlock 
          language="HTML"
          code={`<!-- Oddiy rasm -->
<img src="rasm.jpg" alt="Rasm tavsifi">

<!-- O'lchamli rasm -->
<img src="logo.png" alt="Logo" width="200" height="100">

<!-- Internet rasm -->
<img src="https://example.com/photo.jpg" alt="Foto">`}
        />

        <div className="mt-6 bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded-r">
          <p className="text-gray-300">
            <strong className="text-orange-400">Eslatma:</strong> <code className="bg-gray-800 px-2 py-1 rounded">alt</code> atributi har doim yozilishi kerak - bu rasm yuklanmasa ko&apos;rsatiladi.
          </p>
        </div>
      </div>

      {/* Ro'yxatlar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Ro&apos;yxatlar (Lists)</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium text-gray-100 mb-4">Tartiblangan ro&apos;yxat (ol)</h3>
            <CodeBlock 
              language="HTML"
              code={`<ol>
  <li>Birinchi element</li>
  <li>Ikkinchi element</li>
  <li>Uchinchi element</li>
</ol>`}
            />
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-100 mb-4">Tartibsiz ro&apos;yxat (ul)</h3>
            <CodeBlock 
              language="HTML"
              code={`<ul>
  <li>Olma</li>
  <li>Banan</li>
  <li>Apelsin</li>
</ul>`}
            />
          </div>
        </div>
      </div>

      {/* Amaliy mashq */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-500 p-8 rounded-r">
          <h2 className="text-3xl font-semibold text-gray-100 mb-4 flex items-center gap-3">
            <span className="text-4xl">💻</span> Amaliy mashq
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Quyidagi elementlarni ishlatib, o&apos;zingiz haqingizda sahifa yarating:
          </p>
          
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>h1 da ismingiz</li>
            <li>h2 da kasbingiz</li>
            <li>p da o&apos;zingiz haqida ma&apos;lumot</li>
            <li>strong va em ishlatib muhim so&apos;zlarni ajrating</li>
            <li>ul da qiziqishlaringiz ro&apos;yxati</li>
            <li>a tegi bilan ijtimoiy tarmoqlaringizga havola</li>
          </ul>
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
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Blog post yarating</h3>
              <p className="text-gray-300 mb-4">Sevimli mavzungiz haqida blog yozing:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>h1 da sarlavha</li>
                <li>3-4 ta paragraf</li>
                <li>Kamida 2 ta strong va 2 ta em</li>
                <li>2 ta tashqi havola</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Retsept sahifasi</h3>
              <p className="text-gray-300 mb-4">Sevimli taomingiz retseptini yozing:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>h1 da taom nomi</li>
                <li>h2 da &quot;Kerakli mahsulotlar&quot;</li>
                <li>ul da mahsulotlar ro&apos;yxati</li>
                <li>h2 da &quot;Tayyorlash bosqichlari&quot;</li>
                <li>ol da bosqichlar ro&apos;yxati</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Xato tuzating</h3>
              <CodeBlock 
                language="HTML"
                code={`<h1>Mening sahifam
<p>Bu <strong>muhim matn</p></strong>
<a href="google.com">Google
<img src="rasm.jpg">`}
              />
              <p className="text-gray-400 text-sm mt-4">
                <strong>Maslahat:</strong> 4 ta xato bor - teglar to&apos;g&apos;ri yopilmagan
              </p>
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
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Shaxsiy blog sahifasi</h3>
                  <p className="text-gray-300 mb-4">To&apos;liq blog sahifa yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Asosiy sarlavha (h1)</li>
                    <li>Muallif ma&apos;lumoti (p, strong)</li>
                    <li>5-6 ta paragraf maqola</li>
                    <li>Ichki sarlavhalar (h2, h3)</li>
                    <li>Kamida 5 ta havola</li>
                    <li>2-3 ta rasm</li>
                    <li>Teglar ro&apos;yxati (ul)</li>
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
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Portfolio sahifasi</h3>
                  <p className="text-gray-300 mb-4">Professional portfolio yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Ism va lavozim</li>
                    <li>Qisqacha tavsif</li>
                    <li>Ko&apos;nikmalar ro&apos;yxati (ul)</li>
                    <li>Tajriba (ol - yillar bo&apos;yicha)</li>
                    <li>Aloqa havolalari (email, telefon, ijtimoiy tarmoqlar)</li>
                    <li>Profil rasmi</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 45-60 daqiqa | 📊 Qiyinlik: O&apos;rta</p>
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
            <h3 className="text-lg font-medium text-gray-100 mb-2">📖 HTML Elements Reference</h3>
            <p className="text-gray-400 text-sm mb-3">Barcha HTML elementlar ro&apos;yxati</p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" rel="noopener noreferrer" 
               className="text-blue-400 hover:text-blue-300 text-sm">
              MDN Reference →
            </a>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2">🎨 HTML Cheat Sheet</h3>
            <p className="text-gray-400 text-sm mb-3">Tez qo&apos;llanma</p>
            <a href="https://htmlcheatsheet.com/" target="_blank" rel="noopener noreferrer"
               className="text-green-400 hover:text-green-300 text-sm">
              htmlcheatsheet.com →
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/html/intro" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: HTML ga Kirish
        </Link>
        
        <Link href="/docs/html/lists-tables" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Ro'yxat va Jadvallar
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
