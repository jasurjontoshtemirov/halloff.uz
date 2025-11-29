"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Bold, 
  Italic, 
  Underline, 
  Code, 
  List, 
  ListOrdered, 
  Quote, 
  Heading1, 
  Heading2, 
  Heading3,
  Link,
  Image,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo,
  Save
} from "lucide-react";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  onSave?: () => void;
  saving?: boolean;
}

export default function RichTextEditor({ content, onChange, onSave, saving }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editorRef.current && !isEditing) {
      editorRef.current.innerHTML = content;
    }
  }, [content, isEditing]);

  const handleInput = () => {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML;
      onChange(newContent);
    }
  };

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleInput();
  };

  const insertHeading = (level: number) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const heading = document.createElement(`h${level}`);
      heading.className = level === 1 ? "text-3xl font-bold text-white mb-4" : 
                         level === 2 ? "text-2xl font-semibold text-white mb-3" :
                         "text-xl font-medium text-white mb-2";
      
      try {
        range.surroundContents(heading);
      } catch {
        heading.textContent = range.toString();
        range.deleteContents();
        range.insertNode(heading);
      }
      
      selection.removeAllRanges();
      handleInput();
    }
  };

  const insertCodeBlock = () => {
    const code = prompt("Code'ni kiriting:");
    if (code) {
      const codeBlock = `
        <div class="bg-gray-900 rounded-lg p-4 my-4">
          <pre class="text-gray-300 font-mono text-sm overflow-x-auto"><code>${code}</code></pre>
        </div>
      `;
      document.execCommand('insertHTML', false, codeBlock);
      handleInput();
    }
  };

  const insertLink = () => {
    const url = prompt("Link URL'ini kiriting:");
    if (url) {
      execCommand('createLink', url);
    }
  };

  const insertImage = () => {
    const url = prompt("Rasm URL'ini kiriting:");
    if (url) {
      const img = `<img src="${url}" alt="Image" class="max-w-full h-auto rounded-lg my-4" />`;
      document.execCommand('insertHTML', false, img);
      handleInput();
    }
  };

  const toolbarButtons = [
    { icon: Bold, command: 'bold', tooltip: 'Bold (Ctrl+B)' },
    { icon: Italic, command: 'italic', tooltip: 'Italic (Ctrl+I)' },
    { icon: Underline, command: 'underline', tooltip: 'Underline (Ctrl+U)' },
    { icon: Code, command: 'code', tooltip: 'Inline Code', action: () => execCommand('insertHTML', '<code class="bg-gray-800 px-2 py-1 rounded text-yellow-400 font-mono text-sm">code</code>') },
  ];

  const formatButtons = [
    { icon: Heading1, tooltip: 'Heading 1', action: () => insertHeading(1) },
    { icon: Heading2, tooltip: 'Heading 2', action: () => insertHeading(2) },
    { icon: Heading3, tooltip: 'Heading 3', action: () => insertHeading(3) },
  ];

  const listButtons = [
    { icon: List, command: 'insertUnorderedList', tooltip: 'Bullet List' },
    { icon: ListOrdered, command: 'insertOrderedList', tooltip: 'Numbered List' },
    { icon: Quote, tooltip: 'Quote', action: () => execCommand('insertHTML', '<blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-4 text-gray-300 italic">Quote</blockquote>') },
  ];

  const alignButtons = [
    { icon: AlignLeft, command: 'justifyLeft', tooltip: 'Align Left' },
    { icon: AlignCenter, command: 'justifyCenter', tooltip: 'Align Center' },
    { icon: AlignRight, command: 'justifyRight', tooltip: 'Align Right' },
  ];

  const mediaButtons = [
    { icon: Link, tooltip: 'Insert Link', action: insertLink },
    { icon: Image, tooltip: 'Insert Image', action: insertImage },
    { icon: Code, tooltip: 'Code Block', action: insertCodeBlock },
  ];

  const historyButtons = [
    { icon: Undo, command: 'undo', tooltip: 'Undo (Ctrl+Z)' },
    { icon: Redo, command: 'redo', tooltip: 'Redo (Ctrl+Y)' },
  ];

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
      {/* Toolbar */}
      <div className="border-b border-[#30363d] p-3">
        <div className="flex items-center gap-1 flex-wrap">
          {/* Save Button */}
          {onSave && (
            <>
              <button
                onClick={onSave}
                disabled={saving}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-green-600/50 text-white rounded-lg transition flex items-center gap-2 mr-3"
              >
                <Save className="w-4 h-4" />
                {saving ? "Saqlanmoqda..." : "Saqlash"}
              </button>
              <div className="w-px h-6 bg-[#30363d] mr-3"></div>
            </>
          )}

          {/* Text Formatting */}
          {toolbarButtons.map((btn, index) => (
            <button
              key={index}
              onClick={() => btn.action ? btn.action() : execCommand(btn.command)}
              className="p-2 hover:bg-[#30363d] rounded transition"
              title={btn.tooltip}
            >
              <btn.icon className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
          ))}

          <div className="w-px h-6 bg-[#30363d] mx-2"></div>

          {/* Headings */}
          {formatButtons.map((btn, index) => (
            <button
              key={index}
              onClick={btn.action}
              className="p-2 hover:bg-[#30363d] rounded transition"
              title={btn.tooltip}
            >
              <btn.icon className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
          ))}

          <div className="w-px h-6 bg-[#30363d] mx-2"></div>

          {/* Lists */}
          {listButtons.map((btn, index) => (
            <button
              key={index}
              onClick={() => btn.action ? btn.action() : execCommand(btn.command)}
              className="p-2 hover:bg-[#30363d] rounded transition"
              title={btn.tooltip}
            >
              <btn.icon className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
          ))}

          <div className="w-px h-6 bg-[#30363d] mx-2"></div>

          {/* Alignment */}
          {alignButtons.map((btn, index) => (
            <button
              key={index}
              onClick={() => execCommand(btn.command)}
              className="p-2 hover:bg-[#30363d] rounded transition"
              title={btn.tooltip}
            >
              <btn.icon className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
          ))}

          <div className="w-px h-6 bg-[#30363d] mx-2"></div>

          {/* Media */}
          {mediaButtons.map((btn, index) => (
            <button
              key={index}
              onClick={btn.action}
              className="p-2 hover:bg-[#30363d] rounded transition"
              title={btn.tooltip}
            >
              <btn.icon className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
          ))}

          <div className="w-px h-6 bg-[#30363d] mx-2"></div>

          {/* History */}
          {historyButtons.map((btn, index) => (
            <button
              key={index}
              onClick={() => execCommand(btn.command)}
              className="p-2 hover:bg-[#30363d] rounded transition"
              title={btn.tooltip}
            >
              <btn.icon className="w-4 h-4 text-gray-400 hover:text-white" />
            </button>
          ))}
        </div>
      </div>

      {/* Editor */}
      <div className="p-6">
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          onFocus={() => setIsEditing(true)}
          onBlur={() => setIsEditing(false)}
          className="min-h-[500px] text-gray-300 focus:outline-none prose prose-invert max-w-none"
          style={{
            lineHeight: '1.6',
          }}
          suppressContentEditableWarning={true}
        />
      </div>

      {/* Footer */}
      <div className="border-t border-[#30363d] px-6 py-3">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div>
            💡 <strong>Maslahat:</strong> Ctrl+B (Bold), Ctrl+I (Italic), Ctrl+U (Underline)
          </div>
          <div>
            {content.length} belgi
          </div>
        </div>
      </div>
    </div>
  );
}