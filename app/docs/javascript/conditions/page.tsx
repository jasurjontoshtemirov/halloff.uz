"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { GitBranch, CheckCircle, XCircle, HelpCircle, Zap, Code2, Sparkles, TrendingUp } from "lucide-react";

export default function JavaScriptConditionsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm mb-6">
            <GitBranch className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-semibold">SHART OPERATORLARI</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
            Shart Operatorlari
          </h1>
          <p className="text-2xl text-gray-300">
            if, else, switch - qaror qabul qilish
          </p>
        </div>
      </div>

      {/* if Statement */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">if Statement</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">if</span> - agar shart true bo&apos;lsa, kod bajariladi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let age = 20;

if (age >= 18) {
    console.log("Siz kattasiz");
}

// Bir qatorli
if (age >= 18) console.log("Kattasiz");

// Bir nechta shart
let hasLicense = true;
if (age >= 18 && hasLicense) {
    console.log("Mashina haydashingiz mumkin");
}`}
        />
      </div>

      {/* if...else */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <GitBranch className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">if...else</h2>
        </div>
        
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-green-400 font-semibold">else</span> - agar shart false bo&apos;lsa, boshqa kod bajariladi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let age = 15;

if (age >= 18) {
    console.log("Siz kattasiz");
} else {
    console.log("Siz hali yoshsiz");
}

// Misol: Juft yoki toq
let number = 7;
if (number % 2 === 0) {
    console.log("Juft son");
} else {
    console.log("Toq son");
}

// Misol: Musbat yoki manfiy
let num = -5;
if (num > 0) {
    console.log("Musbat");
} else if (num < 0) {
    console.log("Manfiy");
} else {
    console.log("Nol");
}`}
        />
      </div>

      {/* if...else if...else */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <HelpCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">if...else if...else</h2>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            Bir nechta shartlarni tekshirish uchun.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let score = 85;

if (score >= 90) {
    console.log("A'lo - 5");
} else if (score >= 80) {
    console.log("Yaxshi - 4");
} else if (score >= 70) {
    console.log("Qoniqarli - 3");
} else if (score >= 60) {
    console.log("Qoniqarsiz - 2");
} else {
    console.log("Yomon - 1");
}

// Misol: Yosh guruhi
let age = 25;
if (age < 13) {
    console.log("Bola");
} else if (age < 20) {
    console.log("O'smir");
} else if (age < 60) {
    console.log("Katta");
} else {
    console.log("Keksa");
}`}
        />
      </div>

      {/* Ternary Operator */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Ternary Operator (?:)</h2>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            Qisqa <span className="text-orange-400 font-semibold">if...else</span> yozuvi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Sintaksis: shart ? true_qiymat : false_qiymat

let age = 20;
let status = age >= 18 ? "Katta" : "Yosh";
console.log(status); // "Katta"

// Oddiy if...else o'rniga
let number = 10;
let result = number % 2 === 0 ? "Juft" : "Toq";
console.log(result); // "Juft"

// Ichma-ich (nested)
let score = 85;
let grade = score >= 90 ? "A" : 
            score >= 80 ? "B" : 
            score >= 70 ? "C" : "F";
console.log(grade); // "B"`}
        />
      </div>

      {/* switch Statement */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">switch Statement</h2>
        </div>
        
        <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-indigo-400 font-semibold">switch</span> - bir nechta qiymatlarni tekshirish uchun qulay.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Dushanba";
        break;
    case 2:
        dayName = "Seshanba";
        break;
    case 3:
        dayName = "Chorshanba";
        break;
    case 4:
        dayName = "Payshanba";
        break;
    case 5:
        dayName = "Juma";
        break;
    case 6:
        dayName = "Shanba";
        break;
    case 7:
        dayName = "Yakshanba";
        break;
    default:
        dayName = "Notogri kun";
}

console.log(dayName); // "Chorshanba"`}
        />

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mt-4">
          <p className="text-yellow-200 text-sm">
            <strong>Muhim:</strong> break ni unutmang! Aks holda keyingi case ham bajariladi.
          </p>
        </div>
      </div>

      {/* switch - Multiple cases */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">switch - Bir nechta case</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let month = 2;
let season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = "Qish";
        break;
    case 3:
    case 4:
    case 5:
        season = "Bahor";
        break;
    case 6:
    case 7:
    case 8:
        season = "Yoz";
        break;
    case 9:
    case 10:
    case 11:
        season = "Kuz";
        break;
    default:
        season = "Notogri oy";
}

