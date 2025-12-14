import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

// GET - Bitta dars uchun video olish
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string }> }
) {
  try {
    const resolvedParams = await params;
    const lessonPath = decodeURIComponent(resolvedParams.path);
    const pool = getPool();
    
    const [videos]: any = await pool.execute(`
      SELECT 
        id,
        lesson_path,
        lesson_title,
        youtube_video_id,
        video_title,
        description,
        is_active
      FROM lesson_videos 
      WHERE lesson_path = ? AND is_active = TRUE
    `, [lessonPath]);

    if (videos.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'Video topilmadi'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      video: videos[0]
    });
  } catch (error) {
    console.error('Video fetch error:', error);
    return NextResponse.json(
      { success: false, message: 'Video olishda xatolik' },
      { status: 500 }
    );
  }
}