"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAdmin, getCurrentUser, type User } from "@/lib/auth";
import { Shield, Home, Users, FileText, Settings } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Small delay to ensure localStorage is ready
    const timer = setTimeout(() => {
      const adminStatus = isAdmin();
      console.log("Admin status:", adminStatus);
      
      if (!adminStatus) {
        console.log("Not admin, redirecting to docs");
        router.replace("/docs");
      } else {
        setCurrentUser(getCurrentUser());
        setLoading(false);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [router]);

  if (loading) {
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
                  <span className="text-purple-400 font-semibold text-sm">
                    {currentUser?.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{currentUser?.name}</p>
                  <p className="text-xs text-gray-400">{currentUser?.email}</p>
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
              href="/admin/access-codes"
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-[#0f0f0f] rounded-lg transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              <span>Kirish Kodlari</span>
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
              href="/admin/comments"
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-[#0f0f0f] rounded-lg transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Izohlar</span>
            </Link>
            <Link
              href="/admin/demo-edit"
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-[#0f0f0f] rounded-lg transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span>Inline Edit Demo</span>
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-[#0f0f0f] rounded-lg transition"
            >
              <Settings className="w-5 h-5" />
              <span>Sozlamalar</span>
            </Link>
          </nav>

          {/* Stats in Sidebar */}
          <div className="p-4 mt-4 border-t border-[#30363d]">
            <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">Tezkor ma'lumot</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Foydalanuvchilar</span>
                <span className="text-white font-semibold">
                  {typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('halloff_users') || '[]').length : 0}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">HTML darslari</span>
                <span className="text-white font-semibold">7</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">CSS darslari</span>
                <span className="text-white font-semibold">18</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">JS darslari</span>
                <span className="text-white font-semibold">34+</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-[#0f0f0f]">
          {children}
        </main>
      </div>
    </div>
  );
}
