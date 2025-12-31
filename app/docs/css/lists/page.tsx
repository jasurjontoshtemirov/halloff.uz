"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { List, Sparkles, CheckSquare, Play } from "lucide-react";

export default function CSSListsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full text-sm mb-6">
            <List className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 font-semibold">CSS LISTS</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-4">
            CSS Lists
          </h1>
          <p className="text-2xl text-gray-300">
            Ro'yxatlarni professional stilash
          </p>
        </div>
      </div>

      {/* List Style Type */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">List Style Type</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Unordered list */
ul {
    list-style-type: disc;      /* • */
    list-style-type: circle;    /* ○ */
    list-style-type: square;    /* ▪ */
    list-style-type: none;      /* Yo'q */
}

/* Ordered list */
ol {
    list-style-type: decimal;        /* 1, 2, 3 */
    list-style-type: decimal-leading-zero;  /* 01, 02, 03 */
    list-style-type: lower-roman;    /* i, ii, iii */
    list-style-type: upper-roman;    /* I, II, III */
    list-style-type: lower-alpha;    /* a, b, c */
    list-style-type: upper-alpha;    /* A, B, C */
}`}
          />
        </div>
      </div>

      {/* Custom List */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Custom List Markers</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-medium text-green-400 mb-4">::before bilan</h3>
            <CodeBlock 
              language="CSS"
              code={`ul {
    list-style: none;
    padding: 0;
}

li {
    padding-left: 30px;
    position: relative;
}

li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #4CAF50;
    font-weight: bold;
}

/* Custom icon */
li::before {
    content: "→";
    color: #2196F3;
}

/* Emoji */
li::before {
    content: "🎯";
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-medium text-purple-400 mb-4">Image marker</h3>
            <CodeBlock 
              language="CSS"
              code={`ul {
    list-style-image: url('marker.png');
}

/* Yoki ::before bilan */
li::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('icon.svg');
    background-size: contain;
    margin-right: 10px;
}`}
            />
          </div>
        </div>
      </div>

      {/* Styled Lists */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Chiroyli Ro&apos;yxatlar</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-xl font-medium text-orange-400 mb-4">Hover effekti</h3>
            <CodeBlock 
              language="CSS"
              code={`ul {
    list-style: none;
    padding: 0;
}

li {
    padding: 15px 20px;
    border-bottom: 1px solid #ddd;
    transition: all 0.3s;
    cursor: pointer;
}

li:hover {
    background-color: #f5f5f5;
    padding-left: 30px;
}

li:last-child {
    border-bottom: none;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-medium text-cyan-400 mb-4">Kartochka uslubida</h3>
            <CodeBlock 
              language="CSS"
              code={`ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

li {
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: all 0.3s;
}

li:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}`}
            />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Navigation Menu</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-pink-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Horizontal menu */
nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
}

nav li {
    display: inline-block;
}

nav a {
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    color: #333;
    transition: all 0.3s;
}

nav a:hover {
    background-color: #4CAF50;
    color: white;
    border-radius: 4px;
}

/* Vertical menu */
.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar li {
    border-bottom: 1px solid #ddd;
}

.sidebar a {
    display: block;
    padding: 15px 20px;
    text-decoration: none;
    color: #333;
    transition: all 0.3s;
}

.sidebar a:hover {
    background-color: #f5f5f5;
    padding-left: 30px;
}`}
          />
        </div>
      </div>

      {/* Amaliy mashq */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-500 p-8 rounded-r">
          <h2 className="text-3xl font-semibold text-gray-100 mb-4 flex items-center gap-3">
            <span className="text-4xl">💻</span> Amaliy mashq
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Ro&apos;yxatlarni stilashni mashq qiling:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">1.</strong> 3 xil list-style-type sinab ko&apos;ring</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">2.</strong> Custom marker (emoji) qo&apos;shing</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">3.</strong> Hover effekti yarating</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">4.</strong> Horizontal menu yarating</p>
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
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: To-do list</h3>
              <p className="text-gray-300 mb-4">Vazifalar ro&apos;yxati yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Checkbox bilan</li>
                <li>Hover effekti</li>
                <li>Strikethrough (bajarilgan)</li>
                <li>Delete tugmasi</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Feature list</h3>
              <p className="text-gray-300 mb-4">Xususiyatlar ro&apos;yxati:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Icon bilan (✓)</li>
                <li>Chiroyli dizayn</li>
                <li>2 ustunli layout</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Dropdown menu</h3>
              <p className="text-gray-300 mb-4">Dropdown navigation yarating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa */}
      <div className="mb-12 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">🏠</span> Uyga vazifa
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">1️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Mega menu</h3>
                  <p className="text-gray-300 mb-4">Katta navigation menu:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Multi-level dropdown</li>
                    <li>Hover effektlari</li>
                    <li>Icons bilan</li>
                    <li>Responsive</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 2-3 soat | 📊 Qiyinlik: Qiyin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">2️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Timeline</h3>
                  <p className="text-gray-300 mb-4">Vertikal timeline yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Ordered list asosida</li>
                    <li>Custom markers</li>
                    <li>Chiziq bilan bog&apos;langan</li>
                    <li>Animatsiyalar</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 1.5-2 soat | 📊 Qiyinlik: O&apos;rta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/forms" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Forms
        </Link>
        
        <Link href="/docs/css/tables" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Tables
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
