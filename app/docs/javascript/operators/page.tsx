"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Calculator, Plus, Divide, GitCompare, Zap, TrendingUp, Code2, Sparkles } from "lucide-react";

export default function JavaScriptOperatorsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm mb-6">
            <Calculator className="w-4 h-4 text-green-400" />
            <span className="text-green-300 font-semibold">OPERATORLAR</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 mb-4">
            Operatorlar va Math Object
          </h1>
          <p className="text-2xl text-gray-300">
            Matematik amallar va hisoblashlar
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
          <p className="text-gray-400 mb-4">Operatorlar va Math Object - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-yellow-500/50 transition-all">
            <div className="text-center">
              <Code2 className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Arifmetik Operatorlar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Arifmetik Operatorlar</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            Matematik amallarni bajarish uchun ishlatiladi: <span className="text-blue-400 font-semibold">+, -, *, /, %, **</span>
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Asosiy operatorlar
let a = 10;
let b = 3;

console.log(a + b);  // 13 (qoshish)
console.log(a - b);  // 7  (ayirish)
console.log(a * b);  // 30 (kopaytirish)
console.log(a / b);  // 3.333... (bolish)
console.log(a % b);  // 1  (qoldiq)
console.log(a ** b); // 1000 (daraja)

// Increment va Decrement
let x = 5;
x++;  // x = x + 1
console.log(x); // 6

let y = 5;
y--;  // y = y - 1
console.log(y); // 4

