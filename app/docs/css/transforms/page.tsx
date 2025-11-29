"use client";

import CodeBlock from "@/components/CodeBlock";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import Link from "next/link";

export default function CSSTransformsPage() {
  return (
    <div className="max-w-none">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-100 mb-4">CSS Transforms</h1>
        <p className="text-xl text-gray-400">Elementlarni o&apos;zgartirish va harakatlantirish</p>
      </div>

      <VideoPlaceholder title="CSS Transforms" />

      {/* 2D Transforms */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">2D Transform Turlari</h2>
        <p className="text-gray-300 mb-6">
          Transform xususiyati elementlarni aylantirishga, kattalashtirish, siljitish va burishga imkon beradi.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Rotate (Aylantirish)</h3>
        <CodeBlock 
          language="css"
          code={`/* Soat yo'nalishida aylantirish */
.rotate-element {
    transform: rotate(45deg);
}

/* Soat yo'nalishiga teskari */
.rotate-counter {
    transform: rotate(-45deg);
}

/* Hover effekti */
.card:hover {
    transform: rotate(5deg);
    transition: transform 0.3s ease;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Scale (Kattalashtirish)</h3>
        <CodeBlock 
          language="css"
          code={`/* Barcha yo'nalishlarda */
.scale-element {
    transform: scale(1.5);
}

/* Faqat kenglik */
.scale-x {
    transform: scaleX(2);
}

/* Faqat balandlik */
.scale-y {
    transform: scaleY(0.5);
}

/* Hover zoom effekti */
.image:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Translate (Siljitish)</h3>
        <CodeBlock 
          language="css"
          code={`/* X va Y o'qi bo'yicha */
.translate-element {
    transform: translate(50px, 100px);
}

/* Faqat X o'qi */
.translate-x {
    transform: translateX(50px);
}

/* Faqat Y o'qi */
.translate-y {
    transform: translateY(-30px);
}

/* Markazga joylashtirish */
.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Skew (Burish)</h3>
        <CodeBlock 
          language="css"
          code={`/* X va Y o'qi bo'yicha burish */
.skew-element {
    transform: skew(20deg, 10deg);
}

/* Faqat X o'qi */
.skew-x {
    transform: skewX(20deg);
}

/* Faqat Y o'qi */
.skew-y {
    transform: skewY(10deg);
}`}
        />
      </div>

      {/* Multiple Transforms */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Bir nechta Transform</h2>
        <p className="text-gray-300 mb-6">
          Bir nechta transform funksiyalarini birgalikda ishlatish mumkin.
        </p>
        <CodeBlock 
          language="css"
          code={`/* Ketma-ket qo'llash */
.multi-transform {
    transform: rotate(45deg) scale(1.2) translate(10px, 20px);
}

/* Hover effekti */
.button {
    transform: scale(1);
    transition: transform 0.3s ease;
}

.button:hover {
    transform: scale(1.05) translateY(-2px);
}

/* Murakkab animatsiya */
.card {
    transition: all 0.3s ease;
}

.card:hover {
    transform: rotate(2deg) scale(1.05) translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}`}
        />
      </div>

      {/* 3D Transforms */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">3D Transforms</h2>
        <p className="text-gray-300 mb-6">
          3D transformlar elementlarni uch o&apos;lchamli fazoda boshqarish imkonini beradi.
        </p>
        <CodeBlock 
          language="css"
          code={`/* 3D aylantirish */
.rotate-3d {
    transform: rotateX(45deg) rotateY(45deg);
    transform-style: preserve-3d;
}

/* Perspektiva */
.container {
    perspective: 1000px;
}

.card {
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.card:hover {
    transform: rotateY(180deg);
}

/* 3D siljitish */
.translate-3d {
    transform: translateZ(50px);
}

/* Flip card effekti */
.flip-card {
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.flip-card-back {
    transform: rotateY(180deg);
}`}
        />
      </div>

      {/* Transform Origin */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Transform Origin</h2>
        <p className="text-gray-300 mb-6">
          Transform-origin transformatsiya markazini belgilaydi.
        </p>
        <CodeBlock 
          language="css"
          code={`/* Default - markaz */
.default {
    transform-origin: center center;
}

/* Yuqori chap burchak */
.top-left {
    transform-origin: top left;
    transform: rotate(45deg);
}

/* Pastki o'ng burchak */
.bottom-right {
    transform-origin: bottom right;
    transform: rotate(45deg);
}

/* Pixel qiymatlari */
.custom {
    transform-origin: 50px 100px;
}

/* Foiz qiymatlari */
.percentage {
    transform-origin: 75% 25%;
}`}
        />
      </div>

      {/* Practical Examples */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Amaliy Misollar</h2>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Hover Card Effekti</h3>
        <CodeBlock 
          language="css"
          code={`.card {
    width: 300px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    transition: all 0.3s ease;
    cursor: pointer;
}

.card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Loading Spinner</h3>
        <CodeBlock 
          language="css"
          code={`.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Pulse Button</h3>
        <CodeBlock 
          language="css"
          code={`.pulse-button {
    padding: 15px 30px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.1s ease;
}

.pulse-button:hover {
    animation: pulse 0.5s ease;
}

.pulse-button:active {
    transform: scale(0.95);
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}`}
        />
      </div>

      {/* Practice Exercise */}
      <div className="mb-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">💻</span>
          <h2 className="text-3xl font-semibold text-gray-100">Amaliy Mashq</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 1: Hover Card</h3>
            <p className="text-gray-300 mb-4">
              Quyidagi effektlarga ega card yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Hover qilganda yuqoriga ko&apos;tariladi</li>
              <li>Biroz kattalashadi</li>
              <li>Soya paydo bo&apos;ladi</li>
              <li>Smooth transition bo&apos;ladi</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 2: Flip Card</h3>
            <p className="text-gray-300 mb-4">
              Hover qilganda aylanadigan 3D card yarating. Old tomonida rasm, orqa tomonida matn bo&apos;lsin.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 3: Loading Animation</h3>
            <p className="text-gray-300 mb-4">
              Transform va animation yordamida loading indikatori yarating.
            </p>
          </div>
        </div>
      </div>

      {/* Assignment */}
      <div className="mb-12 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-8 border border-orange-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">📝</span>
          <h2 className="text-3xl font-semibold text-gray-100">Topshiriq</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Portfolio Card Gallery</h3>
            <p className="text-gray-300 mb-4">
              Quyidagi xususiyatlarga ega portfolio card gallery yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Kamida 6 ta card bo&apos;lsin</li>
              <li>Har bir card hover qilganda:</li>
              <ul className="list-circle list-inside ml-8 mt-2 space-y-1">
                <li>Yuqoriga ko&apos;tariladi (translateY)</li>
                <li>Biroz kattalashadi (scale)</li>
                <li>Biroz aylanadi (rotate 2-3 daraja)</li>
                <li>Soya kuchayadi</li>
              </ul>
              <li>Smooth transition (0.3s ease)</li>
              <li>Transform-origin to&apos;g&apos;ri sozlangan bo&apos;lsin</li>
              <li>Responsive bo&apos;lsin (mobile, tablet, desktop)</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 backdrop-blur">
            <h4 className="text-lg font-semibold text-gray-200 mb-3">Bonus:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Flip card effekti qo&apos;shing (3D)</li>
              <li>Loading animation qo&apos;shing</li>
              <li>Parallax effekt qo&apos;shing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Homework */}
      <div className="mb-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🏠</span>
          <h2 className="text-3xl font-semibold text-gray-100">Uyga Vazifa</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">1. Transform Showcase</h3>
            <p className="text-gray-300">
              Barcha transform turlarini ko&apos;rsatuvchi interaktiv sahifa yarating. Har bir transform uchun alohida misol va izoh bo&apos;lsin.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">2. 3D Cube</h3>
            <p className="text-gray-300">
              CSS 3D transforms yordamida aylanadigan kub yarating. Har bir tomonida boshqa rang yoki matn bo&apos;lsin.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">3. Interactive Menu</h3>
            <p className="text-gray-300">
              Transform effektlari bilan interaktiv menyu yarating. Hover, active va focus holatlarida turli effektlar bo&apos;lsin.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mb-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">📚</span>
          <h2 className="text-3xl font-semibold text-gray-100">Qo&apos;shimcha Manbalar</h2>
        </div>
        
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <span><strong>MDN Web Docs:</strong> CSS Transform to&apos;liq qo&apos;llanma</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <span><strong>CSS-Tricks:</strong> Transform misollar va tushuntirishlar</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <span><strong>CodePen:</strong> Transform effektlari to&apos;plami</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <span><strong>Can I Use:</strong> Brauzer qo&apos;llab-quvvatlash ma&apos;lumotlari</span>
          </li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/grid" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Grid
        </Link>
        
        <Link href="/docs/css/animations" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Animations
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
