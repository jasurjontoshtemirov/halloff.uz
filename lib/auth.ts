// Server-side auth helper functions
import { cookies } from 'next/headers';
import { verifyToken } from './token';

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

// Server-side: Get current user from cookies (for API routes)
export const getCurrentUserFromCookies = async (): Promise<User | null> => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;
    
    if (!token) return null;
    
    const payload = await verifyToken(token);
    if (!payload) return null;
    
    // Get user from database
    const { getPool } = await import('./db');
    const pool = getPool();
    const [rows] = await pool.execute(
      'SELECT id, name, email, role, created_at FROM users WHERE id = ?',
      [payload.userId]
    );
    
    const users = rows as any[];
    if (users.length === 0) return null;
    
    return {
      id: users[0].id.toString(),
      name: users[0].name,
      email: users[0].email,
      role: users[0].role,
      createdAt: users[0].created_at,
    };
  } catch (error) {
    return null;
  }
};

// Server-side: Get all users (for admin)
export const getUsers = async (): Promise<User[]> => {
  try {
    const { getPool } = await import('./db');
    const pool = getPool();
    const [rows] = await pool.execute(
      'SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC'
    );
    
    return (rows as any[]).map(row => ({
      id: row.id.toString(),
      name: row.name,
      email: row.email,
      role: row.role,
      createdAt: row.created_at,
    }));
  } catch (error) {
    return [];
  }
};