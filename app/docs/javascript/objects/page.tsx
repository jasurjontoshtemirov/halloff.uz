"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Box, Key, Code2, Sparkles, Database, Layers } from "lucide-react";

export default function JavaScriptObjectsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full text-sm mb-6">
            <Box className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 font-semibold">OBJEKTLAR</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 mb-4">
            Objektlar
          </h1>
          <p className="text-2xl text-gray-300">
            Object bilan ishlash va metodlar
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
          <p className="text-gray-400 mb-4">Objects - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-yellow-500/50 transition-all">
            <div className="text-center">
              <Code2 className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Object nima */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
            <Database className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Object nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400 font-semibold">Object</span> - bu key-value juftliklaridan iborat ma&apos;lumot tuzilmasi.
          </p>
        </div>

        <CodeBlock 
          language="javascript"
          code={`// Object yaratish
let person = {
    name: "Ali",
    age: 25,
    city: "Toshkent",
    isStudent: true
};

console.log(person);

// Qiymatlarga murojaat
console.log(person.name);     // "Ali"
console.log(person["age"]);   // 25

// O'zgartirish
person.age = 26;
person.city = "Samarqand";

// Yangi xususiyat qo'shish
person.email = "ali@example.com";

console.log(person);`}
        />
      </div>

      {/* Object Metodlari */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Key className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Object Metodlari</h2>
        </div>

        <CodeBlock 
          language="javascript"
          code={`let person = {
    name: "Ali",
    age: 25,
    // Metod
    greet: function() {
        console.log("Salom, mening ismim " + this.name);
    },
    // Qisqa yozuv
    sayAge() {
        console.log("Men " + this.age + " yoshdaman");
    }
};

person.greet();   // "Salom, mening ismim Ali"
person.sayAge();  // "Men 25 yoshdaman"

// Object.keys() - barcha keylarni olish
console.log(Object.keys(person)); // ["name", "age", "greet", "sayAge"]

// Object.values() - barcha qiymatlarni olish
console.log(Object.values(person));

// Object.entries() - key-value juftliklarini olish
console.log(Object.entries(person));`}
        />
      </div>

      {/* Amaliy Misollar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Amaliy Misollar</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Talaba obyekti</h3>
            <CodeBlock 
              language="javascript"
              code={`let student = {
    name: "Vali",
    age: 20,
    grades: [85, 90, 78, 92],
    getAverage() {
        let sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }
};

console.log(student.getAverage()); // 86.25`}
            />
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">Mahsulot obyekti</h3>
            <CodeBlock 
              language="javascript"
              code={`let product = {
    name: "Telefon",
    price: 5000000,
    discount: 15,
    getFinalPrice() {
        return this.price * (1 - this.discount / 100);
    }
};

console.log(product.getFinalPrice()); // 4250000`}
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
        
        <div className="bg-gray-900/50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq: Kitob obyekti</h3>
          <p className="text-gray-300">
            Kitob obyekti yarating (title, author, pages, read). read metodini qo&apos;shing.
          </p>
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
              title: "Shaxsiy profil",
              desc: "O'zingiz haqingizda to'liq obyekt yarating:",
              items: [
                "firstName, lastName, age, city, hobby (array)",
                "getFullName() metodi",
                "introduce() metodi - o'zingizni tanishtiring",
                "addHobby() metodi - yangi hobbi qo'shish"
              ]
            },
            {
              num: "2",
              title: "Avtomobil obyekti",
              desc: "Avtomobil obyekti yarating:",
              items: [
                "brand, model, year, price, color",
                "getAge() - avtomobil yoshini hisoblash",
                "applyDiscount(percent) - chegirma qo'llash",
                "getInfo() - barcha ma'lumotlarni chiroyli formatda qaytarish"
              ]
            },
            {
              num: "3",
              title: "Bank hisobi",
              desc: "Bank hisobi obyekti yarating:",
              items: [
                "accountNumber, ownerName, balance",
                "deposit(amount) - pul qo'shish",
                "withdraw(amount) - pul yechish (balansni tekshiring)",
                "getBalance() - balansni ko'rsatish",
                "transfer(amount, targetAccount) - boshqa hisobga o'tkazish"
              ]
            },
            {
              num: "4",
              title: "Restoran menyusi",
              desc: "Restoran menyusi obyekti yarating (ichida ovqatlar array). Har bir ovqat obyekt: name, price, category, available. Metodlar: addDish(), removeDish(), getAvailableDishes(), getTotalPrice()"
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
          href="/docs/javascript/arrays" 
          className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500">Oldingi</div>
            <div className="text-white font-medium">Arrays</div>
          </div>
        </Link>
        
        <Link 
          href="/docs/javascript/dom" 
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 rounded-xl transition-all"
        >
          <div className="text-right">
            <div className="text-xs text-amber-200">Keyingi</div>
            <div className="text-white font-medium">DOM</div>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
