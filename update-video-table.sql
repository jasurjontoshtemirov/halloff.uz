-- Video table'ni yangilash uchun video_url maydonini qo'shish
ALTER TABLE videos ADD COLUMN video_url VARCHAR(500) DEFAULT NULL AFTER youtube_video_id;

-- Ba'zi demo videolar uchun custom URL qo'shish
UPDATE videos SET video_url = '/videos/html-intro-demo.mp4' WHERE lesson_path = '/docs/html/intro';
UPDATE videos SET video_url = '/videos/css-intro-demo.mp4' WHERE lesson_path = '/docs/css/intro';
UPDATE videos SET video_url = '/videos/js-intro-demo.mp4' WHERE lesson_path = '/docs/javascript/intro';