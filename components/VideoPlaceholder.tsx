"use client";

export default function VideoPlaceholder({ title }: { title: string }) {
  return (
    <div className="mb-12 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">🎥</span>
        <h2 className="text-2xl font-semibold text-gray-100">Video Dars</h2>
      </div>
      <div className="bg-gray-900/50 rounded-lg overflow-hidden">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/8KkKuTCFvzI"
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-4 text-center">
        📺 Video darslar tez orada tayyorlanadi
      </p>
    </div>
  );
}
