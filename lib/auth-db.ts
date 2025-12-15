// Database-based auth system (Server-side only)
import bcrypt from 'bcryptjs';

if (!process.env.JWT_SECRET) {
  throw new Error('FATAL: JWT_SECRET environment variable is not defined.');
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Optional for security
  role: 'user' | 'admin';
  createdAt: string;
}

// Get all users from database (Server-side only)
export const getUsers = async (): Promise<User[]> => {
  try {
    const { getPool } = await import('@/lib/db');
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
    console.error('Get users error:', error);
    return [];
  }
};

// Register new user (Server-side only)
export const registerUser = async (name: string, email: string, password: string): Promise<{ success: boolean; message: string }> => {
  try {
    const { getPool } = await import('@/lib/db');
    const pool = getPool();

    // Check if user already exists
    const [existingUsers] = await pool.execute(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );

    if ((existingUsers as any[]).length > 0) {
      return { success: false, message: 'Bu email allaqachon ro\'yxatdan o\'tgan!' };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const [result] = await pool.execute(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, 'user']
    );

    return { success: true, message: 'Muvaffaqiyatli ro\'yxatdan o\'tdingiz!' };
  } catch (error) {
    console.error('Register user error:', error);
    return { success: false, message: 'Xatolik yuz berdi. Qaytadan urinib ko\'ring.' };
  }
};

// Login user (Server-side only)
export const loginUser = async (email: string, password: string): Promise<{ success: boolean; message: string; user?: User }> => {
  try {
    const { getPool } = await import('@/lib/db');
    const pool = getPool();

    // Get user from database
    const [users] = await pool.execute(
      'SELECT id, name, email, password, role, created_at FROM users WHERE email = ?',
      [email]
    );

    const userRows = users as any[];
    if (userRows.length === 0) {
      return { success: false, message: 'Email yoki parol noto\'g\'ri!' };
    }

    const user = userRows[0];

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { success: false, message: 'Email yoki parol noto\'g\'ri!' };
    }

    // Return user without password
    const userResponse: User = {
      id: user.id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.created_at,
    };

    return { success: true, message: 'Muvaffaqiyatli kirdingiz!', user: userResponse };
  } catch (error) {
    console.error('Login user error:', error);
    return { success: false, message: 'Xatolik yuz berdi. Qaytadan urinib ko\'ring.' };
  }
};

// Delete user (Server-side only)
export const deleteUser = async (userId: string): Promise<{ success: boolean; message: string }> => {
  try {
    const { getPool } = await import('@/lib/db');
    const pool = getPool();

    // Check if user exists and is not admin
    const [users] = await pool.execute(
      'SELECT role FROM users WHERE id = ?',
      [userId]
    );

    const userRows = users as any[];
    if (userRows.length === 0) {
      return { success: false, message: 'Foydalanuvchi topilmadi!' };
    }

    if (userRows[0].role === 'admin') {
      return { success: false, message: 'Adminni o\'chirish mumkin emas!' };
    }

    // Delete user
    await pool.execute('DELETE FROM users WHERE id = ?', [userId]);

    return { success: true, message: 'Foydalanuvchi muvaffaqiyatli o\'chirildi!' };
  } catch (error) {
    console.error('Delete user error:', error);
    return { success: false, message: 'Xatolik yuz berdi. Qaytadan urinib ko\'ring.' };
  }
};

// Get user by ID (Server-side only)
export const getUserById = async (userId: string): Promise<User | null> => {
  try {
    const { getPool } = await import('@/lib/db');
    const pool = getPool();
    const [users] = await pool.execute(
      'SELECT id, name, email, role, created_at FROM users WHERE id = ?',
      [userId]
    );

    const userRows = users as any[];
    if (userRows.length === 0) {
      return null;
    }

    const user = userRows[0];
    return {
      id: user.id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.created_at,
    };
  } catch (error) {
    console.error('Get user by ID error:', error);
    return null;
  }
};