"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { BookOpen, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";
import { loginUser } from "@/lib/auth";

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

    // Login user
    const result = loginUser(email, password);
    
    if (result.success) {
      setSuccess(result.message);
      
      // Admin bo'lsa, cookie'larni server-side o'rnatish
      if (result.user?.role === 'admin') {
        try {
          await fetch('/api/auth/set-cookies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ isAdmin: true }),
          });
        } catch (error) {
          console.error('Cookie set error:', error);
        }
      }
      
      setTimeout(() => {
        // Admin'lar uchun to'g'ridan-to'g'ri /docs ga, oddiy foydalanuvchilar uchun /subscription ga
        if (result.user?.role === 'admin') {
          window.location.href = "/docs";
        } else {
          window.location.href = "/subscription";
        }
      }, 500);
    } else {
      setError(result.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <BookOpen className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold text-white">Halloff</span>
        </Link>

        {/* Admin Info */}
        <div className="mb-4 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <div className="text-2xl">👑</div>
            <div className="flex-1">
              <h3 className="text-purple-400 font-semibold mb-1">Admin hisoblar</h3>
              <p className="text-sm text-gray-400 mb-3">Admin panelga kirish uchun:</p>
              
              <div className="space-y-3">
                {/* Main Admin */}
                <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded">
                  <p className="text-xs text-purple-300 font-semibold mb-1">Asosiy Admin:</p>
                  <div className="space-y-1 text-xs font-mono">
                    <p className="text-gray-300">Email: <span className="text-purple-400">k6yd2007@gmail.com</span></p>
                    <p className="text-gray-300">Parol: <span className="text-purple-400">@Qwer1234</span></p>
                  </div>
                </div>
                
                {/* Default Admin */}
                <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded">
                  <p className="text-xs text-blue-300 font-semibold mb-1">Default Admin:</p>
                  <div className="space-y-1 text-xs font-mono">
                    <p className="text-gray-300">Email: <span className="text-blue-400">admin@halloff.uz</span></p>
                    <p className="text-gray-300">Parol: <span className="text-blue-400">admin123</span></p>
                  </div>
                </div>
              </div>
              
              <div className="mt-3 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded">
                <p className="text-xs text-yellow-400">
                  💡 Eslatma: localhost:3000 dan foydalaning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8">
          <h1 className="text-2xl font-bold text-white mb-2">Xush kelibsiz</h1>
          <p className="text-gray-400 mb-6">Hisobingizga kiring</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <p className="text-sm text-green-400">{success}</p>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Parol
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link href="/auth/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                Parolni unutdingizmi?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition"
            >
              {loading ? "Kirish..." : "Kirish"}
            </button>
          </form>

          {/* Note about OAuth */}
          <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <p className="text-xs text-yellow-400 text-center">
              💡 Google va GitHub bilan kirish tez orada qo'shiladi
            </p>
          </div>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Hisobingiz yo'qmi?{" "}
            <Link href="/auth/signup" className="text-blue-400 hover:text-blue-300 font-medium">
              Ro'yxatdan o'tish
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-white">
            ← Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  );
}
