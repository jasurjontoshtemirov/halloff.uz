"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { 
  BookOpen, 
  Rocket, 
  Code2, 
  FileText, 
  Blocks, 
  Plug, 
  Search, 
  Menu, 
  X, 
  Edit3, 
  ChevronDown, 
  ChevronRight, 
  Server, 
  Palette, 
  Braces, 
  Sparkles, 
  Database,
  Zap,
  Wind,
  Play
} from "lucide-react";
import { Html5Icon } from "@/components/icons/Html5Icon";

// Simple and clean HTML syntax highlighting
function highlightHTML(code: string): string {
  return code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // HTML tags in blue
    .replace(/&lt;([^&\s]+)/g, '<span style="color:#569cd6">&lt;$1</span>')
    .replace(/&gt;/g, '<span style="color:#569cd6">&gt;</span>')
    // Attributes in light blue  
    .replace(/(\w+)=/g, '<span style="color:#9cdcfe">$1</span>=')
    // Strings in orange
    .replace(/="([^"]*)"/g, '="<span style="color:#ce9178">$1</span>"');
}

const navigation = {
  intro: [
    { name: "Kirish", href: "/docs", icon: BookOpen },
  ],
  frontend: [
    { 
      name: "HTML", 
      href: "/docs/html",
      icon: FileText, 
      color: "text-orange-500",
      hasSubmenu: true,
      submenu: [
        { name: "HTML ga kirish", href: "/docs/html/intro" },
        { name: "HTML Elementlar", href: "/docs/html/elements" },
        { name: "Ro'yxatlar va Jadvallar", href: "/docs/html/lists-tables" },
        { name: "Rasm va Media", href: "/docs/html/media" },
        { name: "HTML Formalar", href: "/docs/html/forms" },
        { name: "Semantik HTML", href: "/docs/html/semantic" },
      ]
    },
    { 
      name: "CSS", 
      icon: Palette, 
      color: "text-blue-500",
      hasSubmenu: true,
      submenu: [
        { name: "CSS ga Kirish", href: "/docs/css/intro" },
        { name: "Selectors", href: "/docs/css/selectors" },
        { name: "Colors", href: "/docs/css/colors" },
        { name: "Box Model", href: "/docs/css/box-model" },
        { name: "Units", href: "/docs/css/units" },
        { name: "Text", href: "/docs/css/text" },
        { name: "Fonts", href: "/docs/css/fonts" },
        { name: "Icons", href: "/docs/css/icons" },
        { name: "Forms", href: "/docs/css/forms" },
        { name: "Lists", href: "/docs/css/lists" },
        { name: "Tables", href: "/docs/css/tables" },
        { name: "Position", href: "/docs/css/position" },
        { name: "Gradients", href: "/docs/css/gradients" },
        { name: "Flexbox", href: "/docs/css/flexbox" },
        { name: "Grid", href: "/docs/css/grid" },
        { name: "Transforms", href: "/docs/css/transforms" },
        { name: "Animations", href: "/docs/css/animations" },
        { name: "Responsive", href: "/docs/css/responsive" },
      ]
    },
    { 
      name: "JavaScript", 
      icon: Code2, 
      color: "text-yellow-500",
      hasSubmenu: true,
      submenu: [
        { name: "JavaScript nima?", href: "/docs/javascript/intro" },
        { name: "Ma'lumot turlari", href: "/docs/javascript/data-types" },
        { name: "Operatorlar Math Object", href: "/docs/javascript/operators" },
        { name: "🚀 Amaliyot", href: "/docs/javascript/amaliyot1" },
        { name: "Shart operatorlari", href: "/docs/javascript/conditions" },
        { name: "Tsikllar", href: "/docs/javascript/loops" },
        { name: "Funksiyalar", href: "/docs/javascript/functions" },
        { name: "🚀 Amaliyot: Kalkulyator", href: "/docs/javascript/amaliyot2" },
        { name: "Array haqida", href: "/docs/javascript/arrays" },
        { name: "Objektlar", href: "/docs/javascript/objects" },
        { name: "DOM", href: "/docs/javascript/dom" },
        { name: "Styles, ClassList", href: "/docs/javascript/styles" },
        { name: "DOM HODISA", href: "/docs/javascript/dom-events" },
        { name: "🚀 Amaliyot: Modal", href: "/docs/javascript/amaliyot3" },
        { name: "RegEX", href: "/docs/javascript/regex" },
        { name: "LocalStorage", href: "/docs/javascript/localstorage" },
        { name: "Destructuring", href: "/docs/javascript/destructuring" },
        { name: "New Date", href: "/docs/javascript/date" },
        { name: "🚀 CRUD TodoList", href: "/docs/javascript/amaliyot4" },
        { name: "TEST", href: "/docs/javascript/test" },
        { name: "API, Fetch", href: "/docs/javascript/api" },
        { name: "Callback Hell", href: "/docs/javascript/callback" },
        { name: "Promise & Chaining", href: "/docs/javascript/promises" },
        { name: "🚀 Amaliyot: Random User", href: "/docs/javascript/amaliyot5" },
        { name: "Async & Await", href: "/docs/javascript/async" },
        { name: "Throw Errors", href: "/docs/javascript/errors" },
        { name: "🚀 Amaliyot: Weather", href: "/docs/javascript/amaliyot6" },
        { name: "JSON", href: "/docs/javascript/json" },
        { name: "Classes", href: "/docs/javascript/classes" },
        { name: "Prototypes", href: "/docs/javascript/prototypes" },
        { name: "Closures", href: "/docs/javascript/closures" },
        { name: "Modules", href: "/docs/javascript/modules" },
        { name: "Spread & Rest", href: "/docs/javascript/spread-rest" },
        { name: "Map & Set", href: "/docs/javascript/map-set" },
      ]
    },
    { name: "React", href: "/docs/react", icon: Blocks, color: "text-cyan-500", hasSubmenu: false },
    { name: "TypeScript", href: "/docs/typescript", icon: Braces, color: "text-blue-600" },
    { name: "Tailwind CSS", href: "/docs/tailwind", icon: Wind, color: "text-teal-500" },
  ],
  backend: [
    { name: "Node.js", href: "/docs/nodejs", icon: Server, color: "text-green-500" },
    { name: "Express.js", href: "/docs/express", icon: Zap, color: "text-gray-400" },
    { name: "API yaratish", href: "/docs/api", icon: Plug, color: "text-purple-500" },
    { name: "MongoDB", href: "/docs/mongodb", icon: Database, color: "text-green-600" },
    { name: "PostgreSQL", href: "/docs/postgresql", icon: Database, color: "text-blue-500" },
  ],
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [tocOpen, setTocOpen] = useState(true);
  const [frontendOpen, setFrontendOpen] = useState(true);
  const [backendOpen, setBackendOpen] = useState(true);
  const [htmlOpen, setHtmlOpen] = useState(false);
  const [cssOpen, setCssOpen] = useState(false);
  const [jsOpen, setJsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportName, setReportName] = useState("");
  const [reportTitle, setReportTitle] = useState("");
  const [reportMessage, setReportMessage] = useState("");
  const [reportSending, setReportSending] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Client-side da render qilish uchun
  useEffect(() => {
    setIsClient(true);
    
    // Initialize syntax highlighting when component mounts
    setTimeout(() => {
      const editor = document.getElementById('editor-textarea') as HTMLTextAreaElement;
      const highlightLayer = document.getElementById('syntax-highlight-layer');
      
      if (editor && highlightLayer) {
        const code = editor.value;
        highlightLayer.innerHTML = highlightHTML(code);
      }
    }, 100);
  }, []);

  // Basic user check (access key expiration removed)
  useEffect(() => {
    // Auth olib tashlandi
  }, []);

  // Auth olib tashlandi
  useEffect(() => {
    // Hech narsa qilmaslik
  }, []);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
      <div className="min-h-screen bg-[#0f0f0f] text-gray-100">
        {/* Header */}
      <header className="border-b border-[#30363d] sticky top-0 bg-[#0f0f0f]/95 backdrop-blur-sm z-50">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-lg font-semibold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span>Halloff</span>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setSearchOpen(true)}
                className="px-3 py-1.5 text-sm text-gray-400 hover:text-white border border-gray-700 rounded-md hover:border-gray-600 transition flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden sm:inline px-1.5 py-0.5 text-xs bg-gray-800 rounded">K</kbd>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto">
        <div className="flex relative">
          {/* Chap Sidebar Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`fixed top-[60px] z-50 p-2 bg-[#161b22] border border-[#30363d] hover:bg-[#1f6feb] transition-all duration-300 shadow-lg ${
              sidebarOpen 
                ? 'left-64 rounded-r-lg -ml-10' 
                : 'left-0 rounded-r-lg'
            }`}
            title={sidebarOpen ? "Yopish" : "Ochish"}
          >
            {sidebarOpen ? (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            ) : (
              <Menu className="w-4 h-4 text-gray-400" />
            )}
          </button>

          {/* Sidebar */}
          <aside className={`border-r border-[#30363d] transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'}`}>
            <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-6 px-4 bg-[#0f0f0f]">
              <div className="space-y-6">
                {/* Kirish bo'limi */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">
                    Kirish
                  </h3>
                  <nav className="space-y-0.5 relative before:absolute before:left-2 before:top-0 before:bottom-0 before:w-0.5 before:bg-[#30363d]">
                    {navigation.intro.map((item) => {
                      const isActive = pathname === item.href;
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm transition relative ${
                            isActive
                              ? "bg-[#1f6feb] text-white font-medium before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-6 before:bg-white"
                              : "text-gray-400 hover:bg-[#161b22] hover:text-white"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          {item.name}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Frontend dropdown */}
                <div>
                  <button
                    onClick={() => setFrontendOpen(!frontendOpen)}
                    className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-400 transition"
                  >
                    <span>Frontend</span>
                    {frontendOpen ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  {frontendOpen && (
                    <nav className="space-y-0.5 mt-2">
                      {navigation.frontend.map((item, index) => {
                        const Icon = item.icon;
                        
                        if (item.hasSubmenu) {
                          const isHtml = item.name === "HTML";
                          const isCss = item.name === "CSS";
                          const isJs = item.name === "JavaScript";
                          const isOpen = isHtml ? htmlOpen : isCss ? cssOpen : isJs ? jsOpen : false;
                          const setOpen = isHtml ? setHtmlOpen : isCss ? setCssOpen : isJs ? setJsOpen : () => {};
                          const borderColor = isHtml ? "before:bg-orange-500/30" : isCss ? "before:bg-blue-500/30" : isJs ? "before:bg-yellow-500/30" : "";
                          const iconColor = isHtml ? "text-orange-500" : isCss ? "text-blue-500" : isJs ? "text-yellow-500" : item.color;
                          
                          return (
                            <div key={item.name}>
                              <Link
                                href={item.href || "#"}
                                onClick={() => setOpen(!isOpen)}
                                className="w-full flex items-center justify-between px-2 py-1.5 rounded text-sm transition text-gray-400 hover:bg-[#161b22] hover:text-white"
                              >
                                <div className="flex items-center gap-2">
                                  {isHtml ? (
                                    <Html5Icon className={`w-5 h-5 ${item.color}`} />
                                  ) : (
                                    <Icon className={`w-5 h-5 ${item.color}`} />
                                  )}
                                  <span>{item.name}</span>
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setOpen(!isOpen);
                                  }}
                                  className="p-1 hover:bg-gray-600 rounded"
                                >
                                  {isOpen ? (
                                    <ChevronDown className="w-3 h-3" />
                                  ) : (
                                    <ChevronRight className="w-3 h-3" />
                                  )}
                                </button>
                              </Link>
                              {isOpen && (
                                <div className={`ml-6 mt-1 space-y-0.5 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 ${borderColor} pl-3`}>
                                  {item.submenu?.map((subItem) => {
                                    const isActive = pathname === subItem.href;
                                    return (
                                      <Link
                                        key={subItem.href}
                                        href={subItem.href || "#"}
                                        className={`flex items-center gap-2 px-2 py-1.5 rounded text-xs transition relative ${
                                          isActive
                                            ? "bg-[#1f6feb] text-white font-medium before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-5 before:bg-white"
                                            : "text-gray-400 hover:bg-[#161b22] hover:text-white"
                                        }`}
                                      >
                                        {isHtml ? (
                                          <Html5Icon className={`w-4 h-4 ${isActive ? 'text-white' : iconColor}`} />
                                        ) : (
                                          <Icon className={`w-4 h-4 ${isActive ? 'text-white' : iconColor}`} />
                                        )}
                                        {subItem.name}
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        }
                        
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href || "#"}
                            className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm transition relative ${
                              isActive
                                ? "bg-[#1f6feb] text-white font-medium before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-6 before:bg-white"
                                : "text-gray-400 hover:bg-[#161b22] hover:text-white"
                            }`}
                          >
                            <Icon className={`w-5 h-5 ${isActive ? 'text-white' : item.color}`} />
                            {item.name}
                          </Link>
                        );
                      })}
                    </nav>
                  )}
                </div>

                {/* Backend dropdown */}
                <div>
                  <button
                    onClick={() => setBackendOpen(!backendOpen)}
                    className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-400 transition"
                  >
                    <span>Backend</span>
                    {backendOpen ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  {backendOpen && (
                    <nav className="space-y-0.5 mt-2">
                      {navigation.backend.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm transition relative ${
                              isActive
                                ? "bg-[#1f6feb] text-white font-medium before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-6 before:bg-white"
                                : "text-gray-400 hover:bg-[#161b22] hover:text-white"
                            }`}
                          >
                            <Icon className={`w-5 h-5 ${isActive ? 'text-white' : item.color}`} />
                            {item.name}
                          </Link>
                        );
                      })}
                    </nav>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="max-w-5xl mx-auto px-6 lg:px-12 py-8">
              <article>
                {children}
              </article>

              {/* Pagination - olib tashlandi */}
            </div>
          </main>

          {/* O'ng Sidebar Toggle Button */}
          <button
            onClick={() => setTocOpen(!tocOpen)}
            className={`fixed top-[60px] z-50 p-2 bg-[#161b22] border border-[#30363d] hover:bg-[#1f6feb] transition-all duration-300 shadow-lg hidden xl:block ${
              tocOpen 
                ? 'right-56 rounded-l-lg -mr-10' 
                : 'right-0 rounded-l-lg'
            }`}
            title={tocOpen ? "Yopish" : "Ochish"}
          >
            {tocOpen ? (
              <ChevronRight className="w-4 h-4 text-gray-400 rotate-180" />
            ) : (
              <FileText className="w-4 h-4 text-gray-400" />
            )}
          </button>

          {/* Table of contents */}
          <aside className={`border-l border-[#30363d] transition-all duration-300 hidden xl:block ${tocOpen ? 'w-56' : 'w-0 overflow-hidden'}`}>
            <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-6 px-4 bg-[#0f0f0f]">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                On this page
              </h3>
              <nav className="space-y-2 text-sm">
                <a href="#yuqoriga" className="block text-gray-400 hover:text-white transition">
                  Yuqoriga
                </a>
                <a href="#kirish" className="block text-gray-400 hover:text-white transition">
                  Kirish
                </a>
                <a href="#asosiy" className="block text-gray-400 hover:text-white transition">
                  Asosiy qism
                </a>
                <a href="#misollar" className="block text-gray-400 hover:text-white transition">
                  Misollar
                </a>
                <a href="#amaliyot" className="block text-gray-400 hover:text-white transition">
                  Amaliyot
                </a>
              </nav>

              {/* Interactive Code Editor */}
              <div className="mt-6 pt-6 border-t border-[#30363d]">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Code Editor
                </h4>
                <button
                  onClick={() => {
                    // Toggle full-screen editor
                    const editorModal = document.getElementById('fullscreen-editor');
                    if (editorModal) {
                      editorModal.classList.toggle('hidden');
                      document.body.style.overflow = editorModal.classList.contains('hidden') ? 'auto' : 'hidden';
                      
                      // Auto-run when editor opens
                      if (!editorModal.classList.contains('hidden')) {
                        setTimeout(() => {
                          const editor = document.getElementById('editor-textarea') as HTMLTextAreaElement;
                          const highlightLayer = document.getElementById('syntax-highlight-layer');
                          const preview = document.getElementById('preview-frame') as HTMLIFrameElement;
                          const loading = document.getElementById('preview-loading');
                          
                          if (editor && highlightLayer) {
                            const code = editor.value;
                            highlightLayer.innerHTML = highlightHTML(code);
                          }
                          
                          if (editor && preview) {
                            const code = editor.value;
                            
                            // Hide loading
                            if (loading) {
                              loading.style.display = 'none';
                            }
                            
                            // Write directly to iframe document
                            const iframeDoc = preview.contentDocument || preview.contentWindow?.document;
                            if (iframeDoc) {
                              iframeDoc.open();
                              iframeDoc.write(code);
                              iframeDoc.close();
                            }
                          }
                        }, 200);
                      }
                    }
                  }}
                  className="w-full flex items-center gap-3 text-gray-400 hover:text-white transition group p-3 rounded-lg hover:bg-[#161b22] border border-[#30363d] hover:border-blue-500/50"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium">Interactive Editor</div>
                    <div className="text-xs text-gray-500">Chap: kod, O'ng: natija</div>
                  </div>
                </button>
              </div>

              {/* Quick Links */}
              <div className="mt-8 pt-8 border-t border-[#30363d]">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Yordam
                </h4>
                <div className="space-y-2 text-sm">
                  <button
                    onClick={() => setReportModalOpen(true)}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition w-full"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Muammo haqida xabar</span>
                  </button>
                </div>
              </div>


            </div>
          </aside>
        </div>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
          onClick={() => setSearchOpen(false)}
        >
          <div 
            className="bg-[#161b22] border border-[#30363d] rounded-lg w-full max-w-2xl mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-[#30363d]">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Darslarni qidiring..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-lg"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto p-2">
              {searchQuery.trim() === "" ? (
                <div className="p-8 text-center text-gray-500">
                  Dars nomini kiriting...
                </div>
              ) : (
                <div className="space-y-1">
                  {/* HTML darslar */}
                  {navigation.frontend[0].submenu
                    ?.filter(item => 
                      item.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setSearchOpen(false)}
                        className="block p-3 rounded-md hover:bg-[#30363d] transition"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-4 h-4 text-orange-500" />
                          <div>
                            <div className="text-white font-medium">{item.name}</div>
                            <div className="text-xs text-gray-500">HTML</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  
                  {/* CSS darslar */}
                  {navigation.frontend[1].submenu
                    ?.filter(item => 
                      item.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setSearchOpen(false)}
                        className="block p-3 rounded-md hover:bg-[#30363d] transition"
                      >
                        <div className="flex items-center gap-3">
                          <Palette className="w-4 h-4 text-blue-500" />
                          <div>
                            <div className="text-white font-medium">{item.name}</div>
                            <div className="text-xs text-gray-500">CSS</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  
                  {/* JavaScript darslar */}
                  {navigation.frontend[2].submenu
                    ?.filter(item => 
                      item.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setSearchOpen(false)}
                        className="block p-3 rounded-md hover:bg-[#30363d] transition"
                      >
                        <div className="flex items-center gap-3">
                          <Braces className="w-4 h-4 text-yellow-500" />
                          <div>
                            <div className="text-white font-medium">{item.name}</div>
                            <div className="text-xs text-gray-500">JavaScript</div>
                          </div>
                        </div>
                      </Link>
                    ))}

                  {/* Natija topilmasa */}
                  {navigation.frontend[0].submenu?.filter(item => 
                      item.name.toLowerCase().includes(searchQuery.toLowerCase())
                    ).length === 0 &&
                    navigation.frontend[1].submenu?.filter(item => 
                      item.name.toLowerCase().includes(searchQuery.toLowerCase())
                    ).length === 0 &&
                    navigation.frontend[2].submenu?.filter(item => 
                      item.name.toLowerCase().includes(searchQuery.toLowerCase())
                    ).length === 0 && (
                    <div className="p-8 text-center text-gray-500">
                      Hech narsa topilmadi
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Report Modal */}
      {reportModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setReportModalOpen(false)}
        >
          <div 
            className="bg-[#161b22] border border-[#30363d] rounded-lg w-full max-w-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-[#30363d]">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Muammo haqida xabar</h3>
                <button
                  onClick={() => setReportModalOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-400 mb-4">
                Sahifada xatolik yoki muammo topdingizmi? Bizga xabar bering!
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    value={reportName}
                    onChange={(e) => setReportName(e.target.value)}
                    placeholder="Ismingizni kiriting..."
                    className="w-full bg-[#0f0f0f] border border-[#30363d] rounded-lg p-3 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Muammo sarlavhasi
                  </label>
                  <input
                    type="text"
                    value={reportTitle}
                    onChange={(e) => setReportTitle(e.target.value)}
                    placeholder="Qisqacha sarlavha..."
                    className="w-full bg-[#0f0f0f] border border-[#30363d] rounded-lg p-3 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Batafsil ma'lumot
                  </label>
                  <textarea
                    value={reportMessage}
                    onChange={(e) => setReportMessage(e.target.value)}
                    placeholder="Muammoni batafsil yozing..."
                    className="w-full h-32 bg-[#0f0f0f] border border-[#30363d] rounded-lg p-3 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition resize-none"
                  />
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => {
                    setReportModalOpen(false);
                    setReportName("");
                    setReportTitle("");
                    setReportMessage("");
                  }}
                  className="flex-1 px-4 py-2 bg-[#30363d] hover:bg-[#3d444d] text-white rounded-lg transition"
                >
                  Bekor qilish
                </button>
                <button
                  onClick={async () => {
                    if (!reportName.trim()) {
                      alert("Iltimos, ismingizni kiriting!");
                      return;
                    }
                    if (!reportTitle.trim()) {
                      alert("Iltimos, sarlavha kiriting!");
                      return;
                    }
                    if (!reportMessage.trim()) {
                      alert("Iltimos, muammoni yozing!");
                      return;
                    }
                    
                    setReportSending(true);
                    try {
                      const response = await fetch("/api/telegram/report", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          name: reportName,
                          title: reportTitle,
                          message: reportMessage,
                          page: pathname,
                        }),
                      });

                      if (response.ok) {
                        alert("✅ Xabar yuborildi! Tez orada ko'rib chiqamiz.");
                        setReportModalOpen(false);
                        setReportName("");
                        setReportTitle("");
                        setReportMessage("");
                      } else {
                        alert("❌ Xatolik yuz berdi. Qaytadan urinib ko'ring.");
                      }
                    } catch (error) {
                      console.error("Report error:", error);
                      alert("❌ Xatolik yuz berdi. Qaytadan urinib ko'ring.");
                    } finally {
                      setReportSending(false);
                    }
                  }}
                  disabled={reportSending}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-lg transition font-semibold"
                >
                  {reportSending ? "Yuborilmoqda..." : "Yuborish"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Full-Screen Interactive Code Editor */}
      <div id="fullscreen-editor" className="hidden fixed inset-0 bg-black z-50">
        <div className="h-full flex flex-col">
          {/* Editor Header */}
          <div className="bg-[#1e1e1e] border-b border-gray-700 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="text-white font-semibold flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" />
                Interactive HTML Editor
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Auto Save</span>
              </div>
              <button
                onClick={() => {
                  const editorModal = document.getElementById('fullscreen-editor');
                  if (editorModal) {
                    editorModal.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                  }
                }}
                className="text-gray-400 hover:text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span className="text-sm">Dokumentatsiyaga qaytish</span>
              </button>
            </div>
          </div>

          {/* Editor Body */}
          <div className="flex-1 flex">
            {/* Code Editor */}
            <div className="w-1/2 bg-[#1e1e1e] border-r border-gray-700 flex flex-col">
              <div className="bg-[#2d2d30] px-4 py-2 border-b border-gray-700 flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">H</span>
                </div>
                <span className="text-gray-300 text-sm">index.html</span>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse ml-2"></div>
              </div>
              <div className="flex-1 flex">
                {/* Line Numbers */}
                <div className="bg-[#1e1e1e] w-12 border-r border-gray-700 flex flex-col text-xs text-gray-500 font-mono relative overflow-hidden">
                  <div 
                    id="line-numbers-container"
                    className="absolute inset-0 pt-4 overflow-hidden"
                    style={{ 
                      lineHeight: '24px',
                      fontFamily: "'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace",
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      padding: '16px 0'
                    }}
                  >
                    {Array.from({length: 200}, (_, i) => (
                      <div 
                        key={i} 
                        className="h-6 flex items-center justify-end pr-2 hover:bg-gray-800/50 transition-colors flex-shrink-0"
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Code Area */}
                <div className="flex-1 relative overflow-hidden bg-[#1e1e1e]">
                  {isClient ? (
                    <>
                      {/* Simple Textarea - No Syntax Highlighting */}
                      <textarea
                        id="editor-textarea"
                        className="absolute inset-0 w-full h-full bg-[#1e1e1e] border-0 outline-0 resize-none text-white"
                        style={{
                          fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
                          fontSize: '14px',
                          lineHeight: '24px',
                          padding: '16px',
                          whiteSpace: 'pre-wrap',
                          wordWrap: 'break-word'
                        }}
                        defaultValue={`<h1>Sarlavha</h1>
<p>Matn yozing...</p>`}
                        onChange={(e) => {
                          // Auto-run preview
                          const preview = document.getElementById('preview-frame') as HTMLIFrameElement;
                          const loading = document.getElementById('preview-loading');
                          
                          if (preview) {
                            const code = e.target.value;
                            
                            if (loading) {
                              (loading as HTMLElement).style.display = 'none';
                            }
                            
                            const iframeDoc = preview.contentDocument || preview.contentWindow?.document;
                            if (iframeDoc) {
                              iframeDoc.open();
                              iframeDoc.write(code);
                              iframeDoc.close();
                            }
                          }
                        }}
                        onScroll={(e) => {
                          // Sync line numbers scroll
                          const lineNumbers = document.getElementById('line-numbers-container');
                          const scrollTop = (e.target as HTMLTextAreaElement).scrollTop;
                          
                          if (lineNumbers) {
                            lineNumbers.scrollTop = scrollTop;
                          }
                        }}
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-[#1e1e1e] flex items-center justify-center">
                      <div className="text-gray-400">Loading editor...</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="w-1/2 bg-white flex flex-col">
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-300 flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 border ml-2">
                  localhost:3000/preview
                </div>
                <div className="text-xs text-gray-500 bg-green-100 px-2 py-1 rounded">
                  Live Preview
                </div>
              </div>
              <div className="flex-1 relative overflow-hidden">
                <iframe
                  id="preview-frame"
                  className="w-full h-full border-0"
                  title="Preview"
                  style={{ backgroundColor: 'white' }}
                />
                <div id="preview-loading" className="absolute inset-0 bg-gray-50 flex items-center justify-center text-gray-500 text-sm">
                  <div className="text-center">
                    <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div>
                    <p>Kod yozing, natija avtomatik ko'rinadi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editor Footer */}
          <div className="bg-[#2d2d30] px-6 py-2 border-t border-gray-700 flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-4">
              <span>HTML</span>
              <span>UTF-8</span>
              <span>Ln 1, Col 1</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Ready</span>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
