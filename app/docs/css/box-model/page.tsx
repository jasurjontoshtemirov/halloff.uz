"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Box, Sparkles, Layers, Play, Square, Scissors, Eye, Target, Zap } from "lucide-react";

export default function CSSBoxModelPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-yellow-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-full text-sm mb-6">
            <Box className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 font-semibold">BOX MODEL</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 mb-4">
            CSS Box Model
          </h1>
          <p className="text-2xl text-gray-300">
            Border, Padding, Margin - elementning anatomiyasi
          </p>
        </div>
      </div>

      {/* Box Model nima */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Box Model nima?</h2>
        <div className="bg-gradient-to-r from-orange-500/5 to-red-500/5 border-l-4 border-orange-500 p-6 rounded-r">
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            CSS da har bir element <strong className="text-orange-400">to&apos;rtburchak quti</strong> sifatida ko&apos;riladi. 
            Box Model bu qutining tuzilmasini tushuntiradi.
          </p>
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <div className="text-center space-y-2">
              <div className="bg-blue-500/20 border-2 border-blue-500 p-4 rounded">
                <p className="text-blue-400 font-medium">Margin (Tashqi bo&apos;shliq)</p>
                <div className="bg-green-500/20 border-2 border-green-500 p-4 rounded mt-2">
                  <p className="text-green-400 font-medium">Border (Chegara)</p>
                  <div className="bg-yellow-500/20 border-2 border-yellow-500 p-4 rounded mt-2">
                    <p className="text-yellow-400 font-medium">Padding (Ichki bo&apos;shliq)</p>
                    <div className="bg-red-500/20 border-2 border-red-500 p-4 rounded mt-2">
                      <p className="text-red-400 font-medium">Content (Kontent)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Width va Height */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Width va Height</h2>
        <CodeBlock 
          language="CSS"
          code={`div {
    width: 300px;
    height: 200px;
    background-color: lightblue;
}

/* Percentage */
div {
    width: 50%;
    height: 100vh;
}

/* Min va Max */
div {
    min-width: 200px;
    max-width: 800px;
    min-height: 100px;
    max-height: 500px;
}`}
        />
      </div>

      {/* Padding */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Padding - Ichki bo&apos;shliq</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-yellow-500/30">
            <h3 className="text-xl font-medium text-yellow-400 mb-4">Barcha tomonlar</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Hammasi bir xil */
div {
    padding: 20px;
}

/* Har bir tomon alohida */
div {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
}

/* Shorthand */
div {
    padding: 10px 20px;  /* top/bottom left/right */
    padding: 10px 20px 30px;  /* top left/right bottom */
    padding: 10px 20px 30px 40px;  /* top right bottom left */
}`}
            />
          </div>
        </div>
      </div>

      {/* Border - Kengaytirilgan */}
      <div className="mb-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm mb-4">
            <Scissors className="w-4 h-4 text-green-400" />
            <span className="text-green-300 font-semibold">BORDER XUSUSIYATLARI</span>
          </div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-4">
            Border - Chegara
          </h2>
          <p className="text-xl text-gray-300">
            Elementning chegarasini professional darajada boshqaring
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Asosiy Border xususiyatlari */}
          <div className="bg-[#1a1f2e] p-8 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-medium text-green-400 mb-6 flex items-center gap-3">
              <Square className="w-8 h-8 text-green-400" /> Asosiy Border Xususiyatlari
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium text-green-300 mb-3">Border Width (Qalinlik)</h4>
                <CodeBlock 
                  language="CSS"
                  code={`/* Turli qalinliklar */
.thin-border { border-width: 1px; }
.medium-border { border-width: 3px; }
.thick-border { border-width: 5px; }

/* Har bir tomon uchun alohida */
.custom-border {
    border-top-width: 1px;
    border-right-width: 2px;
    border-bottom-width: 3px;
    border-left-width: 4px;
}

/* Shorthand - soat yo'nalishida */
.shorthand-border {
    border-width: 1px 2px 3px 4px; /* top right bottom left */
    border-width: 2px 4px; /* top/bottom left/right */
}`}
                />
              </div>

              <div>
                <h4 className="text-xl font-medium text-green-300 mb-3">Border Style (Stil)</h4>
                <CodeBlock 
                  language="CSS"
                  code={`/* Turli stillar */
.solid { border-style: solid; }      /* Oddiy chiziq */
.dashed { border-style: dashed; }    /* Uzilgan chiziq */
.dotted { border-style: dotted; }    /* Nuqtali chiziq */
.double { border-style: double; }    /* Qo'sh chiziq */
.groove { border-style: groove; }    /* Chuqur ko'rinish */
.ridge { border-style: ridge; }      /* Baland ko'rinish */
.inset { border-style: inset; }      /* Ichkariga botgan */
.outset { border-style: outset; }    /* Tashqariga chiqgan */

/* Har bir tomon uchun */
.mixed-styles {
    border-top-style: solid;
    border-right-style: dashed;
    border-bottom-style: dotted;
    border-left-style: double;
}`}
                />
                
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg text-center border-2 border-solid border-green-400">
                    <p className="text-green-400 text-sm font-medium">solid</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg text-center border-2 border-dashed border-green-400">
                    <p className="text-green-400 text-sm font-medium">dashed</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg text-center border-2 border-dotted border-green-400">
                    <p className="text-green-400 text-sm font-medium">dotted</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg text-center border-4 border-double border-green-400">
                    <p className="text-green-400 text-sm font-medium">double</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-medium text-green-300 mb-3">Border Color (Rang)</h4>
                <CodeBlock 
                  language="CSS"
                  code={`/* Turli rang formatlarida */
.red-border { border-color: red; }
.hex-border { border-color: #3498db; }
.rgb-border { border-color: rgb(52, 152, 219); }
.rgba-border { border-color: rgba(52, 152, 219, 0.7); }
.hsl-border { border-color: hsl(204, 70%, 53%); }

/* Har bir tomon uchun */
.rainbow-border {
    border-top-color: red;
    border-right-color: green;
    border-bottom-color: blue;
    border-left-color: yellow;
}

/* Gradient border (trick) */
.gradient-border {
    border: 3px solid;
    border-image: linear-gradient(45deg, #ff6b6b, #4ecdc4) 1;
}`}
                />
              </div>
            </div>
          </div>

          {/* Border Radius */}
          <div className="bg-[#1a1f2e] p-8 rounded-xl border border-emerald-500/30">
            <h3 className="text-2xl font-medium text-emerald-400 mb-6 flex items-center gap-3">
              <Layers className="w-8 h-8 text-emerald-400" /> Border Radius (Yumaloq burchaklar)
            </h3>
            
            <CodeBlock 
              language="CSS"
              code={`/* Oddiy radius */
.rounded { border-radius: 10px; }
.circle { border-radius: 50%; }  /* Doira */
.pill { border-radius: 25px; }   /* Tabletka shakli */

/* Har bir burchak uchun */
.custom-radius {
    border-top-left-radius: 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 40px;
}

/* Shorthand - soat yo'nalishida */
.shorthand-radius {
    border-radius: 10px 20px 30px 40px; /* top-left top-right bottom-right bottom-left */
    border-radius: 10px 20px; /* top-left/bottom-right top-right/bottom-left */
}

/* Elliptik radius */
.ellipse {
    border-radius: 50px / 25px; /* gorizontal / vertikal */
}

/* Murakkab shakllar */
.organic-shape {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}`}
            />
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 h-20 rounded-lg flex items-center justify-center text-white font-medium">
                10px
              </div>
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 h-20 rounded-full flex items-center justify-center text-white font-medium">
                50%
              </div>
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 h-20 flex items-center justify-center text-white font-medium" style={{borderRadius: '25px'}}>
                25px
              </div>
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 h-20 flex items-center justify-center text-white font-medium" style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}}>
                organic
              </div>
            </div>
          </div>

          {/* Border Shorthand */}
          <div className="bg-[#1a1f2e] p-8 rounded-xl border border-cyan-500/30">
            <h3 className="text-2xl font-medium text-cyan-400 mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-cyan-400" /> Border Shorthand (Qisqa yozuv)
            </h3>
            
            <CodeBlock 
              language="CSS"
              code={`/* To'liq sintaksis: width style color */
.border-full { border: 2px solid #3498db; }

/* Har bir tomon uchun */
.border-sides {
    border-top: 1px solid red;
    border-right: 2px dashed green;
    border-bottom: 3px dotted blue;
    border-left: 4px double orange;
}

/* Faqat ba'zi tomonlar */
.border-partial {
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
    /* left va right yo'q */
}

/* Border olib tashlash */
.no-border { border: none; }
.transparent-border { border: 2px solid transparent; }

/* Responsive borders */
.responsive-border {
    border: 1px solid #ddd;
}

@media (min-width: 768px) {
    .responsive-border {
        border: 2px solid #333;
    }
}`}
            />
          </div>

          {/* Border Image */}
          <div className="bg-[#1a1f2e] p-8 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-medium text-purple-400 mb-6 flex items-center gap-3">
              <Eye className="w-8 h-8 text-purple-400" /> Border Image (Rasm border)
            </h3>
            
            <CodeBlock 
              language="CSS"
              code={`/* Gradient border */
.gradient-border {
    border: 5px solid;
    border-image: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1) 1;
}

/* Rasm border */
.image-border {
    border: 15px solid;
    border-image: url('border-pattern.png') 30 round;
}

/* Border image slice */
.custom-border-image {
    border: 10px solid;
    border-image-source: linear-gradient(to right, red, blue);
    border-image-slice: 1;
    border-image-width: 10px;
    border-image-repeat: stretch; /* stretch, repeat, round, space */
}

/* Animatsiyali gradient border */
.animated-border {
    border: 3px solid;
    border-image: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #ff6b6b) 1;
    animation: borderAnimation 3s linear infinite;
}

@keyframes borderAnimation {
    0% { border-image-source: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #ff6b6b); }
    25% { border-image-source: linear-gradient(45deg, #4ecdc4, #45b7d1, #ff6b6b, #4ecdc4); }
    50% { border-image-source: linear-gradient(45deg, #45b7d1, #ff6b6b, #4ecdc4, #45b7d1); }
    75% { border-image-source: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #ff6b6b); }
    100% { border-image-source: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #ff6b6b); }
}`}
            />
          </div>
        </div>
      </div>

      {/* Outline - Yangi bo'lim */}
      <div className="mb-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-sm mb-4">
            <Target className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 font-semibold">OUTLINE XUSUSIYATLARI</span>
          </div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            Outline - Tashqi kontur
          </h2>
          <p className="text-xl text-gray-300">
            Border dan tashqarida joylashgan kontur chiziq
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Outline vs Border */}
          <div className="bg-[#1a1f2e] p-8 rounded-xl border border-indigo-500/30">
            <h3 className="text-2xl font-medium text-indigo-400 mb-6">Outline vs Border farqi</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-indigo-300 mb-3">Border</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Box model ning bir qismi</li>
                  <li>• Element o'lchamini o'zgartiradi</li>
                  <li>• Har bir tomoni alohida boshqariladi</li>
                  <li>• Border-radius ishlatish mumkin</li>
                  <li>• Layout ga ta'sir qiladi</li>
                </ul>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-purple-300 mb-3">Outline</h4>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Box model dan tashqarida</li>
                  <li>• Element o'lchamini o'zgartirmaydi</li>
                  <li>• Faqat butun element atrofida</li>
                  <li>• Border-radius ishlamaydi</li>
                  <li>• Layout ga ta'sir qilmaydi</li>
                </ul>
              </div>
            </div>
            
            <CodeBlock 
              language="CSS"
              code={`/* Border vs Outline taqqoslash */
.with-border {
    width: 200px;
    height: 100px;
    border: 5px solid red;
    /* Jami o'lcham: 210x110px */
}

.with-outline {
    width: 200px;
    height: 100px;
    outline: 5px solid blue;
    /* O'lcham o'zgarmaydi: 200x100px */
}

/* Ikkalasini birga ishlatish */
.border-and-outline {
    border: 2px solid green;
    outline: 3px solid orange;
    outline-offset: 2px; /* Outline ni border dan uzoqlashtirish */
}`}
            />
          </div>

          {/* Outline xususiyatlari */}
          <div className="bg-[#1a1f2e] p-8 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-medium text-purple-400 mb-6">Outline Xususiyatlari</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium text-purple-300 mb-3">Outline Width, Style, Color</h4>
                <CodeBlock 
                  language="CSS"
                  code={`/* Asosiy xususiyatlar */
.outline-basic {
    outline-width: 2px;
    outline-style: solid;
    outline-color: #3498db;
}

/* Shorthand */
.outline-short { outline: 2px solid #3498db; }

/* Turli stillar */
.outline-solid { outline: 2px solid red; }
.outline-dashed { outline: 2px dashed green; }
.outline-dotted { outline: 2px dotted blue; }
.outline-double { outline: 4px double orange; }

/* Outline olib tashlash */
.no-outline { outline: none; }
.outline-zero { outline: 0; }

/* Accessibility uchun muhim! */
button:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
}`}
                />
              </div>

              <div>
                <h4 className="text-xl font-medium text-purple-300 mb-3">Outline Offset</h4>
                <CodeBlock 
                  language="CSS"
                  code={`/* Outline ni element dan uzoqlashtirish */
.outline-close {
    outline: 2px solid red;
    outline-offset: 0px; /* Default */
}

.outline-far {
    outline: 2px solid blue;
    outline-offset: 5px; /* 5px uzoqda */
}

.outline-inside {
    outline: 2px solid green;
    outline-offset: -5px; /* Ichkariga */
}

/* Focus holatida */
.button:focus {
    outline: 2px solid #007bff;
    outline-offset: 3px;
    transition: outline-offset 0.2s ease;
}`}
                />
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-800 p-6 rounded-lg text-center outline outline-2 outline-indigo-400" style={{outlineOffset: '0px'}}>
                    <p className="text-indigo-400 text-sm font-medium">offset: 0px</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg text-center outline outline-2 outline-purple-400" style={{outlineOffset: '5px'}}>
                    <p className="text-purple-400 text-sm font-medium">offset: 5px</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg text-center outline outline-2 outline-pink-400" style={{outlineOffset: '-3px'}}>
                    <p className="text-pink-400 text-sm font-medium">offset: -3px</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Outline amaliy foydalanish */}
          <div className="bg-[#1a1f2e] p-8 rounded-xl border border-cyan-500/30">
            <h3 className="text-2xl font-medium text-cyan-400 mb-6">Amaliy Foydalanish</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-cyan-300 mb-3">1. Focus indikatori</h4>
                <CodeBlock 
                  language="CSS"
                  code={`/* Accessibility uchun muhim */
button, input, textarea, select {
    outline: none; /* Default outline ni olib tashlash */
}

button:focus, input:focus, textarea:focus, select:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
}

/* Custom focus ring */
.custom-focus:focus {
    outline: 3px solid rgba(0, 123, 255, 0.5);
    outline-offset: 1px;
}`}
                />
              </div>

              <div>
                <h4 className="text-lg font-medium text-cyan-300 mb-3">2. Hover effektlari</h4>
                <CodeBlock 
                  language="CSS"
                  code={`/* Kartochka hover effekti */
.card {
    transition: outline 0.3s ease;
}

.card:hover {
    outline: 2px solid #3498db;
    outline-offset: 4px;
}

/* Tugma hover */
.button {
    outline: 2px solid transparent;
    transition: all 0.3s ease;
}

.button:hover {
    outline-color: #007bff;
    outline-offset: 2px;
}`}
                />
              </div>

              <div>
                <h4 className="text-lg font-medium text-cyan-300 mb-3">3. Debug uchun</h4>
                <CodeBlock 
                  language="CSS"
                  code={`/* Layout debug qilish uchun */
* {
    outline: 1px solid red !important;
}

/* Faqat ma'lum elementlar */
div { outline: 1px solid blue; }
p { outline: 1px solid green; }
span { outline: 1px solid orange; }

/* Hover da ko'rsatish */
.debug-mode *:hover {
    outline: 2px solid red;
    outline-offset: 1px;
}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Margin */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Margin - Tashqi bo&apos;shliq</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-medium text-blue-400 mb-4">Margin ishlatish</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Hammasi bir xil */
div {
    margin: 20px;
}

/* Har bir tomon */
div {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
}

/* Markazga joylashtirish */
div {
    width: 500px;
    margin: 0 auto;  /* Gorizontal markazda */
}

/* Negative margin */
div {
    margin-top: -10px;  /* Yuqoriga ko'tarish */
}`}
            />
          </div>
        </div>
      </div>

      {/* Box Sizing */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Box Sizing</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Default - content-box */
div {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* Jami kenglik: 300 + 40 + 10 = 350px */
}

/* border-box - Tavsiya etiladi! */
* {
    box-sizing: border-box;
}

div {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* Jami kenglik: 300px (padding va border ichida) */
}`}
          />
          <div className="mt-4 bg-purple-500/10 p-3 rounded">
            <p className="text-purple-300 text-sm">
              💡 <strong>border-box</strong> ishlatish tavsiya etiladi - hisoblash osonroq!
            </p>
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
            Box Model bilan tanishing:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">1.</strong> 3 ta div yarating (300x200px)</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">2.</strong> Har biriga turli padding qo&apos;shing (10px, 20px, 30px)</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">3.</strong> Turli border stillarini sinab ko&apos;ring</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">4.</strong> Margin bilan orasiga bo&apos;shliq qo&apos;shing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Darsdagi topshiriqlar - Kengaytirilgan */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">📝</span> Darsdagi topshiriqlar
          </h2>
          
          <div className="space-y-8">
            {/* Asosiy topshiriqlar */}
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">🎯 Asosiy topshiriqlar</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
                  <h4 className="text-xl font-medium text-yellow-300 mb-3">Topshiriq 1: Border Gallery</h4>
                  <p className="text-gray-300 mb-4">8 ta turli border stilini ko'rsating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>solid, dashed, dotted, double</li>
                    <li>groove, ridge, inset, outset</li>
                    <li>Har biri 150x100px o'lchamda</li>
                    <li>Turli ranglar ishlatib</li>
                    <li>Grid layout bilan joylashtiring</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
                  <h4 className="text-xl font-medium text-yellow-300 mb-3">Topshiriq 2: Border Radius Showcase</h4>
                  <p className="text-gray-300 mb-4">6 ta turli border-radius misoli:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Oddiy yumaloq (10px)</li>
                    <li>To'liq doira (50%)</li>
                    <li>Tabletka shakli (25px)</li>
                    <li>Har xil burchaklar</li>
                    <li>Elliptik shakllar</li>
                    <li>Organik shakllar</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
                  <h4 className="text-xl font-medium text-yellow-300 mb-3">Topshiriq 3: Gradient Borders</h4>
                  <p className="text-gray-300 mb-4">Border-image bilan gradient borderlar:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Linear gradient border</li>
                    <li>Radial gradient border</li>
                    <li>Conic gradient border</li>
                    <li>Animatsiyali gradient</li>
                    <li>Turli qalinliklar</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
                  <h4 className="text-xl font-medium text-yellow-300 mb-3">Topshiriq 4: Outline vs Border</h4>
                  <p className="text-gray-300 mb-4">Farqni ko'rsatuvchi misollar:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Bir xil o'lchamdagi 2 ta div</li>
                    <li>Biriga border, ikkinchisiga outline</li>
                    <li>O'lcham farqini ko'rsating</li>
                    <li>Outline-offset bilan o'ynang</li>
                    <li>Focus holatlarini qo'shing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Murakkab topshiriqlar */}
            <div>
              <h3 className="text-2xl font-semibold text-orange-400 mb-4">🔥 Murakkab topshiriqlar</h3>
              <div className="space-y-6">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-orange-500/20">
                  <h4 className="text-xl font-medium text-orange-300 mb-3">Topshiriq 5: Interactive Card Collection</h4>
                  <p className="text-gray-300 mb-4">6 ta interaktiv kartochka yarating:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                      <li>Default holat: oddiy border</li>
                      <li>Hover: outline paydo bo'ladi</li>
                      <li>Focus: outline rangi o'zgaradi</li>
                      <li>Active: border qalinlashadi</li>
                    </ul>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                      <li>Smooth transition effektlari</li>
                      <li>Turli border-radius</li>
                      <li>Box-shadow bilan birga</li>
                      <li>Responsive dizayn</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg border border-orange-500/20">
                  <h4 className="text-xl font-medium text-orange-300 mb-3">Topshiriq 6: CSS Art Challenge</h4>
                  <p className="text-gray-300 mb-4">Faqat border va outline bilan rasm chizing:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Oddiy geometrik shakllar (uchburchak, olti burchak)</li>
                    <li>Emoji yuz (border-radius bilan)</li>
                    <li>Logo dizayni</li>
                    <li>Abstrakt san'at asari</li>
                    <li>Faqat CSS, rasm ishlatmasdan</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg border border-orange-500/20">
                  <h4 className="text-xl font-medium text-orange-300 mb-3">Topshiriq 7: Form Styling</h4>
                  <p className="text-gray-300 mb-4">Professional form dizayni:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Input fieldlar uchun custom border</li>
                    <li>Focus holatida outline</li>
                    <li>Error holatida qizil border</li>
                    <li>Success holatida yashil border</li>
                    <li>Disabled holatida kulrang border</li>
                    <li>Placeholder styling</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bonus topshiriqlar */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <span className="text-2xl">🌟</span> Bonus Topshiriqlar
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-900/30 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-300 mb-2">Animation Challenge</h4>
                  <p className="text-gray-300 text-sm">Border va outline bilan animatsiya yarating (aylanuvchi border, pulsing outline)</p>
                </div>
                <div className="bg-gray-900/30 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-300 mb-2">Accessibility Focus</h4>
                  <p className="text-gray-300 text-sm">Keyboard navigation uchun professional focus indikatorlar yarating</p>
                </div>
                <div className="bg-gray-900/30 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-300 mb-2">Performance Test</h4>
                  <p className="text-gray-300 text-sm">Border-image vs box-shadow performance ni taqqoslang</p>
                </div>
                <div className="bg-gray-900/30 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-300 mb-2">Cross-browser</h4>
                  <p className="text-gray-300 text-sm">Turli brauzerlarda border xususiyatlarini sinab ko'ring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa - Kengaytirilgan */}
      <div className="mb-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🏠</span>
          <h2 className="text-3xl font-semibold text-gray-100">Uyga Vazifa</h2>
        </div>
        
        <div className="space-y-6">
          {[
            {
              num: "1",
              title: "Border Showcase Website",
              desc: "Border xususiyatlarini ko'rsatuvchi to'liq website yarating:",
              items: [
                "Landing page (hero section border effektlari bilan)",
                "Border Gallery (barcha border stillarini ko'rsatish)",
                "Border Radius Playground (interaktiv border-radius o'zgartirish)",
                "Gradient Border Collection (border-image misollar)",
                "Interactive Examples (hover, focus effektlari)",
                "Responsive dizayn",
                "Dark/Light mode",
                "Smooth animations"
              ]
            },
            {
              num: "2",
              title: "Professional Form Design",
              desc: "Border va outline bilan professional form yarating:",
              items: [
                "Login/Register form",
                "Custom input styling (border, outline)",
                "Focus indikatorlari",
                "Error/Success holatlar",
                "Floating labels",
                "Custom checkbox/radio buttons",
                "File upload styling",
                "Form validation feedback",
                "Accessibility optimized"
              ]
            },
            {
              num: "3",
              title: "CSS Art Gallery",
              desc: "Faqat border va outline bilan san'at asarlari:",
              items: [
                "5 ta turli CSS art yarating:",
                "• Geometrik shakllar (uchburchak, olti burchak)",
                "• Emoji yuzlar (border-radius bilan)",
                "• Logo dizaynlari",
                "• Abstrakt naqshlar",
                "• Animatsiyali art",
                "Gallery layout",
                "Hover effektlari",
                "Code ko'rsatish imkoniyati"
              ]
            },
            {
              num: "4",
              title: "Interactive Card System",
              desc: "Murakkab kartochka tizimi yarating:",
              items: [
                "6 xil kartochka turi",
                "Har biri turli border effektlari bilan",
                "Hover da outline paydo bo'lishi",
                "Click da border o'zgarishi",
                "Loading holatlar",
                "Skeleton loading (border bilan)",
                "Drag & drop qo'llab-quvvatlash",
                "Smooth transitions"
              ]
            },
            {
              num: "5",
              title: "Dashboard Interface",
              desc: "Professional dashboard yarating:",
              items: [
                "Sidebar navigation (border styling)",
                "Card-based widgets",
                "Data tables (border styling)",
                "Charts va graphs",
                "Notification system",
                "Modal dialogs",
                "Dropdown menus",
                "Focus management",
                "Keyboard navigation"
              ]
            },
            {
              num: "6",
              title: "E-commerce Product Cards",
              desc: "Mahsulot kartochkalari tizimi:",
              items: [
                "Product grid layout",
                "Image hover effektlari",
                "Price tag styling",
                "Add to cart buttons",
                "Wishlist functionality",
                "Product comparison",
                "Filter sidebar",
                "Shopping cart design",
                "Checkout process"
              ]
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all border border-gray-800 hover:border-purple-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center font-bold text-white">
                  {item.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-3">{item.desc}</p>
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
        
        {/* Qo'shimcha talablar */}
        <div className="mt-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-indigo-400 mb-4 flex items-center gap-2">
            <span className="text-2xl">📋</span> Umumiy Talablar
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-indigo-300 mb-2">Texnik Talablar</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>Semantic HTML ishlatish</li>
                <li>CSS Grid/Flexbox layout</li>
                <li>Responsive dizayn (mobile-first)</li>
                <li>Cross-browser compatibility</li>
                <li>Performance optimization</li>
                <li>Clean, commented code</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-indigo-300 mb-2">Dizayn Talablar</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                <li>Consistent spacing system</li>
                <li>Color palette (3-5 ranglar)</li>
                <li>Typography hierarchy</li>
                <li>Accessibility (WCAG guidelines)</li>
                <li>Smooth animations (60fps)</li>
                <li>Professional appearance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/colors" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Colors
        </Link>
        
        <Link href="/docs/css/units" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Units
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
