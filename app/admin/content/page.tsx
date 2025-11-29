"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAdmin } from "@/lib/auth";
import { 
  FileText, 
  ArrowLeft,
  Code2,
  Palette,
  Braces,
  Edit,
  Eye,
  Plus
} from "lucide-react";

export default function AdminContentPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  const htmlLessons = [
    { name: "Kirish", href: "/docs/html/intro", slug: "intro", path: "docs/html/intro/page.tsx" },
    { name: "Elementlar", href: "/docs/html/elements", slug: "elements", path: "docs/html/elements/page.tsx" },
    { name: "Atributlar", href: "/docs/html/attributes", slug: "attributes", path: "docs/html/attributes/page.tsx" },
    { name: "Ro'yxat va Jadvallar", href: "/docs/html/lists-tables", slug: "lists-tables", path: "docs/html/lists-tables/page.tsx" },
    { name: "Formalar", href: "/docs/html/forms", slug: "forms", path: "docs/html/forms/page.tsx" },
    { name: "Media", href: "/docs/html/media", slug: "media", path: "docs/html/media/page.tsx" },
    { name: "Semantic HTML", href: "/docs/html/semantic", slug: "semantic", path: "docs/html/semantic/page.tsx" },
  ];

  const cssLessons = [
    { name: "Kirish", href: "/docs/css/intro", slug: "intro", path: "docs/css/intro/page.tsx" },
    { name: "Selectors", href: "/docs/css/selectors", slug: "selectors", path: "docs/css/selectors/page.tsx" },
    { name: "Ranglar", href: "/docs/css/colors", slug: "colors", path: "docs/css/colors/page.tsx" },
    { name: "Box Model", href: "/docs/css/box-model", slug: "box-model", path: "docs/css/box-model/page.tsx" },
    { name: "Units", href: "/docs/css/units", slug: "units", path: "docs/css/units/page.tsx" },
    { name: "Text", href: "/docs/css/text", slug: "text", path: "docs/css/text/page.tsx" },
    { name: "Fonts", href: "/docs/css/fonts", slug: "fonts", path: "docs/css/fonts/page.tsx" },
    { name: "Icons", href: "/docs/css/icons", slug: "icons", path: "docs/css/icons/page.tsx" },
    { name: "Forms", href: "/docs/css/forms", slug: "forms", path: "docs/css/forms/page.tsx" },
    { name: "Lists", href: "/docs/css/lists", slug: "lists", path: "docs/css/lists/page.tsx" },
    { name: "Tables", href: "/docs/css/tables", slug: "tables", path: "docs/css/tables/page.tsx" },
    { name: "Position", href: "/docs/css/position", slug: "position", path: "docs/css/position/page.tsx" },
    { name: "Gradients", href: "/docs/css/gradients", slug: "gradients", path: "docs/css/gradients/page.tsx" },
    { name: "Flexbox", href: "/docs/css/flexbox", slug: "flexbox", path: "docs/css/flexbox/page.tsx" },
    { name: "Grid", href: "/docs/css/grid", slug: "grid", path: "docs/css/grid/page.tsx" },
    { name: "Transforms", href: "/docs/css/transforms", slug: "transforms", path: "docs/css/transforms/page.tsx" },
    { name: "Animations", href: "/docs/css/animations", slug: "animations", path: "docs/css/animations/page.tsx" },
    { name: "Responsive", href: "/docs/css/responsive", slug: "responsive", path: "docs/css/responsive/page.tsx" },
  ];

  const jsLessons = [
    { name: "Kirish", href: "/docs/javascript/intro", slug: "intro", path: "docs/javascript/intro/page.tsx" },
    { name: "Ma'lumot turlari", href: "/docs/javascript/data-types", slug: "data-types", path: "docs/javascript/data-types/page.tsx" },
    { name: "Operatorlar", href: "/docs/javascript/operators", slug: "operators", path: "docs/javascript/operators/page.tsx" },
    { name: "Shartlar", href: "/docs/javascript/conditions", slug: "conditions", path: "docs/javascript/conditions/page.tsx" },
    { name: "Sikllar", href: "/docs/javascript/loops", slug: "loops", path: "docs/javascript/loops/page.tsx" },
    { name: "Funksiyalar", href: "/docs/javascript/functions", slug: "functions", path: "docs/javascript/functions/page.tsx" },
  ];

  return (
    <div className="p-8">
        {/* HTML Lessons */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-white">HTML Darslari</h2>
            <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">
              {htmlLessons.length} ta dars
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {htmlLessons.map((lesson) => (
              <div key={lesson.slug} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-orange-500/50 transition">
                <h3 className="text-white font-medium mb-3">{lesson.name}</h3>
                <div className="flex gap-2">
                  <Link
                    href={lesson.href}
                    className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Ko'rish
                  </Link>
                  <Link
                    href={`/admin/content/edit?path=${encodeURIComponent(lesson.path)}&title=${encodeURIComponent(lesson.name)}`}
                    className="flex-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <Edit className="w-4 h-4" />
                    Tahrirlash
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CSS Lessons */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Palette className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-white">CSS Darslari</h2>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
              {cssLessons.length} ta dars
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cssLessons.map((lesson) => (
              <div key={lesson.slug} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-blue-500/50 transition">
                <h3 className="text-white font-medium mb-3">{lesson.name}</h3>
                <div className="flex gap-2">
                  <Link
                    href={lesson.href}
                    className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Ko'rish
                  </Link>
                  <Link
                    href={`/admin/content/edit?path=${encodeURIComponent(lesson.path)}&title=${encodeURIComponent(lesson.name)}`}
                    className="flex-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <Edit className="w-4 h-4" />
                    Tahrirlash
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* JavaScript Lessons */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Braces className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold text-white">JavaScript Darslari</h2>
            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
              {jsLessons.length}+ ta dars
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jsLessons.map((lesson) => (
              <div key={lesson.slug} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-yellow-500/50 transition">
                <h3 className="text-white font-medium mb-3">{lesson.name}</h3>
                <div className="flex gap-2">
                  <Link
                    href={lesson.href}
                    className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Ko'rish
                  </Link>
                  <Link
                    href={`/admin/content/edit?path=${encodeURIComponent(lesson.path)}&title=${encodeURIComponent(lesson.name)}`}
                    className="flex-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <Edit className="w-4 h-4" />
                    Tahrirlash
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              💡 JavaScript darslarining to'liq ro'yxati uchun tahrirlash sahifasiga o'ting
            </p>
          </div>
      </div>
    </div>
  );
}
