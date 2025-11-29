"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Repeat, Zap, Play, Pause, RotateCw, TrendingUp, Code2, Sparkles } from "lucide-react";

export default function JavaScriptLoopsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-sm mb-6">
            <Repeat className="w-4 h-4 text-yellow-400 animate-spin" style={{animationDuration: '3s'}} />
            <span className="text-yellow-300 font-semibold">TSIKLLAR</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mb-4">
            Tsikllar (Loops)
          </h1>
          <p className="text-2xl text-gray-300">
            for, while, do-while - takrorlanuvchi amallar
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
          <p className="text-gray-400 mb-4">Tsikllar - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-yellow-500/50 transition-all">
            <div className="text-center">
              <Play className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* for Loop */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <RotateCw className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">for Loop</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">for</span> - eng ko'p ishlatiladigan tsikl. Necha marta takrorlanishini bilsangiz ishlatiladi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Sintaksis: for (boshlash; shart; qadam)
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 0, 1, 2, 3, 4

// 1 dan 10 gacha
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Teskari
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 2 qadam
for (let i = 0; i <= 10; i += 2) {
    console.log(i); // 0, 2, 4, 6, 8, 10
}`}
        />
      </div>

      {/* while Loop */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Repeat className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">while Loop</h2>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-purple-400 font-semibold">while</span> - shart true bo'lguncha takrorlanadi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Sintaksis
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// 0, 1, 2, 3, 4

// Misol: Raqamni topish
let number = 1;
while (number <= 100) {
    if (number % 7 === 0 && number % 3 === 0) {
        console.log(number); // 21, 42, 63, 84
    }
    number++;
}

// Cheksiz tsikl (ehtiyot bo'ling!)
// while (true) {
//     console.log("Cheksiz!");
// }`}
        />
      </div>

      {/* do...while Loop */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">do...while Loop</h2>
        </div>
        
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-green-400 font-semibold">do...while</span> - kamida 1 marta bajariladi, keyin shartni tekshiradi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Sintaksis
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
// 0, 1, 2, 3, 4

// Farqi: kamida 1 marta bajariladi
let x = 10;
do {
    console.log(x); // 10 (1 marta chiqadi)
    x++;
} while (x < 5);

// while bilan
let y = 10;
while (y < 5) {
    console.log(y); // Hech narsa chiqmaydi
    y++;
}`}
        />
      </div>

      {/* break va continue */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl">
            <Pause className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">break va continue</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-red-400 mb-3">break</h3>
            <p className="text-gray-300">
              Tsiklni to'xtatish va chiqish
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">continue</h3>
            <p className="text-gray-300">
              Joriy iteratsiyani o'tkazib yuborish
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">break - Tsiklni to'xtatish</h3>
            <CodeBlock 
              language="javascript"
              code={`// break - tsikldan chiqish
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // 5 ga yetganda to'xtatadi
    }
    console.log(i);
}
// 0, 1, 2, 3, 4

// Misol: Raqamni topish
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log("7 ga bo'linadigan birinchi son: " + i);
        break; // 7 ni topdi, to'xtatdi
    }
}`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">continue - Keyingi iteratsiyaga o'tish</h3>
            <CodeBlock 
              language="javascript"
              code={`// continue - joriy iteratsiyani o'tkazib yuborish
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Juft sonlarni o'tkazib yuboradi
    }
    console.log(i);
}
// 1, 3, 5, 7, 9

