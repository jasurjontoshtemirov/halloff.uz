"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Palette, Sparkles, Droplet, Play, Paintbrush } from "lucide-react";

export default function CSSColorsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full text-sm mb-6">
            <Palette className="w-4 h-4 text-red-400" />
            <span className="text-red-300 font-semibold">CSS RANGLAR</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 mb-4">
            CSS Ranglar
          </h1>
          <p className="text-2xl text-gray-300">
            Sahifangizni rangli va chiroyli qiling
          </p>
        </div>
      </div>

      {/* Rang turlari */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Rang Turlari</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-2xl font-medium text-blue-400 mb-4">1. Rang nomlari</h3>
            <p className="text-gray-300 mb-4">140 ta tayyor rang nomi mavjud</p>
            <CodeBlock 
              language="CSS"
              code={`h1 { color: red; }
p { color: blue; }
div { background-color: green; }
span { color: tomato; }
button { background-color: dodgerblue; }`}
            />
            <div className="mt-4 grid grid-cols-4 gap-2">
              <div className="bg-red-500 p-3 rounded text-center text-white text-sm">red</div>
              <div className="bg-blue-500 p-3 rounded text-center text-white text-sm">blue</div>
              <div className="bg-green-500 p-3 rounded text-center text-white text-sm">green</div>
              <div className="bg-yellow-500 p-3 rounded text-center text-white text-sm">yellow</div>
            </div>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-medium text-green-400 mb-4">2. HEX kodlar</h3>
            <p className="text-gray-300 mb-4">#RRGGBB formatida (00-FF)</p>
            <CodeBlock 
              language="CSS"
              code={`h1 { color: #FF0000; }  /* Qizil */
p { color: #0000FF; }   /* Ko'k */
div { background-color: #00FF00; }  /* Yashil */
span { color: #FFA500; }  /* To'q sariq */

/* Qisqa format */
h2 { color: #F00; }  /* #FF0000 bilan bir xil */`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-medium text-purple-400 mb-4">3. RGB va RGBA</h3>
            <p className="text-gray-300 mb-4">Red, Green, Blue (0-255)</p>
            <CodeBlock 
              language="CSS"
              code={`/* RGB */
h1 { color: rgb(255, 0, 0); }  /* Qizil */
p { color: rgb(0, 0, 255); }   /* Ko'k */

/* RGBA - Alpha (shaffoflik 0-1) */
div { 
    background-color: rgba(0, 255, 0, 0.5);  /* 50% shaffof yashil */
}
.overlay {
    background-color: rgba(0, 0, 0, 0.8);  /* 80% qora */
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-2xl font-medium text-orange-400 mb-4">4. HSL va HSLA</h3>
            <p className="text-gray-300 mb-4">Hue, Saturation, Lightness</p>
            <CodeBlock 
              language="CSS"
              code={`/* HSL */
h1 { color: hsl(0, 100%, 50%); }    /* Qizil */
p { color: hsl(240, 100%, 50%); }   /* Ko'k */

/* HSLA */
div {
    background-color: hsla(120, 100%, 50%, 0.3);  /* Shaffof yashil */
}`}
            />
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Background Xususiyatlari</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-medium text-cyan-400 mb-4">Background Color</h3>
            <CodeBlock 
              language="CSS"
              code={`div {
    background-color: #f0f0f0;
}

body {
    background-color: rgba(255, 255, 255, 0.9);
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-pink-500/30">
            <h3 className="text-xl font-medium text-pink-400 mb-4">Background Image</h3>
            <CodeBlock 
              language="CSS"
              code={`div {
    background-image: url('rasm.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

/* Multiple images */
div {
    background-image: url('top.png'), url('bottom.jpg');
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-yellow-500/30">
            <h3 className="text-xl font-medium text-yellow-400 mb-4">Background Shorthand</h3>
            <CodeBlock 
              language="CSS"
              code={`div {
    background: #f0f0f0 url('rasm.jpg') no-repeat center/cover;
}

/* Gradient */
div {
    background: linear-gradient(to right, red, yellow);
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
            Rangli kartochkalar yarating:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">1.</strong> 4 ta div yarating</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">2.</strong> Har biriga turli rang bering (HEX, RGB, HSL)</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">3.</strong> Biriga background-image qo&apos;shing</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">4.</strong> Hover da rang o&apos;zgarsin</p>
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
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Rang palitrasi</h3>
              <p className="text-gray-300 mb-4">5 ta div yarating va har xil rang turlaridan foydalaning:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>1-div: rang nomi</li>
                <li>2-div: HEX kod</li>
                <li>3-div: RGB</li>
                <li>4-div: RGBA (shaffof)</li>
                <li>5-div: HSL</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Gradient fon</h3>
              <p className="text-gray-300 mb-4">3 xil gradient yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Gorizontal gradient (chapdan o&apos;ngga)</li>
                <li>Vertikal gradient (yuqoridan pastga)</li>
                <li>Diagonal gradient (45 daraja)</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Background rasm</h3>
              <p className="text-gray-300 mb-4">Rasm bilan ishlang:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>background-image qo&apos;shing</li>
                <li>cover va contain farqini sinab ko&apos;ring</li>
                <li>no-repeat ishlatib markazga joylashtiring</li>
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
              title: "Rangli landing page",
              desc: "Chiroyli landing page yarating:",
              items: [
                "Header (gradient background)",
                "Hero section (rasm bilan)",
                "3 ta feature kartochka (har xil ranglar)",
                "Footer (to'q rang)",
                "Hover effektlari"
              ]
            },
            {
              num: "2",
              title: "Rang o'zgartiruvchi",
              desc: "Interaktiv sahifa yarating:",
              items: [
                "Katta div (background rangi o'zgaradi)",
                "5 ta tugma (har xil ranglar)",
                "Tugmani bosganda div rangi o'zgarsin",
                "Smooth transition qo'shing"
              ]
            },
            {
              num: "3",
              title: "Rang palitrasi",
              desc: "O'zingizning rang palitrasi yarating:",
              items: [
                "5 ta asosiy rang tanlang",
                "Har bir rang uchun kartochka",
                "Rang kodi (HEX, RGB, HSL)",
                "Rang nomi",
                "Hover da rang o'zgarishi"
              ]
            },
            {
              num: "4",
              title: "Dark/Light mode",
              desc: "Ikki xil tema yarating. Tugma bilan tema o'zgartirish. Dark mode: qora fon, oq matn. Light mode: oq fon, qora matn. Smooth transition. LocalStorage da saqlash."
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

      {/* Qo'shimcha resurslar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">📚 Qo&apos;shimcha resurslar</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2">🎨 Color Picker</h3>
            <p className="text-gray-400 text-sm mb-3">Rang tanlash vositasi</p>
            <a href="https://htmlcolorcodes.com/" target="_blank" rel="noopener noreferrer" 
               className="text-blue-400 hover:text-blue-300 text-sm">
              htmlcolorcodes.com →
            </a>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2">🌈 Coolors</h3>
            <p className="text-gray-400 text-sm mb-3">Rang palitrasi generatori</p>
            <a href="https://coolors.co/" target="_blank" rel="noopener noreferrer"
               className="text-green-400 hover:text-green-300 text-sm">
              coolors.co →
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/selectors" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Selectors
        </Link>
        
        <Link href="/docs/css/box-model" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Box Model
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
