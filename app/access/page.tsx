"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Key, Lock, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

export default function AccessPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Check if admin code (case-insensitive)
      const adminCode = "K6YD2007@GMAIL";
      if (code.toUpperCase() === adminCode.toUpperCase()) {
        // Admin access - API orqali cookie o'rnatish
        const response = await fetch("/api/access/admin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        });

        const data = await response.json();
        
        if (data.success) {
          localStorage.setItem("access_granted", "true");
          localStorage.setItem("access_code", code);
          localStorage.setItem("is_admin", "true");
          
          // Auto login as admin
          const adminUser = {
            id: "admin-1",
            name: "Admin",
            email: "k6yd2007@gmail.com",
            role: "admin",
          };
          localStorage.setItem("halloff_current_user", JSON.stringify(adminUser));
          
          router.push("/admin");
          return;
        } else {
          setError(data.message || "Admin kirish xatosi!");
        }
      }

      // Regular user access
      console.log("Sending code to verify:", code);
      
      const response = await fetch("/api/access/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);

      if (data.success) {
        // Save access token
        localStorage.setItem("access_granted", "true");
        localStorage.setItem("access_code", code);
        
        // Oddiy foydalanuvchi - admin flag o'chirish
        localStorage.removeItem("is_admin");
        localStorage.removeItem("halloff_current_user");
        
        // Redirect to docs
        router.push("/docs");
      } else {
        setError(data.message || "Kod noto'g'ri!");
      }
    } catch (error) {
      console.error("Access error:", error);
      setError("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#010336] via-[#020550] to-[#010336] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <BookOpen className="w-10 h-10 text-blue-400" />
          <span className="text-3xl font-bold text-white">Halloff</span>
        </Link>

        {/* Access Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
              <Key className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Kirish Kodi</h1>
            <p className="text-gray-400">
              Darslarni ko'rish uchun kirish kodini kiriting
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            {/* Code Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Kirish Kodi
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="aBc4-Xy9Z-mN2p"
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-center text-lg font-mono tracking-wider placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  required
                  maxLength={14}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Admin'dan olingan kodini kiriting
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || code.length < 4}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all transform hover:scale-105 disabled:transform-none shadow-lg shadow-blue-500/50"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Tekshirilmoqda...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Kirish
                </span>
              )}
            </button>
          </form>

          {/* Info */}
          <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">💡</div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-blue-400 mb-1">
                    Kod qanday olinadi?
                  </h3>
                  <p className="text-xs text-gray-400">
                    Admin bilan bog'laning va kirish kodini so'rang. Kod bir martalik yoki ko'p martalik bo'lishi mumkin.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">👑</div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-purple-400 mb-1">
                    Admin kirish
                  </h3>
                  <p className="text-xs text-gray-400">
                    Admin panel uchun maxsus kod mavjud. Admin kodi bilan to'g'ridan-to'g'ri admin panelga kirasiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition">
            ← Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  );
}