"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Box, Columns, AlignHorizontalJustifyCenter, AlignVerticalJustifyCenter, Rows, Play, Sparkles } from "lucide-react";

export default function CSSFlexboxPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-full text-sm mb-6">
            <Box className="w-4 h-4 text-teal-400" />
            <span className="text-teal-300 font-semibold">FLEXBOX</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 mb-4">
            CSS Flexbox
          </h1>
          <p className="text-2xl text-gray-300">
            Zamonaviy layout tizimi - eng muhim CSS mavzu!
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-2xl p-8 hover:border-teal-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
          <p className="text-gray-400 mb-4">CSS Flexbox - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-teal-500/50 transition-all">
            <div className="text-center">
              <Play className="w-16 h-16 text-teal-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Flexbox nima */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Flexbox nima?</h2>
        <div className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border-l-4 border-blue-500 p-6 rounded-r">
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            <strong className="text-blue-400">Flexbox</strong> (Flexible Box Layout) - bu elementlarni bir qatorda yoki ustunda 
            joylashtirish uchun eng qulay va zamonaviy usul. Responsive dizayn uchun juda muhim!
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Flexbox 2 qismdan iborat: <strong>Container</strong> (ota element) va <strong>Items</strong> (bola elementlar).
          </p>
        </div>
      </div>

      {/* Display Flex */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Flexbox Boshlash</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Container ni flex qilish */
.container {
    display: flex;
}

/* Inline flex */
.container {
    display: inline-flex;
}`}
          />
          
          <div className="mt-6 bg-green-500/10 p-4 rounded">
            <p className="text-green-300 text-sm">
              💡 <strong>display: flex</strong> qo&apos;yish bilan container ichidagi barcha bolalar flex item bo&apos;ladi!
            </p>
          </div>
        </div>
      </div>

      {/* Flex Direction */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Flex Direction - Yo&apos;nalish</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Row - Gorizontal (default) */
.container {
    display: flex;
    flex-direction: row;  /* Chapdan o'ngga → */
}

/* Row Reverse */
.container {
    flex-direction: row-reverse;  /* O'ngdan chapga ← */
}

/* Column - Vertikal */
.container {
    flex-direction: column;  /* Yuqoridan pastga ↓ */
}

/* Column Reverse */
.container {
    flex-direction: column-reverse;  /* Pastdan yuqoriga ↑ */
}`}
          />
        </div>
      </div>

      {/* Justify Content */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Justify Content - Gorizontal Joylashtirish</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
          <p className="text-gray-300 mb-4">Asosiy o&apos;q bo&apos;yicha (row da gorizontal) joylashtirish:</p>
          <CodeBlock 
            language="CSS"
            code={`/* Boshidan */
.container {
    display: flex;
    justify-content: flex-start;  /* Default */
}

/* Oxiridan */
.container {
    justify-content: flex-end;
}

/* Markazda */
.container {
    justify-content: center;
}

/* Orasida teng bo'shliq */
.container {
    justify-content: space-between;
}

/* Atrofida teng bo'shliq */
.container {
    justify-content: space-around;
}

/* Har tarafda teng bo'shliq */
.container {
    justify-content: space-evenly;
}`}
          />
        </div>
      </div>

      {/* Align Items */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Align Items - Vertikal Joylashtirish</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-cyan-500/30">
          <p className="text-gray-300 mb-4">Kesishma o&apos;q bo&apos;yicha (row da vertikal) joylashtirish:</p>
          <CodeBlock 
            language="CSS"
            code={`/* Yuqoridan */
.container {
    display: flex;
    align-items: flex-start;
}

/* Pastdan */
.container {
    align-items: flex-end;
}

/* Markazda */
.container {
    align-items: center;
}

/* Cho'zish */
.container {
    align-items: stretch;  /* Default */
}

/* Baseline */
.container {
    align-items: baseline;
}`}
          />
        </div>
      </div>

      {/* Markazga joylashtirish */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Markazga Joylashtirish - Eng Ko&apos;p Ishlatiladigan!</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-pink-500/30">
          <p className="text-gray-300 mb-4">Flexbox ning eng kuchli tomoni - markazga joylashtirish juda oson:</p>
          <CodeBlock 
            language="CSS"
            code={`/* Perfect centering */
.container {
    display: flex;
    justify-content: center;  /* Gorizontal markazda */
    align-items: center;      /* Vertikal markazda */
    height: 100vh;            /* To'liq ekran balandligi */
}

/* Misol */
.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}`}
          />
          
          <div className="mt-6 bg-pink-500/10 p-4 rounded">
            <p className="text-pink-300 text-sm">
              ⭐ Bu usul eski usullardan (margin: auto, position: absolute) ancha oson va ishonchli!
            </p>
          </div>
        </div>
      </div>

      {/* Gap */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Gap - Oraliq Bo&apos;shliq</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-yellow-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Barcha tomonlarda bir xil */
.container {
    display: flex;
    gap: 20px;
}

/* Row va column uchun alohida */
.container {
    display: flex;
    gap: 20px 30px;  /* row-gap column-gap */
}

/* Alohida */
.container {
    display: flex;
    row-gap: 20px;
    column-gap: 30px;
}`}
          />
        </div>
      </div>

      {/* Flex Wrap */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Flex Wrap - Qatorga O&apos;tish</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-red-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Wrap yo'q (default) */
.container {
    display: flex;
    flex-wrap: nowrap;
}

/* Wrap - yangi qatorga o'tadi */
.container {
    display: flex;
    flex-wrap: wrap;
}

/* Wrap reverse */
.container {
    display: flex;
    flex-wrap: wrap-reverse;
}

/* Responsive cards */
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px;  /* Minimum 300px */
}`}
          />
        </div>
      </div>

      {/* Flex Item Properties */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Flex Item Xususiyatlari</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-indigo-500/30">
            <h3 className="text-xl font-medium text-indigo-400 mb-4">Flex Grow - O&apos;sish</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Bo'sh joyni egallash */
.item {
    flex-grow: 1;  /* Teng bo'linadi */
}

/* Biri kattaroq */
.item-1 { flex-grow: 1; }
.item-2 { flex-grow: 2; }  /* 2 barobar katta */
.item-3 { flex-grow: 1; }`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-teal-500/30">
            <h3 className="text-xl font-medium text-teal-400 mb-4">Flex Shrink - Kichrayish</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Kichrayishi mumkin */
.item {
    flex-shrink: 1;  /* Default */
}

/* Kichraymasin */
.item {
    flex-shrink: 0;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-lime-500/30">
            <h3 className="text-xl font-medium text-lime-400 mb-4">Flex Basis - Asosiy O&apos;lcham</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Boshlang'ich o'lcham */
.item {
    flex-basis: 200px;
}

/* Auto */
.item {
    flex-basis: auto;  /* Default */
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-emerald-500/30">
            <h3 className="text-xl font-medium text-emerald-400 mb-4">Flex Shorthand - Qisqa Yozuv</h3>
            <CodeBlock 
              language="CSS"
              code={`/* flex: grow shrink basis */

/* Teng bo'linish */
.item {
    flex: 1;  /* flex: 1 1 0% */
}

/* Aniq o'lcham */
.item {
    flex: 0 0 200px;  /* Aniq 200px */
}

/* Responsive */
.item {
    flex: 1 1 300px;  /* Min 300px, o'sadi */
}`}
            />
            
            <div className="mt-4 bg-emerald-500/10 p-3 rounded">
              <p className="text-emerald-300 text-sm">
                💡 <strong>flex: 1</strong> - eng ko&apos;p ishlatiladigan! Barcha itemlar teng bo&apos;linadi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Amaliy misollar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Amaliy Misollar</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-medium text-blue-400 mb-4">1. Navigation Menu</h3>
            <CodeBlock 
              language="CSS"
              code={`nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-medium text-green-400 mb-4">2. Card Grid</h3>
            <CodeBlock 
              language="CSS"
              code={`.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.card {
    flex: 1 1 300px;  /* Min 300px, responsive */
    padding: 2rem;
    border-radius: 8px;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-medium text-purple-400 mb-4">3. Sidebar Layout</h3>
            <CodeBlock 
              language="CSS"
              code={`.layout {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    flex: 0 0 250px;  /* Fixed 250px */
}

.main {
    flex: 1;  /* Qolgan joy */
}`}
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
            Flexbox ni mashq qiling:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">1.</strong> 3 ta div ni markazga joylashtiring</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">2.</strong> Horizontal navigation menu yarating</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">3.</strong> Responsive card grid yarating</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">4.</strong> Sidebar + content layout yarating</p>
            </div>
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
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Header</h3>
              <p className="text-gray-300 mb-4">Flexbox bilan header yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Logo chapda</li>
                <li>Menu o&apos;rtada</li>
                <li>Button o&apos;ngda</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Feature cards</h3>
              <p className="text-gray-300 mb-4">3 ta teng kartochka yarating</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Footer</h3>
              <p className="text-gray-300 mb-4">4 ustunli footer yarating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa */}
      <div className="mb-12 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-2xl p-8 hover:border-teal-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🏠</span>
          <h2 className="text-3xl font-semibold text-gray-100">Uyga Vazifa</h2>
        </div>
        
        <div className="space-y-6">
          {[
            {
              num: "1",
              title: "To'liq landing page",
              desc: "Faqat Flexbox ishlatib landing page yarating:",
              items: [
                "Header (logo, menu, button)",
                "Hero (centered content)",
                "Features (3 cards)",
                "Testimonials (2 columns)",
                "Footer (4 columns)",
                "To'liq responsive"
              ]
            },
            {
              num: "2",
              title: "Dashboard",
              desc: "Flexbox bilan dashboard yarating:",
              items: [
                "Sidebar + main layout",
                "Stats cards (4 ta)",
                "Charts section",
                "Table",
                "Responsive"
              ]
            },
            {
              num: "3",
              title: "E-commerce kartochkalar",
              desc: "Mahsulot kartochkalari grid yarating:",
              items: [
                "6 ta mahsulot kartochkasi",
                "Rasm, nom, narx, button",
                "Flexbox bilan ichki layout",
                "Hover effektlar",
                "Responsive (mobile: 1 ustun, tablet: 2, desktop: 3)"
              ]
            },
            {
              num: "4",
              title: "Blog layout",
              desc: "Blog sahifasi yarating. Header (logo, menu). Sidebar (categories, recent posts). Main content (blog posts). Footer (3 ustun). Flexbox bilan barcha layout. Responsive dizayn."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all border border-gray-800 hover:border-teal-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center font-bold text-white">
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

      {/* Qo'shimcha resurslar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">📚 Qo&apos;shimcha resurslar</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2">🎮 Flexbox Froggy</h3>
            <p className="text-gray-400 text-sm mb-3">O&apos;yin orqali o&apos;rganish</p>
            <a href="https://flexboxfroggy.com/" target="_blank" rel="noopener noreferrer" 
               className="text-blue-400 hover:text-blue-300 text-sm">
              flexboxfroggy.com →
            </a>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2">📖 CSS Tricks Guide</h3>
            <p className="text-gray-400 text-sm mb-3">To&apos;liq qo&apos;llanma</p>
            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer"
               className="text-green-400 hover:text-green-300 text-sm">
              css-tricks.com →
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/gradients" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Gradients
        </Link>
        
        <Link href="/docs/css/grid" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Grid
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
