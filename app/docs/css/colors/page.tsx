"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { 
  Palette, 
  Paintbrush, 
  Image, 
  Maximize, 
  Target, 
  RotateCcw, 
  Pin, 
  Scissors, 
  Zap, 
  Monitor, 
  BookOpen, 
  Home, 
  Star,
  Palette as ColorPalette,
  Rainbow,
  Theater,
  Sunrise,
  Sparkles,
  Tent,
  Square,
  Crosshair,
  Waves,
  Camera,
  ImageIcon,
  Layers
} from "lucide-react";

export default function CSSColorsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full text-sm mb-6">
            <Palette className="w-4 h-4 text-red-400" />
            <span className="text-red-300 font-semibold">CSS RANGLAR</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 mb-4">
            CSS Ranglar
          </h1>
          <p className="text-2xl text-gray-300">
            Sahifangizni rangli va chiroyli qiling
          </p>
        </div>
      </div>

      {/* Rang turlari */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Rang Turlari</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-2xl font-medium text-blue-400 mb-4">1. Rang nomlari</h3>
            <p className="text-gray-300 mb-4">140 ta tayyor rang nomi mavjud</p>
            <CodeBlock 
              language="CSS"
              code={`h1 { color: red; }
                    p { color: blue; }
                    div { background-color: green; }
                    span { color: tomato; }
                    button { background-color: dodgerblue; }`}
            />
            <div className="mt-4 grid grid-cols-4 gap-2">
              <div className="bg-red-500 p-3 rounded text-center text-white text-sm">red</div>
              <div className="bg-blue-500 p-3 rounded text-center text-white text-sm">blue</div>
              <div className="bg-green-500 p-3 rounded text-center text-white text-sm">green</div>
              <div className="bg-yellow-500 p-3 rounded text-center text-white text-sm">yellow</div>
            </div>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-medium text-green-400 mb-4">2. HEX kodlar</h3>
            <p className="text-gray-300 mb-4">#RRGGBB formatida (00-FF)</p>
            <CodeBlock 
              language="CSS"
              code={`h1 { color: #FF0000; }  /* Qizil */
p { color: #0000FF; }   /* Ko'k */
div { background-color: #00FF00; }  /* Yashil */
span { color: #FFA500; }  /* To'q sariq */

/* Qisqa format */
h2 { color: #F00; }  /* #FF0000 bilan bir xil */`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-medium text-purple-400 mb-4">3. RGB va RGBA</h3>
            <p className="text-gray-300 mb-4">Red, Green, Blue (0-255)</p>
            <CodeBlock 
              language="CSS"
              code={`/* RGB */
h1 { color: rgb(255, 0, 0); }  /* Qizil */
p { color: rgb(0, 0, 255); }   /* Ko'k */

/* RGBA - Alpha (shaffoflik 0-1) */
div { 
    background-color: rgba(0, 255, 0, 0.5);  /* 50% shaffof yashil */
}
.overlay {
    background-color: rgba(0, 0, 0, 0.8);  /* 80% qora */
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-2xl font-medium text-orange-400 mb-4">4. HSL va HSLA</h3>
            <p className="text-gray-300 mb-4">Hue, Saturation, Lightness</p>
            <CodeBlock 
              language="CSS"
              code={`/* HSL */
h1 { color: hsl(0, 100%, 50%); }    /* Qizil */
p { color: hsl(240, 100%, 50%); }   /* Ko'k */

/* HSLA */
div {
    background-color: hsla(120, 100%, 50%, 0.3);  /* Shaffof yashil */
}`}
            />
          </div>
        </div>
      </div>

      {/* Background - Kengaytirilgan bo'lim */}
      <div className="mb-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-sm mb-4">
            <Paintbrush className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">BACKGROUND XUSUSIYATLARI</span>
          </div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            Background Elementlari
          </h2>
          <p className="text-xl text-gray-300">
            Sahifangizning fonini professional darajada boshqaring
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Background Color */}
          <div className="bg-[#1a1f2e] p-8 rounded-xl border border-cyan-500/30">
            <h3 className="text-2xl font-medium text-cyan-400 mb-6 flex items-center gap-3">
              <ColorPalette className="w-8 h-8 text-cyan-400" /> Background Color
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Elementning fon rangini belgilaydi. Barcha rang formatlarini qo'llab-quvvatlaydi.
            </p>
            
            <CodeBlock 
              language="CSS"
              code={`/* Turli rang formatlarida */
.rang-nomi {
    background-color: red;
}

.hex-rang {
    background-color: #3498db;
}

.rgb-rang {
    background-color: rgb(52, 152, 219);
}

.rgba-shaffof {
    background-color: rgba(52, 152, 219, 0.7);  /* 70% shaffoflik */
}

.hsl-rang {
    background-color: hsl(204, 70%, 53%);
}

/* Gradient ranglar */
.gradient-fon {
    background-color: #3498db;  /* Fallback rang */
    background: linear-gradient(45deg, #3498db, #e74c3c);
}`}
            />
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-red-500 p-4 rounded-lg text-center text-white font-medium">red</div>
              <div className="bg-blue-500 p-4 rounded-lg text-center text-white font-medium">#3498db</div>
              <div className="bg-green-500 p-4 rounded-lg text-center text-white font-medium">rgb(46, 204, 113)</div>
              <div className="bg-purple-500/70 p-4 rounded-lg text-center text-white font-medium">rgba(155, 89, 182, 0.7)</div>
              <div className="bg-yellow-500 p-4 rounded-lg text-center text-white font-medium">hsl(48, 100%, 67%)</div>
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-4 rounded-lg text-center text-white font-medium">gradient</div>
            </div>
          </div>

          {/* Background Image */}
          <div className="bg-[#1a1f2e] p-8 rounded-xl border border-pink-500/30">
            <h3 className="text-2xl font-medium text-pink-400 mb-6 flex items-center gap-3">
              <Image className="w-8 h-8 text-pink-400" /> Background Image
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Elementga fon rasmi qo'shadi. Bir nechta rasm ham qo'shish mumkin.
            </p>
            
            <CodeBlock 
              language="CSS"
              code={`/* Oddiy fon rasmi */
.fon-rasm {
    background-image: url('rasm.jpg');
}

/* Bir nechta rasm (yuqoridagi birinchi ko'rinadi) */
.ko'p-rasm {
    background-image: 
        url('yuqori-rasm.png'),
        url('pastki-rasm.jpg');
}

/* Gradient bilan rasm */
.gradient-rasm {
    background-image: 
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url('rasm.jpg');
}

/* Base64 rasm */
.base64-rasm {
    background-image: url('data:image/svg+xml;base64,PHN2Zy4uLg==');
}

/* Online rasm */
.online-rasm {
    background-image: url('https://example.com/rasm.jpg');
}`}
            />
            
            <div className="mt-6 bg-gray-900/50 p-4 rounded-lg border border-pink-500/20">
              <h4 className="text-lg font-medium text-pink-300 mb-2">💡 Maslahat:</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Rasm yo'li noto'g'ri bo'lsa, background-color ko'rinadi</li>
                <li>• Katta rasmlar sahifani sekinlashtiradi</li>
                <li>• WebP formatini ishlatish tavsiya etiladi</li>
                <li>• Responsive dizayn uchun turli o'lchamdagi rasmlar tayyorlang</li>
              </ul>
            </div>
          </div>

          {/* Background Size */}
          <div className="bg-[#1a1f2e] p-8 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-medium text-green-400 mb-6 flex items-center gap-3">
              <Maximize className="w-8 h-8 text-green-400" /> Background Size
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Fon rasmining o'lchamini boshqaradi.
            </p>
            
            <CodeBlock 
              language="CSS"
              code={`/* Tayyor qiymatlar */
.cover {
    background-size: cover;      /* Butun joyni to'ldiradi, qirqilishi mumkin */
}

.contain {
    background-size: contain;    /* Butun rasm ko'rinadi, bo'sh joy qolishi mumkin */
}

.auto {
    background-size: auto;       /* Asl o'lchami */
}

/* Aniq o'lchamlar */
.aniq-olcham {
    background-size: 300px 200px;  /* Kenglik x Balandlik */
}

.foiz-olcham {
    background-size: 50% 100%;     /* Foizda */
}

.bir-tomoni {
    background-size: 100% auto;    /* Faqat kenglikni belgilash */
}

/* Responsive o'lcham */
.responsive {
    background-size: 100vw 50vh;   /* Viewport asosida */
}`}
            />
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg border border-green-500/30">
                <div className="w-full h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded mb-2 bg-cover"></div>
                <p className="text-center text-green-400 font-medium">cover</p>
                <p className="text-center text-gray-400 text-sm">To'liq qoplash</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-green-500/30">
                <div className="w-full h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded mb-2 bg-contain bg-no-repeat bg-center"></div>
                <p className="text-center text-green-400 font-medium">contain</p>
                <p className="text-center text-gray-400 text-sm">To'liq ko'rsatish</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-green-500/30">
                <div className="w-full h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded mb-2" style={{backgroundSize: '50% 50%'}}></div>
                <p className="text-center text-green-400 font-medium">50% 50%</p>
                <p className="text-center text-gray-400 text-sm">Aniq o'lcham</p>
              </div>
            </div>
          </div>

          {/* Background Position */}
          <div className="bg-[#1a1f2e] p-8 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-medium text-purple-400 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-purple-400" /> Background Position
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Fon rasmining joylashuvini belgilaydi.
            </p>
            
            <CodeBlock 
              language="CSS"
              code={`/* Kalit so'zlar */
.markazda {
    background-position: center;
}

.yuqori-chap {
    background-position: top left;
}

.pastki-o'ng {
    background-position: bottom right;
}

/* Foizda */
.foiz-pozitsiya {
    background-position: 25% 75%;  /* Chapdan 25%, yuqoridan 75% */
}

/* Pikselda */
.piksel-pozitsiya {
    background-position: 50px 100px;  /* Chapdan 50px, yuqoridan 100px */
}

/* Aralash */
.aralash-pozitsiya {
    background-position: left 20px top 50%;
}

/* Bir nechta rasm uchun */
.ko'p-pozitsiya {
    background-image: url('rasm1.jpg'), url('rasm2.jpg');
    background-position: top left, bottom right;
}`}
            />
            
            <div className="mt-6 grid grid-cols-3 gap-2 bg-gray-800 p-4 rounded-lg">
              <div className="bg-purple-500/30 p-3 rounded text-center text-xs">top left</div>
              <div className="bg-purple-500/50 p-3 rounded text-center text-xs">top center</div>
              <div className="bg-purple-500/30 p-3 rounded text-center text-xs">top right</div>
              <div className="bg-purple-500/50 p-3 rounded text-center text-xs">center left</div>
              <div className="bg-purple-500/70 p-3 rounded text-center text-xs font-bold">center</div>
              <div className="bg-purple-500/50 p-3 rounded text-center text-xs">center right</div>
              <div className="bg-purple-500/30 p-3 rounded text-center text-xs">bottom left</div>
              <div className="bg-purple-500/50 p-3 rounded text-center text-xs">bottom center</div>
              <div className="bg-purple-500/30 p-3 rounded text-center text-xs">bottom right</div>
            </div>
          </div>

          {/* Background Repeat */}
          <div className="bg-[#1a1f2e] p-8 rounded-xl border border-orange-500/30">
            <h3 className="text-2xl font-medium text-orange-400 mb-6 flex items-center gap-3">
              <RotateCcw className="w-8 h-8 text-orange-400" /> Background Repeat
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Fon rasmining takrorlanishini boshqaradi.
            </p>
            
            <CodeBlock 
              language="CSS"
              code={`/* Takrorlanish turlari */
.takrorlanmasin {
    background-repeat: no-repeat;    /* Takrorlanmaydi */
}

.gorizontal-takror {
    background-repeat: repeat-x;     /* Faqat gorizontal takror */
}

.vertikal-takror {
    background-repeat: repeat-y;     /* Faqat vertikal takror */
}

.to'liq-takror {
    background-repeat: repeat;       /* Har ikki yo'nalishda (default) */
}

