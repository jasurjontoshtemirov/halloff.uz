"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Phone, ArrowRight, Clock, Code2, Sparkles, Zap } from "lucide-react";

export default function JavaScriptCallbackPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-full text-sm mb-6">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 font-semibold">CALLBACK</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 mb-4">
            Callback Functions
          </h1>
          <p className="text-2xl text-gray-300">
            Funksiyani funksiyaga uzatish
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
          <p className="text-gray-400 mb-4">Callback - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-yellow-500/50 transition-all">
            <div className="text-center">
              <Code2 className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Callback nima */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Callback nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">Callback</span> - bu boshqa funksiyaga argument sifatida uzatiladigan funksiya.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Oddiy misol
function greet(name, callback) {
    console.log('Salom, ' + name);
    callback();
}

function sayGoodbye() {
    console.log('Xayr!');
}

greet('Ali', sayGoodbye);
// "Salom, Ali"
// "Xayr!"

// Inline callback
greet('Vali', function() {
    console.log('Ko\\'rishguncha!');
});

// Arrow function
greet('Hasan', () => {
    console.log('Hayr-hayr!');
});`}
        />
      </div>

      {/* Asinxron callback */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Asinxron Callback</h2>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            Callback ko&apos;pincha asinxron operatsiyalarda ishlatiladi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// setTimeout bilan
setTimeout(() => {
    console.log('2 sekunddan keyin');
}, 2000);

// setInterval bilan
let count = 0;
let intervalId = setInterval(() => {
    count++;
    console.log(count);
    
    if (count === 5) {
        clearInterval(intervalId);
    }
}, 1000);

// Event listener
document.getElementById('btn').addEventListener('click', () => {
    console.log('Tugma bosildi!');
});`}
        />
      </div>

      {/* Array metodlari bilan */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Array metodlari bilan</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach((num, index) => {
    console.log(\`Index \${index}: \${num}\`);
});

// map
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter
let even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

// reduce
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// find
let found = numbers.find(num => num > 3);
console.log(found); // 4`}
        />
      </div>

      {/* Callback Hell */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Callback Hell</h2>
        </div>

        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            Ko&apos;p ichma-ich callback lar - o&apos;qish qiyin bo&apos;ladi. Promise va async/await yaxshiroq!
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Callback Hell - yomon misol
getData(function(a) {
    getMoreData(a, function(b) {
        getMoreData(b, function(c) {
            getMoreData(c, function(d) {
                getMoreData(d, function(e) {
                    console.log(e);
                });
            });
        });
    });
});

// Promise bilan - yaxshi
getData()
    .then(a => getMoreData(a))
    .then(b => getMoreData(b))
    .then(c => getMoreData(c))
    .then(d => getMoreData(d))
    .then(e => console.log(e));

// async/await bilan - eng yaxshi
async function loadData() {
    let a = await getData();
    let b = await getMoreData(a);
    let c = await getMoreData(b);
    let d = await getMoreData(c);
    let e = await getMoreData(d);
    console.log(e);
}`}
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

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Custom forEach</h3>
            <CodeBlock 
              language="javascript"
              code={`function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

myForEach([1, 2, 3], (num, index) => {
    console.log(\`\${index}: \${num}\`);
});`}
            />
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Custom filter</h3>
            <CodeBlock 
              language="javascript"
              code={`function myFilter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

let even = myFilter([1,2,3,4,5], num => num % 2 === 0);
console.log(even); // [2, 4]`}
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
              <h3 className="text-xl font-semibold text-gray-200">Oddiy callback</h3>
            </div>
            <p className="text-gray-300">
              Callback qabul qiladigan funksiya yarating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Array metodlari</h3>
            </div>
            <p className="text-gray-300">
              forEach, map, filter bilan ishlang.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">setTimeout</h3>
            </div>
            <p className="text-gray-300">
              setTimeout bilan callback ishlatib ko&apos;ring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Custom metod</h3>
            </div>
            <p className="text-gray-300">
              O&apos;zingizning array metodingizni yarating.
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
              title: "Array metodlari",
              desc: "Callback funksiyalar bilan array metodlarini amalda qo'llash:",
              items: [
                "Sonlar array: map bilan har birini kvadratga oshiring",
                "filter bilan juft sonlarni ajrating",
                "reduce bilan yig'indini toping",
                "forEach bilan har birini console ga chiqaring",
                "find bilan ma'lum shartga mos elementni toping"
              ]
            },
            {
              num: "2",
              title: "Custom callback funksiyalar",
              desc: "O'zingizning callback qabul qiluvchi funksiyalaringizni yarating:",
              items: [
                "processArray(arr, callback) - array ustida callback bajaradi",
                "delayedAction(callback, delay) - kechiktirib callback chaqiradi",
                "repeatAction(callback, times) - callback ni n marta chaqiradi",
                "conditionalExecute(condition, successCb, failCb)"
              ]
            },
            {
              num: "3",
              title: "Event simulation",
              desc: "Callback bilan hodisalarni simulyatsiya qiling:",
              items: [
                "createButton(text, onClick) - tugma yaratadi va callback biriktiradi",
                "onDataLoad(callback) - ma'lumot yuklanganda callback chaqiriladi",
                "onError(callback) - xato bo'lganda callback",
                "Bir nechta callback'larni ketma-ket chaqirish"
              ]
            },
            {
              num: "4",
              title: "Timer o'yini",
              desc: "Callback funksiyalar bilan oddiy o'yin yarating. 10 soniya ichida tugmani necha marta bosish mumkin. setTimeout va setInterval dan foydalaning. Har soniyada qolgan vaqtni ko'rsating. O'yin tugaganda natijani callback orqali qaytaring. Restart funksiyasi."
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
          href="/docs/javascript/amaliyot3" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Amaliyot #3</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/promises" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-emerald-200">Keyingi</div>
            <div className="text-white font-medium">Promises</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
