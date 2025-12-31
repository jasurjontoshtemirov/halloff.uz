"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Package, Unplug, Code2, Sparkles, Layers } from "lucide-react";

export default function JavaScriptDestructuringPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-500/30 rounded-full text-sm mb-6">
            <Unplug className="w-4 h-4 text-fuchsia-400" />
            <span className="text-fuchsia-300 font-semibold">DESTRUCTURING</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 mb-4">
            Destructuring
          </h1>
          <p className="text-2xl text-gray-300">
            Array va Obyektlarni parchalash
          </p>
        </div>
      </div>

      {/* Array Destructuring */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Package className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Array Destructuring</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            Array elementlarini alohida o&apos;zgaruvchilarga ajratish.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Oddiy usul
let colors = ['qizil', 'yashil', 'ko\\'k'];
let color1 = colors[0];
let color2 = colors[1];
let color3 = colors[2];

// Destructuring bilan
let [red, green, blue] = colors;
console.log(red);   // "qizil"
console.log(green); // "yashil"
console.log(blue);  // "ko'k"

// Ba'zi elementlarni o'tkazib yuborish
let [first, , third] = colors;
console.log(first); // "qizil"
console.log(third); // "ko'k"

// Default qiymat
let [a, b, c, d = 'sariq'] = colors;
console.log(d); // "sariq"`}
        />
      </div>

      {/* Object Destructuring */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Object Destructuring</h2>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            Obyekt xususiyatlarini alohida o&apos;zgaruvchilarga ajratish.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Oddiy usul
let person = {
    name: 'Ali',
    age: 25,
    city: 'Toshkent'
};

let name = person.name;
let age = person.age;
let city = person.city;

// Destructuring bilan
let { name, age, city } = person;
console.log(name); // "Ali"
console.log(age);  // 25
console.log(city); // "Toshkent"

// Boshqa nom bilan
let { name: ism, age: yosh } = person;
console.log(ism);  // "Ali"
console.log(yosh); // 25

// Default qiymat
let { name, age, country = 'Uzbekistan' } = person;
console.log(country); // "Uzbekistan"`}
        />
      </div>

      {/* Nested Destructuring */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Unplug className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Nested Destructuring</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Ichma-ich obyekt
let user = {
    name: 'Ali',
    age: 25,
    address: {
        city: 'Toshkent',
        street: 'Amir Temur',
        zip: '100000'
    }
};

// Nested destructuring
let { 
    name, 
    address: { city, street } 
} = user;

console.log(name);   // "Ali"
console.log(city);   // "Toshkent"
console.log(street); // "Amir Temur"

// Array ichida obyekt
let users = [
    { name: 'Ali', age: 25 },
    { name: 'Vali', age: 30 }
];

let [{ name: name1 }, { name: name2 }] = users;
console.log(name1); // "Ali"
console.log(name2); // "Vali"`}
        />
      </div>

      {/* Function parametrlarda */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Function parametrlarda</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Obyekt parametr
function greet({ name, age }) {
    console.log(\`Salom, \${name}! Siz \${age} yoshdasiz.\`);
}

let person = { name: 'Ali', age: 25 };
greet(person); // "Salom, Ali! Siz 25 yoshdasiz."

// Default qiymat bilan
function createUser({ name, age = 18, city = 'Toshkent' }) {
    return { name, age, city };
}

console.log(createUser({ name: 'Vali' }));
// { name: 'Vali', age: 18, city: 'Toshkent' }

// Array parametr
function sum([a, b, c]) {
    return a + b + c;
}

console.log(sum([1, 2, 3])); // 6`}
        />
      </div>

      {/* Amaliy Misollar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Amaliy Misollar</h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">API dan ma&apos;lumot olish</h3>
            <CodeBlock 
              language="javascript"
              code={`async function getUser() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let user = await response.json();
    
    // Destructuring
    let { name, email, address: { city } } = user;
    
    console.log(name);  // User nomi
    console.log(email); // User emaili
    console.log(city);  // User shahri
}

getUser();`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Qiymatlarni almashtirish</h3>
            <CodeBlock 
              language="javascript"
              code={`let a = 1;
let b = 2;

// Oddiy usul
let temp = a;
a = b;
b = temp;

// Destructuring bilan
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Function dan bir nechta qiymat qaytarish</h3>
            <CodeBlock 
              language="javascript"
              code={`function getMinMax(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return [min, max];
}

let [min, max] = getMinMax([1, 5, 3, 9, 2]);
console.log(min); // 1
console.log(max); // 9`}
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
              <h3 className="text-xl font-semibold text-gray-200">Array destructuring</h3>
            </div>
            <p className="text-gray-300">
              Array dan birinchi 3 ta elementni destructuring bilan oling.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Object destructuring</h3>
            </div>
            <p className="text-gray-300">
              User obyektidan name va email ni destructuring bilan oling.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Nested</h3>
            </div>
            <p className="text-gray-300">
              Ichma-ich obyektdan ma&apos;lumot oling.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Function</h3>
            </div>
            <p className="text-gray-300">
              Function parametrida destructuring ishlatib ko&apos;ring.
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
              title: "Foydalanuvchi ma'lumotlari",
              desc: "Murakkab obyektdan destructuring:",
              items: [
                "User obyekti: name, age, address{city, street}, contacts{email, phone}",
                "Nested destructuring bilan barcha qiymatlarni oling",
                "Default qiymatlar bilan ishlang",
                "Rename qilib oling (masalan: email as userEmail)"
              ]
            },
            {
              num: "2",
              title: "API javobini qayta ishlash",
              desc: "API dan kelgan ma'lumotni destructuring qiling:",
              items: [
                "Fetch bilan JSONPlaceholder dan post oling",
                "Response dan kerakli maydonlarni destructure qiling",
                "Nested ma'lumotlarni ajratib oling",
                "Array destructuring bilan birinchi 3 ta postni oling"
              ]
            },
            {
              num: "3",
              title: "Funksiya parametrlari",
              desc: "Destructuring bilan funksiyalar yarating:",
              items: [
                "displayUser({name, age, city}) funksiyasi",
                "calculateTotal({items, discount, tax}) funksiyasi",
                "formatDate({day, month, year}) funksiyasi",
                "Default parametrlar bilan ishlang"
              ]
            },
            {
              num: "4",
              title: "Swap va exchange",
              desc: "Destructuring bilan qiymatlarni almashtirish. 2 ta o'zgaruvchini almashtiring. Array elementlarini almashtiring. Obyekt propertylarini almashtiring. Funksiya bir nechta qiymat qaytarsin va ularni destructure qiling."
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
          href="/docs/javascript/spread-rest" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-700 hover:to-purple-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-fuchsia-200">Keyingi</div>
            <div className="text-white font-medium">Spread & Rest</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
