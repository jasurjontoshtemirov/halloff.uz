"use client";

import Link from "next/link";
import { useState } from "react";
import { BookOpen, Mail, Lock, User, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Save current user to localStorage (client-side)
  const saveCurrentUser = (user: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('halloff_current_user', JSON.stringify(user));
    }
  };

  // Save current user to localStorage (client-side)
  const saveCurrentUser = (user: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('halloff_current_user', JSON.stringify(user));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Parollar mos kelmadi!");
      return;
    }

    if (password.length < 6) {
      setError("Parol kamida 6 ta belgidan iborat bo'lishi kerak!");
      return;
    }

    setLoading(true);

    try {
      // Register user
      const registerResponse = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      
      const registerResult = await registerResponse.json();
      
      if (registerResult.success) {
        // Avtomatik login qilish
        const loginResponse = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        
        const loginResult = await loginResponse.json();
        
        if (loginResult.success && loginResult.user) {
          // Save user to localStorage for client-side access
          saveCurrentUser(loginResult.user);
          
          setSuccess("Muvaffaqiyatli ro'yxatdan o'tdingiz! Darslar sahifasiga yo'naltirilmoqda...");
          setTimeout(() => {
            window.location.href = "/docs";
          }, 1500);
        } else {
          setSuccess(registerResult.message);
          setTimeout(() => {
            window.location.href = "/auth/login";
          }, 1500);
        }
      } else {
        setError(registerResult.message);
        setLoading(false);
     }
    ) {
);
      setE
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-y-12">
      <div clasd">
}
        <Link href="/" clas">
          <BookOpen className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold text-white">Halloff</span>
        </Link>

        {/* SignUp Card */}
        <div className="bg-[#161b-8">
          <h1 classNameh1>
          <p className="text-gray-400 mb-6">Yangi hisob yarating</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Erro
            {e
2">
                <AlertCircle classN
                <p classN</p>
              </div>
            )}

            {/* Succ
            {sss && (
>
                <CheckCi
                <
              </div>
            )}

            {/* Name */}
            <div>
              <label c">
                Ismype="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ismingiz"
                  className="w-full pl-10 pr-4 py-3 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  required
                />
              </div>
            </div>

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
                  minLength={6}
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

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Parolni tasdiqlang
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 w-4 h-4 bg-[#0f0f0f] border border-[#30363d] rounded"
              />
              <label htmlFor="terms" className="text-sm text-gray-400">
                Men{" "}
                <Link href="/terms" className="text-blue-400 hover:text-blue-300">
                  Foydalanish shartlari
                </Link>{" "}
                va{" "}
                <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                  Maxfiylik siyosati
                </Link>
                ni qabul qilaman
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition"
            >
              {loading ? "Ro'yxatdan o'tish..." : "Ro'yxatdan o'tish"}
            </button>
          </form>

          {/* Note about OAuth */}
          <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <p className="text-xs text-yellow-400 text-center">
              💡 Google va GitHub bilan ro'yxatdan o'tish tez orada qo'shiladi
            </p>
          </div>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Hisobingiz bormi?{" "}
            <Link href="/auth/login" className="text-blue-400 hover:text-blue-300 font-medium">
              Kirish
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
