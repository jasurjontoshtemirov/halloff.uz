"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
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
  Heart
} from "lucide-react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
          {/* Navigation */}
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Halloff
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="/docs" className="text-gray-400 hover:text-white transition">
                Darslar
              </Link>
              <Link 
                href="/docs" 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold transition transform hover:scale-105"
              >
                Boshlash
              </Link>
            </div>
          </nav>

          {/* Hero Content */}
          <div className={`text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm mb-8 animate-bounce">
              <Sparkles className="w-4 h-4" />
              O'zbekistondagi #1 Dasturlash Platformasi
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Kelajakni
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Kodlang
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              HTML'dan boshlab JavaScript'gacha - professional dasturchi bo'lish yo'lingiz 
              <span className="text-blue-400 font-semibold"> shu yerdan boshlanadi</span>. 
              Minglab o'quvchi biz bilan o'z orzulariga erishdi.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                href="/docs" 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-2xl"
              >
                <Play className="w-6 h-6 group-hover:animate-pulse" />
                Bepul Boshlash
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>5000+ o'quvchi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.9/5 reyting</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">60+</div>
                <div className="text-gray-400">Darslar</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">5000+</div>
                <div className="text-gray-400">O'quvchilar</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-400">Bepul</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-400">Dostup</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Nima Uchun Halloff?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Bizning platformamiz sizga eng samarali va qiziqarli usulda dasturlashni o'rgatadi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl hover:border-blue-500/40 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition group-hover:rotate-6">
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition">Amaliy Darslar</h3>
              <p className="text-gray-400 leading-relaxed">
                Har bir mavzu real loyihalar bilan mustahkamlanadi. Nazariya emas, amaliyot!
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 hover:from-purple-500/20 hover:to-pink-500/20 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition group-hover:rotate-6">
                <Rocket className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition">Tez O'rganish</h3>
              <p className="text-gray-400 leading-relaxed">
                Qisqa va samarali darslar bilan vaqtingizni tejang. Har kun 30 daqiqa kifoya!
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl hover:border-green-500/40 hover:from-green-500/20 hover:to-emerald-500/20 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition group-hover:rotate-6">
                <Heart className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-300 transition">O'zbek Tilida</h3>
              <p className="text-gray-400 leading-relaxed">
                Barcha darslar o'zbek tilida va tushunarli. Hech qanday til to'sig'i yo'q!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className={`py-20 bg-gradient-to-r from-blue-500/5 to-purple-500/5 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
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

      {/* CTA Section */}
      <section className={`py-20 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tayyor? Keling Boshlaylik! 🚀
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Minglab dasturchilar Halloff bilan o'z karyeralarini boshladilar. 
              Endi sizning navbatingiz!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/docs" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 hover:shadow-2xl text-lg"
              >
                <Play className="w-6 h-6" />
                Birinchi Darsni Boshlash
                <ArrowRight className="w-6 h-6" />
              </Link>
              
              <div className="text-gray-400 text-sm">
                ✅ Bepul • ✅ Ro'yxatdan o'tish shart emas • ✅ Darhol boshlash
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Halloff
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-gray-400">
              <Link href="/docs" className="hover:text-white transition">
                Darslar
              </Link>
              <span>© 2025 Halloff. Barcha huquqlar himoyalangan.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}