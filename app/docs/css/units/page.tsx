"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Ruler, Sparkles, Maximize, Play } from "lucide-react";

export default function CSSUnitsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-sm mb-6">
            <Ruler className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">CSS UNITS</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 mb-4">
            CSS Units
          </h1>
          <p className="text-2xl text-gray-300">
            O'lchov birliklari - to'g'ri tanlash muhim!
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
          <p className="text-gray-400 mb-4">CSS Units - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-cyan-500/50 transition-all">
            <div className="text-center">
              <Play className="w-16 h-16 text-cyan-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Absolute Units */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Absolute Units (Mutlaq)</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-2xl font-medium text-blue-400 mb-4">px - Pixel</h3>
            <p className="text-gray-300 mb-4">Eng ko&apos;p ishlatiladigan birlik</p>
            <CodeBlock 
              language="CSS"
              code={`div {
    width: 300px;
    height: 200px;
    font-size: 16px;
    padding: 20px;
    margin: 10px;
}

/* Responsive emas! */
p {
    font-size: 14px;  /* Har doim 14px */
}`}
            />
            <div className="mt-4 bg-blue-500/10 p-3 rounded">
              <p className="text-blue-300 text-sm">✅ Aniq o&apos;lcham kerak bo&apos;lganda ishlatiladi</p>
            </div>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-medium text-gray-300 mb-4">Boshqa Absolute Units</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-900/50 p-4 rounded">
                <code className="text-cyan-400">cm</code>
                <p className="text-gray-400 text-sm mt-2">Santimetr (print uchun)</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded">
                <code className="text-cyan-400">mm</code>
                <p className="text-gray-400 text-sm mt-2">Millimetr (print uchun)</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded">
                <code className="text-cyan-400">in</code>
                <p className="text-gray-400 text-sm mt-2">Inch (print uchun)</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded">
                <code className="text-cyan-400">pt</code>
                <p className="text-gray-400 text-sm mt-2">Point (print uchun)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Relative Units */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Relative Units (Nisbiy)</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-medium text-green-400 mb-4">% - Percentage</h3>
            <p className="text-gray-300 mb-4">Ota elementga nisbatan</p>
            <CodeBlock 
              language="CSS"
              code={`/* Parent 1000px bo'lsa */
.parent {
    width: 1000px;
}

.child {
    width: 50%;  /* 500px bo'ladi */
    padding: 10%;  /* 100px bo'ladi */
}

/* Responsive! */
div {
    width: 80%;  /* Ekran o'lchamiga qarab o'zgaradi */
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-medium text-purple-400 mb-4">em - Element</h3>
            <p className="text-gray-300 mb-4">Joriy element font-size ga nisbatan</p>
            <CodeBlock 
              language="CSS"
              code={`div {
    font-size: 16px;
    padding: 1em;  /* 16px */
    margin: 2em;   /* 32px */
}

/* Nested elements */
.parent {
    font-size: 20px;
}

.child {
    font-size: 1.5em;  /* 30px (20 * 1.5) */
}

.grandchild {
    font-size: 1.5em;  /* 45px (30 * 1.5) - Compound! */
}`}
            />
            <div className="mt-4 bg-purple-500/10 p-3 rounded">
              <p className="text-purple-300 text-sm">⚠️ Nested elementlarda compound bo&apos;ladi!</p>
            </div>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-2xl font-medium text-orange-400 mb-4">rem - Root Element</h3>
            <p className="text-gray-300 mb-4">Root (html) element font-size ga nisbatan</p>
            <CodeBlock 
              language="CSS"
              code={`/* Default: 16px */
html {
    font-size: 16px;
}

div {
    font-size: 1rem;    /* 16px */
    padding: 2rem;      /* 32px */
    margin: 1.5rem;     /* 24px */
}

/* Nested bo'lmaydi! */
.parent {
    font-size: 2rem;  /* 32px */
}

.child {
    font-size: 1.5rem;  /* 24px (16 * 1.5) - Root ga nisbatan! */
}`}
            />
            <div className="mt-4 bg-orange-500/10 p-3 rounded">
              <p className="text-orange-300 text-sm">✅ Tavsiya etiladi! Compound muammosi yo&apos;q</p>
            </div>
          </div>
        </div>
      </div>

      {/* Viewport Units */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Viewport Units</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-medium text-cyan-400 mb-4">vw, vh, vmin, vmax</h3>
            <CodeBlock 
              language="CSS"
              code={`/* vw - Viewport Width */
div {
    width: 50vw;  /* Ekran kengligining 50% */
}

/* vh - Viewport Height */
div {
    height: 100vh;  /* To'liq ekran balandligi */
}

/* vmin - Kichik tomoni */
div {
    width: 50vmin;  /* width va height dan kichigi */
}

/* vmax - Katta tomoni */
div {
    width: 50vmax;  /* width va height dan kattasi */
}

/* Full screen hero */
.hero {
    width: 100vw;
    height: 100vh;
}`}
            />
          </div>
        </div>
      </div>

      {/* Modern Units */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Modern CSS Functions</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-pink-500/30">
            <h3 className="text-xl font-medium text-pink-400 mb-4">calc() - Hisoblash</h3>
            <CodeBlock 
              language="CSS"
              code={`div {
    width: calc(100% - 50px);
    height: calc(100vh - 80px);
    padding: calc(1rem + 10px);
}

/* Responsive */
.container {
    width: calc(100% - 2rem);
    max-width: 1200px;
    margin: 0 auto;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-yellow-500/30">
            <h3 className="text-xl font-medium text-yellow-400 mb-4">clamp() - Chegaralash</h3>
            <CodeBlock 
              language="CSS"
              code={`/* clamp(min, preferred, max) */
h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
    /* Min: 1.5rem, Ideal: 5vw, Max: 3rem */
}

div {
    width: clamp(300px, 50%, 800px);
    padding: clamp(1rem, 2vw, 3rem);
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-medium text-green-400 mb-4">min() va max()</h3>
            <CodeBlock 
              language="CSS"
              code={`/* min() - Kichigini tanlaydi */
div {
    width: min(500px, 100%);
    /* 500px yoki 100% dan kichigi */
}

/* max() - Kattasini tanlaydi */
div {
    width: max(300px, 50%);
    /* 300px yoki 50% dan kattasi */
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
            Har xil unitlarni sinab ko&apos;ring:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">1.</strong> 3 ta div yarating: biri px, biri %, biri rem</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">2.</strong> Ekran o&apos;lchamini o&apos;zgartirib farqni ko&apos;ring</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">3.</strong> calc() ishlatib murakkab hisob qiling</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">4.</strong> clamp() bilan responsive font yarating</p>
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
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Unit taqqoslash</h3>
              <p className="text-gray-300 mb-4">4 ta bir xil div yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>1-div: width: 300px</li>
                <li>2-div: width: 50%</li>
                <li>3-div: width: 20rem</li>
                <li>4-div: width: 30vw</li>
                <li>Ekran o&apos;lchamini o&apos;zgartirib farqni kuzating</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Responsive typography</h3>
              <p className="text-gray-300 mb-4">clamp() ishlatib responsive matn yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>h1: clamp(2rem, 5vw, 4rem)</li>
                <li>h2: clamp(1.5rem, 4vw, 3rem)</li>
                <li>p: clamp(1rem, 2vw, 1.25rem)</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: calc() mashqlari</h3>
              <p className="text-gray-300 mb-4">calc() bilan murakkab layout yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Container: width: calc(100% - 4rem)</li>
                <li>Sidebar: width: calc(25% - 1rem)</li>
                <li>Content: width: calc(75% - 1rem)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa */}
      <div className="mb-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🏠</span>
          <h2 className="text-3xl font-semibold text-gray-100">Uyga Vazifa</h2>
        </div>
        
        <div className="space-y-6">
          {[
            {
              num: "1",
              title: "To'liq responsive sahifa",
              desc: "Faqat rem, %, vw/vh ishlatib sahifa yarating:",
              items: [
                "Container (max-width: 80rem, padding: 2rem)",
                "Header (height: 10vh, padding: 1rem)",
                "Hero section (height: 80vh)",
                "Cards (width: calc(33.333% - 2rem))",
                "Footer (padding: 3rem 0)",
                "Barcha matnlar clamp() bilan"
              ]
            },
            {
              num: "2",
              title: "Unit calculator",
              desc: "Turli unitlarni taqqoslaydigan sahifa:",
              items: [
                "5 ta div (px, %, rem, em, vw)",
                "Har birida o'lcham ko'rsatilsin",
                "Ekran o'lchami o'zgarganda yangilansin",
                "Vizual taqqoslash"
              ]
            },
            {
              num: "3",
              title: "Typography system",
              desc: "Rem asosli tipografiya tizimi:",
              items: [
                "Base font-size: 16px (1rem)",
                "h1: 3rem, h2: 2.5rem, h3: 2rem...",
                "Paragraf: 1rem, line-height: 1.6",
                "Spacing: 0.5rem, 1rem, 1.5rem, 2rem",
                "Responsive (mobile: 14px, desktop: 16px)"
              ]
            },
            {
              num: "4",
              title: "Viewport units showcase",
              desc: "vw, vh, vmin, vmax bilan sahifa. Full-screen hero (100vh). Responsive matn (clamp(1rem, 2vw, 3rem)). Sidebar (20vw). Content (calc(80vw - 2rem)). Barcha elementlar viewport ga moslashsin."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all border border-gray-800 hover:border-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
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
            <h3 className="text-lg font-medium text-gray-100 mb-2">📏 CSS Units Guide</h3>
            <p className="text-gray-400 text-sm mb-3">To&apos;liq qo&apos;llanma</p>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units" target="_blank" rel="noopener noreferrer" 
               className="text-blue-400 hover:text-blue-300 text-sm">
              MDN Docs →
            </a>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2">🧮 Unit Converter</h3>
            <p className="text-gray-400 text-sm mb-3">Online konverter</p>
            <a href="https://nekocalc.com/px-to-rem-converter" target="_blank" rel="noopener noreferrer"
               className="text-green-400 hover:text-green-300 text-sm">
              nekocalc.com →
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/box-model" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Box Model
        </Link>
        
        <Link href="/docs/css/text" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Text
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
