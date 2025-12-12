-- User devices table yaratish
CREATE TABLE IF NOT EXISTS user_devices (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  device_name VARCHAR(255) NOT NULL DEFAULT 'Unknown Device',
  device_fingerprint VARCHAR(255) NOT NULL,
  user_agent TEXT,
  ip_address VARCHAR(45),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE KEY unique_user_device (user_id, device_fingerprint)
);