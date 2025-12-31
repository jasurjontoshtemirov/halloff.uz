"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Map, List, Code2, Sparkles, Database } from "lucide-react";

export default function JavaScriptMapSetPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-amber-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full text-sm mb-6">
            <Map className="w-4 h-4 text-red-400" />
            <span className="text-red-300 font-semibold">MAP & SET</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 mb-4">
            Map & Set
          </h1>
          <p className="text-2xl text-gray-300">
            Yangi ma&apos;lumot tuzilmalari
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Map className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Map</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">Map</span> - bu key-value juftliklarini saqlaydi. Obyektdan farqi - har qanday qiymat key bo&apos;lishi mumkin.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Map yaratish
let map = new Map();

// Qo'shish
map.set('name', 'Ali');
map.set('age', 25);
map.set('city', 'Toshkent');

// O'qish
console.log(map.get('name')); // "Ali"
console.log(map.get('age'));  // 25

// Borligini tekshirish
console.log(map.has('name')); // true
console.log(map.has('email')); // false

// O'chirish
map.delete('age');

// Hajmi
console.log(map.size); // 2

// Hammasi o'chirish
map.clear();`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Har qanday key</h3>
        <CodeBlock 
          language="javascript"
          code={`let map = new Map();

// Obyekt key sifatida
let obj = { id: 1 };
map.set(obj, 'Obyekt qiymati');

// Funksiya key sifatida
let func = function() {};
map.set(func, 'Funksiya qiymati');

// Number key sifatida
map.set(1, 'Bir');
map.set('1', 'Bir (string)');

console.log(map.get(obj));  // "Obyekt qiymati"
console.log(map.get(1));    // "Bir"
console.log(map.get('1'));  // "Bir (string)"`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Iteratsiya</h3>
        <CodeBlock 
          language="javascript"
          code={`let map = new Map([
    ['name', 'Ali'],
    ['age', 25],
    ['city', 'Toshkent']
]);

// forEach
map.forEach((value, key) => {
    console.log(\`\${key}: \${value}\`);
});

// for...of
for (let [key, value] of map) {
    console.log(\`\${key}: \${value}\`);
}

// Faqat keylar
for (let key of map.keys()) {
    console.log(key);
}

// Faqat qiymatlar
for (let value of map.values()) {
    console.log(value);
}`}
        />
      </div>

      {/* Set */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <List className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Set</h2>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-green-400 font-semibold">Set</span> - bu noyob qiymatlar to&apos;plami. Dublikatlar bo&apos;lmaydi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Set yaratish
let set = new Set();

// Qo'shish
set.add(1);
set.add(2);
set.add(3);
set.add(2); // Dublikat, qo'shilmaydi

console.log(set); // Set(3) {1, 2, 3}

// Borligini tekshirish
console.log(set.has(1)); // true
console.log(set.has(5)); // false

// O'chirish
set.delete(2);

// Hajmi
console.log(set.size); // 2

// Hammasi o'chirish
set.clear();`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Array dan Set</h3>
        <CodeBlock 
          language="javascript"
          code={`// Dublikatlarni o'chirish
let numbers = [1, 2, 3, 2, 4, 3, 5, 1];
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// String dan noyob harflar
let text = "hello";
let uniqueChars = [...new Set(text)];
console.log(uniqueChars); // ['h', 'e', 'l', 'o']`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Iteratsiya</h3>
        <CodeBlock 
          language="javascript"
          code={`let set = new Set([1, 2, 3, 4, 5]);

// forEach
set.forEach(value => {
    console.log(value);
});

// for...of
for (let value of set) {
    console.log(value);
}

// Array ga aylantirish
let array = [...set];
console.log(array); // [1, 2, 3, 4, 5]`}
        />
      </div>

      {/* Amaliy Misollar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Amaliy Misollar</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">User cache (Map)</h3>
            <CodeBlock 
              language="javascript"
              code={`let userCache = new Map();

function getUser(id) {
    if (userCache.has(id)) {
        return userCache.get(id);
    }
    
    // API dan olish
    let user = { id, name: 'User ' + id };
    userCache.set(id, user);
    return user;
}

console.log(getUser(1)); // API dan
console.log(getUser(1)); // Cache dan`}
            />
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-400 mb-4">Noyob qiymatlar (Set)</h3>
            <CodeBlock 
              language="javascript"
              code={`let visitors = new Set();

function addVisitor(name) {
    visitors.add(name);
}

addVisitor('Ali');
addVisitor('Vali');
addVisitor('Ali'); // Dublikat

console.log(visitors.size); // 2
console.log([...visitors]); // ['Ali', 'Vali']`}
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
              <h3 className="text-xl font-semibold text-gray-200">Map yaratish</h3>
            </div>
            <p className="text-gray-300">
              User ma&apos;lumotlarini Map da saqlang.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Set yaratish</h3>
            </div>
            <p className="text-gray-300">
              Array dan dublikatlarni o&apos;chiring Set bilan.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Cache tizimi</h3>
            </div>
            <p className="text-gray-300">
              Map bilan oddiy cache tizimi yarating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Noyob so&apos;zlar</h3>
            </div>
            <p className="text-gray-300">
              Matndan noyob so&apos;zlarni Set bilan toping.
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
              title: "Foydalanuvchilar bazasi",
              desc: "Map bilan foydalanuvchilar ma'lumotini saqlash:",
              items: [
                "Map yarating (key: userId, value: user object)",
                "addUser(id, userData) funksiyasi",
                "getUser(id) funksiyasi",
                "updateUser(id, updates) funksiyasi",
                "deleteUser(id) funksiyasi",
                "getAllUsers() - barcha foydalanuvchilar array"
              ]
            },
            {
              num: "2",
              title: "So'zlar chastotasi",
              desc: "Matnda so'zlar necha marta uchraganini hisoblash:",
              items: [
                "Matn kiriting (masalan, bir paragraf)",
                "Har bir so'z necha marta uchraganini Map da saqlang",
                "Eng ko'p uchraydigan 5 ta so'zni toping",
                "Natijani jadval ko'rinishida chiqaring"
              ]
            },
            {
              num: "3",
              title: "Set bilan ishlash",
              desc: "Set dan foydalanib turli vazifalar:",
              items: [
                "Array dan dublikatlarni olib tashlash",
                "2 ta Set ning kesishmasi (intersection)",
                "2 ta Set ning birlashmasi (union)",
                "2 ta Set ning farqi (difference)",
                "Email addresslar ro'yxatini unique qilish"
              ]
            },
            {
              num: "4",
              title: "Cache tizimi",
              desc: "Map bilan oddiy cache tizimi yarating. API so'rovlar natijalarini keshlash. Agar ma'lumot keshda bo'lsa - keshdan qaytarish. Agar yo'q bo'lsa - API dan olish va keshga qo'shish. Cache hajmini cheklash (masalan, 10 ta element). Eng eski elementni o'chirish (LRU - Least Recently Used)."
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
          href="/docs/javascript/spread-rest" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Spread & Rest</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/amaliyot5" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-red-200">Keyingi</div>
            <div className="text-white font-medium">🚀 Amaliyot #5</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
