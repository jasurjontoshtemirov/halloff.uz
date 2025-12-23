"use client";

import Link from "next/link";
import { useState } from "react";
import { GraduationCap, Phone, AlertCircle, CheckCircle, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Telefon raqami validatsiyasi
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^(\+998|998)?[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  // Telefon raqamini formatlash
  const formatPhone = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('998')) {
      return '+' + cleaned;
    }
    if (cleaned.length === 9) {
      return '+998' + cleaned;
    }
    return phone;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validatePhone(phone)) {
      setError("To'g'ri telefon raqam kiriting");
      return;
    }

    setLoading(true);

    try {
      const formattedPhone = formatPhone(phone);
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: formattedPhone }),
      });
      
      const result = await response.json();
      
      if (result.success && result.user) {
        // localStorage ga saqlash
        localStorage.setItem('halloff_current_user', JSON.stringify(result.user));
        if (result.user.role === 'admin') {
          localStorage.setItem('is_admin', 'true');
        }
        
        // To'g'ridan-to'g'ri redirect
        if (result.user.role === 'admin') {
          window.location.href = "/admin";
        } else {
          window.location.href = "/docs";
        }
      } else {
        setError(result.message || 'Login xatosi');
        setLoading(false);
      }
    } catch (error) {
      setError('Tarmoq xatosi. Internetni tekshiring.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#1a1a2e] to-[#16213e] relative overflow-hidden flex items-center justify-center px-4">
      <div className="w-full max-w-md relative z-10">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <GraduationCap className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold text-white">Halloff</span>
        </Link>

        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8">
          <h1 className="text-2xl font-bold text-white mb-2">Xush kelibsiz</h1>
          <p className="text-gray-400 mb-6">Hisobingizga kiring</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            {success && (
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <p className="text-sm text-green-400">{success}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Telefon raqam</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+998 90 123 45 67"
                  disabled={loading}
                  className="w-full pl-10 pr-4 py-3 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Ro'yxatdan o'tgan telefon raqamingizni kiriting
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? "Kirish..." : "Kirish"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Hisobingiz yo'qmi?{" "}
            <Link href="/auth/signup" className="text-blue-400 hover:text-blue-300 font-medium">
              Ro'yxatdan o'tish
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-white">
            ← Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  );
}