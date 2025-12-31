"use client";

import { useState, useEffect, useRef } from 'react';
import { Play, AlertCircle, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
import VideoPlaceholder from './VideoPlaceholder';

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
  video_url?: string; // Custom video URL
}

export default function VideoPlayer({ lessonPath, fallbackTitle }: VideoPlayerProps) {
  const [video, setVideo] = useState<VideoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Custom video player states
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  // Custom video player functions
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (videoRef.current) {
      videoRef.current.volume = vol;
    }
    setIsMuted(vol === 0);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume;
        setIsMuted(false);
      } else {
        videoRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const restart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
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
        
        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 hover:border-yellow-500/50 transition-all overflow-hidden relative group">
          {video?.video_url ? (
            // Custom video player
            <div 
              className="relative w-full h-full"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => isPlaying && setShowControls(false)}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-xl"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                poster="/api/placeholder/800/450"
              >
                <source src={video.video_url} type="video/mp4" />
                Brauzeringiz video formatini qo'llab-quvvatlamaydi.
              </video>

              {/* Play/Pause overlay */}
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={togglePlay}
              >
                {!isPlaying && (
                  <div className="bg-black/50 rounded-full p-4 hover:bg-black/70 transition-all">
                    <Play className="w-12 h-12 text-white ml-1" />
                  </div>
                )}
              </div>

              {/* Custom controls */}
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                {/* Progress bar */}
                <div className="mb-3">
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #eab308 0%, #eab308 ${(currentTime / duration) * 100}%, #4b5563 ${(currentTime / duration) * 100}%, #4b5563 100%)`
                    }}
                  />
                </div>

                {/* Control buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="text-white hover:text-yellow-400 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </button>
                    
                    <button
                      onClick={restart}
                      className="text-white hover:text-yellow-400 transition-colors"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleMute}
                        className="text-white hover:text-yellow-400 transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>

                    <span className="text-white text-sm">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <button
                    onClick={toggleFullscreen}
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : video?.youtube_video_id ? (
            // Fallback to YouTube if no custom video
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${video.youtube_video_id}?rel=0&modestbranding=1`}
              title={video.video_title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <VideoPlaceholder 
              title={video?.video_title || fallbackTitle || 'Video dars'}
              description={error || "Video tez orada qo'shiladi"}
              showDownloadHint={!error}
            />
          )}
        </div>
        
        {video?.description && (
          <p className="text-gray-500 text-sm mt-4 text-left">
            {video.description}
          </p>
        )}
      </div>
    </div>
  );
}