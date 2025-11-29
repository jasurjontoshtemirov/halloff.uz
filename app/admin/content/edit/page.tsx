"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FileText, ArrowLeft } from "lucide-react";
import RichTextEditor from "@/components/RichTextEditor";
import Link from "next/link";

function EditContentForm() {
  const searchParams = useSearchParams();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  
  const lessonPath = searchParams.get("path") || "";
  const lessonTitle = searchParams.get("title") || "";

  useEffect(() => {
    if (lessonPath) {
      setTitle(lessonTitle);
      loadContent();
    }
  }, [lessonPath, lessonTitle]);

  const loadContent = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/content/get?path=${encodeURIComponent(lessonPath)}`);
      const data = await response.json();
      
      if (data.success) {
        setContent(data.content);
      } else {
        alert("Content yuklanmadi: " + data.message);
      }
    } catch (error) {
      console.error("Load content error:", error);
      alert("Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  const saveContent = async () => {
    setSaving(true);
    try {
      const response = await fetch("/api/admin/content/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: lessonPath,
          content: content,
          title: title,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        alert("✅ Content saqlandi!");
      } else {
        alert("❌ Xatolik: " + data.message);
      }
    } catch (error) {
      console.error("Save content error:", error);
      alert("❌ Xatolik yuz berdi");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Content yuklanmoqda...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Link
            href="/admin/content"
            className="p-2 hover:bg-[#30363d] rounded-lg transition"
          >
            <ArrowLeft className="w-5 h-5 text-gray-400 hover:text-white" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white">Content Tahrirlash</h1>
            <p className="text-gray-400">Notion'ga o'xshash rich text editor</p>
          </div>
        </div>

        {/* Title Input */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-blue-400" />
            <div className="flex-1">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-2xl font-bold bg-transparent text-white focus:outline-none placeholder-gray-500"
                placeholder="Dars nomini kiriting..."
              />
              <p className="text-sm text-gray-400 mt-1">{lessonPath}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rich Text Editor */}
      <RichTextEditor
        content={content}
        onChange={setContent}
        onSave={saveContent}
        saving={saving}
      />

      {/* Help */}
      <div className="mt-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-400 mb-3">🎨 Notion'ga o'xshash Editor</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <h4 className="font-semibold text-white mb-2">Matn formatlash:</h4>
            <ul className="space-y-1">
              <li>• <kbd className="bg-gray-800 px-1 rounded">Ctrl+B</kbd> - Bold</li>
              <li>• <kbd className="bg-gray-800 px-1 rounded">Ctrl+I</kbd> - Italic</li>
              <li>• <kbd className="bg-gray-800 px-1 rounded">Ctrl+U</kbd> - Underline</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Xususiyatlar:</h4>
            <ul className="space-y-1">
              <li>• Headings (H1, H2, H3)</li>
              <li>• Lists (Bullet, Numbered)</li>
              <li>• Code blocks va inline code</li>
              <li>• Links va images</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EditContentPage() {
  return (
    <Suspense fallback={
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Yuklanmoqda...</p>
          </div>
        </div>
      </div>
    }>
      <EditContentForm />
    </Suspense>
  );
}