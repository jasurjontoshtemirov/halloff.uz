"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle, Loader2 } from "lucide-react";

function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const paymentId = searchParams.get("id");

  useEffect(() => {
    if (!paymentId) {
      setStatus("error");
      return;
    }

    // Simulate payment processing
    // TODO: Real to'lov tizimi integratsiyasi
    const processPayment = async () => {
      try {
        // 2 soniya kutish (real to'lov jarayonini simulyatsiya qilish)
        await new Promise(resolve => setTimeout(resolve, 2000));

        const response = await fetch("/api/subscription/confirm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ paymentId }),
        });

        const data = await response.json();

        if (data.success) {
          setStatus("success");
          // 2 soniyadan keyin darslar sahifasiga yo'naltirish
          setTimeout(() => {
            router.push("/docs");
          }, 2000);
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Payment error:", error);
        setStatus("error");
      }
    };

    processPayment();
  }, [paymentId, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#010336] via-[#020550] to-[#010336] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-yellow-400 animate-spin mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-2">To'lov amalga oshirilmoqda...</h2>
          <p className="text-gray-400">Iltimos, kuting</p>
        </div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#010336] via-[#020550] to-[#010336] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">To'lov muvaffaqiyatli!</h2>
          <p className="text-gray-400 mb-6">
            Tabriklaymiz! Endi siz barcha darslardan foydalanishingiz mumkin.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-sm text-gray-400 mb-2">To'lov ID:</p>
            <p className="text-white font-mono text-sm">{paymentId}</p>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            2 soniyadan keyin darslar sahifasiga yo'naltirilasiz...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#010336] via-[#020550] to-[#010336] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">❌</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">To'lov amalga oshmadi</h2>
        <p className="text-gray-400 mb-6">
          Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.
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

export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-[#010336] via-[#020550] to-[#010336] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-yellow-400 animate-spin mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-2">Yuklanmoqda...</h2>
        </div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  );
}
