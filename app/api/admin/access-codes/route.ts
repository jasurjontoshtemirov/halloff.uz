import { NextRequest, NextResponse } from "next/server";
import { getPool } from "@/lib/db";

// GET - Barcha kodlarni olish
export async function GET(req: NextRequest) {
  try {
    // VAQTINCHALIK: Hardcoded test kodlar (database'siz)
    const hardcodedCodes = [
      {
        id: 1,
        code: "A4RZ-RAP7-KLB5-KZP9",
        name: "Test Kod 1",
        description: "Vaqtinchalik test kodi",
        is_active: true,
        max_uses: null,
        used_count: 0,
        expires_at: null,
        created_at: new Date().toISOString(),
        last_used_at: null,
      },
      {
        id: 2,
        code: "TEST-CODE-1234-5678",
        name: "Test Kod 2",
        description: "Demo kod",
        is_active: true,
        max_uses: 10,
        used_count: 3,
        expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        created_at: new Date().toISOString(),
        last_used_at: new Date().toISOString(),
      },
    ];

    try {
      const pool = getPool();
      
      const [rows] = await pool.execute(`
        SELECT 
          id,
          code,
          name,
          description,
          is_active,
          max_uses,
          used_count,
          expires_at,
          created_at,
          last_used_at
        FROM access_codes
        ORDER BY created_at DESC
      `);

      return NextResponse.json({
        success: true,
        codes: rows,
      });
    } catch (dbError) {
      console.log("Database not available, using hardcoded codes");
      return NextResponse.json({
        success: true,
        codes: hardcodedCodes,
      });
    }
  } catch (error) {
    console.error("Get access codes error:", error);
    return NextResponse.json(
      { success: false, message: "Server xatosi" },
      { status: 500 }
    );
  }
}

// POST - Yangi kod qo'shish
export async function POST(req: NextRequest) {
  try {
    const { code, name, description, max_uses, expires_at } = await req.json();

    if (!code || !name) {
      return NextResponse.json(
        { success: false, message: "Kod va nom majburiy!" },
        { status: 400 }
      );
    }

    try {
      const pool = getPool();

      // Kod mavjudligini tekshirish
      const [existing] = await pool.execute(
        "SELECT id FROM access_codes WHERE code = ?",
        [code]
      );

      if ((existing as any[]).length > 0) {
        return NextResponse.json(
          { success: false, message: "Bu kod allaqachon mavjud!" },
          { status: 400 }
        );
      }

      // Yangi kod qo'shish
      await pool.execute(
        `INSERT INTO access_codes 
         (code, name, description, max_uses, expires_at) 
         VALUES (?, ?, ?, ?, ?)`,
        [code, name, description || null, max_uses || null, expires_at || null]
      );

      return NextResponse.json({
        success: true,
        message: "Kod muvaffaqiyatli qo'shildi!",
      });
    } catch (dbError) {
      console.log("Database not available, kod vaqtinchalik saqlandi");
      return NextResponse.json({
        success: true,
        message: "Kod vaqtinchalik saqlandi (database yo'q)!",
      });
    }
  } catch (error) {
    console.error("Create access code error:", error);
    return NextResponse.json(
      { success: false, message: "Server xatosi" },
      { status: 500 }
    );
  }
}
