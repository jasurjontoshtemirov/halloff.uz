"use client";

import { useState, useEffect } from "react";
import { Shield, Database, User, CheckCircle, AlertCircle } from "lucide-react";

export default function TestAdminPage() {
  const [dbStatus, setDbStatus] = useState<any>(null);
  const [admins, setAdmins] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const testDatabase = async () => {
    setLoading(true);
    setError("");
    
    try {
      // Database'ni initialize qilish
      const initResponse = await fetch('/api/auth/create-admin', {
        method: 'POST'
      });
      const initResult = await initResponse.json();
      
      if (initResult.success) {
        setDbStatus(initResult);
        
        // Adminlarni olish
        const adminsResponse = await fetch('/api/auth/create-admin');
        const adminsResult = await adminsResponse.json();
        
        if (adminsResult.success) {
          setAdmins(adminsResult.admins);
        }
      } else {
        setError(initResult.message);
      }
    } catch (err: any) {
      setError('Test xatosi: ' + err.message);
    }
    
    setLoading(false);
  };

  const testAdminLogin = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert(`✅ ${email} admin login muvaffaqiyatli!`);
      } else {
        alert(`❌ ${email} admin login xatosi: ${result.message}`);
      }
    } catch (err: any) {
      alert(`❌ Login test xatosi: ${err.message}`);
    }
  };

  useEffect(() => {
    testDatabase();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#1a1a2e] to-[#16213e] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Shield className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">Admin Test Panel</h1>
          <p className="text-gray-400">Database va admin login test qilish uchun</p>
        </div>

        {/* Database Status */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Database className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-bold text-white">Database Status</h2>
          </div>
          
          {loading && (
            <div className="text-yellow-400">Database tekshirilmoqda...</div>
          )}
          
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <p className="text-red-400">{error}</p>
            </div>
          )}
          
          {dbStatus && (
            <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <p className="text-green-400">{dbStatus.message}</p>
            </div>
          )}
          
          <button
            onClick={testDatabase}
            disabled={loading}
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white rounded-lg transition"
          >
            {loading ? "Tekshirilmoqda..." : "Database'ni Qayta Tekshirish"}
          </button>
        </div>

        {/* Admin Users */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <User className="w-5 h-5 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Admin Users</h2>
          </div>
          
          {admins.length > 0 ? (
            <div className="space-y-3">
              {admins.map((admin, index) => (
                <div key={index} className="p-4 bg-[#0f0f0f] border border-[#30363d] rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">{admin.name}</p>
                      <p className="text-gray-400 text-sm">{admin.email}</p>
                      <p className="text-gray-500 text-xs">Role: {admin.role}</p>
                    </div>
                    <button
                      onClick={() => {
                        const password = admin.email === 'admin@halloff.uz' ? 'admin123' : '@Qwer1234';
                        testAdminLogin(admin.email, password);
                      }}
                      className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition"
                    >
                      Login Test
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">Admin userlar topilmadi</p>
          )}
        </div>

        {/* Default Admin Credentials */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Default Admin Ma'lumotlari</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#0f0f0f] border border-[#30363d] rounded-lg">
              <h3 className="text-white font-medium mb-2">Admin 1</h3>
              <p className="text-gray-400 text-sm">Email: admin@halloff.uz</p>
              <p className="text-gray-400 text-sm">Parol: admin123</p>
              <button
                onClick={() => testAdminLogin('admin@halloff.uz', 'admin123')}
                className="mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition"
              >
                Test Login
              </button>
            </div>
            
            <div className="p-4 bg-[#0f0f0f] border border-[#30363d] rounded-lg">
              <h3 className="text-white font-medium mb-2">Main Admin</h3>
              <p className="text-gray-400 text-sm">Email: k6yd2007@gmail.com</p>
              <p className="text-gray-400 text-sm">Parol: @Qwer1234</p>
              <button
                onClick={() => testAdminLogin('k6yd2007@gmail.com', '@Qwer1234')}
                className="mt-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded transition"
              >
                Test Login
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="/auth/admin-login" className="text-blue-400 hover:text-blue-300">
            ← Admin Login Sahifasiga O'tish
          </a>
        </div>
      </div>
    </div>
  );
}