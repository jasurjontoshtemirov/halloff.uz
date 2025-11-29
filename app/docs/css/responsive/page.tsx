"use client";

import CodeBlock from "@/components/CodeBlock";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import Link from "next/link";

export default function CSSResponsivePage() {
  return (
    <div className="max-w-none">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-100 mb-4">Responsive Web Design</h1>
        <p className="text-xl text-gray-400">Barcha qurilmalarda mukammal korinish</p>
      </div>

      <VideoPlaceholder title="CSS Responsive Design" />

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">CSS Transitions</h2>
        <p className="text-gray-300 mb-6">
          Transition xususiyati elementning bir holatdan ikkinchi holatga silliq otishini taminlaydi. Bu eng oddiy animatsiya turi.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Asosiy Sintaksis</h3>
        <CodeBlock 
          language="css"
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
          language="css"
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
          language="css"
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

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Keyframes Animations</h2>
        <p className="text-gray-300 mb-6">
          @keyframes qoidasi murakkab animatsiyalar yaratish uchun ishlatiladi. Bu yerda animatsiyaning har bir bosqichini aniq belgilash mumkin.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Asosiy Sintaksis</h3>
        <CodeBlock 
          language="css"
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

/* Animatsiyani qollash */
div {
    animation: slide 2s ease-in-out infinite;
}

/* Toliq yozuv */
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
          language="css"
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
.paused { animation-play-state: paused; }      /* Toxtatilgan */
.paused:hover { animation-play-state: running; } /* Hover qilganda ishlaydi */`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Keng Tarqalgan Animatsiyalar</h2>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Fade In (Paydo bolish)</h3>
        <CodeBlock 
          language="css"
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
          language="css"
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
          language="css"
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

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Pulse (Pulsatsiya)</h3>
        <CodeBlock 
          language="css"
          code={`@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}

.pulse {
    animation: pulse 1s ease-in-out infinite;
}

/* Heartbeat */
@keyframes heartbeat {
    0%, 100% {
        transform: scale(1);
    }
    10%, 30% {
        transform: scale(0.9);
    }
    20%, 40% {
        transform: scale(1.1);
    }
}

.heartbeat {
    animation: heartbeat 1.3s ease-in-out infinite;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Shake (Silkinish)</h3>
        <CodeBlock 
          language="css"
          code={`@keyframes shake {
    0%, 100% {
        transform: translateX(0);
    }
    10%, 30%, 50%, 70%, 90% {
        transform: translateX(-10px);
    }
    20%, 40%, 60%, 80% {
        transform: translateX(10px);
    }
}

.shake {
    animation: shake 0.5s ease-in-out;
}

/* Shake Vertical */
@keyframes shakeVertical {
    0%, 100% {
        transform: translateY(0);
    }
    10%, 30%, 50%, 70%, 90% {
        transform: translateY(-8px);
    }
    20%, 40%, 60%, 80% {
        transform: translateY(8px);
    }
}

.shake-vertical {
    animation: shakeVertical 0.5s ease-in-out;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Rotate (Aylantirish)</h3>
        <CodeBlock 
          language="css"
          code={`@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.rotate {
    animation: rotate 2s linear infinite;
}

/* Rotate In */
@keyframes rotateIn {
    from {
        transform: rotate(-200deg);
        opacity: 0;
    }
    to {
        transform: rotate(0);
        opacity: 1;
    }
}

.rotate-in {
    animation: rotateIn 0.6s ease-out;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Flip (Aylantirish)</h3>
        <CodeBlock 
          language="css"
          code={`@keyframes flip {
    from {
        transform: perspective(400px) rotateY(0);
    }
    to {
        transform: perspective(400px) rotateY(360deg);
    }
}

.flip {
    animation: flip 1s ease-in-out;
}

/* Flip In X */
@keyframes flipInX {
    from {
        transform: perspective(400px) rotateX(90deg);
        opacity: 0;
    }
    to {
        transform: perspective(400px) rotateX(0);
        opacity: 1;
    }
}

.flip-in-x {
    animation: flipInX 0.6s ease-out;
}`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Loading Animatsiyalari</h2>
        <p className="text-gray-300 mb-6">
          Loading animatsiyalari foydalanuvchiga jarayon davom etayotganini korsatadi.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Spinner</h3>
        <CodeBlock 
          language="css"
          code={`@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

/* Dual Ring Spinner */
.dual-ring {
    width: 64px;
    height: 64px;
}

.dual-ring::after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #3498db;
    border-color: #3498db transparent #3498db transparent;
    animation: spin 1.2s linear infinite;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Dots (Nuqtalar)</h3>
        <CodeBlock 
          language="css"
          code={`@keyframes bounceDots {
    0%, 80%, 100% {
        transform: scale(0);
        opacity: 0.5;
    }
    40% {
        transform: scale(1);
        opacity: 1;
    }
}

.loading-dots {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
}

.dot {
    width: 15px;
    height: 15px;
    background: #3498db;
    border-radius: 50%;
    animation: bounceDots 1.4s infinite ease-in-out both;
}

.dot:nth-child(1) {
    animation-delay: -0.32s;
}

.dot:nth-child(2) {
    animation-delay: -0.16s;
}

.dot:nth-child(3) {
    animation-delay: 0s;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Progress Bar</h3>
        <CodeBlock 
          language="css"
          code={`@keyframes progress {
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
}

.progress-bar {
    width: 100%;
    height: 4px;
    background: #f3f3f3;
    overflow: hidden;
    border-radius: 2px;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #3498db, #2ecc71);
    animation: progress 2s ease-in-out infinite;
}

/* Indeterminate Progress */
@keyframes indeterminate {
    0% {
        left: -35%;
        right: 100%;
    }
    60% {
        left: 100%;
        right: -90%;
    }
    100% {
        left: 100%;
        right: -90%;
    }
}

.progress-indeterminate {
    position: relative;
    width: 100%;
    height: 4px;
    background: #f3f3f3;
    overflow: hidden;
}

.progress-indeterminate::before {
    content: '';
    position: absolute;
    height: 100%;
    background: #3498db;
    animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Skeleton Loading</h3>
        <CodeBlock 
          language="css"
          code={`@keyframes shimmer {
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
}

.skeleton {
    background: linear-gradient(
        90deg,
        #f0f0f0 0px,
        #e0e0e0 40px,
        #f0f0f0 80px
    );
    background-size: 1000px 100%;
    animation: shimmer 2s infinite;
}

.skeleton-text {
    height: 16px;
    margin-bottom: 8px;
    border-radius: 4px;
}

.skeleton-title {
    height: 24px;
    width: 60%;
    margin-bottom: 16px;
    border-radius: 4px;
}`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Murakkab Animatsiyalar</h2>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Floating (Suzish)</h3>
        <CodeBlock 
          language="css"
          code={`@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}

.floating {
    animation: float 3s ease-in-out infinite;
}

/* Floating with rotation */
@keyframes floatRotate {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(5deg);
    }
}

.float-rotate {
    animation: floatRotate 4s ease-in-out infinite;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Typing Effect</h3>
        <CodeBlock 
          language="css"
          code={`@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}

.typing-text {
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid;
    animation: typing 3.5s steps(40) 1s forwards,
               blink 0.75s step-end infinite;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Gradient Animation</h3>
        <CodeBlock 
          language="css"
          code={`@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.gradient-bg {
    background: linear-gradient(
        -45deg,
        #ee7752,
        #e73c7e,
        #23a6d5,
        #23d5ab
    );
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Wave Animation</h3>
        <CodeBlock 
          language="css"
          code={`@keyframes wave {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-15px);
    }
}

.wave {
    display: inline-block;
}

.wave span {
    display: inline-block;
    animation: wave 1.2s ease-in-out infinite;
}

.wave span:nth-child(1) { animation-delay: 0s; }
.wave span:nth-child(2) { animation-delay: 0.1s; }
.wave span:nth-child(3) { animation-delay: 0.2s; }
.wave span:nth-child(4) { animation-delay: 0.3s; }
.wave span:nth-child(5) { animation-delay: 0.4s; }`}
        />
      </div>

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
                language="css"
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
                language="css"
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
              <p className="mt-1">Brauzerga qaysi xususiyat ozgarishini oldindan bildiradi.</p>
              <CodeBlock 
                language="css"
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
                language="css"
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
              <p className="mt-1">Bir vaqtning ozida juda kop animatsiya performance ga zarar beradi.</p>
            </div>
          </li>
        </ul>
      </div>

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
              <li>Hover: yuqoriga kotariladi va soya paydo boladi</li>
              <li>Active: pastga bosiladi</li>
              <li>Loading holati: spinner animatsiyasi</li>
              <li>Success: yashil rangga otadi va galochka paydo boladi</li>
              <li>Error: qizil rangga otadi va silkinadi</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 2: Card Animations</h3>
            <p className="text-gray-300 mb-4">
              Sahifaga kirganda ketma-ket paydo boladigan cardlar yarating (stagger effect). Har bir card fadeIn va slideUp animatsiyasi bilan paydo bolsin.
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
              Animatsiyali dropdown menu yarating. Menu ochilganda har bir item ketma-ket paydo bolsin.
            </p>
          </div>
        </div>
      </div>

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
              <li><strong>Features section:</strong> Cardlar ketma-ket paydo boladi (stagger)</li>
              <li><strong>Animated background:</strong> Gradient yoki particles animatsiyasi</li>
              <li><strong>Scroll animations:</strong> Scroll qilganda elementlar paydo boladi</li>
              <li><strong>Interactive buttons:</strong> Hover, click va loading animatsiyalari</li>
              <li><strong>Loading screen:</strong> Sahifa yuklanayotganda korsatiladi</li>
              <li><strong>Smooth scrolling:</strong> Bolimlar orasida silliq scroll</li>
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

      <div className="mb-12 bg-gradient-to-br from-lime-500/10 to-green-500/10 rounded-2xl p-8 border border-lime-500/20 hover:border-lime-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🏠</span>
          <h2 className="text-3xl font-semibold text-gray-100">Uyga Vazifa</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">1. Animation Library</h3>
            <p className="text-gray-300 mb-3">
              Ozingizning animation library yarating. Kamida 20 ta turli animatsiya bolsin:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>Fade variations (fadeIn, fadeOut, fadeInUp, fadeInDown)</li>
              <li>Slide variations (slideInLeft, slideInRight, slideInUp, slideInDown)</li>
              <li>Zoom variations (zoomIn, zoomOut)</li>
              <li>Rotate variations (rotateIn, rotateOut)</li>
              <li>Bounce variations</li>
              <li>Flip variations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">2. Interactive Game</h3>
            <p className="text-gray-300 mb-3">
              CSS animatsiyalar yordamida oddiy oyin yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>Catch the ball game</li>
              <li>Memory card game</li>
              <li>Whack-a-mole game</li>
            </ul>
            <p className="text-gray-400 text-sm mt-2">
              Maslahat: CSS animatsiyalar + checkbox/radio input triklar ishlatish mumkin
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">3. Animated Infographic</h3>
            <p className="text-gray-300 mb-3">
              Malumotlarni korsatuvchi animatsiyali infografika yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>Animated charts (bar, pie, line)</li>
              <li>Progress circles</li>
              <li>Counter animations</li>
              <li>Timeline animations</li>
              <li>Icon animations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">4. Portfolio Showcase</h3>
            <p className="text-gray-300">
              Ozingizning portfolio sahifangizni animatsiyalar bilan bezating. Har bir section uchun alohida animatsiya bolsin.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">📚</span>
          <h2 className="text-3xl font-semibold text-gray-100">Qoshimcha Manbalar</h2>
        </div>
        
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">Animate.css:</strong>
              <p className="text-sm mt-1">Tayyor animatsiyalar kutubxonasi - danishish va orgatish uchun</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">Animista:</strong>
              <p className="text-sm mt-1">CSS animatsiyalar generatori - kod yaratish va ozgartirish</p>
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
              <p className="text-sm mt-1">Animation misollar toplami - ilhom olish uchun</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">MDN Web Docs:</strong>
              <p className="text-sm mt-1">CSS Animations toliq qollanma</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">→</span>
            <div>
              <strong className="text-gray-200">Can I Use:</strong>
              <p className="text-sm mt-1">Brauzer qollab-quvvatlash malumotlari</p>
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
