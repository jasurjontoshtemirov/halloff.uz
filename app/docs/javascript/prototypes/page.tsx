"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { GitBranch, Link2, Code2, Sparkles, Layers } from "lucide-react";

export default function JavaScriptPrototypesPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-emerald-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 rounded-full text-sm mb-6">
            <GitBranch className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">PROTOTYPES</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 mb-4">
            Prototypes
          </h1>
          <p className="text-2xl text-gray-300">
            JavaScript da meros olish mexanizmi
          </p>
        </div>
      </div>

      {/* Prototype nima */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Prototype nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">Prototype</span> - bu JavaScript obyektlarining meros olish mexanizmi. Har bir obyekt boshqa obyektdan xususiyat va metodlarni meros olishi mumkin.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Har bir obyektning prototype si bor
let obj = {};
console.log(obj.__proto__); // Object.prototype

// Array ning prototype si
let arr = [];
console.log(arr.__proto__); // Array.prototype

// Function ning prototype si
function func() {}
console.log(func.__proto__); // Function.prototype`}
        />
      </div>

      {/* Prototype chain */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Link2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Prototype Chain</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let animal = {
    eats: true,
    walk() {
        console.log('Hayvon yuradi');
    }
};

let rabbit = {
    jumps: true
};

// rabbit animal dan meros oladi
rabbit.__proto__ = animal;

console.log(rabbit.eats);  // true (animal dan)
console.log(rabbit.jumps); // true (o'zidan)
rabbit.walk();             // "Hayvon yuradi" (animal dan)

// Prototype chain
console.log(rabbit.__proto__);              // animal
console.log(rabbit.__proto__.__proto__);    // Object.prototype
console.log(rabbit.__proto__.__proto__.__proto__); // null`}
        />
      </div>

      {/* Constructor function */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Constructor Function</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`function User(name, age) {
    this.name = name;
    this.age = age;
}

// Prototype ga metod qo'shish
User.prototype.greet = function() {
    console.log(\`Salom, mening ismim \${this.name}\`);
};

User.prototype.getAge = function() {
    return this.age;
};

// Obyekt yaratish
let user1 = new User('Ali', 25);
let user2 = new User('Vali', 30);

user1.greet(); // "Salom, mening ismim Ali"
console.log(user2.getAge()); // 30

// Barcha obyektlar bir xil metodlarni ishlatadi
console.log(user1.greet === user2.greet); // true`}
        />
      </div>

      {/* Class va Prototype */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Class va Prototype</h2>
        </div>

        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            ES6 Class ichida ham prototype ishlatiladi!
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(\`Salom, \${this.name}\`);
    }
}

// Class metodlari prototype da
let user = new User('Ali', 25);
console.log(user.__proto__ === User.prototype); // true
console.log(User.prototype.greet); // function

// Prototype ga qo'shimcha metod
User.prototype.sayAge = function() {
    console.log(\`Men \${this.age} yoshdaman\`);
};

user.sayAge(); // "Men 25 yoshdaman"`}
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
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Array metodlarini kengaytirish</h3>
            <CodeBlock 
              language="javascript"
              code={`// Array.prototype ga yangi metod qo'shish
Array.prototype.last = function() {
    return this[this.length - 1];
};

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.last()); // 5

let fruits = ['olma', 'banan', 'apelsin'];
console.log(fruits.last()); // "apelsin"`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">String metodlarini kengaytirish</h3>
            <CodeBlock 
              language="javascript"
              code={`// String.prototype ga yangi metod
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

console.log('salom'.capitalize()); // "Salom"
console.log('javascript'.capitalize()); // "Javascript"`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Meros olish</h3>
            <CodeBlock 
              language="javascript"
              code={`function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(\`\${this.name} ovqatlanmoqda\`);
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

// Dog Animal dan meros oladi
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(\`\${this.name} vov-vov deydi\`);
};

let dog = new Dog('Rex', 'Labrador');
dog.eat();  // "Rex ovqatlanmoqda" (Animal dan)
dog.bark(); // "Rex vov-vov deydi" (Dog dan)`}
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
              <h3 className="text-xl font-semibold text-gray-200">Constructor</h3>
            </div>
            <p className="text-gray-300">
              Constructor function yarating va prototype ga metod qo&apos;shing.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Prototype chain</h3>
            </div>
            <p className="text-gray-300">
              Prototype chain ni tekshirib ko&apos;ring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Kengaytirish</h3>
            </div>
            <p className="text-gray-300">
              Array yoki String prototype ini kengaytiring.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Meros</h3>
            </div>
            <p className="text-gray-300">
              Bir classdan boshqasiga meros oling.
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
              title: "Array metodlarini qayta yaratish",
              desc: "Array.prototype ga custom metodlar qo'shing:",
              items: [
                "myMap() - map metodini qayta yarating",
                "myFilter() - filter metodini qayta yarating",
                "myReduce() - reduce metodini qayta yarating",
                "myFind() - find metodini qayta yarating",
                "Ularni test qiling"
              ]
            },
            {
              num: "2",
              title: "String metodlari",
              desc: "String.prototype ga foydali metodlar qo'shing:",
              items: [
                "capitalize() - birinchi harfni katta qilish",
                "reverse() - stringni teskari aylantirish",
                "truncate(length) - ma'lum uzunlikda kesish",
                "countWords() - so'zlar sonini hisoblash",
                "isPalindrome() - palindrom ekanini tekshirish"
              ]
            },
            {
              num: "3",
              title: "Number metodlari",
              desc: "Number.prototype ga metodlar qo'shing:",
              items: [
                "isEven() - juft ekanini tekshirish",
                "isOdd() - toq ekanini tekshirish",
                "isPrime() - tub son ekanini tekshirish",
                "factorial() - faktorialni hisoblash",
                "toWords() - sonni so'z bilan yozish (1 -> 'bir')"
              ]
            },
            {
              num: "4",
              title: "Custom Collection",
              desc: "O'zingizning Collection klassini yarating. Array ga o'xshash, lekin qo'shimcha metodlar bilan. Prototype orqali metodlar qo'shing: first(), last(), random(), shuffle(), chunk(size). Inheritance dan foydalaning."
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
          href="/docs/javascript/closures" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Closures</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/classes" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-cyan-200">Keyingi</div>
            <div className="text-white font-medium">Classes</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
