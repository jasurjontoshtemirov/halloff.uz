"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  GraduationCap,
  Code, 
  Palette, 
  Zap, 
  BookOpen, 
  Users, 
  Star, 
  ArrowRight, 
  Play,
  CheckCircle,
  Sparkles,
  Trophy,
  Target,
  Rocket,
  Globe,
  Heart,
  Shield
} from "lucide-react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#010336] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[700px] bg-gradient-to-t from-[#26199F]/30 via-[#26199F]/10 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2D1898]/30 rounded-full blur-[150px]"></div>
      </div>

      {/* Header */}
      <header className="border-b border-[#30363d] sticky top-0 bg-[#010336]/95 backdrop-blur-sm z-50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-white flex items-center gap-2">
              <div className="relative">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping"></div>
              </div>
              Halloff
            </Link>
            <Link
              href="/docs"
              className="px-6 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition font-medium"
            >
              Boshlash →
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={`pt-12 md:pt-20 pb-12 md:pb-20 px-4 md:px-6 relative transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-xs md:text-sm mb-6 md:mb-8 animate-bounce">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
            <span className="text-blue-300">2025 - O'zbekistondagi #1 Platforma</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight px-2">
            Web Dasturlashni<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Noldan Professional
            </span>
            <br />Darajagacha O'rganing
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            HTML, CSS va JavaScript'ni zamonaviy, tushunarli va amaliy darslar orqali o'rganing. 
            <span className="text-blue-400 font-semibold"> Minglab o'quvchi biz bilan o'z orzulariga erishdi!</span>
          </p>

          <div className="flex justify-center items-center px-4">
            <Link
              href="/docs"
              className="w-full sm:w-auto group px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all font-bold text-lg md:text-xl shadow-2xl shadow-blue-500/50 hover:scale-105 transform flex items-center justify-center gap-2 md:gap-3"
            >
              <Play className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-pulse" />
              Hoziroq Boshlash
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">60+</div>
              <div className="text-xs md:text-sm text-gray-400">Video Darslar</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">5000+</div>
              <div className="text-xs md:text-sm text-gray-400">O'quvchilar</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">100%</div>
              <div className="text-xs md:text-sm text-gray-400">Bepul</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">24/7</div>
              <div className="text-xs md:text-sm text-gray-400">Dostup</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`py-16 md:py-24 px-4 md:px-6 relative z-10 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Nega Halloff?
              </span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
              Zamonaviy texnologiyalar va professional yondashuv bilan o'rganing
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="group bg-gradient-to-br from-blue-600/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-6 md:p-8 hover:border-blue-500/40 transition-all hover:scale-105 transform">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:rotate-6 transition">
                <Code className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-blue-300 transition">Amaliy Darslar</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Har bir dars real loyihalar bilan birga. Nazariya emas, amaliyot!
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-600/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-6 md:p-8 hover:border-purple-500/40 transition-all hover:scale-105 transform">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:rotate-6 transition">
                <Zap className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-purple-300 transition">Tez O'rganish</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Qisqa vaqtda ko'p narsani o'rganing. Har kun 30 daqiqa kifoya!
              </p>
            </div>

            <div className="group bg-gradient-to-br from-pink-600/10 to-pink-600/5 border border-pink-500/20 rounded-2xl p-6 md:p-8 hover:border-pink-500/40 transition-all hover:scale-105 transform sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:rotate-6 transition">
                <Heart className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-pink-300 transition">O'zbek Tilida</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Barcha darslar o'zbek tilida va tushunarli. Hech qanday til to'sig'i yo'q!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className={`py-16 md:py-20 px-4 md:px-6 relative z-10 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                O'quv Yo'li
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Boshlang'ich darajadan professional darajagacha - qadam ba qadam
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">HTML Asoslari</h3>
              <p className="text-gray-400 mb-4">Veb sahifalar tuzilishini o'rganing</p>
              <div className="flex items-center justify-center gap-2 text-sm text-orange-400">
                <Trophy className="w-4 h-4" />
                <span>1-2 hafta</span>
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">CSS Styling</h3>
              <p className="text-gray-400 mb-4">Chiroyli dizayn yaratishni o'rganing</p>
              <div className="flex items-center justify-center gap-2 text-sm text-blue-400">
                <Trophy className="w-4 h-4" />
                <span>2-3 hafta</span>
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">JavaScript</h3>
              <p className="text-gray-400 mb-4">Dinamik veb ilovalar yarating</p>
              <div className="flex items-center justify-center gap-2 text-sm text-yellow-400">
                <Trophy className="w-4 h-4" />
                <span>4-6 hafta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 px-6 relative z-10 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-12">
          <Rocket className="w-16 h-16 text-blue-400 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Tayyor? Keling Boshlaylik! 🚀
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Minglab dasturchilar Halloff bilan o'z karyeralarini boshladilar. Endi sizning navbatingiz!
          </p>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all font-bold text-xl shadow-2xl shadow-blue-500/50 hover:scale-105 transform"
          >
            <Play className="w-6 h-6" />
            Birinchi Darsni Boshlash
            <ArrowRight className="w-6 h-6" />
          </Link>
          <div className="mt-6 text-gray-400 text-sm">
            ✅ Bepul • ✅ Ro'yxatdan o'tish shart emas • ✅ Darhol boshlash
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <div className="relative">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping"></div>
                </div>
                Halloff
              </div>
              <p className="text-sm text-gray-400">
                Professional dasturlash kurslari o'zbek tilida
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Kurslar</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/docs/html/intro" className="hover:text-white transition">HTML</Link></li>
                <li><Link href="/docs/css/intro" className="hover:text-white transition">CSS</Link></li>
                <li><Link href="/docs/javascript/intro" className="hover:text-white transition">JavaScript</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resurslar</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/docs" className="hover:text-white transition">Dokumentatsiya</Link></li>
                <li><Link href="/docs" className="hover:text-white transition">Bepul Darslar</Link></li>
                <li><a href="https://t.me/jasurjontoshtemirov" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Qo'llab-quvvatlash</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Aloqa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://t.me/jasurjontoshtemirov" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Telegram</a></li>
                <li><a href="https://instagram.com/jasurjontoshtemirov" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#30363d] text-center text-sm text-gray-400">
            © 2025 Halloff. Barcha huquqlar himoyalangan.
          </div>
        </div>
      </footer>
    </div>
  );
}