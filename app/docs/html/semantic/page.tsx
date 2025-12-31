"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Layers, Sparkles, FileCode } from "lucide-react";

export default function HTMLSemanticPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 rounded-full text-sm mb-6">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 font-semibold">SEMANTIC HTML</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 mb-4">
            Semantic HTML
          </h1>
          <p className="text-2xl text-gray-300">
            Ma'noli va tushunarliroq kod yozish
          </p>
        </div>
      </div>

      {/* Semantic nima */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Semantic HTML nima?</h2>
        <div className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border-l-4 border-blue-500 p-6 rounded-r">
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            <strong className="text-blue-400">Semantic HTML</strong> - bu elementlarning nomidan ularning vazifasi aniq bo&apos;lishi. 
            Bu kod o&apos;qishni osonlashtiradi va SEO uchun yaxshi.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <p className="text-red-400 font-medium mb-2">❌ Yomon:</p>
              <CodeBlock 
                language="HTML"
                showHeader={false}
                code={`<div id="header">
  <div class="nav">...</div>
</div>
<div id="content">...</div>
<div id="footer">...</div>`}
              />
            </div>
            <div>
              <p className="text-green-400 font-medium mb-2">✅ Yaxshi:</p>
              <CodeBlock 
                language="HTML"
                showHeader={false}
                code={`<header>
  <nav>...</nav>
</header>
<main>...</main>
<footer>...</footer>`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Asosiy semantic elementlar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Asosiy Semantic Elementlar</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-2xl font-medium text-blue-400 mb-4">&lt;header&gt; - Sarlavha qismi</h3>
            <p className="text-gray-300 mb-4">Sahifa yoki bo&apos;lim sarlavhasi</p>
            <CodeBlock 
              language="HTML"
              code={`<header>
  <h1>Sayt nomi</h1>
  <nav>
    <a href="/">Bosh sahifa</a>
    <a href="/about">Biz haqimizda</a>
    <a href="/contact">Aloqa</a>
  </nav>
</header>`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-medium text-green-400 mb-4">&lt;nav&gt; - Navigatsiya</h3>
            <p className="text-gray-300 mb-4">Asosiy navigatsiya havolalari</p>
            <CodeBlock 
              language="HTML"
              code={`<nav>
  <ul>
    <li><a href="/">Bosh sahifa</a></li>
    <li><a href="/products">Mahsulotlar</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/contact">Aloqa</a></li>
  </ul>
</nav>`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-medium text-purple-400 mb-4">&lt;main&gt; - Asosiy kontent</h3>
            <p className="text-gray-300 mb-4">Sahifaning asosiy mazmuni (faqat bitta bo&apos;lishi kerak)</p>
            <CodeBlock 
              language="HTML"
              code={`<main>
  <h1>Maqola sarlavhasi</h1>
  <p>Asosiy kontent...</p>
</main>`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-2xl font-medium text-orange-400 mb-4">&lt;article&gt; - Mustaqil kontent</h3>
            <p className="text-gray-300 mb-4">Mustaqil, qayta ishlatilishi mumkin bo&apos;lgan kontent</p>
            <CodeBlock 
              language="HTML"
              code={`<article>
  <h2>Maqola sarlavhasi</h2>
  <p>Muallif: Ali Valiyev</p>
  <p>Maqola matni...</p>
</article>`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-pink-500/30">
            <h3 className="text-2xl font-medium text-pink-400 mb-4">&lt;section&gt; - Bo&apos;lim</h3>
            <p className="text-gray-300 mb-4">Tematik guruh</p>
            <CodeBlock 
              language="HTML"
              code={`<section>
  <h2>Xizmatlarimiz</h2>
  <p>Biz quyidagi xizmatlarni taklif qilamiz...</p>
</section>`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-2xl font-medium text-cyan-400 mb-4">&lt;aside&gt; - Yon panel</h3>
            <p className="text-gray-300 mb-4">Qo&apos;shimcha ma&apos;lumot, sidebar</p>
            <CodeBlock 
              language="HTML"
              code={`<aside>
  <h3>Tegishli maqolalar</h3>
  <ul>
    <li><a href="#">Maqola 1</a></li>
    <li><a href="#">Maqola 2</a></li>
  </ul>
</aside>`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-red-500/30">
            <h3 className="text-2xl font-medium text-red-400 mb-4">&lt;footer&gt; - Pastki qism</h3>
            <p className="text-gray-300 mb-4">Sahifa yoki bo&apos;lim pastki qismi</p>
            <CodeBlock 
              language="HTML"
              code={`<footer>
  <p>&copy; 2024 Sayt nomi. Barcha huquqlar himoyalangan.</p>
  <nav>
    <a href="/privacy">Maxfiylik</a>
    <a href="/terms">Shartlar</a>
  </nav>
</footer>`}
            />
          </div>
        </div>
      </div>

      {/* To'liq sahifa tuzilmasi */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">To&apos;liq Sahifa Tuzilmasi</h2>
        <CodeBlock 
          language="HTML"
          code={`<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Semantic HTML misoli</title>
</head>
<body>
    <header>
        <h1>Sayt nomi</h1>
        <nav>
            <a href="/">Bosh sahifa</a>
            <a href="/about">Biz haqimizda</a>
            <a href="/blog">Blog</a>
        </nav>
    </header>

    <main>
        <article>
            <header>
                <h2>Maqola sarlavhasi</h2>
                <p>Muallif: Ali | Sana: 2024-01-15</p>
            </header>
            
            <section>
                <h3>Kirish</h3>
                <p>Maqola matni...</p>
            </section>
            
            <section>
                <h3>Asosiy qism</h3>
                <p>Davomi...</p>
            </section>
            
            <footer>
                <p>Teglar: HTML, Web, Dasturlash</p>
            </footer>
        </article>

        <aside>
            <h3>Tegishli maqolalar</h3>
            <ul>
                <li><a href="#">Maqola 1</a></li>
                <li><a href="#">Maqola 2</a></li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 Sayt nomi</p>
        <nav>
            <a href="/privacy">Maxfiylik</a>
            <a href="/terms">Shartlar</a>
        </nav>
    </footer>
</body>
</html>`}
        />
      </div>

      {/* Afzalliklari */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Semantic HTML Afzalliklari</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-6 rounded-xl border border-blue-500/20">
            <h3 className="text-xl font-medium text-gray-100 mb-3 flex items-center gap-2">
              <span className="text-2xl">🔍</span> SEO
            </h3>
            <p className="text-gray-400">
              Qidiruv tizimlari sahifangizni yaxshiroq tushunadi va yuqori o&apos;ringa chiqaradi
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-6 rounded-xl border border-green-500/20">
            <h3 className="text-xl font-medium text-gray-100 mb-3 flex items-center gap-2">
              <span className="text-2xl">♿</span> Accessibility
            </h3>
            <p className="text-gray-400">
              Nogironlar uchun maxsus dasturlar (screen readers) yaxshi ishlaydi
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-6 rounded-xl border border-purple-500/20">
            <h3 className="text-xl font-medium text-gray-100 mb-3 flex items-center gap-2">
              <span className="text-2xl">📖</span> O&apos;qish oson
            </h3>
            <p className="text-gray-400">
              Kod tushunarliroq va boshqa dasturchilar uchun o&apos;qish oson
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 p-6 rounded-xl border border-orange-500/20">
            <h3 className="text-xl font-medium text-gray-100 mb-3 flex items-center gap-2">
              <span className="text-2xl">🔧</span> Saqlash oson
            </h3>
            <p className="text-gray-400">
              Kodni yangilash va tuzatish osonroq bo&apos;ladi
            </p>
          </div>
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
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Blog sahifasi</h3>
              <p className="text-gray-300 mb-4">Semantic elementlar bilan blog sahifasi yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>header, nav, main, footer</li>
                <li>3 ta article</li>
                <li>aside bilan yon panel</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Eski kodniyangilash</h3>
              <p className="text-gray-300 mb-4">Quyidagi div larni semantic elementlarga o&apos;zgartiring:</p>
              <CodeBlock 
                language="HTML"
                showHeader={false}
                code={`<div class="header">...</div>
<div class="nav">...</div>
<div class="content">...</div>
<div class="sidebar">...</div>
<div class="footer">...</div>`}
              />
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
                  <h3 className="text-xl font-medium text-purple-400 mb-3">To&apos;liq web sayt</h3>
                  <p className="text-gray-300 mb-4">Barcha semantic elementlardan foydalanib to&apos;liq sayt yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>header (logo, nav)</li>
                    <li>main (article, section)</li>
                    <li>aside (sidebar)</li>
                    <li>footer (copyright, havolalar)</li>
                    <li>Kamida 5 ta sahifa</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 2-3 soat | 📊 Qiyinlik: Qiyin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">2️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Portfolio loyihasi</h3>
                  <p className="text-gray-300 mb-4">Professional portfolio yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Barcha HTML bilimlaringizni qo&apos;llang</li>
                    <li>Semantic HTML</li>
                    <li>Formalar, media, jadvallar</li>
                    <li>To&apos;liq responsive (keyingi darsda CSS qo&apos;shamiz)</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 3-4 soat | 📊 Qiyinlik: Qiyin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabriklaymiz */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-500 p-8 rounded-r">
          <h2 className="text-3xl font-semibold text-gray-100 mb-4 flex items-center gap-3">
            <span className="text-4xl">🎉</span> Tabriklaymiz!
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            Siz HTML kursini muvaffaqiyatli tugatdingiz! Endi siz:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
            <li>HTML elementlarini bilasiz</li>
            <li>Formalar yarata olasiz</li>
            <li>Media bilan ishlay olasiz</li>
            <li>Semantic HTML yozasiz</li>
            <li>To&apos;liq web sahifa yarata olasiz</li>
          </ul>
          <p className="text-gray-300 text-lg">
            Keyingi qadam: <strong className="text-green-400">CSS</strong> o&apos;rganish va sahifalaringizni chiroyli qilish! 🎨
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/html/media" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Media Elementlari
        </Link>
        
        <Link href="/docs" 
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Dokumentatsiyaga qaytish
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
