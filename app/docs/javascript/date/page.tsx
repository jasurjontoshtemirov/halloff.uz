"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Calendar, Clock, Timer, Code2, Sparkles } from "lucide-react";

export default function JavaScriptDatePage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 rounded-full text-sm mb-6">
            <Calendar className="w-4 h-4 text-violet-400" />
            <span className="text-violet-300 font-semibold">DATE</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 mb-4">
            Date Object
          </h1>
          <p className="text-2xl text-gray-300">
            Sana va vaqt bilan ishlash
          </p>
        </div>
      </div>

      {/* Date yaratish */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Date yaratish</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Hozirgi sana va vaqt
let now = new Date();
console.log(now);

// Ma'lum sana
let date1 = new Date('2024-01-15');
let date2 = new Date('2024-01-15T10:30:00');
let date3 = new Date(2024, 0, 15); // Oy 0 dan boshlanadi!
let date4 = new Date(2024, 0, 15, 10, 30, 0);

console.log(date1);
console.log(date2);
console.log(date3);

// Timestamp (millisekund)
let timestamp = Date.now();
console.log(timestamp); // 1234567890123

let date5 = new Date(timestamp);
console.log(date5);`}
        />
      </div>

      {/* Get metodlari */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Get metodlari</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let date = new Date();

// Sana
console.log(date.getFullYear());  // 2024
console.log(date.getMonth());     // 0-11 (0 = Yanvar)
console.log(date.getDate());      // 1-31
console.log(date.getDay());       // 0-6 (0 = Yakshanba)

// Vaqt
console.log(date.getHours());     // 0-23
console.log(date.getMinutes());   // 0-59
console.log(date.getSeconds());   // 0-59
console.log(date.getMilliseconds()); // 0-999

// Timestamp
console.log(date.getTime());      // Millisekund`}
        />
      </div>

      {/* Set metodlari */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Timer className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Set metodlari</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let date = new Date();

// Sana o'zgartirish
date.setFullYear(2025);
date.setMonth(11);      // Dekabr
date.setDate(31);

// Vaqt o'zgartirish
date.setHours(23);
date.setMinutes(59);
date.setSeconds(59);

console.log(date);

// Timestamp o'rnatish
date.setTime(1234567890123);
console.log(date);`}
        />
      </div>

      {/* Formatlash */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Formatlash</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let date = new Date();

// String ga aylantirish
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

// O'zbek formatida
console.log(date.toLocaleDateString('uz-UZ'));
console.log(date.toLocaleTimeString('uz-UZ'));

// Custom format
let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
};
console.log(date.toLocaleDateString('uz-UZ', options));`}
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
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Yosh hisoblash</h3>
            <CodeBlock 
              language="javascript"
              code={`function calculateAge(birthDate) {
    let today = new Date();
    let birth = new Date(birthDate);
    
    let age = today.getFullYear() - birth.getFullYear();
    let monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

console.log(calculateAge('2000-01-15')); // 24`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Kunlar farqi</h3>
            <CodeBlock 
              language="javascript"
              code={`function daysBetween(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    
    let diff = Math.abs(d2 - d1);
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    return days;
}

console.log(daysBetween('2024-01-01', '2024-12-31')); // 365`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Hafta kuni</h3>
            <CodeBlock 
              language="javascript"
              code={`function getDayName(date) {
    let days = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 
                'Payshanba', 'Juma', 'Shanba'];
    let d = new Date(date);
    return days[d.getDay()];
}

console.log(getDayName('2024-01-15')); // "Dushanba"`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Countdown timer</h3>
            <CodeBlock 
              language="javascript"
              code={`function countdown(targetDate) {
    let target = new Date(targetDate);
    let now = new Date();
    
    let diff = target - now;
    
    if (diff <= 0) {
        return 'Vaqt tugadi!';
    }
    
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return \`\${days} kun, \${hours} soat, \${minutes} daqiqa, \${seconds} sekund\`;
}

console.log(countdown('2024-12-31'));`}
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
              <h3 className="text-xl font-semibold text-gray-200">Hozirgi sana</h3>
            </div>
            <p className="text-gray-300">
              Hozirgi sana va vaqtni chiroyli formatda chiqaring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Yosh kalkulyator</h3>
            </div>
            <p className="text-gray-300">
              Tug&apos;ilgan sanadan yoshni hisoblang.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Kunlar farqi</h3>
            </div>
            <p className="text-gray-300">
              Ikki sana orasidagi kunlar sonini toping.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Countdown</h3>
            </div>
            <p className="text-gray-300">
              Yangi yilgacha qolgan vaqtni ko&apos;rsating.
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
              title: "Tug'ilgan kun kalkulyatori",
              desc: "Tug'ilgan sana bo'yicha ma'lumotlar:",
              items: [
                "Foydalanuvchi tug'ilgan sanasini kiritadi",
                "Hozirgi yoshini hisoblang",
                "Necha kun yashagani",
                "Keyingi tug'ilgan kunigacha qolgan kunlar",
                "Qaysi kun tug'ilgani (Dushanba, Seshanba...)",
                "Zodiak belgisini aniqlang"
              ]
            },
            {
              num: "2",
              title: "Countdown Timer",
              desc: "Muayyan sanagacha qolgan vaqt:",
              items: [
                "Maqsad sanasini kiriting (masalan, Yangi yil)",
                "Qolgan kunlar, soatlar, daqiqalar, soniyalar",
                "Real-time yangilanish (har soniya)",
                "Progress bar ko'rsatish",
                "Vaqt tugaganda xabar ko'rsatish"
              ]
            },
            {
              num: "3",
              title: "Ish vaqti hisoblagich",
              desc: "Ish soatlarini hisoblash dasturi:",
              items: [
                "Ish boshlanish va tugash vaqtini kiriting",
                "Tushlik vaqtini ayiring (1 soat)",
                "Jami ishlangan soatlar",
                "Haftalik jami soatlar",
                "Oylik jami soatlar",
                "Ish haqi kalkulyatori (soatiga narx)"
              ]
            },
            {
              num: "4",
              title: "Kalendar ilovasi",
              desc: "Oddiy kalendar yarating. Hozirgi oyni ko'rsating. Kunlarni jadval ko'rinishida. Bugungi kunni highlight qiling. Oldingi/keyingi oy tugmalari. Tanlangan kunga hodisa qo'shish. Hodisalarni localStorage da saqlash."
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
          href="/docs/javascript/localstorage" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">LocalStorage</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/destructuring" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-violet-200">Keyingi</div>
            <div className="text-white font-medium">Destructuring</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
