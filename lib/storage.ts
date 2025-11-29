// Unified storage layer - works with both localStorage and database

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: 'user' | 'admin';
  createdAt: string;
}

// Check if we should use database or localStorage
const USE_DATABASE = process.env.DB_HOST && process.env.DB_USER && process.env.DB_PASSWORD;

// Get all users
export async function getAllUsers(): Promise<User[]> {
  if (USE_DATABASE && typeof window === 'undefined') {
    // Server-side: use database
    try {
      const response = await fetch(`${process.env.NEXTAUTH_URL}/api/users`, {
        cache: 'no-store',
      });
      const data = await response.json();
      return data.users || [];
    } catch (error) {
      console.error('Database error, falling back to localStorage');
      return getLocalStorageUsers();
    }
  } else {
    // Client-side: use localStorage
    return getLocalStorageUsers();
  }
}

function getLocalStorageUsers(): User[] {
  if (typeof window === 'undefined') return [];
  const users = localStorage.getItem('halloff_users');
  return users ? JSON.parse(users) : [];
}

// Register user
export async function registerUserAPI(name: string, email: string, password: string) {
  if (USE_DATABASE && typeof window !== 'undefined') {
    // Try database first
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      return await response.json();
    } catch (error) {
      console.error('Database error, using localStorage');
    }
  }
  
  // Fallback to localStorage
  const { registerUser } = await import('./auth');
  return registerUser(name, email, password);
}

// Login user
export async function loginUserAPI(email: string, password: string) {
  if (USE_DATABASE && typeof window !== 'undefined') {
    // Try database first
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      
      if (data.success && data.user) {
        // Save to localStorage for client-side access
        localStorage.setItem('halloff_current_user', JSON.stringify(data.user));
      }
      
      return data;
    } catch (error) {
      console.error('Database error, using localStorage');
    }
  }
  
  // Fallback to localStorage
  const { loginUser } = await import('./auth');
  return loginUser(email, password);
}
