// Qurilma fingerprint yaratish (client-side)
export const generateDeviceFingerprint = (): string => {
  if (typeof window === 'undefined') return '';
  
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Device fingerprint', 2, 2);
  }
  
  // Yanada unique fingerprint yaratish
  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    navigator.languages?.join(',') || '',
    screen.width + 'x' + screen.height,
    screen.colorDepth,
    screen.pixelDepth,
    new Date().getTimezoneOffset(),
    canvas.toDataURL(),
    navigator.platform,
    navigator.cookieEnabled,
    navigator.doNotTrack || '',
    navigator.hardwareConcurrency || 0,
    navigator.maxTouchPoints || 0,
    localStorage.length,
    sessionStorage.length,
    // Random component agar boshqa hamma narsa bir xil bo'lsa
    Math.random().toString(36).substring(2, 8)
  ].join('|');
  
  // Simple hash function
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  return Math.abs(hash).toString(36);
};

// Qurilma nomini aniqlash
export const getDeviceName = (): string => {
  if (typeof window === 'undefined') return 'Unknown Device';
  
  const userAgent = navigator.userAgent;
  
  // Mobile devices
  if (/iPhone/i.test(userAgent)) return 'iPhone';
  if (/iPad/i.test(userAgent)) return 'iPad';
  if (/Android/i.test(userAgent)) {
    if (/Mobile/i.test(userAgent)) return 'Android Phone';
    return 'Android Tablet';
  }
  
  // Desktop browsers
  if (/Windows/i.test(userAgent)) return 'Windows PC';
  if (/Mac/i.test(userAgent)) return 'Mac';
  if (/Linux/i.test(userAgent)) return 'Linux PC';
  
  // Browsers
  if (/Chrome/i.test(userAgent)) return 'Chrome Browser';
  if (/Firefox/i.test(userAgent)) return 'Firefox Browser';
  if (/Safari/i.test(userAgent)) return 'Safari Browser';
  if (/Edge/i.test(userAgent)) return 'Edge Browser';
  
  return 'Unknown Device';
};