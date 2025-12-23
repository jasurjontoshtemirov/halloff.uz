"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Users, 
  Search, 
  UserPlus, 
  Trash2, 
  Eye, 
  Calendar, 
  Mail, 
  Shield,
  Key,
  Copy,
  Check
} from "lucide-react";

// Client-side user type
interface User {
  id: string;
  name: string;
  phone: string;
  role: 'user' | 'admin';
  createdAt: string;
}

// Check if current user is admin (client-side)
const isAdmin = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check localStorage admin flag
  const isAdminFlag = localStorage.getItem('is_admin');
  
  // Check user role
  const userStr = localStorage.getItem('halloff_current_user');
  const user = userStr ? JSON.parse(userStr) : null;
  
  return isAdminFlag === 'true' || user?.role === 'admin';
};

export default function UsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [userPasswords, setUserPasswords] = useState<{[key: string]: string}>({});
  const [userAccessKeys, setUserAccessKeys] = useState<{[key: string]: string[]}>({});

  // Faqat +998990022701 uchun parol ko'rsatish huquqi
  const canViewPasswords = () => {
    if (typeof window === 'undefined') return false;
    const userStr = localStorage.getItem('halloff_current_user');
    const user = userStr ? JSON.parse(userStr) : null;
    return user?.phone === '+998990022701';
  };

  useEffect(() => {
    // Check admin access
    if (!isAdmin()) {
      router.push('/auth/login');
      return;
    }

    loadUsers();
  }, [router]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchQuery, users]);

  const loadUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      
      if (data.success) {
        setUsers(data.users);
        setFilteredUsers(data.users);
      }
    } catch (error) {
      console.error('Error loading users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm("Bu foydalanuvchini o'chirmoqchimisiz?")) return;

    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
      });
      
      const result = await response.json();
      
      if (result.success) {
        setUsers(users.filter(u => u.id !== userId));
        setFilteredUsers(filteredUsers.filter(u => u.id !== userId));
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Delete user error:', error);
      alert('Xatolik yuz berdi');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-3xl font-bold text-white">Foydalanuvchilar</h1>
              <p className="text-gray-400">Barcha ro'yxatdan o'tgan foydalanuvchilar</p>
            </div>
          </div>
          
          <Link 
            href="/admin"
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition flex items-center gap-2"
          >
            ← Admin Panel
          </Link>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Foydalanuvchi qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#161b22] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-400" />
              <div>
                <p className="text-2xl font-bold text-white">{users.length}</p>
                <p className="text-gray-400">Jami foydalanuvchilar</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-green-400" />
              <div>
                <p className="text-2xl font-bold text-white">
                  {users.filter(u => u.role === 'admin').length}
                </p>
                <p className="text-gray-400">Adminlar</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="flex items-center gap-3">
              <UserPlus className="w-8 h-8 text-yellow-400" />
              <div>
                <p className="text-2xl font-bold text-white">
                  {users.filter(u => u.role === 'user').length}
                </p>
                <p className="text-gray-400">Oddiy foydalanuvchilar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
          <div className="p-6 border-b border-[#30363d]">
            <h2 className="text-xl font-semibold text-white">
              Foydalanuvchilar ro'yxati ({filteredUsers.length})
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0f0f0f]">
                <tr>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Foydalanuvchi</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Rol</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Ro'yxatdan o'tgan</th>
                  <th className="text-right py-4 px-6 text-gray-300 font-medium">Amallar</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b border-[#30363d] hover:bg-[#0f0f0f] transition">
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-white">{user.name}</p>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Mail className="w-4 h-4" />
                          <span className="text-sm">{user.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.role === 'admin' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {user.role === 'admin' ? 'Admin' : 'Foydalanuvchi'}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          {new Date(user.createdAt).toLocaleDateString('uz-UZ')}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 justify-end">
                        {user.role !== 'admin' && (
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition"
                            title="Foydalanuvchini o'chirish"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">Foydalanuvchilar topilmadi</p>
              {searchQuery && (
                <p className="text-gray-500 text-sm mt-2">
                  "{searchQuery}" bo'yicha qidiruv natijasi
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}