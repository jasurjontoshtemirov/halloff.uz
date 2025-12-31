import { NextRequest, NextResponse } from "next/server";
import { getPool } from "../../../../lib/db";

export async function GET(request: NextRequest, { params }: { params: Promise<{ path: string }> }) {
  try {
    const { path } = await params;
    const lessonPath = decodeURIComponent(path);

    // Demo data for testing without database
    const demoVideos: any = {
      '/docs/html/intro': {
        id: 1,
        lesson_path: '/docs/html/intro',
        lesson_title: 'HTML ga Kirish',
        youtube_video_id: 'ReVu2YGweVQ',
        video_url: null,
        video_title: 'HTML ga Kirish - Video dars',
        description: 'HTML asoslari haqida video dars',
        is_active: true
      },
      '/docs/css/intro': {
        id: 2,
        lesson_path: '/docs/css/intro',
        lesson_title: 'CSS ga Kirish',
        youtube_video_id: null,
        video_url: '/videos/css-intro-demo.mp4',
        video_title: 'CSS ga Kirish - Custom Video',
        description: 'CSS asoslari haqida custom video dars',
        is_active: true
      }
    };

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
          is_active
        FROM videos 
        WHERE lesson_path = ? AND is_active = 1
        LIMIT 1
      `, [lessonPath]);

      if ((videos as any[]).length === 0) {
        // Check demo data
        const demoVideo = demoVideos[lessonPath];
        if (demoVideo) {
          return NextResponse.json({
            success: true,
            video: demoVideo
          });
        }
        
        return NextResponse.json({
          success: false,
          message: "Bu dars uchun video topilmadi"
        }, { status: 404 });
      }

      return NextResponse.json({
        success: true,
        video: (videos as any[])[0]
      });
    } catch (dbError) {
      console.log("Database not available, using demo data");
      
      // Use demo data when database is not available
      const demoVideo = demoVideos[lessonPath];
      if (demoVideo) {
        return NextResponse.json({
          success: true,
          video: demoVideo
        });
      }
      
      return NextResponse.json({
        success: false,
        message: "Bu dars uchun video topilmadi (demo mode)"
      }, { status: 404 });
    }
  } catch (error) {
    console.error("Video fetch error:", error);
    return NextResponse.json({
      success: false,
      message: "Video yuklashda xatolik"
    }, { status: 500 });
  }
}