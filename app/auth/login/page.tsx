"use client";

import Link from "next/link";

import { useState, useEffect } from "react";
import { GraduationCap, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import { generateDeviceFingerprint, getDeviceName } from "@/lib/device-fingerprint";

interface Device {
  id: string;
  device_name: string;
  last_login: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDeviceModal, setShowDeviceModal] = useState(false);
  const [userDevices, setUserDevices] = useState<Device[]>([]);
  const [savedCredentials, setSavedCredentials] = useState<{ email: string, password: string } | null>(null);

  const [deviceLoading, setDeviceLoading] = useState(false);
  const [csrfToken, setCsrfToken] = useState<string>("");

  useEffect(() => {
    // Fetch CSRF token on mount
    const fetchCsrfToken = async () => {
      try {
        const res = await fetch('/api/auth/csrf');
        if (res.ok) {
          const data = await res.json();
          setCsrfToken(data.csrfToken);
        }
      } catch (e) {
        console.error("Failed to fetch CSRF token", e);
      }
    };
    fetchCsrfToken();
  }, []);

  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation
  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Client-side validation
    if (!validateEmail(email)) {
      setError("Email formatini to'g'ri kiriting");
      return;
    }

    if (!validatePassword(password)) {
      setError("Parol kamida 6 ta belgidan iborat bo'lishi kerak");
      return;
    }

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
          'x-csrf-token': csrfToken,
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.success && result.user) {
        setSuccess("Muvaffaqiyatli kirdingiz!");

        // localStorage ga saqlash
        localStorage.setItem('halloff_current_user', JSON.stringify(result.user));
        if (result.user.role === 'admin') {
          localStorage.setItem('is_admin', 'true');
        }

        // Redirect qilish
        setTimeout(() => {
          if (result.user.role === 'admin') {
            window.location.replace("/admin");
          } else {
            window.location.replace("/docs");
          }
        }, 1000);
      } else {
        if (result.needDeviceManagement) {
          setSavedCredentials({ email, password });
          await fetchUserDevices(email);
          setShowDeviceModal(true);
        } else {
          setError(result.message || 'Login xatosi');
        }
        setLoading(false);
      }
    } catch (error) {
      setError('Tarmoq xatosi. Internetni tekshiring.');
      setLoading(false);
    }
  };

  const fetchUserDevices = async (email: string) => {
    setDeviceLoading(true);
    try {
      const response = await fetch(`/api/auth/devices?email=${email}`);
      const data = await response.json();
      if (data.success) {
        setUserDevices(data.devices);
      } else {
        setError("Qurilmalar ma'lumotini olishda xatolik");
      }
    } catch (error) {
      setError("Tarmoq xatosi yuz berdi");
    } finally {
      setDeviceLoading(false);
    }
  };

  const removeDevice = async (deviceId: string) => {
    setDeviceLoading(true);
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
        const updatedDevices = userDevices.filter(device => device.id !== deviceId);
        setUserDevices(updatedDevices);

        if (updatedDevices.length < 2) {
          setShowDeviceModal(false);
          setSuccess("Qurilma o'chirildi! Login yakunlanmoqda...");

          setTimeout(async () => {
            if (savedCredentials) {
              await performLogin(savedCredentials.email, savedCredentials.password);
            } else {
              setError("Login ma'lumotlari topilmadi.");
              setLoading(false);
            }
          }, 1000);
        }
      } else {
        setError(result.message || "Qurilmani o'chirishda xatolik");
      }
    } catch (error) {
      setError('Tarmoq xatosi yuz berdi');
    } finally {
      setDeviceLoading(false);
    }
  };

  const performLogin = async (loginEmail: string, loginPassword: string) => {
    try {
      setLoading(true);
      setError("");

      const deviceFingerprint = generateDeviceFingerprint();
      const deviceName = getDeviceName();

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

          'X-Device-Fingerprint': deviceFingerprint,
          'X-Device-Name': deviceName,
          'x-csrf-token': csrfToken,
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword
        }),
      });

      const result = await response.json();

      if (result.success && result.user) {
        localStorage.setItem('halloff_current_user', JSON.stringify(result.user));
        if (result.user.role === 'admin') {
          localStorage.setItem('is_admin', 'true');
        }
        setSuccess("Muvaffaqiyatli kirdingiz!");

        setTimeout(() => {
          if (result.user.role === 'admin') {
            window.location.replace("/admin");
          } else {
            window.location.replace("/docs");
          }
        }, 1000);
      } else {
        setError(result.message || 'Login xatosi');
        setLoading(false);
      }
    } catch (error) {
      setError('Tarmoq xatosi yuz berdi');
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
                  disabled={loading}
                  className="w-full pl-10 pr-4 py-3 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={loading}
                  className="w-full pl-10 pr-12 py-3 bg-[#0f0f0f] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 disabled:opacity-50"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
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

            {deviceLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-6 h-6 animate-spin text-blue-400" />
                <span className="ml-2 text-gray-400">Yuklanmoqda...</span>
              </div>
            ) : (
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
                      disabled={deviceLoading}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 disabled:cursor-not-allowed text-white text-sm rounded transition"
                    >
                      O'chirish
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => setShowDeviceModal(false)}
              disabled={deviceLoading}
              className="w-full py-3 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-600/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition"
            >
              Bekor qilish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}