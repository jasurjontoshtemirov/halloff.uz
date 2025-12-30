"use client";

import CodeBlock from "@/components/CodeBlock";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";
import { Target, Sparkles, Code2, Play, MousePointer, Layers } from "lucide-react";

export default function CSSSelectorsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm mb-6">
            <Target className="w-4 h-4 text-green-400" />
            <span className="text-green-300 font-semibold">CSS SELECTORS</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 mb-4">
            CSS Selectors
          </h1>
          <p className="text-2xl text-gray-300">
            Elementlarni tanlash san'ati
          </p>
        </div>
      </div>

      {/* Video Section */}
      <VideoPlayer lessonPath="css/selectors" fallbackTitle="CSS Selectors - Video dars" />

      {/* Selector nima */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Selector nima?</h2>
        <div className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border-l-4 border-blue-500 p-6 rounded-r">
          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-blue-400">Selector</strong> - bu CSS da qaysi HTML elementga stil berishni ko&apos;rsatadi. 
            To&apos;g&apos;ri selector tanlash - CSS ning eng muhim qismi!
          </p>
        </div>
      </div>

      {/* Asosiy selectorlar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Asosiy Selectorlar</h2>
        
        <div className="space-y-6">
          {/* Element selector */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-2xl font-medium text-blue-400 mb-4">1. Element Selector</h3>
            <p className="text-gray-300 mb-4">Barcha bir xil elementlarni tanlaydi</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">CSS:</p>
                <CodeBlock 
                  language="CSS"
                  showHeader={false}
                  code={`p {
    color: blue;
}

h1 {
    font-size: 32px;
}`}
                />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">HTML:</p>
                <CodeBlock 
                  language="HTML"
                  showHeader={false}
                  code={`<h1>Sarlavha</h1>
<p>Birinchi paragraf</p>
<p>Ikkinchi paragraf</p>`}
                />
                <p className="text-gray-400 text-sm mt-2">✅ Barcha p va h1 lar stillanadi</p>
              </div>
            </div>
          </div>

          {/* Class selector */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-medium text-green-400 mb-4">2. Class Selector (.)</h3>
            <p className="text-gray-300 mb-4">Ma&apos;lum class li elementlarni tanlaydi</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">CSS:</p>
                <CodeBlock 
                  language="CSS"
                  showHeader={false}
                  code={`.muhim {
    color: red;
    font-weight: bold;
}

.kichik {
    font-size: 12px;
}`}
                />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">HTML:</p>
                <CodeBlock 
                  language="HTML"
                  showHeader={false}
                  code={`<p class="muhim">Muhim matn</p>
<p>Oddiy matn</p>
<p class="kichik">Kichik matn</p>`}
                />
                <p className="text-gray-400 text-sm mt-2">✅ Faqat class li elementlar stillanadi</p>
              </div>
            </div>

            <div className="mt-4 bg-green-500/10 p-3 rounded">
              <p className="text-green-300 text-sm">💡 Class ni bir nechta elementda ishlatish mumkin</p>
            </div>
          </div>

          {/* ID selector */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-medium text-purple-400 mb-4">3. ID Selector (#)</h3>
            <p className="text-gray-300 mb-4">Noyob ID li elementni tanlaydi</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">CSS:</p>
                <CodeBlock 
                  language="CSS"
                  showHeader={false}
                  code={`#sarlavha {
    color: blue;
    text-align: center;
}

#footer {
    background: gray;
}`}
                />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">HTML:</p>
                <CodeBlock 
                  language="HTML"
                  showHeader={false}
                  code={`<h1 id="sarlavha">Asosiy sarlavha</h1>
<div id="footer">Footer</div>`}
                />
                <p className="text-gray-400 text-sm mt-2">✅ Har bir ID faqat bir marta</p>
              </div>
            </div>

            <div className="mt-4 bg-purple-500/10 p-3 rounded">
              <p className="text-purple-300 text-sm">⚠️ ID ni faqat bir elementda ishlating!</p>
            </div>
          </div>

          {/* Universal selector */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-2xl font-medium text-orange-400 mb-4">4. Universal Selector (*)</h3>
            <p className="text-gray-300 mb-4">Barcha elementlarni tanlaydi</p>
            
            <CodeBlock 
              language="CSS"
              code={`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`}
            />

            <div className="mt-4 bg-orange-500/10 p-3 rounded">
              <p className="text-orange-300 text-sm">💡 Ko&apos;pincha CSS ni reset qilish uchun ishlatiladi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Kombinatsiya selectorlar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Kombinatsiya Selectorlar</h2>
        
        <div className="space-y-6">
          {/* Descendant */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-2xl font-medium text-cyan-400 mb-4">Descendant Selector (bo&apos;shliq)</h3>
            <p className="text-gray-300 mb-4">Ichidagi barcha elementlar</p>
            
            <CodeBlock 
              language="CSS"
              code={`div p {
    color: red;
}

.container h1 {
    font-size: 32px;
}`}
            />

            <CodeBlock 
              language="HTML"
              code={`<div>
    <p>Bu qizil bo'ladi</p>
    <section>
        <p>Bu ham qizil bo'ladi</p>
    </section>
</div>
<p>Bu qizil bo'lmaydi</p>`}
            />
          </div>

          {/* Child */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-pink-500/30">
            <h3 className="text-2xl font-medium text-pink-400 mb-4">Child Selector (&gt;)</h3>
            <p className="text-gray-300 mb-4">Faqat to&apos;g&apos;ridan-to&apos;g&apos;ri bolalar</p>
            
            <CodeBlock 
              language="CSS"
              code={`div > p {
    color: blue;
}`}
            />

            <CodeBlock 
              language="HTML"
              code={`<div>
    <p>Bu ko'k bo'ladi</p>
    <section>
        <p>Bu ko'k bo'lmaydi</p>
    </section>
</div>`}
            />
          </div>

          {/* Multiple */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-yellow-500/30">
            <h3 className="text-2xl font-medium text-yellow-400 mb-4">Bir nechta selector (,)</h3>
            <p className="text-gray-300 mb-4">Bir xil stilni bir nechta elementga</p>
            
            <CodeBlock 
              language="CSS"
              code={`h1, h2, h3 {
    color: blue;
    font-family: Arial;
}

.karta, .box, .panel {
    border: 1px solid gray;
    padding: 20px;
}`}
            />
          </div>
        </div>
      </div>

      {/* Pseudo-class */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Pseudo-class Selectorlar</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-blue-400 mb-3">:hover</h3>
            <p className="text-gray-300 text-sm mb-3">Sichqoncha ustiga kelganda</p>
            <CodeBlock 
              language="CSS"
              showHeader={false}
              code={`a:hover {
    color: red;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-green-400 mb-3">:active</h3>
            <p className="text-gray-300 text-sm mb-3">Bosilganda</p>
            <CodeBlock 
              language="CSS"
              showHeader={false}
              code={`button:active {
    background: blue;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-purple-400 mb-3">:first-child</h3>
            <p className="text-gray-300 text-sm mb-3">Birinchi bola</p>
            <CodeBlock 
              language="CSS"
              showHeader={false}
              code={`li:first-child {
    font-weight: bold;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-orange-400 mb-3">:nth-child(n)</h3>
            <p className="text-gray-300 text-sm mb-3">N-chi bola</p>
            <CodeBlock 
              language="CSS"
              showHeader={false}
              code={`li:nth-child(2) {
    color: red;
}`}
            />
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
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Class va ID</h3>
              <p className="text-gray-300 mb-4">HTML sahifa yarating va:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>3 ta class yarating (.katta, .kichik, .qizil)</li>
                <li>2 ta ID yarating (#header, #footer)</li>
                <li>Har biriga CSS yozing</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Hover effekti</h3>
              <p className="text-gray-300 mb-4">5 ta tugma yarating va har biriga :hover effekti qo&apos;shing</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Ro&apos;yxat</h3>
              <p className="text-gray-300 mb-4">ul &gt; li selector ishlatib, faqat birinchi darajali li larni stilang</p>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa */}
      <div className="mb-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🏠</span>
          <h2 className="text-3xl font-semibold text-gray-100">Uyga Vazifa</h2>
        </div>
        
        <div className="space-y-6">
          {[
            {
              num: "1",
              title: "Navigatsiya menyu",
              desc: "Chiroyli navigatsiya yarating:",
              items: [
                "nav > ul > li > a tuzilmasi",
                "Har bir havola uchun :hover",
                "Active sahifa uchun .active class",
                "Birinchi va oxirgi element uchun alohida stil"
              ]
            },
            {
              num: "2",
              title: "Kartochkalar",
              desc: "6 ta mahsulot kartochkasi yarating:",
              items: [
                ".card class bilan",
                ":hover da kattalashtirish",
                ":nth-child(odd) va :nth-child(even) bilan turli ranglar",
                "Birinchi kartochka uchun .featured class"
              ]
            },
            {
              num: "3",
              title: "Forma styling",
              desc: "Ro'yxatdan o'tish formasi yarating:",
              items: [
                "Input[type='text'], input[type='email'] uchun stil",
                ":focus holatida border rangi o'zgarsin",
                ":required va :optional uchun turli stillar",
                "Submit button :hover va :active holatlar"
              ]
            },
            {
              num: "4",
              title: "Complex selectors",
              desc: "Murakkab selectorlar bilan sahifa yarating. Child selector (>). Adjacent sibling (+). General sibling (~). Attribute selectors. Pseudo-elements (::before, ::after). Kamida 10 xil selector ishlatish."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all border border-gray-800 hover:border-green-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center font-bold text-white">
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
        <Link href="/docs/css/intro" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: CSS ga Kirish
        </Link>
        
        <Link href="/docs/css/colors" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Ranglar va Background
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
