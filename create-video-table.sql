-- Video darslar uchun table
CREATE TABLE IF NOT EXISTS lesson_videos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lesson_path VARCHAR(255) NOT NULL UNIQUE,
    lesson_title VARCHAR(255) NOT NULL,
    youtube_video_id VARCHAR(50) DEFAULT NULL,
    video_url VARCHAR(500) DEFAULT NULL, -- Custom video URL
    video_title VARCHAR(255) DEFAULT NULL,
    description TEXT DEFAULT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_lesson_path (lesson_path),
    INDEX idx_is_active (is_active)
);

-- Default darslarni qo'shish
INSERT INTO lesson_videos (lesson_path, lesson_title, youtube_video_id, video_title) VALUES
-- HTML darslari
('/docs/html/intro', 'HTML ga Kirish', 'ReVu2YGweVQ', 'HTML ga Kirish - Video dars'),
('/docs/html/elements', 'HTML Elementlari', 'l-GaRkk5t2Y', 'HTML Elementlari - Video dars'),
('/docs/html/forms', 'HTML Formalar', 'l-GaRkk5t2Y', 'HTML Formalar - Video dars'),
('/docs/html/lists-tables', 'Ro\'yxat va Jadvallar', 'l-GaRkk5t2Y', 'Ro\'yxat va Jadvallar - Video dars'),
('/docs/html/media', 'Media Elementlari', 'l-GaRkk5t2Y', 'Media Elementlari - Video dars'),
('/docs/html/semantic', 'Semantik HTML', NULL, 'Semantik HTML - Video dars'),

-- CSS darslari
('/docs/css/intro', 'CSS ga Kirish', '8KkKuTCFvzI', 'CSS ga Kirish - Video dars'),
('/docs/css/selectors', 'CSS Selektorlar', NULL, 'CSS Selektorlar - Video dars'),
('/docs/css/colors', 'CSS Ranglar', NULL, 'CSS Ranglar - Video dars'),
('/docs/css/fonts', 'CSS Shriftlar', NULL, 'CSS Shriftlar - Video dars'),
('/docs/css/box-model', 'CSS Box Model', NULL, 'CSS Box Model - Video dars'),
('/docs/css/position', 'CSS Position', NULL, 'CSS Position - Video dars'),
('/docs/css/flexbox', 'CSS Flexbox', NULL, 'CSS Flexbox - Video dars'),
('/docs/css/grid', 'CSS Grid', NULL, 'CSS Grid - Video dars'),
('/docs/css/responsive', 'CSS Responsive', NULL, 'CSS Responsive - Video dars'),
('/docs/css/animations', 'CSS Animations', NULL, 'CSS Animations - Video dars'),
('/docs/css/transforms', 'CSS Transforms', NULL, 'CSS Transforms - Video dars'),

-- JavaScript darslari
('/docs/javascript/intro', 'JavaScript ga Kirish', NULL, 'JavaScript ga Kirish - Video dars'),
('/docs/javascript/data-types', 'Ma\'lumot Turlari', NULL, 'Ma\'lumot Turlari - Video dars'),
('/docs/javascript/operators', 'Operatorlar', NULL, 'Operatorlar - Video dars'),
('/docs/javascript/conditions', 'Shartlar', NULL, 'Shartlar - Video dars'),
('/docs/javascript/loops', 'Tsikllar', NULL, 'Tsikllar - Video dars'),
('/docs/javascript/functions', 'Funksiyalar', NULL, 'Funksiyalar - Video dars'),
('/docs/javascript/arrays', 'Massivlar', NULL, 'Massivlar - Video dars'),
('/docs/javascript/objects', 'Obyektlar', NULL, 'Obyektlar - Video dars'),
('/docs/javascript/dom', 'DOM', NULL, 'DOM - Video dars'),
('/docs/javascript/dom-events', 'DOM Events', NULL, 'DOM Events - Video dars'),
('/docs/javascript/async', 'Async/Await', NULL, 'Async/Await - Video dars'),
('/docs/javascript/promises', 'Promises', NULL, 'Promises - Video dars'),
('/docs/javascript/api', 'API bilan ishlash', NULL, 'API bilan ishlash - Video dars'),
('/docs/javascript/modules', 'Modules', NULL, 'Modules - Video dars'),
('/docs/javascript/classes', 'Classes', NULL, 'Classes - Video dars'),
('/docs/javascript/closures', 'Closures', NULL, 'Closures - Video dars'),
('/docs/javascript/prototypes', 'Prototypes', NULL, 'Prototypes - Video dars'),
('/docs/javascript/destructuring', 'Destructuring', NULL, 'Destructuring - Video dars'),
('/docs/javascript/spread-rest', 'Spread & Rest', NULL, 'Spread & Rest - Video dars'),
('/docs/javascript/map-set', 'Map & Set', NULL, 'Map & Set - Video dars'),
('/docs/javascript/regex', 'Regular Expressions', NULL, 'Regular Expressions - Video dars'),
('/docs/javascript/errors', 'Error Handling', NULL, 'Error Handling - Video dars'),
('/docs/javascript/json', 'JSON', NULL, 'JSON - Video dars'),
('/docs/javascript/localstorage', 'LocalStorage', NULL, 'LocalStorage - Video dars'),
('/docs/javascript/date', 'Date Object', NULL, 'Date Object - Video dars'),
('/docs/javascript/styles', 'Styles va ClassList', NULL, 'Styles va ClassList - Video dars'),
('/docs/javascript/callback', 'Callback Functions', NULL, 'Callback Functions - Video dars'),

-- Amaliyot darslari
('/docs/javascript/amaliyot1', 'Amaliyot 1: Calculator', NULL, 'Amaliyot 1: Calculator - Video dars'),
('/docs/javascript/amaliyot2', 'Amaliyot 2: Todo App', NULL, 'Amaliyot 2: Todo App - Video dars'),
('/docs/javascript/amaliyot3', 'Amaliyot 3: Weather App', NULL, 'Amaliyot 3: Weather App - Video dars'),
('/docs/javascript/amaliyot4', 'Amaliyot 4: Quiz App', NULL, 'Amaliyot 4: Quiz App - Video dars'),
('/docs/javascript/amaliyot5', 'Amaliyot 5: E-commerce', NULL, 'Amaliyot 5: E-commerce - Video dars'),
('/docs/javascript/amaliyot6', 'Amaliyot 6: Social Media', NULL, 'Amaliyot 6: Social Media - Video dars'),

-- Boshqa darslar
('/docs/variables', 'O\'zgaruvchilar', NULL, 'O\'zgaruvchilar - Video dars'),
('/docs/use-strict', 'Use Strict', NULL, 'Use Strict - Video dars'),
('/docs/components', 'Komponentlar', NULL, 'Komponentlar - Video dars'),
('/docs/api', 'API Documentation', NULL, 'API Documentation - Video dars'),
('/docs/deployment', 'Deployment', NULL, 'Deployment - Video dars')

ON DUPLICATE KEY UPDATE 
    lesson_title = VALUES(lesson_title),
    video_title = VALUES(video_title);