"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { List, Plus, Trash2, Search, Filter, TrendingUp, Code2, Sparkles, Layers } from "lucide-react";

export default function JavaScriptArraysPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-sm mb-6">
            <List className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">ARRAYS</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 mb-4">
            Array va Metodlari
          </h1>
          <p className="text-2xl text-gray-300">
            Massivlar bilan ishlash va metodlar
          </p>
        </div>
      </div>

      {/* Array nima */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Array nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">Array</span> - bu bir nechta qiymatlarni bitta o&apos;zgaruvchida saqlash imkonini beradi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Array yaratish
let fruits = ["olma", "banan", "apelsin"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["matn", 123, true, null];

// Bo'sh array
let empty = [];

// Array constructor
let arr = new Array(5); // 5 ta bo'sh element

console.log(fruits);  // ["olma", "banan", "apelsin"]
console.log(numbers); // [1, 2, 3, 4, 5]`}
        />
      </div>

      {/* Elementlarga murojaat */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Search className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Elementlarga murojaat</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let fruits = ["olma", "banan", "apelsin", "uzum"];

// Index 0 dan boshlanadi
console.log(fruits[0]); // "olma"
console.log(fruits[1]); // "banan"
console.log(fruits[2]); // "apelsin"

// Oxirgi element
console.log(fruits[fruits.length - 1]); // "uzum"

// O'zgartirish
fruits[1] = "ananas";
console.log(fruits); // ["olma", "ananas", "apelsin", "uzum"]

// Uzunlik
console.log(fruits.length); // 4`}
        />
      </div>

      {/* push va pop */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">push() va pop()</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-green-400 mb-3">push()</h3>
            <p className="text-gray-300">
              Oxiriga element qo&apos;shish
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-red-400 mb-3">pop()</h3>
            <p className="text-gray-300">
              Oxiridagi elementni o&apos;chirish
            </p>
          </div>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let fruits = ["olma", "banan"];

// push() - oxiriga qo'shish
fruits.push("apelsin");
console.log(fruits); // ["olma", "banan", "apelsin"]

fruits.push("uzum", "nok");
console.log(fruits); // ["olma", "banan", "apelsin", "uzum", "nok"]

// pop() - oxiridagini o'chirish
let last = fruits.pop();
console.log(last);   // "nok"
console.log(fruits); // ["olma", "banan", "apelsin", "uzum"]`}
        />
      </div>

      {/* Array metodlari davomi */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl">
            <Filter className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Array Metodlari</h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">forEach() - Har birini ko&apos;rib chiqish</h3>
            <CodeBlock 
              language="javascript"
              code={`let fruits = ["olma", "banan", "apelsin"];

fruits.forEach((fruit, index) => {
    console.log(\`\${index + 1}. \${fruit}\`);
});
// 1. olma
// 2. banan
// 3. apelsin`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">map() - Yangi array yaratish</h3>
            <CodeBlock 
              language="javascript"
              code={`let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

let squared = numbers.map(num => num ** 2);
console.log(squared); // [1, 4, 9, 16, 25]`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">filter() - Filtrlash</h3>
            <CodeBlock 
              language="javascript"
              code={`let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4, 6, 8, 10]

let greaterThan5 = numbers.filter(num => num > 5);
console.log(greaterThan5); // [6, 7, 8, 9, 10]`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">reduce() - Bitta qiymatga kamaytirish</h3>
            <CodeBlock 
              language="javascript"
              code={`let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

let product = numbers.reduce((total, num) => total * num, 1);
console.log(product); // 120`}
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
        
        <div className="space-y-6">
          {[
            {
              num: "1",
              title: "Talabalar ro'yxati",
              desc: "5 ta talaba ma'lumotini array da saqlang (ism, yosh, baho). Keyin:",
              items: [
                "Barcha talabalarni console ga chiqaring",
                "Eng yosh talabani toping",
                "O'rtacha bahoni hisoblang",
                "A'lo baholi talabalarni filtrlang (baho >= 4.5)"
              ]
            },
            {
              num: "2",
              title: "Mahsulotlar do'koni",
              desc: "Mahsulotlar array yarating (nom, narx, miqdor). Keyin:",
              items: [
                "Barcha mahsulotlar umumiy qiymatini hisoblang",
                "Eng qimmat mahsulotni toping",
                "1000 so'mdan arzon mahsulotlarni ko'rsating",
                "Barcha narxlarga 10% chegirma qo'shing"
              ]
            },
            {
              num: "3",
              title: "Array metodlari",
              desc: "Quyidagi vazifalarni bajaring:",
              items: [
                "[1, 2, 3, 4, 5] - barcha sonlarni 3 ga ko'paytiring",
                "[10, 25, 30, 45, 50] - 30 dan katta sonlarni toping",
                "[5, 10, 15, 20] - barcha sonlar yig'indisini toping",
                "['olma', 'banan', 'olcha'] - hammasini katta harfga o'zgartiring"
              ]
            },
            {
              num: "4",
              title: "Takrorlanuvchi elementlar",
              desc: "Array ichidagi takrorlanuvchi elementlarni toping va ularni olib tashlang. Masalan: [1, 2, 2, 3, 4, 4, 5] → [1, 2, 3, 4, 5]"
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
          href="/docs/javascript/amaliyot2" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Amaliyot #2</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/objects" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-cyan-200">Keyingi</div>
            <div className="text-white font-medium">Objektlar</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
