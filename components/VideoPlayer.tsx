"use client";

import { useState, useEffect } from 'react';
import { Play, AlertCircle } from 'lucide-react';
import CommentsSection from './CommentsSection';

interface VideoPlayerProps {
  lessonPath: string;
  fallbackTitle?: string;
}

interface VideoData {
  id: number;
  lesson_path: string;
  lesson_title: string;
  youtube_video_id: string | null;
  video_title: string;
  description: string | null;
  is_active: boolean;
}

export default function VideoPlayer({ lessonPath, fallbackTitle }: VideoPlayerProps) {
  const [video, setVideo] = useState<VideoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchVideo();
  }, [lessonPath]);

  const fetchVideo = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const encodedPath = encodeURIComponent(lessonPath);
      const response = await fetch(`/api/videos/${encodedPath}`);
      const data = await response.json();

      if (data.success) {
        setVideo(data.video);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Video yuklashda xatolik');
      console.error('Video fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="mb-12 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-8 text-center">
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full mx-auto mb-3"></div>
              <span className="text-gray-400 text-lg">Video yuklanmoqda...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-12 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl">
          <Play className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-semibold text-gray-100">Video Dars</h2>
      </div>
      
      <div className="bg-gray-900/50 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all">
        <p className="text-gray-400 mb-4">
          {video?.video_title || fallbackTitle || 'Video dars'}
        </p>
        
        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-yellow-500/50 transition-all overflow-hidden">
          {video?.youtube_video_id ? (
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${video.youtube_video_id}?rel=0&modestbranding=1`}
              title={video.video_title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div className="text-center">
              {error ? (
                <>
                  <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-3" />
                  <span className="text-red-400 text-lg">{error}</span>
                </>
              ) : (
                <>
                  <Play className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
                  <span className="text-gray-400 text-lg">Video tez orada qo'shiladi</span>
                </>
              )}
            </div>
          )}
        </div>
        
        {video?.description && (
          <p className="text-gray-500 text-sm mt-4 text-left">
            {video.description}
          </p>
        )}
      </div>
      
      {/* Comments Section */}
      <CommentsSection 
        lessonPath={lessonPath} 
        lessonTitle={video?.lesson_title || fallbackTitle || 'Dars'} 
      />
    </div>
  );
}