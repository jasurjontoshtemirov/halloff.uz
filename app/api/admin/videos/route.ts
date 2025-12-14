import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

// GET - Barcha videolarni olish
export async function GET(request: NextRequest) {
  try {
    const pool = getPool();
    const [videos] = await pool.execute(`
      SELECT 
        id,
        lesson_path,
        lesson_title,
        youtube_video_id,
        video_title,
        description,
        is_active,
        created_at,
        updated_at
      FROM lesson_videos 
      ORDER BY lesson_path ASC
    `);

    return NextResponse.json({
      success: true,
      videos
    });
  } catch (error) {
    console.error('Videos fetch error:', error);
    return NextResponse.json(
      { success: false, message: 'Videolarni olishda xatolik' },
      { status: 500 }
    );
  }
}

// POST - Yangi video qo'shish yoki yangilash
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lesson_path, lesson_title, youtube_video_id, video_title, description, is_active } = body;

    if (!lesson_path || !lesson_title) {
      return NextResponse.json(
        { success: false, message: 'Lesson path va title majburiy' },
        { status: 400 }
      );
    }

    const pool = getPool();
    
    // YouTube video ID'dan faqat ID qismini olish
    let cleanVideoId = youtube_video_id;
    if (youtube_video_id) {
      // https://www.youtube.com/watch?v=VIDEO_ID formatidan VIDEO_ID ni olish
      const match = youtube_video_id.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/);
      if (match) {
        cleanVideoId = match[1];
      }
    }

    await pool.execute(`
      INSERT INTO lesson_videos (
        lesson_path, 
        lesson_title, 
        youtube_video_id, 
        video_title, 
        description, 
        is_active
      ) VALUES (?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        lesson_title = VALUES(lesson_title),
        youtube_video_id = VALUES(youtube_video_id),
        video_title = VALUES(video_title),
        description = VALUES(description),
        is_active = VALUES(is_active),
        updated_at = CURRENT_TIMESTAMP
    `, [lesson_path, lesson_title, cleanVideoId, video_title, description, is_active ?? true]);

    return NextResponse.json({
      success: true,
      message: 'Video muvaffaqiyatli saqlandi'
    });
  } catch (error) {
    console.error('Video save error:', error);
    return NextResponse.json(
      { success: false, message: 'Video saqlashda xatolik' },
      { status: 500 }
    );
  }
}