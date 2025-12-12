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

// Login user with device management
export const loginUser = async (email: string, password: string): Promise<{ success: boolean; message: string; user?: User }> => {
  // Initialize admin on first use
  initializeAdmin();
  
  const users = getUsers();
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return { success: false, message: 'Email yoki parol noto\'g\'ri!' };
  }

  // Device management - faqat bitta device bo'lishi kerak
  try {
    const { generateDeviceFingerprint, getDeviceName } = await import('./device-fingerprint');
    const deviceFingerprint = generateDeviceFingerprint();
    const deviceName = getDeviceName();
    
    // Eski devicelarni o'chirish (server-side)
    if (typeof window === 'undefined') {
      const { getPool } = await import('./db');
      const pool = getPool();
      
      // Foydalanuvchining barcha eski devicelarini nofaol qilish
      await pool.execute(
        'UPDATE user_devices SET is_active = FALSE WHERE user_id = ? AND device_fingerprint != ?',
        [user.id, deviceFingerprint]
      );
      
      // Yangi yoki mavjud deviceni aktiv qilish
      await pool.execute(
        `INSERT INTO user_devices (user_id, device_name, device_fingerprint, user_agent, is_active, last_login) 
         VALUES (?, ?, ?, ?, TRUE, NOW()) 
         ON DUPLICATE KEY UPDATE 
         is_active = TRUE, 
         last_login = NOW(),
         device_name = VALUES(device_name),
         user_agent = VALUES(user_agent)`,
        [user.id, deviceName, deviceFingerprint, navigator?.userAgent || '']
      );
    } else {
      // Client-side - localStorage'da device ma'lumotlarini saqlash
      const deviceInfo = {
        fingerprint: deviceFingerprint,
        name: deviceName,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem('halloff_device_info', JSON.stringify(deviceInfo));
    }
  } catch (error) {
    console.error('Device management error:', error);
    // Device management xatosi bo'lsa ham login qilishga ruxsat berish
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

// Logout user (eski funksiya - compatibility uchun)
export const logoutUser = () => {
  localStorage.removeItem('halloff_current_user');
  localStorage.removeItem('halloff_device_info');
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

// Device management functions

// Foydalanuvchining aktiv devicelarini olish
export const getUserActiveDevices = async (userId: string): Promise<any[]> => {
  try {
    if (typeof window === 'undefined') {
      const { getPool } = await import('./db');
      const pool = getPool();
      
      const [devices]: any = await pool.execute(
        'SELECT * FROM user_devices WHERE user_id = ? AND is_active = TRUE ORDER BY last_login DESC',
        [userId]
      );
      
      return devices;
    }
    return [];
  } catch (error) {
    console.error('Get user devices error:', error);
    return [];
  }
};

// Deviceni nofaol qilish (logout)
export const deactivateDevice = async (userId: string, deviceFingerprint?: string): Promise<boolean> => {
  try {
    if (typeof window === 'undefined') {
      const { getPool } = await import('./db');
      const pool = getPool();
      
      if (deviceFingerprint) {
        // Muayyan deviceni nofaol qilish
        await pool.execute(
          'UPDATE user_devices SET is_active = FALSE WHERE user_id = ? AND device_fingerprint = ?',
          [userId, deviceFingerprint]
        );
      } else {
        // Barcha devicelarni nofaol qilish
        await pool.execute(
          'UPDATE user_devices SET is_active = FALSE WHERE user_id = ?',
          [userId]
        );
      }
      
      return true;
    }
    return false;
  } catch (error) {
    console.error('Deactivate device error:', error);
    return false;
  }
};

// Joriy deviceni tekshirish
export const checkCurrentDevice = async (userId: string): Promise<{ isValid: boolean; message: string }> => {
  try {
    if (typeof window !== 'undefined') {
      const { generateDeviceFingerprint } = await import('./device-fingerprint');
      const currentFingerprint = generateDeviceFingerprint();
      
      // Server bilan tekshirish uchun API chaqirish
      const response = await fetch('/api/auth/check-device', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          deviceFingerprint: currentFingerprint
        })
      });
      
      const result = await response.json();
      return result;
    }
    
    return { isValid: true, message: 'Server-side check' };
  } catch (error) {
    console.error('Check device error:', error);
    return { isValid: false, message: 'Device tekshirishda xatolik' };
  }
};

// Logout with device deactivation
export const logoutUserWithDevice = async () => {
  try {
    const user = getCurrentUser();
    if (user) {
      // Deviceni nofaol qilish
      if (typeof window !== 'undefined') {
        const { generateDeviceFingerprint } = await import('./device-fingerprint');
        const deviceFingerprint = generateDeviceFingerprint();
        
        await fetch('/api/auth/logout-device', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: user.id,
            deviceFingerprint
          })
        });
      }
    }
  } catch (error) {
    console.error('Logout device error:', error);
  }
  
  // LocalStorage'ni tozalash
  localStorage.removeItem('halloff_current_user');
  localStorage.removeItem('halloff_device_info');
};