// Prefix va Postfix
let num = 5;
console.log(++num); // 6 (avval oshir, keyin qaytar)
console.log(num++); // 6 (avval qaytar, keyin oshir)
console.log(num);   // 7`}
        />
      </div>

      {/* Tayinlash Operatorlari */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Tayinlash Operatorlari</h2>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            Qiymat berish va qisqa yozuv: <span className="text-purple-400 font-semibold">=, +=, -=, *=, /=, %=, **=</span>
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let x = 10;

// Qisqa yozuv
x += 5;  // x = x + 5  (15)
x -= 3;  // x = x - 3  (12)
x *= 2;  // x = x * 2  (24)
x /= 4;  // x = x / 4  (6)
x %= 4;  // x = x % 4  (2)
x **= 3; // x = x ** 3 (8)

// String bilan
let text = "Salom";
text += " Dunyo"; // "Salom Dunyo"`}
        />
      </div>

      {/* Taqqoslash Operatorlari */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
            <GitCompare className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Taqqoslash Operatorlari</h2>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            Qiymatlarni solishtirish: <span className="text-orange-400 font-semibold">==, ===, !=, !==, &gt;, &lt;, &gt;=, &lt;=</span>
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Teng
console.log(5 == "5");   // true  (qiymat teng)
console.log(5 === "5");  // false (qiymat va tur teng)

// Teng emas
console.log(5 != "5");   // false
console.log(5 !== "5");  // true

// Katta/kichik
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 5);    // false

// Muhim!
console.log(null == undefined);  // true
console.log(null === undefined); // false`}
        />
      </div>

      {/* Mantiqiy Operatorlar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Mantiqiy Operatorlar</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">&& (AND)</h3>
            <p className="text-gray-300">
              Hammasi true bo&apos;lishi kerak
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-green-400 mb-3">|| (OR)</h3>
            <p className="text-gray-300">
              Kamida bittasi true bo&apos;lishi kerak
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-red-400 mb-3">! (NOT)</h3>
            <p className="text-gray-300">
              Teskarisini qaytaradi
            </p>
          </div>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// AND (&&) - hammasi true bolishi kerak
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && false); // false

let age = 20;
let hasLicense = true;
console.log(age >= 18 && hasLicense); // true

// OR (||) - kamida bittasi true bolishi kerak
console.log(true || false);  // true
console.log(false || false); // false

let isWeekend = false;
let isHoliday = true;
console.log(isWeekend || isHoliday); // true

// NOT (!) - teskarisini qaytaradi
console.log(!true);  // false
console.log(!false); // true

let isRaining = false;
console.log(!isRaining); // true`}
        />
      </div>

      {/* Math Object */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Math Object</h2>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-yellow-400 font-semibold">Math</span> - bu JavaScript da matematik amallar uchun tayyor funksiyalar to&apos;plami.
          </p>
        </div>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Asosiy metodlar</h3>
        <CodeBlock 
          language="javascript"
          code={`// Yaxlitlash
console.log(Math.round(4.7));  // 5  (eng yaqin butun son)
console.log(Math.round(4.4));  // 4
console.log(Math.ceil(4.1));   // 5  (yuqoriga)
console.log(Math.floor(4.9));  // 4  (pastga)
console.log(Math.trunc(4.9));  // 4  (onlik qismni olib tashlash)

// Absolyut qiymat
console.log(Math.abs(-5));     // 5

// Daraja va ildiz
console.log(Math.pow(2, 3));   // 8  (2^3)
console.log(Math.sqrt(16));    // 4  (kvadrat ildiz)
console.log(Math.cbrt(27));    // 3  (kub ildiz)

// Min va Max
console.log(Math.min(5, 10, 3, 8));  // 3
console.log(Math.max(5, 10, 3, 8));  // 10`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Random (Tasodifiy son)</h3>
        <CodeBlock 
          language="javascript"
          code={`// 0 dan 1 gacha (1 kirmaydi)
console.log(Math.random()); // 0.123456...

// 0 dan 10 gacha
console.log(Math.random() * 10);

// 0 dan 10 gacha butun son
console.log(Math.floor(Math.random() * 11));

// 1 dan 100 gacha butun son
console.log(Math.floor(Math.random() * 100) + 1);

// Min va Max orasida
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomBetween(10, 20)); // 10-20 orasida`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Trigonometriya</h3>
        <CodeBlock 
          language="javascript"
          code={`// PI
console.log(Math.PI); // 3.141592653589793

// Trigonometrik funksiyalar
console.log(Math.sin(Math.PI / 2));  // 1
console.log(Math.cos(0));            // 1
console.log(Math.tan(Math.PI / 4));  // 1

// E (Eyler soni)
console.log(Math.E);  // 2.718281828459045

// Logarifm
console.log(Math.log(10));   // Natural logarifm
console.log(Math.log10(100)); // 2 (10 asosli)`}
        />
      </div>

      {/* Amaliy Misollar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Amaliy Misollar</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Chegirma hisoblash</h3>
            <CodeBlock 
              language="javascript"
              code={`let price = 1000;
let discount = 20; // 20%

let discountAmount = price * (discount / 100);
let finalPrice = price - discountAmount;

console.log("Asl narx: " + price);
console.log("Chegirma: " + discountAmount);
console.log("Yakuniy narx: " + finalPrice); // 800`}
            />
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Doira maydoni</h3>
            <CodeBlock 
              language="javascript"
              code={`let radius = 5;
let area = Math.PI * Math.pow(radius, 2);
console.log("Doira maydoni: " + area.toFixed(2)); // 78.54`}
            />
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-400 mb-4">Toshni tashlash (Dice)</h3>
            <CodeBlock 
              language="javascript"
              code={`function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log("Tosh: " + rollDice()); // 1-6 orasida`}
            />
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">BMI Kalkulyator</h3>
            <CodeBlock 
              language="javascript"
              code={`let weight = 70; // kg
let height = 1.75; // metr

let bmi = weight / (height * height);
console.log("BMI: " + bmi.toFixed(2)); // 22.86`}
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
              <h3 className="text-xl font-semibold text-gray-200">Kalkulyator</h3>
            </div>
            <p className="text-gray-300">
              2 ta son olib, barcha arifmetik amallarni bajaring (+, -, *, /, %, **).
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Yosh tekshirish</h3>
            </div>
            <p className="text-gray-300">
              Yoshni tekshiring: 18 dan katta va 65 dan kichik bo&apos;lsa &quot;Ishlay olasiz&quot; deb chiqaring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Random son</h3>
            </div>
            <p className="text-gray-300">
              1 dan 100 gacha tasodifiy son yarating va uni yaxlitlang.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Doira</h3>
            </div>
            <p className="text-gray-300">
              Doiraning radiusini olib, maydon va perimetrini hisoblang.
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
              title: "Mahsulot narxi",
              desc: "Mahsulot narxi, chegirma foizi va QQS (12%) ni hisoblab, yakuniy narxni toping."
            },
            {
              num: "2",
              title: "Uchburchak maydoni",
              desc: "Uchburchakning asosi va balandligini olib, maydonini hisoblang (S = a * h / 2)."
            },
            {
              num: "3",
              title: "Tosh otish o&apos;yini",
              desc: "2 ta tosh tashlang (1-6 orasida) va qaysi biri katta ekanini aniqlang."
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
              title: "BMI Kalkulyator",
              desc: "Body Mass Index (BMI) ni hisoblang:",
              items: [
                "Formula: BMI = vazn / (bo'y * bo'y)",
                "Vazn kg da, bo'y metrda",
                "Natijani 2 xonagacha yaxlitlang",
                "BMI 18.5 dan kam - \"Ozg'in\"",
                "BMI 18.5-24.9 - \"Normal\"",
                "BMI 25 dan ko'p - \"Ortiqcha vazn\""
              ]
            },
            {
              num: "2",
              title: "Valyuta konvertori",
              desc: "Pul birliklarini konvertatsiya qiling:",
              items: [
                "1 USD = 12,500 UZS",
                "1 EUR = 13,500 UZS",
                "1 RUB = 130 UZS",
                "Istalgan summani konvertatsiya qiling"
              ]
            },
            {
              num: "3",
              title: "Matematik amallar",
              desc: "10 ta tasodifiy son yarating (1-100 orasida) va ularning eng kattasi, eng kichigi, yig'indisi va o'rtacha qiymatini toping.",
              items: []
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all border border-gray-800 hover:border-purple-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center font-bold text-white">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-2">{item.desc}</p>
                  {item.items.length > 0 && (
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 text-sm">
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
          href="/docs/javascript/data-types" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Ma&apos;lumot turlari</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/amaliyot1" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-green-200">Keyingi</div>
            <div className="text-white font-medium">🚀 Amaliyot</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
