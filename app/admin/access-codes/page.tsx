"use client";

import { useState, useEffect } from "react";
import { Copy, Trash2, Key, Eye, EyeOff, Users, Calendar } from "lucide-react";

interface AccessCode {
  id: number;
  code: string;
  name: string;
  description: string | null;
  is_active: boolean;
  max_uses: number | null;
  used_count: number;
  expires_at: string | null;
  created_at: string;
  last_used_at: string | null;
}

export default function AccessCodesPage() {
  const [codes, setCodes] = useState<AccessCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [generatedCode, setGeneratedCode] = useState("");

  const fetchCodes = async () => {
    try {
      // localStorage'dan kodlarni olish
      const localCodes = localStorage.getItem("halloff_access_codes");
      let codesFromStorage: AccessCode[] = [];
      
      if (localCodes) {
        try {
          codesFromStorage = JSON.parse(localCodes);
        } catch (e) {
          console.error("Parse error:", e);
        }
      }
      
      const res = await fetch("/api/admin/access-codes", {
        headers: localCodes ? { "x-access-codes": localCodes } : {},
      });
      const data = await res.json();
      if (data.success) {
        setCodes(data.codes);
        // localStorage'ga saqlash
        localStorage.setItem("halloff_access_codes", JSON.stringify(data.codes));
      }
    } catch (error) {
      console.error("Load codes error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCodes();
    generateCode();
  }, []);

  const generateCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const parts = [];
    for (let i = 0; i < 4; i++) {
      let part = "";
      for (let j = 0; j < 4; j++) {
        part += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      parts.push(part);
    }
    const newCode = parts.join("-");
    setGeneratedCode(newCode);
    return newCode;
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const copyAndRegisterCode = async () => {
    const code = generatedCode;
    const expiresAt = new Date();
    expiresAt.setMonth(expiresAt.getMonth() + 1);

    try {
      const response = await fetch("/api/admin/access-codes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code,
          name: "Tezkor Kod",
          description: "Tezkor yaratilgan kod",
          max_uses: null,
          expires_at: expiresAt.toISOString(),
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        // localStorage'ga saqlash
        if (data.code) {
          const localCodes = localStorage.getItem("halloff_access_codes");
          let codes: AccessCode[] = [];
          
          if (localCodes) {
            try {
              codes = JSON.parse(localCodes);
            } catch (e) {
              console.error("Parse error:", e);
            }
          }
          
          codes.push(data.code);
          localStorage.setItem("halloff_access_codes", JSON.stringify(codes));
        }
        
        navigator.clipboard.writeText(code);
        alert(`✅ Kod muvaffaqiyatli qo'shildi!\n\nKod: ${code}`);
        generateCode();
        fetchCodes();
      } else {
        alert(`❌ Xatolik: ${data.message}`);
      }
    } catch (error) {
      console.error("Register code error:", error);
      alert("❌ Xatolik yuz berdi");
    }
  };

  const deleteCode = async (id: number) => {
    if (!confirm("Kodni o'chirmoqchimisiz?")) return;

    try {
      const response = await fetch(`/api/admin/access-codes/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert("✅ Kod o'chirildi");
        fetchCodes();
      } else {
        alert("❌ Xatolik: " + (data.message || "Kod o'chirishda xatolik"));
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("❌ Xatolik yuz berdi");
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Cheksiz";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const isExpired = (dateString: string | null) => {
    if (!dateString) return false;
    return new Date(dateString) < new Date();
  };

  const unblockCode = async (id: number) => {
    if (!confirm("Kodni blockdan chiqarmoqchimisiz?")) return;

    try {
      const newExpiry = new Date();
      newExpiry.setMonth(newExpiry.getMonth() + 1);

      const response = await fetch(`/api/admin/access-codes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          expires_at: newExpiry.toISOString(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert(`✅ Kod blockdan chiqarildi!`);
        fetchCodes();
      } else {
        alert("❌ Xatolik: " + (data.message || "Xatolik"));
      }
    } catch (error) {
      console.error("Unblock error:", error);
      alert("❌ Xatolik yuz berdi");
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Kirish Kodlari</h1>
        <p className="text-gray-400">Foydalanuvchilar uchun kirish kodlarini boshqaring</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Jami Kodlar</span>
            <Key className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-3xl font-bold text-white">{codes.length}</p>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Aktiv</span>
            <Eye className="w-5 h-5 text-green-400" />
          </div>
          <p className="text-3xl font-bold text-white">
            {codes.filter((c) => c.is_active).length}
          </p>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Jami Foydalanish</span>
            <Users className="w-5 h-5 text-purple-400" />
          </div>
          <p className="text-3xl font-bold text-white">
            {codes.reduce((sum, c) => sum + c.used_count, 0)}
          </p>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Muddati Tugagan</span>
            <Calendar className="w-5 h-5 text-red-400" />
          </div>
          <p className="text-3xl font-bold text-white">
            {codes.filter((c) => c.expires_at && new Date(c.expires_at) < new Date()).length}
          </p>
        </div>
      </div>

      <div className="mb-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-400 mb-3">🎯 Tezkor Kod Yaratish</h3>
        <div className="flex items-center gap-4">
          <code className="flex-1 text-white font-mono bg-gray-800 px-4 py-3 rounded-lg">
            {generatedCode}
          </code>
          <button
            onClick={() => copyCode(generatedCode)}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition"
          >
            <Copy className="w-4 h-4 inline mr-2" />
            Nusxalash
          </button>
          <button
            onClick={copyAndRegisterCode}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
          >
            Saqlash
          </button>
          <button
            onClick={generateCode}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            🔄 Yangi
          </button>
        </div>
      </div>

      <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#0f0f0f] border-b border-[#30363d]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Kod</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Nomi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Foydalanish</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Yaratilgan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Tugash</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Amallar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#30363d]">
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-400">
                    Yuklanmoqda...
                  </td>
                </tr>
              ) : codes.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-400">
                    Kodlar topilmadi
                  </td>
                </tr>
              ) : (
                codes.map((code) => (
                  <tr key={code.id} className="hover:bg-[#0f0f0f] transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <code className="text-white font-mono bg-gray-800 px-2 py-1 rounded">
                          {code.code}
                        </code>
                        <button
                          onClick={() => copyCode(code.code)}
                          className="p-1 hover:bg-gray-700 rounded transition"
                          title="Nusxalash"
                        >
                          {copiedCode === code.code ? (
                            <span className="text-green-400 text-xs">✓</span>
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400 hover:text-white" />
                          )}
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-white font-medium">{code.name}</p>
                        {code.description && (
                          <p className="text-sm text-gray-400">{code.description}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-white">
                        {code.used_count} / {code.max_uses || "∞"}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-white text-sm">{formatDate(code.created_at)}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-white text-sm">{formatDate(code.expires_at)}</div>
                    </td>
                    <td className="px-6 py-4">
                      {isExpired(code.expires_at) ? (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs">
                          🚫 Blockdan chiqarilgan
                        </span>
                      ) : code.is_active ? (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs">
                          <Eye className="w-3 h-3" />
                          Aktiv
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-500/10 border border-gray-500/20 rounded-full text-gray-400 text-xs">
                          <EyeOff className="w-3 h-3" />
                          Nofaol
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {isExpired(code.expires_at) && (
                          <button
                            onClick={() => unblockCode(code.id)}
                            className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded transition"
                            title="Blockdan ochish"
                          >
                            🔓 Blockdan ochish
                          </button>
                        )}
                        <button
                          onClick={() => deleteCode(code.id)}
                          className="p-2 hover:bg-red-500/10 text-gray-400 hover:text-red-400 rounded transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
