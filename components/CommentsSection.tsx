"use client";

import { useState, useEffect } from 'react';
import { MessageCircle, Send, User, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface Comment {
  id: number;
  lesson_path: string;
  user_name: string;
  user_email: string;
  comment_text: string;
  parent_id: number | null;
  is_approved: boolean;
  admin_reply: string | null;
  admin_reply_by: string | null;
  admin_reply_at: string | null;
  created_at: string;
  updated_at: string;
}

interface CommentsSectionProps {
  lessonPath: string;
  lessonTitle: string;
}

export default function CommentsSection({ lessonPath, lessonTitle }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    text: ''
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [lessonPath]);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/comments?lesson_path=${encodeURIComponent(lessonPath)}`);
      const data = await response.json();
      
      if (data.success) {
        setComments(data.comments);
      }
    } catch (error) {
      console.error('Comments fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.name.trim() || !newComment.email.trim() || !newComment.text.trim()) {
      alert('Barcha maydonlarni to\'ldiring');
      return;
    }

    try {
      setSubmitting(true);
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lesson_path: lessonPath,
          user_name: newComment.name,
          user_email: newComment.email,
          comment_text: newComment.text
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setNewComment({ name: '', email: '', text: '' });
        setShowForm(false);
        await fetchComments();
        alert('Izohingiz yuborildi! Moderatsiyadan o\'tgandan keyin ko\'rsatiladi.');
      } else {
        alert('Xatolik: ' + data.message);
      }
    } catch (error) {
      console.error('Comment submit error:', error);
      alert('Izoh yuborishda xatolik yuz berdi');
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('uz-UZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const approvedComments = comments.filter(comment => comment.is_approved);

  return (
    <div className="mb-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-100">Izohlar</h2>
            <p className="text-gray-400">
              {approvedComments.length} ta izoh • {lessonTitle}
            </p>
          </div>
        </div>
        
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          Izoh qoldirish
        </button>
      </div>

      {/* Comment Form */}
      {showForm && (
        <div className="mb-8 bg-gray-900/50 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">Yangi izoh</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Ismingiz *
                </label>
                <input
                  type="text"
                  value={newComment.name}
                  onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 focus:border-blue-500 focus:outline-none"
                  placeholder="Ismingizni kiriting"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={newComment.email}
                  onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 focus:border-blue-500 focus:outline-none"
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Izohingiz *
              </label>
              <textarea
                value={newComment.text}
                onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 focus:border-blue-500 focus:outline-none"
                placeholder="Izohingizni yozing..."
                required
              />
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-gray-400 hover:text-gray-300 hover:bg-gray-700 rounded-lg transition-all"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {submitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {submitting ? 'Yuborilmoqda...' : 'Yuborish'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Comments List */}
      <div className="space-y-6">
        {loading ? (
          <div className="text-center py-8">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-gray-400">Izohlar yuklanmoqda...</p>
          </div>
        ) : approvedComments.length === 0 ? (
          <div className="text-center py-8">
            <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-3" />
            <p className="text-gray-400 text-lg">Hali izohlar yo'q</p>
            <p className="text-gray-500 text-sm">Birinchi bo'lib izoh qoldiring!</p>
          </div>
        ) : (
          approvedComments.map((comment) => (
            <div key={comment.id} className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-gray-100">{comment.user_name}</h4>
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <Clock className="w-3 h-3" />
                      {formatDate(comment.created_at)}
                    </div>
                    <div className="flex items-center gap-1 text-green-400 text-sm">
                      <CheckCircle className="w-3 h-3" />
                      Tasdiqlangan
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {comment.comment_text}
                  </p>
                  
                  {/* Admin Reply */}
                  {comment.admin_reply && (
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">A</span>
                        </div>
                        <span className="text-blue-400 font-semibold text-sm">
                          Admin javobi
                        </span>
                        {comment.admin_reply_at && (
                          <span className="text-gray-400 text-xs">
                            • {formatDate(comment.admin_reply_at)}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {comment.admin_reply}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Info */}
      <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-gray-300">
            <p className="font-medium text-yellow-400 mb-1">Izoh qoidalari:</p>
            <ul className="space-y-1 text-gray-400">
              <li>• Izohlar moderatsiyadan o'tadi</li>
              <li>• Haqoratli so'zlar ishlatmang</li>
              <li>• Savollaringizga admin javob beradi</li>
              <li>• Email manzilingiz oshkor qilinmaydi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}