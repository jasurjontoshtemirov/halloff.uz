"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { HardDrive, Save, Trash2, Eye, Code2, Sparkles } from "lucide-react";

export default function JavaScriptLocalStoragePage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-orange-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-full text-sm mb-6">
            <HardDrive className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 font-semibold">LOCALSTORAGE</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 mb-4">
            LocalStorage
          </h1>
          <p className="text-2xl text-gray-300">
            Brauzerda ma&apos;lumot saqlash
          </p>
        </div>
      </div>

      {/* LocalStorage nima */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <HardDrive className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">LocalStorage nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">LocalStorage</span> - bu brauzerda ma&apos;lumot saqlash imkonini beradi. Ma&apos;lumotlar doimiy saqlanadi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-400 mb-2">✓ Doimiy</h3>
            <p className="text-gray-300 text-sm">Brauzer yopilsa ham saqlanadi</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">✓ Oddiy</h3>
            <p className="text-gray-300 text-sm">Foydalanish oson</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-orange-400 mb-2">✓ Katta</h3>
            <p className="text-gray-300 text-sm">5-10 MB gacha</p>
          </div>
        </div>
      </div>

      {/* setItem */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Save className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">setItem() - Saqlash</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Oddiy matn saqlash
localStorage.setItem('name', 'Ali');
localStorage.setItem('age', '25');
localStorage.setItem('city', 'Toshkent');

// Obyekt saqlash (JSON bilan)
let user = {
    name: 'Ali',
    age: 25,
    city: 'Toshkent'
};

localStorage.setItem('user', JSON.stringify(user));

// Array saqlash
let todos = ['Dasturlash', 'Sport', 'Kitob o\\'qish'];
localStorage.setItem('todos', JSON.stringify(todos));`}
        />
      </div>

      {/* getItem */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Eye className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">getItem() - O&apos;qish</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Oddiy matn o'qish
let name = localStorage.getItem('name');
console.log(name); // "Ali"

// Obyekt o'qish
let userString = localStorage.getItem('user');
let user = JSON.parse(userString);
console.log(user.name); // "Ali"
console.log(user.age);  // 25

// Array o'qish
let todosString = localStorage.getItem('todos');
let todos = JSON.parse(todosString);
console.log(todos); // ["Dasturlash", "Sport", "Kitob o'qish"]

// Yo'q bo'lsa null qaytaradi
let notFound = localStorage.getItem('notexist');
console.log(notFound); // null`}
        />
      </div>

      {/* removeItem va clear */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl">
            <Trash2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">removeItem() va clear()</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Bitta elementni o'chirish
localStorage.removeItem('name');

// Hammasini o'chirish
localStorage.clear();

// Tekshirish
if (localStorage.getItem('name') === null) {
    console.log('name yo\\'q');
}`}
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
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Theme (Mavzu) saqlash</h3>
            <CodeBlock 
              language="javascript"
              code={`// Theme saqlash
function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
}

// Theme yuklash
function loadTheme() {
    let theme = localStorage.getItem('theme') || 'light';
    document.body.className = theme;
}

// Sahifa yuklanganda
loadTheme();

// Theme o'zgartirish
setTheme('dark');`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">To-do List</h3>
            <CodeBlock 
              language="javascript"
              code={`// To-do qo'shish
function addTodo(text) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push({
        id: Date.now(),
        text: text,
        done: false
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

// To-do o'chirish
function removeTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Barcha to-do larni olish
function getTodos() {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

// Ishlatish
addTodo('Dasturlash');
addTodo('Sport');
console.log(getTodos());`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">User sozlamalari</h3>
            <CodeBlock 
              language="javascript"
              code={`// Sozlamalarni saqlash
function saveSettings(settings) {
    localStorage.setItem('settings', JSON.stringify(settings));
}

// Sozlamalarni yuklash
function loadSettings() {
    let defaultSettings = {
        language: 'uz',
        notifications: true,
        theme: 'light'
    };
    
    let saved = localStorage.getItem('settings');
    return saved ? JSON.parse(saved) : defaultSettings;
}

// Ishlatish
let settings = loadSettings();
console.log(settings);

settings.theme = 'dark';
saveSettings(settings);`}
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
              <h3 className="text-xl font-semibold text-gray-200">Ism saqlash</h3>
            </div>
            <p className="text-gray-300">
              Foydalanuvchi ismini localStorage ga saqlang va sahifa yangilanganda ko&apos;rsating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Counter</h3>
            </div>
            <p className="text-gray-300">
              Tugma bosilgan sonini localStorage da saqlang.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Theme switcher</h3>
            </div>
            <p className="text-gray-300">
              Light/Dark theme o&apos;zgartirish va saqlash.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Shopping cart</h3>
            </div>
            <p className="text-gray-300">
              Xarid savatini localStorage da saqlang.
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
              title: "Eslatmalar ilovasi",
              desc: "LocalStorage bilan eslatmalar saqlash:",
              items: [
                "Yangi eslatma qo'shish (title, text, date)",
                "Barcha eslatmalarni ko'rsatish",
                "Eslatmani o'chirish",
                "Eslatmani tahrirlash",
                "Qidiruv funksiyasi"
              ]
            },
            {
              num: "2",
              title: "Sozlamalar paneli",
              desc: "Foydalanuvchi sozlamalarini saqlash:",
              items: [
                "Theme (light/dark) tanlash",
                "Til tanlash (uz/ru/en)",
                "Font o'lchami (kichik/o'rta/katta)",
                "Bildirishnomalar (on/off)",
                "Sahifa yangilanganda sozlamalar saqlansin"
              ]
            },
            {
              num: "3",
              title: "Savat (Shopping Cart)",
              desc: "E-commerce savat funksiyasi:",
              items: [
                "Mahsulot qo'shish (name, price, quantity, image)",
                "Miqdorni o'zgartirish",
                "Mahsulotni o'chirish",
                "Umumiy narxni hisoblash",
                "Savatni tozalash",
                "Sahifa yangilanganda savat saqlansin"
              ]
            },
            {
              num: "4",
              title: "O'yin rekordi",
              desc: "Oddiy o'yin yarating (masalan, raqamni topish o'yini). Eng yuqori ballarni localStorage da saqlang. Top 5 natijalarni ko'rsating. Foydalanuvchi ismini saqlang. Tarix (oxirgi 10 ta o'yin)."
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
          href="/docs/javascript/json" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">JSON</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/date" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-amber-200">Keyingi</div>
            <div className="text-white font-medium">Date</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
