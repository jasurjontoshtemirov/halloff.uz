"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Move, Sparkles, Layers, Play } from "lucide-react";

export default function CSSPositionPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-sm mb-6">
            <Move className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-300 font-semibold">CSS POSITION</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mb-4">
            CSS Position
          </h1>
          <p className="text-2xl text-gray-300">
            Elementlarni aniq joylashtirish
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
          <p className="text-gray-400 mb-4">CSS Position - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-yellow-500/50 transition-all">
            <div className="text-center">
              <Play className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Position Types */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Position Turlari</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-2xl font-medium text-blue-400 mb-4">Static (Default)</h3>
            <p className="text-gray-300 mb-4">Oddiy oqim bo&apos;yicha joylashadi</p>
            <CodeBlock 
              language="CSS"
              code={`div {
    position: static;  /* Default */
}

/* top, right, bottom, left ishlamaydi */`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-medium text-green-400 mb-4">Relative</h3>
            <p className="text-gray-300 mb-4">O&apos;z joyiga nisbatan siljiydi</p>
            <CodeBlock 
              language="CSS"
              code={`div {
    position: relative;
    top: 20px;     /* Yuqoridan 20px pastga */
    left: 30px;    /* Chapdan 30px o'ngga */
}

/* Asl joyi saqlanadi, boshqa elementlar ta'sirlanmaydi */

/* Absolute children uchun reference */
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 0;
    right: 0;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-medium text-purple-400 mb-4">Absolute</h3>
            <p className="text-gray-300 mb-4">Positioned parent ga nisbatan joylashadi</p>
            <CodeBlock 
              language="CSS"
              code={`div {
    position: absolute;
    top: 0;
    right: 0;
}

/* Oqimdan chiqadi, joy egallmaydi */

/* Markazga joylashtirish */
.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* Burchaklarga joylashtirish */
.top-left {
    position: absolute;
    top: 10px;
    left: 10px;
}

.top-right {
    position: absolute;
    top: 10px;
    right: 10px;
}

.bottom-left {
    position: absolute;
    bottom: 10px;
    left: 10px;
}

.bottom-right {
    position: absolute;
    bottom: 10px;
    right: 10px;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-2xl font-medium text-orange-400 mb-4">Fixed</h3>
            <p className="text-gray-300 mb-4">Viewport ga nisbatan, scroll qilganda ham qoladi</p>
            <CodeBlock 
              language="CSS"
              code={`/* Fixed header */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 1000;
}

/* Fixed sidebar */
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 250px;
}

/* Fixed button */
.scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
}

/* Fixed notification */
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-2xl font-medium text-cyan-400 mb-4">Sticky</h3>
            <p className="text-gray-300 mb-4">Scroll qilganda ma&apos;lum joyda yopishib qoladi</p>
            <CodeBlock 
              language="CSS"
              code={`/* Sticky header */
header {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 100;
}

/* Sticky sidebar */
.sidebar {
    position: sticky;
    top: 20px;
}

/* Sticky table header */
thead th {
    position: sticky;
    top: 0;
    background-color: #4CAF50;
}

/* Sticky navigation */
nav {
    position: sticky;
    top: 0;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
}`}
            />
          </div>
        </div>
      </div>

      {/* Z-Index */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Z-Index - Qatlamlar</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-pink-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Z-index faqat positioned elementlarda ishlaydi */

.layer-1 {
    position: relative;
    z-index: 1;
}

.layer-2 {
    position: relative;
    z-index: 2;  /* layer-1 dan yuqorida */
}

.layer-3 {
    position: relative;
    z-index: 3;  /* Eng yuqorida */
}

/* Negative z-index */
.background {
    position: absolute;
    z-index: -1;  /* Orqada */
}

/* Common z-index values */
.dropdown { z-index: 1000; }
.modal-backdrop { z-index: 1040; }
.modal { z-index: 1050; }
.tooltip { z-index: 1070; }
.notification { z-index: 9999; }`}
          />
        </div>
      </div>

      {/* Practical Examples */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Amaliy Misollar</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-yellow-500/30">
            <h3 className="text-xl font-medium text-yellow-400 mb-4">Modal/Popup</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Backdrop */
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

/* Modal */
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    z-index: 1001;
    max-width: 500px;
    width: 90%;
}

/* Close button */
.modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-red-500/30">
            <h3 className="text-xl font-medium text-red-400 mb-4">Tooltip</h3>
            <CodeBlock 
              language="CSS"
              code={`.tooltip-container {
    position: relative;
    display: inline-block;
}

.tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    white-space: nowrap;
    margin-bottom: 5px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
}

.tooltip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #333;
}

.tooltip-container:hover .tooltip {
    opacity: 1;
    visibility: visible;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-indigo-500/30">
            <h3 className="text-xl font-medium text-indigo-400 mb-4">Badge/Notification</h3>
            <CodeBlock 
              language="CSS"
              code={`.icon-container {
    position: relative;
    display: inline-block;
}

.badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: #f44336;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
}

/* Pulse animation */
.badge::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #f44336;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(1.5);
        opacity: 0;
    }
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
            Position bilan ishlashni mashq qiling:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">1.</strong> Fixed header yarating</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">2.</strong> Absolute bilan badge qo&apos;shing</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">3.</strong> Sticky sidebar yarating</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">4.</strong> Modal popup yarating</p>
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
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Notification system</h3>
              <p className="text-gray-300 mb-4">Fixed notification yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Top-right burchakda</li>
                <li>Close button</li>
                <li>Slide-in animation</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Image gallery</h3>
              <p className="text-gray-300 mb-4">Rasm galereyasi:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Absolute overlay</li>
                <li>Hover da ko&apos;rinadi</li>
                <li>Icon va matn</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Scroll to top button</h3>
              <p className="text-gray-300 mb-4">Fixed button yarating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa */}
      <div className="mb-12 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">🏠</span> Uyga vazifa
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">1️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Landing page</h3>
                  <p className="text-gray-300 mb-4">To&apos;liq landing page yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Fixed header (transparent, scroll da solid)</li>
                    <li>Hero section (absolute centered text)</li>
                    <li>Sticky CTA button</li>
                    <li>Fixed social icons</li>
                    <li>Scroll to top button</li>
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
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Dashboard layout</h3>
                  <p className="text-gray-300 mb-4">Admin dashboard yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Fixed sidebar</li>
                    <li>Sticky header</li>
                    <li>Absolute notifications</li>
                    <li>Modal windows</li>
                    <li>Tooltips</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 4-5 soat | 📊 Qiyinlik: Qiyin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/tables" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Tables
        </Link>
        
        <Link href="/docs/css/gradients" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Gradients
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
