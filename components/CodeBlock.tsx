"use client";

import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-markup";

interface CodeBlockProps {
  code: string;
  language?: string;
  showHeader?: boolean;
}

export default function CodeBlock({ code, language = "javascript", showHeader = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    const langMap: { [key: string]: string } = {
      "JavaScript": "javascript",
      "TypeScript": "typescript",
      "HTML": "markup",
      "CSS": "css",
      "JSX": "jsx",
      "TSX": "tsx",
      "css": "css",
      "html": "markup",
      "javascript": "javascript",
      "typescript": "typescript"
    };

    const prismLang = langMap[language] || language.toLowerCase();
    
    try {
      const highlighted = Prism.highlight(
        code,
        Prism.languages[prismLang] || Prism.languages.javascript,
        prismLang
      );
      setHighlightedCode(highlighted);
    } catch (err) {
      console.error('Highlighting error:', err);
      setHighlightedCode(code);
    }
  }, [code, language]);

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
    <div className="rounded-lg overflow-hidden border border-gray-800 bg-[#1a1a1a]">
      {showHeader && (
        <div className="flex justify-between items-center px-4 py-2 bg-gray-900/50 border-b border-gray-800">
          <span className="text-sm text-gray-400 font-medium">{language}</span>
          <button 
            onClick={copyToClipboard}
            className="text-sm text-gray-400 hover:text-gray-200 transition-colors px-3 py-1 rounded hover:bg-gray-800"
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
                  className="inline-block mr-1"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
      )}
      <pre className="p-6 overflow-x-auto">
        <code 
          className="text-sm font-mono"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    </div>
  );
}
