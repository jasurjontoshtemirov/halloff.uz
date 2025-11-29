"use client";

import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { FileInput, Sparkles, CheckSquare, Play } from "lucide-react";

export default function CSSFormsPage() {
  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-500/30 rounded-full text-sm mb-6">
            <FileInput className="w-4 h-4 text-sky-400" />
            <span className="text-sky-300 font-semibold">CSS FORMS</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 mb-4">
            CSS Forms
          </h1>
          <p className="text-2xl text-gray-300">
            Formalarni professional qilish
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-12 bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-2xl p-8 hover:border-sky-500/40 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-sky-600 to-blue-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
          <p className="text-gray-400 mb-4">CSS Forms - Video dars</p>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-sky-500/50 transition-all">
            <div className="text-center">
              <Play className="w-16 h-16 text-sky-500 mx-auto mb-3" />
              <span className="text-gray-400 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Input Styling */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Input Stilash</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-medium text-blue-400 mb-4">Asosiy Input</h3>
            <CodeBlock 
              language="CSS"
              code={`input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"] {
    width: 100%;
    padding: 12px 20px;
    border: 2px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    transition: all 0.3s;
}

/* Focus state */
input:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}

/* Disabled state */
input:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 0.6;
}

/* Error state */
input.error {
    border-color: #f44336;
}

input.error:focus {
    box-shadow: 0 0 0 3px rgba(244, 67, 54, 0.1);
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-medium text-green-400 mb-4">Placeholder Stilash</h3>
            <CodeBlock 
              language="CSS"
              code={`input::placeholder {
    color: #999;
    opacity: 1;
}

input:focus::placeholder {
    opacity: 0.5;
}

/* Browser specific */
input::-webkit-input-placeholder {
    color: #999;
}

input::-moz-placeholder {
    color: #999;
}

input:-ms-input-placeholder {
    color: #999;
}`}
            />
          </div>
        </div>
      </div>

      {/* Textarea */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Textarea Stilash</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-purple-500/30">
          <CodeBlock 
            language="CSS"
            code={`textarea {
    width: 100%;
    padding: 12px 20px;
    border: 2px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    font-family: inherit;
    resize: vertical;  /* Faqat vertikal o'zgartirish */
    min-height: 100px;
    transition: all 0.3s;
}

textarea:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}

/* Resize yo'q */
textarea.no-resize {
    resize: none;
}

/* Auto height */
textarea.auto-height {
    overflow: hidden;
}`}
          />
        </div>
      </div>

      {/* Select */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Select Stilash</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-orange-500/30">
          <CodeBlock 
            language="CSS"
            code={`select {
    width: 100%;
    padding: 12px 20px;
    border: 2px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    cursor: pointer;
    appearance: none;  /* Default arrow ni o'chirish */
    background-image: url("data:image/svg+xml,...");  /* Custom arrow */
    background-repeat: no-repeat;
    background-position: right 10px center;
    transition: all 0.3s;
}

select:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}

/* Multiple select */
select[multiple] {
    height: auto;
    padding: 8px;
}

option {
    padding: 8px;
}`}
          />
        </div>
      </div>

      {/* Checkbox va Radio */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Checkbox va Radio</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-medium text-cyan-400 mb-4">Custom Checkbox</h3>
            <CodeBlock 
              language="CSS"
              code={`/* Default checkbox ni yashirish */
input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s;
}

input[type="checkbox"]:checked {
    background-color: #4CAF50;
    border-color: #4CAF50;
}

/* Checkmark */
input[type="checkbox"]:checked::after {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 14px;
}

