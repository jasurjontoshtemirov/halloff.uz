"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function JavaScriptAmaliyot6Page() {
  return (
    <div className="max-w-none">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm mb-6">
          <span className="text-2xl">🚀</span>
          <span className="text-green-300 font-semibold">AMALIYOT DARSI</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-100 mb-4">Amaliyot #6: Weather App</h1>
        <p className="text-xl text-gray-400">Ob-havo malumotlarini API dan olish</p>
      </div>

      <div className="mb-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-8 border border-green-500/20">
        <h2 className="text-3xl font-semibold text-gray-100 mb-4">🎉 Tabriklaymiz!</h2>
        <p className="text-gray-300 text-lg mb-4">
          Siz JavaScript kursini muvaffaqiyatli tugatdingiz! Endi siz:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
          <li>JavaScript asoslarini bilasiz</li>
          <li>DOM bilan ishlaysiz</li>
          <li>API dan malumot olasiz</li>
          <li>Async/Await ishlatasz</li>
          <li>Professional web dasturlar yaratasiz</li>
        </ul>
        <p className="text-gray-300 text-lg">
          Keyingi qadam: <strong className="text-green-400">React</strong> organish va zamonaviy web ilovalar yaratish! 🚀
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Loyiha: Weather App</h2>
        <p className="text-gray-300 mb-4">
          OpenWeatherMap API dan foydalanib ob-havo malumotlarini ko&apos;rsatamiz.
        </p>
        <CodeBlock 
          language="javascript"
          code={`// Weather App
const API_KEY = 'YOUR_API_KEY'; // openweathermap.org dan oling

async function getWeather(city) {
    try {
        let response = await fetch(
            \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}&units=metric&lang=uz\`
        );
        
        if (!response.ok) {
            throw new Error('Shahar topilmadi!');
        }
        
        let data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Xato:', error);
        alert(error.message);
    }
}

function displayWeather(data) {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temp').textContent = Math.round(data.main.temp) + '°C';
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = data.main.humidity + '%';
    document.getElementById('wind').textContent = data.wind.speed + ' m/s';
}

// Qidiruv
document.getElementById('searchBtn').addEventListener('click', () => {
    let city = document.getElementById('cityInput').value;
    if (city) {
        getWeather(city);
    }
});

// Enter tugmasi
document.getElementById('cityInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let city = e.target.value;
        if (city) {
            getWeather(city);
        }
    }
});

// Default shahar
getWeather('Tashkent');`}
        />
      </div>

      <div className="mb-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border border-blue-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">💡</span>
          <h2 className="text-3xl font-semibold text-gray-100">Keyingi Qadamlar</h2>
        </div>
        
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">1.</span>
            <div>
              <strong>React:</strong> Zamonaviy UI kutubxonasi
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">2.</span>
            <div>
              <strong>TypeScript:</strong> JavaScript ning typed versiyasi
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">3.</span>
            <div>
              <strong>Node.js:</strong> Backend dasturlash
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">4.</span>
            <div>
              <strong>Database:</strong> MongoDB, PostgreSQL
            </div>
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/javascript/errors" className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Throw Errors
        </Link>
        
        <Link href="/docs" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Dokumentatsiyaga qaytish
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