.bo'shliq-bilan {
    background-repeat: space;        /* Bo'shliq bilan takror */
}

.cho'zilgan {
    background-repeat: round;        /* Cho'zilib takror */
}`}
            />
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-800 p-3 rounded-lg text-center">
                <div className="w-full h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded mb-2 bg-no-repeat bg-center" style={{backgroundSize: '30px 30px'}}></div>
                <p className="text-orange-400 text-sm font-medium">no-repeat</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg text-center">
                <div className="w-full h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded mb-2 bg-repeat-x bg-center" style={{backgroundSize: '20px 20px'}}></div>
                <p className="text-orange-400 text-sm font-medium">repeat-x</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg text-center">
                <div className="w-full h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded mb-2 bg-repeat-y bg-center" style={{backgroundSize: '20px 20px'}}></div>
                <p className="text-orange-400 text-sm font-medium">repeat-y</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg text-center">
                <div className="w-full h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded mb-2 bg-repeat" style={{backgroundSize: '15px 15px'}}></div>
                <p className="text-orange-400 text-sm font-medium">repeat</p>
              </div>
            </div>
          </div>

          {/* Background Attachment */}
          <div className="bg-[#1a1f2e] p-8 rounded-xl border border-red-500/30">
            <h3 className="text-2xl font-medium text-red-400 mb-6 flex items-center gap-3">
              <Pin className="w-8 h-8 text-red-400" /> Background Attachment
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Fon rasmining scroll qilishda xatti-harakatini belgilaydi.
            </p>
            
            <CodeBlock 
              language="CSS"
              code={`/* Attachment turlari */
