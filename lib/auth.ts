// Server-side auth helper functions

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: string;
}

// Check if user is logged in (Client-side)
export const isLoggedIn = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('halloff_current_user') !== null;
};

export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem('halloff_current_user');
  return user ? JSON.parse(user) : null;
};

export const logoutUser = () => {
  localStorage.removeItem('halloff_current_user');
  localStorage.removeItem('halloff_device_info');
};

export const isAdmin = (): boolean => {
  if (typeof window === 'undefined') return false;
  const user = getCurrentUser();
  const isAdminFlag = localStorage.getItem('is_admin');
  return isAdminFlag === 'true' || user?.role === 'admin';
};