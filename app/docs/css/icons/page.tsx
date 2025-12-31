"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Star, Sparkles, Smile, Play } from "lucide-react";

export default function CSSIconsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-500/30 rounded-full text-sm mb-6">
            <Star className="w-4 h-4 text-fuchsia-400" />
            <span className="text-fuchsia-300 font-semibold">CSS ICONS</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 mb-4">
            CSS Icons
          </h1>
          <p className="text-2xl text-gray-300">
            Ikonkalar - zamonaviy web dizaynning ajralmas qismi
          </p>
        </div>
      </div>

      {/* Font Awesome */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Font Awesome</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-medium text-blue-400 mb-4">Font Awesome qo&apos;shish</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 mb-2">1. CDN orqali:</p>
                <CodeBlock 
                  language="HTML"
                  code={`<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>`}
                />
              </div>

              <div>
                <p className="text-gray-300 mb-2">2. Ishlatish:</p>
                <CodeBlock 
                  language="HTML"
                  code={`<!-- Solid icons -->
<i class="fas fa-home"></i>
<i class="fas fa-user"></i>
<i class="fas fa-heart"></i>

<!-- Regular icons -->
<i class="far fa-heart"></i>
<i class="far fa-star"></i>

<!-- Brands -->
<i class="fab fa-facebook"></i>
<i class="fab fa-twitter"></i>
<i class="fab fa-github"></i>`}
                />
              </div>
            </div>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-medium text-green-400 mb-4">CSS bilan stilash</h3>
            <CodeBlock 
              language="CSS"
              code={`/* O'lcham */
i {
    font-size: 24px;
    font-size: 2rem;
}

.icon-small { font-size: 16px; }
.icon-medium { font-size: 24px; }
.icon-large { font-size: 32px; }
.icon-xl { font-size: 48px; }

/* Rang */
i {
    color: #3498db;
}

.icon-primary { color: #3498db; }
.icon-success { color: #2ecc71; }
.icon-danger { color: #e74c3c; }
.icon-warning { color: #f39c12; }

/* Hover */
i:hover {
    color: #2980b9;
    transform: scale(1.1);
    transition: all 0.3s;
}`}
            />
          </div>
        </div>
      </div>

      {/* Icon Effects */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Icon Effektlari</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-medium text-purple-400 mb-4">Animatsiyalar</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Spin */
.icon-spin {
    animation: spin 2s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Pulse */
.icon-pulse {
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

/* Bounce */
.icon-bounce {
    animation: bounce 1s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* Shake */
.icon-shake:hover {
    animation: shake 0.5s;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-xl font-medium text-orange-400 mb-4">Background va Border</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Circle background */
.icon-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #3498db;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Square background */
.icon-square {
    width: 50px;
    height: 50px;
    background-color: #2ecc71;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Border */
.icon-border {
    width: 50px;
    height: 50px;
    border: 2px solid #3498db;
    border-radius: 50%;
    color: #3498db;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Hover effect */
.icon-hover {
    transition: all 0.3s;
}

.icon-hover:hover {
    background-color: #2980b9;
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}`}
            />
          </div>
        </div>
      </div>

      {/* Material Icons */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Material Icons</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-cyan-500/30">
          <div className="space-y-4">
            <div>
              <p className="text-gray-300 mb-2">1. Qo&apos;shish:</p>
              <CodeBlock 
                language="HTML"
                code={`<head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>`}
              />
            </div>

            <div>
              <p className="text-gray-300 mb-2">2. Ishlatish:</p>
              <CodeBlock 
                language="HTML"
                code={`<span class="material-icons">home</span>
<span class="material-icons">favorite</span>
<span class="material-icons">settings</span>
<span class="material-icons">search</span>`}
              />
            </div>

            <div>
              <p className="text-gray-300 mb-2">3. Stilash:</p>
              <CodeBlock 
                language="CSS"
                code={`.material-icons {
    font-size: 24px;
    color: #3498db;
    vertical-align: middle;
}

.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* SVG Icons */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">SVG Icons</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-pink-500/30">
            <h3 className="text-xl font-medium text-pink-400 mb-4">Inline SVG</h3>
            <CodeBlock 
              language="HTML"
              code={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/>
</svg>`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-yellow-500/30">
            <h3 className="text-xl font-medium text-yellow-400 mb-4">SVG CSS</h3>
            <CodeBlock 
              language="CSS"
              code={`svg {
    width: 24px;
    height: 24px;
    fill: currentColor;  /* Parent color ni oladi */
}

.icon-svg {
    color: #3498db;
}

.icon-svg:hover {
    color: #2980b9;
    transform: scale(1.1);
    transition: all 0.3s;
}

/* Responsive */
svg {
    width: 100%;
    height: auto;
    max-width: 48px;
}`}
            />
          </div>
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Icon Buttons</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-red-500/30">
          <CodeBlock 
            language="HTML"
            code={`<button class="icon-btn">
    <i class="fas fa-heart"></i>
    Like
</button>

<button class="icon-btn-circle">
    <i class="fas fa-plus"></i>
</button>`}
          />
          
          <CodeBlock 
            language="CSS"
            code={`/* Icon with text */
.icon-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
}

.icon-btn:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

/* Circle button */
.icon-btn-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #2ecc71;
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
}

.icon-btn-circle:hover {
    background-color: #27ae60;
    transform: scale(1.1);
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
            Icon bilan ishlashni mashq qiling:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">1.</strong> Font Awesome qo&apos;shing va 10 ta icon joylashtiring</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">2.</strong> Har biriga turli rang va o&apos;lcham bering</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">3.</strong> Spin animatsiyasi qo&apos;shing</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">4.</strong> Icon button yarating</p>
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
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Social media buttons</h3>
              <p className="text-gray-300 mb-4">Ijtimoiy tarmoq tugmalari yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Facebook, Twitter, Instagram, LinkedIn</li>
                <li>Har biri o&apos;z rangida</li>
                <li>Circle background</li>
                <li>Hover effekti</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Feature cards</h3>
              <p className="text-gray-300 mb-4">3 ta feature kartochka:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Katta icon yuqorida</li>
                <li>Sarlavha</li>
                <li>Tavsif</li>
                <li>Icon animatsiyasi</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Loading spinner</h3>
              <p className="text-gray-300 mb-4">Aylanuvchi loading icon yarating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa */}
      <div className="mb-12 bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 border border-fuchsia-500/20 rounded-2xl p-8 hover:border-fuchsia-500/40 transition-all">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">🏠</span> Uyga vazifa
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">1️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Icon library</h3>
                  <p className="text-gray-300 mb-4">O&apos;zingizning icon kutubxonangiz:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>50 ta turli icon</li>
                    <li>Kategoriyalarga bo&apos;lingan</li>
                    <li>Har biri uchun kod namunasi</li>
                    <li>Qidiruv funksiyasi</li>
                    <li>Copy to clipboard</li>
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
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Dashboard sidebar</h3>
                  <p className="text-gray-300 mb-4">Icon bilan sidebar yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>10 ta menu item (icon + text)</li>
                    <li>Active state</li>
                    <li>Hover effektlari</li>
                    <li>Collapse/expand funksiyasi</li>
                    <li>Responsive</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 2-2.5 soat | 📊 Qiyinlik: O&apos;rta</p>
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
            <h3 className="text-lg font-medium text-gray-100 mb-2">⭐ Font Awesome</h3>
            <p className="text-gray-400 text-sm mb-3">Eng mashhur icon kutubxonasi</p>
            <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer" 
               className="text-blue-400 hover:text-blue-300 text-sm">
              fontawesome.com →
            </a>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2">🎨 Material Icons</h3>
            <p className="text-gray-400 text-sm mb-3">Google Material Design icons</p>
            <a href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer"
               className="text-green-400 hover:text-green-300 text-sm">
              fonts.google.com/icons →
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/fonts" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Fonts
        </Link>
        
        <Link href="/docs/css/forms" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: CSS Forms
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
