"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function JavaScriptStylesPage() {
  return (
    <div className="max-w-none">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-100 mb-4">Styles, ClassList, SetAttribute & GetAttribute</h1>
        <p className="text-xl text-gray-400">CSS stillarni JavaScript orqali boshqarish</p>
      </div>

      <div className="mb-12 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🎥</span>
          <h2 className="text-2xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-8 text-center">
          <p className="text-gray-400 mb-4">Styles va ClassList - Video dars</p>
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-lg">Video joylashuvi</span>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">style Property</h2>
        <p className="text-gray-300 mb-4">
          style property orqali elementning inline CSS stillarini o&apos;zgartirish mumkin.
        </p>
        <CodeBlock 
          language="html"
          code={`<!-- HTML -->
<h1 id="title">Salom Dunyo!</h1>
<p id="text">Bu paragraf</p>

<script>
    let title = document.getElementById('title');
    let text = document.getElementById('text');
    
    // Rang o'zgartirish
    title.style.color = 'red';
    title.style.backgroundColor = 'yellow';
    
    // O'lcham
    title.style.fontSize = '50px';
    title.style.fontWeight = 'bold';
    
    // Padding va margin
    text.style.padding = '20px';
    text.style.margin = '10px';
    
    // Border
    text.style.border = '2px solid blue';
    text.style.borderRadius = '10px';
    
    // Ko'p stillar
    title.style.cssText = 'color: blue; font-size: 40px; text-align: center;';
</script>`}
        />

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
          <p className="text-yellow-200 text-sm">
            <strong>Eslatma:</strong> CSS da background-color, JavaScript da backgroundColor (camelCase) bo&apos;ladi.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">classList Property</h2>
        <p className="text-gray-300 mb-4">
          classList orqali elementning CSS classlarini boshqarish mumkin.
        </p>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">add() - Class qo&apos;shish</h3>
        <CodeBlock 
          language="html"
          code={`<!-- HTML -->
<style>
    .active { color: green; font-weight: bold; }
    .highlight { background-color: yellow; }
    .large { font-size: 30px; }
</style>

<p id="text">Bu paragraf</p>

<script>
    let text = document.getElementById('text');
    
    // Bitta class qo'shish
    text.classList.add('active');
    
    // Bir nechta class qo'shish
    text.classList.add('highlight', 'large');
    
    console.log(text.classList); // DOMTokenList(3) ["active", "highlight", "large"]
</script>`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">remove() - Class o&apos;chirish</h3>
        <CodeBlock 
          language="javascript"
          code={`let text = document.getElementById('text');

// Bitta class o'chirish
text.classList.remove('active');

// Bir nechta class o'chirish
text.classList.remove('highlight', 'large');`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">toggle() - Class almashtirish</h3>
        <CodeBlock 
          language="javascript"
          code={`let text = document.getElementById('text');

// Agar bor bo'lsa o'chiradi, yo'q bo'lsa qo'shadi
text.classList.toggle('active');

// Button bilan
let btn = document.getElementById('btn');
btn.onclick = function() {
    text.classList.toggle('highlight');
};`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">contains() - Class bormi?</h3>
        <CodeBlock 
          language="javascript"
          code={`let text = document.getElementById('text');

// Class borligini tekshirish
if (text.classList.contains('active')) {
    console.log('Active class bor');
} else {
    console.log('Active class yo\\'q');
}

// Misol
let btn = document.getElementById('btn');
btn.onclick = function() {
    if (text.classList.contains('hidden')) {
        text.classList.remove('hidden');
        btn.textContent = 'Yashirish';
    } else {
        text.classList.add('hidden');
        btn.textContent = 'Ko\\'rsatish';
    }
};`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">replace() - Class almashtirish</h3>
        <CodeBlock 
          language="javascript"
          code={`let text = document.getElementById('text');

// Eski classni yangi class bilan almashtirish
text.classList.replace('old-class', 'new-class');`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">getAttribute() va setAttribute()</h2>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">getAttribute() - Atributni o&apos;qish</h3>
        <CodeBlock 
          language="html"
          code={`<!-- HTML -->
<img id="photo" src="image.jpg" alt="Rasm" width="300">
<a id="link" href="https://google.com" target="_blank">Google</a>
<input id="input" type="text" value="Salom" placeholder="Matn kiriting">

<script>
    let img = document.getElementById('photo');
    let link = document.getElementById('link');
    let input = document.getElementById('input');
    
    // Atributlarni o'qish
    console.log(img.getAttribute('src'));    // "image.jpg"
    console.log(img.getAttribute('alt'));    // "Rasm"
    console.log(img.getAttribute('width'));  // "300"
    
    console.log(link.getAttribute('href'));   // "https://google.com"
    console.log(link.getAttribute('target')); // "_blank"
    
    console.log(input.getAttribute('type'));        // "text"
    console.log(input.getAttribute('value'));       // "Salom"
    console.log(input.getAttribute('placeholder')); // "Matn kiriting"
</script>`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">setAttribute() - Atributni o&apos;zgartirish</h3>
        <CodeBlock 
          language="javascript"
          code={`let img = document.getElementById('photo');
let link = document.getElementById('link');
let input = document.getElementById('input');

// Atributlarni o'zgartirish
img.setAttribute('src', 'new-image.jpg');
img.setAttribute('alt', 'Yangi rasm');
img.setAttribute('width', '500');

link.setAttribute('href', 'https://youtube.com');
link.setAttribute('target', '_self');

input.setAttribute('type', 'password');
input.setAttribute('value', 'Yangi qiymat');
input.setAttribute('placeholder', 'Parol kiriting');

// Yangi atribut qo'shish
img.setAttribute('data-id', '123');
img.setAttribute('title', 'Bu rasm');`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">hasAttribute() va removeAttribute()</h3>
        <CodeBlock 
          language="javascript"
          code={`let img = document.getElementById('photo');

// Atribut bormi?
if (img.hasAttribute('alt')) {
    console.log('Alt atributi bor');
}

// Atributni o'chirish
img.removeAttribute('width');
img.removeAttribute('alt');`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Amaliy Misollar</h2>
        
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">1. Dark Mode</h3>
        <CodeBlock 
          language="html"
          code={`<!DOCTYPE html>
<html>
<head>
    <style>
        body { transition: 0.3s; }
        body.dark {
            background-color: #1a1a1a;
            color: white;
        }
        .toggle-btn {
            padding: 10px 20px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Dark Mode</h1>
    <button class="toggle-btn" onclick="toggleDarkMode()">
        Dark Mode
    </button>

    <script>
        function toggleDarkMode() {
            document.body.classList.toggle('dark');
            
            let btn = document.querySelector('.toggle-btn');
            if (document.body.classList.contains('dark')) {
                btn.textContent = 'Light Mode';
            } else {
                btn.textContent = 'Dark Mode';
            }
        }
    </script>
</body>
</html>`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">2. Accordion (Ochiluvchi panel)</h3>
        <CodeBlock 
          language="html"
          code={`<!DOCTYPE html>
<html>
<head>
    <style>
        .accordion { cursor: pointer; padding: 10px; background: #eee; }
        .panel { display: none; padding: 10px; }
        .panel.active { display: block; }
    </style>
</head>
<body>
    <div class="accordion" onclick="togglePanel(this)">
        Savol 1
    </div>
    <div class="panel">
        Bu birinchi javob
    </div>

    <div class="accordion" onclick="togglePanel(this)">
        Savol 2
    </div>
    <div class="panel">
        Bu ikkinchi javob
    </div>

    <script>
        function togglePanel(element) {
            let panel = element.nextElementSibling;
            panel.classList.toggle('active');
        }
    </script>
</body>
</html>`}
        />

        <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">3. Tabs (Yorliqlar)</h3>
        <CodeBlock 
          language="html"
          code={`<!DOCTYPE html>
<html>
<head>
    <style>
        .tab { display: inline-block; padding: 10px; cursor: pointer; }
        .tab.active { background: blue; color: white; }
        .content { display: none; padding: 20px; }
        .content.active { display: block; }
    </style>
</head>
<body>
    <div class="tab active" onclick="showTab(0)">Tab 1</div>
    <div class="tab" onclick="showTab(1)">Tab 2</div>
    <div class="tab" onclick="showTab(2)">Tab 3</div>

    <div class="content active">Tab 1 content</div>
    <div class="content">Tab 2 content</div>
    <div class="content">Tab 3 content</div>

    <script>
        function showTab(index) {
            // Barcha tablarni o'chirish
            let tabs = document.querySelectorAll('.tab');
            let contents = document.querySelectorAll('.content');
            
            tabs.forEach(tab => tab.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));
            
            // Tanlangan tabni yoqish
            tabs[index].classList.add('active');
            contents[index].classList.add('active');
        }
    </script>
</body>
</html>`}
        />
      </div>

      <div className="mb-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">💻</span>
          <h2 className="text-2xl font-semibold text-gray-100">Amaliy Mashq</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 1: Rang o&apos;zgartiruvchi</h3>
            <p className="text-gray-300">
              Button bosilganda elementning rangini tasodifiy o&apos;zgartiring.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 2: Show/Hide</h3>
            <p className="text-gray-300">
              Button bosilganda elementni ko&apos;rsatish/yashirish (classList.toggle).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">Mashq 3: Active class</h3>
            <p className="text-gray-300">
              Ro&apos;yxatdagi elementga bosilganda active class qo&apos;shing, qolganlaridan olib tashlang.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">📝</span>
          <h2 className="text-2xl font-semibold text-gray-100">Topshiriq</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">1. Theme Switcher</h3>
            <p className="text-gray-300">
              3 xil tema (light, dark, blue) o&apos;rtasida almashtirish imkoniyati yarating.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">2. Image Gallery</h3>
            <p className="text-gray-300">
              Rasmlar galereyasi yarating. Bosilgan rasm kattaroq ko&apos;rinsin (active class).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">3. Dropdown Menu</h3>
            <p className="text-gray-300">
              Dropdown menu yarating. Bosilganda ochilsin, yana bosilganda yopilsin.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🏠</span>
          <h2 className="text-2xl font-semibold text-gray-100">Uyga Vazifa</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">1. Rang o&apos;zgartiruvchi</h3>
            <p className="text-gray-300">
              Tugma yarating. Har safar bosilganda sahifa fon rangi tasodifiy rangga o&apos;zgarsin. Rangni RGB formatda yarating.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">2. Matn stilini boshqarish</h3>
            <p className="text-gray-300 mb-3">
              Matn va 5 ta tugma yarating:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>Bold - qalin qilish</li>
              <li>Italic - qiyshiq qilish</li>
              <li>Underline - chiziq qo&apos;yish</li>
              <li>Rang o&apos;zgartirish</li>
              <li>Shrift o&apos;lchami o&apos;zgartirish</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">3. Animatsiya boshqaruvchi</h3>
            <p className="text-gray-300">
              Kvadrat yarating va tugmalar orqali uning pozitsiyasini, o&apos;lchamini, rangini va aylanishini boshqaring. Har bir o&apos;zgarish animatsiya bilan bo&apos;lsin.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link 
          href="/docs/javascript/dom" 
          className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: DOM
        </Link>
        
        <Link 
          href="/docs/javascript/dom-events" 
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group"
        >
          Keyingi: DOM HODISA
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
