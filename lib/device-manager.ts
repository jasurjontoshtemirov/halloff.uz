// Device management client-side utilities

import { generateDeviceFingerprint } from './device-fingerprint';

// Device fingerprint'ni har request bilan yuborish uchun
export const setupDeviceHeaders = () => {
  if (typeof window === 'undefined') return;
  
  const deviceFingerprint = generateDeviceFingerprint();
  
  // Fetch interceptor
  const originalFetch = window.fetch;
  window.fetch = function(input: RequestInfo | URL, init?: RequestInit) {
    const headers = new Headers(init?.headers);
    headers.set('x-device-fingerprint', deviceFingerprint);
    
    return originalFetch(input, {
      ...init,
      headers
    });
  };
};

// Device session'ni tekshirish
export const checkDeviceSession = async (): Promise<boolean> => {
  try {
    const user = JSON.parse(localStorage.getItem('halloff_current_user') || 'null');
    if (!user) return false;
    
    const deviceFingerprint = generateDeviceFingerprint();
    
    const response = await fetch('/api/auth/check-device', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-device-fingerprint': deviceFingerprint
      },
      body: JSON.stringify({
        userId: user.id,
        deviceFingerprint
      })
    });
    
    const result = await response.json();
    
    if (!result.isValid) {
      // Device noto'g'ri bo'lsa logout qilish
      localStorage.removeItem('halloff_current_user');
      localStorage.removeItem('halloff_device_info');
      window.location.href = '/auth/login?message=device_changed';
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Device session check error:', error);
    return true; // Xatolik bo'lsa davom etish
  }
};

// Muntazam device tekshirish
export const startDeviceMonitoring = () => {
  if (typeof window === 'undefined') return;
  
  // Har 5 daqiqada tekshirish
  setInterval(checkDeviceSession, 5 * 60 * 1000);
  
  // Sahifa focus bo'lganda tekshirish
  window.addEventListener('focus', checkDeviceSession);
  
  // Visibility change'da tekshirish
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      checkDeviceSession();
    }
  });
};

// Device ma'lumotlarini localStorage'ga saqlash
export const saveDeviceInfo = () => {
  if (typeof window === 'undefined') return;
  
  const deviceFingerprint = generateDeviceFingerprint();
  const deviceInfo = {
    fingerprint: deviceFingerprint,
    timestamp: Date.now(),
    userAgent: navigator.userAgent
  };
  
  localStorage.setItem('halloff_device_info', JSON.stringify(deviceInfo));
};

// Device o'zgarganini tekshirish
export const hasDeviceChanged = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const savedDeviceInfo = localStorage.getItem('halloff_device_info');
  if (!savedDeviceInfo) return true;
  
  try {
    const deviceInfo = JSON.parse(savedDeviceInfo);
    const currentFingerprint = generateDeviceFingerprint();
    
    return deviceInfo.fingerprint !== currentFingerprint;
  } catch {
    return true;
  }
};