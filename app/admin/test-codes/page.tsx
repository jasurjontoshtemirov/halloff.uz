"use client";

import { useState, useEffect } from "react";

export default function TestCodesPage() {
  const [codes, setCodes] = useState<any[]>([]);

  useEffect(() => {
    fetchCodes();
  }, []);

  const fetchCodes = async () => {
    const response = await fetch("/api/admin/access-codes");
    const data = await response.json();
    if (data.success) {
      setCodes(data.codes);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-white mb-4">Test - Barcha Kodlar</h1>
      
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
        <pre className="text-white text-sm overflow-auto">
          {JSON.stringify(codes, null, 2)}
        </pre>
      </div>

      <div className="mt-6 space-y-4">
        {codes.map((code) => (
          <div key={code.id} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <code className="text-white font-mono bg-gray-800 px-2 py-1 rounded">
                  {code.code}
                </code>
                <p className="text-gray-400 text-sm mt-2">{code.name}</p>
              </div>
              <div className="text-right">
                <p className="text-white text-sm">
                  Muddat: {code.expires_at ? new Date(code.expires_at).toLocaleString() : "Cheksiz"}
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Aktiv: {code.is_active ? "✅" : "❌"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
