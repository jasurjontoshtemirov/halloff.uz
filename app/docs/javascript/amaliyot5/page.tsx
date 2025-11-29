"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function JavaScriptAmaliyot5Page() {
  return (
    <div className="max-w-none">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm mb-6">
          <span className="text-2xl">🚀</span>
          <span className="text-green-300 font-semibold">AMALIYOT DARSI</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-100 mb-4">Amaliyot #5: Random User</h1>
        <p className="text-xl text-gray-400">API dan foydalanuvchi malumotlarini olish</p>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Loyiha: Random User Generator</h2>
        <p className="text-gray-300 mb-4">
          RandomUser API dan tasodifiy foydalanuvchi malumotlarini olib, chiroyli ko&apos;rsatamiz.
        </p>
        <CodeBlock 
          language="html"
          code={`<!DOCTYPE html>
<html>
<head>
    <title>Random User</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; }
        .container { background: white; padding: 40px; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-width: 400px; width: 100%; text-align: center; }
        .user-img { width: 150px; height: 150px; border-radius: 50%; margin: 0 auto 20px; border: 5px solid #667eea; }
        h2 { color: #333; margin-bottom: 10px; }
        .info { background: #f5f5f5; padding: 15px; border-radius: 10px; margin: 10px 0; text-align: left; }
        .info strong { color: #667eea; }
        button { background: #667eea; color: white; border: none; padding: 15px 40px; border-radius: 50px; font-size: 16px; cursor: pointer; margin-top: 20px; }
        button:hover { background: #5568d3; }
        .loading { display: none; }
        .loading.active { display: block; }
    </style>
</head>
<body>
    <div class="container">
        <div class="loading" id="loading">Yuklanmoqda...</div>
        <div id="userCard" style="display: none;">
            <img id="userImg" class="user-img" src="" alt="User">
            <h2 id="userName"></h2>
            <div class="info">
                <strong>Email:</strong> <span id="userEmail"></span>
            </div>
            <div class="info">
                <strong>Phone:</strong> <span id="userPhone"></span>
            </div>
            <div class="info">
                <strong>Location:</strong> <span id="userLocation"></span>
            </div>
            <div class="info">
                <strong>Age:</strong> <span id="userAge"></span>
            </div>
        </div>
        <button onclick="loadUser()">Yangi User</button>
    </div>

    <script>
        function loadUser() {
            let loading = document.getElementById('loading');
            let userCard = document.getElementById('userCard');
            
            loading.classList.add('active');
            userCard.style.display = 'none';
            
            fetch('https://randomuser.me/api/')
                .then(response => response.json())
                .then(data => {
                    let user = data.results[0];
                    
                    document.getElementById('userImg').src = user.picture.large;
                    document.getElementById('userName').textContent = \`\${user.name.first} \${user.name.last}\`;
                    document.getElementById('userEmail').textContent = user.email;
                    document.getElementById('userPhone').textContent = user.phone;
                    document.getElementById('userLocation').textContent = \`\${user.location.city}, \${user.location.country}\`;
                    document.getElementById('userAge').textContent = user.dob.age;
                    
                    loading.classList.remove('active');
                    userCard.style.display = 'block';
                })
                .catch(error => {
                    console.error('Xato:', error);
                    alert('Malumot yuklanmadi!');
                    loading.classList.remove('active');
                });
        }
        
        // Sahifa yuklanganda
        window.addEventListener('load', loadUser);
    </script>
</body>
</html>`}
        />
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/javascript/promises" className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Promise & Chaining
        </Link>
        <Link href="/docs/javascript/async" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Async & Await
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
