"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Search, Filter, CheckCircle, Code2, Sparkles } from "lucide-react";

export default function JavaScriptRegexPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-green-500/10 to-teal-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 rounded-full text-sm mb-6">
            <Search className="w-4 h-4 text-lime-400" />
            <span className="text-lime-300 font-semibold">REGEX</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-green-400 to-teal-400 mb-4">
            Regular Expressions
          </h1>
          <p className="text-2xl text-gray-300">
            Matnda qidirish va tekshirish
          </p>
        </div>
      </div>

      {/* Regex yaratish */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Search className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Regex yaratish</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Literal sintaksis
let regex1 = /hello/;

// Constructor
let regex2 = new RegExp('hello');

// Flaglar
let regex3 = /hello/i;  // i = case insensitive
let regex4 = /hello/g;  // g = global (barcha topilmalar)
let regex5 = /hello/gi; // i va g birga`}
        />
      </div>

      {/* Asosiy metodlar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Asosiy metodlar</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let text = "Salom Dunyo! salom";

// test() - true/false qaytaradi
let regex = /salom/i;
console.log(regex.test(text)); // true

// match() - topilmalarni qaytaradi
console.log(text.match(/salom/gi)); // ["Salom", "salom"]

// search() - birinchi topilma indexini qaytaradi
console.log(text.search(/dunyo/i)); // 6

// replace() - almashtirish
console.log(text.replace(/salom/gi, 'Assalom')); 
// "Assalom Dunyo! Assalom"

// split() - bo'lish
let text2 = "olma,banan,apelsin";
console.log(text2.split(/,/)); // ["olma", "banan", "apelsin"]`}
        />
      </div>

      {/* Pattern lar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Filter className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Pattern lar</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Belgilar</h3>
            <CodeBlock 
              language="javascript"
              code={`// . - har qanday belgi
/h.t/.test("hat");  // true
/h.t/.test("hot");  // true

// \\d - raqam [0-9]
/\\d/.test("abc123"); // true

// \\D - raqam emas
/\\D/.test("abc");    // true

// \\w - harf, raqam, _ [a-zA-Z0-9_]
/\\w/.test("abc_123"); // true

// \\W - harf, raqam, _ emas
/\\W/.test("@#$");     // true

// \\s - bo'sh joy (space, tab, newline)
/\\s/.test("hello world"); // true

// \\S - bo'sh joy emas
/\\S/.test("hello");       // true`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Miqdorlar</h3>
            <CodeBlock 
              language="javascript"
              code={`// + - 1 yoki ko'p
/a+/.test("aaa");     // true

// * - 0 yoki ko'p
/a*/.test("");        // true
/a*/.test("aaa");     // true

// ? - 0 yoki 1
/colou?r/.test("color");  // true
/colou?r/.test("colour"); // true

// {n} - aniq n ta
/a{3}/.test("aaa");   // true

// {n,} - kamida n ta
/a{2,}/.test("aaa");  // true

// {n,m} - n dan m gacha
/a{2,4}/.test("aaa"); // true`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Pozitsiya</h3>
            <CodeBlock 
              language="javascript"
              code={`// ^ - boshlanishi
/^hello/.test("hello world"); // true
/^hello/.test("say hello");   // false

// $ - tugashi
/world$/.test("hello world"); // true
/world$/.test("world hello"); // false

// \\b - so'z chegarasi
/\\bhello\\b/.test("hello world"); // true
/\\bhello\\b/.test("helloworld");  // false`}
            />
          </div>
        </div>
      </div>

      {/* Amaliy Misollar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Amaliy Misollar</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Email tekshirish</h3>
            <CodeBlock 
              language="javascript"
              code={`function isValidEmail(email) {
    let regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return regex.test(email);
}

console.log(isValidEmail('ali@example.com')); // true
console.log(isValidEmail('invalid.email'));   // false`}
            />
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Telefon raqam</h3>
            <CodeBlock 
              language="javascript"
              code={`function isValidPhone(phone) {
    let regex = /^\\+998\\d{9}$/;
    return regex.test(phone);
}

console.log(isValidPhone('+998901234567')); // true
console.log(isValidPhone('901234567'));      // false`}
            />
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-400 mb-4">Parol kuchi</h3>
            <CodeBlock 
              language="javascript"
              code={`function isStrongPassword(password) {
    // Kamida 8 belgi, 1 katta, 1 kichik, 1 raqam
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/;
    return regex.test(password);
}

console.log(isStrongPassword('Pass1234')); // true
console.log(isStrongPassword('weak'));     // false`}
            />
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">URL tekshirish</h3>
            <CodeBlock 
              language="javascript"
              code={`function isValidURL(url) {
    let regex = /^https?:\\/\\/.+/;
    return regex.test(url);
}

console.log(isValidURL('https://example.com')); // true
console.log(isValidURL('example.com'));         // false`}
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
              <h3 className="text-xl font-semibold text-gray-200">Email validator</h3>
            </div>
            <p className="text-gray-300">
              Email manzilni tekshiruvchi regex yozing.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Telefon validator</h3>
            </div>
            <p className="text-gray-300">
              O&apos;zbek telefon raqamini tekshiring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Parol validator</h3>
            </div>
            <p className="text-gray-300">
              Kuchli parol tekshiruvchi regex yarating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Matn tozalash</h3>
            </div>
            <p className="text-gray-300">
              Matndan raqamlarni yoki maxsus belgilarni olib tashlang.
            </p>
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
              title: "Validatsiya funksiyalari",
              desc: "Regex bilan validatsiya funksiyalari yarating:",
              items: [
                "validateEmail(email) - email validatsiyasi",
                "validatePhone(phone) - telefon raqam (+998901234567)",
                "validatePassword(password) - kamida 8 ta belgi, 1 katta harf, 1 raqam",
                "validateURL(url) - to'g'ri URL formatini tekshirish",
                "validateUsername(username) - faqat harflar va raqamlar, 3-20 belgi"
              ]
            },
            {
              num: "2",
              title: "Matn tahlili",
              desc: "Regex bilan matnni tahlil qilish:",
              items: [
                "Matndagi barcha email addresslarni toping",
                "Barcha telefon raqamlarni ajratib oling",
                "Barcha URL larni toping",
                "Hashtag larni (#javascript) ajratib oling",
                "Mention larni (@username) toping"
              ]
            },
            {
              num: "3",
              title: "Matn formatlash",
              desc: "Regex bilan matnni formatlash:",
              items: [
                "Telefon raqamni formatlang: 998901234567 → +998 (90) 123-45-67",
                "Karta raqamini formatlang: 1234567890123456 → 1234 5678 9012 3456",
                "Narxni formatlang: 1000000 → 1,000,000",
                "Sanani formatlang: 2024-01-15 → 15.01.2024",
                "HTML teglarini olib tashlang"
              ]
            },
            {
              num: "4",
              title: "Qidiruv va almashtirish",
              desc: "Regex bilan qidiruv dasturi yarating. Matn kiritish maydoni. Qidiruv pattern kiritish (regex). Topilgan barcha natijalarni highlight qiling. Replace funksiyasi. Case-sensitive/insensitive rejim. Global/local qidiruv. Topilgan natijalar sonini ko'rsating."
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
          href="/docs/javascript/date" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Date</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/errors" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-lime-200">Keyingi</div>
            <div className="text-white font-medium">Error Handling</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
