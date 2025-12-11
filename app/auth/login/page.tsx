"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { GraduationCap, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";
import { saveCurrentUser } from "@/lib/auth-db";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const result = await response.json();
      
      if (result.success && result.user) {
        // Save user to localStorage for client-side access
        saveCurrentUser(result.user);
        
        setSuccess(result.message);
        
        setTimeout(() => {
          // Barcha foydalanuvchilar docs sahifasiga yo'naltiriladi
          window.location.href = "/docs";
        }, 500);
      } else {
        setError(result.message);
        setLoading(false);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Xatolik yuz berdi. Qaytadan urinib ko\'ring.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#1a1a2e] to-[#16213e] relative overflow-hidden flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-blue-800/30 to-blue-700/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-gray-900/30 via-slate-800/20 to-black/15"></div>
        
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/35 to-blue-500/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-slate-700/30 to-gray-800/25 rounded-full blur-[100px] animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-800/25 to-blue-900/20 rounded-full blur-[150px] animate-float-slow"></div>
        
        <div className="absolute top-20 right-1/3 w-[200px] h-[200px] bg-gradient-to-r from-blue-400/25 to-blue-600/20 rounded-full blur-[60px] animate-float"></div>
        <div className="absolute bottom-20 left-1/3 w-[150px] h-[150px] bg-gradient-to-r from-gray-700/25 to-slate-800/20 rounded-full blur-[50px] animate-float-delayed"></div>
        
        {/* GRADUATION CAP IKONLAR - KO'P VA KATTA MASOFALAR BILAN */}
        
        {/* Chap tomon - vertikal qator */}
        <div className="absolute top-8 left-2 animate-particle-drift animation-delay-0 opacity-70 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-6 h-6 text-blue-400 drop-shadow-2xl" />
        </div>
        <div className="absolute top-24 left-6 animate-particle-drift animation-delay-2000 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-7 h-7 text-white drop-shadow-2xl" />
        </div>
        <div className="absolute top-40 left-2 animate-particle-drift animation-delay-4000 opacity-75 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-8 h-8 text-blue-300 drop-shadow-2xl" />
        </div>
        <div className="absolute top-56 left-8 animate-particle-drift animation-delay-6000 opacity-55 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-5 h-5 text-indigo-400 drop-shadow-2xl" />
        </div>
        <div className="absolute top-72 left-4 animate-particle-drift animation-delay-8000 opacity-65 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-9 h-9 text-green-400 drop-shadow-2xl" />
        </div>
        <div className="absolute top-88 left-10 animate-particle-drift animation-delay-10000 opacity-50 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-6 h-6 text-orange-400 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-88 left-2 animate-particle-drift animation-delay-12000 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-7 h-7 text-lime-400 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-72 left-6 animate-particle-drift animation-delay-14000 opacity-45 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-8 h-8 text-purple-400 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-56 left-4 animate-particle-drift animation-delay-16000 opacity-70 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-6 h-6 text-sky-400 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-40 left-8 animate-particle-drift animation-delay-18000 opacity-55 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-7 h-7 text-red-400 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-24 left-2 animate-particle-drift animation-delay-20000 opacity-65 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-9 h-9 text-cyan-400 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-8 left-6 animate-particle-drift animation-delay-22000 opacity-50 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-8 h-8 text-teal-400 drop-shadow-2xl" />
        </div>

        {/* O'ng tomon - vertikal qator */}
        <div className="absolute top-8 right-2 animate-particle-drift animation-delay-1000 opacity-65 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-8 h-8 text-green-400 drop-shadow-2xl" />
        </div>
        <div className="absolute top-24 right-6 animate-particle-drift animation-delay-3000 opacity-55 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-6 h-6 text-rose-400 drop-shadow-2xl" />
        </div>
        <div className="absolute top-40 right-2 animate-particle-drift animation-delay-5000 opacity-80 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-9 h-9 text-violet-400 drop-shadow-2xl" />
        </div>
        <div className="absolute top-56 right-8 animate-particle-drift animation-delay-7000 opacity-50 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-5 h-5 text-emerald-400 drop-shadow-2xl" />
        </div>
        <div className="absolute top-72 right-4 animate-particle-drift animation-delay-9000 opacity-70 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-7 h-7 text-cyan-400 drop-shadow-2xl" />
        </div>
        <div className="absolute top-88 right-10 animate-particle-drift animation-delay-11000 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-8 h-8 text-sky-400 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-88 right-2 animate-particle-drift animation-delay-13000 opacity-45 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-6 h-6 text-fuchsia-400 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-72 right-6 animate-particle-drift animation-delay-15000 opacity-75 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-9 h-9 text-red-400 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-56 right-4 animate-particle-drift animation-delay-17000 opacity-55 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-7 h-7 text-blue-300 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-40 right-8 animate-particle-drift animation-delay-19000 opacity-65 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-8 h-8 text-teal-400 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-24 right-2 animate-particle-drift animation-delay-21000 opacity-50 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-6 h-6 text-lime-400 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-8 right-6 animate-particle-drift animation-delay-23000 opacity-70 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-9 h-9 text-purple-400 drop-shadow-2xl" />
        </div>

        {/* Yuqori qator - gorizontal */}
        <div className="absolute top-2 left-16 animate-particle-drift animation-delay-1500 opacity-50 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-6 h-6 text-purple-300 drop-shadow-2xl" />
        </div>
        <div className="absolute top-6 left-28 animate-particle-drift animation-delay-3500 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-7 h-7 text-pink-300 drop-shadow-2xl" />
        </div>
        <div className="absolute top-2 left-40 animate-particle-drift animation-delay-5500 opacity-45 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-5 h-5 text-cyan-300 drop-shadow-2xl" />
        </div>
        <div className="absolute top-6 left-52 animate-particle-drift animation-delay-7500 opacity-70 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-8 h-8 text-green-300 drop-shadow-2xl" />
        </div>
        <div className="absolute top-2 left-64 animate-particle-drift animation-delay-9500 opacity-55 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-6 h-6 text-yellow-300 drop-shadow-2xl" />
        </div>
        <div className="absolute top-6 left-76 animate-particle-drift animation-delay-11500 opacity-65 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-7 h-7 text-indigo-300 drop-shadow-2xl" />
        </div>
        <div className="absolute top-2 right-76 animate-particle-drift animation-delay-13500 opacity-50 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-9 h-9 text-orange-300 drop-shadow-2xl" />
        </div>
        <div className="absolute top-6 right-64 animate-particle-drift animation-delay-15500 opacity-75 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-6 h-6 text-lime-300 drop-shadow-2xl" />
        </div>
        <div className="absolute top-2 right-52 animate-particle-drift animation-delay-17500 opacity-40 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-8 h-8 text-rose-300 drop-shadow-2xl" />
        </div>
        <div className="absolute top-6 right-40 animate-particle-drift animation-delay-19500 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-7 h-7 text-violet-300 drop-shadow-2xl" />
        </div>
        <div className="absolute top-2 right-28 animate-particle-drift animation-delay-21500 opacity-55 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-5 h-5 text-emerald-300 drop-shadow-2xl" />
        </div>
        <div className="absolute top-6 right-16 animate-particle-drift animation-delay-23500 opacity-65 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-8 h-8 text-blue-300 drop-shadow-2xl" />
        </div>

        {/* Pastki qator - gorizontal */}
        <div className="absolute bottom-2 left-16 animate-particle-drift animation-delay-2500 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-7 h-7 text-teal-300 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-6 left-28 animate-particle-drift animation-delay-4500 opacity-50 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-8 h-8 text-red-300 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-2 left-40 animate-particle-drift animation-delay-6500 opacity-75 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-6 h-6 text-violet-300 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-6 left-52 animate-particle-drift animation-delay-8500 opacity-45 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-9 h-9 text-emerald-300 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-2 left-64 animate-particle-drift animation-delay-10500 opacity-65 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-7 h-7 text-rose-300 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-6 left-76 animate-particle-drift animation-delay-12500 opacity-55 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-8 h-8 text-blue-300 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-2 right-76 animate-particle-drift animation-delay-14500 opacity-70 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-6 h-6 text-purple-300 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-6 right-64 animate-particle-drift animation-delay-16500 opacity-40 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-9 h-9 text-pink-300 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-2 right-52 animate-particle-drift animation-delay-18500 opacity-80 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-7 h-7 text-cyan-300 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-6 right-40 animate-particle-drift animation-delay-20500 opacity-50 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-8 h-8 text-green-300 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-2 right-28 animate-particle-drift animation-delay-22500 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-5 h-5 text-yellow-300 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-6 right-16 animate-particle-drift animation-delay-24500 opacity-75 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-6 h-6 text-indigo-300 drop-shadow-2xl" />
        </div>

        {/* Markaziy katta ikonlar - ajratilgan */}
        <div className="absolute top-1/4 left-1/6 animate-particle-drift animation-delay-25000 opacity-25 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-12 h-12 text-purple-100 drop-shadow-2xl" />
        </div>
        <div className="absolute top-1/4 right-1/6 animate-particle-drift animation-delay-25500 opacity-30 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-14 h-14 text-pink-100 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-1/4 left-1/6 animate-particle-drift animation-delay-26000 opacity-20 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-11 h-11 text-cyan-100 drop-shadow-2xl" />
        </div>
        <div className="absolute bottom-1/4 right-1/6 animate-particle-drift animation-delay-26500 opacity-35 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-13 h-13 text-green-100 drop-shadow-2xl" />
        </div>

        {/* Qo'shimcha markaziy ikonlar */}
        <div className="absolute top-1/3 left-1/4 animate-particle-drift animation-delay-27000 opacity-40 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-5 h-5 text-yellow-100 drop-shadow-2xl" />
        </div>
        <div className="absolute top-1/2 left-1/8 animate-particle-drift animation-delay-27500 opacity-45 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-6 h-6 text-indigo-100 drop-shadow-2xl" />
        </div>
        <div className="absolute top-2/3 left-1/4 animate-particle-drift animation-delay-28000 opacity-35 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-7 h-7 text-orange-100 drop-shadow-2xl" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-particle-drift animation-delay-28500 opacity-50 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-6 h-6 text-teal-100 drop-shadow-2xl" />
        </div>
        <div className="absolute top-1/2 right-1/8 animate-particle-drift animation-delay-29000 opacity-40 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-8 h-8 text-lime-100 drop-shadow-2xl" />
        </div>
        <div className="absolute top-2/3 right-1/4 animate-particle-drift animation-delay-29500 opacity-55 hover:opacity-100 transition-opacity duration-500">
          <GraduationCap className="w-5 h-5 text-rose-100 drop-shadow-2xl" />
        </div>

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-blue-600/15 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-slate-600/20 to-gray-700/15 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-r from-blue-700/20 to-blue-800/15 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-r from-gray-600/20 to-slate-700/15 rounded-full blur-2xl animate-float"></div>
        </div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="relative">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping"></div>
          </div>
          <span className="text-2xl font-bold text-white">Halloff</span>
        </Link>

        <div className="relative group animate-card-entrance">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-blue-500/25 to-black/20 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500 animate-glow-pulse"></div>
          
          <div className="relative glass-card-blue rounded-3xl p-8 shadow-2xl hover:scale-[1.02] transform transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-blue-600/10 to-black/20 rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-black/25 via-blue-900/15 to-blue-700/10 rounded-3xl"></div>
            <div className="absolute inset-0 rounded-3xl animate-shimmer opacity-30"></div>
            
            <div className="relative z-10">
              <h1 className="text-2xl font-bold text-white mb-2">Xush kelibsiz</h1>
              <p className="text-gray-300 mb-6">Hisobingizga kiring</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                )}

                {success && (
                  <div className="p-3 bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-xl flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <p className="text-sm text-green-400">{success}</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@example.com"
                      className="w-full pl-10 pr-4 py-3 glass-input-blue rounded-xl text-white placeholder-gray-400 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Parol</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-12 py-3 glass-input-blue rounded-xl text-white placeholder-gray-400 focus:outline-none"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors duration-200"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link href="/auth/forgot-password" className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200">
                    Parolni unutdingizmi?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-blue-600/50 disabled:to-purple-600/50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:shadow-2xl hover:scale-105 transform backdrop-blur-sm"
                >
                  {loading ? "Kirish..." : "Kirish"}
                </button>
              </form>

              <div className="mt-4 p-3 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-xl">
                <p className="text-xs text-yellow-400 text-center">
                  💡 Google va GitHub bilan kirish tez orada qo'shiladi
                </p>
              </div>

              <p className="mt-6 text-center text-sm text-gray-300">
                Hisobingiz yo'qmi?{" "}
                <Link href="/auth/signup" className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200">
                  Ro'yxatdan o'tish
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
            ← Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  );
}