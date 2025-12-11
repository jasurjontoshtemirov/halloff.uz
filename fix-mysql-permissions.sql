-- MySQL foydalanuvchisi uchun ruxsatlarni tuzatish
-- ISPmanager'da MySQL konsolida bajaring

-- Mavjud foydalanuvchi ruxsatlarini ko'rish
SHOW GRANTS FOR 'halloff_db'@'localhost';

-- Agar kerak bo'lsa, yangi host qo'shish
CREATE USER 'halloff_db'@'127.0.0.1' IDENTIFIED BY '@Qwer1234';
GRANT ALL PRIVILEGES ON halloff_db.* TO 'halloff_db'@'127.0.0.1';

CREATE USER 'halloff_db'@'%' IDENTIFIED BY '@Qwer1234';
GRANT ALL PRIVILEGES ON halloff_db.* TO 'halloff_db'@'%';

-- Ruxsatlarni yangilash
FLUSH PRIVILEGES;

-- Tekshirish
SELECT User, Host FROM mysql.user WHERE User = 'halloff_db';