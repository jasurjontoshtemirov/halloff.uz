import { NextRequest, NextResponse } from "next/server";
import { getPool } from "@/lib/db";

// PUT - Kodni yangilash
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { code, name, description, is_active, max_uses, expires_at } = await req.json();

    const pool = getPool();

    // Kodni yangilash
    await pool.execute(
      `UPDATE access_codes 
       SET code = ?, 
           name = ?, 
           description = ?, 
           is_active = ?,
           max_uses = ?,
           expires_at = ?
       WHERE id = ?`,
      [code, name, description || null, is_active, max_uses || null, expires_at || null, id]
    );

    return NextResponse.json({
      success: true,
      message: "Kod muvaffaqiyatli yangilandi!",
    });
  } catch (error) {
    console.error("Update access code error:", error);
    return NextResponse.json(
      { success: false, message: "Database xatosi" },
      { status: 500 }
    );
  }
}

// DELETE - Kodni o'chirish
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const pool = getPool();

    await pool.execute("DELETE FROM access_codes WHERE id = ?", [id]);

    return NextResponse.json({
      success: true,
      message: "Kod muvaffaqiyatli o'chirildi!",
    });
  } catch (error) {
    console.error("Delete access code error:", error);
    return NextResponse.json(
      { success: false, message: "Database xatosi" },
      { status: 500 }
    );
  }
}
