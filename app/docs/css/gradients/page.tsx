"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Palette, Sparkles, Droplets, Play } from "lucide-react";

export default function CSSGradientsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 rounded-full text-sm mb-6">
            <Palette className="w-4 h-4 text-violet-400" />
            <span className="text-violet-300 font-semibold">CSS GRADIENTS</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 mb-4">
            CSS Gradients
          </h1>
          <p className="text-2xl text-gray-300">
            Chiroyli gradient ranglar yaratish
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 rounded-2xl p-8 hover:border-violet-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
          <p className="text-gray-400 mb-4">CSS Gradients - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-violet-500/50 transition-all">
            <div className="text-center">
              <Play className="w-16 h-16 text-violet-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Linear Gradient */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Linear Gradient</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-medium text-blue-400 mb-4">Asosiy Linear Gradient</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Yuqoridan pastga (default) */
div {
    background: linear-gradient(red, yellow);
}

/* Chapdan o'ngga */
div {
    background: linear-gradient(to right, red, yellow);
}

/* Pastdan yuqoriga */
div {
    background: linear-gradient(to top, red, yellow);
}

/* O'ngdan chapga */
div {
    background: linear-gradient(to left, red, yellow);
}

/* Diagonal */
div {
    background: linear-gradient(to bottom right, red, yellow);
}`}
            />
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="h-32 rounded-lg" style={{background: 'linear-gradient(to right, #ff0000, #ffff00)'}}></div>
              <div className="h-32 rounded-lg" style={{background: 'linear-gradient(to bottom right, #ff0000, #ffff00)'}}></div>
            </div>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-medium text-green-400 mb-4">Burchak bilan</h3>
            <CodeBlock 
              language="CSS"
              code={`/* 0deg = yuqoriga */
div {
    background: linear-gradient(0deg, red, yellow);
}

/* 45deg = diagonal */
div {
    background: linear-gradient(45deg, red, yellow);
}

/* 90deg = o'ngga */
div {
    background: linear-gradient(90deg, red, yellow);
}

