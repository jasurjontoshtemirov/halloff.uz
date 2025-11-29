"use client";

import { useState, useRef, useEffect } from "react";
import { Edit3, Save, X, Plus } from "lucide-react";

interface InlineEditorProps {
  children: React.ReactNode;
  onSave: (content: string) => void;
  className?: string;
}

export default function InlineEditor({ children, onSave, className = "" }: InlineEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [originalContent, setOriginalContent] = useState("");
  const [saving, setSaving] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  const handleEdit = () => {
    if (editorRef.current) {
      setOriginalContent(editorRef.current.innerHTML);
      setIsEditing(true);
      // Focus after state update
      setTimeout(() => {
        editorRef.current?.focus();
      }, 0);
    }
  };

  const handleSave = async () => {
    if (editorRef.current) {
      setSaving(true);
      try {
        const newContent = editorRef.current.innerHTML;
        await onSave(newContent);
        setIsEditing(false);
        alert("✅ Saqlandi!");
      } catch (error) {
        console.error("Save error:", error);
        alert("❌ Xatolik yuz berdi");
      } finally {
        setSaving(false);
      }
    }
  };

  const handleCancel = () => {
    if (editorRef.current) {
      editorRef.current.innerHTML = originalContent;
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Ctrl+S to save
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      handleSave();
    }
    // Escape to cancel
    if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={`group relative ${className}`}>
      {/* Hover Edit Button */}
      {!isEditing && (
        <div className="absolute -left-12 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleEdit}
            className="p-2 hover:bg-gray-700 rounded-lg transition"
            title="Tahrirlash (Click to edit)"
          >
            <Edit3 className="w-4 h-4 text-gray-400 hover:text-white" />
          </button>
        </div>
      )}

      {/* Floating Toolbar */}
      {isEditing && (
        <div className="fixed top-4 right-4 z-50 bg-[#161b22] border border-[#30363d] rounded-xl shadow-2xl p-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-green-600/50 text-white rounded-lg transition flex items-center gap-2 text-sm"
            >
              <Save className="w-4 h-4" />
              {saving ? "Saqlanmoqda..." : "Saqlash"}
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition flex items-center gap-2 text-sm"
            >
              <X className="w-4 h-4" />
              Bekor qilish
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-400 text-center">
            Ctrl+S - Saqlash | Esc - Bekor qilish
          </div>
        </div>
      )}

      {/* Content */}
      <div
        ref={editorRef}
        contentEditable={isEditing}
        onKeyDown={handleKeyDown}
        className={`
          ${isEditing ? 'outline-2 outline-blue-500 outline-dashed bg-blue-500/5 rounded-lg p-4' : ''}
          ${isEditing ? 'prose prose-invert max-w-none' : ''}
        `}
        suppressContentEditableWarning={true}
        style={{
          minHeight: isEditing ? '200px' : 'auto',
        }}
      >
        {children}
      </div>

      {/* Edit Hint */}
      {!isEditing && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute top-2 right-2 bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
            Click to edit
          </div>
        </div>
      )}
    </div>
  );
}