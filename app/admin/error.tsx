"use client";

import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export default function AdminError() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <Shield className="w-20 h-20 text-red-400 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-white mb-4">Kirish rad etildi</h1>
        <p className="text-gray-400 mb-6">
          Bu sahifaga faqat adminlar kira oladi. Iltimos, admin hisobi bilan kiring.
        </p>
        <div className="space-y-3">
          <Link
            href="/auth/login"
            className="block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            Kirish sahifasiga o'tish
          </Link>
          <Link
            href="/docs"
            className="block px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Dokumentatsiyaga qaytish
          </Link>
        </div>
        <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
          <p className="text-sm text-purple-400 font-semibold mb-2">Admin hisobi:</p>
          <p className="text-xs text-gray-400 font-mono">admin@halloff.uz / admin123</p>
        </div>
      </div>
    </div>
  );
}
