"use client";

import { useState, useEffect } from 'react';
import { Play, Edit, Trash2, Plus, Save, X, ExternalLink, Search, Filter } from 'lucide-react';

interface Video {
  id: number;
  lesson_path: string;
  lesson_title: string;
  youtube_video_id: string | null;
  video_title: string;
  description: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export default function AdminVideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterActive, setFilterActive] = useState<boolean | null>(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/videos');
      const data = await response.json();
      
      if (data.success) {
        setVideos(data.videos);
      }
    } catch (error) {
      console.error('Videos fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (video: Video) => {
    try {
      const response = await fetch(`/api/admin/videos/${video.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lesson_title: video.lesson_title,
          youtube_video_id: video.youtube_video_id,
          video_title: video.video_title,
          description: video.description,
          is_active: video.is_active
        })
      });

      const data = await response.json();
      
      if (data.success) {
        await fetchVideos();
        setEditingVideo(null);
        alert('Video muvaffaqiyatli yangilandi!');
      } else {
        alert('Xatolik: ' + data.message);
      }
    } catch (error) {
      console.error('Save error:', error);
      alert('Saqlashda xatolik yuz berdi');
    }
  };

  const handleClearVideo = async (video: Video) => {
    if (!confirm('Rostdan ham bu darsdan videoni olib tashlamoqchimisiz? (Dars o\'zi qoladi, faqat video o\'chiriladi)')) return;

    try {
      const response = await fetch(`/api/admin/videos/${video.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lesson_title: video.lesson_title,
          youtube_video_id: null, // Videoni o'chirish
          video_title: '',
          description: null,
          is_active: video.is_active
        })
      });

      const data = await response.json();
      
      if (data.success) {
        await fetchVideos();
        alert('Video muvaffaqiyatli olib tashlandi!');
      } else {
        alert('Xatolik: ' + data.message);
      }
    } catch (error) {
      console.error('Clear video error:', error);
      alert('Video olib tashlanishda xatolik yuz berdi');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('DIQQAT! Bu butun darsni o\'chiradi (video bilan birga). Rostdan ham davom etmoqchimisiz?')) return;

    try {
      const response = await fetch(`/api/admin/videos/${id}`, {
        method: 'DELETE'
      });

      const data = await response.json();
      
      if (data.success) {
        await fetchVideos();
        alert('Video muvaffaqiyatli o\'chirildi!');
      } else {
        alert('Xatolik: ' + data.message);
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('O\'chirishda xatolik yuz berdi');
    }
  };

  const getYouTubeUrl = (videoId: string | null) => {
    if (!videoId) return null;
    return `https://www.youtube.com/watch?v=${videoId}`;
  };

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.lesson_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.lesson_path.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterActive === null || video.is_active === filterActive;
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-100 mb-2">Video Darslar Boshqaruvi</h1>
        <p className="text-gray-400">Har bir dars uchun YouTube videolarini boshqaring</p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Dars nomi yoki yo'li bo'yicha qidirish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-blue-500 focus:outline-none"
          />
        </div>
        
        <div className="flex gap-2">
          <select
            value={filterActive === null ? 'all' : filterActive.toString()}
            onChange={(e) => setFilterActive(e.target.value === 'all' ? null : e.target.value === 'true')}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-blue-500 focus:outline-none"
          >
            <option value="all">Barchasi</option>
            <option value="true">Faol</option>
            <option value="false">Nofaol</option>
          </select>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-400">{videos.length}</div>
          <div className="text-gray-400 text-sm">Jami darslar</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-400">
            {videos.filter(v => v.youtube_video_id).length}
          </div>
          <div className="text-gray-400 text-sm">Video bor</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-red-400">
            {videos.filter(v => !v.youtube_video_id).length}
          </div>
          <div className="text-gray-400 text-sm">Video yo'q</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-yellow-400">
            {videos.filter(v => v.is_active).length}
          </div>
          <div className="text-gray-400 text-sm">Faol darslar</div>
        </div>
      </div>

      {/* Videos Table */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Dars
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Video
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Holat
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Amallar
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredVideos.map((video) => (
                <tr key={video.id} className="hover:bg-gray-700/50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-100">
                        {video.lesson_title}
                      </div>
                      <div className="text-sm text-gray-400">
                        {video.lesson_path}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {video.youtube_video_id ? (
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-12 bg-gray-900 rounded overflow-hidden">
                          <img
                            src={`https://img.youtube.com/vi/${video.youtube_video_id}/mqdefault.jpg`}
                            alt="Video thumbnail"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-sm text-gray-100">{video.video_title}</div>
                          <a
                            href={getYouTubeUrl(video.youtube_video_id)!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1"
                          >
                            YouTube'da ko'rish <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500">Video yo'q</div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      video.is_active 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {video.is_active ? 'Faol' : 'Nofaol'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditingVideo(video)}
                        className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 rounded-lg transition-all"
                        title="Tahrirlash"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      {video.youtube_video_id && (
                        <button
                          onClick={() => handleClearVideo(video)}
                          className="p-2 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 rounded-lg transition-all"
                          title="Videoni olib tashla (dars qoladi)"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(video.id)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-all"
                        title="Butun darsni o'chirish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editingVideo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-100">Video Tahrirlash</h2>
              <button
                onClick={() => setEditingVideo(null)}
                className="p-2 text-gray-400 hover:text-gray-300 hover:bg-gray-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Dars nomi
                </label>
                <input
                  type="text"
                  value={editingVideo.lesson_title}
                  onChange={(e) => setEditingVideo({
                    ...editingVideo,
                    lesson_title: e.target.value
                  })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  YouTube Video URL yoki ID
                </label>
                <input
                  type="text"
                  value={editingVideo.youtube_video_id || ''}
                  onChange={(e) => setEditingVideo({
                    ...editingVideo,
                    youtube_video_id: e.target.value
                  })}
                  placeholder="https://www.youtube.com/watch?v=VIDEO_ID yoki faqat VIDEO_ID"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:border-blue-500 focus:outline-none"
                />
                <p className="text-xs text-gray-400 mt-1">
                  YouTube URL yoki video ID kiriting. Masalan: dQw4w9WgXcQ
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Video sarlavhasi
                </label>
                <input
                  type="text"
                  value={editingVideo.video_title}
                  onChange={(e) => setEditingVideo({
                    ...editingVideo,
                    video_title: e.target.value
                  })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tavsif (ixtiyoriy)
                </label>
                <textarea
                  value={editingVideo.description || ''}
                  onChange={(e) => setEditingVideo({
                    ...editingVideo,
                    description: e.target.value
                  })}
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="is_active"
                  checked={editingVideo.is_active}
                  onChange={(e) => setEditingVideo({
                    ...editingVideo,
                    is_active: e.target.checked
                  })}
                  className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="is_active" className="text-sm text-gray-300">
                  Faol (saytda ko'rsatilsin)
                </label>
              </div>

              {/* Preview */}
              {editingVideo.youtube_video_id && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Oldin ko'rish
                  </label>
                  <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${editingVideo.youtube_video_id.replace(/.*[?&]v=([^&]+).*/, '$1')}?rel=0&modestbranding=1`}
                      className="w-full h-full"
                      title="Video preview"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setEditingVideo(null)}
                className="px-4 py-2 text-gray-400 hover:text-gray-300 hover:bg-gray-700 rounded-lg transition-all"
              >
                Bekor qilish
              </button>
              <button
                onClick={() => handleSave(editingVideo)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Saqlash
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}