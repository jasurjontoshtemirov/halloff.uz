"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Zap, 
  Blocks, 
  Plug, 
  Lightbulb, 
  Palette, 
  Smartphone, 
  Rocket, 
  MessageCircle, 
  Bug 
} from "lucide-react";

export default function DocsPage() {
  return (
    <div className="prose-dark max-w-none">
      <div className="not-prose mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm mb-4">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          Versiya 1.0
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Dokumentatsiyaga xush kelibsiz
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Professional darajadagi dokumentatsiya platformasi. Barcha kerakli ma'lumotlarni bir joyda toping.
        </p>
      </div>

      <div className="not-prose my-12">
        <div className="grid md:grid-cols-2 gap-6">
          <a href="/docs/components" className="group block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/10 transition-all hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition">
                <Blocks className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Komponentlar</h3>
                <p className="text-sm text-gray-400">Tayyor komponentlardan foydalaning</p>
              </div>
            </div>
          </a>

          <a href="/docs/api" className="group block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/10 transition-all hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition">
                <Plug className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">API Reference</h3>
                <p className="text-sm text-gray-400">To'liq API hujjatlari</p>
              </div>
            </div>
          </a>

          <a href="#" className="group block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/10 transition-all hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/30 transition">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Misollar</h3>
                <p className="text-sm text-gray-400">Amaliy misollar va kod namunalari</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <h2>Asosiy xususiyatlar</h2>
      
      <div className="not-prose grid md:grid-cols-3 gap-4 my-8">
        <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
          <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center mb-3">
            <Palette className="w-5 h-5 text-pink-400" />
          </div>
          <h4 className="font-semibold text-white mb-1">Zamonaviy dizayn</h4>
          <p className="text-sm text-gray-400">Professional va chiroyli interfeys</p>
        </div>
        <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
          <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3">
            <Smartphone className="w-5 h-5 text-cyan-400" />
          </div>
          <h4 className="font-semibold text-white mb-1">Responsive</h4>
          <p className="text-sm text-gray-400">Barcha qurilmalarda ishlaydi</p>
        </div>
        <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
          <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3">
            <Rocket className="w-5 h-5 text-orange-400" />
          </div>
          <h4 className="font-semibold text-white mb-1">Tez</h4>
          <p className="text-sm text-gray-400">Next.js 14 va Turbopack</p>
        </div>
      </div>

      <h2>Texnologiyalar</h2>
      
      <p>
        Ushbu platforma eng so'nggi texnologiyalar asosida qurilgan:
      </p>

      <div className="not-prose my-6">
        <div className="bg-gray-900 rounded-xl p-6 text-white">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Frontend</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Next.js 14 (App Router)</li>
                <li>• React 18</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Qo'shimcha</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• MDX qo'llab-quvvatlash</li>
                <li>• Syntax highlighting</li>
                <li>• Dark mode</li>
                <li>• SEO optimizatsiya</li>
              </ul>
            </div>
          </div>
        </div>
      </div>



      <div className="not-prose my-8 p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg backdrop-blur-sm">
        <div className="flex gap-3">
          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-300 mb-1">Maslahat</h4>
            <p className="text-sm text-gray-300">
              Chap tarafdagi navigatsiyadan kerakli bo'limni tanlang. Har bir bo'limda batafsil ma'lumot va misollar mavjud.
            </p>
          </div>
        </div>
      </div>

      <h2>Yordam kerakmi?</h2>
      
      <p>
        Agar savollaringiz bo'lsa yoki yordam kerak bo'lsa, quyidagi manbalardan foydalaning:
      </p>

      <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
        <a href="#" className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/10 transition">
          <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <div className="font-semibold text-white">Discord</div>
            <div className="text-sm text-gray-400">Jamoa bilan suhbatlashing</div>
          </div>
        </a>
        <a href="#" className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/10 transition">
          <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Bug className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <div className="font-semibold text-white">GitHub Issues</div>
            <div className="text-sm text-gray-400">Xato haqida xabar bering</div>
          </div>
        </a>
      </div>
    </div>
  );
}