input[type="checkbox"]:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-pink-500/30">
            <h3 className="text-xl font-medium text-pink-400 mb-4">Custom Radio</h3>
            <CodeBlock 
              language="CSS"
              code={`input[type="radio"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #ddd;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    transition: all 0.3s;
}

input[type="radio"]:checked {
    border-color: #4CAF50;
}

/* Inner circle */
input[type="radio"]:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #4CAF50;
    border-radius: 50%;
}

input[type="radio"]:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
}`}
            />
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Button Stilash</h2>
        
        <div className="space-y-6">
          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-red-500/30">
            <h3 className="text-xl font-medium text-red-400 mb-4">Asosiy Button</h3>
            <CodeBlock 
              language="CSS"
              code={`button,
input[type="submit"],
input[type="button"] {
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
}

/* Primary */
.btn-primary {
    background-color: #4CAF50;
    color: white;
}

.btn-primary:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
}

.btn-primary:active {
    transform: translateY(0);
}

/* Secondary */
.btn-secondary {
    background-color: #2196F3;
    color: white;
}

/* Danger */
.btn-danger {
    background-color: #f44336;
    color: white;
}

/* Outline */
.btn-outline {
    background-color: transparent;
    border: 2px solid #4CAF50;
    color: #4CAF50;
}

.btn-outline:hover {
    background-color: #4CAF50;
    color: white;
}`}
            />
          </div>

          <div className="bg-[#1a1f2e] p-6 rounded-xl border border-yellow-500/30">
            <h3 className="text-xl font-medium text-yellow-400 mb-4">Button O&apos;lchamlari</h3>
            <CodeBlock 
              language="CSS"
              code={`.btn-small {
    padding: 8px 16px;
    font-size: 14px;
}

.btn-medium {
    padding: 12px 24px;
    font-size: 16px;
}

.btn-large {
    padding: 16px 32px;
    font-size: 18px;
}

/* Full width */
.btn-block {
    width: 100%;
    display: block;
}`}
            />
          </div>
        </div>
      </div>

      {/* Form Layout */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">Form Layout</h2>
        
        <div className="bg-[#1a1f2e] p-6 rounded-xl border border-indigo-500/30">
          <CodeBlock 
            language="CSS"
            code={`/* Form container */
.form-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 30px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* Form group */
.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #333;
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
}

/* Error message */
.error-message {
    color: #f44336;
    font-size: 14px;
    margin-top: 5px;
}

/* Success message */
.success-message {
    color: #4CAF50;
    font-size: 14px;
    margin-top: 5px;
}

/* Inline form */
.form-inline {
    display: flex;
    gap: 10px;
    align-items: center;
}

.form-inline input {
    flex: 1;
}

/* Grid form */
.form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.form-grid .full-width {
    grid-column: 1 / -1;
}`}
          />
        </div>
      </div>

      {/* Amaliy mashq */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-500 p-8 rounded-r">
          <h2 className="text-3xl font-semibold text-gray-100 mb-4 flex items-center gap-3">
            <span className="text-4xl">💻</span> Amaliy mashq
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Form stilashni mashq qiling:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">1.</strong> Oddiy login form yarating (email, password, button)</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">2.</strong> Barcha inputlarga focus state qo&apos;shing</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">3.</strong> Custom checkbox va radio yarating</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300"><strong className="text-green-400">4.</strong> Hover va active state lar qo&apos;shing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Darsdagi topshiriqlar */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">📝</span> Darsdagi topshiriqlar
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 1: Ro&apos;yxatdan o&apos;tish formasi</h3>
              <p className="text-gray-300 mb-4">To&apos;liq registration form:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Ism, Email, Password, Confirm Password</li>
                <li>Checkbox (Shartlarga roziman)</li>
                <li>Submit button</li>
                <li>Barcha stillar</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 2: Aloqa formasi</h3>
              <p className="text-gray-300 mb-4">Contact form yarating:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Ism, Email, Mavzu (select)</li>
                <li>Xabar (textarea)</li>
                <li>Yuborish tugmasi</li>
                <li>Responsive dizayn</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-medium text-yellow-400 mb-3">Topshiriq 3: Survey form</h3>
              <p className="text-gray-300 mb-4">So&apos;rovnoma formasi:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Radio buttons (Jins)</li>
                <li>Checkboxes (Qiziqishlar)</li>
                <li>Range slider (Yosh)</li>
                <li>Chiroyli dizayn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Uyga Vazifa */}
      <div className="mb-12 bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-2xl p-8 hover:border-sky-500/40 transition-all">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">🏠</span> Uyga vazifa
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">1️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Multi-step form</h3>
                  <p className="text-gray-300 mb-4">3 bosqichli form yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Step 1: Shaxsiy ma&apos;lumotlar</li>
                    <li>Step 2: Aloqa ma&apos;lumotlari</li>
                    <li>Step 3: Tasdiqlash</li>
                    <li>Progress bar</li>
                    <li>Orqaga/Oldinga tugmalari</li>
                    <li>Validation</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 3-4 soat | 📊 Qiyinlik: Qiyin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <span className="text-3xl">2️⃣</span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-purple-400 mb-3">Payment form</h3>
                  <p className="text-gray-300 mb-4">To&apos;lov formasi yarating:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li>Karta raqami (formatted input)</li>
                    <li>Amal qilish muddati</li>
                    <li>CVV</li>
                    <li>Karta egasi</li>
                    <li>Real-time validation</li>
                    <li>Xavfsizlik ko&apos;rinishi</li>
                  </ul>
                  <div className="mt-4 bg-purple-500/10 p-3 rounded">
                    <p className="text-purple-300 text-sm">⏱️ Vaqt: 2.5-3 soat | 📊 Qiyinlik: Qiyin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <Link href="/docs/css/icons" 
              className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Oldingi: Icons
        </Link>
        
        <Link href="/docs/css/lists" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 group">
          Keyingi: Lists
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
