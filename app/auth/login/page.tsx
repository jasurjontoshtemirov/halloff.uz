"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { GraduationCap, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";
import { generateDeviceFingerprint, getDeviceName } from "@/lib/device-fingerprint";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAccessKeyModal, setShowAccessKeyModal] = useState(false);
  const [accessKey, setAccessKey] = useState("");
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [showDeviceModal, setShowDeviceModal] = useState(false);
  const [userDevices, setUserDevices] = useState<any[]>([]);
  const [savedCredentials, setSavedCredentials] = useState<{email: string, password: string} | null>(null);

  // Login sahifasida device check kerak emas


  // Save current user to localStorage (client-side)
  const saveCurrentUser = (user: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('halloff_current_user', JSON.stringify(user));
    }
  };

  const handleAccessKeySubmit = async () => {
    if (!accessKey.trim()) {
      setError("Kirish kalitini kiriting!");
      return;
    }

    setLoading(true);
    try {
      const deviceFingerprint = generateDeviceFingerprint();
      
      const response = await fetch('/api/auth/verify-access-key', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Device-Fingerprint': deviceFingerprint,
        },
        body: JSON.stringify({ 
          userId: currentUser.id, 
          accessKey: accessKey.trim(),
          deviceFingerprint: deviceFingerprint
        }),
      });
      
      
      const result = await response.json();
      
      if (result.success) {
        // Kalitni localStorage ga saqlash
        localStorage.setItem(`access_key_${currentUser.id}`, 'verified');
        setShowAccessKeyModal(false);
        window.location.href = "/docs";
      } else {
        setError(result.message);
        setLoading(false);
      }
    } catch (error) {
      console.error('Access key verification error:', error);
      setError('Xatolik yuz berdi. Qaytadan urinib ko\'ring.');
      setLoading(false);
    }
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const deviceFingerprint = generateDeviceFingerprint();
      const deviceName = getDeviceName();
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Device-Fingerprint': deviceFingerprint,
          'X-Device-Name': deviceName,
        },
        body: JSON.stringify({ email, password }),
      });
      
      const result = await response.json();
      
      if (result.success && result.user) {
        // Save user to localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('halloff_current_user', JSON.stringify(result.user));
          
          // Client-side cookie o'rnatish
          document.cookie = `auth_token=authenticated; path=/; max-age=${60 * 60 * 24 * 7}`;
          if (result.user.role === 'admin') {
            document.cookie = `is_admin=true; path=/; max-age=${60 * 60 * 24 * 7}`;
          }
        }
        
        setSuccess("Muvaffaqiyatli kirdingiz! Yo'naltirilmoqda...");
        
        // Cookie'lar o'rnatilgandan keyin redirect
        setTimeout(() => {
          window.location.replace("/docs");
        }, 500);
      } else {
        setError(result.message || 'Login xatosi');
        setLoading(false);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Xatolik yuz berdi. Qaytadan urinib ko\'ring.');
      setLoading(false);
    }
  };

  const fetchUserDevices = async (email: string) => {
    try {
      const response = await fetch(`/api/auth/devices?email=${email}`);
      const data = await response.json();
      if (data.success) {
        setUserDevices(data.devices);
      }
    } catch (error) {
      console.error('Fetch devices error:', error);
    }
  };

  const removeDevice = async (deviceId: string) => {
    try {
      const response = await fetch('/api/auth/remove-device', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ deviceId }),
      });
      
      const result = await response.json();
      if (result.success) {
        // Qurilmalar ro'yxatini yangilash
        const updatedDevices = userDevices.filter(device => device.id !== deviceId);
        setUserDevices(updatedDevices);
        
        // Agar 2 tadan kam qurilma qolsa, login jarayonini yakunlash
        if (updatedDevices.length < 2) {
          setShowDeviceModal(false);
          setSuccess("Qurilma o'chirildi! Login yakunlanmoqda...");
          
          // Login jarayonini yakunlash
          setTimeout(async () => {
            if (savedCredentials) {
              // Saqlangan ma'lumotlar bilan qayta login qilish
              await performLogin(savedCredentials.email, savedCredentials.password);
            } else {
              setError("Login ma'lumotlari topilmadi.");
              setLoading(false);
            }
          }, 1000);
        }
      } else {
        setError(result.message);
      }
    } catch (error) {
      console.error('Remove device error:', error);
      setError('Xatolik yuz berdi.');
    }
  };

  // Login jarayonini alohida funksiyaga ajratish
  const performLogin = async (loginEmail: string, loginPassword: string) => {
    try {
      const deviceFingerprint = generateDeviceFingerprint();
      const deviceName = getDeviceName();
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Device-Fingerprint': deviceFingerprint,
          'X-Device-Name': deviceName,
        },
        body: JSON.stringify({ 
          email: loginEmail, 
          password: loginPassword 
        }),
      });
      
      const result = await response.json();
      
      if (result.success && result.user) {
        saveCurrentUser(result.user);
        setSuccess(result.message);
        
        // To'g'ridan-to'g'ri redirect qilish
        window.location.href = "/docs";
      } else {
        if (result.needDeviceManagement) {
          // Qurilmalar boshqaruvi modalini ko'rsatish
          setCurrentUser({ email: loginEmail });
          setSavedCredentials({ email: loginEmail, password: loginPassword });
          fetchUserDevices(loginEmail);
          setShowDeviceModal(true);
        } else {
          setError(result.message);
        }
        setLoading(false);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Xatolik yuz berdi. Qaytadan urinib ko\'ring.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#1a1a2e] to-[#16213e] relative overflow-hidden flex items-center justify-center px-4">
      <div className="w-full max-w-md relative z-10">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <GraduationCap className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold text-white">Halloff</span>
        </Link>

        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8">
          <h1 className="text-2xl font-bold text-white mb-2">Xush kelibsiz</h1>
          <p className="text-gray-400 mb-6">Hisobingizga kiring</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            {success && (
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <p className="text-sm text-green-400">{success}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Parol</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition"
            >
              {loading ? "Kirish..." : "Kirish"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Hisobingiz yo'qmi?{" "}
            <Link href="/auth/signup" className="text-blue-400 hover:text-blue-300 font-medium">
              Ro'yxatdan o'tish
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-white">
            ← Bosh sahifaga qaytish
          </Link>
        </div>
      </div>

      {/* Access Key Modal */}
      {showAccessKeyModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 z-50">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-white mb-4 text-center">Kirish Kaliti</h2>
            <p className="text-gray-400 text-sm mb-6 text-center">
              Dokumentatsiyaga kirish uchun maxsus kalitni kiriting
            </p>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Kirish Kaliti</label>
              <input
                type="text"
                value={accessKey}
                onChange={(e) => setAccessKey(e.target.value)}
                placeholder="Kalitni kiriting..."
                className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                onKeyPress={(e) => e.key === 'Enter' && handleAccessKeySubmit()}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowAccessKeyModal(false);
                  setAccessKey("");
                  setError("");
                }}
                className="flex-1 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition"
              >
                Bekor qilish
              </button>
              <button
                onClick={handleAccessKeySubmit}
                disabled={loading}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition"
              >
                {loading ? "Tekshirilmoqda..." : "Tasdiqlash"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Device Management Modal */}
      {showDeviceModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 z-50">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-white mb-4 text-center">Qurilmalar Boshqaruvi</h2>
            <p className="text-gray-400 text-sm mb-6 text-center">
              Maksimal 2 ta qurilmada kirish mumkin. Boshqa qurilmani o'chiring.
            </p>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <div className="space-y-3 mb-6">
              {userDevices.map((device) => (
                <div key={device.id} className="flex items-center justify-between p-3 bg-[#0f0f0f] border border-[#30363d] rounded-lg">
                  <div>
                    <p className="text-white font-medium">{device.device_name}</p>
                    <p className="text-xs text-gray-400">
                      Oxirgi kirish: {new Date(device.last_login).toLocaleDateString('uz-UZ')}
                    </p>
                  </div>
                  <button
                    onClick={() => removeDevice(device.id)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition"
                  >
                    O'chirish
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowDeviceModal(false)}
              className="w-full py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition"
            >
              Bekor qilish
            </button>
          </div>
        </div>
      )}

    </div>
  );
}