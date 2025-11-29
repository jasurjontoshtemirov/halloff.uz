export default function APIPage() {
  return (
    <div className="prose prose-indigo max-w-none">
      <h1>API Hujjatlari</h1>
      
      <p className="lead">
        Loyihadagi API endpointlar va ulardan qanday foydalanish.
      </p>

      <h2>Asosiy URL</h2>
      
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>https://api.example.com/v1</code>
      </pre>

      <h2>Authentication</h2>
      
      <p>Barcha so'rovlar uchun API kaliti kerak:</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
      </pre>

      <h2>Endpoints</h2>

      <h3>GET /users</h3>
      
      <p>Barcha foydalanuvchilarni olish:</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`fetch('https://api.example.com/v1/users', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
  .then(res => res.json())
  .then(data => console.log(data));`}</code>
      </pre>

      <p>Javob:</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`{
  "users": [
    {
      "id": 1,
      "name": "Ali",
      "email": "ali@example.com"
    }
  ]
}`}</code>
      </pre>

      <h3>POST /users</h3>
      
      <p>Yangi foydalanuvchi yaratish:</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`fetch('https://api.example.com/v1/users', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Vali',
    email: 'vali@example.com'
  })
});`}</code>
      </pre>

      <div className="not-prose bg-yellow-50 border-l-4 border-yellow-600 p-4 my-6">
        <p className="text-sm text-yellow-900">
          <strong>Eslatma:</strong> Bu faqat misol. Haqiqiy API endpointlar boshqacha bo'lishi mumkin.
        </p>
      </div>

      <h2>Xatolar</h2>
      
      <p>API quyidagi xato kodlarini qaytarishi mumkin:</p>

      <div className="not-prose overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kod</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ma'nosi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">200</td>
              <td className="px-6 py-4 text-sm text-gray-500">Muvaffaqiyatli</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">400</td>
              <td className="px-6 py-4 text-sm text-gray-500">Noto'g'ri so'rov</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">401</td>
              <td className="px-6 py-4 text-sm text-gray-500">Autentifikatsiya xatosi</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">404</td>
              <td className="px-6 py-4 text-sm text-gray-500">Topilmadi</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">500</td>
              <td className="px-6 py-4 text-sm text-gray-500">Server xatosi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
