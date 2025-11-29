"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Package, Upload, Download, Code2, Sparkles } from "lucide-react";

export default function JavaScriptModulesPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-sm mb-6">
            <Package className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-semibold">MODULES</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-4">
            ES6 Modules
          </h1>
          <p className="text-2xl text-gray-300">
            Import va Export - Kodni tashkil qilish
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
          <p className="text-gray-400 mb-4">Modules - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-yellow-500/50 transition-all">
            <div className="text-center">
              <Code2 className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Export */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Upload className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Export</h2>
        </div>
        
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-green-400 font-semibold">export</span> - funksiya, o&apos;zgaruvchi yoki classni boshqa faylga eksport qilish.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14159;

// yoki
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

export { multiply, divide };`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Default Export</h3>
        <CodeBlock 
          language="javascript"
          code={`// user.js
export default class User {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        console.log(\`Salom, \${this.name}\`);
    }
}

// yoki
function sayHello() {
    console.log('Salom!');
}

export default sayHello;`}
        />
      </div>

      {/* Import */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Download className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Import</h2>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">import</span> - boshqa fayldan funksiya, o&apos;zgaruvchi yoki classni import qilish.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// main.js
import { add, subtract, PI } from './math.js';

console.log(add(5, 3));      // 8
console.log(subtract(10, 4)); // 6
console.log(PI);              // 3.14159

// Hammasi import
import * as math from './math.js';

console.log(math.add(5, 3));
console.log(math.PI);

// Nom o'zgartirish
import { add as qoshish, subtract as ayirish } from './math.js';

console.log(qoshish(5, 3));  // 8
console.log(ayirish(10, 4)); // 6`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Default Import</h3>
        <CodeBlock 
          language="javascript"
          code={`// main.js
import User from './user.js';

let user = new User('Ali');
user.greet(); // "Salom, Ali"

// Istalgan nom bilan
import MyUser from './user.js';

let user2 = new MyUser('Vali');
user2.greet(); // "Salom, Vali"`}
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

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Utils moduli</h3>
            <CodeBlock 
              language="javascript"
              code={`// utils.js
export function formatDate(date) {
    return date.toLocaleDateString('uz-UZ');
}

export function formatCurrency(amount) {
    return amount.toLocaleString('uz-UZ') + ' so\\'m';
}

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// main.js
import { formatDate, formatCurrency, capitalize } from './utils.js';

console.log(formatDate(new Date()));
console.log(formatCurrency(1000000));
console.log(capitalize('salom'));`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Config moduli</h3>
            <CodeBlock 
              language="javascript"
              code={`// config.js
export const API_URL = 'https://api.example.com';
export const API_KEY = 'your-api-key';
export const TIMEOUT = 5000;

export default {
    apiUrl: API_URL,
    apiKey: API_KEY,
    timeout: TIMEOUT
};

// main.js
import config from './config.js';
// yoki
import { API_URL, API_KEY } from './config.js';

console.log(config.apiUrl);
console.log(API_URL);`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Class moduli</h3>
            <CodeBlock 
              language="javascript"
              code={`// User.js
export default class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    getInfo() {
        return \`\${this.name} (\${this.email})\`;
    }
}

// Admin.js
import User from './User.js';

export default class Admin extends User {
    constructor(name, email, role) {
        super(name, email);
        this.role = role;
    }
    
    getInfo() {
        return \`\${super.getInfo()} - \${this.role}\`;
    }
}

// main.js
import User from './User.js';
import Admin from './Admin.js';

let user = new User('Ali', 'ali@example.com');
let admin = new Admin('Vali', 'vali@example.com', 'Super Admin');

console.log(user.getInfo());
console.log(admin.getInfo());`}
            />
          </div>
        </div>
      </div>

      {/* HTML da ishlatish */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">HTML da ishlatish</h2>
        </div>

        <CodeBlock 
          language="html"
          code={`<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Modules</title>
</head>
<body>
    <h1>ES6 Modules</h1>
    
    <!-- type="module" muhim! -->
    <script type="module" src="main.js"></script>
</body>
</html>`}
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
              <h3 className="text-xl font-semibold text-gray-200">Math moduli</h3>
            </div>
            <p className="text-gray-300">
              Matematik funksiyalar bilan modul yarating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Utils moduli</h3>
            </div>
            <p className="text-gray-300">
              Foydali funksiyalar to&apos;plamini yarating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Class moduli</h3>
            </div>
            <p className="text-gray-300">
              User classini alohida faylda yarating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Import/Export</h3>
            </div>
            <p className="text-gray-300">
              Turli xil import/export usullarini sinab ko&apos;ring.
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
              title: "Utility modullar",
              desc: "Foydali funksiyalar modullari yarating:",
              items: [
                "math.js - matematik funksiyalar (add, subtract, multiply, divide, power)",
                "string.js - string funksiyalar (capitalize, reverse, truncate)",
                "array.js - array funksiyalar (unique, shuffle, chunk)",
                "date.js - sana funksiyalar (formatDate, getDaysDiff, isWeekend)",
                "Bularni main.js da import qilib ishlatish"
              ]
            },
            {
              num: "2",
              title: "Validator moduli",
              desc: "Validatsiya funksiyalari moduli:",
              items: [
                "validators.js yarating",
                "isEmail(email) - email validatsiyasi",
                "isPhone(phone) - telefon raqam validatsiyasi",
                "isStrongPassword(password) - kuchli parol tekshirish",
                "isURL(url) - URL validatsiyasi",
                "Form da ishlatish"
              ]
            },
            {
              num: "3",
              title: "API moduli",
              desc: "API bilan ishlash uchun modul:",
              items: [
                "api.js yarating",
                "get(url) - GET so'rov",
                "post(url, data) - POST so'rov",
                "put(url, data) - PUT so'rov",
                "delete(url) - DELETE so'rov",
                "Xatolarni boshqarish va loading holatini qaytarish"
              ]
            },
            {
              num: "4",
              title: "Mini kutubxona",
              desc: "O'zingizning mini kutubxonangizni yarating. Bir nechta modullardan iborat (utils, validators, api, storage). Har bir modul o'z funksiyalariga ega. index.js da barchasini export qiling. README.md da qanday ishlatishni yozing. Oddiy demo loyiha yarating."
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
          href="/docs/javascript/classes" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Classes</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/json" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-blue-200">Keyingi</div>
            <div className="text-white font-medium">JSON</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
