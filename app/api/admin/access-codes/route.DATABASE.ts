// DATABASE VERSIYASI - Serverga qo'yganingizda bu faylni ishlating
// 1. Bu faylni route.ts ga rename qiling
// 2. lib/access-codes-storage.ts faylini o'chiring

import { NextRequest, NextResponse } from "next/server";
import { getPool } from "@/lib/db";

// GET - Barcha kodlarni olish
export async function GET() {
  try {
    const pool = getPool();
    
    // Jadval mavjudligini tekshirish va yaratish
    try {
      await pool.execute(`
        CREATE TABLE IF NOT EXISTS access_codes (
          id INT AUTO_INCREMENT PRIMARY KEY,
          code VARCHAR(50) UNIQUE NOT NULL,
          name VARCHAR(255),
          description TEXT,
          is_active BOOLEAN DEFAULT TRUE,
          max_uses INT NULL,
          used_count INT DEFAULT 0,
          expires_at DATETIME NULL,
          created_by INT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          last_used_at TIMESTAMP NULL,
          INDEX idx_code (code),
          INDEX idx_active (is_active),
          INDEX idx_expires (expires_at)
        )
      `);
    } catch (tableError) {
      console.error("Table creation error:", tableError);
    }
    
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
  } catch (error) {
    console.error("Get codes error:", error);
    return NextResponse.json({
      success: true,
      codes: [],
    });
  }
}

// POST - Yangi kod qo'shish
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code, name, description, max_uses, expires_at } = body;

    if (!code || !name) {
      return NextResponse.json(
        { success: false, message: "Kod va nom majburiy" },
        { status: 400 }
      );
    }

    const pool = getPool();
    
    // Jadval mavjudligini tekshirish va yaratish
    try {
      await pool.execute(`
        CREATE TABLE IF NOT EXISTS access_codes (
          id INT AUTO_INCREMENT PRIMARY KEY,
          code VARCHAR(50) UNIQUE NOT NULL,
          name VARCHAR(255),
          description TEXT,
          is_active BOOLEAN DEFAULT TRUE,
          max_uses INT NULL,
          used_count INT DEFAULT 0,
          expires_at DATETIME NULL,
          created_by INT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          last_used_at TIMESTAMP NULL,
          INDEX idx_code (code),
          INDEX idx_active (is_active),
          INDEX idx_expires (expires_at)
        )
      `);
    } catch (tableError) {
      console.error("Table creation error:", tableError);
    }
    
    // Kod mavjudligini tekshirish
    const [existing] = await pool.execute(
      "SELECT id FROM access_codes WHERE code = ?",
      [code]
    );

    if ((existing as any[]).length > 0) {
      return NextResponse.json(
        { success: false, message: "Bu kod allaqachon mavjud" },
        { status: 400 }
      );
    }

    // Yangi kod qo'shish
    const [result] = await pool.execute(
      `INSERT INTO access_codes (code, name, description, max_uses, expires_at) 
       VALUES (?, ?, ?, ?, ?)`,
      [code, name, description || null, max_uses || null, expires_at || null]
    );
    return NextResponse.json({
      success: true,
      message: "Kod muvaffaqiyatli qo'shildi",
      id: (result as any).insertId,
    });
    
  } catch (error) {
    console.error("Create code error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Kod yaratishda xatolik",
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
