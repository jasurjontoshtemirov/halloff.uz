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
  UNIQUE KEY unique_user_device (user_id, device_fingerprint),
  INDEX idx_user_active (user_id, is_active),
  INDEX idx_fingerprint (device_fingerprint)
);

-- Eski qurilmalarni tozalash uchun stored procedure
DELIMITER //
CREATE PROCEDURE CleanupInactiveDevices()
BEGIN
  -- 30 kundan eski nofaol qurilmalarni o'chirish
  DELETE FROM user_devices 
  WHERE is_active = FALSE 
  AND last_login < DATE_SUB(NOW(), INTERVAL 30 DAY);
END //
DELIMITER ;

-- Har kuni tozalash uchun event scheduler (agar kerak bo'lsa)
-- CREATE EVENT IF NOT EXISTS cleanup_devices
-- ON SCHEDULE EVERY 1 DAY
-- DO CALL CleanupInactiveDevices();