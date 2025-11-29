"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Maximize2, MoreHorizontal, Code2, Sparkles, Layers } from "lucide-react";

export default function JavaScriptSpreadRestPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-full text-sm mb-6">
            <MoreHorizontal className="w-4 h-4 text-teal-400" />
            <span className="text-teal-300 font-semibold">SPREAD & REST</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 mb-4">
            Spread & Rest
          </h1>
          <p className="text-2xl text-gray-300">
            ... operatori - Yoyish va to&apos;plash
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
          <p className="text-gray-400 mb-4">Spread & Rest - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-yellow-500/50 transition-all">
            <div className="text-center">
              <Code2 className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spread Operator */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Maximize2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Spread Operator (...)</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">Spread</span> - array yoki obyektni yoyish (expand) uchun ishlatiladi.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Array bilan</h3>
            <CodeBlock 
              language="javascript"
              code={`// Array elementlarini yoyish
let numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3

// Array nusxalash
let original = [1, 2, 3];
let copy = [...original];
console.log(copy); // [1, 2, 3]

// Array birlashtirish
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Element qo'shish
let fruits = ['olma', 'banan'];
let moreFruits = [...fruits, 'apelsin', 'uzum'];
console.log(moreFruits); // ['olma', 'banan', 'apelsin', 'uzum']`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Obyekt bilan</h3>
            <CodeBlock 
              language="javascript"
              code={`// Obyekt nusxalash
let person = { name: 'Ali', age: 25 };
let copy = { ...person };
console.log(copy); // { name: 'Ali', age: 25 }

// Obyekt birlashtirish
let user = { name: 'Ali', age: 25 };
let address = { city: 'Toshkent', country: 'Uzbekistan' };
let fullInfo = { ...user, ...address };
console.log(fullInfo);
// { name: 'Ali', age: 25, city: 'Toshkent', country: 'Uzbekistan' }

// Xususiyat qo'shish/o'zgartirish
let person = { name: 'Ali', age: 25 };
let updated = { ...person, age: 26, city: 'Toshkent' };
console.log(updated);
// { name: 'Ali', age: 26, city: 'Toshkent' }`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Function argumentlarda</h3>
            <CodeBlock 
              language="javascript"
              code={`function sum(a, b, c) {
    return a + b + c;
}

let numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

// Math funksiyalari bilan
let nums = [5, 2, 8, 1, 9];
console.log(Math.max(...nums)); // 9
console.log(Math.min(...nums)); // 1`}
            />
          </div>
        </div>
      </div>

      {/* Rest Operator */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <MoreHorizontal className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Rest Operator (...)</h2>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-green-400 font-semibold">Rest</span> - qolgan elementlarni bitta arrayga to&apos;plash uchun ishlatiladi.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Function parametrlarda</h3>
            <CodeBlock 
              language="javascript"
              code={`// Cheksiz parametrlar
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// Birinchi parametr alohida
function greet(greeting, ...names) {
    return \`\${greeting} \${names.join(', ')}!\`;
}

console.log(greet('Salom', 'Ali', 'Vali', 'Hasan'));
// "Salom Ali, Vali, Hasan!"`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Destructuring bilan</h3>
            <CodeBlock 
              language="javascript"
              code={`// Array destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// Obyekt destructuring
let person = {
    name: 'Ali',
    age: 25,
    city: 'Toshkent',
    country: 'Uzbekistan'
};

let { name, age, ...address } = person;
console.log(name);    // "Ali"
console.log(age);     // 25
console.log(address); // { city: 'Toshkent', country: 'Uzbekistan' }`}
            />
          </div>
        </div>
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
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Array nusxalash</h3>
            <CodeBlock 
              language="javascript"
              code={`// Shallow copy
let original = [1, 2, 3];
let copy = [...original];

copy.push(4);
console.log(original); // [1, 2, 3]
console.log(copy);     // [1, 2, 3, 4]`}
            />
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Obyekt yangilash</h3>
            <CodeBlock 
              language="javascript"
              code={`let user = {
    name: 'Ali',
    age: 25
};

// Yangi xususiyat qo'shish
let updated = {
    ...user,
    city: 'Toshkent',
    age: 26
};

console.log(updated);
// { name: 'Ali', age: 26, city: 'Toshkent' }`}
            />
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-400 mb-4">Array birlashtirish</h3>
            <CodeBlock 
              language="javascript"
              code={`let fruits = ['olma', 'banan'];
let vegetables = ['sabzi', 'pomidor'];
let food = [...fruits, ...vegetables];

console.log(food);
// ['olma', 'banan', 'sabzi', 'pomidor']`}
            />
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Cheksiz parametrlar</h3>
            <CodeBlock 
              language="javascript"
              code={`function multiply(multiplier, ...numbers) {
    return numbers.map(n => n * multiplier);
}

console.log(multiply(2, 1, 2, 3, 4));
// [2, 4, 6, 8]`}
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
              <h3 className="text-xl font-semibold text-gray-200">Array spread</h3>
            </div>
            <p className="text-gray-300">
              2 ta arrayni spread bilan birlashtiring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Object spread</h3>
            </div>
            <p className="text-gray-300">
              Obyektga yangi xususiyat qo&apos;shing spread bilan.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Rest parameters</h3>
            </div>
            <p className="text-gray-300">
              Rest parametrlar bilan funksiya yarating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Destructuring</h3>
            </div>
            <p className="text-gray-300">
              Rest bilan destructuring qiling.
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
              title: "Array operatsiyalari",
              desc: "Spread operator bilan array'lar ustida ishlash:",
              items: [
                "2 ta array ni birlashtiring",
                "Array boshiga va oxiriga element qo'shing",
                "Array o'rtasiga element qo'shing",
                "Array nusxasini yarating va o'zgartiring",
                "Nested array ni flat qiling"
              ]
            },
            {
              num: "2",
              title: "Obyekt bilan ishlash",
              desc: "Spread bilan obyektlarni boshqarish:",
              items: [
                "2 ta obyektni birlashtiring",
                "Obyekt nusxasini yarating",
                "Obyektga yangi property qo'shing",
                "Obyektdagi property ni o'zgartiring",
                "Nested obyektni yangilang (immutable)"
              ]
            },
            {
              num: "3",
              title: "Rest parametrlar",
              desc: "Rest operator bilan funksiyalar yarating:",
              items: [
                "sum(...numbers) - istalgan miqdordagi sonlar yig'indisi",
                "multiply(first, ...rest) - birinchisini qolganlariga ko'paytirish",
                "filterByType(type, ...items) - ma'lum turdagi elementlarni filtrlash",
                "mergeObjects(...objects) - bir nechta obyektni birlashtirish"
              ]
            },
            {
              num: "4",
              title: "Amaliy loyiha",
              desc: "Mahsulotlar boshqaruvi tizimi yarating. Mahsulotlar array (id, name, price, category). Funksiyalar: addProduct(...newProducts), updateProduct(id, ...updates), filterByCategory(category, ...products), calculateTotal(...products). Spread/rest dan foydalaning."
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
          href="/docs/javascript/destructuring" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Destructuring</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/map-set" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-teal-200">Keyingi</div>
            <div className="text-white font-medium">Map & Set</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
