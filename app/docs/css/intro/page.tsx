"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Palette, Sparkles, Code2, Zap, Play, Paintbrush, CheckCircle, Layers } from "lucide-react";

export default function CSSIntroPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm mb-6">
            <Palette className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-semibold">CSS KIRISH</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            CSS ga Kirish
          </h1>
          <p className="text-2xl text-gray-300">
            Web sahifalarni chiroyli qilish san'ati
          </p>
        </div>
      </div>

      {/* CSS nima? */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">CSS nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="text-cyan-400 font-semibold">CSS</span> (Cascading Style Sheets) - bu web sahifalarni bezash va dizayn qilish uchun ishlatiladi. HTML tuzilma bersa, CSS chiroyli ko'rinish beradi.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20">
          <div className="flex items-center gap-3 mb-6">
            <Paintbrush className="w-6 h-6 text-purple-400" />
            <h3 className="text-2xl font-semibold text-gray-100">CSS nima qiladi?</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Ranglar va fonlarni o'zgartiradi",
              "Shriftlar va matn stillarini boshqaradi",
              "Elementlarni joylashtiradi (layout)",
              "Animatsiyalar va effektlar yaratadi",
              "Responsive dizayn (mobile, tablet, desktop)",
              "Hover, focus va boshqa holatlar"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/70 transition-all">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real misol */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">CSS siz va CSS bilan</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-medium text-red-400 mb-4">❌ CSS siz</h3>
            <div className="bg-white p-4 rounded">
              <p className="text-black">Oddiy matn</p>
              <p className="text-black">Hech qanday stil yo&apos;q</p>
            </div>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-medium text-green-400 mb-4">✅ CSS bilan</h3>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded shadow-lg">
              <p className="text-white font-bold text-xl">Chiroyli matn</p>
              <p className="text-white">Ranglar, shriftlar, effektlar!</p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS qo'shish usullari */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">CSS qo&apos;shish usullari</h2>
        
        <div className="space-y-6">
          {/* Inline */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-2xl font-medium text-orange-400 mb-4">1. Inline CSS</h3>
            <p className="text-gray-300 mb-4">To&apos;g&apos;ridan-to&apos;g&apos;ri HTML elementda</p>
            <CodeBlock 
              language="HTML"
              code={`<h1 style="color: blue; font-size: 32px;">Sarlavha</h1>
<p style="color: red;">Qizil matn</p>`}
            />
            <div className="mt-4 bg-orange-500/10 p-3 rounded">
              <p className="text-orange-300 text-sm">⚠️ Tavsiya etilmaydi - kod chalkash bo&apos;ladi</p>
            </div>
          </div>

          {/* Internal */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-2xl font-medium text-blue-400 mb-4">2. Internal CSS</h3>
            <p className="text-gray-300 mb-4">HTML faylning &lt;head&gt; qismida</p>
            <CodeBlock 
              language="HTML"
              code={`<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: blue;
            font-size: 32px;
        }
        p {
            color: red;
        }
    </style>
</head>
<body>
    <h1>Sarlavha</h1>
    <p>Matn</p>
</body>
</html>`}
            />
            <div className="mt-4 bg-blue-500/10 p-3 rounded">
              <p className="text-blue-300 text-sm">✅ Kichik loyihalar uchun yaxshi</p>
            </div>
          </div>

          {/* External */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-medium text-green-400 mb-4">3. External CSS (Eng yaxshi!)</h3>
            <p className="text-gray-300 mb-4">Alohida .css faylda</p>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-2">style.css fayli:</p>
                <CodeBlock 
                  language="CSS"
                  code={`h1 {
    color: blue;
    font-size: 32px;
}

p {
    color: red;
}`}
                />
              </div>

              <div>
                <p className="text-gray-400 mb-2">HTML faylda:</p>
                <CodeBlock 
                  language="HTML"
                  code={`<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Sarlavha</h1>
    <p>Matn</p>
</body>
</html>`}
                />
              </div>
            </div>

            <div className="mt-4 bg-green-500/10 p-3 rounded">
              <p className="text-green-300 text-sm">✅ Professional usul - kod toza va qayta ishlatiladi</p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS sintaksis */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">CSS Sintaksis</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30 mb-6">
          <CodeBlock 
            language="CSS"
            code={`selector {
    property: value;
    property: value;
}`}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-500/10 border border-blue-500/30 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-blue-400 mb-2">Selector</h3>
            <p className="text-gray-300 text-sm">Qaysi elementga stil berish</p>
            <code className="text-blue-300 text-sm">h1, p, .class, #id</code>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-green-400 mb-2">Property</h3>
            <p className="text-gray-300 text-sm">Qanday xususiyat</p>
            <code className="text-green-300 text-sm">color, font-size, margin</code>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-purple-400 mb-2">Value</h3>
            <p className="text-gray-300 text-sm">Qiymat</p>
            <code className="text-purple-300 text-sm">blue, 16px, 10px</code>
          </div>
        </div>
      </div>

      {/* Birinchi CSS */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Birinchi CSS kodingiz</h2>
        
        <CodeBlock 
          language="CSS"
          code={`/* Sarlavhani bezash */
h1 {
    color: blue;
    font-size: 36px;
    text-align: center;
}

/* Paragrafni bezash */
p {
    color: gray;
    font-size: 16px;
    line-height: 1.5;
}

/* Havolani bezash */
a {
    color: green;
    text-decoration: none;
}`}
        />
      </div>

      {/* Amaliy mashq */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-500 p-8 rounded-r">
          <h2 className="text-3xl font-semibold text-gray-100 mb-4 flex items-center gap-3">
            <span className="text-4xl">💻</span> Amaliy mashq
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Birinchi CSS faylingizni yarating:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">1.</strong> <code className="bg-gray-800 px-2 py-1 rounded">style.css</code> fayl yarating</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">2.</strong> Yuqoridagi CSS kodini yozing</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">3.</strong> HTML faylingizga link qiling</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">4.</strong> Brauzerda oching va o&apos;zgarishlarni ko&apos;ring</p>
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
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Rangli sahifa</h3>
              <p className="text-gray-300 mb-4">CSS bilan sahifangizni rangli qiling:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>h1 ni ko&apos;k rangga</li>
                <li>p ni qora rangga</li>
                <li>a ni yashil rangga</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Shrift o&apos;lchami</h3>
              <p className="text-gray-300 mb-4">Har xil o&apos;lchamdagi matnlar yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>h1 - 48px</li>
                <li>h2 - 36px</li>
                <li>p - 16px</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: 3 usulni sinab ko&apos;ring</h3>
              <p className="text-gray-300 mb-4">Bir xil stilni 3 usulda yozing va farqini ko&apos;ring</p>
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
              title: "Portfolio ni bezang",
              desc: "HTML portfolio sahifangizga CSS qo'shing:",
              items: [
                "External CSS fayl yarating",
                "Barcha sarlavhalarni bezang",
                "Paragraflar uchun stil",
                "Havolalar uchun rang",
                "Kamida 10 ta CSS property ishlatish"
              ]
            },
            {
              num: "2",
              title: "Blog sahifasi",
              desc: "Chiroyli blog sahifa yarating:",
              items: [
                "Sarlavha (katta, markazda)",
                "Muallif ma'lumoti (kichik, kulrang)",
                "Maqola matni (o'qish uchun qulay)",
                "Havolalar (ranglar bilan)"
              ]
            },
            {
              num: "3",
              title: "Vizitka sahifasi",
              desc: "O'zingiz uchun vizitka sahifa yarating:",
              items: [
                "Ism va familiya (katta, chiroyli)",
                "Kasb/mutaxassislik",
                "Qisqa tavsif",
                "Kontakt ma'lumotlari",
                "Ijtimoiy tarmoq havolalari"
              ]
            },
            {
              num: "4",
              title: "Mahsulot kartochkasi",
              desc: "Mahsulot kartochkasi yarating (masalan, telefon, kitob). Rasm, nom, narx, qisqa tavsif. Tugmalar (Sotib olish, Savatga). Chiroyli ranglar va shriftlar."
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
        <div className="text-gray-500">
          <p className="text-sm">Oldingi dars</p>
          <p className="text-gray-600">Yo&apos;q</p>
        </div>
        
        <Link href="/docs/css/selectors" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: CSS Selectors
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
