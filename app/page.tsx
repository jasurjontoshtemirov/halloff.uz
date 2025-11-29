import Link from "next/link";
import { BookOpen, Code, Zap, Shield, ArrowRight, Sparkles, Rocket } from "lucide-react";

export default function Home() {
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
              <BookOpen className="w-6 h-6" />
              Halloff
            </Link>
            <Link
              href="/access"
              className="px-6 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition font-medium"
            >
              Kirish →
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-12 md:pb-20 px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-xs md:text-sm mb-6 md:mb-8">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
            <span className="text-blue-300">2025 - Eng yaxshi platforma</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight px-2">
            Web Dasturlashni<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Noldan Professional
            </span>
            <br />Darajagacha O'rganing
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            HTML, CSS va JavaScript'ni zamonaviy, tushunarli va amaliy darslar orqali o'rganing
          </p>
          
          <div className="flex justify-center items-center px-4">
            <Link
              href="/access"
              className="w-full sm:w-auto group px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all font-bold text-lg md:text-xl shadow-2xl shadow-blue-500/50 hover:scale-105 transform flex items-center justify-center gap-2 md:gap-3"
            >
              Hoziroq Boshlash
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">100+</div>
              <div className="text-xs md:text-sm text-gray-400">Video Darslar</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">50+</div>
              <div className="text-xs md:text-sm text-gray-400">Amaliy Loyihalar</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">24/7</div>
              <div className="text-xs md:text-sm text-gray-400">Qo'llab-quvvatlash</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">1000+</div>
              <div className="text-xs md:text-sm text-gray-400">O'quvchilar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Nega Halloff?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
              Zamonaviy texnologiyalar va professional yondashuv
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-blue-600/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-6 md:p-8 hover:border-blue-500/40 transition-all hover:scale-105 transform">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Code className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Amaliy Darslar</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Har bir dars real loyihalar bilan birga
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-6 md:p-8 hover:border-purple-500/40 transition-all hover:scale-105 transform">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Zap className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Tez O'rganish</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Qisqa vaqtda ko'p narsani o'rganing
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-600/10 to-pink-600/5 border border-pink-500/20 rounded-2xl p-6 md:p-8 hover:border-pink-500/40 transition-all hover:scale-105 transform sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Shield className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Professional Sifat</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Yuqori sifatli ta'lim
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-12">
          <Rocket className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Hoziroq Boshlang!
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            HTML, CSS va JavaScript'ni professional darajada o'rganing
          </p>
          <Link
            href="/access"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all font-bold text-xl shadow-2xl shadow-blue-500/50 hover:scale-105 transform"
          >
            Kirish Kodi Bilan Boshlash
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Halloff
              </div>
              <p className="text-sm text-gray-400">
                Professional dasturlash kurslari
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Kurslar</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="text-gray-400">HTML</li>
                <li className="text-gray-400">CSS</li>
                <li className="text-gray-400">JavaScript</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resurslar</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/access" className="hover:text-white">Kirish Kodi</Link></li>
                <li><Link href="/access" className="hover:text-white">Dokumentatsiya</Link></li>
                <li><Link href="/access" className="hover:text-white">Bepul Darslar</Link></li>
                <li><a href="https://t.me/jasurjontoshtemirov" target="_blank" rel="noopener noreferrer" className="hover:text-white">Qo'llab-quvvatlash</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Aloqa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://t.me/jasurjontoshtemirov" target="_blank" rel="noopener noreferrer" className="hover:text-white">Telegram</a></li>
                <li><a href="https://instagram.com/jasurjontoshtemirov" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
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
