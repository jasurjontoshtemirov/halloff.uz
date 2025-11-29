"use client";

import { useState } from "react";

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button 
      onClick={copyToClipboard}
      className="copy-button"
      aria-label="Copy code"
    >
      {copied ? (
        <>
          <span className="text-green-400">✓</span> Copied!
        </>
      ) : (
        <>
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="inline-block"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

export default function UseStrictPage() {
  return (
    <div className="prose-dark max-w-none">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span>Core</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Zamonaviy rejim, "use strict"
        </h1>
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
              SU
            </div>
            <span>Shakhrizbek Usmonov</span>
          </div>
          <span>•</span>
          <span>Fri Aug 23 2024</span>
        </div>
      </div>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Zamonaviy rejim, "use strict"
        </h2>
        
        <p>
          Uzoq vaqt davomida JavaScript hech qanday moslik muammolarisiz rivojlanib bordi. Tildagi yangi 
          funksiyalar qo'shildi, eski funksiyalar esa o'zgarmadi.
        </p>

        <p>
          Bu yondashuvning afzalligi shundaki, mavjud kodini hech qachon buzmaslik edi. Lekin shuningdek, 
          JavaScript yaratuvchilarining qilgan har qanday xato yoki mukammal bo'lmagan qarorlari tilda 
          abadiy qolib ketardi.
        </p>

        <p>
          2009 yilida shunday bo'lib ketdi, taqiqda ECMAScript 5 (ES5) paydo bo'ldi. U tildagi yangi 
          funksiyalarning ayrimlarini o'zgartirdi va mavjud funksiyalarning ba'zilarini o'zgartirdi. Eski 
          kodning ishlashini ta'minlash uchun bunday o'zgarishlar ko'pchilik bo'yicha o'chirilgan. Ularni 
          ishlatish uchun esa maxsus direktiva: "use strict" yordamida aniq yoqish kerak.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          "use strict"
        </h2>

        <p>
          Direktiva string shaklidagi ko'rinadi: "use strict" yoki 'use strict'. Agar u skriptning yuqori 
          qismida joylashgan bo'lsa, butun skript "zamonaviy" tarzda ishlaydi.
        </p>

        <div className="code-block-wrapper">
          <CopyButton code={`"use strict";

// bu kod zamonaviy tarzda ishlaydi
...`} />
          <pre>
            <code>
              <span style={{ color: '#ce9178' }}>"use strict"</span>;{'\n\n'}
              <span style={{ color: '#6a9955', fontStyle: 'italic' }}>// bu kod zamonaviy tarzda ishlaydi</span>{'\n'}
              <span style={{ color: '#d4d4d4' }}>...</span>
            </code>
          </pre>
        </div>

        <div className="my-6 p-4 bg-blue-900/20 border-l-4 border-blue-500 rounded-r">
          <p className="text-sm text-blue-200">
            <strong className="text-blue-100">Eslatma:</strong> "use strict" ni faylning yoki funksiyaning 
            boshida joylashtirishga ishonch hosil qiling, aks holda qat'iy rejim yoqilmasligi mumkin.
          </p>
        </div>

        <p>
          Masalan, bu yerda "use strict" ishlamaydi:
        </p>

        <div className="code-block-wrapper">
          <CopyButton code={`alert("some code");
// quyidagi "use strict" e'tiborga olinmaydi - u yuqorida bo'lishi kerak

"use strict";

// qat'iy rejim yoqilmagan`} />
          <pre>
            <code>
              <span style={{ color: '#dcdcaa' }}>alert</span>(<span style={{ color: '#ce9178' }}>"some code"</span>);{'\n'}
              <span style={{ color: '#6a9955', fontStyle: 'italic' }}>// quyidagi "use strict" e'tiborga olinmaydi - u yuqorida bo'lishi kerak</span>{'\n\n'}
              <span style={{ color: '#ce9178' }}>"use strict"</span>;{'\n\n'}
              <span style={{ color: '#6a9955', fontStyle: 'italic' }}>// qat'iy rejim yoqilmagan</span>
            </code>
          </pre>
        </div>

        <p>
          Faqat izohlar "use strict" dan yuqorida paydo bo'lishi mumkin.
        </p>

        <div className="my-6 p-4 bg-red-900/20 border-l-4 border-red-500 rounded-r">
          <p className="text-sm text-red-200">
            <strong className="text-red-100">Ogohlantirish:</strong> "use strict" ni bekor qilishning 
            yo'li yo'q. JavaScript dvigatelini eski xatti-harakatga qaytaradigan "no use strict" kabi 
            direktiva mavjud emas.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Brauzer konsoli
        </h2>

        <p>
          Kelajakda, kod namunalarini sinab ko'rish uchun brauzer konsolidan foydalansangiz, 
          e'tibor bering, u sukut bo'yicha "use strict" ishlatmaydi.
        </p>

        <p>
          Ba'zan, "use strict" farq qilganda, siz noto'g'ri natijalarni olishingiz mumkin.
        </p>

        <div className="my-6 p-4 bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r">
          <p className="text-sm text-yellow-200">
            <strong className="text-yellow-100">Maslahat:</strong> Konsolda "use strict" ishlatish uchun, 
            avval uni kiriting, so'ngra Shift+Enter tugmalarini bosing va keyin kodingizni yozing.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Har doim "use strict" ishlatish kerakmi?
        </h2>

        <p>
          Savol oddiy ko'rinadi, lekin bunday emas.
        </p>

        <p>
          Kimdir skriptni "use strict" bilan boshlashni maslahat berishi mumkin... Lekin bilasizmi, 
          nima zo'r?
        </p>

        <p>
          Zamonaviy JavaScript "klasslar" va "modullar" deb ataladigan ilg'or tuzilmalarni 
          qo'llab-quvvatlaydi (biz albatta ularga yetib boramiz), ular avtomatik ravishda "use strict" 
          ni yoqadi. Shuning uchun, agar biz ulardan foydalansak, uni qo'shishimiz shart emas.
        </p>

        <p>
          <strong className="text-white">Xulosa qilib aytganda:</strong> hozircha "use strict" haqida 
          umumiy ma'lumotga ega bo'lish yaxshi.
        </p>

        <p>
          Keyingi boblarda, tilning xususiyatlarini o'rganayotganimizda, qat'iy va eski rejimlar 
          o'rtasidagi farqlarni ko'rib chiqamiz. Yaxshiyamki, ularning ko'p emas va ular aslida hayotimizni 
          yaxshilaydi.
        </p>

        <p>
          Ushbu qo'llanmadagi barcha misollar, agar boshqacha ko'rsatilmagan bo'lsa, qat'iy rejimni 
          nazarda tutadi.
        </p>
      </div>
    </div>
  );
}
