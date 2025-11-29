"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function JavaScriptAmaliyot1Page() {
  return (
    <div className="max-w-none">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm mb-6">
          <span className="text-2xl">🚀</span>
          <span className="text-green-300 font-semibold">AMALIYOT DARSI</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-100 mb-4">Amaliyot #1</h1>
        <p className="text-xl text-gray-400">Malumot turlari va operatorlar bilan amaliy mashqlar</p>
      </div>

      <div className="mb-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-8 border border-green-500/20">
        <h2 className="text-3xl font-semibold text-gray-100 mb-4">Maqsad</h2>
        <p className="text-gray-300 mb-4">
          Bu darsda siz o&apos;rgangan barcha narsalarni amalda qo&apos;llaysiz:
        </p>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <span>Malumot turlari (String, Number, Boolean)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <span>Arifmetik operatorlar</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <span>Taqqoslash operatorlari</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <span>Math object metodlari</span>
          </li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Vazifa 1: Shaxsiy Ma&apos;lumotlar</h2>
        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700 mb-4">
          <p className="text-gray-300 mb-4">
            O&apos;zingiz haqingizda quyidagi ma&apos;lumotlarni yarating va console ga chiqaring:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Ism va familiya (string)</li>
            <li>Yosh (number)</li>
            <li>Tug&apos;ilgan yil (number)</li>
            <li>Talabamisiz? (boolean)</li>
            <li>Shahar (string)</li>
          </ul>
        </div>
        
        <CodeBlock 
          language="javascript"
          code={`// Sizning kodingiz
let firstName = "Ali";
let lastName = "Valiyev";
let age = 20;
let birthYear = 2004;
let isStudent = true;
let city = "Toshkent";

// Console ga chiqarish
console.log("Ism: " + firstName + " " + lastName);
console.log("Yosh: " + age);
console.log("Tugilgan yil: " + birthYear);
console.log("Talabami: " + isStudent);
console.log("Shahar: " + city);

// typeof bilan tekshirish
console.log(typeof firstName);  // string
console.log(typeof age);         // number
console.log(typeof isStudent);   // boolean`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Vazifa 2: Oddiy Kalkulyator</h2>
        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700 mb-4">
          <p className="text-gray-300 mb-4">
            2 ta son olib, barcha matematik amallarni bajaring:
          </p>
        </div>
        
        <CodeBlock 
          language="javascript"
          code={`let num1 = 50;
let num2 = 10;

console.log("Sonlar: " + num1 + " va " + num2);
console.log("Qoshish: " + (num1 + num2));      // 60
console.log("Ayirish: " + (num1 - num2));      // 40
console.log("Kopaytirish: " + (num1 * num2));  // 500
console.log("Bolish: " + (num1 / num2));       // 5
console.log("Qoldiq: " + (num1 % num2));       // 0
console.log("Daraja: " + (num1 ** 2));         // 2500`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Vazifa 3: Mahsulot Narxi</h2>
        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700 mb-4">
          <p className="text-gray-300 mb-4">
            Mahsulot narxini hisoblang:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Asl narx: 100,000 so&apos;m</li>
            <li>Chegirma: 15%</li>
            <li>QQS (soliq): 12%</li>
            <li>Yakuniy narxni toping</li>
          </ul>
        </div>
        
        <CodeBlock 
          language="javascript"
          code={`let originalPrice = 100000;
let discountPercent = 15;
let taxPercent = 12;

// Chegirma hisoblash
let discountAmount = originalPrice * (discountPercent / 100);
let priceAfterDiscount = originalPrice - discountAmount;

console.log("Asl narx: " + originalPrice);
console.log("Chegirma: " + discountAmount);
console.log("Chegirmadan keyin: " + priceAfterDiscount);

// Soliq qoshish
let taxAmount = priceAfterDiscount * (taxPercent / 100);
let finalPrice = priceAfterDiscount + taxAmount;

console.log("Soliq: " + taxAmount);
console.log("Yakuniy narx: " + finalPrice);

// Yoki qisqa yozuv
let result = originalPrice * (1 - discountPercent/100) * (1 + taxPercent/100);
console.log("Yakuniy narx: " + result);`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Vazifa 4: Geometriya</h2>
        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700 mb-4">
          <p className="text-gray-300 mb-4">
            Turli shakllarning maydonini hisoblang:
          </p>
        </div>
        
        <CodeBlock 
          language="javascript"
          code={`// Kvadrat maydoni
let side = 5;
let squareArea = side * side;
console.log("Kvadrat maydoni: " + squareArea);

// Togri tortburchak maydoni
let length = 10;
let width = 6;
let rectangleArea = length * width;
console.log("Tortburchak maydoni: " + rectangleArea);

// Doira maydoni
let radius = 7;
let circleArea = Math.PI * Math.pow(radius, 2);
console.log("Doira maydoni: " + circleArea.toFixed(2));

// Uchburchak maydoni
let base = 8;
let height = 5;
let triangleArea = (base * height) / 2;
console.log("Uchburchak maydoni: " + triangleArea);`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Vazifa 5: Tasodifiy Sonlar</h2>
        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700 mb-4">
          <p className="text-gray-300 mb-4">
            Math.random() dan foydalanib turli tasodifiy sonlar yarating:
          </p>
        </div>
        
        <CodeBlock 
          language="javascript"
          code={`// 0 dan 10 gacha
let random1 = Math.floor(Math.random() * 11);
console.log("0-10: " + random1);

// 1 dan 100 gacha
let random2 = Math.floor(Math.random() * 100) + 1;
console.log("1-100: " + random2);

// 50 dan 100 gacha
let min = 50;
let max = 100;
let random3 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("50-100: " + random3);

// Tosh otish (1-6)
let dice = Math.floor(Math.random() * 6) + 1;
console.log("Tosh: " + dice);

// Tanga tashlash (0 yoki 1)
let coin = Math.floor(Math.random() * 2);
console.log("Tanga: " + (coin === 0 ? "Raqam" : "Gerb"));`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Vazifa 6: Yaxlitlash</h2>
        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700 mb-4">
          <p className="text-gray-300 mb-4">
            Turli sonlarni turlicha yaxlitlang:
          </p>
        </div>
        
        <CodeBlock 
          language="javascript"
          code={`let number = 4.7;

console.log("Asl son: " + number);
console.log("Math.round(): " + Math.round(number));  // 5
console.log("Math.ceil(): " + Math.ceil(number));    // 5
console.log("Math.floor(): " + Math.floor(number));  // 4
console.log("Math.trunc(): " + Math.trunc(number));  // 4

// Onlik qismni cheklash
let price = 123.456789;
console.log(price.toFixed(2));  // "123.46" (string)
console.log(Number(price.toFixed(2)));  // 123.46 (number)`}
        />
      </div>

      <div className="mb-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🎯</span>
          <h2 className="text-3xl font-semibold text-gray-100">Yakuniy Loyiha</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-3">Do&apos;kon Dasturi</h3>
            <p className="text-gray-300 mb-4">
              Oddiy do&apos;kon dasturini yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
              <li>3 ta mahsulot nomi va narxi</li>
              <li>Har bir mahsulotga tasodifiy chegirma (5-25%)</li>
              <li>Chegirmadan keyingi narxlar</li>
              <li>Barcha mahsulotlar uchun QQS (12%)</li>
              <li>Jami summa</li>
              <li>Hammasini chiroyli formatda console ga chiqaring</li>
            </ul>
            
            <CodeBlock 
              language="javascript"
              code={`// Mahsulotlar
let product1 = "Telefon";
let price1 = 5000000;

let product2 = "Noutbuk";
let price2 = 8000000;

let product3 = "Naushnik";
let price3 = 500000;

// Tasodifiy chegirmalar (5-25%)
let discount1 = Math.floor(Math.random() * 21) + 5;
let discount2 = Math.floor(Math.random() * 21) + 5;
let discount3 = Math.floor(Math.random() * 21) + 5;

// Chegirmadan keyingi narxlar
let finalPrice1 = price1 * (1 - discount1/100);
let finalPrice2 = price2 * (1 - discount2/100);
let finalPrice3 = price3 * (1 - discount3/100);

// Jami
let subtotal = finalPrice1 + finalPrice2 + finalPrice3;
let tax = subtotal * 0.12;
let total = subtotal + tax;

// Natijalar
console.log("=== DOKON CHEKI ===");
console.log(product1 + ": " + price1 + " (-" + discount1 + "%) = " + finalPrice1.toFixed(0));
console.log(product2 + ": " + price2 + " (-" + discount2 + "%) = " + finalPrice2.toFixed(0));
console.log(product3 + ": " + price3 + " (-" + discount3 + "%) = " + finalPrice3.toFixed(0));
console.log("-------------------");
console.log("Jami: " + subtotal.toFixed(0));
console.log("QQS (12%): " + tax.toFixed(0));
console.log("UMUMIY: " + total.toFixed(0) + " som");`}
            />
          </div>
        </div>
      </div>

      <div className="mb-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border border-blue-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">💡</span>
          <h2 className="text-3xl font-semibold text-gray-100">Maslahatlar</h2>
        </div>
        
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <span>Har bir vazifani alohida fayl yoki console da sinab koring</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <span>console.log() dan kop foydalaning - bu eng yaxshi debug usuli</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <span>Ozingizning qiymatlaringiz bilan ham sinab koring</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <span>Xato chiqsa, qaysi qatorda ekanini aniqlang</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <span>Kodingizni tartibli va tushunarli yozing</span>
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link 
          href="/docs/javascript/operators" 
          className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Operatorlar
        </Link>
        
        <Link 
          href="/docs/javascript/conditions" 
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group"
        >
          Keyingi: Shart operatorlari
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
