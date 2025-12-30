import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../lib/db";

export async function GET(request: NextRequest, { params }: { params: { path: string } }) {
  try {
    const lessonPath = decodeURIComponent(params.path);

    const videos = await db.query(`
      SELECT 
        id,
        lesson_path,
        lesson_title,
        youtube_video_id,
        video_title,
        description,
        is_active
      FROM videos 
      WHERE lesson_path = ? AND is_active = 1
      LIMIT 1
    `, [lessonPath]);

    if (videos.length === 0) {
      return NextResponse.json({
        success: false,
        message: "Bu dars uchun video topilmadi"
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      video: videos[0]
    });
  } catch (error) {
    console.error("Video fetch error:", error);
    return NextResponse.json({
      success: false,
      message: "Video yuklashda xatolik"
    }, { status: 500 });
  }
}