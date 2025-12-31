"use client";

import { Play, AlertCircle, Download } from 'lucide-react';

interface VideoPlaceholderProps {
  title: string;
  description?: string;
  showDownloadHint?: boolean;
}

export default function VideoPlaceholder({ title, description, showDownloadHint = true }: VideoPlaceholderProps) {
  return (
    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex flex-col items-center justify-center border border-gray-700 hover:border-yellow-500/50 transition-all p-8 text-center">
      <div className="mb-4">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center border border-yellow-500/30">
            <Play className="w-10 h-10 text-yellow-500 ml-1" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <AlertCircle className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-100 mb-2">{title}</h3>
      
      {description && (
        <p className="text-gray-400 mb-4 max-w-md">{description}</p>
      )}
      
      <div className="text-gray-500 text-sm space-y-2">
        <p>Video joylashuvi:</p>
        <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
          <code className="text-yellow-400 text-xs">/public/videos/{title.toLowerCase().replace(/\s+/g, '-')}.mp4</code>
        </div>
        
        {showDownloadHint && (
          <div className="flex items-center gap-2 text-xs text-gray-600 mt-3">
            <Download className="w-3 h-3" />
            <span>Video faylni yuqoridagi joyga joylashtiring</span>
          </div>
        )}
      </div>
    </div>
  );
}