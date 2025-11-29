"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Type, Sparkles, FileText, Play } from "lucide-react";

export default function CSSFontsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-red-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-full text-sm mb-6">
            <Type className="w-4 h-4 text-pink-400" />
            <span className="text-pink-300 font-semibold">CSS FONTS</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 mb-4">
            CSS Fonts
          </h1>
          <p className="text-2xl text-gray-300">
            Shriftlar - dizaynning muhim qismi
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
          <p className="text-gray-400 mb-4">CSS Fonts - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-pink-500/50 transition-all">
            <div className="text-center">
              <Play className="w-16 h-16 text-pink-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Font Family */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Font Family</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-medium text-blue-400 mb-4">Asosiy font turlari</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Serif - klassik */
p {
    font-family: Georgia, 'Times New Roman', serif;
}

/* Sans-serif - zamonaviy */
p {
    font-family: Arial, Helvetica, sans-serif;
}

/* Monospace - kod uchun */
code {
    font-family: 'Courier New', Courier, monospace;
}

/* Cursive - qo'lyozma */
p {
    font-family: 'Brush Script MT', cursive;
}

/* Fantasy - dekorativ */
h1 {
    font-family: Impact, fantasy;
}`}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded" style={{fontFamily: 'Georgia, serif'}}>
              <p className="text-gray-300 mb-2"><strong>Serif</strong></p>
              <p className="text-gray-400 text-sm">Klassik va rasmiy</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded" style={{fontFamily: 'Arial, sans-serif'}}>
              <p className="text-gray-300 mb-2"><strong>Sans-serif</strong></p>
              <p className="text-gray-400 text-sm">Zamonaviy va toza</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded" style={{fontFamily: 'Courier New, monospace'}}>
              <p className="text-gray-300 mb-2"><strong>Monospace</strong></p>
              <p className="text-gray-400 text-sm">Kod va texnik</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded" style={{fontFamily: 'cursive'}}>
              <p className="text-gray-300 mb-2"><strong>Cursive</strong></p>
              <p className="text-gray-400 text-sm">Qo&apos;lyozma</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Fonts */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Google Fonts</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-medium text-green-400 mb-4">Google Fonts qo&apos;shish</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 mb-2">1. HTML da:</p>
                <CodeBlock 
                  language="HTML"
                  code={`<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>`}
                />
              </div>

              <div>
                <p className="text-gray-300 mb-2">2. CSS da:</p>
                <CodeBlock 
                  language="CSS"
                  code={`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
    font-family: 'Roboto', sans-serif;
}`}
                />
              </div>

              <div>
                <p className="text-gray-300 mb-2">3. Ishlatish:</p>
                <CodeBlock 
                  language="CSS"
                  code={`body {
    font-family: 'Roboto', sans-serif;
}

