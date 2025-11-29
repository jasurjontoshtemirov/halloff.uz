-- Access Codes jadvali yaratish
CREATE TABLE IF NOT EXISTS access_codes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  max_uses INT DEFAULT NULL,
  used_count INT DEFAULT 0,
  expires_at DATETIME DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_used_at TIMESTAMP NULL DEFAULT NULL,
  INDEX idx_code (code),
  INDEX idx_is_active (is_active),
  INDEX idx_expires_at (expires_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Demo kodlarni qo'shish
INSERT INTO access_codes (code, name, description, is_active, max_uses, expires_at) VALUES
('DEMO-2024-FREE', 'Demo Code', 'Bepul demo kirish', TRUE, NULL, NULL),
('TEST-1234-ABCD', 'Test Code', 'Test uchun', TRUE, 10, DATE_ADD(NOW(), INTERVAL 30 DAY)),
('ADMIN-FULL-2024', 'Admin Code', 'To''liq kirish', TRUE, NULL, NULL),
('HALLOFF-2024', 'Halloff Code', 'Halloff platformasi', TRUE, NULL, NULL),
('START-NOW-2024', 'Start Code', 'Hoziroq boshlash', TRUE, NULL, NULL),
('EXPIRED-TEST-2024', 'Muddati Tugagan Kod', 'Test uchun - muddati tugagan', TRUE, NULL, DATE_SUB(NOW(), INTERVAL 5 DAY));

-- Statistika ko'rish
SELECT 
  code,
  name,
  is_active,
  used_count,
  max_uses,
  expires_at,
  created_at
FROM access_codes
ORDER BY created_at DESC;
