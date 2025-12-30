import { NextRequest, NextResponse } from "next/server";
import { getPool } from "../../../../../lib/db";

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { lesson_title, youtube_video_id, video_title, description, is_active } = await request.json();

    // YouTube URL'dan video ID'ni ajratib olish
    let videoId = youtube_video_id;
    if (videoId && videoId.includes('youtube.com')) {
      const match = videoId.match(/[?&]v=([^&]+)/);
      videoId = match ? match[1] : videoId;
    }

    const pool = getPool();
    await pool.execute(`
      UPDATE videos 
      SET lesson_title = ?, youtube_video_id = ?, video_title = ?, description = ?, is_active = ?, updated_at = NOW()
      WHERE id = ?
    `, [lesson_title, videoId, video_title || '', description || null, is_active, id]);

    return NextResponse.json({
      success: true,
      message: "Video muvaffaqiyatli yangilandi"
    });
  } catch (error) {
    console.error("Video update error:", error);
    return NextResponse.json({
      success: false,
      message: "Video yangilashda xatolik"
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    const pool = getPool();
    await pool.execute(`DELETE FROM videos WHERE id = ?`, [id]);

    return NextResponse.json({
      success: true,
      message: "Video muvaffaqiyatli o'chirildi"
    });
  } catch (error) {
    console.error("Video delete error:", error);
    return NextResponse.json({
      success: false,
      message: "Video o'chirishda xatolik"
    }, { status: 500 });
  }
}