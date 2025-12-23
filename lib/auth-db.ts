// Database-based auth system (Server-side only)

export interface User {
  id: string;
  name: string;
  phone: string;
  role: 'user' | 'admin';
  createdAt: string;
}

// Get all users from database (Server-side only)
export const getUsers = async (): Promise<User[]> => {
  try {
    const { getPool } = await import('@/lib/db');
    const pool = getPool();
    const [rows] = await pool.execute(
      'SELECT id, name, phone, role, created_at FROM users ORDER BY created_at DESC'
    );

    return (rows as any[]).map(row => ({
      id: row.id.toString(),
      name: row.name,
      phone: row.phone,
      role: row.role,
      createdAt: row.created_at,
    }));
  } catch (error) {
    console.error('Get users error:', error);
    return [];
  }
};

// Register new user (Server-side only)
export const registerUser = async (name: string, phone: string): Promise<{ success: boolean; message: string }> => {
  try {
    const { getPool } = await import('@/lib/db');
    const pool = getPool();

    // Check if user already exists
    const [existingUsers] = await pool.execute(
      'SELECT id FROM users WHERE phone = ?',
      [phone]
    );

    if ((existingUsers as any[]).length > 0) {
      return { success: false, message: 'Bu telefon raqam allaqachon ro\'yxatdan o\'tgan!' };
    }

    // Create new user
    await pool.execute(
      'INSERT INTO users (name, phone, role) VALUES (?, ?, ?)',
      [name, phone, 'user']
    );

    return { success: true, message: 'Muvaffaqiyatli ro\'yxatdan o\'tdingiz!' };
  } catch (error) {
    console.error('Register user error:', error);
    return { success: false, message: 'Xatolik yuz berdi. Qaytadan urinib ko\'ring.' };
  }
};

// Login user (Server-side only)
export const loginUser = async (phone: string): Promise<{ success: boolean; message: string; user?: User }> => {
  try {
    const { getPool } = await import('@/lib/db');
    const pool = getPool();

    // Get user from database
    const [users] = await pool.execute(
      'SELECT id, name, phone, role, created_at FROM users WHERE phone = ?',
      [phone]
    );

    const userRows = users as any[];
    if (userRows.length === 0) {
      return { success: false, message: 'Telefon raqam topilmadi! Avval ro\'yxatdan o\'ting.' };
    }

    const user = userRows[0];

    // Return user
    const userResponse: User = {
      id: user.id.toString(),
      name: user.name,
      phone: user.phone,
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
      'SELECT id, name, phone, role, created_at FROM users WHERE id = ?',
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
      phone: user.phone,
      role: user.role,
      createdAt: user.created_at,
    };
  } catch (error) {
    console.error('Get user by ID error:', error);
    return null;
  }
};