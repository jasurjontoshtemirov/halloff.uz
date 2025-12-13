"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAdmin, getUsers, getCurrentUser, type User } from "@/lib/auth";
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
  
  // Debug: Cookie'larni tekshirish
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Admin panel cookies:');
      console.log('auth_token:', document.cookie.includes('auth_token'));
      console.log('is_admin:', document.cookie.includes('is_admin'));
      console.log('user_id:', document.cookie.includes('user_id'));
      console.log('All cookies:', document.cookie);
    }
  }, []);
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentUser(getCurrentUser());
    setUsers(getUsers());
    setLoading(false);
  }, []);

  const handleDeleteUser = (userId: string) => {
    if (confirm("Bu foydalanuvchini o'chirmoqchimisiz?")) {
      const updatedUsers = users.filter(u => u.id !== userId);
      localStorage.setItem('halloff_users', JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
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

  const totalUsers = users.length;
  const adminUsers = users.filter(u => u.role === 'admin').length;
  const regularUsers = users.filter(u => u.role === 'user').length;

  return (
    <div className="p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href="/admin/users" className="bg-[#161b22] border border-[#30363d] hover:border-blue-500/50 rounded-xl p-6 transition cursor-pointer group">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-blue-400 group-hover:scale-110 transition" />
              <span className="text-3xl font-bold text-white">{totalUsers}</span>
            </div>
            <h3 className="text-gray-400 text-sm group-hover:text-blue-400 transition">Jami foydalanuvchilar</h3>
          </Link>

          <Link href="/admin/users" className="bg-[#161b22] border border-[#30363d] hover:border-purple-500/50 rounded-xl p-6 transition cursor-pointer group">
            <div className="flex items-center justify-between mb-4">
              <Shield className="w-8 h-8 text-purple-400 group-hover:scale-110 transition" />
              <span className="text-3xl font-bold text-white">{adminUsers}</span>
            </div>
            <h3 className="text-gray-400 text-sm group-hover:text-purple-400 transition">Adminlar</h3>
          </Link>

          <Link href="/admin/users" className="bg-[#161b22] border border-[#30363d] hover:border-green-500/50 rounded-xl p-6 transition cursor-pointer group">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-green-400 group-hover:scale-110 transition" />
              <span className="text-3xl font-bold text-white">{regularUsers}</span>
            </div>
            <h3 className="text-gray-400 text-sm group-hover:text-green-400 transition">Oddiy foydalanuvchilar</h3>
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            href="/admin/users"
            className="bg-[#161b22] border border-[#30363d] hover:border-blue-500/50 rounded-xl p-6 transition group"
          >
            <Users className="w-10 h-10 text-blue-400 mb-3 group-hover:scale-110 transition" />
            <h3 className="text-lg font-semibold text-white mb-2">Foydalanuvchilar</h3>
            <p className="text-sm text-gray-400">Barcha foydalanuvchilarni ko'rish va boshqarish</p>
          </Link>

          <Link
            href="/admin/content"
            className="bg-[#161b22] border border-[#30363d] hover:border-green-500/50 rounded-xl p-6 transition group"
          >
            <FileText className="w-10 h-10 text-green-400 mb-3 group-hover:scale-110 transition" />
            <h3 className="text-lg font-semibold text-white mb-2">Kontent boshqaruvi</h3>
            <p className="text-sm text-gray-400">HTML, CSS, JavaScript darslarini tahrirlash</p>
          </Link>

          <Link
            href="/admin/settings"
            className="bg-[#161b22] border border-[#30363d] hover:border-purple-500/50 rounded-xl p-6 transition group"
          >
            <Settings className="w-10 h-10 text-purple-400 mb-3 group-hover:scale-110 transition" />
            <h3 className="text-lg font-semibold text-white mb-2">Sozlamalar</h3>
            <p className="text-sm text-gray-400">Sayt sozlamalarini boshqarish</p>
          </Link>
        </div>

        {/* Recent Users */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">So'nggi foydalanuvchilar</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#30363d]">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Ism</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Email</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Rol</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Sana</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-400">Amallar</th>
                </tr>
              </thead>
              <tbody>
                {users.slice(0, 10).map((user) => (
                  <tr key={user.id} className="border-b border-[#30363d] hover:bg-[#0f0f0f] transition">
                    <td className="py-3 px-4 text-white">{user.name}</td>
                    <td className="py-3 px-4 text-gray-400">{user.email}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        user.role === 'admin' 
                          ? 'bg-purple-500/20 text-purple-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {user.role === 'admin' ? 'Admin' : 'User'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-400 text-sm">
                      {new Date(user.createdAt).toLocaleDateString('uz-UZ')}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        disabled={user.role === 'admin'}
                        className="text-red-400 hover:text-red-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <Link
              href="/admin/users"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              Barchasini ko'rish →
            </Link>
          </div>
      </div>
    </div>
  );
}
