require('dotenv').config({ path: '.env.local' });
const mysql = require('mysql2/promise');

async function testConnection() {
  try {
    console.log('Testing database connection...');
    console.log('Host:', process.env.DB_HOST || 'localhost');
    console.log('Port:', process.env.DB_PORT || '3306');
    console.log('User:', process.env.DB_USER);
    console.log('Database:', process.env.DB_NAME);
    
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log('✅ Connection successful!');
    
    const [rows] = await connection.execute('SELECT 1 as test');
    console.log('✅ Query successful:', rows);
    
    await connection.end();
    console.log('✅ Connection closed');
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.error('Error code:', error.code);
  }
}

testConnection();
