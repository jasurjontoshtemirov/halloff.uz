"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Type, Sparkles, AlignLeft, Play } from "lucide-react";

export default function CSSTextPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-sm mb-6">
            <Type className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 font-semibold">CSS TEXT</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4">
            CSS Text
          </h1>
          <p className="text-2xl text-gray-300">
            Matnlarni professional formatlash
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
          <p className="text-gray-400 mb-4">CSS Text - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-indigo-500/50 transition-all">
            <div className="text-center">
              <Play className="w-16 h-16 text-indigo-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Text Color */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Text Color</h2>
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
          <CodeBlock 
            language="CSS"
            code={`p {
    color: #333;
    color: rgb(51, 51, 51);
    color: rgba(0, 0, 0, 0.8);
}

/* Gradient text */
h1 {
    background: linear-gradient(to right, #ff0000, #00ff00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}`}
          />
        </div>
      </div>

      {/* Text Alignment */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Text Alignment</h2>
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <CodeBlock 
              language="CSS"
              code={`/* Gorizontal */
p {
    text-align: left;     /* Chapga */
    text-align: center;   /* Markazga */
    text-align: right;    /* O'ngga */
    text-align: justify;  /* Ikki tomonlama */
}

/* Vertikal */
div {
    height: 200px;
    display: flex;
    align-items: center;  /* Vertikal markazda */
}`}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded border-l-4 border-blue-500">
              <p className="text-left">Chapga tekislangan</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded border-l-4 border-green-500">
              <p className="text-center">Markazga tekislangan</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded border-l-4 border-purple-500">
              <p className="text-right">O&apos;ngga tekislangan</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded border-l-4 border-orange-500">
              <p className="text-justify">Ikki tomonlama tekislangan matn. Bu matn ikki chetga ham tekislanadi.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Text Decoration */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Text Decoration</h2>
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Chiziq */
a {
    text-decoration: none;           /* Chizigsiz */
    text-decoration: underline;      /* Ostiga chiziq */
    text-decoration: overline;       /* Ustiga chiziq */
    text-decoration: line-through;   /* O'rtasiga chiziq */
}

/* Stil */
a {
    text-decoration: underline wavy red;
    text-decoration: underline dotted blue;
    text-decoration: underline double green;
}

/* Hover */
a {
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}`}
          />
          
          <div className="mt-6 space-y-2">
            <p className="underline">Underline - ostiga chiziq</p>
            <p className="overline">Overline - ustiga chiziq</p>
            <p className="line-through">Line-through - o&apos;rtasiga chiziq</p>
          </div>
        </div>
      </div>

      {/* Text Transform */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Text Transform</h2>
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
          <CodeBlock 
            language="CSS"
            code={`p {
    text-transform: uppercase;    /* KATTA HARF */
    text-transform: lowercase;    /* kichik harf */
    text-transform: capitalize;   /* Har Bir So'z Bosh Harf */
    text-transform: none;         /* O'zgartirmaslik */
}`}
          />
          
          <div className="mt-6 space-y-2">
            <p className="uppercase">uppercase - katta harf</p>
            <p className="lowercase">LOWERCASE - kichik harf</p>
            <p className="capitalize">capitalize - har bir so&apos;z</p>
          </div>
        </div>
      </div>

      {/* Text Spacing */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Text Spacing</h2>
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-medium text-cyan-400 mb-4">Line Height</h3>
            <CodeBlock 
              language="CSS"
              code={`p {
    line-height: 1.5;      /* Tavsiya etiladi */
    line-height: 1.6;
    line-height: 24px;
    line-height: 150%;
}

/* O'qish uchun qulay */
.readable {
    line-height: 1.6;
    max-width: 70ch;  /* 70 ta belgi */
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-pink-500/30">
            <h3 className="text-xl font-medium text-pink-400 mb-4">Letter Spacing</h3>
            <CodeBlock 
              language="CSS"
              code={`h1 {
    letter-spacing: 2px;      /* Harflar orasida bo'shliq */
    letter-spacing: 0.1em;
    letter-spacing: -1px;     /* Yaqinlashtirish */
}

/* Sarlavhalar uchun */
.title {
    letter-spacing: 0.05em;
    text-transform: uppercase;
}`}
            />
            
            <div className="mt-6 space-y-4">
              <p style={{letterSpacing: '0px'}}>Normal - letter-spacing: 0</p>
              <p style={{letterSpacing: '2px'}}>Keng - letter-spacing: 2px</p>
              <p style={{letterSpacing: '5px'}}>Juda keng - letter-spacing: 5px</p>
            </div>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-yellow-500/30">
            <h3 className="text-xl font-medium text-yellow-400 mb-4">Word Spacing</h3>
            <CodeBlock 
              language="CSS"
              code={`p {
    word-spacing: 5px;
    word-spacing: 0.5em;
    word-spacing: normal;
}`}
            />
          </div>
        </div>
      </div>

      {/* Text Shadow */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Text Shadow</h2>
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-red-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* text-shadow: x y blur color */
h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Multiple shadows */
h1 {
    text-shadow: 
        2px 2px 4px rgba(0, 0, 0, 0.5),
        -2px -2px 4px rgba(255, 255, 255, 0.3);
}

/* Glow effect */
h1 {
    text-shadow: 0 0 10px #00ff00;
}

/* 3D effect */
h1 {
    text-shadow: 
        1px 1px 0 #ccc,
        2px 2px 0 #bbb,
        3px 3px 0 #aaa,
        4px 4px 0 #999;
}`}
          />
          
          <div className="mt-6 space-y-4">
            <h2 className="text-3xl" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Oddiy soya</h2>
            <h2 className="text-3xl" style={{textShadow: '0 0 10px #00ff00'}}>Glow effekt</h2>
          </div>
        </div>
      </div>

      {/* Text Overflow */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Text Overflow</h2>
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Ellipsis (...) */
.truncate {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Multiple lines */
.line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 3;  /* 3 qator */
    -webkit-box-orient: vertical;
    overflow: hidden;
}`}
          />
          
          <div className="mt-6 space-y-4">
            <div className="w-64 whitespace-nowrap overflow-hidden text-ellipsis bg-gray-900/50 p-3 rounded">
              Bu juda uzun matn va u qisqartiriladi...
            </div>
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
            Matn stillarini mashq qiling:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">1.</strong> 5 ta paragraf yarating va har biriga turli text-align</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">2.</strong> Sarlavhaga text-shadow qo&apos;shing</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">3.</strong> Havolalarga hover effekti (text-decoration)</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">4.</strong> Uzun matnni ellipsis bilan qisqartiring</p>
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
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Blog post</h3>
              <p className="text-gray-300 mb-4">O&apos;qish uchun qulay blog post yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Sarlavha (text-align: center, text-shadow)</li>
                <li>Muallif (text-transform: uppercase, letter-spacing)</li>
                <li>Matn (line-height: 1.6, max-width: 70ch)</li>
                <li>Havolalar (text-decoration, hover)</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Kartochka</h3>
              <p className="text-gray-300 mb-4">Mahsulot kartochkasi yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Nomi (text-overflow: ellipsis)</li>
                <li>Tavsif (line-clamp: 3)</li>
                <li>Narx (text-shadow, color)</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Gradient text</h3>
              <p className="text-gray-300 mb-4">Gradient matn yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Katta sarlavha</li>
                <li>Gradient background</li>
                <li>-webkit-background-clip: text</li>
                <li>Animatsiya qo&apos;shing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa */}
      <div className="mb-12 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">🏠</span> Uyga vazifa
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">1️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Typography showcase</h3>
                  <p className="text-gray-300 mb-4">Barcha text xususiyatlarini ko&apos;rsatuvchi sahifa:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>10 ta turli sarlavha stili</li>
                    <li>5 ta paragraf stili</li>
                    <li>Har xil text-shadow effektlar</li>
                    <li>Gradient matnlar</li>
                    <li>Hover effektlari</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 2-2.5 soat | 📊 Qiyinlik: O&apos;rta</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">2️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Maqola sahifasi</h3>
                  <p className="text-gray-300 mb-4">Professional maqola layout:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Hero sarlavha (gradient, shadow)</li>
                    <li>Meta ma&apos;lumot (kichik, uppercase)</li>
                    <li>O&apos;qish uchun qulay matn (line-height, max-width)</li>
                    <li>Quote lar (italic, border-left)</li>
                    <li>Havolalar (underline hover)</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 1.5-2 soat | 📊 Qiyinlik: O&apos;rta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/units" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Units
        </Link>
        
        <Link href="/docs/css/fonts" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Fonts
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
