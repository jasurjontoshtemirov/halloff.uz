export default function ComponentsPage() {
  return (
    <div className="prose prose-indigo max-w-none">
      <h1>Komponentlar</h1>
      
      <p className="lead">
        Loyihadagi asosiy komponentlar va ulardan qanday foydalanish.
      </p>

      <h2>Button komponenti</h2>
      
      <p>Oddiy tugma komponenti:</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`<button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
  Tugma
</button>`}</code>
      </pre>

      <div className="not-prose my-6">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Misol tugma
        </button>
      </div>

      <h2>Card komponenti</h2>
      
      <p>Kontent uchun karta komponenti:</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`<div className="bg-white p-6 rounded-xl shadow-sm">
  <h3 className="text-xl font-semibold mb-2">Sarlavha</h3>
  <p className="text-gray-600">Matn</p>
</div>`}</code>
      </pre>

      <div className="not-prose my-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold mb-2">Misol karta</h3>
          <p className="text-gray-600">Bu karta komponentining misoli</p>
        </div>
      </div>

      <h2>Alert komponenti</h2>
      
      <p>Xabarlar uchun alert komponenti:</p>

      <div className="not-prose space-y-4 my-6">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
          <p className="text-sm text-blue-900">
            <strong>Ma'lumot:</strong> Bu ma'lumot xabari
          </p>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-600 p-4">
          <p className="text-sm text-green-900">
            <strong>Muvaffaqiyat:</strong> Amal muvaffaqiyatli bajarildi
          </p>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
          <p className="text-sm text-yellow-900">
            <strong>Ogohlantirish:</strong> Ehtiyot bo'ling
          </p>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-600 p-4">
          <p className="text-sm text-red-900">
            <strong>Xato:</strong> Nimadir noto'g'ri ketdi
          </p>
        </div>
      </div>

      <h2>Qo'shimcha</h2>
      
      <p>
        Ko'proq komponentlar va misollar uchun <a href="/docs/api">API</a> sahifasiga o'ting.
      </p>
    </div>
  );
}
