-- Access Codes Table
CREATE TABLE IF NOT EXISTS access_codes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255),
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  max_uses INT NULL COMMENT 'NULL = unlimited',
  used_count INT DEFAULT 0,
  expires_at DATETIME NULL COMMENT 'NULL = never expires',
  created_by INT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_used_at TIMESTAMP NULL,
  INDEX idx_code (code),
  INDEX idx_active (is_active),
  INDEX idx_expires (expires_at)
);

-- Access Logs Table
CREATE TABLE IF NOT EXISTS access_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code_id INT NOT NULL,
  code VARCHAR(50) NOT NULL,
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (code_id) REFERENCES access_codes(id) ON DELETE CASCADE,
  INDEX idx_code_id (code_id),
  INDEX idx_created_at (created_at)
);

-- Insert demo codes
INSERT INTO access_codes (code, name, description, max_uses, expires_at) VALUES
('DEMO-2024-FREE', 'Demo Code', 'Bepul demo kirish', NULL, NULL),
('TEST-1234-ABCD', 'Test Code', 'Test uchun', 10, DATE_ADD(NOW(), INTERVAL 30 DAY)),
('ADMIN-FULL-2024', 'Admin Code', 'To\'liq kirish', NULL, NULL);
