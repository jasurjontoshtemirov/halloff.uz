"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function JavaScriptTestPage() {
  return (
    <div className="max-w-none">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-100 mb-4">TEST</h1>
        <p className="text-xl text-gray-400">JavaScript bilimingizni sinab koring</p>
      </div>

      <div className="mb-12 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🎥</span>
          <h2 className="text-2xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-8 text-center">
          <p className="text-gray-400 mb-4">TEST - Video dars</p>
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-lg">Video joylashuvi</span>
          </div>
        </div>
      </div>

      <div className="mb-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border border-blue-500/20">
        <h2 className="text-3xl font-semibold text-gray-100 mb-4">Test Topshiriqlari</h2>
        <p className="text-gray-300 mb-4">
          Bu darsda siz o&apos;rgangan barcha mavzularni amalda sinab ko&apos;rasiz.
        </p>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">✓</span>
            <span>Malumot turlari va operatorlar</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">✓</span>
            <span>Funksiyalar va array metodlari</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">✓</span>
            <span>DOM manipulation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">✓</span>
            <span>LocalStorage va Events</span>
          </li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Amaliy Topshiriqlar</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-gray-200 mb-3">1. Kalkulyator</h3>
            <p className="text-gray-300">
              To&apos;liq ishlaydigan kalkulyator yarating (4 amal, %, √, x²).
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-gray-200 mb-3">2. TodoList</h3>
            <p className="text-gray-300">
              CRUD operatsiyalari va LocalStorage bilan TodoList.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-gray-200 mb-3">3. Quiz App</h3>
            <p className="text-gray-300">
              10 ta savol, natijani ko&apos;rsatish, LocalStorage ga saqlash.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/javascript/amaliyot4" className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: CRUD TodoList
        </Link>
        <Link href="/docs/javascript/api" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: API, Fetch
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
