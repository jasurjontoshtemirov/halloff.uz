"use client";

import Link from "next/link";
import { useState } from "react";
import { GraduationCap, Mail, Lock, User, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";

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
  const [showAccessKeyModal, setShowAccessKeyModal] = useState(false);
  const [accessKey, setAccessKey] = useState("");
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Save current user to localStorage (client-side)
  const saveCurrentUser = (user: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('halloff_current_user', JSON.stringify(user));
    }
  };

  const handleAccessKeySubmit = async () => {
    if (!accessKey.trim()) {
      setError("Kirish kalitini kiriting!");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/auth/verify-access-key', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userId: currentUser.id, 
          accessKey: accessKey.trim() 
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Kalitni localStorage ga saqlash
        localStorage.setItem(`access_key_${currentUser.id}`, 'verified');
        setShowAccessKeyModal(false);
        window.location.href = "/docs";
      } else {
        setError(result.message);
        setLoading(false);
      }
    } catch (error) {
      console.error('Access key verification error:', error);
      setError('Xatolik yuz berdi. Qaytadan urinib ko\'ring.');
      setLoading(false);
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
          setCurrentUser(loginResult.user);
          
          setSuccess("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
          
          // Kirish kaliti tekshirish
          const hasAccessKey = localStorage.getItem(`access_key_${loginResult.user.id}`);
          if (hasAccessKey) {
            // Agar kalit mavjud bo'lsa, to'g'ridan-to'g'ri docs ga o'tish
            setTimeout(() => {
              window.location.href = "/docs";
            }, 1500);
          } else {
            // Agar kalit yo'q bo'lsa, modal oynani ko'rsatish
            setTimeout(() => {
              setShowAccessKeyModal(true);
              setLoading(false);
            }, 1500);
          }
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
    } catch (error) {
      console.error('Signup error:', error);
      setError('Xatolik yuz berdi. Qaytadan urinib ko\'ring.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <GraduationCap className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold text-white">Halloff</span>
        </Link>

        {/* SignUp Card */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8">
          <h1 className="text-2xl font-bold text-white mb-2">Ro'yxatdan o'tish</h1>
          <p className="text-gray-400 mb-6">Yangi hisob yarating</p>

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

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Ism
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
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

      {/* Access Key Modal */}
      {showAccessKeyModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 z-50">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-white mb-4 text-center">Kirish Kaliti</h2>
            <p className="text-gray-400 text-sm mb-6 text-center">
              Dokumentatsiyaga kirish uchun maxsus kalitni kiriting
            </p>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Kirish Kaliti</label>
              <input
                type="text"
                value={accessKey}
                onChange={(e) => setAccessKey(e.target.value)}
                placeholder="Kalitni kiriting..."
                className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                onKeyPress={(e) => e.key === 'Enter' && handleAccessKeySubmit()}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowAccessKeyModal(false);
                  setAccessKey("");
                  setError("");
                }}
                className="flex-1 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition"
              >
                Bekor qilish
              </button>
              <button
                onClick={handleAccessKeySubmit}
                disabled={loading}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition"
              >
                {loading ? "Tekshirilmoqda..." : "Tasdiqlash"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}