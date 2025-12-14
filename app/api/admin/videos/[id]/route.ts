import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

// PUT - Video yangilash
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json();
    const { lesson_title, youtube_video_id, video_title, description, is_active } = body;
    const resolvedParams = await params;
    const videoId = resolvedParams.id;

    const pool = getPool();
    
    // YouTube video ID'dan faqat ID qismini olish
    let cleanVideoId = youtube_video_id;
    if (youtube_video_id) {
      const match = youtube_video_id.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/);
      if (match) {
        cleanVideoId = match[1];
      }
    }

    await pool.execute(`
      UPDATE lesson_videos 
      SET 
        lesson_title = ?,
        youtube_video_id = ?,
        video_title = ?,
        description = ?,
        is_active = ?,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `, [lesson_title, cleanVideoId, video_title, description, is_active ?? true, videoId]);

    return NextResponse.json({
      success: true,
      message: 'Video muvaffaqiyatli yangilandi'
    });
  } catch (error) {
    console.error('Video update error:', error);
    return NextResponse.json(
      { success: false, message: 'Video yangilashda xatolik' },
      { status: 500 }
    );
  }
}

// DELETE - Video o'chirish
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const videoId = resolvedParams.id;
    const pool = getPool();

    await pool.execute('DELETE FROM lesson_videos WHERE id = ?', [videoId]);

    return NextResponse.json({
      success: true,
      message: 'Video muvaffaqiyatli o\'chirildi'
    });
  } catch (error) {
    console.error('Video delete error:', error);
    return NextResponse.json(
      { success: false, message: 'Video o\'chirishda xatolik' },
      { status: 500 }
    );
  }
}