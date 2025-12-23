"use client";

import { useEffect, useState } from "react";
import { Shield } from "lucide-react";

export default function AdminTestPage() {
  const [user, setUser] = useState<any>(null);
  const [cookies, setCookies] = useState<string>("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // localStorage'dan user ma'lumotlarini olish
      const userData = localStorage.getItem('halloff_current_user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
      
      // Cookie'larni olish
      setCookies(document.cookie);
      
      console.log('Admin test page loaded');
      console.log('User data:', userData);
      console.log('Cookies:', document.cookie);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#1a1a2e] to-[#16213e] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">Admin Test Page</h1>
          <p className="text-gray-400">Bu sahifa middleware'siz ishlaydi</p>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">User Ma'lumotlari</h2>
          {user ? (
            <div className="space-y-2">
              <p className="text-gray-300"><strong>ID:</strong> {user.id}</p>
              <p className="text-gray-300"><strong>Name:</strong> {user.name}</p>
              <p className="text-gray-300"><strong>Phone:</strong> {user.phone}</p>
              <p className="text-gray-300"><strong>Role:</strong> 
                <span className={user.role === 'admin' ? 'text-green-400' : 'text-blue-400'}>
                  {user.role}
                </span>
              </p>
            </div>
          ) : (
            <p className="text-red-400">User ma'lumotlari topilmadi</p>
          )}
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">Cookie Ma'lumotlari</h2>
          <div className="bg-[#0f0f0f] p-4 rounded-lg">
            <pre className="text-gray-300 text-sm whitespace-pre-wrap">
              {cookies || 'Cookie topilmadi'}
            </pre>
          </div>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Test Havolalar</h2>
          <div className="space-y-2">
            <a href="/admin" className="block text-blue-400 hover:text-blue-300">
              → Asosiy Admin Panel (/admin)
            </a>
            <a href="/docs" className="block text-green-400 hover:text-green-300">
              → Docs Sahifasi (/docs)
            </a>
            <a href="/auth/login" className="block text-yellow-400 hover:text-yellow-300">
              → Login Sahifasi (/auth/login)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}