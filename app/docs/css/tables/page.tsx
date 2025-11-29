"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Table, Sparkles, Grid, Play } from "lucide-react";

export default function CSSTablesPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-orange-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-full text-sm mb-6">
            <Table className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 font-semibold">CSS TABLES</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 mb-4">
            CSS Tables
          </h1>
          <p className="text-2xl text-gray-300">
            Jadvallarni professional qilish
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-2xl p-8 hover:border-amber-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
          <p className="text-gray-400 mb-4">CSS Tables - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-amber-500/50 transition-all">
            <div className="text-center">
              <Play className="w-16 h-16 text-amber-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Table Styling */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Asosiy Table Stilash</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
          <CodeBlock 
            language="CSS"
            code={`table {
    width: 100%;
    border-collapse: collapse;  /* Chegaralarni birlashtirish */
    margin: 20px 0;
}

th, td {
    padding: 12px 15px;
    text-align: left;
    border: 1px solid #ddd;
}

th {
    background-color: #4CAF50;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
}

/* Alternating rows */
tr:nth-child(even) {
    background-color: #f2f2f2;
}

tr:hover {
    background-color: #ddd;
    cursor: pointer;
}`}
          />
        </div>
      </div>

      {/* Border Styles */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Border Stillari</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-medium text-green-400 mb-4">Border Collapse</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Separate borders */
table {
    border-collapse: separate;
    border-spacing: 10px;  /* Bo'shliq */
}

/* Collapsed borders */
table {
    border-collapse: collapse;
}

/* Only outer border */
table {
    border: 2px solid #333;
}

th, td {
    border: none;
    border-bottom: 1px solid #ddd;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-medium text-purple-400 mb-4">Rounded Table</h3>
            <CodeBlock 
              language="CSS"
              code={`table {
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #ddd;
}

th:first-child {
    border-top-left-radius: 10px;
}

th:last-child {
    border-top-right-radius: 10px;
}

tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
}

tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
}`}
            />
          </div>
        </div>
      </div>

      {/* Responsive Tables */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Responsive Tables</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-xl font-medium text-orange-400 mb-4">Scroll usuli</h3>
            <CodeBlock 
              language="CSS"
              code={`.table-container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

table {
    min-width: 600px;
}

@media (max-width: 768px) {
    .table-container {
        border: 1px solid #ddd;
        border-radius: 4px;
    }
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-medium text-cyan-400 mb-4">Stack usuli</h3>
            <CodeBlock 
              language="CSS"
              code={`@media (max-width: 768px) {
    table, thead, tbody, th, td, tr {
        display: block;
    }
    
    thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }
    
    tr {
        margin-bottom: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    
    td {
        border: none;
        position: relative;
        padding-left: 50%;
    }
    
    td::before {
        content: attr(data-label);
        position: absolute;
        left: 10px;
        font-weight: bold;
    }
}`}
            />
          </div>
        </div>
      </div>

      {/* Advanced Styling */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Ilg&apos;or Stillar</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-pink-500/30">
            <h3 className="text-xl font-medium text-pink-400 mb-4">Sticky Header</h3>
            <CodeBlock 
              language="CSS"
              code={`.table-container {
    max-height: 400px;
    overflow-y: auto;
}

thead th {
    position: sticky;
    top: 0;
    background-color: #4CAF50;
    z-index: 10;
    box-shadow: 0 2px 2px rgba(0,0,0,0.1);
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-yellow-500/30">
            <h3 className="text-xl font-medium text-yellow-400 mb-4">Sortable Table</h3>
            <CodeBlock 
              language="CSS"
              code={`th.sortable {
    cursor: pointer;
    user-select: none;
    position: relative;
    padding-right: 30px;
}

th.sortable::after {
    content: "⇅";
    position: absolute;
    right: 10px;
    opacity: 0.3;
}

th.sortable:hover::after {
    opacity: 1;
}

th.sorted-asc::after {
    content: "↑";
    opacity: 1;
}

th.sorted-desc::after {
    content: "↓";
    opacity: 1;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-red-500/30">
            <h3 className="text-xl font-medium text-red-400 mb-4">Zebra Stripes</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Odd rows */
tr:nth-child(odd) {
    background-color: #f9f9f9;
}

/* Even rows */
tr:nth-child(even) {
    background-color: white;
}

/* Hover */
tr:hover {
    background-color: #e3f2fd;
    transition: background-color 0.3s;
}

/* Selected row */
tr.selected {
    background-color: #bbdefb;
}`}
            />
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
            Table stilashni mashq qiling:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">1.</strong> Oddiy jadval yarating (5 qator, 4 ustun)</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">2.</strong> Zebra stripes qo&apos;shing</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">3.</strong> Hover effekti yarating</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">4.</strong> Responsive qiling</p>
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
            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Narxlar jadvali</h3>
              <p className="text-gray-300 mb-4">3 xil tarif taqqoslash jadvali:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Tarif nomlari</li>
                <li>Narxlar</li>
                <li>Xususiyatlar</li>
                <li>Chiroyli dizayn</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Dars jadvali</h3>
              <p className="text-gray-300 mb-4">Haftalik dars jadvali yarating</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Data table</h3>
              <p className="text-gray-300 mb-4">Sortable va searchable jadval</p>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa */}
      <div className="mb-12 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-2xl p-8 hover:border-amber-500/40 transition-all">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">🏠</span> Uyga vazifa
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">1️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Dashboard table</h3>
                  <p className="text-gray-300 mb-4">Admin dashboard uchun jadval:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Sticky header</li>
                    <li>Sortable columns</li>
                    <li>Row selection</li>
                    <li>Actions column</li>
                    <li>Pagination</li>
                    <li>Responsive</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 3-4 soat | 📊 Qiyinlik: Qiyin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">2️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Comparison table</h3>
                  <p className="text-gray-300 mb-4">Mahsulotlarni taqqoslash jadvali:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>4-5 ta mahsulot</li>
                    <li>10+ xususiyat</li>
                    <li>Checkmark/Cross icons</li>
                    <li>Highlight column</li>
                    <li>Responsive stack</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 2-3 soat | 📊 Qiyinlik: O&apos;rta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/lists" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Lists
        </Link>
        
        <Link href="/docs/css/position" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Position
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
