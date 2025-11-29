"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Box, Sparkles, Layers, Play, Square } from "lucide-react";

export default function CSSBoxModelPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-yellow-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-full text-sm mb-6">
            <Box className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 font-semibold">BOX MODEL</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 mb-4">
            CSS Box Model
          </h1>
          <p className="text-2xl text-gray-300">
            Border, Padding, Margin - elementning anatomiyasi
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-amber-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
          <p className="text-gray-400 mb-4">CSS Box Model - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-orange-500/50 transition-all">
            <div className="text-center">
              <Play className="w-16 h-16 text-orange-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Box Model nima */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Box Model nima?</h2>
        <div className="bg-gradient-to-r from-orange-500/5 to-red-500/5 border-l-4 border-orange-500 p-6 rounded-r">
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            CSS da har bir element <strong className="text-orange-400">to&apos;rtburchak quti</strong> sifatida ko&apos;riladi. 
            Box Model bu qutining tuzilmasini tushuntiradi.
          </p>
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <div className="text-center space-y-2">
              <div className="bg-blue-500/20 border-2 border-blue-500 p-4 rounded">
                <p className="text-blue-400 font-medium">Margin (Tashqi bo&apos;shliq)</p>
                <div className="bg-green-500/20 border-2 border-green-500 p-4 rounded mt-2">
                  <p className="text-green-400 font-medium">Border (Chegara)</p>
                  <div className="bg-yellow-500/20 border-2 border-yellow-500 p-4 rounded mt-2">
                    <p className="text-yellow-400 font-medium">Padding (Ichki bo&apos;shliq)</p>
                    <div className="bg-red-500/20 border-2 border-red-500 p-4 rounded mt-2">
                      <p className="text-red-400 font-medium">Content (Kontent)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Width va Height */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Width va Height</h2>
        <CodeBlock 
          language="CSS"
          code={`div {
    width: 300px;
    height: 200px;
    background-color: lightblue;
}

/* Percentage */
div {
    width: 50%;
    height: 100vh;
}

/* Min va Max */
div {
    min-width: 200px;
    max-width: 800px;
    min-height: 100px;
    max-height: 500px;
}`}
        />
      </div>

      {/* Padding */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Padding - Ichki bo&apos;shliq</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-yellow-500/30">
            <h3 className="text-xl font-medium text-yellow-400 mb-4">Barcha tomonlar</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Hammasi bir xil */
div {
    padding: 20px;
}

/* Har bir tomon alohida */
div {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
}

/* Shorthand */
div {
    padding: 10px 20px;  /* top/bottom left/right */
    padding: 10px 20px 30px;  /* top left/right bottom */
    padding: 10px 20px 30px 40px;  /* top right bottom left */
}`}
            />
          </div>
        </div>
      </div>

      {/* Border */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Border - Chegara</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-medium text-green-400 mb-4">Border xususiyatlari</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Asosiy */
div {
    border-width: 2px;
    border-style: solid;
    border-color: black;
}

/* Shorthand */
div {
    border: 2px solid black;
}

/* Har bir tomon */
div {
    border-top: 1px solid red;
    border-right: 2px dashed blue;
    border-bottom: 3px dotted green;
    border-left: 4px double orange;
}

/* Border radius */
div {
    border-radius: 10px;  /* Burchaklarni yumaloq qilish */
    border-radius: 50%;   /* Doira */
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-medium text-green-400 mb-4">Border stillari</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-900/50 p-4 rounded border-2 border-solid">
                <code className="text-green-400">solid</code>
              </div>
              <div className="bg-gray-900/50 p-4 rounded border-2 border-dashed">
                <code className="text-green-400">dashed</code>
              </div>
              <div className="bg-gray-900/50 p-4 rounded border-2 border-dotted">
                <code className="text-green-400">dotted</code>
              </div>
              <div className="bg-gray-900/50 p-4 rounded border-4 border-double">
                <code className="text-green-400">double</code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Margin */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Margin - Tashqi bo&apos;shliq</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-medium text-blue-400 mb-4">Margin ishlatish</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Hammasi bir xil */
div {
    margin: 20px;
}

/* Har bir tomon */
div {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
}

/* Markazga joylashtirish */
div {
    width: 500px;
    margin: 0 auto;  /* Gorizontal markazda */
}

/* Negative margin */
div {
    margin-top: -10px;  /* Yuqoriga ko'tarish */
}`}
            />
          </div>
        </div>
      </div>

      {/* Box Sizing */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Box Sizing</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Default - content-box */
div {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* Jami kenglik: 300 + 40 + 10 = 350px */
}

/* border-box - Tavsiya etiladi! */
* {
    box-sizing: border-box;
}

div {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* Jami kenglik: 300px (padding va border ichida) */
}`}
          />
          <div className="mt-4 bg-purple-500/10 p-3 rounded">
            <p className="text-purple-300 text-sm">
              💡 <strong>border-box</strong> ishlatish tavsiya etiladi - hisoblash osonroq!
            </p>
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
            Box Model bilan tanishing:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">1.</strong> 3 ta div yarating (300x200px)</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">2.</strong> Har biriga turli padding qo&apos;shing (10px, 20px, 30px)</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">3.</strong> Turli border stillarini sinab ko&apos;ring</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">4.</strong> Margin bilan orasiga bo&apos;shliq qo&apos;shing</p>
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
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Kartochka yarating</h3>
              <p className="text-gray-300 mb-4">Chiroyli kartochka dizayni:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Width: 300px, Height: 400px</li>
                <li>Padding: 20px</li>
                <li>Border: 2px solid gray</li>
                <li>Border-radius: 10px</li>
                <li>Margin: 20px (boshqa kartochkalardan ajratish uchun)</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Tugma stilash</h3>
              <p className="text-gray-300 mb-4">3 xil tugma yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Kichik tugma (padding: 8px 16px)</li>
                <li>O&apos;rta tugma (padding: 12px 24px)</li>
                <li>Katta tugma (padding: 16px 32px)</li>
                <li>Har biriga border va border-radius qo&apos;shing</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Box sizing test</h3>
              <p className="text-gray-300 mb-4">2 ta bir xil div yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Birinchisi: box-sizing: content-box</li>
                <li>Ikkinchisi: box-sizing: border-box</li>
                <li>Ikkalasiga ham width: 300px, padding: 20px, border: 5px</li>
                <li>Farqni kuzating!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa */}
      <div className="mb-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🏠</span>
          <h2 className="text-3xl font-semibold text-gray-100">Uyga Vazifa</h2>
        </div>
        
        <div className="space-y-6">
          {[
            {
              num: "1",
              title: "Mahsulot kartochkalari",
              desc: "6 ta mahsulot kartochkasi yarating:",
              items: [
                "Rasm uchun joy (width: 100%, height: 200px)",
                "Mahsulot nomi (padding: 15px)",
                "Narx (padding: 10px)",
                "Border va border-radius",
                "Kartochkalar orasida margin",
                "Hover da border rangi o'zgarsin"
              ]
            },
            {
              num: "2",
              title: "Blog post layout",
              desc: "Blog post sahifasi yarating:",
              items: [
                "Container (max-width: 800px, margin: 0 auto)",
                "Header (padding: 40px 20px)",
                "Content (padding: 20px, border: 1px solid)",
                "Sidebar (padding: 20px, margin-left: 20px)",
                "Footer (padding: 30px, margin-top: 40px)"
              ]
            },
            {
              num: "3",
              title: "Spacing system",
              desc: "O'zingizning spacing tizimingizni yarating:",
              items: [
                "8px asosli spacing (8, 16, 24, 32, 40, 48)",
                "Har bir spacing uchun class (.space-1, .space-2...)",
                "Margin va padding variantlari",
                "Demo sahifa yarating",
                "Barcha spacing'larni ko'rsating"
              ]
            },
            {
              num: "4",
              title: "Card collection",
              desc: "Turli xil kartochkalar to'plami. 5 xil dizayndagi kartochka. Har birida turli padding, margin, border. Box-shadow qo'shing. Responsive qiling. Grid yoki Flexbox bilan joylashtiring."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all border border-gray-800 hover:border-purple-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center font-bold text-white">
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

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/colors" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Colors
        </Link>
        
        <Link href="/docs/css/units" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Units
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
