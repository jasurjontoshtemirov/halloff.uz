"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Crown, Check, Sparkles } from "lucide-react";

export default function SubscriptionPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Auth tekshirish
    const checkAuth = async () => {
      try {
        const { getCurrentUser } = await import("@/lib/auth");
        const user = await getCurrentUser();
        
        if (!user) {
          router.push("/auth/login");
          return;
        }
        
        // Admin'lar uchun to'g'ridan-to'g'ri /docs ga yo'naltirish
        if (user.role === 'admin') {
          router.push("/docs");
          return;
        }
        
        setChecking(false);
      } catch (error) {
        console.error("Auth check error:", error);
        router.push("/auth/login");
      }
    };

    checkAuth();
  }, [router]);

  const handleSubscribe = () => {
    // To'g'ridan-to'g'ri Telegram'ga yo'naltirish
    window.open("https://t.me/jasurjontoshtemirov", "_blank");
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#010336] via-[#020550] to-[#010336] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#010336] via-[#020550] to-[#010336] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-medium">Premium Obuna Kerak</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Darslarni ko'rish uchun obuna bo'ling
          </h1>
          <p className="text-lg text-gray-400">
            Admin bilan bog'lanib, 10,000 so'm to'lab obuna bo'ling
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-3xl"></div>
          
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold text-sm">
                Eng mashhur
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl mb-6">
                <Crown className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">Premium Obuna</h2>
              
              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-6xl font-bold text-white">10,000</span>
                <span className="text-2xl text-gray-400 mb-2">so'm</span>
              </div>
              <p className="text-gray-400">oyiga</p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-gray-300">Barcha HTML darslariga kirish</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-gray-300">Barcha CSS darslariga kirish</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-gray-300">Barcha JavaScript darslariga kirish</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-gray-300">Video darslar</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-gray-300">Amaliy mashqlar va topshiriqlar</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-gray-300">24/7 qo'llab-quvvatlash</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleSubscribe}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <span className="text-xl">📱</span>
              Admin bilan bog'lanish
            </button>

            {/* Contact info */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-center text-gray-400 text-sm mb-4">Admin bilan bog'lanish:</p>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-6 py-3">
                  <span className="text-blue-400 font-semibold">@jasurjontoshtemirov</span>
                </div>
              </div>
              <p className="text-center text-gray-500 text-xs mt-4">
                Telegram orqali bog'lanib, 10,000 so'm to'lang
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
