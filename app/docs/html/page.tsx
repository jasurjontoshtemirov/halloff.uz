"use client";

import Link from "next/link";
import { Code, FileText, List, Image, Globe, CheckCircle, ArrowRight, Play, BookOpen } from "lucide-react";

export default function HTMLPage() {
  const lessons = [
    {
      id: 1,
      title: "HTML ga kirish",
      description: "HTML nima va u qanday ishlaydi",
      path: "/docs/html/intro",
      icon: <Globe className="w-5 h-5" />,
      difficulty: "Boshlang'ich",
      duration: "15 daqiqa",
      completed: false
    },
    {
      id: 2,
      title: "HTML Elementlar",
      description: "Asosiy HTML teglar va ularning ishlatilishi",
      path: "/docs/html/elements",
      icon: <Code className="w-5 h-5" />,
      difficulty: "Boshlang'ich",
      duration: "20 daqiqa",
      completed: false
    },
    {
      id: 3,
      title: "Ro'yxatlar va Jadvallar",
      description: "HTML'da ro'yxatlar va jadvallar yaratish",
      path: "/docs/html/lists-tables",
      icon: <List className="w-5 h-5" />,
      difficulty: "Boshlang'ich",
      duration: "18 daqiqa",
      completed: false
    },
    {
      id: 4,
      title: "Rasm va Media",
      description: "Rasmlar, videolar va audio fayllar qo'shish",
      path: "/docs/html/media",
      icon: <Image className="w-5 h-5" />,
      difficulty: "Boshlang'ich",
      duration: "22 daqiqa",
      completed: false
    },
    {
      id: 5,
      title: "HTML Formalar",
      description: "Foydalanuvchi ma'lumotlarini yig'ish uchun formalar",
      path: "/docs/html/forms",
      icon: <FileText className="w-5 h-5" />,
      difficulty: "O'rta",
      duration: "25 daqiqa",
      completed: false
    },
    {
      id: 6,
      title: "Semantik HTML",
      description: "Ma'noli va tuzilgan HTML yozish",
      path: "/docs/html/semantic",
      icon: <BookOpen className="w-5 h-5" />,
      difficulty: "O'rta",
      duration: "20 daqiqa",
      completed: false
    }
  ];

  return (
    <div className="max-w-none">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-sm mb-6">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">5</span>
            </div>
            <span className="text-orange-300 font-semibold">HTML KURSI</span>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 mb-4">
            HTML Asoslari
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Veb sahifalar yaratishning asoslarini o'rganing
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>6 ta dars</span>
            </div>
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4 text-blue-400" />
              <span>Video darslar</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Amaliy mashqlar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="mb-12 bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/20 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">Kurs haqida</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          HTML (HyperText Markup Language) - bu veb sahifalar yaratish uchun asosiy til. 
          Bu kursda siz HTML'ning barcha asosiy tushunchalarini o'rganasiz va o'z veb sahifangizni yaratishni boshlaysiz.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">6</div>
            <div className="text-gray-400 text-sm">Darslar soni</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">2</div>
            <div className="text-gray-400 text-sm">Soat davomiyligi</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
            <div className="text-gray-400 text-sm">Amaliyot</div>
          </div>
        </div>
      </div>

      {/* Lessons */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-100 mb-8">Darslar ro'yxati</h2>
        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.id}
              href={lesson.path}
              className="block group"
            >
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-gradient-to-r hover:from-orange-500/5 hover:to-red-500/5 transition-all">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center text-white font-bold">
                      {lesson.id}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {lesson.icon}
                      <h3 className="text-xl font-semibold text-gray-100 group-hover:text-orange-300 transition-colors">
                        {lesson.title}
                      </h3>
                      {lesson.completed && (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      )}
                    </div>
                    <p className="text-gray-400 mb-3">{lesson.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded">
                        {lesson.difficulty}
                      </span>
                      <span>{lesson.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">Keyingi qadamlar</h2>
        <p className="text-gray-300 mb-6">
          HTML asoslarini o'rgangandan keyin CSS bilan sahifalaringizni chiroyli qiling!
        </p>
        <Link
          href="/docs/css"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg transition-all font-semibold"
        >
          CSS kursiga o'tish
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}