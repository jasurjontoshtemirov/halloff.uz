"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Clock, Zap, CheckCircle, XCircle, Code2, Sparkles, TrendingUp } from "lucide-react";

export default function JavaScriptAsyncPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-sm mb-6">
            <Clock className="w-4 h-4 text-violet-400" />
            <span className="text-violet-300 font-semibold">ASYNC/AWAIT</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 mb-4">
            Async & Await
          </h1>
          <p className="text-2xl text-gray-300">
            Asinxron kodning eng qulay usuli
          </p>
        </div>
      </div>

      {/* async/await nima */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">async/await nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">async/await</span> - bu Promise bilan ishlashning yanada qulay usuli. Kod sinxron ko&apos;rinadi, lekin asinxron ishlaydi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Promise bilan
function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(user => {
            console.log(user.name);
            return user;
        });
}

// async/await bilan
async function getUser() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let user = await response.json();
    console.log(user.name);
    return user;
}

// Ancha tushunarli!`}
        />
      </div>

      {/* async funksiya */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">async funksiya</h2>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-green-400 font-semibold">async</span> kalit so&apos;zi funksiyani asinxron qiladi va har doim Promise qaytaradi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// async funksiya
async function hello() {
    return "Salom";
}

// Promise qaytaradi
hello().then(result => console.log(result)); // "Salom"

// yoki await bilan
async function main() {
    let result = await hello();
    console.log(result); // "Salom"
}

main();`}
        />
      </div>

      {/* await */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">await</h2>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-purple-400 font-semibold">await</span> Promise tugashini kutadi. Faqat async funksiya ichida ishlatiladi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`async function loadData() {
    console.log("Yuklanmoqda...");
    
    // Promise tugashini kutadi
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    
    console.log("Yuklandi!");
    return data;
}

loadData();`}
        />
      </div>

      {/* Xatolarni ushlash */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl">
            <XCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Xatolarni ushlash (try/catch)</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`async function loadData() {
    try {
        let response = await fetch('https://api.example.com/data');
        
        if (!response.ok) {
            throw new Error('Ma\\'lumot yuklanmadi');
        }
        
        let data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Xato:', error.message);
    }
}

loadData();`}
        />
      </div>

      {/* Amaliy Misollar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Amaliy Misollar</h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">User ma&apos;lumotini olish</h3>
            <CodeBlock 
              language="javascript"
              code={`async function getUser(userId) {
    try {
        let response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
        let user = await response.json();
        
        console.log('Ism:', user.name);
        console.log('Email:', user.email);
        console.log('Shahar:', user.address.city);
        
        return user;
    } catch (error) {
        console.error('Xato:', error);
    }
}

getUser(1);`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Bir nechta so&apos;rovlar</h3>
            <CodeBlock 
              language="javascript"
              code={`async function loadUserAndPosts(userId) {
    try {
        // User ma'lumotini olish
        let userResponse = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
        let user = await userResponse.json();
        console.log('User:', user.name);
        
        // User postlarini olish
        let postsResponse = await fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${userId}\`);
        let posts = await postsResponse.json();
        console.log('Postlar soni:', posts.length);
        
        return { user, posts };
    } catch (error) {
        console.error('Xato:', error);
    }
}

loadUserAndPosts(1);`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Parallel so&apos;rovlar (Promise.all)</h3>
            <CodeBlock 
              language="javascript"
              code={`async function loadMultipleUsers() {
    try {
        // Bir vaqtda 3 ta so'rov
        let [user1, user2, user3] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/users/2').then(r => r.json()),
            fetch('https://jsonplaceholder.typicode.com/users/3').then(r => r.json())
        ]);
        
        console.log(user1.name);
        console.log(user2.name);
        console.log(user3.name);
        
        return [user1, user2, user3];
    } catch (error) {
        console.error('Xato:', error);
    }
}

loadMultipleUsers();`}
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
              <h3 className="text-xl font-semibold text-gray-200">User ma&apos;lumoti</h3>
            </div>
            <p className="text-gray-300">
              JSONPlaceholder API dan user ma&apos;lumotini oling va console ga chiqaring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Postlar ro&apos;yxati</h3>
            </div>
            <p className="text-gray-300">
              Barcha postlarni oling va birinchi 5 tasini ko&apos;rsating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Xatolarni ushlash</h3>
            </div>
            <p className="text-gray-300">
              try/catch bilan xatolarni to&apos;g&apos;ri ushlang va xabar chiqaring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Parallel yuklash</h3>
            </div>
            <p className="text-gray-300">
              Promise.all bilan bir nechta ma&apos;lumotni parallel yuklang.
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
              title: "Ob-havo ilovasi",
              desc: "Ob-havo ma'lumotlarini oladigan ilova yarating:",
              items: [
                "OpenWeatherMap API dan foydalaning (bepul)",
                "Shahar nomini kiritish inputi",
                "Async/await bilan ma'lumot olish",
                "Harorat, namlik, shamol tezligini ko'rsatish",
                "Loading va error holatlarini boshqarish"
              ]
            },
            {
              num: "2",
              title: "Foydalanuvchilar ro'yxati",
              desc: "JSONPlaceholder API dan foydalanuvchilar ro'yxatini oling:",
              items: [
                "Barcha foydalanuvchilarni ko'rsatish",
                "Har bir foydalanuvchi kartochkasi",
                "Foydalanuvchi ustiga bosilganda batafsil ma'lumot",
                "Qidiruv funksiyasi",
                "Pagination (sahifalash)"
              ]
            },
            {
              num: "3",
              title: "Rasmlar galereyasi",
              desc: "Unsplash yoki Pexels API dan rasmlar oling:",
              items: [
                "Qidiruv so'zi bo'yicha rasmlar topish",
                "Grid layout da ko'rsatish",
                "Lazy loading (asta-sekin yuklash)",
                "Rasm ustiga bosilganda katta ko'rsatish",
                "Sevimlilar ro'yxatiga qo'shish (localStorage)"
              ]
            },
            {
              num: "4",
              title: "Multi-step forma",
              desc: "Ko'p bosqichli forma yarating (3 qadam). Har bir qadamda ma'lumot to'plang. Oxirgi qadamda barcha ma'lumotni API ga yuboring (fake API - JSONPlaceholder). Loading animatsiya va muvaffaqiyat xabari."
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
          href="/docs/javascript/promises" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Promises</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/api" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-violet-200">Keyingi</div>
            <div className="text-white font-medium">API bilan ishlash</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
