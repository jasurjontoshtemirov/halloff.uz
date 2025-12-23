"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Users,
  FileText,
  BookOpen,
  Settings,
  Trash2,
  Eye,
  Calendar,
  Mail,
  Shield
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Auth olib tashlandi - to'g'ridan-to'g'ri ma'lumotlarni yuklash
    setLoading(false);
  }, []);

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
        <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">Halloff platformasini boshqarish paneli</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Foydalanuvchilar</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">HTML Darslari</p>
              <p className="text-2xl font-bold text-white">7</p>
            </div>
            <FileText className="w-8 h-8 text-orange-500" />
          </div>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">CSS Darslari</p>
              <p className="text-2xl font-bold text-white">18</p>
            </div>
            <BookOpen className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">JS Darslari</p>
              <p className="text-2xl font-bold text-white">34+</p>
            </div>
            <Settings className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/admin/content"
          className="block p-6 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-blue-500/50 transition group"
        >
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-8 h-8 text-blue-500 group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold text-white">Kontent Boshqaruvi</h3>
          </div>
          <p className="text-gray-400">Darslarni tahrirlash va yangi kontent qo'shish</p>
        </Link>

        <Link
          href="/admin/users"
          className="block p-6 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-green-500/50 transition group"
        >
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-8 h-8 text-green-500 group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold text-white">Foydalanuvchilar</h3>
          </div>
          <p className="text-gray-400">Foydalanuvchilarni ko'rish va boshqarish</p>
        </Link>

        <Link
          href="/admin/settings"
          className="block p-6 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-purple-500/50 transition group"
        >
          <div className="flex items-center gap-4 mb-4">
            <Settings className="w-8 h-8 text-purple-500 group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold text-white">Sozlamalar</h3>
          </div>
          <p className="text-gray-400">Tizim sozlamalari va konfiguratsiya</p>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white mb-4">So'nggi Faoliyat</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
          <div className="text-center py-8">
            <Shield className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">Hozircha faoliyat yo'q</p>
            <p className="text-sm text-gray-500 mt-2">Tizim ishga tushgandan so'ng bu yerda ma'lumotlar ko'rinadi</p>
          </div>
        </div>
      </div>
    </div>
  );
}