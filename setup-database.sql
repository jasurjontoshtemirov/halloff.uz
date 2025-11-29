-- Halloff Database Setup
-- ISPmanager MySQL/MariaDB uchun

-- Users table yaratish
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('user', 'admin') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_role (role)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Default admin user (parol: admin123)
-- Hashed password: $2a$10$... (bcrypt)
INSERT IGNORE INTO users (name, email, password, role) VALUES 
('Admin', 'admin@halloff.uz', '$2a$10$rN8qGZxZ5Z5Z5Z5Z5Z5Z5uK5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z', 'admin');

-- Main admin user (parol: @Qwer1234)
INSERT IGNORE INTO users (name, email, password, role) VALUES 
('Main Admin', 'k6yd2007@gmail.com', '$2a$10$rN8qGZxZ5Z5Z5Z5Z5Z5Z5uK5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z', 'admin');

-- Test qilish
SELECT * FROM users;
