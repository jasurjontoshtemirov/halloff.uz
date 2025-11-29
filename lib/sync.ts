// Sync localStorage across different domains/IPs
// This is a temporary solution - use a real database in production

const SYNC_KEY = 'halloff_sync_data';
const SYNC_INTERVAL = 5000; // 5 seconds

export interface SyncData {
  users: any[];
  currentUser: any;
  timestamp: number;
}

// Export data to sync
export const exportSyncData = (): SyncData => {
  const users = localStorage.getItem('halloff_users');
  const currentUser = localStorage.getItem('halloff_current_user');
  
  return {
    users: users ? JSON.parse(users) : [],
    currentUser: currentUser ? JSON.parse(currentUser) : null,
    timestamp: Date.now(),
  };
};

// Import synced data
export const importSyncData = (data: SyncData) => {
  if (data.users && data.users.length > 0) {
    const existingUsers = JSON.parse(localStorage.getItem('halloff_users') || '[]');
    
    // Merge users (avoid duplicates by email)
    const mergedUsers = [...existingUsers];
    data.users.forEach(newUser => {
      const exists = mergedUsers.find(u => u.email === newUser.email);
      if (!exists) {
        mergedUsers.push(newUser);
      }
    });
    
    localStorage.setItem('halloff_users', JSON.stringify(mergedUsers));
  }
};

// Generate sync code
export const generateSyncCode = (): string => {
  const data = exportSyncData();
  return btoa(JSON.stringify(data));
};

// Import from sync code
export const importFromSyncCode = (code: string): boolean => {
  try {
    const data = JSON.parse(atob(code));
    importSyncData(data);
    return true;
  } catch (error) {
    console.error('Invalid sync code:', error);
    return false;
  }
};
