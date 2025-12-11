"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// Client-side user type
interface User {
  id: string;
  name: string;
  email: string;
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
import { 
  Users, 
  Trash2,
  Search,
  ArrowLeft,
  Shield,
  Mail,
  Calendar,
  Key
} from "lucide-react";

export default function AdminUsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [userPasswords, setUserPasswords] = useState<{[key: string]: string}>({});
  const [showPasswords, setShowPasswords] = useState<{[key: string]: boolean}>({});
  const [userAccessKeys, setUserAccessKeys] = useState<{[key: string]: string[]}>({});

  // Faqat k6yd2007@gmail.com uchun parol ko'rsatish huquqi
  const canViewPasswords = () => {
    if (typeof window === 'undefined') return false;
    const userStr = localStorage.getItem('halloff_current_user');
    const user = userStr ? JSON.parse(userStr) : null;
    return user?.email === 'k6yd2007@gmail.com';
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        
        if (data.success) {
          setUsers(data.users);
          setFilteredUsers(data.users);
          
          // Har bir foydalanuvchi uchun access keylarni yuklash
          data.users.forEach((user: User) => {
            fetchUserAccessKeys(user.id);
          });
        } else {
          console.error('Failed to fetch users:', data.message);
        }
      } catch (error) {
        console.error('Fetch users error:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchQuery, users]);

  const handleDeleteUser = async (userId: string) => {
    if (confirm("Bu foydalanuvchini o'chirmoqchimisiz?")) {
      try {
        const response = await fetch(`/api/users?id=${userId}`, {
          method: 'DELETE',
        });
        
        const data = await response.json();
        
        if (data.success) {
          const updatedUsers = users.filter(u => u.id !== userId);
          setUsers(updatedUsers);
          setFilteredUsers(updatedUsers);
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Delete user error:', error);
        alert('Xatolik yuz berdi!');
      }
    }
  };

  const fetchUserPassword = async (userId: string) => {
    if (!canViewPasswords()) return;
    
    try {
      const response = await fetch(`/api/users/password?id=${userId}`);
      const data = await response.json();
      
      if (data.success) {
        setUserPasswords(prev => ({
          ...prev,
          [userId]: data.password
        }));
      }
    } catch (error) {
      console.error('Fetch password error:', error);
    }
  };

  const togglePasswordVisibility = (userId: string) => {
    if (!canViewPasswords()) return;
    
    setShowPasswords(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
    
    // Agar parol hali yuklanmagan bo'lsa, yuklash
    if (!userPasswords[userId]) {
      fetchUserPassword(userId);
    }
  };

  const fetchUserAccessKeys = async (userId: string) => {
    try {
      const response = await fetch(`/api/admin/access-keys?userId=${userId}`);
      const data = await response.json();
      
      if (data.success) {
        setUserAccessKeys(prev => ({
          ...prev,
          [userId]: data.accessKeys
        }));
      }
    } catch (error) {
      console.error('Fetch access keys error:', error);
    }
  };

  const createAccessKey = async (userId: string) => {
    try {
      const response = await fetch('/api/admin/create-access-key', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Yangi kalitni ro'yxatga qo'shish
        setUserAccessKeys(prev => ({
          ...prev,
          [userId]: [...(prev[userId] || []), data.accessKey]
        }));
        
        alert(`Kirish kaliti yaratildi:\n\n${data.accessKey}\n\nBu kalitni foydalanuvchiga bering.`);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Create access key error:', error);
      alert('Xatolik yuz berdi!');
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
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Ism yoki email bo'yicha qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#161b22] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-400" />
              <div>
                <p className="text-2xl font-bold text-white">{users.length}</p>
                <p className="text-sm text-gray-400">Jami</p>
              </div>
            </div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-purple-400" />
              <div>
                <p className="text-2xl font-bold text-white">{users.filter(u => u.role === 'admin').length}</p>
                <p className="text-sm text-gray-400">Adminlar</p>
              </div>
            </div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-green-400" />
              <div>
                <p className="text-2xl font-bold text-white">{users.filter(u => u.role === 'user').length}</p>
                <p className="text-sm text-gray-400">Foydalanuvchilar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0f0f0f]">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-400">ID</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-400">Ism</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-400">Email</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-400">Parol</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-400">Kirish Kalitlari</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-400">Rol</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-400">Ro'yxatdan o'tgan</th>
                  <th className="text-right py-4 px-6 text-sm font-semibold text-gray-400">Amallar</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={user.id} className="border-t border-[#30363d] hover:bg-[#0f0f0f] transition">
                    <td className="py-4 px-6 text-gray-400 text-sm">#{index + 1}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <span className="text-blue-400 font-semibold text-sm">
                            {user.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="text-white font-medium">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">{user.email}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Key className="w-4 h-4" />
                        {canViewPasswords() ? (
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-mono">
                              {showPasswords[user.id] && userPasswords[user.id] 
                                ? userPasswords[user.id] 
                                : '••••••••'
                              }
                            </span>
                            <button
                              onClick={() => togglePasswordVisibility(user.id)}
                              className="text-blue-400 hover:text-blue-300 text-xs underline"
                            >
                              {showPasswords[user.id] ? 'Yashirish' : 'Ko\'rsatish'}
                            </button>
                          </div>
                        ) : (
                          <span className="text-sm font-mono">••••••••</span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        {userAccessKeys[user.id]?.length > 0 ? (
                          userAccessKeys[user.id].map((key, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <span className="text-xs font-mono bg-gray-800 px-2 py-1 rounded text-gray-300">
                                {key.substring(0, 8)}...
                              </span>
                              <button
                                onClick={() => navigator.clipboard.writeText(key)}
                                className="text-xs text-blue-400 hover:text-blue-300"
                                title="Nusxalash"
                              >
                                📋
                              </button>
                            </div>
                          ))
                        ) : (
                          <span className="text-xs text-gray-500">Kalit yo'q</span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.role === 'admin' 
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {user.role === 'admin' ? 'Admin' : 'User'}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          {new Date(user.createdAt).toLocaleDateString('uz-UZ', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center gap-2 justify-end">
                        <button
                          onClick={() => createAccessKey(user.id)}
                          className="p-2 text-green-400 hover:text-green-300 hover:bg-green-500/10 rounded-lg transition"
                          title="Kirish kaliti yaratish"
                        >
                          <Key className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          disabled={user.role === 'admin'}
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                          title={user.role === 'admin' ? "Adminni o'chirish mumkin emas" : "O'chirish"}
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="py-12 text-center">
              <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Foydalanuvchilar topilmadi</p>
            </div>
          )}
      </div>
    </div>
  );
}
