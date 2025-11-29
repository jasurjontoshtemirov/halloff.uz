"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Database, Type, Hash, Binary, FileText, Box, Sparkles, Code2 } from "lucide-react";

export default function JavaScriptDataTypesPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm mb-6">
            <Database className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-semibold">MA'LUMOT TURLARI</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            Ma&apos;lumot Turlari
          </h1>
          <p className="text-2xl text-gray-300">
            JavaScript da ma&apos;lumot turlari va ularning ishlashi
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
          <p className="text-gray-400 mb-4">Ma&apos;lumot turlari - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-yellow-500/50 transition-all">
            <div className="text-center">
              <Code2 className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* 8 Data Types */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl">
            <Type className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">JavaScript da 8 ta asosiy ma&apos;lumot turi</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-400">1. String (Matn)</h3>
            </div>
            <p className="text-gray-300 text-sm">Matnli ma&apos;lumotlar</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <Hash className="w-5 h-5 text-green-400" />
              <h3 className="text-xl font-semibold text-green-400">2. Number (Raqam)</h3>
            </div>
            <p className="text-gray-300 text-sm">Butun va onlik sonlar</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <Binary className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-semibold text-purple-400">3. Boolean</h3>
            </div>
            <p className="text-gray-300 text-sm">true yoki false</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl">❓</span>
              <h3 className="text-xl font-semibold text-orange-400">4. Undefined</h3>
            </div>
            <p className="text-gray-300 text-sm">Qiymat berilmagan</p>
          </div>
          <div className="bg-gradient-to-br from-gray-500/10 to-slate-500/10 rounded-xl p-6 border border-gray-500/20 hover:border-gray-500/40 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl">⭕</span>
              <h3 className="text-xl font-semibold text-gray-400">5. Null</h3>
            </div>
            <p className="text-gray-300 text-sm">Bo&apos;sh qiymat</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <Box className="w-5 h-5 text-yellow-400" />
              <h3 className="text-xl font-semibold text-yellow-400">6. Object</h3>
            </div>
            <p className="text-gray-300 text-sm">Murakkab ma&apos;lumotlar</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/40 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl">🔑</span>
              <h3 className="text-xl font-semibold text-indigo-400">7. Symbol</h3>
            </div>
            <p className="text-gray-300 text-sm">Noyob identifikator</p>
          </div>
          <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl p-6 border border-teal-500/20 hover:border-teal-500/40 transition-all">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl">🔢</span>
              <h3 className="text-xl font-semibold text-teal-400">8. BigInt</h3>
            </div>
            <p className="text-gray-300 text-sm">Katta sonlar</p>
          </div>
        </div>
      </div>

      {/* String */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">1. String (Matn)</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">String</span> - bu matnli ma&apos;lumotlar. Qo&apos;shtirnoq, yakkatirnоq yoki backtick bilan yoziladi.
          </p>
        </div>
        <CodeBlock 
          language="javascript"
          code={`// Qoshaloq tirnoq
let name = "Ali";

// Yakka tirnoq
let city = 'Toshkent';

// Backtick (template literal)
let greeting = \`Salom, mening ismim \${name}\`;

console.log(greeting); // Salom, mening ismim Ali

// String metodlari
let text = "JavaScript";
console.log(text.length);        // 10
console.log(text.toUpperCase()); // JAVASCRIPT
console.log(text.toLowerCase()); // javascript
console.log(text.charAt(0));     // J
console.log(text.slice(0, 4));   // Java`}
        />
      </div>

      {/* Number */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Hash className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">2. Number (Raqam)</h2>
        </div>
        
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-green-400 font-semibold">Number</span> - bu raqamli ma&apos;lumotlar. Butun va onlik sonlar.
          </p>
        </div>
        <CodeBlock 
          language="javascript"
          code={`let age = 25;           // Butun son
let price = 99.99;      // Onlik son
let negative = -10;     // Manfiy son

// Matematik amallar
let sum = 10 + 5;       // 15
let diff = 10 - 5;      // 5
let mult = 10 * 5;      // 50
let div = 10 / 5;       // 2
let mod = 10 % 3;       // 1 (qoldiq)
let power = 2 ** 3;     // 8 (daraja)

// Maxsus qiymatlar
console.log(Infinity);     // Cheksizlik
console.log(-Infinity);    // Manfiy cheksizlik
console.log(NaN);          // Not a Number`}
        />
      </div>

      {/* Boolean */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Binary className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">3. Boolean</h2>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-purple-400 font-semibold">Boolean</span> - bu mantiqiy qiymat. Faqat 2 ta qiymat: true yoki false.
          </p>
        </div>
        <CodeBlock 
          language="javascript"
          code={`let isStudent = true;
let isWorking = false;

// Taqqoslash operatorlari boolean qaytaradi
console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 === 5);    // true
console.log(5 !== 3);    // true

// Mantiqiy operatorlar
console.log(true && false);  // false (AND)
console.log(true || false);  // true (OR)
console.log(!true);          // false (NOT)`}
        />
      </div>

      {/* Undefined and Null */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
            <span className="text-2xl">⭕</span>
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">4. Undefined va 5. Null</h2>
        </div>
        <CodeBlock 
          language="javascript"
          code={`// Undefined - qiymat berilmagan
let x;
console.log(x);        // undefined
console.log(typeof x); // "undefined"

// Null - ataylab bosh qiymat
let y = null;
console.log(y);        // null
console.log(typeof y); // "object" (bu JavaScript xatosi)

// Farqi
console.log(undefined == null);  // true
console.log(undefined === null); // false`}
        />
      </div>

      {/* Object */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-xl">
            <Box className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">6. Object</h2>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-yellow-400 font-semibold">Object</span> - bu murakkab ma&apos;lumot turi. Bir nechta qiymatlarni saqlaydi.
          </p>
        </div>
        <CodeBlock 
          language="javascript"
          code={`// Object yaratish
let person = {
    name: "Ali",
    age: 25,
    isStudent: true,
    city: "Toshkent"
};

// Qiymatlarga murojaat
console.log(person.name);     // Ali
console.log(person["age"]);   // 25

// Array ham object
let colors = ["qizil", "yashil", "kok"];
console.log(colors[0]);       // qizil
console.log(typeof colors);   // "object"`}
        />
      </div>

      {/* typeof */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">typeof operatori</h2>
        </div>
        
        <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-indigo-400 font-semibold">typeof</span> - ma&apos;lumot turini aniqlash uchun ishlatiladi.
          </p>
        </div>
        <CodeBlock 
          language="javascript"
          code={`console.log(typeof "Ali");        // "string"
console.log(typeof 25);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object"
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"`}
        />
      </div>

      {/* Type Conversion */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Type Conversion (Tur o&apos;zgartirish)</h2>
        </div>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">String ga o&apos;zgartirish</h3>
        <CodeBlock 
          language="javascript"
          code={`let num = 123;
let str = String(num);
console.log(str);        // "123"
console.log(typeof str); // "string"

// Yoki
let str2 = num.toString();
console.log(str2);       // "123"`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Number ga o&apos;zgartirish</h3>
        <CodeBlock 
          language="javascript"
          code={`let str = "123";
let num = Number(str);
console.log(num);        // 123
console.log(typeof num); // "number"

// parseInt va parseFloat
console.log(parseInt("123"));     // 123
console.log(parseFloat("123.45")); // 123.45
console.log(parseInt("123px"));    // 123
console.log(Number("123px"));      // NaN`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Boolean ga o&apos;zgartirish</h3>
        <CodeBlock 
          language="javascript"
          code={`// Falsy qiymatlar (false ga aylanadi)
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// Truthy qiymatlar (true ga aylanadi)
console.log(Boolean(1));          // true
console.log(Boolean("hello"));    // true
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true`}
        />
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
              <h3 className="text-xl font-semibold text-gray-200">O&apos;zingiz haqingizda</h3>
            </div>
            <p className="text-gray-300 mb-3">
              Turli ma&apos;lumot turlaridan foydalanib o&apos;zingiz haqingizda ma&apos;lumot yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 text-sm">
              <li>Ism (string)</li>
              <li>Yosh (number)</li>
              <li>Talabamisiz? (boolean)</li>
              <li>Shahar (string)</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">typeof</h3>
            </div>
            <p className="text-gray-300">
              Har xil qiymatlarning turini typeof bilan tekshiring va console ga chiqaring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Type Conversion</h3>
            </div>
            <p className="text-gray-300">
              String raqamni Number ga, Number ni String ga o&apos;zgartiring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Amaliyot</h3>
            </div>
            <p className="text-gray-300">
              Barcha 8 ta ma&apos;lumot turidan misol yarating va console ga chiqaring.
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
          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all border border-gray-800 hover:border-orange-500/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center font-bold text-white">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">Ma&apos;lumotlar Bazasi</h3>
                <p className="text-gray-300 mb-3">
                  3 ta odam haqida ma&apos;lumot yarating (object ishlatmasdan):
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 text-sm">
                  <li>Har bir odam uchun: ism, yosh, shahar, talabami</li>
                  <li>Barcha ma&apos;lumotlarni console ga chiqaring</li>
                  <li>Har bir ma&apos;lumotning turini typeof bilan tekshiring</li>
                  <li>Yoshlarni qo&apos;shib, o&apos;rtacha yoshni hisoblang</li>
                </ul>
              </div>
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
              title: "Do'kon mahsulotlari",
              desc: "5 ta mahsulot uchun ma'lumotlar yarating:",
              items: [
                "Mahsulot nomi (string)",
                "Narxi (number)",
                "Mavjudmi (boolean)",
                "Barcha ma'lumotlarni console ga chiqaring",
                "Umumiy narxni hisoblang"
              ]
            },
            {
              num: "2",
              title: "Type Conversion amaliyoti",
              desc: "Quyidagi konversiyalarni bajaring:",
              items: [
                '"123" ni number ga aylantiring',
                '456 ni string ga aylantiring',
                '"true" ni boolean ga aylantiring',
                'Har bir natijani typeof bilan tekshiring'
              ]
            },
            {
              num: "3",
              title: "Shaxsiy ma'lumotlar",
              desc: "O'zingiz haqingizda 10 ta turli ma'lumot yarating (kamida 5 xil ma'lumot turidan foydalaning) va ularni console ga chiroyli formatda chiqaring.",
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
          href="/docs/javascript/intro" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">JavaScript nima?</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/operators" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-blue-200">Keyingi</div>
            <div className="text-white font-medium">Operatorlar</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
