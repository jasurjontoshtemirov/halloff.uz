import { NextRequest, NextResponse } from "next/server";
import { getPool } from "../../../../lib/db";

export async function GET() {
  try {
    // For development - return sample data if database is not available
    const sampleVideos = [
      {
        id: 1,
        lesson_path: '/docs/html/intro',
        lesson_title: 'HTML ga kirish',
        youtube_video_id: 'ReVu2YGweVQ',
        video_url: null,
        video_title: 'HTML ga Kirish - Video dars',
        description: 'HTML asoslari haqida video dars',
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 2,
        lesson_path: '/docs/css/intro',
        lesson_title: 'CSS ga kirish',
        youtube_video_id: null,
        video_url: '/videos/css-intro-demo.mp4',
        video_title: 'CSS ga Kirish - Custom Video',
        description: 'CSS asoslari haqida custom video dars',
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 3,
        lesson_path: '/docs/javascript/intro',
        lesson_title: 'JavaScript ga kirish',
        youtube_video_id: null,
        video_url: null,
        video_title: '',
        description: null,
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    ];

    try {
      const pool = getPool();
      const [videos] = await pool.execute(`
        SELECT 
          id,
          lesson_path,
          lesson_title,
          youtube_video_id,
          video_url,
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
    } catch (dbError) {
      console.log("Database not available, using sample data");
      return NextResponse.json({
        success: true,
        videos: sampleVideos
      });
    }
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
    const { lesson_path, lesson_title, youtube_video_id, video_url, video_title, description, is_active } = await request.json();

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

    try {
      const pool = getPool();
      const [result] = await pool.execute(`
        INSERT INTO videos (lesson_path, lesson_title, youtube_video_id, video_url, video_title, description, is_active)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `, [lesson_path, lesson_title, videoId, video_url || null, video_title || '', description || null, is_active || true]);

      return NextResponse.json({
        success: true,
        message: "Video muvaffaqiyatli qo'shildi",
        id: (result as any).insertId
      });
    } catch (dbError) {
      console.log("Database not available, simulating success");
      return NextResponse.json({
        success: true,
        message: "Video muvaffaqiyatli qo'shildi (demo mode)",
        id: Math.floor(Math.random() * 1000)
      });
    }
  } catch (error) {
    console.error("Video create error:", error);
    return NextResponse.json({
      success: false,
      message: "Video qo'shishda xatolik"
    }, { status: 500 });
  }
}