/* 180deg = pastga */
div {
    background: linear-gradient(180deg, red, yellow);
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-medium text-purple-400 mb-4">Ko&apos;p ranglar</h3>
            <CodeBlock 
              language="CSS"
              code={`/* 3 ta rang */
div {
    background: linear-gradient(red, yellow, green);
}

/* 5 ta rang */
div {
    background: linear-gradient(
        to right,
        red,
        orange,
        yellow,
        green,
        blue
    );
}

/* Color stops bilan */
div {
    background: linear-gradient(
        to right,
        red 0%,
        yellow 50%,
        green 100%
    );
}

/* Aniq pozitsiyalar */
div {
    background: linear-gradient(
        to right,
        red 0%,
        red 25%,
        yellow 25%,
        yellow 75%,
        green 75%,
        green 100%
    );
}`}
            />
            
            <div className="mt-6 space-y-4">
              <div className="h-20 rounded-lg" style={{background: 'linear-gradient(to right, red, orange, yellow, green, blue)'}}></div>
              <div className="h-20 rounded-lg" style={{background: 'linear-gradient(to right, red 0%, red 25%, yellow 25%, yellow 75%, green 75%, green 100%)'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Radial Gradient */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Radial Gradient</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-xl font-medium text-orange-400 mb-4">Asosiy Radial</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Oddiy radial */
div {
    background: radial-gradient(red, yellow);
}

/* Circle */
div {
    background: radial-gradient(circle, red, yellow);
}

/* Ellipse (default) */
div {
    background: radial-gradient(ellipse, red, yellow);
}

/* Ko'p ranglar */
div {
    background: radial-gradient(
        circle,
        red,
        yellow,
        green,
        blue
    );
}`}
            />
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="h-32 rounded-lg" style={{background: 'radial-gradient(circle, #ff0000, #ffff00)'}}></div>
              <div className="h-32 rounded-lg" style={{background: 'radial-gradient(circle, red, yellow, green, blue)'}}></div>
            </div>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-medium text-cyan-400 mb-4">Pozitsiya</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Markazda (default) */
div {
    background: radial-gradient(circle at center, red, yellow);
}

/* Yuqori chap burchakda */
div {
    background: radial-gradient(circle at top left, red, yellow);
}

/* Aniq pozitsiya */
div {
    background: radial-gradient(circle at 30% 40%, red, yellow);
}

/* O'lcham */
div {
    background: radial-gradient(
        circle closest-side at center,
        red,
        yellow
    );
}

/* closest-side, closest-corner, farthest-side, farthest-corner */`}
            />
          </div>
        </div>
      </div>

      {/* Conic Gradient */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Conic Gradient</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-pink-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Oddiy conic */
div {
    background: conic-gradient(red, yellow, green, blue, red);
}

/* Burchakdan boshlash */
div {
    background: conic-gradient(from 90deg, red, yellow, green, blue, red);
}

/* Pozitsiya */
div {
    background: conic-gradient(at 30% 40%, red, yellow, green, blue, red);
}

/* Pie chart */
div {
    background: conic-gradient(
        red 0deg 90deg,
        yellow 90deg 180deg,
        green 180deg 270deg,
        blue 270deg 360deg
    );
    border-radius: 50%;
}`}
          />
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="h-32 rounded-full" style={{background: 'conic-gradient(red, yellow, green, blue, red)'}}></div>
            <div className="h-32 rounded-full" style={{background: 'conic-gradient(red 0deg 90deg, yellow 90deg 180deg, green 180deg 270deg, blue 270deg 360deg)'}}></div>
          </div>
        </div>
      </div>

      {/* Repeating Gradients */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Repeating Gradients</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-yellow-500/30">
            <h3 className="text-xl font-medium text-yellow-400 mb-4">Repeating Linear</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Chiziqlar */
div {
    background: repeating-linear-gradient(
        45deg,
        red 0px,
        red 10px,
        yellow 10px,
        yellow 20px
    );
}

/* Yo'llar */
div {
    background: repeating-linear-gradient(
        90deg,
        #fff 0px,
        #fff 50px,
        #000 50px,
        #000 100px
    );
}`}
            />
            
            <div className="mt-6 h-32 rounded-lg" style={{background: 'repeating-linear-gradient(45deg, red 0px, red 10px, yellow 10px, yellow 20px)'}}></div>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-red-500/30">
            <h3 className="text-xl font-medium text-red-400 mb-4">Repeating Radial</h3>
            <CodeBlock 
              language="CSS"
              code={`div {
    background: repeating-radial-gradient(
        circle,
        red 0px,
        red 10px,
        yellow 10px,
        yellow 20px
    );
}`}
            />
            
            <div className="mt-6 h-32 rounded-lg" style={{background: 'repeating-radial-gradient(circle, red 0px, red 10px, yellow 10px, yellow 20px)'}}></div>
          </div>
        </div>
      </div>

      {/* Multiple Gradients */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Multiple Gradients</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-indigo-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Bir nechta gradient */
div {
    background:
        linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 30%),
        linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.3) 30%),
        linear-gradient(to right, #667eea, #764ba2);
}

/* Pattern */
div {
    background:
        repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px),
        linear-gradient(to bottom, #667eea, #764ba2);
}`}
          />
        </div>
      </div>

      {/* Gradient Text */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Gradient Text</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
          <CodeBlock 
            language="CSS"
            code={`h1 {
    background: linear-gradient(to right, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Animated gradient text */
h1 {
    background: linear-gradient(
        90deg,
        #667eea,
        #764ba2,
        #f093fb,
        #667eea
    );
    background-size: 300% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 3s ease infinite;
}

@keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}`}
          />
          
          <div className="mt-6">
            <h2 className="text-4xl font-bold" style={{
              background: 'linear-gradient(to right, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Gradient Text
            </h2>
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
            Gradient yaratishni mashq qiling:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">1.</strong> 5 ta turli linear gradient yarating</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">2.</strong> Radial gradient bilan button yarating</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">3.</strong> Gradient text yarating</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">4.</strong> Repeating gradient pattern yarating</p>
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
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Gradient library</h3>
              <p className="text-gray-300 mb-4">10 ta chiroyli gradient yarating</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Hero section</h3>
              <p className="text-gray-300 mb-4">Gradient background bilan hero yarating</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Button collection</h3>
              <p className="text-gray-300 mb-4">Gradient tugmalar to&apos;plami</p>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa */}
      <div className="mb-12 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 rounded-2xl p-8 hover:border-violet-500/40 transition-all">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">🏠</span> Uyga vazifa
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">1️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Gradient showcase</h3>
                  <p className="text-gray-300 mb-4">Gradient namoyish sahifasi:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>50 ta turli gradient</li>
                    <li>Kategoriyalarga bo&apos;lingan</li>
                    <li>Copy to clipboard</li>
                    <li>Hover effektlari</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 3-4 soat | 📊 Qiyinlik: O&apos;rta</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">2️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Gradient generator</h3>
                  <p className="text-gray-300 mb-4">Gradient yaratuvchi vosita:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Rang tanlash</li>
                    <li>Yo&apos;nalish tanlash</li>
                    <li>Preview</li>
                    <li>CSS kod generatsiya</li>
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
        <Link href="/docs/css/position" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Position
        </Link>
        
        <Link href="/docs/css/flexbox" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Flexbox
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
