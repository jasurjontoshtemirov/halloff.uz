-- Comments table yaratish
CREATE TABLE IF NOT EXISTS lesson_comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lesson_path VARCHAR(255) NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    comment_text TEXT NOT NULL,
    parent_id INT DEFAULT NULL,
    is_approved BOOLEAN DEFAULT FALSE,
    admin_reply TEXT DEFAULT NULL,
    admin_reply_by VARCHAR(255) DEFAULT NULL,
    admin_reply_at TIMESTAMP NULL DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_lesson_path (lesson_path),
    INDEX idx_is_approved (is_approved),
    INDEX idx_parent_id (parent_id),
    INDEX idx_created_at (created_at),
    
    FOREIGN KEY (parent_id) REFERENCES lesson_comments(id) ON DELETE CASCADE
);

-- Test ma'lumotlar qo'shish
INSERT INTO lesson_comments (lesson_path, user_name, user_email, comment_text, is_approved) VALUES
('/docs/javascript/intro', 'Ali Valiyev', 'ali@example.com', 'Juda yaxshi tushuntirgan! Rahmat!', TRUE),
('/docs/javascript/intro', 'Vali Aliyev', 'vali@example.com', 'Video sifati yaxshi emas, ovozni eshitish qiyin', FALSE),
('/docs/javascript/functions', 'Sardor Karimov', 'sardor@example.com', 'Funksiyalar haqida batafsil tushuntiring', TRUE),
('/docs/html/intro', 'Madina Tosheva', 'madina@example.com', 'HTML darslari juda foydali!', TRUE);