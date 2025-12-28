"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Shield, Home, Users, FileText, Settings, LogOut } from "lucide-react";

interface AdminWrapperProps {
  children: React.ReactNode;
}

export default function AdminWrapper({ children }: AdminWrapperProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const adminAuth = localStorage.getItem("adminAuth");
    if (!adminAuth) {
      router.push("/admin/login");
      return;
    }
    setLoading(false);
  }, [router, mounted]);

  if (!mounted || loading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Yuklanmoqda...</p>
          <p className="text-xs text-gray-500 mt-2">Admin huquqlarini tekshirilmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Top Header */}
      <header className="border-b border-[#30363d] bg-[#161b22] sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-purple-400" />
                <div>
                  <h1 className="text-xl font-bold text-white">Admin Panel</h1>
                  <p className="text-xs text-gray-400">Halloff boshqaruv paneli</p>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              {/* User Info */}
              <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-[#0f0f0f] rounded-lg border border-[#30363d]">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <span className="text-purple-400 font-semibold text-sm">A</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Admin</p>
                  <p className="text-xs text-gray-400">+998990022701</p>
                </div>
              </div>

              {/* Back to Docs */}
              <Link
                href="/docs"
                className="px-4 py-2 text-sm text-gray-400 hover:text-white border border-[#30363d] hover:border-gray-600 rounded-lg transition flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Dokumentatsiya</span>
              </Link>

              {/* Logout */}
              <button
                onClick={() => {
                  localStorage.removeItem("adminAuth");
                  localStorage.removeItem("adminPhone");
                  router.push("/admin/login");
                }}
                className="px-4 py-2 text-sm text-red-400 hover:text-red-300 border border-red-700/50 hover:border-red-600 rounded-lg transition flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Chiqish</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-[#30363d] bg-[#161b22] min-h-[calc(100vh-4rem)] sticky top-16">
          <nav className="p-4 space-y-2">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-[#0f0f0f] rounded-lg transition"
            >
              <Home className="w-5 h-5" />
              <span>Bosh sahifa</span>
            </Link>
            <Link
              href="/admin/users"
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-[#0f0f0f] rounded-lg transition"
            >
              <Users className="w-5 h-5" />
              <span>Foydalanuvchilar</span>
            </Link>
            <Link
              href="/admin/content"
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-[#0f0f0f] rounded-lg transition"
            >
              <FileText className="w-5 h-5" />
              <span>Kontent</span>
            </Link>
            <Link
              href="/admin/videos"
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-[#0f0f0f] rounded-lg transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v4a1 1 0 001 1h4M9 10V9a1 1 0 011-1h4a1 1 0 011 1v1M9 10H8a1 1 0 00-1 1v3a1 1 0 001 1h1m0-4h4.586M15 19l-3-3 3-3" />
              </svg>
              <span>Video Darslar</span>
            </Link>
            <Link
              href="/admin/security"
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-[#0f0f0f] rounded-lg transition"
            >
              <Shield className="w-5 h-5" />
              <span>Xavfsizlik</span>
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-[#0f0f0f] rounded-lg transition"
            >
              <Settings className="w-5 h-5" />
              <span>Sozlamalar</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-[#0f0f0f]">
          {children}
        </main>
      </div>
    </div>
  );
}