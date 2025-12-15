// Server-side auth helper functions (for API routes only)
import { cookies } from 'next/headers';
import { verifyToken } from './token';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: string;
}

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
  } catch {
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
  } catch {
    return [];
  }
};