// Login API ni test qilish uchun
const testLogin = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Device-Fingerprint': 'test-device-123',
        'X-Device-Name': 'Test Device',
      },
      body: JSON.stringify({ 
        email: 'k6yd023@gmail.com', 
        password: 'test123' 
      }),
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', [...response.headers.entries()]);
    
    const result = await response.json();
    console.log('Response body:', result);
    
    // Cookie'larni tekshirish
    const cookies = response.headers.get('set-cookie');
    console.log('Set-Cookie header:', cookies);
    
  } catch (error) {
    console.error('Test error:', error);
  }
};

testLogin();