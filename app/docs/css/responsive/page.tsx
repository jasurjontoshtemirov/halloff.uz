"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Smartphone, Sparkles, Code2, Monitor, Tablet, Laptop, CheckCircle } from "lucide-react";

export default function CSSResponsivePage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm mb-6">
            <Smartphone className="w-4 h-4 text-green-400" />
            <span className="text-green-300 font-semibold">RESPONSIVE DESIGN</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 mb-4">
            Responsive Design
          </h1>
          <p className="text-2xl text-gray-300">
            Barcha qurilmalarda mukammal ko'rinish
          </p>
        </div>
      </div>

      {/* Responsive nima? */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl">
            <Monitor className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">Responsive nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="text-green-400 font-semibold">Responsive Design</span> - bu web sahifa barcha qurilmalarda (telefon, planshet, kompyuter) mukammal ko'rinishi uchun moslashuvchan dizayn yaratish.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl p-8 border border-emerald-500/20">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-emerald-400" />
            <h3 className="text-2xl font-semibold text-gray-100">Responsive nima beradi?</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Barcha qurilmalarda yaxshi ko'rinish",
              "Foydalanuvchi tajribasi yaxshilanadi",
              "SEO uchun foydali (Google Mobile-First)",
              "Bitta kod - barcha qurilmalar",
              "Keng auditoriya qamrovi",
              "Professional va zamonaviy ko'rinish"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/70 transition-all">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Viewport Meta Tag */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Viewport Meta Tag</h2>
        <p className="text-gray-300 mb-6">
          Responsive dizayn uchun birinchi qadam - viewport meta tag qo'shish.
        </p>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
          <CodeBlock 
            language="HTML"
            code={`<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Sahifa</title>
</head>
<body>
    <!-- Sahifa kontenti -->
</body>
</html>`}
          />
        </div>
        
        <div className="mt-4 bg-green-500/10 p-4 rounded">
          <p className="text-green-300 text-sm">
            ⚠️ <strong>Muhim:</strong> Bu meta tag bo'lmasa, mobil qurilmalarda sahifa to'g'ri ko'rinmaydi!
          </p>
        </div>
      </div>

      {/* Media Queries */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Media Queries</h2>
        <p className="text-gray-300 mb-6">
          Media queries turli ekran o'lchamlari uchun turli CSS qoidalarini qo'llash imkonini beradi.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Asosiy Sintaksis</h3>
        <CodeBlock 
          language="CSS"
          code={`/* Mobile First - kichik ekranlardan boshlaymiz */
.container {
    width: 100%;
    padding: 10px;
}

/* Tablet - 768px dan katta */
@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
        padding: 20px;
    }
}

/* Desktop - 1024px dan katta */
@media (min-width: 1024px) {
    .container {
        width: 1000px;
        padding: 30px;
    }
}

/* Large Desktop - 1200px dan katta */
@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Keng Tarqalgan Breakpoints</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg text-center">
            <Smartphone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <h4 className="text-lg font-medium text-blue-400">Mobile</h4>
            <p className="text-gray-300 text-sm">0px - 767px</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg text-center">
            <Tablet className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <h4 className="text-lg font-medium text-green-400">Tablet</h4>
            <p className="text-gray-300 text-sm">768px - 1023px</p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg text-center">
            <Laptop className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <h4 className="text-lg font-medium text-purple-400">Desktop</h4>
            <p className="text-gray-300 text-sm">1024px - 1199px</p>
          </div>
          <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-lg text-center">
            <Monitor className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <h4 className="text-lg font-medium text-orange-400">Large</h4>
            <p className="text-gray-300 text-sm">1200px+</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Media Query Turlari</h3>
        <CodeBlock 
          language="CSS"
          code={`/* Min-width - katta ekranlar uchun */
@media (min-width: 768px) {
    /* 768px va undan katta */
}

/* Max-width - kichik ekranlar uchun */
@media (max-width: 767px) {
    /* 767px va undan kichik */
}

/* Oraliq - ma'lum oraliq uchun */
@media (min-width: 768px) and (max-width: 1023px) {
    /* Faqat tablet o'lchamlari */
}

/* Orientation - yo'nalish */
@media (orientation: landscape) {
    /* Gorizontal yo'nalish */
}

@media (orientation: portrait) {
    /* Vertikal yo'nalish */
}

/* Device type */
@media screen {
    /* Ekran qurilmalari uchun */
}

@media print {
    /* Print uchun */
}`}
        />
      </div>

      {/* Flexible Layouts */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Flexible Layouts</h2>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Flexbox bilan Responsive</h3>
        <CodeBlock 
          language="CSS"
          code={`/* Responsive Flexbox Layout */
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.item {
    flex: 1 1 300px; /* grow shrink basis */
    min-width: 250px;
}

/* Mobile da vertikal */
@media (max-width: 767px) {
    .container {
        flex-direction: column;
    }
    
    .item {
        flex: 1 1 auto;
        min-width: auto;
    }
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Grid bilan Responsive</h3>
        <CodeBlock 
          language="CSS"
          code={`/* Responsive Grid Layout */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Mobile da 1 ustun */
@media (max-width: 767px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}

/* Tablet da 2 ustun */
@media (min-width: 768px) and (max-width: 1023px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop da 3+ ustun */
@media (min-width: 1024px) {
    .grid-container {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}`}
        />
      </div>

      {/* Responsive Images */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Responsive Images</h2>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Basic Responsive Image</h3>
        <CodeBlock 
          language="CSS"
          code={`/* Asosiy responsive image */
img {
    max-width: 100%;
    height: auto;
}

/* Container bilan */
.image-container {
    width: 100%;
    overflow: hidden;
}

.image-container img {
    width: 100%;
    height: auto;
    display: block;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Picture Element</h3>
        <CodeBlock 
          language="HTML"
          code={`<!-- Turli ekranlar uchun turli rasmlar -->
<picture>
    <source media="(min-width: 1024px)" srcset="large-image.jpg">
    <source media="(min-width: 768px)" srcset="medium-image.jpg">
    <img src="small-image.jpg" alt="Responsive rasm">
</picture>`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Srcset Attribute</h3>
        <CodeBlock 
          language="HTML"
          code={`<!-- Turli zichlik uchun -->
<img src="image.jpg" 
     srcset="image.jpg 1x, image@2x.jpg 2x, image@3x.jpg 3x"
     alt="High DPI rasm">

<!-- Turli o'lchamlar uchun -->
<img src="small.jpg"
     srcset="small.jpg 480w, medium.jpg 768w, large.jpg 1200w"
     sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
     alt="Responsive rasm">`}
        />
      </div>

      {/* Responsive Typography */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Responsive Typography</h2>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Fluid Typography</h3>
        <CodeBlock 
          language="CSS"
          code={`/* Viewport units bilan */
h1 {
    font-size: 4vw; /* Viewport width ga nisbatan */
    min-font-size: 24px;
    max-font-size: 48px;
}

/* Clamp function - eng yaxshi usul */
h1 {
    font-size: clamp(24px, 4vw, 48px);
    /* min, preferred, max */
}

h2 {
    font-size: clamp(20px, 3vw, 36px);
}

p {
    font-size: clamp(14px, 2vw, 18px);
    line-height: 1.6;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Media Queries bilan Typography</h3>
        <CodeBlock 
          language="CSS"
          code={`/* Base typography */
body {
    font-size: 14px;
    line-height: 1.4;
}

h1 { font-size: 24px; }
h2 { font-size: 20px; }
h3 { font-size: 18px; }

/* Tablet */
@media (min-width: 768px) {
    body {
        font-size: 16px;
        line-height: 1.5;
    }
    
    h1 { font-size: 32px; }
    h2 { font-size: 28px; }
    h3 { font-size: 24px; }
}

/* Desktop */
@media (min-width: 1024px) {
    body {
        font-size: 18px;
        line-height: 1.6;
    }
    
    h1 { font-size: 48px; }
    h2 { font-size: 36px; }
    h3 { font-size: 28px; }
}`}
        />
      </div>

      {/* Mobile First Approach */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Mobile First Approach</h2>
        <p className="text-gray-300 mb-6">
          Mobile First - bu kichik ekranlardan boshlab, katta ekranlarga o'tish strategiyasi.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-red-400 mb-4">❌ Desktop First (Yomon)</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Desktop uchun yozilgan */
.container {
    width: 1200px;
    margin: 0 auto;
    padding: 30px;
}

/* Keyin mobile uchun o'zgartirish */
@media (max-width: 767px) {
    .container {
        width: 100%;
        padding: 10px;
    }
}`}
            />
          </div>

          <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-green-400 mb-4">✅ Mobile First (Yaxshi)</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Mobile uchun yozilgan */
.container {
    width: 100%;
    padding: 10px;
}

/* Keyin katta ekranlar uchun */
@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
        padding: 30px;
    }
}`}
            />
          </div>
        </div>
      </div>

      {/* Amaliy Misollar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Amaliy Misollar</h2>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Responsive Navigation</h3>
        <CodeBlock 
          language="CSS"
          code={`/* Mobile navigation */
.nav {
    display: flex;
    flex-direction: column;
    background: #333;
}

.nav-item {
    padding: 15px;
    border-bottom: 1px solid #555;
}

.nav-toggle {
    display: block;
    background: #333;
    color: white;
    padding: 15px;
    border: none;
    cursor: pointer;
}

/* Desktop navigation */
@media (min-width: 768px) {
    .nav {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    
    .nav-item {
        border-bottom: none;
        padding: 10px 20px;
    }
    
    .nav-toggle {
        display: none;
    }
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Responsive Card Layout</h3>
        <CodeBlock 
          language="CSS"
          code={`/* Card container */
.cards {
    display: grid;
    gap: 20px;
    padding: 20px;
}

/* Mobile - 1 ustun */
.cards {
    grid-template-columns: 1fr;
}

/* Tablet - 2 ustun */
@media (min-width: 768px) {
    .cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop - 3 ustun */
@media (min-width: 1024px) {
    .cards {
        grid-template-columns: repeat(3, 1fr);
        max-width: 1200px;
        margin: 0 auto;
    }
}

/* Large Desktop - 4 ustun */
@media (min-width: 1400px) {
    .cards {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* Card styling */
.card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}`}
        />
      </div>

      {/* Performance va Best Practices */}
      <div className="mb-12 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-8 border border-yellow-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">⚡</span>
          <h2 className="text-3xl font-semibold text-gray-100">Performance va Best Practices</h2>
        </div>
        
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1 text-xl">✓</span>
            <div>
              <strong className="text-gray-200">Mobile First yondashuv:</strong>
              <p className="mt-1">Kichik ekranlardan boshlab, katta ekranlarga o'ting.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1 text-xl">✓</span>
            <div>
              <strong className="text-gray-200">Viewport meta tag:</strong>
              <p className="mt-1">Har doim viewport meta tag qo'shing.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1 text-xl">✓</span>
            <div>
              <strong className="text-gray-200">Flexible units:</strong>
              <p className="mt-1">%, em, rem, vw, vh kabi flexible units ishlatish.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1 text-xl">✓</span>
            <div>
              <strong className="text-gray-200">Responsive images:</strong>
              <p className="mt-1">max-width: 100% va srcset ishlatish.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-400 mt-1 text-xl">⚠</span>
            <div>
              <strong className="text-gray-200">Touch targets:</strong>
              <p className="mt-1">Mobil qurilmalarda tugmalar kamida 44px bo'lishi kerak.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 mt-1 text-xl">✗</span>
            <div>
              <strong className="text-gray-200">Fixed width ishlatmaslik:</strong>
              <p className="mt-1">Qat'iy width o'rniga flexible units ishlatish.</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Amaliy Mashq */}
      <div className="mb-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">💻</span>
          <h2 className="text-3xl font-semibold text-gray-100">Amaliy Mashq</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 1: Responsive Navigation</h3>
            <p className="text-gray-300 mb-4">
              Mobile va desktop uchun responsive navigation yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Mobile da hamburger menu</li>
              <li>Desktop da horizontal menu</li>
              <li>Smooth transitions</li>
              <li>Touch-friendly buttons</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 2: Responsive Grid</h3>
            <p className="text-gray-300 mb-4">
              Turli ekranlarda turli ustun soni bo'lgan grid yarating (1-2-3-4 ustunlar).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 3: Responsive Typography</h3>
            <p className="text-gray-300 mb-4">
              Clamp() function ishlatib fluid typography yarating.
            </p>
          </div>
        </div>
      </div>

      {/* Topshiriq */}
      <div className="mb-12 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-8 border border-orange-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">📝</span>
          <h2 className="text-3xl font-semibold text-gray-100">Topshiriq</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Responsive Portfolio Website</h3>
            <p className="text-gray-300 mb-4">
              To'liq responsive portfolio website yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li><strong>Header:</strong> Logo va responsive navigation</li>
              <li><strong>Hero section:</strong> Responsive typography va background</li>
              <li><strong>About section:</strong> Text va image responsive layout</li>
              <li><strong>Portfolio grid:</strong> Responsive image gallery</li>
              <li><strong>Contact form:</strong> Mobile-friendly form</li>
              <li><strong>Footer:</strong> Responsive footer layout</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 backdrop-blur">
            <h4 className="text-lg font-semibold text-gray-200 mb-3">Texnik Talablar:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Mobile First approach</li>
              <li>Kamida 4 ta breakpoint</li>
              <li>Responsive images (srcset)</li>
              <li>Fluid typography (clamp)</li>
              <li>Touch-friendly navigation</li>
              <li>Performance optimized</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa */}
      <div className="mb-12 bg-gradient-to-br from-lime-500/10 to-green-500/10 rounded-2xl p-8 border border-lime-500/20 hover:border-lime-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🏠</span>
          <h2 className="text-3xl font-semibold text-gray-100">Uyga Vazifa</h2>
        </div>
        
        <div className="space-y-6">
          {[
            {
              num: "1",
              title: "E-commerce Homepage",
              desc: "Responsive e-commerce homepage yarating:",
              items: [
                "Hero banner with responsive images",
                "Product grid (1-2-3-4 columns)",
                "Category navigation",
                "Newsletter signup form",
                "Mobile-first design"
              ]
            },
            {
              num: "2",
              title: "Blog Layout",
              desc: "Responsive blog layout yarating:",
              items: [
                "Article list with responsive cards",
                "Sidebar (mobile da pastda)",
                "Responsive typography",
                "Image galleries",
                "Comment section"
              ]
            },
            {
              num: "3",
              title: "Dashboard Interface",
              desc: "Responsive admin dashboard yarating:",
              items: [
                "Collapsible sidebar",
                "Responsive data tables",
                "Chart containers",
                "Mobile-friendly forms",
                "Touch-optimized controls"
              ]
            },
            {
              num: "4",
              title: "Landing Page",
              desc: "Responsive landing page yarating:",
              items: [
                "Hero section with video background",
                "Feature sections",
                "Testimonials carousel",
                "Pricing tables",
                "Contact form"
              ]
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all border border-gray-800 hover:border-lime-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-lime-600 to-green-600 rounded-lg flex items-center justify-center font-bold text-white">
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

      {/* Qo'shimcha Manbalar */}
      <div className="mb-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">📚</span>
          <h2 className="text-3xl font-semibold text-gray-100">Qo'shimcha Manbalar</h2>
        </div>
        
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">MDN Web Docs:</strong>
              <p className="text-sm mt-1">Responsive Design to'liq qo'llanma</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">CSS-Tricks:</strong>
              <p className="text-sm mt-1">Responsive design patterns va misollar</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">Google Web Fundamentals:</strong>
              <p className="text-sm mt-1">Mobile-first va performance best practices</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">Responsive Breakpoints:</strong>
              <p className="text-sm mt-1">Breakpoint strategiyalari va misollar</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">Can I Use:</strong>
              <p className="text-sm mt-1">CSS features brauzer qo'llab-quvvatlash</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/animations" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Animations
        </Link>
        
        <Link href="/docs/css/transforms" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Transforms
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}