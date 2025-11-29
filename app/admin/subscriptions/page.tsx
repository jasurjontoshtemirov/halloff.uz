"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Clock, XCircle, User, Mail, Calendar, DollarSign } from "lucide-react";

interface Payment {
  id: number;
  user_id: number;
  user_name: string;
  user_email: string;
  amount: number;
  status: string;
  payment_id: string;
  created_at: string;
  subscription_end?: string;
}

export default function AdminSubscriptionsPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [approving, setApproving] = useState<number | null>(null);

  const fetchPayments = async () => {
    try {
      const response = await fetch("/api/admin/payments");
      const data = await response.json();
      if (data.success) {
        setPayments(data.payments);
      }
    } catch (error) {
      console.error("Payments fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
    // Har 10 soniyada yangilash
    const interval = setInterval(fetchPayments, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleApprove = async (paymentId: string, userId: number) => {
    if (!confirm("To'lovni tasdiqlaysizmi?")) return;

    setApproving(userId);

    try {
      const response = await fetch("/api/admin/approve-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentId }),
      });

      const data = await response.json();

      if (data.success) {
        alert("To'lov tasdiqlandi! Obuna faollashtirildi.");
        fetchPayments();
      } else {
        alert("Xatolik: " + data.message);
      }
    } catch (error) {
      console.error("Approve error:", error);
      alert("Xatolik yuz berdi");
    } finally {
      setApproving(null);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm">
            <Clock className="w-4 h-4" />
            Kutilmoqda
          </span>
        );
      case "completed":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm">
            <CheckCircle className="w-4 h-4" />
            Tasdiqlangan
          </span>
        );
      case "failed":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm">
            <XCircle className="w-4 h-4" />
            Bekor qilingan
          </span>
        );
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("uz-UZ", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const pendingPayments = payments.filter((p) => p.status === "pending");
  const completedPayments = payments.filter((p) => p.status === "completed");

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Obunalar</h1>
        <p className="text-gray-400">To'lovlarni boshqarish va tasdiqlash</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Kutilmoqda</span>
            <Clock className="w-5 h-5 text-yellow-400" />
          </div>
          <p className="text-3xl font-bold text-white">{pendingPayments.length}</p>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Tasdiqlangan</span>
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <p className="text-3xl font-bold text-white">{completedPayments.length}</p>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Jami daromad</span>
            <DollarSign className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-3xl font-bold text-white">
            {(completedPayments.length * 10000).toLocaleString()} so'm
          </p>
        </div>
      </div>

      {/* Pending Payments */}
      {pendingPayments.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-yellow-400" />
            Kutilayotgan to'lovlar ({pendingPayments.length})
          </h2>
          <div className="space-y-4">
            {pendingPayments.map((payment) => (
              <div
                key={payment.id}
                className="bg-[#161b22] border border-yellow-500/20 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{payment.user_name}</h3>
                        <p className="text-sm text-gray-400 flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {payment.user_email}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400 mb-1">To'lov ID:</p>
                        <p className="text-white font-mono text-xs">{payment.payment_id}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-1">Summa:</p>
                        <p className="text-white font-semibold">{payment.amount.toLocaleString()} so'm</p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-1">Sana:</p>
                        <p className="text-white">{formatDate(payment.created_at)}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-1">Status:</p>
                        {getStatusBadge(payment.status)}
                      </div>
                    </div>
                  </div>

                  <div className="ml-4 flex flex-col gap-2">
                    <button
                      onClick={() => handleApprove(payment.payment_id, payment.user_id)}
                      disabled={approving === payment.user_id}
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-600/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition flex items-center gap-2 whitespace-nowrap"
                    >
                      <CheckCircle className="w-5 h-5" />
                      {approving === payment.user_id ? "Tasdiqlanmoqda..." : "✅ To'lovni tasdiqlash"}
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      (1 oylik obuna beriladi)
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Payments */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Barcha to'lovlar</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0f0f0f] border-b border-[#30363d]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                    Foydalanuvchi
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                    To'lov ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                    Summa
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                    Sana
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">
                    Obuna tugashi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#30363d]">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                      Yuklanmoqda...
                    </td>
                  </tr>
                ) : payments.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                      To'lovlar topilmadi
                    </td>
                  </tr>
                ) : (
                  payments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-[#0f0f0f] transition">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-medium">{payment.user_name}</p>
                          <p className="text-sm text-gray-400">{payment.user_email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-white font-mono text-xs">{payment.payment_id}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-white font-semibold">{payment.amount.toLocaleString()} so'm</p>
                      </td>
                      <td className="px-6 py-4">{getStatusBadge(payment.status)}</td>
                      <td className="px-6 py-4">
                        <p className="text-white text-sm">{formatDate(payment.created_at)}</p>
                      </td>
                      <td className="px-6 py-4">
                        {payment.subscription_end ? (
                          <p className="text-white text-sm flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-blue-400" />
                            {formatDate(payment.subscription_end)}
                          </p>
                        ) : (
                          <span className="text-gray-500">-</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
