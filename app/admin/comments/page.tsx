"use client";

import { useState, useEffect } from 'react';
import { MessageCircle, Check, X, Reply, Clock, User, AlertCircle, Filter, Search } from 'lucide-react';

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

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default function AdminCommentsPage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('pending');
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0
  });
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [filter, pagination.page]);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/comments?status=${filter}&page=${pagination.page}&limit=${pagination.limit}`);
      const data = await response.json();
      
      if (data.success) {
        setComments(data.comments);
        setPagination(data.pagination);
      }
    } catch (error) {
      console.error('Comments fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (commentId: number, action: 'approve' | 'reject', adminReply?: string) => {
    try {
      setSubmitting(true);
      const response = await fetch('/api/admin/comments', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          comment_id: commentId,
          action: action === 'approve' && adminReply ? 'reply' : action,
          admin_reply: adminReply,
          admin_name: 'Admin' // Bu yerda haqiqiy admin ismini qo'yish kerak
        })
      });

      const data = await response.json();
      
      if (data.success) {
        await fetchComments();
        setReplyingTo(null);
        setReplyText('');
        alert(data.message);
      } else {
        alert('Xatolik: ' + data.message);
      }
    } catch (error) {
      console.error('Action error:', error);
      alert('Amal bajarishda xatolik yuz berdi');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReply = async (commentId: number) => {
    if (!replyText.trim()) {
      alert('Javob matnini kiriting');
      return;
    }
    
    await handleAction(commentId, 'approve', replyText);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('uz-UZ', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (isApproved: boolean) => {
    return isApproved 
      ? 'bg-green-100 text-green-800' 
      : 'bg-yellow-100 text-yellow-800';
  };

  const getStatusText = (isApproved: boolean) => {
    return isApproved ? 'Tasdiqlangan' : 'Kutilmoqda';
  };

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
        <h1 className="text-3xl font-bold text-gray-100 mb-2">Izohlar Boshqaruvi</h1>
        <p className="text-gray-400">Foydalanuvchi izohlarini ko'ring, tasdiqlang va javob bering</p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === 'pending' 
                ? 'bg-yellow-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Kutilayotgan
          </button>
          <button
            onClick={() => setFilter('approved')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === 'approved' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Tasdiqlangan
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Barchasi
          </button>
        </div>

        <div className="text-sm text-gray-400">
          Jami: {pagination.total} ta izoh
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-yellow-400">{comments.filter(c => !c.is_approved).length}</div>
          <div className="text-gray-400 text-sm">Kutilayotgan</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-400">{comments.filter(c => c.is_approved).length}</div>
          <div className="text-gray-400 text-sm">Tasdiqlangan</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-400">{comments.filter(c => c.admin_reply).length}</div>
          <div className="text-gray-400 text-sm">Javob berilgan</div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="text-center py-12 bg-gray-800 rounded-lg">
            <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">Izohlar topilmadi</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-gray-100">{comment.user_name}</h4>
                      <span className="text-gray-400 text-sm">{comment.user_email}</span>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(comment.is_approved)}`}>
                        {getStatusText(comment.is_approved)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatDate(comment.created_at)}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {comment.lesson_path}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {comment.comment_text}
                    </p>
                    
                    {/* Admin Reply */}
                    {comment.admin_reply && (
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">A</span>
                          </div>
                          <span className="text-blue-400 font-semibold text-sm">
                            Admin javobi ({comment.admin_reply_by})
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

              {/* Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-700">
                {!comment.is_approved && (
                  <>
                    <button
                      onClick={() => handleAction(comment.id, 'approve')}
                      disabled={submitting}
                      className="flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all disabled:opacity-50"
                    >
                      <Check className="w-4 h-4" />
                      Tasdiqlash
                    </button>
                    <button
                      onClick={() => handleAction(comment.id, 'reject')}
                      disabled={submitting}
                      className="flex items-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all disabled:opacity-50"
                    >
                      <X className="w-4 h-4" />
                      Rad etish
                    </button>
                  </>
                )}
                
                {!comment.admin_reply && (
                  <button
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                    className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
                  >
                    <Reply className="w-4 h-4" />
                    Javob berish
                  </button>
                )}
              </div>

              {/* Reply Form */}
              {replyingTo === comment.id && (
                <div className="mt-4 p-4 bg-gray-900 rounded-lg border border-gray-600">
                  <h5 className="text-sm font-semibold text-gray-200 mb-3">Admin javobi</h5>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 focus:border-blue-500 focus:outline-none mb-3"
                    placeholder="Javobingizni yozing..."
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => {
                        setReplyingTo(null);
                        setReplyText('');
                      }}
                      className="px-3 py-2 text-gray-400 hover:text-gray-300 hover:bg-gray-700 rounded-lg transition-all"
                    >
                      Bekor qilish
                    </button>
                    <button
                      onClick={() => handleReply(comment.id)}
                      disabled={submitting || !replyText.trim()}
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all disabled:opacity-50"
                    >
                      {submitting ? 'Yuborilmoqda...' : 'Javob yuborish'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          <button
            onClick={() => setPagination(prev => ({ ...prev, page: Math.max(1, prev.page - 1) }))}
            disabled={pagination.page === 1}
            className="px-3 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Oldingi
          </button>
          
          <span className="px-3 py-2 text-gray-400">
            {pagination.page} / {pagination.totalPages}
          </span>
          
          <button
            onClick={() => setPagination(prev => ({ ...prev, page: Math.min(prev.totalPages, prev.page + 1) }))}
            disabled={pagination.page === pagination.totalPages}
            className="px-3 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Keyingi
          </button>
        </div>
      )}
    </div>
  );
}