.scroll-bilan {
    background-attachment: scroll;   /* Kontent bilan birga scroll (default) */
}

.qotib-qolgan {
    background-attachment: fixed;    /* Viewport ga nisbatan qotib qoladi */
}

.mahalliy {
    background-attachment: local;    /* Element kontenti bilan scroll */
}

/* Parallax effekt */
.parallax {
    background-image: url('parallax-bg.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}

/* Bir nechta rasm uchun */
.ko'p-attachment {
    background-image: url('fixed-bg.jpg'), url('scroll-bg.jpg');
    background-attachment: fixed, scroll;
}`}
            />
            
            <div className="mt-6 bg-gray-900/50 p-4 rounded-lg border border-red-500/20">
              <h4 className="text-lg font-medium text-red-300 mb-3">🎭 Parallax Effekt Misoli:</h4>
              <CodeBlock 
                language="CSS"
                code={`.hero-section {
    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
                      url('hero-background.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-content {
    text-align: center;
    color: white;
    z-index: 1;
}`}
              />
            </div>
          </div>

          {/* Background Origin va Clip */}
          <div className="bg-[#1a1f2e] p-8 rounded-xl border border-indigo-500/30">
            <h3 className="text-2xl font-medium text-indigo-400 mb-6 flex items-center gap-3">
              <Scissors className="w-8 h-8 text-indigo-400" /> Background Origin & Clip
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Fon rasmining qayerdan boshlanishi va qayergacha ko'rinishini boshqaradi.
            </p>
            
            {/* Background Origin */}
            <div className="mb-8">
              <h4 className="text-xl font-medium text-indigo-300 mb-4">Background Origin</h4>
              <p className="text-gray-300 mb-4">Fon rasm qayerdan boshlanishini belgilaydi:</p>
              
              <CodeBlock 
                language="CSS"
                code={`/* Background Origin qiymatlari */
.padding-box {
    background-origin: padding-box;  /* Padding ichidan (default) */
}

.border-box {
    background-origin: border-box;   /* Border ichidan */
}

.content-box {
    background-origin: content-box;  /* Faqat kontent joyidan */
}`}
              />
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="relative mx-auto w-32 h-32 border-4 border-indigo-400 bg-gray-700 rounded-lg overflow-hidden">
                    <div className="absolute inset-2 bg-indigo-200 rounded">
                      <div className="absolute inset-2 bg-gradient-to-br from-orange-400 to-red-500 rounded text-white text-xs flex items-center justify-center">
                        Content
                      </div>
                    </div>
                    <div className="absolute top-1 left-1 text-xs text-indigo-300">Border</div>
                    <div className="absolute top-3 left-3 text-xs text-indigo-600">Padding</div>
                  </div>
                  <p className="mt-2 text-indigo-400 font-medium">border-box</p>
                  <p className="text-gray-400 text-sm">Border ichidan boshlanadi</p>
                </div>
                
                <div className="text-center">
                  <div className="relative mx-auto w-32 h-32 border-4 border-gray-600 bg-gray-700 rounded-lg overflow-hidden">
                    <div className="absolute inset-2 bg-indigo-200 rounded">
                      <div className="absolute inset-2 bg-gradient-to-br from-orange-400 to-red-500 rounded text-white text-xs flex items-center justify-center">
                        Content
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 text-xs text-indigo-300">Padding</div>
                  </div>
                  <p className="mt-2 text-indigo-400 font-medium">padding-box</p>
                  <p className="text-gray-400 text-sm">Padding ichidan boshlanadi</p>
                </div>
                
                <div className="text-center">
                  <div className="relative mx-auto w-32 h-32 border-4 border-gray-600 bg-gray-700 rounded-lg overflow-hidden">
                    <div className="absolute inset-2 bg-gray-600 rounded">
                      <div className="absolute inset-2 bg-gradient-to-br from-orange-400 to-red-500 rounded text-white text-xs flex items-center justify-center">
                        Content
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-indigo-400 font-medium">content-box</p>
                  <p className="text-gray-400 text-sm">Faqat kontent joyidan</p>
                </div>
              </div>
            </div>

            {/* Background Clip */}
            <div className="mb-8">
              <h4 className="text-xl font-medium text-indigo-300 mb-4">Background Clip</h4>
              <p className="text-gray-300 mb-4">Fon rasm qayergacha ko'rinishini belgilaydi:</p>
              
              <CodeBlock 
                language="CSS"
                code={`/* Background Clip qiymatlari */
.clip-border {
    background-clip: border-box;     /* Border gacha (default) */
}

.clip-padding {
    background-clip: padding-box;    /* Padding gacha */
}

.clip-content {
    background-clip: content-box;    /* Faqat kontent joyida */
}

/* Matn rangi sifatida fon */
.clip-text {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}`}
              />
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="relative mx-auto w-24 h-24 border-4 border-indigo-400 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"></div>
                    <div className="absolute inset-2 bg-indigo-200 rounded">
                      <div className="absolute inset-2 bg-white rounded text-xs flex items-center justify-center text-gray-800">
                        Text
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-indigo-400 font-medium text-sm">border-box</p>
                  <p className="text-gray-400 text-xs">Border gacha</p>
                </div>
                
                <div className="text-center">
                  <div className="relative mx-auto w-24 h-24 border-4 border-gray-600 rounded-lg overflow-hidden">
                    <div className="absolute inset-2 bg-gradient-to-br from-orange-400 to-red-500 rounded">
                      <div className="absolute inset-2 bg-white rounded text-xs flex items-center justify-center text-gray-800">
                        Text
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-indigo-400 font-medium text-sm">padding-box</p>
                  <p className="text-gray-400 text-xs">Padding gacha</p>
                </div>
                
                <div className="text-center">
                  <div className="relative mx-auto w-24 h-24 border-4 border-gray-600 rounded-lg overflow-hidden">
                    <div className="absolute inset-2 bg-gray-600 rounded">
                      <div className="absolute inset-2 bg-gradient-to-br from-orange-400 to-red-500 rounded text-xs flex items-center justify-center text-white">
                        Text
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-indigo-400 font-medium text-sm">content-box</p>
                  <p className="text-gray-400 text-xs">Faqat kontent</p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto w-24 h-24 flex items-center justify-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                      TEXT
                    </div>
                  </div>
                  <p className="mt-2 text-indigo-400 font-medium text-sm">text</p>
                  <p className="text-gray-400 text-xs">Matn rangi</p>
                </div>
              </div>
            </div>

            {/* Amaliy misol */}
            <div className="bg-gray-900/50 p-6 rounded-lg border border-indigo-500/20">
              <h4 className="text-lg font-medium text-indigo-300 mb-3">🎯 Amaliy Misol:</h4>
              <CodeBlock 
                language="CSS"
                code={`.card {
    width: 200px;
    height: 150px;
    padding: 20px;
    border: 10px solid rgba(255,255,255,0.2);
    background: linear-gradient(45deg, #667eea, #764ba2);
    
    /* Turli xil clip va origin */
    background-origin: padding-box;  /* Padding ichidan boshlash */
    background-clip: border-box;     /* Border gacha ko'rsatish */
}

.text-gradient {
    font-size: 2rem;
    font-weight: bold;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}`}
              />
            </div>
          </div>

          {/* Background Shorthand - Kengaytirilgan */}
          <div className="bg-[#1a1f2e] p-8 rounded-xl border border-yellow-500/30">
            <h3 className="text-2xl font-medium text-yellow-400 mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-400" /> Background Shorthand (Qisqa yozuv)
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Barcha background xususiyatlarini bir qatorda yozish.
            </p>
            
            <CodeBlock 
              language="CSS"
              code={`/* To'liq sintaksis */
background: [color] [image] [repeat] [attachment] [position] / [size] [origin] [clip];

/* Oddiy misollar */
.oddiy {
    background: #f0f0f0;
}

.rasm-bilan {
    background: url('rasm.jpg') no-repeat center/cover;
}

.to'liq-misol {
    background: #333 url('pattern.png') repeat-x fixed top left / 100px 50px;
}

/* Gradient misollar */
.linear-gradient {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}

.radial-gradient {
    background: radial-gradient(circle, #ff6b6b, #4ecdc4);
}

.conic-gradient {
    background: conic-gradient(from 0deg, red, yellow, green, blue, red);
}

/* Murakkab gradient */
.murakkab-gradient {
    background: 
        linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 70%, transparent 70%),
        linear-gradient(-45deg, transparent 30%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 70%, transparent 70%),
        linear-gradient(90deg, #ff6b6b, #4ecdc4);
    background-size: 20px 20px, 20px 20px, 100% 100%;
}

/* Bir nechta fon */
.ko'p-fon {
    background: 
        url('yuqori.png') no-repeat top right,
        url('pastki.png') no-repeat bottom left,
        linear-gradient(to right, #ff6b6b, #4ecdc4);
}`}
            />
            
            <div className="mt-6 bg-gray-900/50 p-4 rounded-lg border border-yellow-500/20">
              <h4 className="text-lg font-medium text-yellow-300 mb-3">📝 Shorthand Qoidalari:</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• <strong>Tartib muhim emas</strong>, lekin position/size uchun "/" kerak</li>
                <li>• <strong>background-size</strong> faqat background-position dan keyin yoziladi</li>
                <li>• <strong>Bir nechta qiymat</strong> vergul bilan ajratiladi</li>
                <li>• <strong>Qisqa yozuv</strong> boshqa xususiyatlarni reset qiladi</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Amaliy mashq - Kengaytirilgan */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-500 p-8 rounded-r">
          <h2 className="text-3xl font-semibold text-gray-100 mb-4 flex items-center gap-3">
            <Monitor className="w-10 h-10 text-green-400" /> Amaliy mashqlar
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Background elementlari bilan ishlashni o'rganing:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Boshlang'ich mashqlar */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-400 mb-4">🌱 Boshlang'ich darajasi</h3>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/20">
                <h4 className="font-medium text-green-300 mb-2">1. Oddiy background ranglar</h4>
                <ul className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>• 5 ta div yarating</li>
                  <li>• Har biriga turli rang bering</li>
                  <li>• HEX, RGB, HSL formatlarini ishlating</li>
                  <li>• Hover da rang o'zgarsin</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/20">
                <h4 className="font-medium text-green-300 mb-2">2. Background rasm</h4>
                <ul className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>• Bitta div yarating (400x300px)</li>
                  <li>• Background rasm qo'shing</li>
                  <li>• cover va contain farqini sinab ko'ring</li>
                  <li>• Turli pozitsiyalarni sinab ko'ring</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 p-4 rounded-lg border border-green-500/20">
                <h4 className="font-medium text-green-300 mb-2">3. Oddiy gradient</h4>
                <ul className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>• Linear gradient yarating</li>
                  <li>• 2 ta rang ishlatib</li>
                  <li>• Turli yo'nalishlarni sinab ko'ring</li>
                  <li>• Radial gradient ham qo'shing</li>
                </ul>
              </div>
            </div>

            {/* O'rta mashqlar */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">⚡ O'rta daraja</h3>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-yellow-500/20">
                <h4 className="font-medium text-yellow-300 mb-2">4. Murakkab gradient</h4>
                <ul className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>• 4+ rang bilan gradient</li>
                  <li>• Conic gradient yarating</li>
                  <li>• Animatsiyali gradient</li>
                  <li>• Mesh gradient effekti</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 p-4 rounded-lg border border-yellow-500/20">
                <h4 className="font-medium text-yellow-300 mb-2">5. Pattern yaratish</h4>
                <ul className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>• CSS bilan chiziqli pattern</li>
                  <li>• Nuqtali pattern</li>
                  <li>• Repeating gradient ishlatib</li>
                  <li>• Background-size bilan o'ynang</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 p-4 rounded-lg border border-yellow-500/20">
                <h4 className="font-medium text-yellow-300 mb-2">6. Parallax effekt</h4>
                <ul className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>• background-attachment: fixed</li>
                  <li>• Scroll qilganda effekt ko'ring</li>
                  <li>• Bir nechta layer qo'shing</li>
                  <li>• Matn ustiga overlay qo'shing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ilg'or mashqlar */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-red-400 mb-4">🔥 Ilg'or daraja</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-red-500/20">
                <h4 className="font-medium text-red-300 mb-2">7. CSS Art</h4>
                <p className="text-gray-300 text-sm">Faqat background xususiyatlari bilan rasm chizing</p>
              </div>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-red-500/20">
                <h4 className="font-medium text-red-300 mb-2">8. Glassmorphism</h4>
                <p className="text-gray-300 text-sm">Shisha effekti bilan zamonaviy dizayn</p>
              </div>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-red-500/20">
                <h4 className="font-medium text-red-300 mb-2">9. Interactive Background</h4>
                <p className="text-gray-300 text-sm">Mouse harakati bilan o'zgaruvchi fon</p>
              </div>
            </div>
          </div>

          {/* Live kod misoli */}
          <div className="mt-8 bg-gray-900/30 p-6 rounded-xl border border-green-500/30">
            <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-green-400" /> Darhol sinab ko'ring
            </h3>
            <p className="text-gray-300 mb-4">Quyidagi kodni HTML fayliga nusxalab, brauzerda oching:</p>
            
            <CodeBlock 
              language="HTML"
              code={`<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Background Mashq</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }
        
        .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            padding: 20px;
        }
        
        .card {
            height: 200px;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 18px;
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: scale(1.05);
        }
        
        .card1 {
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        }
        
        .card2 {
            background: radial-gradient(circle, #667eea, #764ba2);
        }
        
        .card3 {
            background: conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #ff6b6b);
        }
        
        .card4 {
            background: 
                repeating-linear-gradient(45deg, 
                    transparent, 
                    transparent 10px, 
                    rgba(255,255,255,0.1) 10px, 
                    rgba(255,255,255,0.1) 20px),
                linear-gradient(135deg, #667eea, #764ba2);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card card1">Linear Gradient</div>
        <div class="card card2">Radial Gradient</div>
        <div class="card card3">Conic Gradient</div>
        <div class="card card4">Pattern + Gradient</div>
    </div>
</body>
</html>`}
            />
          </div>
        </div>
      </div>

      {/* Darsdagi topshiriqlar - Kengaytirilgan */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <BookOpen className="w-10 h-10 text-yellow-400" /> Darsdagi topshiriqlar
          </h2>
          
          <div className="space-y-8">
            {/* Asosiy topshiriqlar */}
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">🎯 Asosiy topshiriqlar</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
                  <h4 className="text-xl font-medium text-yellow-300 mb-3">Topshiriq 1: Rang palitrasi</h4>
                  <p className="text-gray-300 mb-4">5 ta div yarating va har xil rang turlaridan foydalaning:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>1-div: rang nomi (red, blue, green)</li>
                    <li>2-div: HEX kod (#ff0000, #00ff00)</li>
                    <li>3-div: RGB (rgb(255, 0, 0))</li>
                    <li>4-div: RGBA (shaffof - rgba(255, 0, 0, 0.5))</li>
                    <li>5-div: HSL (hsl(0, 100%, 50%))</li>
                  </ul>
                  <div className="mt-4 p-3 bg-gray-800/50 rounded border border-yellow-500/20">
                    <p className="text-yellow-200 text-sm"><strong>Qo'shimcha:</strong> Har bir div 150x150px bo'lsin va hover da 10px border qo'shilsin</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
                  <h4 className="text-xl font-medium text-yellow-300 mb-3">Topshiriq 2: Background rasmlar</h4>
                  <p className="text-gray-300 mb-4">4 ta div bilan background rasm xususiyatlarini o'rganing:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>1-div: background-size: cover</li>
                    <li>2-div: background-size: contain</li>
                    <li>3-div: background-repeat: repeat-x</li>
                    <li>4-div: background-position: center</li>
                  </ul>
                  <div className="mt-4 p-3 bg-gray-800/50 rounded border border-yellow-500/20">
                    <p className="text-yellow-200 text-sm"><strong>Maslahat:</strong> Unsplash.com dan bepul rasmlar oling</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
                  <h4 className="text-xl font-medium text-yellow-300 mb-3">Topshiriq 3: Gradient to'plami</h4>
                  <p className="text-gray-300 mb-4">6 xil gradient yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Linear gradient (gorizontal)</li>
                    <li>Linear gradient (vertikal)</li>
                    <li>Linear gradient (diagonal 45°)</li>
                    <li>Radial gradient (circle)</li>
                    <li>Radial gradient (ellipse)</li>
                    <li>Conic gradient (rainbow)</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
                  <h4 className="text-xl font-medium text-yellow-300 mb-3">Topshiriq 4: Pattern dizayn</h4>
                  <p className="text-gray-300 mb-4">CSS bilan 4 ta pattern yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Diagonal chiziqlar (repeating-linear-gradient)</li>
                    <li>Nuqtalar (radial-gradient + background-size)</li>
                    <li>Shaxmat taxtasi (linear-gradient)</li>
                    <li>Zigzag (conic-gradient)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Murakkab topshiriqlar */}
            <div>
              <h3 className="text-2xl font-semibold text-orange-400 mb-4">🔥 Murakkab topshiriqlar</h3>
              <div className="space-y-6">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-orange-500/20">
                  <h4 className="text-xl font-medium text-orange-300 mb-3">Topshiriq 5: Hero Section</h4>
                  <p className="text-gray-300 mb-4">Professional hero section yarating:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                      <li>To'liq ekran balandligi (100vh)</li>
                      <li>Background rasm + gradient overlay</li>
                      <li>Parallax effekt (background-attachment: fixed)</li>
                      <li>Markazda joylashgan matn</li>
                    </ul>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                      <li>Call-to-action tugma</li>
                      <li>Smooth scroll animatsiya</li>
                      <li>Responsive dizayn</li>
                      <li>Hover effektlari</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg border border-orange-500/20">
                  <h4 className="text-xl font-medium text-orange-300 mb-3">Topshiriq 6: Kartochka galereya</h4>
                  <p className="text-gray-300 mb-4">9 ta kartochka bilan galereya (3x3 grid):</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="text-gray-400">
                      <strong className="text-orange-300">1-qator:</strong>
                      <ul className="list-disc list-inside ml-2">
                        <li>Oddiy rang</li>
                        <li>Linear gradient</li>
                        <li>Radial gradient</li>
                      </ul>
                    </div>
                    <div className="text-gray-400">
                      <strong className="text-orange-300">2-qator:</strong>
                      <ul className="list-disc list-inside ml-2">
                        <li>Background rasm</li>
                        <li>Pattern</li>
                        <li>Conic gradient</li>
                      </ul>
                    </div>
                    <div className="text-gray-400">
                      <strong className="text-orange-300">3-qator:</strong>
                      <ul className="list-disc list-inside ml-2">
                        <li>Glassmorphism</li>
                        <li>Animatsiyali gradient</li>
                        <li>Murakkab pattern</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg border border-orange-500/20">
                  <h4 className="text-xl font-medium text-orange-300 mb-3">Topshiriq 7: Interactive Background</h4>
                  <p className="text-gray-300 mb-4">JavaScript bilan interaktiv fon yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Mouse harakati bilan gradient yo'nalishi o'zgarsin</li>
                    <li>Scroll qilganda background rang o'zgarsin</li>
                    <li>Tugmalar bilan preset ranglar</li>
                    <li>Random rang generator</li>
                    <li>LocalStorage da saqlash</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bonus topshiriqlar */}
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">🌟 Bonus topshiriqlar</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
                  <h4 className="text-lg font-medium text-purple-300 mb-3">CSS Art Challenge</h4>
                  <p className="text-gray-300 mb-3">Faqat CSS background bilan rasm chizing:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                    <li>Quyosh va bulutlar</li>
                    <li>Tog' manzarasi</li>
                    <li>Geometrik shakl</li>
                    <li>Logo dizayni</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
                  <h4 className="text-lg font-medium text-purple-300 mb-3">Performance Test</h4>
                  <p className="text-gray-300 mb-3">Background performance ni tahlil qiling:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                    <li>Katta rasm vs kichik rasm</li>
                    <li>Gradient vs rasm</li>
                    <li>CSS pattern vs SVG</li>
                    <li>Browser DevTools ishlatib</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
                  <h4 className="text-lg font-medium text-purple-300 mb-3">Accessibility Test</h4>
                  <p className="text-gray-300 mb-3">Background accessibility ni tekshiring:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                    <li>Matn va fon kontrasti</li>
                    <li>Color blindness test</li>
                    <li>Screen reader compatibility</li>
                    <li>WCAG guidelines</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
                  <h4 className="text-lg font-medium text-purple-300 mb-3">Cross-browser Test</h4>
                  <p className="text-gray-300 mb-3">Turli brauzerlarda sinab ko'ring:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                    <li>Chrome, Firefox, Safari</li>
                    <li>Mobile brauzerlar</li>
                    <li>Eski brauzer versiyalari</li>
                    <li>Fallback ranglar</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Baholash mezonlari */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-indigo-400 mb-4 flex items-center gap-2">
                <span className="text-4xl">📊</span> Baholash mezonlari
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">25%</div>
                  <div className="text-sm text-gray-300">Kod sifati</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">25%</div>
                  <div className="text-sm text-gray-300">Dizayn</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">25%</div>
                  <div className="text-sm text-gray-300">Functionality</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">25%</div>
                  <div className="text-sm text-gray-300">Creativity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa - Kengaytirilgan */}
      <div className="mb-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <Home className="w-10 h-10 text-purple-400" />
          <h2 className="text-3xl font-semibold text-gray-100">Uyga Vazifa</h2>
        </div>
        
        <div className="space-y-6">
          {/* Misol loyiha */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <span className="text-3xl">🌟</span> Misol Loyiha
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-blue-300 mb-3">Background va Color Demo</h4>
                <p className="text-gray-300 mb-4">
                  Professional web sahifa - gradient background, typography va color harmony bilan.
                </p>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-blue-500/20">
                  <p className="text-blue-300 text-sm font-medium mb-2">Texnik xususiyatlar:</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Qora-binafsha gradient background</li>
                    <li>• Glassmorphism card dizayni</li>
                    <li>• Professional typography</li>
                    <li>• Minimal va clean layout</li>
                    <li>• Responsive dizayn</li>
                    <li>• Modern color palette</li>
                  </ul>
                </div>
                <a 
                  href="https://dars-backgroundand-color.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  <span>Demo ko'rish</span>
                  <span>→</span>
                </a>
              </div>
              <div className="bg-gray-900/30 p-4 rounded-lg">
                <img 
                  src="/image.png"
                  alt="Background va Color Demo - Gradient background with moon and tree silhouette"
                  className="w-full h-auto rounded-lg border border-gray-700 object-cover"
                />
                <p className="text-gray-400 text-xs mt-2 text-center">
                  Gradient background, oy, daraxt va odam silhouette bilan
                </p>
              </div>
            </div>
          </div>

          {[
            {
              num: "1",
              title: "Background va Color Landing Page",
              desc: "Yuqoridagi misol loyihaga o'xshash professional landing page yarating:",
              items: [
                "Qora-binafsha gradient background",
                "Glassmorphism card effect",
                "Hero section (markazda joylashgan)",
                "Professional typography",
                "Minimal va clean dizayn",
                "Backdrop-blur effektlari",
                "Responsive layout",
                "Smooth animations",
                "Modern color scheme"
              ]
            },
            {
              num: "2",
              title: "Multi-page Color Website",
              desc: "Bir nechta sahifali website yarating:",
              items: [
                "Home page (gradient background)",
                "About page (rasm + overlay)",
                "Services page (kartochkalar)",
                "Contact page (form styling)",
                "Navigation menu",
                "Consistent color scheme",
                "Smooth page transitions",
                "Mobile responsive",
                "Professional typography"
              ]
            },
            {
              num: "3",
              title: "Interactive Color Palette",
              desc: "Interaktiv rang palitrasi yarating:",
              items: [
                "Color picker tool",
                "Gradient generator",
                "Live preview",
                "CSS kod ko'rsatish",
                "Copy to clipboard",
                "Preset color schemes",
                "Random color generator",
                "Color harmony rules",
                "Export functionality"
              ]
            },
            {
              num: "4",
              title: "Background Animation Showcase",
              desc: "Animatsiyali background effektlari:",
              items: [
                "Animated gradient backgrounds",
                "Floating particles effect",
                "Parallax scrolling layers",
                "CSS-only animations",
                "Hover interactions",
                "Scroll-triggered effects",
                "Performance optimized",
                "Mobile-friendly animations",
                "Multiple demo sections"
              ]
            },
            {
              num: "5",
              title: "Professional Portfolio Website",
              desc: "To'liq portfolio sahifasi yarating:",
              items: [
                "Hero section (gradient background)",
                "About section (image + text)",
                "Skills section (progress bars)",
                "Projects gallery (hover effects)",
                "Contact form (styled inputs)",
                "Smooth scrolling navigation",
                "Dark/Light mode toggle",
                "Responsive design",
                "Professional color scheme"
              ]
            },
            {
              num: "6",
              title: "E-commerce Landing Page",
              desc: "Mahsulot sotish uchun landing page:",
              items: [
                "Hero section (product showcase)",
                "Features section (icon + text)",
                "Testimonials (customer reviews)",
                "Pricing table (gradient cards)",
                "FAQ section (accordion)",
                "Call-to-action buttons",
                "Professional color psychology",
                "Conversion-optimized design",
                "Mobile-first approach"
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
        
        {/* Bonus topshiriqlar */}
        <div className="mt-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
            <Star className="w-8 h-8 text-yellow-400" /> Bonus Topshiriqlar
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/30 p-4 rounded-lg">
              <h4 className="font-medium text-yellow-300 mb-2">CSS Art</h4>
              <p className="text-gray-300 text-sm">Faqat CSS background xususiyatlari bilan rasm chizing (masalan: quyosh, tog', daraxт)</p>
            </div>
            <div className="bg-gray-900/30 p-4 rounded-lg">
              <h4 className="font-medium text-yellow-300 mb-2">Performance Test</h4>
              <p className="text-gray-300 text-sm">Turli background texnikalarining performance ta'sirini taqqoslang</p>
            </div>
            <div className="bg-gray-900/30 p-4 rounded-lg">
              <h4 className="font-medium text-yellow-300 mb-2">Browser Compatibility</h4>
              <p className="text-gray-300 text-sm">Turli brauzerlarda background xususiyatlarini sinab ko'ring</p>
            </div>
            <div className="bg-gray-900/30 p-4 rounded-lg">
              <h4 className="font-medium text-yellow-300 mb-2">Accessibility</h4>
              <p className="text-gray-300 text-sm">Background ranglar va kontrastni accessibility qoidalariga moslang</p>
            </div>
          </div>
        </div>
      </div>

      {/* Qo'shimcha resurslar - Kengaytirilgan */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">📚 Qo&apos;shimcha resurslar</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Rang vositalari */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2 flex items-center gap-2">
              <ColorPalette className="w-6 h-6 text-blue-400" /> Color Picker
            </h3>
            <p className="text-gray-400 text-sm mb-3">Professional rang tanlash vositasi</p>
            <a href="https://htmlcolorcodes.com/" target="_blank" rel="noopener noreferrer" 
               className="text-blue-400 hover:text-blue-300 text-sm">
              htmlcolorcodes.com →
            </a>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2 flex items-center gap-2">
              <Rainbow className="w-6 h-6 text-green-400" /> Coolors
            </h3>
            <p className="text-gray-400 text-sm mb-3">Rang palitrasi generatori</p>
            <a href="https://coolors.co/" target="_blank" rel="noopener noreferrer"
               className="text-green-400 hover:text-green-300 text-sm">
              coolors.co →
            </a>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2 flex items-center gap-2">
              <Theater className="w-6 h-6 text-purple-400" /> Adobe Color
            </h3>
            <p className="text-gray-400 text-sm mb-3">Professional rang harmoniyasi</p>
            <a href="https://color.adobe.com/" target="_blank" rel="noopener noreferrer"
               className="text-purple-400 hover:text-purple-300 text-sm">
              color.adobe.com →
            </a>
          </div>

          {/* Gradient vositalari */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2 flex items-center gap-2">
              <Sunrise className="w-6 h-6 text-pink-400" /> CSS Gradient
            </h3>
            <p className="text-gray-400 text-sm mb-3">Gradient generator</p>
            <a href="https://cssgradient.io/" target="_blank" rel="noopener noreferrer"
               className="text-pink-400 hover:text-pink-300 text-sm">
              cssgradient.io →
            </a>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-400" /> Mesh Gradients
            </h3>
            <p className="text-gray-400 text-sm mb-3">Zamonaviy mesh gradient</p>
            <a href="https://meshgradient.com/" target="_blank" rel="noopener noreferrer"
               className="text-yellow-400 hover:text-yellow-300 text-sm">
              meshgradient.com →
            </a>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2 flex items-center gap-2">
              <span className="text-xl">🎪</span> Gradienta
            </h3>
            <p className="text-gray-400 text-sm mb-3">Tayyor gradient to'plami</p>
            <a href="https://gradienta.io/" target="_blank" rel="noopener noreferrer"
               className="text-cyan-400 hover:text-cyan-300 text-sm">
              gradienta.io →
            </a>
          </div>

          {/* Pattern vositalari */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2 flex items-center gap-2">
              <Square className="w-6 h-6 text-orange-400" /> CSS Patterns
            </h3>
            <p className="text-gray-400 text-sm mb-3">CSS pattern kutubxonasi</p>
            <a href="https://bansal.io/pattern-css" target="_blank" rel="noopener noreferrer"
               className="text-orange-400 hover:text-orange-300 text-sm">
              bansal.io/pattern-css →
            </a>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-red-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2 flex items-center gap-2">
              <Crosshair className="w-6 h-6 text-red-400" /> Hero Patterns
            </h3>
            <p className="text-gray-400 text-sm mb-3">SVG pattern generatori</p>
            <a href="https://heropatterns.com/" target="_blank" rel="noopener noreferrer"
               className="text-red-400 hover:text-red-300 text-sm">
              heropatterns.com →
            </a>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2 flex items-center gap-2">
              <Waves className="w-6 h-6 text-indigo-400" /> Get Waves
            </h3>
            <p className="text-gray-400 text-sm mb-3">SVG wave generator</p>
            <a href="https://getwaves.io/" target="_blank" rel="noopener noreferrer"
               className="text-indigo-400 hover:text-indigo-300 text-sm">
              getwaves.io →
            </a>
          </div>

          {/* Rasm vositalari */}
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2 flex items-center gap-2">
              <Camera className="w-6 h-6 text-emerald-400" /> Unsplash
            </h3>
            <p className="text-gray-400 text-sm mb-3">Bepul yuqori sifatli rasmlar</p>
            <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer"
               className="text-emerald-400 hover:text-emerald-300 text-sm">
              unsplash.com →
            </a>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2 flex items-center gap-2">
              <span className="text-xl">🎨</span> Pexels
            </h3>
            <p className="text-gray-400 text-sm mb-3">Bepul stock rasmlar</p>
            <a href="https://pexels.com/" target="_blank" rel="noopener noreferrer"
               className="text-teal-400 hover:text-teal-300 text-sm">
              pexels.com →
            </a>
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800 hover:border-violet-500/50 transition-colors">
            <h3 className="text-lg font-medium text-gray-100 mb-2 flex items-center gap-2">
              <span className="text-xl">🖼️</span> Pixabay
            </h3>
            <p className="text-gray-400 text-sm mb-3">Bepul rasmlar va vektorlar</p>
            <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer"
               className="text-violet-400 hover:text-violet-300 text-sm">
              pixabay.com →
            </a>
          </div>
        </div>

        {/* CSS Tools bo'limi */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">🛠️ CSS Vositalari</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-medium text-gray-100 mb-3">Background Generator Tools</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.magicpattern.design/tools/css-backgrounds" className="text-blue-400 hover:text-blue-300">• Magic Pattern - CSS Backgrounds</a></li>
                <li><a href="https://css-generators.com/background-image/" className="text-blue-400 hover:text-blue-300">• CSS Generators - Background</a></li>
                <li><a href="https://www.cssmatic.com/gradient-generator" className="text-blue-400 hover:text-blue-300">• CSSmatic - Gradient Generator</a></li>
                <li><a href="https://bennettfeely.com/clippy/" className="text-blue-400 hover:text-blue-300">• Clippy - CSS clip-path maker</a></li>
              </ul>
            </div>
            
            <div className="bg-[#1a1f2e] p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-medium text-gray-100 mb-3">Performance & Optimization</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://tinypng.com/" className="text-green-400 hover:text-green-300">• TinyPNG - Rasm siqish</a></li>
                <li><a href="https://squoosh.app/" className="text-green-400 hover:text-green-300">• Squoosh - Rasm optimizatsiya</a></li>
                <li><a href="https://caniuse.com/" className="text-green-400 hover:text-green-300">• Can I Use - Browser support</a></li>
                <li><a href="https://web.dev/measure/" className="text-green-400 hover:text-green-300">• Web.dev - Performance test</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Qo'llanma bo'limi */}
        <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
            <span className="text-2xl">📖</span> Qo'llanmalar va Maqolalar
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-blue-300 mb-2">MDN Documentation</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background" className="hover:text-blue-400">• CSS Background Properties</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders" className="hover:text-blue-400">• Backgrounds and Borders</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/gradient" className="hover:text-blue-400">• CSS Gradients</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-300 mb-2">CSS Tricks</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li><a href="https://css-tricks.com/almanac/properties/b/background/" className="hover:text-blue-400">• Background Property Guide</a></li>
                <li><a href="https://css-tricks.com/css3-gradients/" className="hover:text-blue-400">• CSS Gradients Guide</a></li>
                <li><a href="https://css-tricks.com/perfect-full-page-background-image/" className="hover:text-blue-400">• Full Page Background</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/selectors" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Selectors
        </Link>
        
        <Link href="/docs/css/box-model" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Box Model
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
