export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Aloqa</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          Biz bilan bog'lanish uchun quyidagi ma'lumotlardan foydalaning:
        </p>
        
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2">
            <strong>Email:</strong> <a href="mailto:qk6yd2007@gmail.com" className="text-blue-600 hover:underline">qk6yd2007@gmail.com</a>
          </p>
          
          <p className="mb-2">
            <strong>Website:</strong> <a href="https://halloff.uz" className="text-blue-600 hover:underline">halloff.uz</a>
          </p>
        </div>
        
        <p className="mt-4">
          Savollaringiz bo'lsa, biz bilan bog'laning. Tez orada javob berishga harakat qilamiz.
        </p>
      </div>
    </div>
  );
}