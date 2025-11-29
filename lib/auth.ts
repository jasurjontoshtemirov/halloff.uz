// Simple auth helper functions using localStorage

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  createdAt: string;
}

// Get all users from localStorage
export const getUsers = (): User[] => {
  if (typeof window === 'undefined') return [];
  const users = localStorage.getItem('halloff_users');
  return users ? JSON.parse(users) : [];
};

// Save users to localStorage
const saveUsers = (users: User[]) => {
  localStorage.setItem('halloff_users', JSON.stringify(users));
};

// Initialize admin users if not exists
export const initializeAdmin = () => {
  const users = getUsers();
  
  // Default admin
  const defaultAdminExists = users.find(u => u.email === 'admin@halloff.uz');
  if (!defaultAdminExists) {
    const adminUser: User = {
      id: 'admin-' + Date.now(),
      name: 'Admin',
      email: 'admin@halloff.uz',
      password: 'admin123',
      role: 'admin',
      createdAt: new Date().toISOString(),
    };
    users.push(adminUser);
  }
  
  // Main admin (your account)
  const mainAdminExists = users.find(u => u.email === 'k6yd2007@gmail.com');
  if (!mainAdminExists) {
    const mainAdmin: User = {
      id: 'main-admin-' + Date.now(),
      name: 'Main Admin',
      email: 'k6yd2007@gmail.com',
      password: '@Qwer1234',
      role: 'admin',
      createdAt: new Date().toISOString(),
    };
    users.push(mainAdmin);
  }
  
  saveUsers(users);
};

// Register new user
export const registerUser = (name: string, email: string, password: string): { success: boolean; message: string } => {
  // Initialize admin on first use
  initializeAdmin();
  
  const users = getUsers();
  
  // Check if user already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return { success: false, message: 'Bu email allaqachon ro\'yxatdan o\'tgan!' };
  }

  // Create new user
  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
    password, // In production, this should be hashed!
    role: 'user', // Default role is user
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);

  return { success: true, message: 'Muvaffaqiyatli ro\'yxatdan o\'tdingiz!' };
};

// Login user
export const loginUser = (email: string, password: string): { success: boolean; message: string; user?: User } => {
  // Initialize admin on first use
  initializeAdmin();
  
  const users = getUsers();
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return { success: false, message: 'Email yoki parol noto\'g\'ri!' };
  }

  // Save current user to localStorage
  localStorage.setItem('halloff_current_user', JSON.stringify(user));

  return { success: true, message: 'Muvaffaqiyatli kirdingiz!', user };
};

// Get current logged in user
export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem('halloff_current_user');
  return user ? JSON.parse(user) : null;
};

// Logout user
export const logoutUser = () => {
  localStorage.removeItem('halloff_current_user');
};

// Check if user is logged in
export const isLoggedIn = (): boolean => {
  return getCurrentUser() !== null;
};

// Check if current user is admin
export const isAdmin = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Faqat localStorage'da is_admin flag bor bo'lsa admin
  const isAdminFlag = localStorage.getItem('is_admin');
  
  // Yoki user role admin bo'lsa
  const user = getCurrentUser();
  
  return isAdminFlag === 'true' || user?.role === 'admin';
};


// Server-side: Get current user from cookies
export const getCurrentUserFromCookies = async (request?: Request): Promise<User | null> => {
  try {
    // Server-side - cookie'dan o'qish
    if (typeof window === 'undefined') {
      const { cookies } = await import('next/headers');
      const cookieStore = await cookies();
      const authToken = cookieStore.get('auth_token');
      
      if (!authToken) {
        return null;
      }

      // JWT token'ni decode qilish
      const jwt = require('jsonwebtoken');
      const decoded = jwt.verify(authToken.value, process.env.JWT_SECRET || 'secret');
      
      // Database'dan user olish
      const { getPool } = await import('@/lib/db');
      const pool = getPool();
      const [users]: any = await pool.execute(
        'SELECT id, name, email, role FROM users WHERE id = ?',
        [decoded.id]
      );

      if (users.length === 0) {
        return null;
      }

      return {
        id: users[0].id.toString(),
        name: users[0].name,
        email: users[0].email,
        password: '', // Password'ni qaytarmaymiz
        role: users[0].role,
        createdAt: users[0].created_at,
      };
    }

    // Client-side - localStorage'dan o'qish
    return getCurrentUser();
  } catch (error) {
    console.error('Get current user error:', error);
    return null;
  }
};
