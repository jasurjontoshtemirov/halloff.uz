"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { List, Table, Grid, Play } from "lucide-react";

export default function HTMLListsTablesPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-sm mb-6">
            <List className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 font-semibold">LISTS & TABLES</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4">
            Ro'yxat va Jadvallar
          </h1>
          <p className="text-2xl text-gray-300">
            Ma'lumotlarni tartibli ko'rsatish usullari
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="aspect-video rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition-all">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/l-GaRkk5t2Y?si=Obr_bKief63PlVP0" 
            title="Ro'yxat va Jadvallar - Video dars"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Tartibsiz ro'yxat */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Tartibsiz Ro'yxat (ul)</h2>
        <p className="text-gray-300 mb-6 text-lg">
          <code className="bg-gray-800 px-2 py-1 rounded text-indigo-400">&lt;ul&gt;</code> (unordered list) - nuqtalar bilan ro'yxat yaratadi.
        </p>
        
        <CodeBlock 
          language="HTML"
          code={`<!-- Oddiy ro'yxat -->
<ul>
  <li>Olma</li>
  <li>Banan</li>
  <li>Apelsin</li>
</ul>

<!-- Ichma-ich ro'yxat -->
<ul>
  <li>Mevalar
    <ul>
      <li>Olma</li>
      <li>Banan</li>
    </ul>
  </li>
  <li>Sabzavotlar
    <ul>
      <li>Pomidor</li>
      <li>Bodring</li>
    </ul>
  </li>
</ul>`}
        />

        <div className="mt-6 bg-indigo-500/10 border-l-4 border-indigo-500 p-4 rounded-r">
          <p className="text-gray-300">
            <strong className="text-indigo-400">Eslatma:</strong> <code className="bg-gray-800 px-2 py-1 rounded">ul</code> ichida faqat <code className="bg-gray-800 px-2 py-1 rounded">li</code> elementlari bo'lishi kerak.
          </p>
        </div>
      </div>

      {/* Tartiblangan ro'yxat */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Tartiblangan Ro'yxat (ol)</h2>
        <p className="text-gray-300 mb-6 text-lg">
          <code className="bg-gray-800 px-2 py-1 rounded text-purple-400">&lt;ol&gt;</code> (ordered list) - raqamlar bilan ro'yxat yaratadi.
        </p>
        
        <CodeBlock 
          language="HTML"
          code={`<!-- Oddiy tartiblangan ro'yxat -->
<ol>
  <li>Birinchi qadam</li>
  <li>Ikkinchi qadam</li>
  <li>Uchinchi qadam</li>
</ol>

<!-- Boshqa raqam bilan boshlash -->
<ol start="5">
  <li>Beshinchi qadam</li>
  <li>Oltinchi qadam</li>
</ol>

<!-- Teskari tartib -->
<ol reversed>
  <li>Oxirgi qadam</li>
  <li>Oxiridan ikkinchi</li>
  <li>Oxiridan uchinchi</li>
</ol>

<!-- Turli xil raqamlash -->
<ol type="A">
  <li>A harfi</li>
  <li>B harfi</li>
</ol>

<ol type="I">
  <li>Rim raqami I</li>
  <li>Rim raqami II</li>
</ol>`}
        />

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong className="text-purple-400">type="1"</strong> - Oddiy raqamlar (default)
            </p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong className="text-purple-400">type="A"</strong> - Katta harflar
            </p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong className="text-purple-400">type="a"</strong> - Kichik harflar
            </p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong className="text-purple-400">type="I"</strong> - Rim raqamlari
            </p>
          </div>
        </div>
      </div>

      {/* Tavsif ro'yxati */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Tavsif Ro'yxati (dl)</h2>
        <p className="text-gray-300 mb-6 text-lg">
          <code className="bg-gray-800 px-2 py-1 rounded text-pink-400">&lt;dl&gt;</code> (description list) - atama va tavsiflar ro'yxati.
        </p>
        
        <CodeBlock 
          language="HTML"
          code={`<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language - veb sahifalar yaratish tili</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets - sahifalarni bezash tili</dd>
  
  <dt>JavaScript</dt>
  <dd>Veb sahifalarga interaktivlik qo'shuvchi dasturlash tili</dd>
  <dd>Eng mashhur dasturlash tillaridan biri</dd>
</dl>`}
        />

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="bg-pink-500/10 border border-pink-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong className="text-pink-400">dl</strong> - Description List
            </p>
          </div>
          <div className="bg-pink-500/10 border border-pink-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong className="text-pink-400">dt</strong> - Description Term (atama)
            </p>
          </div>
          <div className="bg-pink-500/10 border border-pink-500/30 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong className="text-pink-400">dd</strong> - Description Details (tavsif)
            </p>
          </div>
        </div>
      </div>

      {/* Jadvallar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Jadvallar (table)</h2>
        <p className="text-gray-300 mb-6 text-lg">
          Jadvallar ma'lumotlarni qator va ustunlarda ko'rsatish uchun ishlatiladi.
        </p>
        
        <div className="space-y-8">
          {/* Oddiy jadval */}
          <div>
            <h3 className="text-2xl font-medium text-gray-100 mb-4">Oddiy jadval</h3>
            <CodeBlock 
              language="HTML"
              code={`<table>
  <tr>
    <th>Ism</th>
    <th>Yosh</th>
    <th>Shahar</th>
  </tr>
  <tr>
    <td>Ali</td>
    <td>25</td>
    <td>Toshkent</td>
  </tr>
  <tr>
    <td>Vali</td>
    <td>30</td>
    <td>Samarqand</td>
  </tr>
</table>`}
            />
          </div>

          {/* To'liq jadval */}
          <div>
            <h3 className="text-2xl font-medium text-gray-100 mb-4">To'liq jadval tuzilishi</h3>
            <CodeBlock 
              language="HTML"
              code={`<table>
  <caption>Talabalar ro'yxati</caption>
  
  <thead>
    <tr>
      <th>ID</th>
      <th>Ism</th>
      <th>Guruh</th>
      <th>Baho</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>1</td>
      <td>Ahmad</td>
      <td>IT-21</td>
      <td>5</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Fatima</td>
      <td>IT-21</td>
      <td>4</td>
    </tr>
  </tbody>
  
  <tfoot>
    <tr>
      <td colspan="3">Jami talabalar:</td>
      <td>2</td>
    </tr>
  </tfoot>
</table>`}
            />
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h4 className="text-lg font-medium text-gray-100 mb-3">Jadval elementlari</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><code className="text-cyan-400">table</code> - Jadval konteyner</li>
              <li><code className="text-cyan-400">caption</code> - Jadval sarlavhasi</li>
              <li><code className="text-cyan-400">thead</code> - Jadval boshi</li>
              <li><code className="text-cyan-400">tbody</code> - Jadval tanasi</li>
              <li><code className="text-cyan-400">tfoot</code> - Jadval oxiri</li>
            </ul>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
            <h4 className="text-lg font-medium text-gray-100 mb-3">Qator va katak</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><code className="text-green-400">tr</code> - Table Row (qator)</li>
              <li><code className="text-green-400">th</code> - Table Header (sarlavha katak)</li>
              <li><code className="text-green-400">td</code> - Table Data (ma'lumot katak)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Jadval atributlari */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Jadval Atributlari</h2>
        
        <CodeBlock 
          language="HTML"
          code={`<!-- colspan - bir nechta ustunni birlashtirish -->
<table>
  <tr>
    <th colspan="2">Ism va Familiya</th>
    <th>Yosh</th>
  </tr>
  <tr>
    <td>Ahmad</td>
    <td>Karimov</td>
    <td>25</td>
  </tr>
</table>

<!-- rowspan - bir nechta qatorni birlashtirish -->
<table>
  <tr>
    <td rowspan="2">IT</td>
    <td>Frontend</td>
  </tr>
  <tr>
    <td>Backend</td>
  </tr>
</table>

<!-- scope - sarlavha qamrovi -->
<table>
  <tr>
    <th scope="col">Ism</th>
    <th scope="col">Yosh</th>
  </tr>
  <tr>
    <th scope="row">Ahmad</th>
    <td>25</td>
  </tr>
</table>`}
        />
      </div>

      {/* Amaliy mashq */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-500 p-8 rounded-r">
          <h2 className="text-3xl font-semibold text-gray-100 mb-4 flex items-center gap-3">
            <span className="text-4xl">💻</span> Amaliy mashq
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Quyidagi ma'lumotlarni jadval ko'rinishida yarating:
          </p>
          
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <p className="text-gray-300 mb-2"><strong>Mahsulotlar jadvali:</strong></p>
            <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
              <li>Nomi, Narxi, Miqdor ustunlari</li>
              <li>3 ta mahsulot qatori</li>
              <li>Oxirida "Jami" qatori (colspan ishlatib)</li>
            </ul>
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
            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Menyular ro'yxati</h3>
              <p className="text-gray-300 mb-4">Restoran menyusi yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Asosiy taomlar (ul)</li>
                <li>Ichimliklar (ul)</li>
                <li>Shirinliklar (ul)</li>
                <li>Har bir bo'limda kamida 4 ta element</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Qadamlar ro'yxati</h3>
              <p className="text-gray-300 mb-4">Biror ishni bajarish qadamlari (ol):</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Kamida 7 ta qadam</li>
                <li>Ba'zi qadamlar ichida kichik ro'yxat</li>
                <li>Har xil type ishlatib ko'ring</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Talabalar jadvali</h3>
              <p className="text-gray-300 mb-4">Sinf jurnali yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Ism, Guruh, Matematika, Fizika, Kimyo ustunlari</li>
                <li>5 ta talaba qatori</li>
                <li>caption, thead, tbody ishlatib</li>
                <li>Oxirida o'rtacha baho (colspan)</li>
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
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Kompaniya tuzilmasi</h3>
                  <p className="text-gray-300 mb-4">Kompaniya bo'limlarini ko'rsatuvchi ro'yxat:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Asosiy bo'limlar (ul)</li>
                    <li>Har bir bo'limda xodimlar (ichma-ich ol)</li>
                    <li>Lavozimlar va mas'uliyatlar (dl)</li>
                    <li>Kamida 3 bo'lim, har birida 4-5 xodim</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 1-1.5 soat | 📊 Qiyinlik: O'rta</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">2️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Moliyaviy hisobot</h3>
                  <p className="text-gray-300 mb-4">Kompaniya moliyaviy jadvali:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Oylar, Daromad, Xarajat, Foyda ustunlari</li>
                    <li>12 oy ma'lumoti</li>
                    <li>Chorak yakunlari (rowspan/colspan)</li>
                    <li>Yillik jami (tfoot)</li>
                    <li>To'liq jadval tuzilmasi (caption, thead, tbody, tfoot)</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 1.5-2 soat | 📊 Qiyinlik: Qiyin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Qo'shimcha resurslar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">📚 Qo'shimcha resurslar</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2">📋 HTML Lists Guide</h3>
            <p className="text-gray-400 text-sm mb-3">Ro'yxatlar haqida batafsil</p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul" target="_blank" rel="noopener noreferrer" 
               className="text-indigo-400 hover:text-indigo-300 text-sm">
              MDN Lists →
            </a>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2">📊 HTML Tables Guide</h3>
            <p className="text-gray-400 text-sm mb-3">Jadvallar haqida batafsil</p>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" target="_blank" rel="noopener noreferrer"
               className="text-purple-400 hover:text-purple-300 text-sm">
              MDN Tables →
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/html/elements" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: HTML Elementlari
        </Link>
        
        <Link href="/docs/html/forms" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: HTML Formalar
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}