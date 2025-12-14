import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

// GET - Barcha izohlarni olish (admin uchun)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status'); // 'pending', 'approved', 'all'
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    const pool = getPool();
    
    let whereClause = '';
    let params: any[] = [];
    
    if (status === 'pending') {
      whereClause = 'WHERE is_approved = FALSE';
    } else if (status === 'approved') {
      whereClause = 'WHERE is_approved = TRUE';
    }
    
    // Get total count
    const [countResult]: any = await pool.execute(`
      SELECT COUNT(*) as total FROM lesson_comments ${whereClause}
    `);
    
    const total = countResult[0].total;
    
    // Get comments with pagination
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
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `, [limit, offset]);

    return NextResponse.json({
      success: true,
      comments,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Admin comments fetch error:', error);
    return NextResponse.json(
      { success: false, message: 'Izohlarni olishda xatolik' },
      { status: 500 }
    );
  }
}

// PUT - Izohni tasdiqlash/rad etish
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { comment_id, action, admin_reply, admin_name } = body;

    if (!comment_id || !action) {
      return NextResponse.json(
        { success: false, message: 'Comment ID va action majburiy' },
        { status: 400 }
      );
    }

    const pool = getPool();
    
    if (action === 'approve') {
      await pool.execute(`
        UPDATE lesson_comments 
        SET is_approved = TRUE, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `, [comment_id]);
      
      return NextResponse.json({
        success: true,
        message: 'Izoh tasdiqlandi'
      });
    } else if (action === 'reject') {
      await pool.execute(`
        DELETE FROM lesson_comments WHERE id = ?
      `, [comment_id]);
      
      return NextResponse.json({
        success: true,
        message: 'Izoh rad etildi va o\'chirildi'
      });
    } else if (action === 'reply') {
      if (!admin_reply || !admin_name) {
        return NextResponse.json(
          { success: false, message: 'Admin javobi va nomi majburiy' },
          { status: 400 }
        );
      }
      
      await pool.execute(`
        UPDATE lesson_comments 
        SET 
          admin_reply = ?,
          admin_reply_by = ?,
          admin_reply_at = CURRENT_TIMESTAMP,
          is_approved = TRUE,
          updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `, [admin_reply, admin_name, comment_id]);
      
      return NextResponse.json({
        success: true,
        message: 'Admin javobi qo\'shildi'
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Noto\'g\'ri action' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Comment action error:', error);
    return NextResponse.json(
      { success: false, message: 'Amal bajarishda xatolik' },
      { status: 500 }
    );
  }
}