"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Lock, Key, Eye, Code2, Sparkles, Layers } from "lucide-react";

export default function JavaScriptClosuresPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-sm mb-6">
            <Lock className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 font-semibold">CLOSURES</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4">
            Closures
          </h1>
          <p className="text-2xl text-gray-300">
            Funksiya va uning muhiti
          </p>
        </div>
      </div>

      {/* Closure nima */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Closure nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">Closure</span> - bu funksiya va uning yaratilgan muhitidagi o&apos;zgaruvchilarni eslab qolish xususiyati.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`function outer() {
    let count = 0; // outer funksiya o'zgaruvchisi
    
    function inner() {
        count++; // outer o'zgaruvchisiga kirish
        console.log(count);
    }
    
    return inner;
}

let counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

// inner funksiya outer funksiyaning count o'zgaruvchisini eslab qoladi!`}
        />
      </div>

      {/* Private o'zgaruvchilar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Private o&apos;zgaruvchilar</h2>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            Closure yordamida private (yashirin) o&apos;zgaruvchilar yaratish mumkin.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`function createCounter() {
    let count = 0; // Private o'zgaruvchi
    
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count;
        }
    };
}

let counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1

// count ga to'g'ridan-to'g'ri kirish mumkin emas!
console.log(counter.count); // undefined`}
        />
      </div>

      {/* Amaliy Misollar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Amaliy Misollar</h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">ID Generator</h3>
            <CodeBlock 
              language="javascript"
              code={`function createIDGenerator() {
    let id = 0;
    
    return function() {
        id++;
        return id;
    };
}

let generateID = createIDGenerator();
console.log(generateID()); // 1
console.log(generateID()); // 2
console.log(generateID()); // 3`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Private metodlar</h3>
            <CodeBlock 
              language="javascript"
              code={`function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private
    
    // Private funksiya
    function validateAmount(amount) {
        return amount > 0 && amount <= balance;
    }
    
    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                return \`Qo'shildi: \${amount}. Balans: \${balance}\`;
            }
            return 'Xato: Noto\\'g\\'ri summa';
        },
        withdraw(amount) {
            if (validateAmount(amount)) {
                balance -= amount;
                return \`Olindi: \${amount}. Balans: \${balance}\`;
            }
            return 'Xato: Mablag\\' yetarli emas';
        },
        getBalance() {
            return balance;
        }
    };
}

let account = createBankAccount(1000);
console.log(account.deposit(500));   // "Qo'shildi: 500. Balans: 1500"
console.log(account.withdraw(300));  // "Olindi: 300. Balans: 1200"
console.log(account.getBalance());   // 1200`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Function Factory</h3>
            <CodeBlock 
              language="javascript"
              code={`function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

let double = createMultiplier(2);
let triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Har bir funksiya o'z multiplier ni eslab qoladi`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Timer bilan</h3>
            <CodeBlock 
              language="javascript"
              code={`function createTimer() {
    let seconds = 0;
    let intervalId = null;
    
    return {
        start() {
            if (!intervalId) {
                intervalId = setInterval(() => {
                    seconds++;
                    console.log(\`\${seconds} sekund\`);
                }, 1000);
            }
        },
        stop() {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        },
        reset() {
            this.stop();
            seconds = 0;
        },
        getTime() {
            return seconds;
        }
    };
}

let timer = createTimer();
timer.start();  // Timer boshlandi
// timer.stop();   // Timer to'xtatildi
// timer.reset();  // Timer qayta boshlandi`}
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
              <h3 className="text-xl font-semibold text-gray-200">Counter</h3>
            </div>
            <p className="text-gray-300">
              Closure bilan counter yarating (increment, decrement, reset).
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Private data</h3>
            </div>
            <p className="text-gray-300">
              Private o&apos;zgaruvchi bilan obyekt yarating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Function factory</h3>
            </div>
            <p className="text-gray-300">
              Turli xil funksiyalar yaratuvchi factory yarating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Cache</h3>
            </div>
            <p className="text-gray-300">
              Closure bilan cache (kesh) tizimi yarating.
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
              title: "Counter yaratish",
              desc: "Closure bilan turli counterlar yarating:",
              items: [
                "createCounter() - oddiy counter (increment, decrement, getValue)",
                "createLimitedCounter(max) - maksimal qiymatli counter",
                "createStepCounter(step) - ma'lum qadamda o'sadigan counter",
                "Har bir counter mustaqil ishlashi kerak"
              ]
            },
            {
              num: "2",
              title: "Private o'zgaruvchilar",
              desc: "Closure bilan private ma'lumotlar yarating:",
              items: [
                "createBankAccount(initialBalance) funksiyasi",
                "deposit(amount) - pul qo'shish",
                "withdraw(amount) - pul yechish",
                "getBalance() - balansni ko'rish",
                "Balance ga to'g'ridan-to'g'ri kirish bo'lmasin"
              ]
            },
            {
              num: "3",
              title: "Function factory",
              desc: "Closure bilan funksiya generatorlari:",
              items: [
                "createMultiplier(factor) - ko'paytiruvchi funksiya qaytaradi",
                "createGreeter(greeting) - salomlashuvchi funksiya",
                "createValidator(rules) - validatsiya funksiyasi",
                "createFormatter(format) - formatlash funksiyasi"
              ]
            },
            {
              num: "4",
              title: "Memoization",
              desc: "Closure bilan natijalarni keshlovchi funksiya yarating. Fibonacci sonini hisoblaydigan funksiya. Bir marta hisoblangan qiymatlarni saqlaydi. Keyingi chaqiruvda keshdan qaytaradi. Qancha marta hisoblangani va qancha marta keshdan olingani statistikasini ko'rsating."
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
          href="/docs/javascript/amaliyot4" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Amaliyot #4</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/prototypes" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-indigo-200">Keyingi</div>
            <div className="text-white font-medium">Prototypes</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
