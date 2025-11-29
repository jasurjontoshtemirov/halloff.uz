"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Clock, CheckCircle, Loader2, MessageCircle } from "lucide-react";

function PendingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<"pending" | "approved" | "error">("pending");
  const paymentId = searchParams.get("id");

  useEffect(() => {
    if (!paymentId) {
      setStatus("error");
      return;
    }

    // Har 5 soniyada statusni tekshirish
    const checkStatus = async () => {
      try {
        const response = await fetch(`/api/subscription/status?id=${paymentId}`);
        const data = await response.json();

        if (data.status === "completed") {
          setStatus("approved");
          // 2 soniyadan keyin darslar sahifasiga yo'naltirish
          setTimeout(() => {
            router.push("/docs");
          }, 2000);
        }
      } catch (error) {
        console.error("Status tekshirishda xatolik:", error);
      }
    };

    // Dastlab tekshirish
    checkStatus();

    // Har 5 soniyada tekshirish
    const interval = setInterval(checkStatus, 5000);

    return () => clearInterval(interval);
  }, [paymentId, router]);

  if (!paymentId || status === "error") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#010336] via-[#020550] to-[#010336] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">❌</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Xatolik</h2>
          <p className="text-gray-400 mb-6">
            To'lov ma'lumotlari topilmadi.
          </p>
          <button
            onClick={() => router.push("/subscription")}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 px-8 rounded-xl transition-all"
          >
            Qaytadan urinish
          </button>
        </div>
      </div>
    );
  }

  if (status === "approved") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#010336] via-[#020550] to-[#010336] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Tasdiqlandi! 🎉</h2>
          <p className="text-gray-400 mb-6">
            Obunangiz faollashtirildi. Endi barcha darslardan foydalanishingiz mumkin.
          </p>
          <p className="text-sm text-gray-500">
            2 soniyadan keyin darslar sahifasiga yo'naltirilasiz...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#010336] via-[#020550] to-[#010336] flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
          <Clock className="w-12 h-12 text-yellow-400" />
          <div className="absolute inset-0 rounded-full border-4 border-yellow-500/30 border-t-yellow-500 animate-spin"></div>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">To'lov kutilmoqda</h2>
        
        <p className="text-gray-400 mb-8">
          So'rovingiz admin tomonidan ko'rib chiqilmoqda. Iltimos, kuting.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <p className="text-sm text-gray-400 mb-2">To'lov ID:</p>
          <p className="text-white font-mono text-sm break-all">{paymentId}</p>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8 mb-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-blue-400" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">To'lov qilish</h3>
            <p className="text-gray-300 mb-6">
              Admin'ga Telegram orqali xabar yuboring
            </p>

            <a 
              href="https://t.me/jasurjontoshtemirov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-bold text-lg transition transform hover:scale-105 mb-6"
            >
              <MessageCircle className="w-6 h-6" />
              @jasurjontoshtemirov ga yozish
            </a>

            <div className="bg-white/5 rounded-xl p-4 max-w-md mx-auto">
              <p className="text-gray-400 text-sm mb-2">Xabar matni:</p>
              <div className="bg-gray-900 rounded-lg p-4 text-sm text-gray-300 font-mono text-left mb-3">
                Assalomu alaykum! Obuna uchun to'lov qildim.
                <br />
                <br />
                <span className="text-yellow-400">To'lov ID:</span> {paymentId}
                <br />
                <span className="text-green-400">Summa:</span> 10,000 so'm
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`Assalomu alaykum! Obuna uchun to'lov qildim.\n\nTo'lov ID: ${paymentId}\nSumma: 10,000 so'm`);
                  alert('✅ Xabar nusxalandi! Telegram\'da yuboring.');
                }}
                className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition flex items-center justify-center gap-2"
              >
                <span>📋</span>
                Xabarni nusxalash
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Avtomatik yangilanmoqda...</span>
        </div>
      </div>
    </div>
  );
}

export default function PendingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-[#010336] via-[#020550] to-[#010336] flex items-center justify-center">
        <Loader2 className="w-16 h-16 text-yellow-400 animate-spin" />
      </div>
    }>
      <PendingContent />
    </Suspense>
  );
}
