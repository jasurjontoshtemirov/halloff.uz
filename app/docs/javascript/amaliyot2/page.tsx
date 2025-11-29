"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function JavaScriptAmaliyot2Page() {
  return (
    <div className="max-w-none">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm mb-6">
          <span className="text-2xl">🚀</span>
          <span className="text-green-300 font-semibold">AMALIYOT DARSI</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-100 mb-4">Amaliyot #2: Kalkulyator</h1>
        <p className="text-xl text-gray-400">Funksiyalar bilan interaktiv kalkulyator yaratish</p>
      </div>

      <div className="mb-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-8 border border-green-500/20">
        <h2 className="text-3xl font-semibold text-gray-100 mb-4">Loyiha Maqsadi</h2>
        <p className="text-gray-300 mb-4">
          Bu loyihada siz to&apos;liq ishlaydigan kalkulyator yaratasz. Barcha o&apos;rgangan narsalaringizni qo&apos;llaysiz.
        </p>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <span>Funksiyalar yaratish va chaqirish</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <span>Parametrlar va return</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <span>Shart operatorlari</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <span>Xatolarni boshqarish</span>
          </li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">1-qadam: Asosiy funksiyalar</h2>
        <CodeBlock 
          language="javascript"
          code={`// Qo'shish
function add(a, b) {
    return a + b;
}

// Ayirish
function subtract(a, b) {
    return a - b;
}

// Ko'paytirish
function multiply(a, b) {
    return a * b;
}

// Bo'lish
function divide(a, b) {
    if (b === 0) {
        return "Nolga bo'lib bo'lmaydi!";
    }
    return a / b;
}

// Test
console.log(add(10, 5));      // 15
console.log(subtract(10, 5)); // 5
console.log(multiply(10, 5)); // 50
console.log(divide(10, 5));   // 2
console.log(divide(10, 0));   // "Nolga bo'lib bo'lmaydi!"`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">2-qadam: Asosiy kalkulyator</h2>
        <CodeBlock 
          language="javascript"
          code={`function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Noto'g'ri operator!";
    }
}

// Test
console.log(calculator(10, 5, '+'));  // 15
console.log(calculator(10, 5, '-'));  // 5
console.log(calculator(10, 5, '*'));  // 50
console.log(calculator(10, 5, '/'));  // 2
console.log(calculator(10, 5, '%'));  // "Noto'g'ri operator!"`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">3-qadam: Qo&apos;shimcha funksiyalar</h2>
        <CodeBlock 
          language="javascript"
          code={`// Daraja
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Kvadrat ildiz
function squareRoot(num) {
    if (num < 0) {
        return "Manfiy sondan ildiz olib bo'lmaydi!";
    }
    return Math.sqrt(num);
}

// Foiz
function percentage(num, percent) {
    return (num * percent) / 100;
}

// Faktorial
function factorial(n) {
    if (n < 0) return "Manfiy sondan faktorial olib bo'lmaydi!";
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Test
console.log(power(2, 3));        // 8
console.log(squareRoot(16));     // 4
console.log(percentage(200, 15)); // 30
console.log(factorial(5));       // 120`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">4-qadam: Kengaytirilgan kalkulyator</h2>
        <CodeBlock 
          language="javascript"
          code={`function advancedCalculator(num1, num2, operation) {
    // Raqam ekanini tekshirish
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Iltimos, raqam kiriting!";
    }
    
    switch (operation) {
        case 'add':
        case '+':
            return add(num1, num2);
            
        case 'subtract':
        case '-':
            return subtract(num1, num2);
            
        case 'multiply':
        case '*':
            return multiply(num1, num2);
            
        case 'divide':
        case '/':
            return divide(num1, num2);
            
        case 'power':
        case '**':
            return power(num1, num2);
            
        case 'percentage':
        case '%':
            return percentage(num1, num2);
            
        default:
            return "Noto'g'ri operatsiya!";
    }
}

// Test
console.log(advancedCalculator(10, 5, 'add'));        // 15
console.log(advancedCalculator(10, 5, '+'));          // 15
console.log(advancedCalculator(2, 3, 'power'));       // 8
console.log(advancedCalculator(200, 15, 'percentage')); // 30`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">5-qadam: Chiroyli natija</h2>
        <CodeBlock 
          language="javascript"
          code={`function calculate(num1, num2, operation) {
    let result = advancedCalculator(num1, num2, operation);
    
    // Natijani formatlash
    console.log("=".repeat(40));
    console.log("KALKULYATOR");
    console.log("=".repeat(40));
    console.log(\`Son 1: \${num1}\`);
    console.log(\`Son 2: \${num2}\`);
    console.log(\`Operatsiya: \${operation}\`);
    console.log("-".repeat(40));
    console.log(\`Natija: \${result}\`);
    console.log("=".repeat(40));
    
    return result;
}

// Test
calculate(10, 5, '+');
calculate(100, 25, 'percentage');
calculate(2, 8, 'power');`}
        />
      </div>

      <div className="mb-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🎯</span>
          <h2 className="text-3xl font-semibold text-gray-100">Yakuniy Loyiha</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-3">To&apos;liq Kalkulyator</h3>
            <p className="text-gray-300 mb-4">
              Quyidagi imkoniyatlarga ega kalkulyator yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
              <li>Asosiy amallar: +, -, *, /</li>
              <li>Qo&apos;shimcha: daraja, ildiz, foiz, faktorial</li>
              <li>Xatolarni tekshirish</li>
              <li>Chiroyli natija ko&apos;rsatish</li>
              <li>Tarix (oxirgi 5 ta hisob)</li>
            </ul>
            
            <CodeBlock 
              language="javascript"
              code={`// Tarix saqlash
let history = [];

function saveToHistory(num1, num2, operation, result) {
    let record = \`\${num1} \${operation} \${num2} = \${result}\`;
    history.push(record);
    
    // Faqat oxirgi 5 ta
    if (history.length > 5) {
        history.shift();
    }
}

function showHistory() {
    console.log("\\n=== TARIX ===");
    if (history.length === 0) {
        console.log("Tarix bo'sh");
    } else {
        history.forEach((record, index) => {
            console.log(\`\${index + 1}. \${record}\`);
        });
    }
    console.log("=============\\n");
}

function fullCalculator(num1, num2, operation) {
    let result = advancedCalculator(num1, num2, operation);
    
    // Tarixga qo'shish
    if (typeof result === 'number') {
        saveToHistory(num1, num2, operation, result);
    }
    
    // Natijani ko'rsatish
    calculate(num1, num2, operation);
    
    return result;
}

// Test
fullCalculator(10, 5, '+');
fullCalculator(20, 4, '*');
fullCalculator(100, 25, 'percentage');
showHistory();`}
            />
          </div>
        </div>
      </div>

      <div className="mb-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border border-blue-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">💡</span>
          <h2 className="text-3xl font-semibold text-gray-100">Bonus Vazifalar</h2>
        </div>
        
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">1.</span>
            <div>
              <strong>Ilmiy kalkulyator:</strong> sin, cos, tan, log funksiyalarini qo&apos;shing
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">2.</span>
            <div>
              <strong>Valyuta konvertori:</strong> Dollar, Yevro, Rubl konvertatsiyasi
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">3.</span>
            <div>
              <strong>BMI kalkulyator:</strong> Tana massasi indeksini hisoblash
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">4.</span>
            <div>
              <strong>Kredit kalkulyator:</strong> Oylik to&apos;lovni hisoblash
            </div>
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link 
          href="/docs/javascript/functions" 
          className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Funksiyalar
        </Link>
        
        <Link 
          href="/docs/javascript/arrays" 
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group"
        >
          Keyingi: Array haqida
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
