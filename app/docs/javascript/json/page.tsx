"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { FileJson, ArrowLeftRight, Code2, Sparkles, Database } from "lucide-react";

export default function JavaScriptJSONPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-green-500/10 to-emerald-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 rounded-full text-sm mb-6">
            <FileJson className="w-4 h-4 text-lime-400" />
            <span className="text-lime-300 font-semibold">JSON</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 mb-4">
            JSON
          </h1>
          <p className="text-2xl text-gray-300">
            JavaScript Object Notation - Ma&apos;lumot almashish formati
          </p>
        </div>
      </div>

      {/* JSON nima */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Database className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">JSON nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">JSON</span> - bu ma&apos;lumotlarni saqlash va uzatish uchun yengil format. JavaScript obyektiga o&apos;xshaydi.
          </p>
        </div>

        <CodeBlock 
          language="json"
          code={`{
  "name": "Ali",
  "age": 25,
  "city": "Toshkent",
  "isStudent": true,
  "hobbies": ["dasturlash", "kitob o'qish", "sport"],
  "address": {
    "street": "Amir Temur ko'chasi",
    "zip": "100000"
  }
}`}
        />
      </div>

      {/* JSON.stringify */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <ArrowLeftRight className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">JSON.stringify()</h2>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            JavaScript obyektini JSON stringga aylantiradi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Obyekt
let person = {
    name: "Ali",
    age: 25,
    city: "Toshkent",
    hobbies: ["dasturlash", "sport"]
};

// JSON stringga aylantirish
let jsonString = JSON.stringify(person);
console.log(jsonString);
// {"name":"Ali","age":25,"city":"Toshkent","hobbies":["dasturlash","sport"]}

// Chiroyli format (indentation)
let prettyJson = JSON.stringify(person, null, 2);
console.log(prettyJson);
/*
{
  "name": "Ali",
  "age": 25,
  "city": "Toshkent",
  "hobbies": [
    "dasturlash",
    "sport"
  ]
}
*/`}
        />
      </div>

      {/* JSON.parse */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <ArrowLeftRight className="w-6 h-6 text-white rotate-90" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">JSON.parse()</h2>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            JSON stringni JavaScript obyektiga aylantiradi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// JSON string
let jsonString = '{"name":"Ali","age":25,"city":"Toshkent"}';

// JavaScript obyektiga aylantirish
let person = JSON.parse(jsonString);

console.log(person.name); // "Ali"
console.log(person.age);  // 25
console.log(person.city); // "Toshkent"

// Array bilan
let jsonArray = '[1, 2, 3, 4, 5]';
let numbers = JSON.parse(jsonArray);
console.log(numbers); // [1, 2, 3, 4, 5]`}
        />
      </div>

      {/* API bilan ishlash */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
            <Database className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">API bilan ishlash</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// API dan ma'lumot olish
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json()) // JSON.parse() avtomatik
    .then(user => {
        console.log(user.name);
        console.log(user.email);
    });

// async/await bilan
async function getUser() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let user = await response.json();
    console.log(user);
}

getUser();`}
        />
      </div>

      {/* LocalStorage bilan */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl">
            <FileJson className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">LocalStorage bilan</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Obyektni saqlash
let user = {
    name: "Ali",
    age: 25,
    city: "Toshkent"
};

// JSON stringga aylantirib saqlash
localStorage.setItem('user', JSON.stringify(user));

// O'qish
let savedUser = localStorage.getItem('user');
let userObj = JSON.parse(savedUser);

console.log(userObj.name); // "Ali"
console.log(userObj.age);  // 25`}
        />
      </div>

      {/* Amaliy Misollar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Amaliy Misollar</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Sozlamalarni saqlash</h3>
            <CodeBlock 
              language="javascript"
              code={`let settings = {
    theme: "dark",
    language: "uz",
    notifications: true
};

// Saqlash
localStorage.setItem('settings', JSON.stringify(settings));

// O'qish
let savedSettings = JSON.parse(localStorage.getItem('settings'));
console.log(savedSettings.theme); // "dark"`}
            />
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">To-do list</h3>
            <CodeBlock 
              language="javascript"
              code={`let todos = [
    { id: 1, text: "Dasturlash", done: false },
    { id: 2, text: "Sport", done: true }
];

// Saqlash
localStorage.setItem('todos', JSON.stringify(todos));

// O'qish
let savedTodos = JSON.parse(localStorage.getItem('todos'));
console.log(savedTodos);`}
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
              <h3 className="text-xl font-semibold text-gray-200">Stringify</h3>
            </div>
            <p className="text-gray-300">
              Obyekt yarating va JSON.stringify() bilan stringga aylantiring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Parse</h3>
            </div>
            <p className="text-gray-300">
              JSON stringni JSON.parse() bilan obyektga aylantiring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">LocalStorage</h3>
            </div>
            <p className="text-gray-300">
              User ma&apos;lumotini localStorage ga JSON formatda saqlang.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">API</h3>
            </div>
            <p className="text-gray-300">
              API dan JSON ma&apos;lumot oling va console ga chiqaring.
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
              title: "JSON ma'lumotlar bilan ishlash",
              desc: "Foydalanuvchilar JSON ma'lumotini yarating va qayta ishlang:",
              items: [
                "5 ta foydalanuvchi obyekti (name, age, email, hobbies)",
                "JSON.stringify() bilan string ga aylantiring",
                "JSON.parse() bilan qaytadan obyektga aylantiring",
                "Eng katta yoshdagi foydalanuvchini toping",
                "Barcha hobbies ni bitta array ga yig'ing"
              ]
            },
            {
              num: "2",
              title: "API ma'lumotlarini formatlash",
              desc: "JSONPlaceholder dan ma'lumot olib, formatlang:",
              items: [
                "Users API dan 10 ta foydalanuvchi oling",
                "Faqat kerakli maydonlarni ajratib oling (id, name, email)",
                "Yangi JSON formatda saqlang",
                "HTML da chiroyli ko'rsating",
                "JSON faylni yuklab olish tugmasi"
              ]
            },
            {
              num: "3",
              title: "Nested JSON",
              desc: "Murakkab JSON strukturasi bilan ishlash:",
              items: [
                "Kompaniya obyekti: name, departments[], employees[]",
                "Har bir department: name, manager, employees[]",
                "Har bir employee: name, position, salary",
                "Barcha xodimlar sonini hisoblang",
                "Eng yuqori maoshli xodimni toping",
                "Departament bo'yicha o'rtacha maoshni hisoblang"
              ]
            },
            {
              num: "4",
              title: "JSON validator",
              desc: "JSON validatsiya qiluvchi dastur yarating. Textarea ga JSON kiritiladi. Parse qilishga harakat qiling. Agar to'g'ri bo'lsa - 'Valid JSON' va formatlangan ko'rinishda ko'rsating. Noto'g'ri bo'lsa - xato xabarini ko'rsating."
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
          href="/docs/javascript/modules" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Modules</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/localstorage" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-lime-200">Keyingi</div>
            <div className="text-white font-medium">LocalStorage</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
