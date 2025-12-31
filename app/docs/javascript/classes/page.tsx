"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Box, Users, Key, Lock, Code2, Sparkles, Layers } from "lucide-react";

export default function JavaScriptClassesPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-red-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-full text-sm mb-6">
            <Box className="w-4 h-4 text-pink-400" />
            <span className="text-pink-300 font-semibold">CLASSES</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 mb-4">
            Classes (Sinflar)
          </h1>
          <p className="text-2xl text-gray-300">
            Obyektga yo&apos;naltirilgan dasturlash
          </p>
        </div>
      </div>

      {/* Class nima */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Class nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">Class</span> - bu obyektlar yaratish uchun shablon. ES6 da qo&apos;shilgan.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Class yaratish
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(\`Salom, mening ismim \${this.name}\`);
    }
    
    getAge() {
        return this.age;
    }
}

// Obyekt yaratish
let person1 = new Person('Ali', 25);
let person2 = new Person('Vali', 30);

person1.greet(); // "Salom, mening ismim Ali"
console.log(person2.getAge()); // 30`}
        />
      </div>

      {/* Constructor */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Key className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Constructor</h2>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-green-400 font-semibold">constructor</span> - obyekt yaratilganda avtomatik chaqiriladi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }
    
    start() {
        console.log(\`\${this.brand} \${this.model} ishga tushdi\`);
    }
    
    accelerate(amount) {
        this.speed += amount;
        console.log(\`Tezlik: \${this.speed} km/h\`);
    }
}

let car = new Car('Toyota', 'Camry', 2023);
car.start(); // "Toyota Camry ishga tushdi"
car.accelerate(50); // "Tezlik: 50 km/h"`}
        />
      </div>

      {/* Getter va Setter */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Getter va Setter</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    // Getter
    get area() {
        return this.width * this.height;
    }
    
    // Setter
    set dimensions(value) {
        [this.width, this.height] = value;
    }
}

let rect = new Rectangle(10, 5);
console.log(rect.area); // 50 (funksiya emas, xususiyat kabi)

rect.dimensions = [20, 10];
console.log(rect.area); // 200`}
        />
      </div>

      {/* Inheritance (Meros) */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Inheritance (Meros)</h2>
        </div>

        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-orange-400 font-semibold">extends</span> kalit so&apos;zi bilan boshqa classdan meros olish mumkin.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Asosiy class
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(\`\${this.name} ovoz chiqaradi\`);
    }
}

// Meros olish
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Ota-class constructor
        this.breed = breed;
    }
    
    speak() {
        console.log(\`\${this.name} vov-vov deydi\`);
    }
    
    fetch() {
        console.log(\`\${this.name} to'pni olib keldi\`);
    }
}

let dog = new Dog('Rex', 'Labrador');
dog.speak(); // "Rex vov-vov deydi"
dog.fetch(); // "Rex to'pni olib keldi"`}
        />
      </div>

      {/* Static metodlar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Static metodlar</h2>
        </div>

        <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-indigo-400 font-semibold">static</span> metodlar class orqali chaqiriladi, obyekt orqali emas.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`class MathHelper {
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static PI = 3.14159;
}

// Class orqali chaqirish
console.log(MathHelper.add(5, 3)); // 8
console.log(MathHelper.multiply(4, 2)); // 8
console.log(MathHelper.PI); // 3.14159

// Obyekt yaratish shart emas!`}
        />
      </div>

      {/* Amaliy Misollar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Amaliy Misollar</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Bank Account</h3>
            <CodeBlock 
              language="javascript"
              code={`class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    }
    
    deposit(amount) {
        this.balance += amount;
        console.log(\`+\${amount}. Balans: \${this.balance}\`);
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Mablag\\'  yetarli emas!');
        } else {
            this.balance -= amount;
            console.log(\`-\${amount}. Balans: \${this.balance}\`);
        }
    }
}

let account = new BankAccount('Ali', 1000);
account.deposit(500); // +500. Balans: 1500
account.withdraw(300); // -300. Balans: 1200`}
            />
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Student</h3>
            <CodeBlock 
              language="javascript"
              code={`class Student {
    constructor(name, grades = []) {
        this.name = name;
        this.grades = grades;
    }
    
    addGrade(grade) {
        this.grades.push(grade);
    }
    
    getAverage() {
        let sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }
}

let student = new Student('Vali', [85, 90, 78]);
student.addGrade(92);
console.log(student.getAverage()); // 86.25`}
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
              <h3 className="text-xl font-semibold text-gray-200">Book class</h3>
            </div>
            <p className="text-gray-300">
              Kitob classini yarating (title, author, pages, read metodlari bilan).
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Calculator class</h3>
            </div>
            <p className="text-gray-300">
              Kalkulyator classini yarating (add, subtract, multiply, divide).
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Inheritance</h3>
            </div>
            <p className="text-gray-300">
              Person classidan Student va Teacher classlarini yarating.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-gray-200">Static metodlar</h3>
            </div>
            <p className="text-gray-300">
              Utility class yarating static metodlar bilan.
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
              title: "Kutubxona tizimi",
              desc: "Book va Library klasslarini yarating:",
              items: [
                "Book: title, author, isbn, available",
                "Library: books array, addBook(), removeBook(), findBook()",
                "borrowBook() va returnBook() metodlari",
                "getAvailableBooks() - mavjud kitoblar ro'yxati"
              ]
            },
            {
              num: "2",
              title: "Talabalar boshqaruvi",
              desc: "Student va Course klasslarini yarating:",
              items: [
                "Student: name, id, courses[], addCourse(), removeCourse()",
                "Course: name, code, credits, students[]",
                "enrollStudent() - talabani kursga yozish",
                "getStudentGPA() - o'rtacha bahoni hisoblash"
              ]
            },
            {
              num: "3",
              title: "E-commerce",
              desc: "Product, Cart, va Order klasslarini yarating:",
              items: [
                "Product: name, price, stock, category",
                "Cart: items[], addItem(), removeItem(), getTotal()",
                "Order: cart, customer, status, calculateTotal()",
                "applyDiscount() metodi"
              ]
            },
            {
              num: "4",
              title: "O'yin personajlari",
              desc: "Character base klassi va undan meros oladigan Warrior, Mage, Archer klasslarini yarating. Har birida: health, attack(), defend(), specialAbility(). Ikki personaj o'rtasida jang simulyatsiyasi."
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
          href="/docs/javascript/prototypes" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Prototypes</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/modules" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-pink-200">Keyingi</div>
            <div className="text-white font-medium">Modules</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
