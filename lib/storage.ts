// Unified storage layer - works with API

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: 'user' | 'admin';
  createdAt: string;
}

// Get all users via API
export async function getAllUsers(): Promise<User[]> {
  try {
    const response = await fetch('/api/users', {
      cache: 'no-store',
    });
    const data = await response.json();
    return data.users || [];
  } catch {
    return [];
  }
}

// Register user via API
export async function registerUserAPI(name: string, email: string, password: string) {
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    return await response.json();
  } catch {
    return { success: false, message: 'Tarmoq xatosi' };
  }
}

// Login user via API
export async function loginUserAPI(email: string, password: string) {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    
    if (data.success && data.user) {
      localStorage.setItem('halloff_current_user', JSON.stringify(data.user));
    }
    
    return data;
  } catch {
    return { success: false, message: 'Tarmoq xatosi' };
  }
}