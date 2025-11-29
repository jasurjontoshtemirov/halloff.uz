"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { FileInput, Sparkles, CheckSquare, Play } from "lucide-react";

export default function HTMLFormsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-indigo-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/30 rounded-full text-sm mb-6">
            <FileInput className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-semibold">HTML FORMS</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 mb-4">
            HTML Formalar
          </h1>
          <p className="text-2xl text-gray-300">
            Foydalanuvchidan ma'lumot olish
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
          <p className="text-gray-400 mb-4">HTML Formalar - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-purple-500/50 transition-all">
            <div className="text-center">
              <Play className="w-16 h-16 text-purple-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form asoslari */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Form nima?</h2>
        <div className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border-l-4 border-blue-500 p-6 rounded-r mb-6">
          <p className="text-gray-300 leading-relaxed text-lg">
            <strong className="text-blue-400">Form</strong> - foydalanuvchidan ma&apos;lumot to&apos;plash uchun ishlatiladi. 
            Ro&apos;yxatdan o&apos;tish, izlash, xabar yuborish va boshqalar.
          </p>
        </div>

        <CodeBlock 
          language="HTML"
          code={`<form action="/submit" method="POST">
  <!-- Form elementlari shu yerda -->
  <button type="submit">Yuborish</button>
</form>`}
        />
      </div>

      {/* Input turlari */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Input Turlari</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-green-400 mb-3">Text - Matn kiritish</h3>
            <CodeBlock 
              language="HTML"
              showHeader={false}
              code={`<input type="text" placeholder="Ismingiz">`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-green-400 mb-3">Email - Email manzil</h3>
            <CodeBlock 
              language="HTML"
              showHeader={false}
              code={`<input type="email" placeholder="email@example.com">`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-green-400 mb-3">Password - Parol</h3>
            <CodeBlock 
              language="HTML"
              showHeader={false}
              code={`<input type="password" placeholder="Parol">`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-green-400 mb-3">Number - Raqam</h3>
            <CodeBlock 
              language="HTML"
              showHeader={false}
              code={`<input type="number" min="1" max="100">`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-green-400 mb-3">Date - Sana</h3>
            <CodeBlock 
              language="HTML"
              showHeader={false}
              code={`<input type="date">`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-green-400 mb-3">File - Fayl yuklash</h3>
            <CodeBlock 
              language="HTML"
              showHeader={false}
              code={`<input type="file" accept="image/*">`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-green-400 mb-3">Checkbox - Belgilash</h3>
            <CodeBlock 
              language="HTML"
              showHeader={false}
              code={`<input type="checkbox" id="agree">
<label for="agree">Roziman</label>`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-medium text-green-400 mb-3">Radio - Tanlash</h3>
            <CodeBlock 
              language="HTML"
              showHeader={false}
              code={`<input type="radio" name="gender" value="male"> Erkak
<input type="radio" name="gender" value="female"> Ayol`}
            />
          </div>
        </div>
      </div>

      {/* Boshqa form elementlari */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Boshqa Form Elementlari</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-medium text-purple-400 mb-4">Textarea - Ko&apos;p qatorli matn</h3>
            <CodeBlock 
              language="HTML"
              code={`<textarea rows="5" cols="50" placeholder="Xabaringiz..."></textarea>`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-medium text-blue-400 mb-4">Select - Tanlov ro&apos;yxati</h3>
            <CodeBlock 
              language="HTML"
              code={`<select name="shahar">
  <option value="">Shaharni tanlang</option>
  <option value="toshkent">Toshkent</option>
  <option value="samarqand">Samarqand</option>
  <option value="buxoro">Buxoro</option>
</select>`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-xl font-medium text-orange-400 mb-4">Button - Tugma</h3>
            <CodeBlock 
              language="HTML"
              code={`<button type="submit">Yuborish</button>
<button type="reset">Tozalash</button>
<button type="button">Oddiy tugma</button>`}
            />
          </div>
        </div>
      </div>

      {/* To'liq form misoli */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">To&apos;liq Form Misoli</h2>
        <CodeBlock 
          language="HTML"
          code={`<form action="/register" method="POST">
  <h2>Ro'yxatdan o'tish</h2>
  
  <label for="name">Ism:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="password">Parol:</label>
  <input type="password" id="password" name="password" required>
  
  <label for="age">Yosh:</label>
  <input type="number" id="age" name="age" min="18" max="100">
  
  <label>Jins:</label>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Erkak</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Ayol</label>
  
  <label for="country">Mamlakat:</label>
  <select id="country" name="country">
    <option value="uz">O'zbekiston</option>
    <option value="kz">Qozog'iston</option>
    <option value="tj">Tojikiston</option>
  </select>
  
  <input type="checkbox" id="terms" name="terms" required>
  <label for="terms">Shartlarga roziman</label>
  
  <button type="submit">Ro'yxatdan o'tish</button>
</form>`}
        />
      </div>

      {/* Darsdagi topshiriqlar */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">📝</span> Darsdagi topshiriqlar
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Aloqa formasi</h3>
              <p className="text-gray-300 mb-4">Oddiy aloqa formasi yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Ism (text)</li>
                <li>Email (email)</li>
                <li>Xabar (textarea)</li>
                <li>Yuborish tugmasi</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: So&apos;rovnoma</h3>
              <p className="text-gray-300 mb-4">Qisqa so&apos;rovnoma yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Yosh guruhi (radio)</li>
                <li>Qiziqishlar (checkbox - bir nechta)</li>
                <li>Fikr-mulohaza (textarea)</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Buyurtma formasi</h3>
              <p className="text-gray-300 mb-4">Mahsulot buyurtma formasi:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Mahsulot tanlash (select)</li>
                <li>Soni (number)</li>
                <li>Yetkazib berish sanasi (date)</li>
                <li>Manzil (textarea)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga vazifa */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">🏠</span> Uyga vazifa
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">1️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Ish uchun ariza formasi</h3>
                  <p className="text-gray-300 mb-4">To&apos;liq ish uchun ariza formasi yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Shaxsiy ma&apos;lumotlar (ism, email, telefon)</li>
                    <li>Tug&apos;ilgan sana (date)</li>
                    <li>Lavozim (select)</li>
                    <li>Tajriba (number - yillar)</li>
                    <li>Ko&apos;nikmalar (checkbox)</li>
                    <li>Resume yuklash (file)</li>
                    <li>Qo&apos;shimcha ma&apos;lumot (textarea)</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 1-1.5 soat | 📊 Qiyinlik: O&apos;rta</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">2️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Mehmonxona bron qilish</h3>
                  <p className="text-gray-300 mb-4">Mehmonxona xonasini bron qilish formasi:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Ism va familiya</li>
                    <li>Kelish va ketish sanasi (date)</li>
                    <li>Xona turi (radio)</li>
                    <li>Mehmonlar soni (number)</li>
                    <li>Qo&apos;shimcha xizmatlar (checkbox)</li>
                    <li>Maxsus so&apos;rovlar (textarea)</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 45-60 daqiqa | 📊 Qiyinlik: O&apos;rta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/html/lists-tables" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Ro&apos;yxat va Jadvallar
        </Link>
        
        <Link href="/docs/html/media" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Media Elementlari
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
