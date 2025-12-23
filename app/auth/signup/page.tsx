"use client";

import Link from "next/link";
import { useState } from "react";
import { GraduationCap, Phone, User, AlertCircle, CheckCircle } from "lucide-react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Telefon raqami validatsiyasi
  const validatePhone = (phone: string): boolean => {
    // O'zbekiston telefon raqamlari: +998XXXXXXXXX yoki 998XXXXXXXXX
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

    if (!name.trim()) {
      setError("Ismingizni kiriting");
      return;
    }

    if (!validatePhone(phone)) {
      setError("To'g'ri telefon raqam kiriting (masalan: +998901234567)");
      return;
    }

    setLoading(true);

    try {
      const formattedPhone = formatPhone(phone);
      
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: name.trim(), 
          phone: formattedPhone 
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSuccess("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
        
        // Foydalanuvchini localStorage ga saqlash
        localStorage.setItem('halloff_current_user', JSON.stringify({
          name: name.trim(),
          phone: formattedPhone
        }));
        
        setTimeout(() => {
          window.location.href = "/docs";
        }, 1500);
      } else {
        setError(result.message || "Ro'yxatdan o'tishda xatolik");
      }
    } catch (error) {
      setError('Tarmoq xatosi. Internetni tekshiring.');
    } finally {
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
          <h1 className="text-2xl font-bold text-white mb-2">Ro'yxatdan o'tish</h1>
          <p className="text-gray-400 mb-6">Yangi hisob yarating</p>

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
              <label className="block text-sm font-medium text-gray-300 mb-2">Ism</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ismingiz"
                  disabled={loading}
                  className="w-full pl-10 pr-4 py-3 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition disabled:opacity-50"
                  required
                />
              </div>
            </div>

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
                  className="w-full pl-10 pr-4 py-3 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition disabled:opacity-50"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                O'zbekiston raqamlari: +998901234567
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition"
            >
              {loading ? "Ro'yxatdan o'tish..." : "Ro'yxatdan o'tish"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Hisobingiz bormi?{" "}
            <Link href="/auth/login" className="text-blue-400 hover:text-blue-300 font-medium">
              Kirish
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