h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
}`}
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r">
            <p className="text-gray-300">
              <strong className="text-blue-400">Maslahat:</strong> Ko&apos;p font yuklash sahifani sekinlashtiradi. Faqat keraklilarini yuklang!
            </p>
          </div>
        </div>
      </div>

      {/* Font Size */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Font Size</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Absolute */
p {
    font-size: 16px;
    font-size: 14pt;
}

/* Relative */
p {
    font-size: 1rem;      /* Root ga nisbatan */
    font-size: 1.5em;     /* Parent ga nisbatan */
    font-size: 100%;
}

/* Responsive */
h1 {
    font-size: clamp(2rem, 5vw, 4rem);
}

/* Keywords */
p {
    font-size: small;
    font-size: medium;
    font-size: large;
    font-size: x-large;
}`}
          />
          
          <div className="mt-6 space-y-2">
            <p style={{fontSize: '12px'}}>12px - Kichik</p>
            <p style={{fontSize: '16px'}}>16px - O&apos;rta (default)</p>
            <p style={{fontSize: '20px'}}>20px - Katta</p>
            <p style={{fontSize: '24px'}}>24px - Juda katta</p>
          </div>
        </div>
      </div>

      {/* Font Weight */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Font Weight</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Keywords */
p {
    font-weight: normal;    /* 400 */
    font-weight: bold;      /* 700 */
    font-weight: lighter;
    font-weight: bolder;
}

/* Numbers (100-900) */
p {
    font-weight: 100;  /* Thin */
    font-weight: 200;  /* Extra Light */
    font-weight: 300;  /* Light */
    font-weight: 400;  /* Normal */
    font-weight: 500;  /* Medium */
    font-weight: 600;  /* Semi Bold */
    font-weight: 700;  /* Bold */
    font-weight: 800;  /* Extra Bold */
    font-weight: 900;  /* Black */
}`}
          />
          
          <div className="mt-6 space-y-2">
            <p style={{fontWeight: 300}}>300 - Light</p>
            <p style={{fontWeight: 400}}>400 - Normal</p>
            <p style={{fontWeight: 500}}>500 - Medium</p>
            <p style={{fontWeight: 600}}>600 - Semi Bold</p>
            <p style={{fontWeight: 700}}>700 - Bold</p>
            <p style={{fontWeight: 900}}>900 - Black</p>
          </div>
        </div>
      </div>

      {/* Font Style */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Font Style va Variant</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-medium text-cyan-400 mb-4">Font Style</h3>
            <CodeBlock 
              language="CSS"
              code={`p {
    font-style: normal;
    font-style: italic;
    font-style: oblique;
}`}
            />
            
            <div className="mt-4 space-y-2">
              <p style={{fontStyle: 'normal'}}>Normal matn</p>
              <p style={{fontStyle: 'italic'}}>Italic matn</p>
              <p style={{fontStyle: 'oblique'}}>Oblique matn</p>
            </div>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-pink-500/30">
            <h3 className="text-xl font-medium text-pink-400 mb-4">Font Variant</h3>
            <CodeBlock 
              language="CSS"
              code={`p {
    font-variant: normal;
    font-variant: small-caps;  /* KICHIK BOSH HARFLAR */
}`}
            />
            
            <div className="mt-4 space-y-2">
              <p style={{fontVariant: 'normal'}}>Normal matn</p>
              <p style={{fontVariant: 'small-caps'}}>Small caps matn</p>
            </div>
          </div>
        </div>
      </div>

      {/* Font Shorthand */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Font Shorthand</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-yellow-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* font: style variant weight size/line-height family */

/* To'liq */
p {
    font: italic small-caps bold 16px/1.5 Arial, sans-serif;
}

/* Minimal */
p {
    font: 16px Arial;
}

/* Responsive */
p {
    font: 400 clamp(1rem, 2vw, 1.5rem)/1.6 'Roboto', sans-serif;
}`}
          />
        </div>
      </div>

      {/* Custom Fonts */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">@font-face - Custom Fonts</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-red-500/30">
          <CodeBlock 
            language="CSS"
            code={`@font-face {
    font-family: 'MyCustomFont';
    src: url('fonts/mycustomfont.woff2') format('woff2'),
         url('fonts/mycustomfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;  /* Performance uchun */
}

/* Ishlatish */
body {
    font-family: 'MyCustomFont', Arial, sans-serif;
}

/* Multiple weights */
@font-face {
    font-family: 'MyFont';
    src: url('fonts/myfont-regular.woff2') format('woff2');
    font-weight: 400;
}

@font-face {
    font-family: 'MyFont';
    src: url('fonts/myfont-bold.woff2') format('woff2');
    font-weight: 700;
}`}
          />
        </div>
      </div>

      {/* Amaliy mashq */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-500 p-8 rounded-r">
          <h2 className="text-3xl font-semibold text-gray-100 mb-4 flex items-center gap-3">
            <span className="text-4xl">💻</span> Amaliy mashq
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Font bilan ishlashni mashq qiling:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">1.</strong> Google Fonts dan 2 ta font tanlang va qo&apos;shing</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">2.</strong> Sarlavhalar uchun bitta, matn uchun boshqa font</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">3.</strong> Har xil font-weight larni sinab ko&apos;ring</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">4.</strong> Responsive font-size (clamp) yarating</p>
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
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Font showcase</h3>
              <p className="text-gray-300 mb-4">5 ta turli font ko&apos;rsating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Har biri uchun sarlavha va paragraf</li>
                <li>Font nomi va turi ko&apos;rsatilsin</li>
                <li>Har xil font-weight lar</li>
                <li>Chiroyli dizayn</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Typography system</h3>
              <p className="text-gray-300 mb-4">To&apos;liq typography tizimi yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>h1-h6 uchun font-size lar</li>
                <li>p, small, large uchun o&apos;lchamlar</li>
                <li>Barcha font-weight lar</li>
                <li>Responsive (clamp)</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Font pairing</h3>
              <p className="text-gray-300 mb-4">3 ta font juftligini sinab ko&apos;ring:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Serif + Sans-serif</li>
                <li>Sans-serif + Monospace</li>
                <li>Display + Body font</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa */}
      <div className="mb-12 bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-2xl p-8 hover:border-pink-500/40 transition-all">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">🏠</span> Uyga vazifa
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">1️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Magazine layout</h3>
                  <p className="text-gray-300 mb-4">Jurnal uslubida sahifa yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Katta sarlavha (display font)</li>
                    <li>Kichik sarlavhalar (sans-serif)</li>
                    <li>Body text (serif, o&apos;qish uchun qulay)</li>
                    <li>Quotes (italic, katta)</li>
                    <li>Captions (kichik, light)</li>
                    <li>To&apos;liq responsive</li>
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
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Font library</h3>
                  <p className="text-gray-300 mb-4">O&apos;zingizning font kutubxonangiz:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>10 ta Google Font</li>
                    <li>Har biri uchun misol matn</li>
                    <li>Qayerda ishlatish tavsiyasi</li>
                    <li>Font pairing lar</li>
                    <li>Chiroyli kartochka dizayni</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 2-2.5 soat | 📊 Qiyinlik: O&apos;rta</p>
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
            <h3 className="text-lg font-medium text-gray-100 mb-2">🔤 Google Fonts</h3>
            <p className="text-gray-400 text-sm mb-3">Bepul fontlar kutubxonasi</p>
            <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer" 
               className="text-blue-400 hover:text-blue-300 text-sm">
              fonts.google.com →
            </a>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2">🎨 Font Pair</h3>
            <p className="text-gray-400 text-sm mb-3">Font juftliklarini toping</p>
            <a href="https://fontpair.co/" target="_blank" rel="noopener noreferrer"
               className="text-green-400 hover:text-green-300 text-sm">
              fontpair.co →
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/text" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Text
        </Link>
        
        <Link href="/docs/css/icons" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Icons
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
