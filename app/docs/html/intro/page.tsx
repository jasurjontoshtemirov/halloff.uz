"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Code, Sparkles, FileCode, Play, Layers } from "lucide-react";

export default function HTMLIntroPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-sm mb-6">
            <Code className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 font-semibold">HTML KIRISH</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 mb-4">
            HTML ga Kirish
          </h1>
          <p className="text-2xl text-gray-300">
            Web dasturlashning birinchi qadami
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
          <p className="text-gray-400 mb-4">HTML ga Kirish - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-orange-500/50 transition-all">
            <div className="text-center">
              <Play className="w-16 h-16 text-orange-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* HTML nima? */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">HTML nima?</h2>
        <div className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border-l-4 border-blue-500 p-6 rounded-r">
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            <strong className="text-blue-400">HTML</strong> (HyperText Markup Language) - bu web sahifalarni yaratish uchun ishlatiladigan til. 
            Bu dasturlash tili emas, balki sahifa tuzilmasini belgilovchi <strong>markup tili</strong>dir.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            HTML yordamida biz matnlar, rasmlar, videolar, havolalar va boshqa elementlarni 
            web sahifaga joylashtira olamiz. Xuddi uy qurish uchun g&apos;isht va beton kerak bo&apos;lgani kabi, 
            web sahifa uchun HTML kerak!
          </p>
        </div>
      </div>

      {/* Real World Analogy */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Real hayotdan misol 🏗️</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <div className="text-4xl mb-3">🏠</div>
            <h3 className="text-xl font-medium text-gray-100 mb-2">HTML = Bino</h3>
            <p className="text-gray-400">Uyning asosiy tuzilmasi, devorlar, xonalar</p>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-xl font-medium text-gray-100 mb-2">CSS = Dizayn</h3>
            <p className="text-gray-400">Ranglar, bezaklar, mebel joylashuvi</p>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-medium text-gray-100 mb-2">JavaScript = Elektr</h3>
            <p className="text-gray-400">Chiroqlar, lift, eshiklar - harakatlanuvchi qismlar</p>
          </div>
        </div>
      </div>

      {/* Nima uchun o'rganish kerak */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Nima uchun HTML o&apos;rganish kerak?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-6 rounded-xl border border-blue-500/20">
            <h3 className="text-xl font-medium text-gray-100 mb-3 flex items-center gap-2">
              <span className="text-2xl">🌐</span> Internet asosi
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Internetdagi <strong>barcha</strong> web sahifalar HTML da yozilgan. 
              Google, Facebook, YouTube - hammasi HTML bilan boshlanadi!
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-6 rounded-xl border border-green-500/20">
            <h3 className="text-xl font-medium text-gray-100 mb-3 flex items-center gap-2">
              <span className="text-2xl">📱</span> Universal
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Bir marta yozasiz - hamma joyda ishlaydi: telefon, planshet, kompyuter, 
              hatto smart TV larda ham!
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-6 rounded-xl border border-purple-500/20">
            <h3 className="text-xl font-medium text-gray-100 mb-3 flex items-center gap-2">
              <span className="text-2xl">🎓</span> Oson o&apos;rganish
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Dasturlash tajribasiz ham o&apos;rganish mumkin. Faqat 1-2 hafta ichida 
              o&apos;z web sahifangizni yaratishingiz mumkin!
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 p-6 rounded-xl border border-orange-500/20">
            <h3 className="text-xl font-medium text-gray-100 mb-3 flex items-center gap-2">
              <span className="text-2xl">💰</span> Karyera imkoniyati
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Web developer bo&apos;lishning birinchi qadami. O&apos;rtacha maosh: $50,000 - $120,000/yil
            </p>
          </div>
        </div>
      </div>

      {/* Birinchi HTML sahifa */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-4">Birinchi HTML sahifangiz 🚀</h2>
        <p className="text-gray-300 mb-6 text-lg">
          Keling, eng oddiy HTML sahifani yaratib ko&apos;raylik. Bu kod har bir web sahifaning asosi:
        </p>
        
        <CodeBlock 
          language="HTML"
          code={`<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mening birinchi sahifam</title>
</head>
<body>
    <h1>Salom, Dunyo!</h1>
    <p>Bu mening birinchi HTML sahifam.</p>
    <p>Men web dasturchi bo'lyapman! 🎉</p>
</body>
</html>`}
        />
      </div>

      {/* Kod tushuntirmasi - Interactive */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Kod tushuntirmasi 📖</h2>
        <div className="space-y-4">
          <div className="bg-[#1a1f2e] p-5 rounded-xl border border-blue-500/30">
            <div className="flex gap-4 items-start">
              <code className="text-blue-400 font-mono text-base bg-blue-500/20 px-4 py-2 rounded-lg whitespace-nowrap">
                &lt;!DOCTYPE html&gt;
              </code>
              <div className="flex-1">
                <p className="text-gray-300 font-medium mb-1">HTML5 deklaratsiyasi</p>
                <p className="text-gray-400 text-sm">Brauzerga &quot;Bu HTML5 hujjat&quot; deb aytadi. Har doim birinchi qatorda yoziladi.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1a1f2e] p-5 rounded-xl border border-green-500/30">
            <div className="flex gap-4 items-start">
              <code className="text-green-400 font-mono text-base bg-green-500/20 px-4 py-2 rounded-lg whitespace-nowrap">
                &lt;html&gt;
              </code>
              <div className="flex-1">
                <p className="text-gray-300 font-medium mb-1">Asosiy konteyner</p>
                <p className="text-gray-400 text-sm">Butun HTML hujjatni o&apos;rab turadi. Barcha boshqa elementlar shu ichida.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1a1f2e] p-5 rounded-xl border border-purple-500/30">
            <div className="flex gap-4 items-start">
              <code className="text-purple-400 font-mono text-base bg-purple-500/20 px-4 py-2 rounded-lg whitespace-nowrap">
                &lt;head&gt;
              </code>
              <div className="flex-1">
                <p className="text-gray-300 font-medium mb-1">Meta ma&apos;lumotlar</p>
                <p className="text-gray-400 text-sm">Sahifa haqida ma&apos;lumot: sarlavha, kodlash, stillar. Foydalanuvchi ko&apos;rmaydi.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1a1f2e] p-5 rounded-xl border border-orange-500/30">
            <div className="flex gap-4 items-start">
              <code className="text-orange-400 font-mono text-base bg-orange-500/20 px-4 py-2 rounded-lg whitespace-nowrap">
                &lt;body&gt;
              </code>
              <div className="flex-1">
                <p className="text-gray-300 font-medium mb-1">Asosiy kontent</p>
                <p className="text-gray-400 text-sm">Sahifaning ko&apos;rinadigan qismi. Barcha matn, rasm, video shu yerda.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amaliy mashq */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-500 p-8 rounded-r">
          <h2 className="text-3xl font-semibold text-gray-100 mb-4 flex items-center gap-3">
            <span className="text-4xl">💻</span> Amaliy mashq
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Endi o&apos;zingiz sinab ko&apos;ring! Quyidagi qadamlarni bajaring:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">1.</strong> Kompyuteringizda yangi papka yarating: <code className="bg-gray-800 px-2 py-1 rounded">mening-saytim</code></p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">2.</strong> Notepad yoki VS Code da yangi fayl oching</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">3.</strong> Yuqoridagi kodni nusxalab, faylga joylashtiring</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">4.</strong> Faylni <code className="bg-gray-800 px-2 py-1 rounded">index.html</code> nomi bilan saqlang</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">5.</strong> Faylni brauzerda oching (ikki marta bosing)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Darsdagi topshiriqlar */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">📝</span> Darsdagi topshiriqlar
          </h2>
          
          <div className="space-y-6">
            {/* Topshiriq 1 */}
            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: O&apos;zingiz haqingizda sahifa</h3>
              <p className="text-gray-300 mb-4">
                Yuqoridagi HTML shablonidan foydalanib, o&apos;zingiz haqingizda sahifa yarating:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Title ga o&apos;z ismingizni yozing</li>
                <li>H1 da o&apos;zingizni tanishtiring</li>
                <li>3 ta paragrafda: ismingiz, yoshingiz, qiziqishlaringiz haqida yozing</li>
              </ul>
            </div>

            {/* Topshiriq 2 */}
            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Sevimli taomingiz</h3>
              <p className="text-gray-300 mb-4">
                Sevimli taomingiz haqida HTML sahifa yarating:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Taom nomini sarlavha qiling</li>
                <li>Taom haqida 2-3 ta paragraf yozing</li>
                <li>Nima uchun yoqtirishingizni tushuntiring</li>
              </ul>
            </div>

            {/* Topshiriq 3 */}
            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Xato toping 🔍</h3>
              <p className="text-gray-300 mb-4">
                Quyidagi kodda 3 ta xato bor. Topib, to&apos;g&apos;rilang:
              </p>
              <CodeBlock 
                language="HTML"
                code={`<!DOCTYPE html>
<html>
<head>
    <title>Xatoli sahifa
</head>
<body>
    <h1>Salom</h2>
    <p>Bu xatoli kod
</body>
</html>`}
              />
              <div className="mt-4 bg-gray-800/50 p-4 rounded">
                <p className="text-gray-400 text-sm">
                  <strong>Maslahat:</strong> Title tegi, h1 tegi va p tegida xatolar bor
                </p>
              </div>
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
            {/* Vazifa 1 */}
            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">1️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Portfolio sahifasi yarating</h3>
                  <p className="text-gray-300 mb-4">
                    O&apos;zingizning birinchi portfolio sahifangizni yarating. Quyidagilarni qo&apos;shing:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Ism va familiyangiz (h1 da)</li>
                    <li>Kasbingiz yoki o&apos;rganayotgan yo&apos;nalishingiz (h2 da)</li>
                    <li>O&apos;zingiz haqida 3-4 ta paragraf</li>
                    <li>Maqsadlaringiz va orzularingiz</li>
                    <li>Aloqa ma&apos;lumotlari (email, telefon)</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">
                      ⏱️ Vaqt: 30-45 daqiqa | 📊 Qiyinlik: Oson
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vazifa 2 */}
            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">2️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">5 ta turli sahifa yarating</h3>
                  <p className="text-gray-300 mb-4">
                    Har xil mavzularda 5 ta alohida HTML sahifa yarating:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li><strong>hobby.html</strong> - Sevimli mashg&apos;ulotingiz haqida</li>
                    <li><strong>book.html</strong> - Sevimli kitobingiz haqida</li>
                    <li><strong>city.html</strong> - Yashayotgan shahringiz haqida</li>
                    <li><strong>dream.html</strong> - Orzularingiz haqida</li>
                    <li><strong>tech.html</strong> - Texnologiya va dasturlash haqida</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">
                      ⏱️ Vaqt: 1-1.5 soat | 📊 Qiyinlik: O&apos;rta
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vazifa 3 - Bonus */}
            <div className="bg-gray-900/50 p-6 rounded-lg border border-pink-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">⭐</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-pink-400 mb-3">Bonus: Kod o&apos;qish mashqi</h3>
                  <p className="text-gray-300 mb-4">
                    Internetdagi mashhur saytlarning HTML kodini ko&apos;ring:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Brauzerda istalgan saytni oching</li>
                    <li>Sichqoncha o&apos;ng tugmasini bosing → &quot;View Page Source&quot; yoki F12</li>
                    <li>HTML kodini o&apos;rganing va tushunishga harakat qiling</li>
                    <li>Qiziq elementlarni topib, o&apos;z sahifangizda sinab ko&apos;ring</li>
                  </ul>
                  <div className="mt-4 bg-pink-500/10 p-3 rounded">
                    <p className="text-pink-300 text-sm">
                      💡 Bu mashq sizga real web sahifalar qanday qurilganini tushunishga yordam beradi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Qo'shimcha resurslar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">📚 Qo&apos;shimcha resurslar</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2">🌐 MDN Web Docs</h3>
            <p className="text-gray-400 text-sm mb-3">HTML bo&apos;yicha eng to&apos;liq qo&apos;llanma</p>
            <a href="https://developer.mozilla.org/uz/docs/Web/HTML" target="_blank" rel="noopener noreferrer" 
               className="text-blue-400 hover:text-blue-300 text-sm">
              developer.mozilla.org →
            </a>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2">✍️ W3Schools</h3>
            <p className="text-gray-400 text-sm mb-3">Interaktiv HTML darslari</p>
            <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer"
               className="text-green-400 hover:text-green-300 text-sm">
              w3schools.com →
            </a>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2">🎮 FreeCodeCamp</h3>
            <p className="text-gray-400 text-sm mb-3">Bepul HTML kurslari</p>
            <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer"
               className="text-purple-400 hover:text-purple-300 text-sm">
              freecodecamp.org →
            </a>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2">💬 HTML Validator</h3>
            <p className="text-gray-400 text-sm mb-3">Kodingizni tekshiring</p>
            <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer"
               className="text-orange-400 hover:text-orange-300 text-sm">
              validator.w3.org →
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <div className="text-gray-500">
          <p className="text-sm">Oldingi dars</p>
          <p className="text-gray-600">Yo&apos;q</p>
        </div>
        
        <Link href="/docs/html/elements" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi dars: HTML Elementlari
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
