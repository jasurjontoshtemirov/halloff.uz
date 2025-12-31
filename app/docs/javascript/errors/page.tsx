"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { AlertTriangle, XCircle, Shield, Code2, Sparkles } from "lucide-react";

export default function JavaScriptErrorsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-rose-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-500/30 rounded-full text-sm mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-300 font-semibold">ERROR HANDLING</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 mb-4">
            Error Handling
          </h1>
          <p className="text-2xl text-gray-300">
            Xatolarni ushlash va boshqarish
          </p>
        </div>
      </div>

      {/* try...catch */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">try...catch</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">try...catch</span> - xatolarni ushlash va dastur ishini davom ettirish.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`try {
    // Xato bo'lishi mumkin bo'lgan kod
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    // Xato yuz berganda
    console.error('Xato:', error.message);
}

// Misol
try {
    let data = JSON.parse('noto\\'g\\'ri json');
} catch (error) {
    console.error('JSON parse xatosi:', error.message);
}

// finally - har doim bajariladi
try {
    console.log('Try bloki');
} catch (error) {
    console.error('Catch bloki');
} finally {
    console.log('Finally bloki - har doim');
}`}
        />
      </div>

      {/* throw */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl">
            <XCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">throw</h2>
        </div>

        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-red-400 font-semibold">throw</span> - o&apos;zingiz xato yaratish.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`function divide(a, b) {
    if (b === 0) {
        throw new Error('Nolga bo\\'lish mumkin emas!');
    }
    return a / b;
}

try {
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // Xato!
} catch (error) {
    console.error(error.message); // "Nolga bo'lish mumkin emas!"
}

// Turli xato turlari
throw new Error('Oddiy xato');
throw new TypeError('Tur xatosi');
throw new RangeError('Diapazon xatosi');
throw new ReferenceError('Havola xatosi');`}
        />
      </div>

      {/* Custom Error */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Custom Error</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

function validateAge(age) {
    if (age < 0) {
        throw new ValidationError('Yosh manfiy bo\\'lishi mumkin emas');
    }
    if (age > 150) {
        throw new ValidationError('Yosh juda katta');
    }
    return true;
}

try {
    validateAge(-5);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error('Validatsiya xatosi:', error.message);
    } else {
        console.error('Boshqa xato:', error);
    }
}`}
        />
      </div>

      {/* Amaliy Misollar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Amaliy Misollar</h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">API so&apos;rovi</h3>
            <CodeBlock 
              language="javascript"
              code={`async function fetchUser(id) {
    try {
        let response = await fetch(\`https://api.example.com/users/\${id}\`);
        
        if (!response.ok) {
            throw new Error(\`HTTP xato: \${response.status}\`);
        }
        
        let user = await response.json();
        return user;
    } catch (error) {
        console.error('User yuklanmadi:', error.message);
        return null;
    }
}

fetchUser(1);`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Form validatsiya</h3>
            <CodeBlock 
              language="javascript"
              code={`function validateForm(data) {
    try {
        if (!data.name) {
            throw new Error('Ism kiritilmagan');
        }
        
        if (!data.email) {
            throw new Error('Email kiritilmagan');
        }
        
        if (!data.email.includes('@')) {
            throw new Error('Email noto\\'g\\'ri');
        }
        
        if (data.age < 18) {
            throw new Error('Yosh 18 dan kichik');
        }
        
        return true;
    } catch (error) {
        alert(error.message);
        return false;
    }
}

let formData = {
    name: 'Ali',
    email: 'ali@example.com',
    age: 25
};

if (validateForm(formData)) {
    console.log('Form to\\'g\\'ri!');
}`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">LocalStorage bilan</h3>
            <CodeBlock 
              language="javascript"
              code={`function saveToStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error('Saqlashda xato:', error.message);
        return false;
    }
}

function loadFromStorage(key) {
    try {
        let data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Yuklashda xato:', error.message);
        return null;
    }
}

saveToStorage('user', { name: 'Ali', age: 25 });
let user = loadFromStorage('user');
console.log(user);`}
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
              <h3 className="text-xl font-semibold text-gray-200">try...catch</h3>
            </div>
            <p className="text-gray-300">
              JSON.parse() ni try...catch bilan ishlating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">throw</h3>
            </div>
            <p className="text-gray-300">
              O&apos;z xatolaringizni throw bilan yarating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Custom Error</h3>
            </div>
            <p className="text-gray-300">
              O&apos;z Error classini yarating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Validatsiya</h3>
            </div>
            <p className="text-gray-300">
              Form validatsiya funksiyasi yarating.
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
              title: "Custom Error klasslar",
              desc: "O'zingizning Error klasslaringizni yarating:",
              items: [
                "ValidationError - validatsiya xatolari uchun",
                "NetworkError - tarmoq xatolari uchun",
                "AuthenticationError - autentifikatsiya xatolari uchun",
                "NotFoundError - topilmagan resurslar uchun",
                "Har birida custom message va statusCode"
              ]
            },
            {
              num: "2",
              title: "Forma validatsiyasi",
              desc: "Try-catch bilan forma validatsiyasi:",
              items: [
                "Ro'yxatdan o'tish formasi (name, email, password, age)",
                "Har bir maydon uchun validatsiya",
                "Xato bo'lsa - custom Error throw qiling",
                "Try-catch da ushlang va foydalanuvchiga ko'rsating",
                "Barcha xatolarni yig'ib ko'rsatish"
              ]
            },
            {
              num: "3",
              title: "API xatolarini boshqarish",
              desc: "Fetch bilan xatolarni to'g'ri boshqarish:",
              items: [
                "API dan ma'lumot olish funksiyasi",
                "Network xatolarini ushlash",
                "HTTP status kodlarini tekshirish (404, 500, etc)",
                "Timeout xatolarini boshqarish",
                "Retry mexanizmi (3 marta urinish)",
                "Foydalanuvchiga tushunarli xabar ko'rsatish"
              ]
            },
            {
              num: "4",
              title: "Error Logger",
              desc: "Xatolarni qayd qilish tizimi yarating. Barcha xatolarni ushlash va saqlash. Xato ma'lumotlari: message, stack, timestamp, userAgent. LocalStorage da saqlash. Xatolar ro'yxatini ko'rsatish sahifasi. Xatolarni tozalash funksiyasi."
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
          href="/docs/javascript/regex" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Regex</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/amaliyot6" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-red-200">Keyingi</div>
            <div className="text-white font-medium">🚀 Amaliyot #6</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
