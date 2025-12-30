import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../lib/db";

export async function GET() {
  try {
    const videos = await db.query(`
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
      FROM videos 
      ORDER BY lesson_path ASC
    `);

    return NextResponse.json({
      success: true,
      videos: videos
    });
  } catch (error) {
    console.error("Videos fetch error:", error);
    return NextResponse.json({
      success: false,
      message: "Videolarni yuklashda xatolik"
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { lesson_path, lesson_title, youtube_video_id, video_title, description, is_active } = await request.json();

    if (!lesson_path || !lesson_title) {
      return NextResponse.json({
        success: false,
        message: "Dars yo'li va nomi kiritilishi shart"
      }, { status: 400 });
    }

    // YouTube URL'dan video ID'ni ajratib olish
    let videoId = youtube_video_id;
    if (videoId && videoId.includes('youtube.com')) {
      const match = videoId.match(/[?&]v=([^&]+)/);
      videoId = match ? match[1] : videoId;
    }

    const result = await db.query(`
      INSERT INTO videos (lesson_path, lesson_title, youtube_video_id, video_title, description, is_active)
      VALUES (?, ?, ?, ?, ?, ?)
    `, [lesson_path, lesson_title, videoId, video_title || '', description || null, is_active || true]);

    return NextResponse.json({
      success: true,
      message: "Video muvaffaqiyatli qo'shildi",
      id: result.insertId
    });
  } catch (error) {
    console.error("Video create error:", error);
    return NextResponse.json({
      success: false,
      message: "Video qo'shishda xatolik"
    }, { status: 500 });
  }
}