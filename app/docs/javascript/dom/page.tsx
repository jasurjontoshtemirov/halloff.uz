"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Globe, Search, Edit, Plus, Trash2, Code2, Sparkles, Layers } from "lucide-react";

export default function JavaScriptDOMPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full text-sm mb-6">
            <Globe className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 font-semibold">DOM</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-4">
            DOM (Document Object Model)
          </h1>
          <p className="text-2xl text-gray-300">
            HTML elementlari bilan JavaScript orqali ishlash
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
          <p className="text-gray-400 mb-4">DOM - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-yellow-500/50 transition-all">
            <div className="text-center">
              <Code2 className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* DOM nima */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">DOM nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg mb-4">
            <span className="text-blue-400 font-semibold">DOM</span> - bu HTML hujjatning JavaScript orqali boshqariladigan daraxt strukturasi.
          </p>
          <p className="text-gray-300">
            JavaScript yordamida HTML elementlarini topish, o&apos;zgartirish, qo&apos;shish va o&apos;chirish mumkin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-4 flex items-center gap-3">
            <Search className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300">HTML elementlarini topish</span>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-4 flex items-center gap-3">
            <Edit className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">Matnni o&apos;zgartirish</span>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-xl p-4 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300">Stillarni o&apos;zgartirish</span>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-4 flex items-center gap-3">
            <Plus className="w-5 h-5 text-orange-400" />
            <span className="text-gray-300">Yangi elementlar qo&apos;shish</span>
          </div>
          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3">
            <Trash2 className="w-5 h-5 text-red-400" />
            <span className="text-gray-300">Elementlarni o&apos;chirish</span>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/20 rounded-xl p-4 flex items-center gap-3">
            <Globe className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300">Hodisalarga javob berish</span>
          </div>
        </div>
      </div>

      {/* Elementlarni topish */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Search className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Elementlarni topish</h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">getElementById()</h3>
            <p className="text-gray-300 mb-4">
              ID bo&apos;yicha bitta elementni topadi.
            </p>
            <CodeBlock 
              language="html"
              code={`<!-- HTML -->
<h1 id="title">Salom Dunyo!</h1>
<p id="text">Bu paragraf</p>

<script>
    // ID bo'yicha topish
    let title = document.getElementById('title');
    console.log(title);
    
    // Matnni o'qish
    console.log(title.textContent); // "Salom Dunyo!"
    
    // Matnni o'zgartirish
    title.textContent = "Yangi sarlavha";
</script>`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">querySelector()</h3>
            <p className="text-gray-300 mb-4">
              CSS selector bo&apos;yicha birinchi elementni topadi.
            </p>
            <CodeBlock 
              language="javascript"
              code={`// ID bo'yicha
let title = document.querySelector('#title');

// Class bo'yicha
let text = document.querySelector('.text');

// Tag bo'yicha
let paragraph = document.querySelector('p');

// Murakkab selector
let firstLink = document.querySelector('div.container a.link');`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">querySelectorAll()</h3>
            <p className="text-gray-300 mb-4">
              Barcha mos elementlarni topadi (NodeList qaytaradi).
            </p>
            <CodeBlock 
              language="javascript"
              code={`// Barcha paragraflar
let paragraphs = document.querySelectorAll('p');

// Barcha .text classi bor elementlar
let texts = document.querySelectorAll('.text');

// Har birini ko'rib chiqish
texts.forEach(text => {
    console.log(text.textContent);
});`}
            />
          </div>
        </div>
      </div>

      {/* Matn va HTML o'zgartirish */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Edit className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Matn va HTML o&apos;zgartirish</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let element = document.querySelector('#myElement');

// textContent - faqat matn
element.textContent = "Yangi matn";

// innerHTML - HTML bilan
element.innerHTML = "<strong>Qalin matn</strong>";

// innerText - ko'rinadigan matn
element.innerText = "Ko'rinadigan matn";

// Misol
let title = document.querySelector('h1');
title.textContent = "Yangi sarlavha";
title.style.color = "blue";`}
        />
      </div>

      {/* Stil o'zgartirish */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Stil o&apos;zgartirish</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let element = document.querySelector('#myElement');

// Inline stil
element.style.color = "red";
element.style.fontSize = "24px";
element.style.backgroundColor = "yellow";
element.style.padding = "20px";

// Class qo'shish/o'chirish
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('visible');

// Class borligini tekshirish
if (element.classList.contains('active')) {
    console.log('Active!');
}`}
        />
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
              title: "To-Do List",
              desc: "Oddiy vazifalar ro'yxati yarating:",
              items: [
                "Input va button orqali yangi vazifa qo'shish",
                "Har bir vazifani o'chirish tugmasi",
                "Vazifani bajarilgan deb belgilash (chiziq chizish)",
                "Barcha vazifalarni o'chirish tugmasi"
              ]
            },
            {
              num: "2",
              title: "Rang o'zgartiruvchi",
              desc: "Sahifa rangini o'zgartiruvchi dastur:",
              items: [
                "3 ta tugma: Qizil, Yashil, Ko'k",
                "Tugma bosilganda body background rangi o'zgaradi",
                "Hozirgi rang nomini ko'rsating",
                "Random rang tugmasi qo'shing"
              ]
            },
            {
              num: "3",
              title: "Matn tahrirlovchi",
              desc: "Textarea bilan ishlash:",
              items: [
                "Belgilar sonini real-time ko'rsatish",
                "So'zlar sonini hisoblash",
                "Katta/kichik harfga o'zgartirish tugmalari",
                "Matnni tozalash tugmasi"
              ]
            },
            {
              num: "4",
              title: "Rasm galereyasi",
              desc: "3-5 ta rasm bilan galereya yarating. Rasm ustiga bosilganda katta modal oynada ko'rsating. Modal yopish tugmasi va keyboard (Escape) bilan yopish."
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
        <Link 
          href="/docs/javascript/objects" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Objektlar</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/dom-events" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-emerald-200">Keyingi</div>
            <div className="text-white font-medium">DOM Events</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
