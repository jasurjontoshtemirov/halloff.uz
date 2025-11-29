"use client";

import { useState } from "react";
import InlineEditor from "@/components/InlineEditor";
import { getCurrentUser } from "@/lib/auth";

export default function DemoEditPage() {
  const [user, setUser] = useState<any>(null);

  // Check if admin
  useState(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  });

  const handleSave = async (content: string) => {
    // Simulate save
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Saved content:", content);
        resolve(true);
      }, 1000);
    });
  };

  if (!user || user.role !== 'admin') {
    return (
      <div className="p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Ruxsat yo'q</h1>
          <p className="text-gray-400">Faqat admin'lar bu sahifani ko'ra oladi</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Inline Editing Demo</h1>
        <p className="text-gray-400">Notion'ga o'xshash inline tahrirlash</p>
      </div>

      {/* Editable Title */}
      <InlineEditor onSave={handleSave} className="mb-8">
        <h1 className="text-5xl font-bold text-gray-100 mb-4">
          JavaScript Tsikllar (Loops)
        </h1>
      </InlineEditor>

      {/* Editable Subtitle */}
      <InlineEditor onSave={handleSave} className="mb-12">
        <p className="text-xl text-gray-400">
          for, while, do-while - takrorlanuvchi amallar haqida to'liq ma'lumot
        </p>
      </InlineEditor>

      {/* Editable Section */}
      <InlineEditor onSave={handleSave} className="mb-12">
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🎥</span>
            <h2 className="text-2xl font-semibold text-gray-100">Video Dars</h2>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-8 text-center">
            <p className="text-gray-400 mb-4">Tsikllar - Video dars</p>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Video joylashuvi</span>
            </div>
          </div>
        </div>
      </InlineEditor>

      {/* Editable Content */}
      <InlineEditor onSave={handleSave} className="mb-12">
        <div>
          <h2 className="text-3xl font-semibold text-gray-100 mb-6">for Loop</h2>
          <p className="text-gray-300 mb-4">
            for - eng ko'p ishlatiladigan tsikl. Necha marta takrorlanishini bilsangiz ishlatiladi.
          </p>
          <p className="text-gray-300 mb-4">
            Bu yerda siz istalgan matnni tahrirlashingiz mumkin. Hover qiling va edit tugmasini bosing!
          </p>
        </div>
      </InlineEditor>

      {/* Editable List */}
      <InlineEditor onSave={handleSave} className="mb-12">
        <div>
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">Tsikl turlari:</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>for loop</strong> - aniq marta takrorlash</li>
            <li><strong>while loop</strong> - shart true bo'lguncha</li>
            <li><strong>do-while loop</strong> - kamida 1 marta bajarish</li>
            <li><strong>for...in loop</strong> - obyekt kalitlari uchun</li>
            <li><strong>for...of loop</strong> - array elementlari uchun</li>
          </ul>
        </div>
      </InlineEditor>

      {/* Instructions */}
      <div className="mt-16 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-400 mb-3">🎯 Qanday ishlatish:</h3>
        <div className="space-y-2 text-sm text-gray-300">
          <p>1. <strong>Hover qiling</strong> - Tahrirlash tugmasi paydo bo'ladi</p>
          <p>2. <strong>Edit tugmasini bosing</strong> - Inline editing boshlanadi</p>
          <p>3. <strong>Matnni tahrirlang</strong> - To'g'ridan-to'g'ri yozing</p>
          <p>4. <strong>Ctrl+S</strong> - Saqlash yoki "Saqlash" tugmasini bosing</p>
          <p>5. <strong>Esc</strong> - Bekor qilish yoki "Bekor qilish" tugmasini bosing</p>
        </div>
      </div>
    </div>
  );
}