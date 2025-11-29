"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function JavaScriptAmaliyot3Page() {
  return (
    <div className="max-w-none">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm mb-6">
          <span className="text-2xl">🚀</span>
          <span className="text-green-300 font-semibold">AMALIYOT DARSI</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-100 mb-4">Amaliyot #3: Modal yasash</h1>
        <p className="text-xl text-gray-400">Interaktiv modal oyna yaratish - Kalkulyator yoki oddiy interaktiv ilova</p>
      </div>

      <div className="mb-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-8 border border-green-500/20">
        <h2 className="text-3xl font-semibold text-gray-100 mb-4">Loyiha Maqsadi</h2>
        <p className="text-gray-300 mb-4">
          Bu loyihada siz modal oyna (popup) yaratasz va uning ichida interaktiv dastur qo&apos;yasiz.
        </p>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <span>DOM manipulation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <span>Event listeners</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <span>CSS bilan ishlash</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 mt-1">✓</span>
            <span>classList manipulation</span>
          </li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">1-qadam: HTML va CSS</h2>
        <CodeBlock 
          language="html"
          code={`<!DOCTYPE html>
<html>
<head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 50px;
        }
        
        .open-btn {
            padding: 15px 30px;
            font-size: 18px;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        
        .open-btn:hover {
            background: #2980b9;
        }
        
        /* Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
        }
        
        .modal.active {
            display: flex;
        }
        
        .modal-content {
            background: white;
            padding: 30px;
            border-radius: 10px;
            width: 90%;
            max-width: 500px;
            position: relative;
        }
        
        .close-btn {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 30px;
            cursor: pointer;
            color: #999;
        }
        
        .close-btn:hover {
            color: #333;
        }
    </style>
</head>
<body>
    <button class="open-btn" id="openModal">Modal ochish</button>
    
    <div class="modal" id="modal">
        <div class="modal-content">
            <span class="close-btn" id="closeModal">&times;</span>
            <h2>Modal Oyna</h2>
            <p>Bu modal oyna ichidagi kontent</p>
        </div>
    </div>
</body>
</html>`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">2-qadam: JavaScript - Modal ochish/yopish</h2>
        <CodeBlock 
          language="javascript"
          code={`// Elementlarni olish
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');

// Modal ochish
openBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

// Modal yopish
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Tashqariga bosilganda yopish
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Escape tugmasi bilan yopish
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">3-qadam: Modal ichida Kalkulyator</h2>
        <CodeBlock 
          language="html"
          code={`<div class="modal-content">
    <span class="close-btn" id="closeModal">&times;</span>
    <h2>Kalkulyator</h2>
    
    <div class="calculator">
        <input type="text" id="display" readonly>
        <div class="buttons">
            <button onclick="appendNumber('7')">7</button>
            <button onclick="appendNumber('8')">8</button>
            <button onclick="appendNumber('9')">9</button>
            <button onclick="setOperator('+')">+</button>
            
            <button onclick="appendNumber('4')">4</button>
            <button onclick="appendNumber('5')">5</button>
            <button onclick="appendNumber('6')">6</button>
            <button onclick="setOperator('-')">-</button>
            
            <button onclick="appendNumber('1')">1</button>
            <button onclick="appendNumber('2')">2</button>
            <button onclick="appendNumber('3')">3</button>
            <button onclick="setOperator('*')">×</button>
            
            <button onclick="clearDisplay()">C</button>
            <button onclick="appendNumber('0')">0</button>
            <button onclick="calculate()">=</button>
            <button onclick="setOperator('/')">÷</button>
        </div>
    </div>
</div>

<style>
    .calculator {
        margin-top: 20px;
    }
    
    #display {
        width: 100%;
        padding: 15px;
        font-size: 24px;
        text-align: right;
        margin-bottom: 10px;
        border: 2px solid #ddd;
        border-radius: 5px;
    }
    
    .buttons {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    }
    
    .buttons button {
        padding: 20px;
        font-size: 18px;
        border: none;
        background: #f0f0f0;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .buttons button:hover {
        background: #e0e0e0;
    }
</style>`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">4-qadam: Kalkulyator logikasi</h2>
        <CodeBlock 
          language="javascript"
          code={`let currentNumber = '';
let previousNumber = '';
let operator = '';

const display = document.getElementById('display');

function appendNumber(num) {
    currentNumber += num;
    updateDisplay();
}

function setOperator(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    if (previousNumber === '' || currentNumber === '') return;
    
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    
    currentNumber = result.toString();
    operator = '';
    previousNumber = '';
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentNumber || '0';
}`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">To&apos;liq Kod</h2>
        <CodeBlock 
          language="html"
          code={`<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Modal Kalkulyator</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            text-align: center;
        }
        
        h1 {
            color: white;
            margin-bottom: 30px;
        }
        
        .open-btn {
            padding: 15px 40px;
            font-size: 18px;
            background: white;
            color: #667eea;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            transition: all 0.3s;
        }
        
        .open-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 7px 20px rgba(0,0,0,0.3);
        }
        
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        
        .modal.active {
            display: flex;
        }
        
        .modal-content {
            background: white;
            padding: 30px;
            border-radius: 15px;
            width: 90%;
            max-width: 400px;
            position: relative;
            animation: slideDown 0.3s ease;
        }
        
        @keyframes slideDown {
            from {
                transform: translateY(-50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        .close-btn {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 30px;
            cursor: pointer;
            color: #999;
            transition: color 0.3s;
        }
        
        .close-btn:hover {
            color: #333;
        }
        
        .calculator {
            margin-top: 20px;
        }
        
        #display {
            width: 100%;
            padding: 20px;
            font-size: 28px;
            text-align: right;
            margin-bottom: 15px;
            border: 2px solid #ddd;
            border-radius: 10px;
            background: #f9f9f9;
        }
        
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        
        .buttons button {
            padding: 20px;
            font-size: 20px;
            border: none;
            background: #f0f0f0;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.2s;
        }
        
        .buttons button:hover {
            background: #667eea;
            color: white;
            transform: scale(1.05);
        }
        
        .buttons button:active {
            transform: scale(0.95);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Modal Kalkulyator</h1>
        <button class="open-btn" id="openModal">Kalkulyatorni ochish</button>
    </div>
    
    <div class="modal" id="modal">
        <div class="modal-content">
            <span class="close-btn" id="closeModal">&times;</span>
            <h2 style="text-align: center; margin-bottom: 10px;">Kalkulyator</h2>
            
            <div class="calculator">
                <input type="text" id="display" value="0" readonly>
                <div class="buttons">
                    <button onclick="appendNumber('7')">7</button>
                    <button onclick="appendNumber('8')">8</button>
                    <button onclick="appendNumber('9')">9</button>
                    <button onclick="setOperator('+')">+</button>
                    
                    <button onclick="appendNumber('4')">4</button>
                    <button onclick="appendNumber('5')">5</button>
                    <button onclick="appendNumber('6')">6</button>
                    <button onclick="setOperator('-')">-</button>
                    
                    <button onclick="appendNumber('1')">1</button>
                    <button onclick="appendNumber('2')">2</button>
                    <button onclick="appendNumber('3')">3</button>
                    <button onclick="setOperator('*')">×</button>
                    
                    <button onclick="clearDisplay()">C</button>
                    <button onclick="appendNumber('0')">0</button>
                    <button onclick="calculate()">=</button>
                    <button onclick="setOperator('/')">÷</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Modal
        const openBtn = document.getElementById('openModal');
        const closeBtn = document.getElementById('closeModal');
        const modal = document.getElementById('modal');

        openBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });

        // Kalkulyator
        let currentNumber = '';
        let previousNumber = '';
        let operator = '';
        const display = document.getElementById('display');

        function appendNumber(num) {
            if (currentNumber === '0') {
                currentNumber = num;
            } else {
                currentNumber += num;
            }
            updateDisplay();
        }

        function setOperator(op) {
            if (currentNumber === '') return;
            if (previousNumber !== '') {
                calculate();
            }
            operator = op;
            previousNumber = currentNumber;
            currentNumber = '';
        }

        function calculate() {
            if (previousNumber === '' || currentNumber === '') return;
            
            let result;
            const prev = parseFloat(previousNumber);
            const current = parseFloat(currentNumber);
            
            switch (operator) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        alert('Nolga bo\\'lib bo\\'lmaydi!');
                        clearDisplay();
                        return;
                    }
                    result = prev / current;
                    break;
                default:
                    return;
            }
            
            currentNumber = result.toString();
            operator = '';
            previousNumber = '';
            updateDisplay();
        }

        function clearDisplay() {
            currentNumber = '';
            previousNumber = '';
            operator = '';
            display.value = '0';
        }

        function updateDisplay() {
            display.value = currentNumber || '0';
        }
    </script>
</body>
</html>`}
        />
      </div>

      <div className="mb-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border border-blue-500/20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">💡</span>
          <h2 className="text-3xl font-semibold text-gray-100">Bonus Vazifalar</h2>
        </div>
        
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">1.</span>
            <div>
              <strong>Keyboard support:</strong> Klaviatura orqali ham ishlash (raqamlar va operatorlar)
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">2.</span>
            <div>
              <strong>Tarix:</strong> Oxirgi hisob-kitoblarni ko&apos;rsatish
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">3.</span>
            <div>
              <strong>Qo&apos;shimcha funksiyalar:</strong> %, √, x²
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">4.</span>
            <div>
              <strong>Theme:</strong> Dark/Light mode
            </div>
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link 
          href="/docs/javascript/dom-events" 
          className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: DOM HODISA
        </Link>
        
        <Link 
          href="/docs/javascript/regex" 
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group"
        >
          Keyingi: RegEX
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
