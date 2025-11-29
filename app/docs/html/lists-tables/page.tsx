"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { List, Sparkles, Table, Play } from "lucide-react";

export default function HTMLListsTablesPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-orange-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-full text-sm mb-6">
            <List className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-300 font-semibold">LISTS & TABLES</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 mb-4">
            Ro'yxat va Jadvallar
          </h1>
          <p className="text-2xl text-gray-300">
            Ma'lumotlarni tartibli ko'rsatish
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
          <p className="text-gray-400 mb-4">Ro'yxat va Jadvallar - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-yellow-500/50 transition-all">
            <div className="text-center">
              <Play className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ro'yxatlar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Ro&apos;yxatlar (Lists)</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-medium text-green-400 mb-4">Tartibsiz ro&apos;yxat (ul)</h3>
            <p className="text-gray-300 mb-4">Nuqtali ro&apos;yxat</p>
            <CodeBlock 
              language="HTML"
              code={`<ul>
  <li>Olma</li>
  <li>Banan</li>
  <li>Apelsin</li>
</ul>`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-2xl font-medium text-blue-400 mb-4">Tartiblangan ro&apos;yxat (ol)</h3>
            <p className="text-gray-300 mb-4">Raqamli ro&apos;yxat</p>
            <CodeBlock 
              language="HTML"
              code={`<ol>
  <li>Birinchi qadam</li>
  <li>Ikkinchi qadam</li>
  <li>Uchinchi qadam</li>
</ol>`}
            />
          </div>
        </div>

        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30 mb-6">
          <h3 className="text-2xl font-medium text-purple-400 mb-4">Ichma-ich ro&apos;yxat</h3>
          <CodeBlock 
            language="HTML"
            code={`<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Python</li>
      <li>Node.js</li>
      <li>PHP</li>
    </ul>
  </li>
</ul>`}
          />
        </div>
      </div>

      {/* Jadvallar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Jadvallar (Tables)</h2>
        
        <div className="bg-gradient-to-r from-orange-500/5 to-red-500/5 border-l-4 border-orange-500 p-6 rounded-r mb-6">
          <p className="text-gray-300 text-lg">
            Jadval yaratish uchun: <code className="bg-gray-800 px-2 py-1 rounded text-orange-400">table</code>, 
            <code className="bg-gray-800 px-2 py-1 rounded text-orange-400 ml-1">tr</code> (qator), 
            <code className="bg-gray-800 px-2 py-1 rounded text-orange-400 ml-1">td</code> (katak)
          </p>
        </div>

        <div className="mb-8">
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

        <div className="mb-8">
          <h3 className="text-2xl font-medium text-gray-100 mb-4">To&apos;liq jadval tuzilmasi</h3>
          <CodeBlock 
            language="HTML"
            code={`<table border="1">
  <thead>
    <tr>
      <th>Mahsulot</th>
      <th>Narxi</th>
      <th>Soni</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Olma</td>
      <td>5000</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Banan</td>
      <td>8000</td>
      <td>5</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Jami:</td>
      <td colspan="2">90000 so'm</td>
    </tr>
  </tfoot>
</table>`}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
            <p className="text-gray-300">
              <code className="text-blue-400 font-mono">colspan</code> - Gorizontal birlashtirish
            </p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
            <p className="text-gray-300">
              <code className="text-blue-400 font-mono">rowspan</code> - Vertikal birlashtirish
            </p>
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
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Xarid ro&apos;yxati</h3>
              <p className="text-gray-300 mb-4">Do&apos;konga borishdan oldin xarid ro&apos;yxati yarating (ul)</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Retsept bosqichlari</h3>
              <p className="text-gray-300 mb-4">Taom tayyorlash bosqichlarini tartiblangan ro&apos;yxatda yozing (ol)</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Dars jadvali</h3>
              <p className="text-gray-300 mb-4">Haftalik dars jadvalingizni jadval ko&apos;rinishida yarating</p>
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
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Narxlar jadvali</h3>
                  <p className="text-gray-300 mb-4">3 xil tarifni taqqoslaydigan jadval yarating</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Tarif nomlari (Oddiy, Pro, Premium)</li>
                    <li>Narxlar</li>
                    <li>Xususiyatlar ro&apos;yxati</li>
                    <li>thead, tbody, tfoot ishlatish</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">2️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Maqolalar ro&apos;yxati</h3>
                  <p className="text-gray-300 mb-4">Blog uchun maqolalar ro&apos;yxati:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Kategoriyalar (ichma-ich ul)</li>
                    <li>Har bir kategoriyada 3-5 ta maqola</li>
                    <li>Maqola nomlari havolalar bilan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/html/attributes" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Atributlar
        </Link>
        
        <Link href="/docs/html/forms" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Formalar
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
