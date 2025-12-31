"use client";

import { useEffect, useState } from "react";
import { 
  Zap, 
  Code, 
  Palette, 
  Lightbulb, 
  Rocket, 
  Star,
  ArrowRight,
  BookOpen,
  Play,
  Trophy,
  Target,
  Sparkles
} from "lucide-react";

export default function DocsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] px-6 max-w-none">
      {/* Hero Section */}
      <div className={`not-prose mb-12 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-12 mb-12 shadow-2xl max-w-6xl mx-auto">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-4 right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm mb-6 animate-bounce">
              <Sparkles className="w-4 h-4" />
              Dasturlash Dunyosiga Xush Kelibsiz!
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
              Kelajakni Kodlang
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              HTML'dan boshlab JavaScript'gacha - professional dasturchi bo'lish yo'lingiz shu yerdan boshlanadi. 
              <span className="text-blue-400 font-semibold"> Har bir qadamda siz bilan birga!</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/docs/html" 
                className="group inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 hover:shadow-2xl"
              >
                <Play className="w-5 h-5 group-hover:animate-pulse" />
                Darslarni Boshlash
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#roadmap" 
                className="inline-flex items-center gap-3 px-6 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-xl transition-all hover:bg-white/5"
              >
                <Target className="w-5 h-5" />
                O'quv Rejasi
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Cards */}
      <div className={`not-prose mb-12 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Qayerdan Boshlash?
          </span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/docs/html" className="group block p-6 bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl hover:border-red-500/40 hover:from-red-500/20 hover:to-pink-500/20 transition-all transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition group-hover:rotate-6">
                <Code className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-300 transition">HTML</h3>
                <p className="text-gray-400 mb-3">Veb sahifalar yaratishning asoslari</p>
                <div className="flex items-center gap-2 text-sm text-red-400">
                  <span>6 ta dars</span>
                  <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                  <span>Boshlang'ich</span>
                </div>
              </div>
            </div>
          </a>

          <a href="/docs/css/intro" className="group block p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl hover:border-blue-500/40 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition group-hover:rotate-6">
                <Palette className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition">CSS</h3>
                <p className="text-gray-400 mb-3">Chiroyli dizayn va animatsiyalar</p>
                <div className="flex items-center gap-2 text-sm text-blue-400">
                  <span>18 ta dars</span>
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  <span>O'rta</span>
                </div>
              </div>
            </div>
          </a>

          <a href="/docs/javascript/intro" className="group block p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl hover:border-yellow-500/40 hover:from-yellow-500/20 hover:to-orange-500/20 transition-all transform hover:scale-105 hover:shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/30 transition group-hover:rotate-6">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition">JavaScript</h3>
                <p className="text-gray-400 mb-3">Interaktiv veb ilovalar yarating</p>
                <div className="flex items-center gap-2 text-sm text-yellow-400">
                  <span>34+ dars</span>
                  <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                  <span>Murakkab</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Learning Path */}
      <div id="roadmap" className={`not-prose mb-12 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            O'quv Yo'li
          </span>
        </h2>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-blue-500 to-yellow-500 opacity-30"></div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-red-500/20 border-4 border-red-500/40 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-400 font-bold text-lg">1</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-2">HTML Asoslari</h3>
                <p className="text-gray-400 mb-3">Veb sahifalar tuzilishini o'rganing. Taglar, atributlar va semantik HTML.</p>
                <div className="flex items-center gap-2 text-sm text-red-400">
                  <Trophy className="w-4 h-4" />
                  <span>1-2 hafta</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-500/20 border-4 border-blue-500/40 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-400 font-bold text-lg">2</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-2">CSS Styling</h3>
                <p className="text-gray-400 mb-3">Ranglar, shriftlar, layout va responsive dizayn yaratishni o'rganing.</p>
                <div className="flex items-center gap-2 text-sm text-blue-400">
                  <Trophy className="w-4 h-4" />
                  <span>2-3 hafta</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-yellow-500/20 border-4 border-yellow-500/40 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-yellow-400 font-bold text-lg">3</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-2">JavaScript Dasturlash</h3>
                <p className="text-gray-400 mb-3">Dinamik veb sahifalar yarating. O'zgaruvchilar, funksiyalar va DOM.</p>
                <div className="flex items-center gap-2 text-sm text-yellow-400">
                  <Trophy className="w-4 h-4" />
                  <span>4-6 hafta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className={`not-prose mb-12 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Nima Uchun Halloff?
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-green-400" />
            </div>
            <h4 className="font-bold text-white mb-2">Amaliy Darslar</h4>
            <p className="text-sm text-gray-400">Har bir mavzu real loyihalar bilan mustahkamlanadi</p>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="font-bold text-white mb-2">Tez O'rganish</h4>
            <p className="text-sm text-gray-400">Qisqa va samarali darslar bilan vaqtingizni tejang</p>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="font-bold text-white mb-2">Sifatli Kontent</h4>
            <p className="text-sm text-gray-400">Professional darajadagi ma'lumotlar va misollar</p>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-orange-400" />
            </div>
            <h4 className="font-bold text-white mb-2">O'zbek Tilida</h4>
            <p className="text-sm text-gray-400">Barcha darslar o'zbek tilida va tushunarli</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className={`not-prose transition-all duration-1000 delay-900 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tayyor? Keling Boshlaylik! 🚀
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Minglab dasturchilar Halloff bilan o'z karyeralarini boshladilar. 
            Endi sizning navbatingiz!
          </p>
          <a 
            href="/docs/html/intro" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 hover:shadow-2xl text-lg"
          >
            <Play className="w-6 h-6" />
            Birinchi Darsni Boshlash
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}