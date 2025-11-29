"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Zap, Code2, Sparkles, TrendingUp, Box, ArrowRight, Play } from "lucide-react";

export default function JavaScriptFunctionsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-sm mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">FUNKSIYALAR</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 mb-4">
            Funksiyalar
          </h1>
          <p className="text-2xl text-gray-300">
            Qayta ishlatiladigan kod bloklari
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Funksiya nima?</h2>
        <p className="text-gray-300 mb-4">
          Funksiya - bu qayta ishlatiladigan kod bloki. Bir marta yozib, kerak joyda chaqirasiz.
        </p>
        <CodeBlock 
          language="javascript"
          code={`// Funksiya yaratish
function sayHello() {
    console.log("Salom!");
}

// Funksiyani chaqirish
sayHello(); // Salom!
sayHello(); // Salom!
sayHello(); // Salom!`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Parametrlar (Parameters)</h2>
        <p className="text-gray-300 mb-4">
          Funksiyaga qiymat yuborish uchun parametrlar ishlatiladi.
        </p>
        <CodeBlock 
          language="javascript"
          code={`// 1 ta parametr
function greet(name) {
    console.log("Salom, " + name + "!");
}

greet("Ali");    // Salom, Ali!
greet("Vali");   // Salom, Vali!

// 2 ta parametr
function add(a, b) {
    console.log(a + b);
}

add(5, 3);  // 8
add(10, 20); // 30

// Ko'p parametrlar
function introduce(name, age, city) {
    console.log("Mening ismim " + name + ", " + age + " yoshdaman, " + city + "da yashayman");
}

introduce("Ali", 25, "Toshkent");`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">return - Qiymat qaytarish</h2>
        <p className="text-gray-300 mb-4">
          return funksiyadan qiymat qaytaradi.
        </p>
        <CodeBlock 
          language="javascript"
          code={`// return bilan
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result); // 8

// return dan keyin kod ishlamaydi
function test() {
    return "Birinchi";
    console.log("Bu chiqmaydi"); // Bu qator ishlamaydi
}

// Misol: Kvadrat
function square(num) {
    return num * num;
}

console.log(square(5));  // 25
console.log(square(10)); // 100

// Misol: Eng katta son
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(max(10, 5)); // 10`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Default Parameters</h2>
        <p className="text-gray-300 mb-4">
          Parametrga default qiymat berish mumkin.
        </p>
        <CodeBlock 
          language="javascript"
          code={`function greet(name = "Mehmon") {
    console.log("Salom, " + name + "!");
}

greet("Ali");  // Salom, Ali!
greet();       // Salom, Mehmon!

// Misol: Kopaytirish
function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 3)); // 15
console.log(multiply(5));    // 5 (b = 1)`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Function Expression</h2>
        <p className="text-gray-300 mb-4">
          Funksiyani o&apos;zgaruvchiga tayinlash.
        </p>
        <CodeBlock 
          language="javascript"
          code={`// Function expression
const sayHello = function() {
    console.log("Salom!");
};

sayHello(); // Salom!

// Parametrlar bilan
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3)); // 8`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Arrow Functions (ES6)</h2>
        <p className="text-gray-300 mb-4">
          Qisqa va zamonaviy funksiya yozish usuli.
        </p>
        <CodeBlock 
          language="javascript"
          code={`// Oddiy funksiya
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => {
    return a + b;
};

// Yana qisqaroq (1 qatorli)
const add = (a, b) => a + b;

console.log(add(5, 3)); // 8

// 1 ta parametr
const square = num => num * num;
console.log(square(5)); // 25

// Parametrsiz
const sayHello = () => console.log("Salom!");
sayHello(); // Salom!

// Ko'p qatorli
const greet = name => {
    let message = "Salom, " + name;
    console.log(message);
};

greet("Ali"); // Salom, Ali`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Amaliy Misollar</h2>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Juft/Toq tekshirish</h3>
        <CodeBlock 
          language="javascript"
          code={`function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4));  // true
console.log(isEven(7));  // false

// Arrow function
const isEven = num => num % 2 === 0;`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Faktorial</h3>
        <CodeBlock 
          language="javascript"
          code={`function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Harorat konvertori</h3>
        <CodeBlock 
          language="javascript"
          code={`// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log(celsiusToFahrenheit(0));   // 32
console.log(celsiusToFahrenheit(100)); // 212
console.log(fahrenheitToCelsius(32));  // 0`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Chegirma hisoblash</h3>
        <CodeBlock 
          language="javascript"
          code={`function calculateDiscount(price, discount) {
    let discountAmount = price * (discount / 100);
    return price - discountAmount;
}

console.log(calculateDiscount(1000, 20)); // 800
console.log(calculateDiscount(500, 10));  // 450

// Arrow function
const calculateDiscount = (price, discount) => price * (1 - discount/100);`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Scope (Ko&apos;rinish doirasi)</h2>
        <CodeBlock 
          language="javascript"
          code={`// Global scope
let globalVar = "Global";

function test() {
    // Local scope
    let localVar = "Local";
    console.log(globalVar); // "Global" - ko'rinadi
    console.log(localVar);  // "Local" - ko'rinadi
}

test();
console.log(globalVar); // "Global" - ko'rinadi
// console.log(localVar); // Xato! - ko'rinmaydi

// Block scope
if (true) {
    let blockVar = "Block";
    console.log(blockVar); // "Block"
}
// console.log(blockVar); // Xato!`}
        />
      </div>

      <div className="mb-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">💻</span>
          <h2 className="text-2xl font-semibold text-gray-100">Amaliy Mashq</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 1: Salom funksiyasi</h3>
            <p className="text-gray-300">
              Ism qabul qilib, &quot;Salom, [ism]!&quot; qaytaradigan funksiya yarating.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 2: Eng katta son</h3>
            <p className="text-gray-300">
              3 ta son qabul qilib, eng kattasini qaytaradigan funksiya yarating.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 3: Tub son</h3>
            <p className="text-gray-300">
              Son tub yoki tub emasligini tekshiradigan funksiya yarating.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 4: Arrow function</h3>
            <p className="text-gray-300">
              Yuqoridagi funksiyalarni arrow function sifatida qayta yozing.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">📝</span>
          <h2 className="text-2xl font-semibold text-gray-100">Topshiriq</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">1. Kalkulyator funksiyalari</h3>
            <p className="text-gray-300 mb-3">
              4 ta funksiya yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>add(a, b) - qo&apos;shish</li>
              <li>subtract(a, b) - ayirish</li>
              <li>multiply(a, b) - ko&apos;paytirish</li>
              <li>divide(a, b) - bo&apos;lish</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">2. Geometriya funksiyalari</h3>
            <p className="text-gray-300 mb-3">
              Turli shakllar maydonini hisoblaydigan funksiyalar:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>squareArea(side) - kvadrat</li>
              <li>rectangleArea(length, width) - to&apos;rtburchak</li>
              <li>circleArea(radius) - doira</li>
              <li>triangleArea(base, height) - uchburchak</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">3. Matn funksiyalari</h3>
            <p className="text-gray-300 mb-3">
              Matn bilan ishlaydigan funksiyalar:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>reverseString(str) - matnni teskari aylantirish</li>
              <li>countVowels(str) - unlilar sonini sanash</li>
              <li>isPalindrome(str) - palindrom ekanini tekshirish</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🏠</span>
          <h2 className="text-2xl font-semibold text-gray-100">Uyga Vazifa</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">1. Matn tahlil funksiyalari</h3>
            <p className="text-gray-300 mb-3">
              Quyidagi funksiyalarni yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>countWords(text) - so&apos;zlar sonini sanash</li>
              <li>countVowels(text) - unli harflar sonini sanash</li>
              <li>countConsonants(text) - undosh harflar sonini sanash</li>
              <li>longestWord(text) - eng uzun so&apos;zni topish</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">2. Matematik funksiyalar</h3>
            <p className="text-gray-300 mb-3">
              Quyidagi funksiyalarni yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>power(base, exponent) - darajaga ko&apos;tarish</li>
              <li>gcd(a, b) - eng katta umumiy bo&apos;luvchi</li>
              <li>lcm(a, b) - eng kichik umumiy karrali</li>
              <li>fibonacci(n) - Fibonacci ketma-ketligining n-elementi</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">3. Array funksiyalari</h3>
            <p className="text-gray-300 mb-3">
              Quyidagi funksiyalarni yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>findMax(arr) - eng katta elementni topish</li>
              <li>findMin(arr) - eng kichik elementni topish</li>
              <li>sumArray(arr) - barcha elementlar yig&apos;indisi</li>
              <li>averageArray(arr) - o&apos;rtacha qiymat</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link 
          href="/docs/javascript/loops" 
          className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Tsikllar
        </Link>
        
        <Link 
          href="/docs/javascript/amaliyot2" 
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group"
        >
          Keyingi: 🚀 Amaliyot: Kalkulyator
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
