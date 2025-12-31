"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { Zap, Sparkles, Code2, Play, RotateCw, ArrowRight, CheckCircle, Layers } from "lucide-react";

export default function CSSAnimationsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm mb-6">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-semibold">CSS ANIMATIONS</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
            CSS Animations
          </h1>
          <p className="text-2xl text-gray-300">
            Animatsiyalar va harakatli effektlar yaratish
          </p>
        </div>
      </div>

      {/* CSS Animations nima? */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">CSS Animations nima?</h2>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="text-purple-400 font-semibold">CSS Animations</span> - bu web sahifalarni jonli va interaktiv qilish uchun ishlatiladi. Elementlarni harakatlantirish, o'zgartirish va chiroyli effektlar yaratish mumkin.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl p-8 border border-pink-500/20">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-pink-400" />
            <h3 className="text-2xl font-semibold text-gray-100">Animatsiyalar nima beradi?</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Sahifani jonli va qiziqarli qiladi",
              "Foydalanuvchi e'tiborini jalb qiladi",
              "Loading jarayonlarini ko'rsatadi",
              "Hover va click effektlari",
              "Smooth o'tishlar (transitions)",
              "Professional ko'rinish beradi"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/70 transition-all">
                <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Transitions */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
            <RotateCw className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">CSS Transitions</h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="text-blue-400 font-semibold">Transition</span> xususiyati elementning bir holatdan ikkinchi holatga silliq o'tishini ta'minlaydi. Bu eng oddiy animatsiya turi.
          </p>
        </div>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Asosiy Sintaksis</h3>
        <CodeBlock 
          language="CSS"
          code={`/* Qisqa yozuv */
div {
    transition: all 0.3s ease;
}

/* Toliq yozuv */
div {
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
}

/* Bir nechta property */
div {
    transition: background-color 0.3s ease,
                transform 0.5s ease-in-out,
                opacity 0.2s linear;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Timing Functions</h3>
        <p className="text-gray-300 mb-4">
          Timing function animatsiya tezligini boshqaradi.
        </p>
        <CodeBlock 
          language="CSS"
          code={`/* Linear - bir xil tezlikda */
.linear {
    transition: all 0.3s linear;
}

/* Ease - sekin boshlanadi va tugaydi (default) */
.ease {
    transition: all 0.3s ease;
}

/* Ease-in - sekin boshlanadi */
.ease-in {
    transition: all 0.3s ease-in;
}

/* Ease-out - sekin tugaydi */
.ease-out {
    transition: all 0.3s ease-out;
}

/* Ease-in-out - sekin boshlanadi va tugaydi */
.ease-in-out {
    transition: all 0.3s ease-in-out;
}

/* Cubic-bezier - maxsus tezlik */
.custom {
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Amaliy Misollar</h3>
        <CodeBlock 
          language="CSS"
          code={`/* Button hover effekti */
.button {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.button:active {
    transform: translateY(0);
}

/* Card hover */
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

/* Menu item underline */
.menu-item {
    position: relative;
    transition: color 0.3s ease;
}

.menu-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #3498db;
    transition: width 0.3s ease;
}

.menu-item:hover::after {
    width: 100%;
}

/* Image zoom */
.image-container {
    overflow: hidden;
}

.image-container img {
    transition: transform 0.5s ease;
}

.image-container:hover img {
    transform: scale(1.1);
}`}
        />
      </div>

      {/* Keyframes Animations */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Keyframes Animations</h2>
        <p className="text-gray-300 mb-6">
          @keyframes qoidasi murakkab animatsiyalar yaratish uchun ishlatiladi. Bu yerda animatsiyaning har bir bosqichini aniq belgilash mumkin.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Asosiy Sintaksis</h3>
        <CodeBlock 
          language="CSS"
          code={`/* Keyframes yaratish */
@keyframes slide {
    0% {
        transform: translateX(0);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translateX(100px);
        opacity: 0;
    }
}

/* Animatsiyani qo'llash */
div {
    animation: slide 2s ease-in-out infinite;
}

/* To'liq yozuv */
div {
    animation-name: slide;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Animation Properties</h3>
        <CodeBlock 
          language="CSS"
          code={`/* animation-direction */
.normal { animation-direction: normal; }        /* Oddiy */
.reverse { animation-direction: reverse; }      /* Teskari */
.alternate { animation-direction: alternate; }  /* Navbatma-navbat */

/* animation-fill-mode */
.none { animation-fill-mode: none; }           /* Hech narsa */
.forwards { animation-fill-mode: forwards; }   /* Oxirgi holatda qoladi */
.backwards { animation-fill-mode: backwards; } /* Birinchi holatdan boshlanadi */
.both { animation-fill-mode: both; }           /* Ikkalasi ham */

/* animation-iteration-count */
.once { animation-iteration-count: 1; }        /* 1 marta */
.three { animation-iteration-count: 3; }       /* 3 marta */
.infinite { animation-iteration-count: infinite; } /* Cheksiz */

/* animation-play-state */
.running { animation-play-state: running; }    /* Ishlayapti */
.paused { animation-play-state: paused; }      /* To'xtatilgan */
.paused:hover { animation-play-state: running; } /* Hover qilganda ishlaydi */`}
        />
      </div>

      {/* Keng Tarqalgan Animatsiyalar */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Keng Tarqalgan Animatsiyalar</h2>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Fade In (Paydo bo'lish)</h3>
        <CodeBlock 
          language="CSS"
          code={`@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.fade-in {
    animation: fadeIn 1s ease-in;
}

/* Fade In Up */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.8s ease-out;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Slide (Siljish)</h3>
        <CodeBlock 
          language="CSS"
          code={`/* Slide In Left */
@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-in-left {
    animation: slideInLeft 0.5s ease-out;
}

/* Slide In Right */
@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-in-right {
    animation: slideInRight 0.5s ease-out;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Bounce (Sakrash)</h3>
        <CodeBlock 
          language="CSS"
          code={`@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}

.bounce {
    animation: bounce 2s infinite;
}

/* Bounce In */
@keyframes bounceIn {
    0% {
        opacity: 0;
        transform: scale(0.3);
    }
    50% {
        opacity: 1;
        transform: scale(1.05);
    }
    70% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }
}

.bounce-in {
    animation: bounceIn 0.8s ease-out;
}`}
        />
      </div>

      {/* Performance Maslahatlar */}
      <div className="mb-12 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-8 border border-yellow-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">⚡</span>
          <h2 className="text-3xl font-semibold text-gray-100">Performance Maslahatlar</h2>
        </div>
        
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1 text-xl">✓</span>
            <div>
              <strong className="text-gray-200">Transform va Opacity ishlatish:</strong>
              <p className="mt-1">Bu xususiyatlar GPU tomonidan qayta ishlanadi va eng tez ishlaydi.</p>
              <CodeBlock 
                language="CSS"
                code={`/* Yaxshi */
.element {
    transform: translateX(100px);
    opacity: 0.5;
}`}
              />
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 mt-1 text-xl">✗</span>
            <div>
              <strong className="text-gray-200">Width, Height, Top, Left animatsiya qilmaslik:</strong>
              <p className="mt-1">Bu xususiyatlar layout qayta hisoblanishiga olib keladi va sekin ishlaydi.</p>
              <CodeBlock 
                language="CSS"
                code={`/* Yomon */
.element {
    width: 200px; /* Sekin */
    left: 100px;  /* Sekin */
}

/* Yaxshi */
.element {
    transform: translateX(100px) scaleX(2); /* Tez */
}`}
              />
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1 text-xl">✓</span>
            <div>
              <strong className="text-gray-200">will-change ishlatish:</strong>
              <p className="mt-1">Brauzerga qaysi xususiyat o'zgarishini oldindan bildiradi.</p>
              <CodeBlock 
                language="CSS"
                code={`.animated {
    will-change: transform, opacity;
}

/* Animatsiya tugagandan keyin olib tashlash */
.animated.done {
    will-change: auto;
}`}
              />
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1 text-xl">✓</span>
            <div>
              <strong className="text-gray-200">Hardware acceleration:</strong>
              <p className="mt-1">3D transform ishlatish GPU ni faollashtiradi.</p>
              <CodeBlock 
                language="CSS"
                code={`.accelerated {
    transform: translateZ(0);
    /* yoki */
    transform: translate3d(0, 0, 0);
}`}
              />
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-400 mt-1 text-xl">⚠</span>
            <div>
              <strong className="text-gray-200">Haddan tashqari animatsiya qilmaslik:</strong>
              <p className="mt-1">Bir vaqtning o'zida juda ko'p animatsiya performance ga zarar beradi.</p>
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
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 1: Button Animations</h3>
            <p className="text-gray-300 mb-4">
              Quyidagi animatsiyalarga ega button yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Hover: yuqoriga ko'tariladi va soya paydo bo'ladi</li>
              <li>Active: pastga bosiladi</li>
              <li>Loading holati: spinner animatsiyasi</li>
              <li>Success: yashil rangga o'tadi va galochka paydo bo'ladi</li>
              <li>Error: qizil rangga o'tadi va silkinadi</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 2: Card Animations</h3>
            <p className="text-gray-300 mb-4">
              Sahifaga kirganda ketma-ket paydo bo'ladigan cardlar yarating (stagger effect). Har bir card fadeIn va slideUp animatsiyasi bilan paydo bo'lsin.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 3: Loading Screen</h3>
            <p className="text-gray-300 mb-4">
              Kamida 3 xil loading animatsiyasi bilan loading screen yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Spinner</li>
              <li>Dots</li>
              <li>Progress bar</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 4: Menu Animations</h3>
            <p className="text-gray-300 mb-4">
              Animatsiyali dropdown menu yarating. Menu ochilganda har bir item ketma-ket paydo bo'lsin.
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
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Animated Landing Page</h3>
            <p className="text-gray-300 mb-4">
              Quyidagi animatsiyalarga ega landing page yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li><strong>Hero section:</strong> Fade in va slide up animatsiyasi</li>
              <li><strong>Features section:</strong> Cardlar ketma-ket paydo bo'ladi (stagger)</li>
              <li><strong>Animated background:</strong> Gradient yoki particles animatsiyasi</li>
              <li><strong>Scroll animations:</strong> Scroll qilganda elementlar paydo bo'ladi</li>
              <li><strong>Interactive buttons:</strong> Hover, click va loading animatsiyalari</li>
              <li><strong>Loading screen:</strong> Sahifa yuklanayotganda ko'rsatiladi</li>
              <li><strong>Smooth scrolling:</strong> Bo'limlar orasida silliq scroll</li>
              <li><strong>Counter animation:</strong> Raqamlar animatsiya bilan ortadi</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 backdrop-blur">
            <h4 className="text-lg font-semibold text-gray-200 mb-3">Texnik Talablar:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Faqat CSS animatsiyalar (JavaScript ishlatmaslik)</li>
              <li>Performance optimizatsiya (transform va opacity)</li>
              <li>Responsive dizayn (mobile, tablet, desktop)</li>
              <li>Accessibility (prefers-reduced-motion)</li>
              <li>Smooth va professional animatsiyalar</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 backdrop-blur">
            <h4 className="text-lg font-semibold text-gray-200 mb-3">Bonus:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Parallax scrolling effekti</li>
              <li>Typing effect matn uchun</li>
              <li>Animated SVG icons</li>
              <li>Floating elements</li>
              <li>Dark/Light mode transition</li>
              <li>Page transition animatsiyalari</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa */}
      <div className="mb-12 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🏠</span>
          <h2 className="text-3xl font-semibold text-gray-100">Uyga Vazifa</h2>
        </div>
        
        <div className="space-y-6">
          {[
            {
              num: "1",
              title: "Animation Library",
              desc: "O'zingizning animation library yarating. Kamida 20 ta turli animatsiya bo'lsin:",
              items: [
                "Fade variations (fadeIn, fadeOut, fadeInUp, fadeInDown)",
                "Slide variations (slideInLeft, slideInRight, slideInUp, slideInDown)",
                "Zoom variations (zoomIn, zoomOut)",
                "Rotate variations (rotateIn, rotateOut)",
                "Bounce variations",
                "Flip variations"
              ]
            },
            {
              num: "2",
              title: "Interactive Game",
              desc: "CSS animatsiyalar yordamida oddiy o'yin yarating:",
              items: [
                "Catch the ball game",
                "Memory card game",
                "Whack-a-mole game"
              ],
              note: "Maslahat: CSS animatsiyalar + checkbox/radio input triklar ishlatish mumkin"
            },
            {
              num: "3",
              title: "Animated Infographic",
              desc: "Ma'lumotlarni ko'rsatuvchi animatsiyali infografika yarating:",
              items: [
                "Animated charts (bar, pie, line)",
                "Progress circles",
                "Counter animations",
                "Timeline animations",
                "Icon animations"
              ]
            },
            {
              num: "4",
              title: "Portfolio Showcase",
              desc: "O'zingizning portfolio sahifangizni animatsiyalar bilan bezating. Har bir section uchun alohida animatsiya bo'lsin."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all border border-gray-800 hover:border-red-500/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center font-bold text-white">
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
                  {item.note && (
                    <p className="text-gray-400 text-sm mt-2">{item.note}</p>
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
              <strong className="text-gray-200">Animate.css:</strong>
              <p className="text-sm mt-1">Tayyor animatsiyalar kutubxonasi - o'rganish va o'rgatish uchun</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">Animista:</strong>
              <p className="text-sm mt-1">CSS animatsiyalar generatori - kod yaratish va o'zgartirish</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">Cubic-bezier.com:</strong>
              <p className="text-sm mt-1">Timing function yaratish vositasi - maxsus tezlik sozlash</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">CodePen:</strong>
              <p className="text-sm mt-1">Animation misollar to'plami - ilhom olish uchun</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">MDN Web Docs:</strong>
              <p className="text-sm mt-1">CSS Animations to'liq qo'llanma</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">Can I Use:</strong>
              <p className="text-sm mt-1">Brauzer qo'llab-quvvatlash ma'lumotlari</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/transforms" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Transforms
        </Link>
        
        <Link href="/docs/css/responsive" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Responsive Design
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
