"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { generateSyncCode, importFromSyncCode } from "@/lib/sync";
import { Settings, Save, RefreshCw, Copy, Download, Upload, CheckCircle } from "lucide-react";

export default function AdminSettingsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [syncCode, setSyncCode] = useState("");
  const [importCode, setImportCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [importSuccess, setImportSuccess] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleGenerateSync = () => {
    const code = generateSyncCode();
    setSyncCode(code);
  };

  const handleCopySync = () => {
    navigator.clipboard.writeText(syncCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImportSync = () => {
    if (importFromSyncCode(importCode)) {
      setImportSuccess(true);
      setTimeout(() => {
        setImportSuccess(false);
        window.location.reload();
      }, 2000);
    } else {
      alert("Noto'g'ri sync kod!");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Sozlamalar</h1>
        <p className="text-gray-400">Sayt sozlamalarini boshqarish</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Data Sync */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-green-400" />
            Ma'lumotlarni sinxronlash
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-blue-400 mb-2">
                💡 Bu funksiya turli IP manzillar o'rtasida ma'lumotlarni sinxronlash uchun
              </p>
              <p className="text-xs text-gray-400">
                Masalan: localhost:3000 va 192.168.1.100:3000 o'rtasida
              </p>
            </div>

            {/* Export */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-2">1. Ma'lumotlarni eksport qilish</h3>
              <button
                onClick={handleGenerateSync}
                className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Sync kod yaratish
              </button>
              {syncCode && (
                <div className="mt-3">
                  <div className="relative">
                    <textarea
                      value={syncCode}
                      readOnly
                      rows={4}
                      className="w-full px-3 py-2 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white text-xs font-mono"
                    />
                    <button
                      onClick={handleCopySync}
                      className="absolute top-2 right-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition flex items-center gap-1"
                    >
                      {copied ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      {copied ? "Nusxalandi!" : "Nusxalash"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Import */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-2">2. Ma'lumotlarni import qilish</h3>
              <textarea
                value={importCode}
                onChange={(e) => setImportCode(e.target.value)}
                placeholder="Sync kodni bu yerga joylashtiring..."
                rows={4}
                className="w-full px-3 py-2 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white text-sm font-mono placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleImportSync}
                disabled={!importCode}
                className="w-full mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white rounded-lg transition flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Import qilish
              </button>
              {importSuccess && (
                <div className="mt-2 p-2 bg-green-500/10 border border-green-500/20 rounded flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <p className="text-sm text-green-400">Muvaffaqiyatli import qilindi!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* General Settings */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-400" />
            Umumiy sozlamalar
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Sayt nomi
              </label>
              <input
                type="text"
                defaultValue="Halloff"
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Sayt tavsifi
              </label>
              <textarea
                defaultValue="Zamonaviy va professional dasturlash kurslari platformasi"
                rows={3}
                className="w-full px-4 py-2 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition flex items-center justify-center gap-2">
              <Save className="w-4 h-4" />
              Saqlash
            </button>
          </div>
        </div>

        {/* Database Actions */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-purple-400" />
            Ma'lumotlar bazasi
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-yellow-400">
                ⚠️ Ehtiyot bo'ling! Bu amallar qaytarilmaydi.
              </p>
            </div>
            <button
              onClick={() => {
                if (confirm("Barcha foydalanuvchilarni o'chirmoqchimisiz? (Admin saqlanadi)")) {
                  const users = JSON.parse(localStorage.getItem('halloff_users') || '[]');
                  const adminOnly = users.filter((u: any) => u.role === 'admin');
                  localStorage.setItem('halloff_users', JSON.stringify(adminOnly));
                  alert("Foydalanuvchilar o'chirildi!");
                  window.location.reload();
                }
              }}
              className="w-full px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition"
            >
              Foydalanuvchilarni tozalash
            </button>
            <button
              onClick={() => {
                if (confirm("Barcha ma'lumotlarni o'chirmoqchimisiz?")) {
                  localStorage.clear();
                  alert("Ma'lumotlar tozalandi!");
                  window.location.href = "/auth/login";
                }
              }}
              className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
            >
              Barcha ma'lumotlarni tozalash
            </button>
          </div>
        </div>
      </div>

      {/* System Info */}
      <div className="mt-6 bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Tizim ma'lumotlari</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-[#0f0f0f] rounded-lg">
            <p className="text-sm text-gray-400 mb-1">Versiya</p>
            <p className="text-lg font-semibold text-white">1.0.0</p>
          </div>
          <div className="p-4 bg-[#0f0f0f] rounded-lg">
            <p className="text-sm text-gray-400 mb-1">Framework</p>
            <p className="text-lg font-semibold text-white">Next.js 16</p>
          </div>
          <div className="p-4 bg-[#0f0f0f] rounded-lg">
            <p className="text-sm text-gray-400 mb-1">Storage</p>
            <p className="text-lg font-semibold text-white">LocalStorage</p>
          </div>
        </div>
      </div>
    </div>
  );
}
