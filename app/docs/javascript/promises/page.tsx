"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Gift, CheckCircle, XCircle, Clock, Code2, Sparkles, TrendingUp } from "lucide-react";

export default function JavaScriptPromisesPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-500/30 rounded-full text-sm mb-6">
            <Gift className="w-4 h-4 text-sky-400" />
            <span className="text-sky-300 font-semibold">PROMISES</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 mb-4">
            Promise & Chaining
          </h1>
          <p className="text-2xl text-gray-300">
            Asinxron dasturlashning zamonaviy usuli
          </p>
        </div>
      </div>

      {/* Promise nima */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Gift className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Promise nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">Promise</span> - bu kelajakda qiymat qaytaradigan obyekt. 3 ta holati bor: pending, fulfilled, rejected.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 rounded-xl p-6">
            <Clock className="w-8 h-8 text-yellow-400 mb-3" />
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Pending</h3>
            <p className="text-gray-300 text-sm">Kutilmoqda</p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="text-xl font-semibold text-green-400 mb-2">Fulfilled</h3>
            <p className="text-gray-300 text-sm">Muvaffaqiyatli</p>
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
            <XCircle className="w-8 h-8 text-red-400 mb-3" />
            <h3 className="text-xl font-semibold text-red-400 mb-2">Rejected</h3>
            <p className="text-gray-300 text-sm">Xato</p>
          </div>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Promise yaratish
let promise = new Promise((resolve, reject) => {
    // Asinxron kod
    setTimeout(() => {
        let success = true;
        
        if (success) {
            resolve('Muvaffaqiyatli!');
        } else {
            reject('Xato yuz berdi!');
        }
    }, 2000);
});

// Promise ishlatish
promise
    .then(result => {
        console.log(result); // "Muvaffaqiyatli!"
    })
    .catch(error => {
        console.error(error);
    });`}
        />
      </div>

      {/* then va catch */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">then() va catch()</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Ma\\'lumot yuklandi');
    }, 1000);
});

promise
    .then(result => {
        console.log(result); // "Ma'lumot yuklandi"
        return result.toUpperCase();
    })
    .then(upperResult => {
        console.log(upperResult); // "MA'LUMOT YUKLANDI"
    })
    .catch(error => {
        console.error('Xato:', error);
    })
    .finally(() => {
        console.log('Tugadi');
    });`}
        />
      </div>

      {/* Promise Chaining */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Promise Chaining</h2>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            Bir nechta asinxron amallarni ketma-ket bajarish uchun.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Ketma-ket amallar
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
        console.log('1. Response olindi');
        return response.json();
    })
    .then(user => {
        console.log('2. User:', user.name);
        return fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${user.id}\`);
    })
    .then(response => {
        console.log('3. Posts response olindi');
        return response.json();
    })
    .then(posts => {
        console.log('4. Posts soni:', posts.length);
    })
    .catch(error => {
        console.error('Xato:', error);
    });`}
        />
      </div>

      {/* Promise.all */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Promise.all()</h2>
        </div>

        <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            Bir nechta Promise ni parallel bajarish va hammasi tugashini kutish.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Parallel so'rovlar
let promise1 = fetch('https://jsonplaceholder.typicode.com/users/1');
let promise2 = fetch('https://jsonplaceholder.typicode.com/users/2');
let promise3 = fetch('https://jsonplaceholder.typicode.com/users/3');

Promise.all([promise1, promise2, promise3])
    .then(responses => {
        console.log('Barcha so\\'rovlar tugadi');
        return Promise.all(responses.map(r => r.json()));
    })
    .then(users => {
        console.log('User 1:', users[0].name);
        console.log('User 2:', users[1].name);
        console.log('User 3:', users[2].name);
    })
    .catch(error => {
        console.error('Xato:', error);
    });`}
        />
      </div>

      {/* Promise.race */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Promise.race()</h2>
        </div>

        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            Birinchi tugagan Promise ni qaytaradi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let promise1 = new Promise(resolve => setTimeout(() => resolve('1 sekund'), 1000));
let promise2 = new Promise(resolve => setTimeout(() => resolve('2 sekund'), 2000));
let promise3 = new Promise(resolve => setTimeout(() => resolve('3 sekund'), 3000));

Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log('Birinchi:', result); // "1 sekund"
    });`}
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
              <h3 className="text-xl font-semibold text-gray-200">Oddiy Promise</h3>
            </div>
            <p className="text-gray-300">
              2 sekunddan keyin &quot;Tayyor!&quot; qaytaradigan Promise yarating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Chaining</h3>
            </div>
            <p className="text-gray-300">
              User ma&apos;lumotini olib, keyin uning postlarini yuklang.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Promise.all</h3>
            </div>
            <p className="text-gray-300">
              3 ta userni parallel yuklang va natijalarni ko&apos;rsating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Xatolarni ushlash</h3>
            </div>
            <p className="text-gray-300">
              catch() bilan xatolarni to&apos;g&apos;ri ushlang.
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
              title: "Promise zanjiri",
              desc: "Ketma-ket bajariluvchi Promise'lar yarating:",
              items: [
                "3 ta Promise yarating (har biri 1 soniya kutadi)",
                "Birinchisi: Foydalanuvchi ma'lumotini olish",
                "Ikkinchisi: Foydalanuvchi postlarini olish",
                "Uchinchisi: Post kommentlarini olish",
                "Har bir bosqichda loading ko'rsating"
              ]
            },
            {
              num: "2",
              title: "Promise.all() amaliyoti",
              desc: "Bir nechta API so'rovlarini parallel bajarish:",
              items: [
                "3 ta turli API dan ma'lumot oling (users, posts, comments)",
                "Promise.all() dan foydalaning",
                "Barcha ma'lumotlar kelganda ko'rsating",
                "Biror biri xato bersa, xato xabarini ko'rsating",
                "Umumiy loading vaqtini o'lchang"
              ]
            },
            {
              num: "3",
              title: "Retry mexanizmi",
              desc: "Xato bo'lganda qayta urinish:",
              items: [
                "API so'rovini yuboruvchi funksiya yarating",
                "Xato bo'lsa, 3 marta qayta urinsin",
                "Har bir urinish orasida 2 soniya kutsin",
                "3 ta urinishdan keyin ham xato bo'lsa, foydalanuvchiga xabar bering",
                "Qaysi urinishda muvaffaqiyatli bo'lganini ko'rsating"
              ]
            },
            {
              num: "4",
              title: "Progress bar",
              desc: "Ko'p fayllarni yuklash simulyatsiyasi. 5 ta 'fayl' yarating (Promise'lar). Har biri tasodifiy vaqtda (1-3 soniya) tugaydi. Progress bar bilan jarayonni ko'rsating. Har bir fayl tugaganda ro'yxatga qo'shing."
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
          href="/docs/javascript/callback" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Callback</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/async" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-sky-200">Keyingi</div>
            <div className="text-white font-medium">Async/Await</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
