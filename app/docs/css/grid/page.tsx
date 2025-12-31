"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Grid3X3, Sparkles, Code2, Layers, Box, Layout, CheckCircle } from "lucide-react";

export default function CSSGridPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 rounded-full text-sm mb-6">
            <Grid3X3 className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 font-semibold">CSS GRID</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 mb-4">
            CSS Grid
          </h1>
          <p className="text-2xl text-gray-300">
            Eng kuchli layout tizimi - 2D layout uchun!
          </p>
        </div>
      </div>

      {/* Grid nima? */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl">
            <Layout className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Grid nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            <span className="text-indigo-400 font-semibold">CSS Grid</span> - bu 2D layout tizimi. Flexbox 1D (bir yo'nalish) bo'lsa, 
            Grid 2D (qator va ustun) da ishlaydi. Murakkab layoutlar uchun eng yaxshi tanlov!
          </p>
          <div className="mt-6 bg-indigo-500/10 p-4 rounded">
            <p className="text-indigo-300 text-sm">
              💡 <strong>Flexbox vs Grid:</strong> Flexbox - oddiy layoutlar uchun, Grid - murakkab layoutlar uchun. 
              Ko'pincha ikkalasini birgalikda ishlatamiz!
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border border-blue-500/20">
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-semibold text-gray-100">Grid nima beradi?</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "2D layout (qator va ustunlar)",
              "Responsive dizayn oson",
              "Murakkab layoutlar yaratish",
              "Elementlarni aniq joylashtirish",
              "Gap (oraliq) boshqarish",
              "Professional web sahifalar"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/70 transition-all">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Display Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Grid Boshlash</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Container ni grid qilish */
.container {
    display: grid;
}

/* Inline grid */
.container {
    display: inline-grid;
}`}
          />
        </div>
      </div>

      {/* Grid Template Columns */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Grid Template Columns - Ustunlar</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-medium text-green-400 mb-4">Asosiy Ustunlar</h3>
            <CodeBlock 
              language="CSS"
              code={`/* 3 ta teng ustun */
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

/* Yoki qisqaroq */
.container {
    grid-template-columns: repeat(3, 1fr);
}

/* Turli o'lchamlar */
.container {
    grid-template-columns: 200px 1fr 200px;
    /* Sidebar - Content - Sidebar */
}

/* 4 ustun */
.container {
    grid-template-columns: repeat(4, 1fr);
}

/* Percentage */
.container {
    grid-template-columns: 25% 50% 25%;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-medium text-purple-400 mb-4">Auto-fit va Auto-fill</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Auto-fit - Responsive! */
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Auto-fill */
.container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

/* Farqi: auto-fit bo'sh joyni to'ldiradi, auto-fill esa bo'sh ustun qoldiradi */`}
            />
            
            <div className="mt-4 bg-purple-500/10 p-3 rounded">
              <p className="text-purple-300 text-sm">
                ⭐ <strong>auto-fit + minmax</strong> - eng kuchli responsive usul! Hech qanday media query kerak emas!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Template Rows */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Grid Template Rows - Qatorlar</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Qator balandliklari */
.container {
    display: grid;
    grid-template-rows: 100px 200px 100px;
}

/* Auto */
.container {
    grid-template-rows: auto auto auto;
}

/* fr bilan */
.container {
    grid-template-rows: 1fr 2fr 1fr;
}

/* Repeat */
.container {
    grid-template-rows: repeat(3, 100px);
}

/* Min-max */
.container {
    grid-template-rows: repeat(3, minmax(100px, auto));
}`}
          />
        </div>
      </div>

      {/* Gap */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Gap - Oraliq</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-cyan-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Barcha tomonlarda bir xil */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

/* Row va column uchun alohida */
.container {
    gap: 20px 30px;  /* row-gap column-gap */
}

/* Alohida yozish */
.container {
    row-gap: 20px;
    column-gap: 30px;
}`}
          />
        </div>
      </div>

      {/* Grid Item Placement */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Grid Item Joylashtirish</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-pink-500/30">
            <h3 className="text-xl font-medium text-pink-400 mb-4">Grid Column</h3>
            <CodeBlock 
              language="CSS"
              code={`/* 1-ustundan 3-ustunga */
.item {
    grid-column: 1 / 3;  /* 2 ustun egallaydi */
}

/* Span bilan */
.item {
    grid-column: span 2;  /* 2 ustun egallaydi */
}

/* Boshidan oxirigacha */
.item {
    grid-column: 1 / -1;  /* Barcha ustunlar */
}

/* Alohida */
.item {
    grid-column-start: 1;
    grid-column-end: 3;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-yellow-500/30">
            <h3 className="text-xl font-medium text-yellow-400 mb-4">Grid Row</h3>
            <CodeBlock 
              language="CSS"
              code={`/* 1-qatordan 3-qatorga */
.item {
    grid-row: 1 / 3;  /* 2 qator egallaydi */
}

/* Span bilan */
.item {
    grid-row: span 2;
}

/* Alohida */
.item {
    grid-row-start: 1;
    grid-row-end: 3;
}`}
          />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-red-500/30">
            <h3 className="text-xl font-medium text-red-400 mb-4">Grid Area - Shorthand</h3>
            <CodeBlock 
              language="CSS"
              code={`/* grid-area: row-start / col-start / row-end / col-end */
.item {
    grid-area: 1 / 1 / 3 / 3;
}

/* Named areas */
.container {
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`}
            />
          </div>
        </div>
      </div>

      {/* Amaliy misollar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Amaliy Misollar</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-medium text-blue-400 mb-4">1. Holy Grail Layout</h3>
            <CodeBlock 
              language="CSS"
              code={`.layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-medium text-green-400 mb-4">2. Image Gallery</h3>
            <CodeBlock 
              language="CSS"
              code={`.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
}

/* Featured image */
.gallery-item:first-child {
    grid-column: span 2;
    grid-row: span 2;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-medium text-purple-400 mb-4">3. Dashboard</h3>
            <CodeBlock 
              language="CSS"
              code={`.dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto 1fr auto;
    gap: 20px;
}

.header {
    grid-column: 1 / -1;
}

.sidebar {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}

.main {
    grid-column: 2 / -1;
    grid-row: 2 / 3;
}

.footer {
    grid-column: 1 / -1;
}`}
            />
          </div>
        </div>
      </div>

      {/* Amaliy misollar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Amaliy Misollar</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-medium text-blue-400 mb-4">1. Holy Grail Layout</h3>
            <CodeBlock 
              language="CSS"
              code={`.layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-medium text-green-400 mb-4">2. Image Gallery</h3>
            <CodeBlock 
              language="CSS"
              code={`.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
}

/* Featured image */
.gallery-item:first-child {
    grid-column: span 2;
    grid-row: span 2;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-medium text-purple-400 mb-4">3. Dashboard</h3>
            <CodeBlock 
              language="CSS"
              code={`.dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto 1fr auto;
    gap: 20px;
}

.header {
    grid-column: 1 / -1;
}

.sidebar {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}

.main {
    grid-column: 2 / -1;
    grid-row: 2 / 3;
}

.footer {
    grid-column: 1 / -1;
}`}
            />
          </div>
        </div>
      </div>

      {/* Amaliy Mashq */}
      <div className="mb-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">💻</span>
          <h2 className="text-3xl font-semibold text-gray-100">Amaliy Mashq</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 1: Basic Grid</h3>
            <p className="text-gray-300 mb-4">
              3x3 grid yarating va har bir cell ga rang bering:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>3 ustun, 3 qator</li>
              <li>20px gap</li>
              <li>Har bir cell 100px balandlikda</li>
              <li>Turli ranglar</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 2: Responsive Cards</h3>
            <p className="text-gray-300 mb-4">
              Auto-fit va minmax ishlatib responsive card layout yarating. Cardlar 250px dan kichik bo'lmasin.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 3: Named Areas</h3>
            <p className="text-gray-300 mb-4">
              Grid-template-areas ishlatib website layout yarating (header, nav, main, aside, footer).
            </p>
          </div>
        </div>
      </div>

      {/* Topshiriq */}
      <div className="mb-12 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-8 border border-orange-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">📝</span>
          <h2 className="text-3xl font-semibold text-gray-100">Topshiriq</h2>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-200 mb-3">Responsive Dashboard</h3>
          <p className="text-gray-300 mb-4">
            CSS Grid yordamida responsive dashboard yarating.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
            <li>Header, sidebar, main content va footer bo'limlari</li>
            <li>Grid layout ishlatish</li>
            <li>Responsive dizayn (mobile, tablet, desktop)</li>
            <li>Gap va alignment to'g'ri sozlangan</li>
            <li>Named grid areas ishlatish</li>
            <li>Kamida 6 ta widget/card main content da</li>
          </ul>
          
          <div className="bg-gray-900/50 rounded-lg p-6 backdrop-blur mt-4">
            <h4 className="text-lg font-semibold text-gray-200 mb-3">Texnik Talablar:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Mobile-first approach</li>
              <li>Grid-template-areas ishlatish</li>
              <li>Auto-fit yoki auto-fill ishlatish</li>
              <li>Proper gap va alignment</li>
              <li>Semantic HTML</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa */}
      <div className="mb-12 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-violet-500/20 hover:border-violet-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🏠</span>
          <h2 className="text-3xl font-semibold text-gray-100">Uyga Vazifa</h2>
        </div>
        
        <div className="space-y-6">
          {[
            {
              num: "1",
              title: "Photo Gallery",
              desc: "Grid layout bilan responsive photo gallery yarating:",
              items: [
                "Auto-fit va minmax ishlatish",
                "Featured image (2x2 span)",
                "Hover effektlari",
                "Lightbox funksiyasi (CSS only)",
                "Kamida 12 ta rasm"
              ]
            },
            {
              num: "2", 
              title: "Magazine Layout",
              desc: "Murakkab grid layout bilan magazine style sahifa yarating:",
              items: [
                "Asymmetric layout",
                "Text va image kombinatsiyasi",
                "Grid areas ishlatish",
                "Typography hierarchy",
                "Responsive breakpoints"
              ]
            },
            {
              num: "3",
              title: "E-commerce Product Grid",
              desc: "Mahsulotlar uchun grid layout yarating:",
              items: [
                "Product cards",
                "Filter sidebar",
                "Pagination",
                "Sort options",
                "Shopping cart integration"
              ]
            },
            {
              num: "4",
              title: "Admin Dashboard",
              desc: "To'liq admin dashboard yarating:",
              items: [
                "Sidebar navigation",
                "Statistics widgets",
                "Charts va graphs",
                "Data tables",
                "User management section"
              ]
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all border border-gray-800 hover:border-violet-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center font-bold text-white">
                  {item.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-2">{item.desc}</p>
                  {item.items && (
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mt-2 text-sm">
                      {item.items.map((listItem, i) => (
                        <li key={i}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Qo'shimcha Manbalar */}
      <div className="mb-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">📚</span>
          <h2 className="text-3xl font-semibold text-gray-100">Qo'shimcha Manbalar</h2>
        </div>
        
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">CSS-Tricks:</strong>
              <p className="text-sm mt-1">Complete Guide to Grid - to'liq qo'llanma</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">Grid by Example:</strong>
              <p className="text-sm mt-1">Grid layout misollar va pattern'lar</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">MDN Web Docs:</strong>
              <p className="text-sm mt-1">CSS Grid to'liq qo'llanma va reference</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">Grid Garden:</strong>
              <p className="text-sm mt-1">Interaktiv o'yin orqali Grid o'rganish</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">Can I Use:</strong>
              <p className="text-sm mt-1">Brauzer qo'llab-quvvatlash ma'lumotlari</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/flexbox" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Flexbox
        </Link>
        
        <Link href="/docs/css/transforms" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Transforms
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
