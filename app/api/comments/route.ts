import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

// GET - Dars uchun izohlarni olish
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lessonPath = searchParams.get('lesson_path');

    if (!lessonPath) {
      return NextResponse.json(
        { success: false, message: 'Lesson path majburiy' },
        { status: 400 }
      );
    }

    const pool = getPool();
    const [comments] = await pool.execute(`
      SELECT 
        id,
        lesson_path,
        user_name,
        user_email,
        comment_text,
        parent_id,
        is_approved,
        admin_reply,
        admin_reply_by,
        admin_reply_at,
        created_at,
        updated_at
      FROM lesson_comments 
      WHERE lesson_path = ? AND is_approved = TRUE
      ORDER BY created_at DESC
    `, [lessonPath]);

    return NextResponse.json({
      success: true,
      comments
    });
  } catch (error) {
    console.error('Comments fetch error:', error);
    return NextResponse.json(
      { success: false, message: 'Izohlarni olishda xatolik' },
      { status: 500 }
    );
  }
}

// POST - Yangi izoh qo'shish
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lesson_path, user_name, user_email, comment_text, parent_id } = body;

    if (!lesson_path || !user_name || !user_email || !comment_text) {
      return NextResponse.json(
        { success: false, message: 'Barcha maydonlar majburiy' },
        { status: 400 }
      );
    }

    // Basic validation
    if (user_name.length < 2 || user_name.length > 100) {
      return NextResponse.json(
        { success: false, message: 'Ism 2-100 ta belgi bo\'lishi kerak' },
        { status: 400 }
      );
    }

    if (comment_text.length < 5 || comment_text.length > 1000) {
      return NextResponse.json(
        { success: false, message: 'Izoh 5-1000 ta belgi bo\'lishi kerak' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      return NextResponse.json(
        { success: false, message: 'Email formati noto\'g\'ri' },
        { status: 400 }
      );
    }

    const pool = getPool();
    
    // Check for spam (same user, same lesson, last 5 minutes)
    const [recentComments]: any = await pool.execute(`
      SELECT COUNT(*) as count 
      FROM lesson_comments 
      WHERE user_email = ? AND lesson_path = ? 
      AND created_at > DATE_SUB(NOW(), INTERVAL 5 MINUTE)
    `, [user_email, lesson_path]);

    if (recentComments[0].count > 0) {
      return NextResponse.json(
        { success: false, message: '5 daqiqada faqat 1 ta izoh qoldirish mumkin' },
        { status: 429 }
      );
    }

    // Insert comment
    await pool.execute(`
      INSERT INTO lesson_comments (
        lesson_path, 
        user_name, 
        user_email, 
        comment_text, 
        parent_id,
        is_approved
      ) VALUES (?, ?, ?, ?, ?, FALSE)
    `, [lesson_path, user_name, user_email, comment_text, parent_id || null]);

    return NextResponse.json({
      success: true,
      message: 'Izoh muvaffaqiyatli yuborildi. Moderatsiyadan o\'tgandan keyin ko\'rsatiladi.'
    });
  } catch (error) {
    console.error('Comment create error:', error);
    return NextResponse.json(
      { success: false, message: 'Izoh yaratishda xatolik' },
      { status: 500 }
    );
  }
}