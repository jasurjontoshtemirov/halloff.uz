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

export default function VariablesPage() {
  return (
    <div className="prose-dark max-w-none">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span>JavaScript</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          O'zgaruvchilar
        </h1>
      </div>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          Ko'pincha, JavaScript dasturida ma'lumotlar bilan ishlashimiz kerak. Mana ikkita misol:
        </p>

        <ol className="space-y-2">
          <li>Onlayn do'kon – ma'lumotlar sotilayotgan tovarlar va xarid savatchasini o'z ichiga olishi mumkin.</li>
          <li>Chat dasturi – ma'lumotlar foydalanuvchilar, xabarlar va boshqalarni o'z ichiga olishi mumkin.</li>
        </ol>

        <p>
          O'zgaruvchilar bu ma'lumotlarni saqlash uchun ishlatiladi.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          O'zgaruvchi
        </h2>

        <p>
          <strong className="text-white">O'zgaruvchi</strong> – bu ma'lumotlar uchun "nomlangan xotira". 
          Biz o'zgaruvchilardan tovarlar, tashrif buyuruvchilar va boshqa ma'lumotlarni saqlash uchun 
          foydalanishimiz mumkin.
        </p>

        <p>
          JavaScript'da o'zgaruvchi yaratish uchun <code>let</code> kalit so'zidan foydalanamiz.
        </p>

        <div className="code-block-wrapper">
          <CopyButton code={`let message;

message = 'Salom';

alert(message); // o'zgaruvchi qiymatini ko'rsatadi`} />
          <pre>
            <code>
              <span style={{ color: '#c586c0' }}>let</span> <span style={{ color: '#9cdcfe' }}>message</span>;{'\n\n'}
              <span style={{ color: '#9cdcfe' }}>message</span> = <span style={{ color: '#ce9178' }}>'Salom'</span>;{'\n\n'}
              <span style={{ color: '#dcdcaa' }}>alert</span>(<span style={{ color: '#9cdcfe' }}>message</span>); <span style={{ color: '#6a9955', fontStyle: 'italic' }}>// o'zgaruvchi qiymatini ko'rsatadi</span>
            </code>
          </pre>
        </div>

        <p>
          String o'zgaruvchiga saqlanadi va keyin o'zgaruvchi nomi orqali unga murojaat qilinadi:
        </p>

        <p>
          Qisqaroq qilish uchun, biz o'zgaruvchini e'lon qilish va qiymat berishni bitta qatorda 
          birlashtirishimiz mumkin:
        </p>

        <div className="code-block-wrapper">
          <CopyButton code={`let message = 'Salom!'; // o'zgaruvchini e'lon qilish va qiymat berish

alert(message); // Salom!`} />
          <pre>
            <code>
              <span style={{ color: '#c586c0' }}>let</span> <span style={{ color: '#9cdcfe' }}>message</span> = <span style={{ color: '#ce9178' }}>'Salom!'</span>; <span style={{ color: '#6a9955', fontStyle: 'italic' }}>// o'zgaruvchini e'lon qilish va qiymat berish</span>{'\n\n'}
              <span style={{ color: '#dcdcaa' }}>alert</span>(<span style={{ color: '#9cdcfe' }}>message</span>); <span style={{ color: '#6a9955', fontStyle: 'italic' }}>// Salom!</span>
            </code>
          </pre>
        </div>

        <p>
          Biz bir qatorda bir nechta o'zgaruvchilarni ham e'lon qilishimiz mumkin:
        </p>

        <div className="code-block-wrapper">
          <CopyButton code={`let user = 'John', age = 25, message = 'Salom';`} />
          <pre>
            <code>
              <span style={{ color: '#c586c0' }}>let</span> <span style={{ color: '#9cdcfe' }}>user</span> = <span style={{ color: '#ce9178' }}>'John'</span>, <span style={{ color: '#9cdcfe' }}>age</span> = <span style={{ color: '#b5cea8' }}>25</span>, <span style={{ color: '#9cdcfe' }}>message</span> = <span style={{ color: '#ce9178' }}>'Salom'</span>;
            </code>
          </pre>
        </div>

        <p>
          Bu qisqaroq ko'rinishi mumkin, lekin biz buni tavsiya qilmaymiz. Yaxshiroq o'qilishi uchun, 
          har bir o'zgaruvchi uchun bitta qator ishlatamiz.
        </p>

        <div className="code-block-wrapper">
          <CopyButton code={`let user = 'John';
let age = 25;
let message = 'Salom';`} />
          <pre>
            <code>
              <span style={{ color: '#c586c0' }}>let</span> <span style={{ color: '#9cdcfe' }}>user</span> = <span style={{ color: '#ce9178' }}>'John'</span>;{'\n'}
              <span style={{ color: '#c586c0' }}>let</span> <span style={{ color: '#9cdcfe' }}>age</span> = <span style={{ color: '#b5cea8' }}>25</span>;{'\n'}
              <span style={{ color: '#c586c0' }}>let</span> <span style={{ color: '#9cdcfe' }}>message</span> = <span style={{ color: '#ce9178' }}>'Salom'</span>;
            </code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          O'zgaruvchi nomlash
        </h2>

        <p>
          JavaScript'da o'zgaruvchi nomiga ikkita cheklov bor:
        </p>

        <ol className="space-y-2">
          <li>Nom faqat harflar, raqamlar yoki <code>$</code> va <code>_</code> belgilarini o'z ichiga olishi kerak.</li>
          <li>Birinchi belgi raqam bo'lmasligi kerak.</li>
        </ol>

        <p>
          To'g'ri nomlar misollari:
        </p>

        <div className="code-block-wrapper">
          <CopyButton code={`let userName;
let test123;`} />
          <pre>
            <code>
              <span style={{ color: '#c586c0' }}>let</span> <span style={{ color: '#9cdcfe' }}>userName</span>;{'\n'}
              <span style={{ color: '#c586c0' }}>let</span> <span style={{ color: '#9cdcfe' }}>test123</span>;
            </code>
          </pre>
        </div>

        <div className="my-6 p-4 bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r">
          <p className="text-sm text-yellow-200">
            <strong className="text-yellow-100">Eslatma:</strong> Katta-kichik harflar muhim. 
            <code className="bg-yellow-900/30 px-1 py-0.5 rounded">apple</code> va{' '}
            <code className="bg-yellow-900/30 px-1 py-0.5 rounded">APPLE</code> – bu ikki xil o'zgaruvchi.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Konstantalar
        </h2>

        <p>
          O'zgarmas (o'zgarmaydigan) o'zgaruvchini e'lon qilish uchun <code>let</code> o'rniga{' '}
          <code>const</code> dan foydalaning:
        </p>

        <div className="code-block-wrapper">
          <CopyButton code={`const myBirthday = '18.04.1982';`} />
          <pre>
            <code>
              <span style={{ color: '#c586c0' }}>const</span> <span style={{ color: '#9cdcfe' }}>myBirthday</span> = <span style={{ color: '#ce9178' }}>'18.04.1982'</span>;
            </code>
          </pre>
        </div>

        <p>
          <code>const</code> yordamida e'lon qilingan o'zgaruvchilar "konstantalar" deb ataladi. 
          Ularni o'zgartirib bo'lmaydi. Buning uchun harakat qilish xatoga olib keladi:
        </p>

        <div className="code-block-wrapper">
          <CopyButton code={`const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // xato, konstantani qayta tayinlab bo'lmaydi!`} />
          <pre>
            <code>
              <span style={{ color: '#c586c0' }}>const</span> <span style={{ color: '#9cdcfe' }}>myBirthday</span> = <span style={{ color: '#ce9178' }}>'18.04.1982'</span>;{'\n\n'}
              <span style={{ color: '#9cdcfe' }}>myBirthday</span> = <span style={{ color: '#ce9178' }}>'01.01.2001'</span>; <span style={{ color: '#6a9955', fontStyle: 'italic' }}>// xato, konstantani qayta tayinlab bo'lmaydi!</span>
            </code>
          </pre>
        </div>

        <div className="my-6 p-4 bg-blue-900/20 border-l-4 border-blue-500 rounded-r">
          <p className="text-sm text-blue-200">
            <strong className="text-blue-100">Yaxshi amaliyot:</strong> Agar dasturchi o'zgaruvchi 
            hech qachon o'zgarmasligiga ishonch hosil qilsa, uni <code>const</code> bilan e'lon qilish 
            kerak, bu haqiqatni barchaga aniq bildiradi.
          </p>
        </div>
      </div>
    </div>
  );
}
