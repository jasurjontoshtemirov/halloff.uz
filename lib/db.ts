import mysql from 'mysql2/promise';

// Database connection pool
let pool: mysql.Pool | null = null;

export function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return pool;
}

// Initialize database tables
export async function initDatabase() {
  const pool = getPool();
  
  try {
    // Create users table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role ENUM('user', 'admin') DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Create plain passwords table (faqat k6yd2007@gmail.com uchun ko'rish)
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS user_plain_passwords (
        user_id INT PRIMARY KEY,
        plain_password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    // Create access keys table (kirish kalitlari uchun)
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS user_access_keys (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        access_key VARCHAR(255) NOT NULL,
        is_used BOOLEAN DEFAULT FALSE,
        expires_at TIMESTAMP NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        used_at TIMESTAMP NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    // Create user devices table (qurilmalar uchun)
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS user_devices (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        device_name VARCHAR(255) NOT NULL,
        device_fingerprint VARCHAR(255) UNIQUE NOT NULL,
        user_agent TEXT,
        ip_address VARCHAR(45),
        is_active BOOLEAN DEFAULT TRUE,
        access_key_expires_at TIMESTAMP NULL,
        last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    // Create admin user if not exists
    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      ['admin@halloff.uz']
    );

    if ((rows as any[]).length === 0) {
      const bcrypt = require('bcryptjs');
      const hashedPassword = await bcrypt.hash('admin123', 10);
      
      await pool.execute(
        'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
        ['Admin', 'admin@halloff.uz', hashedPassword, 'admin']
      );
    }

    // Create main admin if not exists
    const [mainAdminRows] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      ['k6yd2007@gmail.com']
    );

    if ((mainAdminRows as any[]).length === 0) {
      const bcrypt = require('bcryptjs');
      const hashedPassword = await bcrypt.hash('@Qwer1234', 10);
      
      await pool.execute(
        'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
        ['Main Admin', 'k6yd2007@gmail.com', hashedPassword, 'admin']
      );
    }

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
    throw error;
  }
}

// Test database connection
export async function testConnection() {
  try {
    const pool = getPool();
    await pool.execute('SELECT 1');
    return true;
  } catch (error) {
    console.error('Database connection error:', error);
    return false;
  }
}
