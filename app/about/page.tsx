export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Biz haqimizda</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          halloff.uz - bu dasturlash va zamonaviy texnologiyalar bo'yicha ta'lim platformasi.
        </p>
        
        <p className="mb-4">
          Bizning maqsadimiz talabalarning amaliy ko'nikmalarni o'rganishlariga yordam berishdir.
        </p>
        
        <p className="mb-4">
          Platformamizda siz turli dasturlash tillari, web development, mobil dasturlash va boshqa zamonaviy texnologiyalar bo'yicha bilim olishingiz mumkin.
        </p>
      </div>
    </div>
  );
}