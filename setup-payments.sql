-- Payments table
CREATE TABLE IF NOT EXISTS payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
  payment_id VARCHAR(255) UNIQUE NOT NULL,
  payment_method VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_id (user_id),
  INDEX idx_payment_id (payment_id),
  INDEX idx_status (status)
);

-- Users table'ga subscription ustunlari qo'shish
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS subscription_status ENUM('free', 'active', 'expired') DEFAULT 'free',
ADD COLUMN IF NOT EXISTS subscription_end DATETIME NULL;

-- Index qo'shish
CREATE INDEX IF NOT EXISTS idx_subscription_status ON users(subscription_status);
CREATE INDEX IF NOT EXISTS idx_subscription_end ON users(subscription_end);
