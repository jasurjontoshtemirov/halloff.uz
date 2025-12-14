"use client";

import CodeBlock from "@/components/CodeBlock";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";
import { Sparkles, Code2, Zap, Rocket, Play, BookOpen, Lightbulb, CheckCircle } from "lucide-react";

export default function JavaScriptIntroPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-300 font-semibold">JAVASCRIPT KIRISH</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mb-4">
            JavaScript nima?
          </h1>
          <p className="text-2xl text-gray-300">
            Dasturlash tilining asoslari va tarixi
          </p>
        </div>
      </div>

      <VideoPlayer 
        lessonPath="/docs/javascript/intro" 
        fallbackTitle="JavaScript nima? - Video dars" 
      />

      {/* JavaScript nima? */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">JavaScript nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="text-blue-400 font-semibold">JavaScript</span> - bu veb-sahifalarni interaktiv qilish uchun ishlatiladigan dasturlash tili. U HTML va CSS bilan birga veb-dasturlashning asosiy qismlaridan biridir.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-8 border border-yellow-500/20">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-6 h-6 text-yellow-400" />
            <h3 className="text-2xl font-semibold text-gray-100">JavaScript nima qiladi?</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Sahifani dinamik qiladi (mazmunni o'zgartiradi)",
              "Foydalanuvchi bilan muloqot qiladi (click, hover, input)",
              "Serverdan ma'lumot oladi (API)",
              "Animatsiyalar va effektlar yaratadi",
              "Formalarni tekshiradi (validation)",
              "O'yinlar va ilovalar yaratadi"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/70 transition-all">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Birinchi kod */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Birinchi JavaScript kodi</h2>
        </div>
        
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            Keling, birinchi JavaScript kodimizni yozamiz! Bu oddiy misol sahifadagi matnni o'zgartiradi.
          </p>
        </div>

        <CodeBlock 
          language="html"
          code={`<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Demo</title>
</head>
<body>
    <h1 id="title">Salom Dunyo!</h1>
    <button onclick="changeText()">Bosing</button>

    <script>
        function changeText() {
            document.getElementById('title').innerHTML = 'JavaScript ishladi!';
        }
    </script>
</body>
</html>`}
        />
      </div>

      {/* JavaScript qayerda yoziladi? */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">JavaScript qayerda yoziladi?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all">
            <div className="text-3xl mb-3">1️⃣</div>
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Inline</h3>
            <p className="text-gray-300 text-sm">HTML element ichida</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all">
            <div className="text-3xl mb-3">2️⃣</div>
            <h3 className="text-xl font-semibold text-purple-400 mb-3">Internal</h3>
            <p className="text-gray-300 text-sm">&lt;script&gt; tag ichida</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all">
            <div className="text-3xl mb-3">3️⃣</div>
            <h3 className="text-xl font-semibold text-green-400 mb-3">External</h3>
            <p className="text-gray-300 text-sm">Alohida .js fayl</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4 flex items-center gap-2">
              <span className="text-blue-400">1.</span> Inline JavaScript
            </h3>
            <CodeBlock 
              language="html"
              code={`<button onclick="alert('Salom!')">Bosing</button>

<a href="#" onclick="console.log('Link bosildi')">Link</a>

<div onmouseover="this.style.color='red'">Sichqonchani olib keling</div>`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4 flex items-center gap-2">
              <span className="text-purple-400">2.</span> Internal JavaScript
            </h3>
            <CodeBlock 
              language="html"
              code={`<!DOCTYPE html>
<html>
<head>
    <title>Internal JS</title>
</head>
<body>
    <h1>Salom!</h1>

    <script>
        console.log('Salom JavaScript!');
        alert('Sahifa yuklandi!');
    </script>
</body>
</html>`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4 flex items-center gap-2">
              <span className="text-green-400">3.</span> External JavaScript
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">index.html</p>
                <CodeBlock 
                  language="html"
                  code={`<!DOCTYPE html>
<html>
<head>
    <title>External JS</title>
</head>
<body>
    <h1>Salom!</h1>
    
    <script src="script.js"></script>
</body>
</html>`}
                />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">script.js</p>
                <CodeBlock 
                  language="javascript"
                  code={`console.log('Salom!');

function greet() {
    alert('Xush kelibsiz!');
}

greet();`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Console.log() */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">console.log()</h2>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-orange-400 font-semibold">console.log()</span> - bu JavaScript da eng ko'p ishlatiladigan funksiya. U ma'lumotlarni brauzer konsolida chiqaradi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Matn chiqarish
console.log('Salom Dunyo!');

// Raqam chiqarish
console.log(123);
console.log(3.14);

// Boolean
console.log(true);
console.log(false);

// Array
console.log([1, 2, 3, 4, 5]);

// Object
console.log({name: 'Ali', age: 25, city: 'Toshkent'});

// Ko'p qiymat
console.log('Ism:', 'Ali', 'Yosh:', 25);`}
        />

        <div className="mt-6 bg-gray-900/50 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-gray-100 mb-3">💡 Maslahat</h3>
          <p className="text-gray-300">
            Brauzer konsolini ochish uchun:
          </p>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>• <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">F12</kbd> tugmasini bosing</li>
            <li>• Yoki <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">Ctrl + Shift + I</kbd> (Windows/Linux)</li>
            <li>• Yoki <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">Cmd + Option + I</kbd> (Mac)</li>
          </ul>
        </div>
      </div>

      {/* Amaliy Mashq */}
      <div className="mb-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Amaliy Mashq</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">1️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Console.log</h3>
            </div>
            <p className="text-gray-300 mb-4">
              O'zingizning ismingiz va yoshingizni console.log() yordamida chiqaring.
            </p>
            <CodeBlock 
              language="javascript"
              code={`console.log('Ism: Ali');
console.log('Yosh: 25');`}
            />
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Alert</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Button yarating va bosilganda alert() chiqarsin.
            </p>
            <CodeBlock 
              language="html"
              code={`<button onclick="alert('Salom!')">
    Bosing
</button>`}
            />
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Matn o'zgartirish</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Button bosilganda h1 matnini o'zgartiring.
            </p>
            <CodeBlock 
              language="html"
              code={`<h1 id="text">Eski matn</h1>
<button onclick="change()">O'zgartir</button>

<script>
function change() {
    document.getElementById('text')
        .innerHTML = 'Yangi matn!';
}
</script>`}
            />
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Matematik amallar</h3>
            </div>
            <p className="text-gray-300 mb-4">
              2 ta raqamni qo'shing va natijani console'da chiqaring.
            </p>
            <CodeBlock 
              language="javascript"
              code={`let a = 10;
let b = 20;
let sum = a + b;
console.log('Yig\'indi:', sum);`}
            />
          </div>
        </div>
      </div>

      {/* Uyga Vazifa */}
      <div className="mb-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🏠</span>
          <h2 className="text-3xl font-semibold text-gray-100">Uyga Vazifa</h2>
        </div>
        
        <div className="space-y-8">
          {/* Vazifa 1 */}
          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all border border-gray-800 hover:border-purple-500/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center font-bold text-white">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">Shaxsiy ma'lumotlar</h3>
                <p className="text-gray-300 mb-4">
                  Ismingiz, yoshingiz, shahringiz va sevimli rangingizni console.log() da chiqaring.
                </p>
                <CodeBlock 
                  language="javascript"
                  code={`// Sizning kodingiz:
console.log('Ism: ...');
console.log('Yosh: ...');
console.log('Shahar: ...');
console.log('Sevimli rang: ...');`}
                />
              </div>
            </div>
          </div>

          {/* Vazifa 2 */}
          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all border border-gray-800 hover:border-purple-500/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center font-bold text-white">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">Interaktiv buttonlar</h3>
                <p className="text-gray-300 mb-4">
                  3 ta button yarating: biri alert(), ikkinchisi console.log(), uchinchisi matnni o'zgartirsin.
                </p>
                <CodeBlock 
                  language="html"
                  code={`<!DOCTYPE html>
<html>
<body>
    <h1 id="title">Salom!</h1>
    
    <!-- 1. Alert button -->
    <button onclick="...">Alert</button>
    
    <!-- 2. Console button -->
    <button onclick="...">Console</button>
    
    <!-- 3. Matn o'zgartirish -->
    <button onclick="...">O'zgartir</button>
    
    <script>
        // Sizning kodingiz shu yerda
    </script>
</body>
</html>`}
                />
              </div>
            </div>
          </div>

          {/* Vazifa 3 */}
          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all border border-gray-800 hover:border-purple-500/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center font-bold text-white">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">Oddiy kalkulyator</h3>
                <p className="text-gray-300 mb-4">
                  2 ta raqamni qo'shish, ayirish, ko'paytirish va bo'lish amallarini bajaring va natijani console'da chiqaring.
                </p>
                <CodeBlock 
                  language="javascript"
                  code={`// Sizning kodingiz:
let a = 10;
let b = 5;

// Qo'shish
console.log('Qo\'shish: ' + ...);

// Ayirish
console.log('Ayirish: ' + ...);

// Ko'paytirish
console.log('Ko\'paytirish: ' + ...);

// Bo'lish
console.log('Bo\'lish: ' + ...);`}
                />
              </div>
            </div>
          </div>

          {/* Vazifa 4 - Bonus */}
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center font-bold text-white">
                ⭐
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Bonus: Interaktiv sahifa</h3>
                <p className="text-gray-300 mb-4">
                  To'liq HTML sahifa yarating: button bosilganda fon rangini o'zgartirsin va console'da xabar chiqarsin.
                </p>
                <CodeBlock 
                  language="html"
                  code={`<!DOCTYPE html>
<html>
<head>
    <title>Mening sahifam</title>
</head>
<body id="body">
    <h1>JavaScript bilan ishlash</h1>
    <button onclick="changeColor()">Rang o'zgartir</button>
    
    <script>
        function changeColor() {
            // Fon rangini o'zgartiring
            // Console'ga xabar chiqaring
        }
    </script>
</body>
</html>`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Maslahat */}
        <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Maslahat</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Har bir vazifani alohida HTML faylda bajaring</li>
                <li>• Kodingizni brauzerda test qiling</li>
                <li>• Console'ni ochib (F12) natijalarni ko'ring</li>
                <li>• Xatolik bo'lsa, console'da qizil xabar ko'rinadi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link 
          href="/docs/css/responsive" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">CSS Responsive</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/data-types" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-yellow-200">Keyingi</div>
            <div className="text-white font-medium">Ma'lumot turlari</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