// Misol: Faqat toq sonlar
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) continue;
    console.log(i); // Faqat toq sonlar
}`}
            />
          </div>
        </div>
      </div>

      {/* Nested Loops */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Ichma-ich (Nested) Loops</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Ichma-ich for
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
}

// Misol: Ko'paytirish jadvali
for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += (i * j) + "\\t";
    }
    console.log(row);
}

// Misol: Yulduzcha uchburchak
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
// *
// **
// ***
// ****
// *****`}
        />
      </div>

      {/* Amaliy Misollar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Amaliy Misollar</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">1 dan 100 gacha yig'indi</h3>
            <CodeBlock 
              language="javascript"
              code={`let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Yig'indi: " + sum); // 5050`}
            />
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Faktorial hisoblash</h3>
            <CodeBlock 
              language="javascript"
              code={`let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log(n + "! = " + factorial); // 5! = 120`}
            />
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-400 mb-4">Tub sonlarni topish</h3>
            <CodeBlock 
              language="javascript"
              code={`console.log("1 dan 50 gacha tub sonlar:");

for (let num = 2; num <= 50; num++) {
    let isPrime = true;
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        console.log(num);
    }
}`}
            />
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">FizzBuzz</h3>
            <CodeBlock 
              language="javascript"
              code={`// Mashhur dasturlash mashqi
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}`}
            />
          </div>
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
              <h3 className="text-xl font-semibold text-gray-200">Juft sonlar</h3>
            </div>
            <p className="text-gray-300">
              1 dan 50 gacha barcha juft sonlarni chiqaring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Teskari sanash</h3>
            </div>
            <p className="text-gray-300">
              10 dan 1 gacha teskari sanang va console ga chiqaring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Kvadratlar</h3>
            </div>
            <p className="text-gray-300">
              1 dan 10 gacha sonlarning kvadratini hisoblang va chiqaring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Yulduzcha</h3>
            </div>
            <p className="text-gray-300">
              5 qatorli yulduzcha uchburchak chiqaring (nested loop).
            </p>
          </div>
        </div>
      </div>

      {/* Topshiriq */}
      <div className="mb-12 bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">📝</span>
          <h2 className="text-3xl font-semibold text-gray-100">Topshiriq</h2>
        </div>
        
        <div className="space-y-6">
          {[
            {
              num: "1",
              title: "Ko'paytirish jadvali",
              desc: "1 dan 10 gacha ko'paytirish jadvalini yarating (nested loop)."
            },
            {
              num: "2",
              title: "Fibonacci ketma-ketligi",
              desc: "Birinchi 20 ta Fibonacci sonini chiqaring (0, 1, 1, 2, 3, 5, 8, 13...)."
            },
            {
              num: "3",
              title: "Raqamlarni teskari aylantirish",
              desc: "Berilgan sonning raqamlarini teskari aylantiring (masalan: 12345 → 54321)."
            },
            {
              num: "4",
              title: "Piramida",
              desc: "Yulduzchadan piramida yasang (markazga tekislangan)."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all border border-gray-800 hover:border-orange-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center font-bold text-white">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
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
              title: "Tub sonlar",
              desc: "1 dan 100 gacha bo'lgan barcha tub sonlarni toping va chiqaring.",
              hint: "Tub son - faqat 1 ga va o'ziga bo'linadigan son"
            },
            {
              num: "2",
              title: "Armstrong soni",
              desc: "3 xonali Armstrong sonlarni toping (masalan: 153 = 1³ + 5³ + 3³).",
              hint: "100 dan 999 gacha tekshiring"
            },
            {
              num: "3",
              title: "Palindrom sonlar",
              desc: "1 dan 1000 gacha bo'lgan palindrom sonlarni toping (masalan: 121, 131, 141).",
              hint: "Palindrom - chapdan va o'ngdan bir xil o'qiladigan son"
            },
            {
              num: "4",
              title: "Shakllar chizish",
              desc: "Yulduzchadan turli shakllar chizing:",
              items: [
                "To'g'ri burchakli uchburchak",
                "Teskari uchburchak",
                "Romb shakli",
                "Bo'sh kvadrat (faqat chegaralari)"
              ]
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
                  {item.hint && (
                    <p className="text-sm text-gray-400 italic">💡 Maslahat: {item.hint}</p>
                  )}
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
          href="/docs/javascript/conditions" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Shart operatorlari</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/functions" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-yellow-200">Keyingi</div>
            <div className="text-white font-medium">Funksiyalar</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