console.log(season); // "Qish"`}
        />
      </div>

      {/* Amaliy Misollar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Amaliy Misollar</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Login tizimi</h3>
            <CodeBlock 
              language="javascript"
              code={`let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Xush kelibsiz!");
} else {
    console.log("Login yoki parol xato!");
}`}
            />
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Kalkulyator</h3>
            <CodeBlock 
              language="javascript"
              code={`let num1 = 10;
let num2 = 5;
let operator = "+";
let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        result = "Notogri operator";
}

console.log(result); // 15`}
            />
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-400 mb-4">Baho tizimi</h3>
            <CodeBlock 
              language="javascript"
              code={`let score = 75;
let grade;

if (score >= 90) {
    grade = "A'lo";
} else if (score >= 80) {
    grade = "Yaxshi";
} else if (score >= 70) {
    grade = "Qoniqarli";
} else if (score >= 60) {
    grade = "Qoniqarsiz";
} else {
    grade = "Yomon";
}

console.log("Sizning bahoyingiz: " + grade);

// Ternary bilan
let emoji = score >= 70 ? "😊" : "😢";
console.log(emoji);`}
            />
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">Harorat tekshirish</h3>
            <CodeBlock 
              language="javascript"
              code={`let temp = 25;

if (temp >= 30) {
    console.log("Juda issiq 🔥");
} else if (temp >= 20) {
    console.log("Yoqimli havo ☀️");
} else if (temp >= 10) {
    console.log("Salqin 🌤️");
} else {
    console.log("Sovuq ❄️");
}`}
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
              <h3 className="text-xl font-semibold text-gray-200">Yosh tekshirish</h3>
            </div>
            <p className="text-gray-300">
              Yoshni tekshiring va tegishli xabar chiqaring (0-12: bola, 13-19: o&apos;smir, 20-59: katta, 60+: keksa).
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Hafta kuni</h3>
            </div>
            <p className="text-gray-300">
              switch dan foydalanib, raqam kiritilsa hafta kunini chiqaring (1-7).
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Eng katta son</h3>
            </div>
            <p className="text-gray-300">
              3 ta son olib, eng kattasini toping va console ga chiqaring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Ternary</h3>
            </div>
            <p className="text-gray-300">
              Ternary operator bilan juft/toq sonni aniqlang.
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
              title: "Harorat tekshirish",
              desc: "Haroratni tekshiring va tavsiya bering:",
              items: [
                "30+ : \"Juda issiq, soyada turing\"",
                "20-29 : \"Yoqimli havo\"",
                "10-19 : \"Salqin, kurtka kiying\"",
                "0-9 : \"Sovuq, issiq kiyining\"",
                "0 dan past : \"Juda sovuq, uyda qoling\""
              ]
            },
            {
              num: "2",
              title: "Oddiy kalkulyator",
              desc: "2 ta son va operator (+, -, *, /) olib, natijani hisoblang. switch ishlatish kerak.",
              items: []
            },
            {
              num: "3",
              title: "Parol tekshirish",
              desc: "Parolni tekshiring:",
              items: [
                "8 ta belgidan kam: \"Juda qisqa\"",
                "8-12 ta belgi: \"Yaxshi\"",
                "12 dan ko'p: \"Kuchli parol\""
              ]
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all border border-gray-800 hover:border-orange-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center font-bold text-white">
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
              title: "Baho tizimi",
              desc: "Talaba bahosini kiriting (0-100) va quyidagi tizim bo'yicha baho bering:",
              items: [
                "90-100: A (A'lo)",
                "80-89: B (Yaxshi)",
                "70-79: C (Qoniqarli)",
                "60-69: D (Yetarli)",
                "0-59: F (Qoniqarsiz)"
              ]
            },
            {
              num: "2",
              title: "Yil fasllari",
              desc: "Oy raqamini kiriting (1-12) va qaysi faslga tegishli ekanini aniqlang. Masalan: 12, 1, 2 - Qish; 3, 4, 5 - Bahor va hokazo.",
              items: []
            },
            {
              num: "3",
              title: "Kredit kalkulyator",
              desc: "Kredit olish uchun shartlarni tekshiring:",
              items: [
                "Yosh 21 dan katta bo'lishi kerak",
                "Oylik maosh 3,000,000 dan ko'p bo'lishi kerak",
                "Ish staji 1 yildan ko'p bo'lishi kerak",
                "Agar barcha shartlar bajarilsa - \"Kredit beriladi\"",
                "Aks holda - qaysi shart bajarilmaganini ko'rsating"
              ]
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
          href="/docs/javascript/amaliyot1" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Amaliyot #1</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/loops" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-purple-200">Keyingi</div>
            <div className="text-white font-medium">Tsikllar</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
