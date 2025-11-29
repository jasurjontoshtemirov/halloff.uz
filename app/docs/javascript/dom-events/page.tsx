"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { MousePointer, Keyboard, Hand, Zap, Code2, Sparkles } from "lucide-react";

export default function JavaScriptDOMEventsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-fuchsia-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 rounded-full text-sm mb-6">
            <MousePointer className="w-4 h-4 text-rose-400" />
            <span className="text-rose-300 font-semibold">DOM EVENTS</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 mb-4">
            DOM Hodisalari (Events)
          </h1>
          <p className="text-2xl text-gray-300">
            Foydalanuvchi harakatlariga javob berish
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
          <p className="text-gray-400 mb-4">DOM Events - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-yellow-500/50 transition-all">
            <div className="text-center">
              <Code2 className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Event nima */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Event nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">Event</span> (hodisa) - bu foydalanuvchi yoki brauzer tomonidan sodir bo&apos;ladigan harakat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-xl p-6">
            <MousePointer className="w-8 h-8 text-rose-400 mb-3" />
            <h3 className="text-xl font-semibold text-rose-400 mb-2">Sichqoncha</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• click</li>
              <li>• dblclick</li>
              <li>• mouseover</li>
              <li>• mouseout</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-xl p-6">
            <Keyboard className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Klaviatura</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• keydown</li>
              <li>• keyup</li>
              <li>• keypress</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <Hand className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="text-xl font-semibold text-green-400 mb-2">Forma</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• submit</li>
              <li>• change</li>
              <li>• input</li>
              <li>• focus</li>
            </ul>
          </div>
        </div>
      </div>

      {/* addEventListener */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">addEventListener()</h2>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            Eng yaxshi usul - <span className="text-purple-400 font-semibold">addEventListener()</span> metodidan foydalanish.
          </p>
        </div>

        <CodeBlock 
          language="html"
          code={`<!-- HTML -->
<button id="btn">Bosingiz</button>

<script>
    let btn = document.getElementById('btn');
    
    // addEventListener
    btn.addEventListener('click', function() {
        alert('Salom!');
    });
    
    // Arrow function bilan
    btn.addEventListener('click', () => {
        console.log('Bosildi!');
    });
    
    // Bir nechta event qo'shish mumkin
    btn.addEventListener('click', () => console.log('1'));
    btn.addEventListener('click', () => console.log('2'));
</script>`}
        />
      </div>

      {/* Click event */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <MousePointer className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Click Event</h2>
        </div>

        <CodeBlock 
          language="html"
          code={`<!-- HTML -->
<button id="btn">Bosingiz</button>
<p id="text">0</p>

<script>
    let btn = document.getElementById('btn');
    let text = document.getElementById('text');
    let count = 0;
    
    btn.addEventListener('click', () => {
        count++;
        text.textContent = count;
    });
</script>`}
        />
      </div>

      {/* Input event */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Keyboard className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Input Event</h2>
        </div>

        <CodeBlock 
          language="html"
          code={`<!-- HTML -->
<input type="text" id="input" placeholder="Yozing...">
<p id="output"></p>

<script>
    let input = document.getElementById('input');
    let output = document.getElementById('output');
    
    input.addEventListener('input', (e) => {
        output.textContent = e.target.value;
    });
</script>`}
        />
      </div>

      {/* Event Object */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Event Object</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`element.addEventListener('click', (event) => {
    console.log(event.type);        // "click"
    console.log(event.target);      // bosilgan element
    console.log(event.clientX);     // X koordinata
    console.log(event.clientY);     // Y koordinata
});

// Klaviatura eventi
input.addEventListener('keydown', (e) => {
    console.log(e.key);             // bosilgan tugma
    console.log(e.code);            // tugma kodi
    console.log(e.ctrlKey);         // Ctrl bosilganmi?
    console.log(e.shiftKey);        // Shift bosilganmi?
});`}
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
              title: "Interaktiv forma",
              desc: "Ro'yxatdan o'tish formasi yarating:",
              items: [
                "Ism, email, parol inputlari",
                "Real-time validatsiya (input paytida tekshirish)",
                "Xato xabarlari ko'rsatish",
                "Submit tugmasi (barcha maydonlar to'g'ri bo'lganda faol)",
                "Muvaffaqiyatli yuborilganda xabar ko'rsatish"
              ]
            },
            {
              num: "2",
              title: "Drag and Drop",
              desc: "Drag and Drop o'yini yarating:",
              items: [
                "Bir nechta rangdor kvadratlar",
                "Ularni sichqoncha bilan sudrab boshqa joyga qo'yish",
                "Drop zonalar yarating",
                "To'g'ri joyga qo'yilganda yashil, noto'g'ri bo'lsa qizil rang"
              ]
            },
            {
              num: "3",
              title: "Klaviatura o'yini",
              desc: "Klaviatura hodisalari bilan o'yin:",
              items: [
                "Ekranda tasodifiy harf ko'rsating",
                "Foydalanuvchi shu harfni bosishi kerak",
                "To'g'ri bo'lsa ball qo'shing",
                "Vaqt hisoblagich (30 soniya)",
                "O'yin tugaganda natijani ko'rsating"
              ]
            },
            {
              num: "4",
              title: "Sichqoncha ta'qibchisi",
              desc: "Sichqoncha harakatini kuzatuvchi dastur yarating. Sichqoncha harakati bilan birgalikda harakat qiladigan element (masalan, doira). Sichqoncha koordinatalarini ko'rsating. Click hodisasida animatsiya qo'shing."
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
          href="/docs/javascript/dom" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">DOM</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/amaliyot3" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-rose-200">Keyingi</div>
            <div className="text-white font-medium">🚀 Amaliyot #3</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
