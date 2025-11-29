"use client";

import CodeBlock from "@/components/CodeBlock";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import Link from "next/link";

export default function CSSGridPage() {
  return (
    <div className="max-w-none">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-100 mb-4">CSS Grid</h1>
        <p className="text-xl text-gray-400">Eng kuchli layout tizimi - 2D layout uchun!</p>
      </div>

      <VideoPlaceholder title="CSS Grid" />

      {/* Grid nima */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Grid nima?</h2>
        <div className="bg-gradient-to-r from-indigo-500/5 to-purple-500/5 border-l-4 border-indigo-500 p-6 rounded-r">
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            <strong className="text-indigo-400">CSS Grid</strong> - bu 2D layout tizimi. Flexbox 1D (bir yo&apos;nalish) bo&apos;lsa, 
            Grid 2D (qator va ustun) da ishlaydi. Murakkab layoutlar uchun eng yaxshi tanlov!
          </p>
          <div className="mt-6 bg-indigo-500/10 p-4 rounded">
            <p className="text-indigo-300 text-sm">
              💡 <strong>Flexbox vs Grid:</strong> Flexbox - oddiy layoutlar uchun, Grid - murakkab layoutlar uchun. 
              Ko&apos;pincha ikkalasini birgalikda ishlatamiz!
            </p>
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
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Header, sidebar, main content va footer bo&apos;limlari</li>
            <li>Grid layout ishlatish</li>
            <li>Responsive dizayn (mobile, tablet, desktop)</li>
            <li>Gap va alignment to&apos;g&apos;ri sozlangan</li>
          </ul>
        </div>
      </div>

      <div className="mb-12 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-violet-500/20 hover:border-violet-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🏠</span>
          <h2 className="text-3xl font-semibold text-gray-100">Uyga Vazifa</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">1. Photo Gallery</h3>
            <p className="text-gray-300">
              Grid layout bilan responsive photo gallery yarating.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">2. Magazine Layout</h3>
            <p className="text-gray-300">
              Murakkab grid layout bilan magazine style sahifa yarating.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">📚</span>
          <h2 className="text-3xl font-semibold text-gray-100">Qo&apos;shimcha Manbalar</h2>
        </div>
        
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <span><strong>CSS-Tricks:</strong> Complete Guide to Grid</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <span><strong>Grid by Example:</strong> Grid layout misollar</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <span><strong>MDN Web Docs:</strong> CSS Grid to&apos;liq qo&apos;llanma</span>
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
