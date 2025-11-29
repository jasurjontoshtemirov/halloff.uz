"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function JavaScriptAPIPage() {
  return (
    <div className="max-w-none">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-100 mb-4">API, Fetch</h1>
        <p className="text-xl text-gray-400">Serverdan malumot olish</p>
      </div>

      <div className="mb-12 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🎥</span>
          <h2 className="text-2xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-8 text-center">
          <p className="text-gray-400 mb-4">API va Fetch - Video dars</p>
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-lg">Video joylashuvi</span>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">API nima?</h2>
        <p className="text-gray-300 mb-4">
          API (Application Programming Interface) - bu serverdan malumot olish va yuborish uchun interfeys.
        </p>
        <CodeBlock 
          language="javascript"
          code={`// fetch() - serverdan malumot olish
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Xato:', error);
    });`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">GET - Malumot olish</h2>
        <CodeBlock 
          language="javascript"
          code={`// JSONPlaceholder - test API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            console.log(user.name);
        });
    });

// Bitta user
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => {
        console.log(user.name); // "Leanne Graham"
    });`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">POST - Malumot yuborish</h2>
        <CodeBlock 
          language="javascript"
          code={`// Yangi post yaratish
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Yangi post',
        body: 'Bu post matni',
        userId: 1
    })
})
.then(response => response.json())
.then(data => {
    console.log('Yaratildi:', data);
});`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Amaliy Misol - Foydalanuvchilar royxati</h2>
        <CodeBlock 
          language="javascript"
          code={`function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            let userList = document.getElementById('userList');
            userList.innerHTML = '';
            
            users.forEach(user => {
                let div = document.createElement('div');
                div.innerHTML = \`
                    <h3>\${user.name}</h3>
                    <p>Email: \${user.email}</p>
                    <p>Phone: \${user.phone}</p>
                \`;
                userList.appendChild(div);
            });
        })
        .catch(error => {
            console.error('Xato:', error);
            alert('Malumot yuklanmadi!');
        });
}

// Sahifa yuklanganda
window.addEventListener('load', loadUsers);`}
        />
      </div>

      <div className="mb-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🏠</span>
          <h2 className="text-2xl font-semibold text-gray-100">Uyga Vazifa</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">1. Foydalanuvchilar ro&apos;yxati</h3>
            <p className="text-gray-300">
              JSONPlaceholder API dan barcha foydalanuvchilarni oling va kartochkalar ko&apos;rinishida ekranga chiqaring. Har bir kartada: ism, email, telefon, kompaniya nomi bo&apos;lsin.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">2. Postlar va izohlar</h3>
            <p className="text-gray-300">
              Bitta postni va unga tegishli barcha izohlarni oling. Post va izohlarni chiroyli formatda ko&apos;rsating. Loading holatini ham qo&apos;shing.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">3. Qidiruv tizimi</h3>
            <p className="text-gray-300">
              Input yarating va foydalanuvchi yozgan so&apos;z bo&apos;yicha postlarni qidiring. Natijalarni real-time ko&apos;rsating. Agar natija bo&apos;lmasa - &quot;Hech narsa topilmadi&quot; xabarini chiqaring.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/javascript/test" className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: TEST
        </Link>
        <Link href="/docs/javascript/callback" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Callback Hell
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
