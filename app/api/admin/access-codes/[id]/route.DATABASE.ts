// DATABASE VERSIYASI - Serverga qo'yganingizda bu faylni ishlating
// Bu faylni route.ts ga rename qiling

import { NextRequest, NextResponse } from "next/server";
import { getPool } from "@/lib/db";

// PATCH - Kodni yangilash (blockdan ochish)
export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const id = params.id;
    const body = await request.json();
    const { expires_at } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID majburiy" },
        { status: 400 }
      );
    }

    const pool = getPool();
    
    // Muddatni yangilash
    const [result] = await pool.execute(
      "UPDATE access_codes SET expires_at = ? WHERE id = ?",
      [expires_at || null, id]
    );

    if ((result as any).affectedRows === 0) {
      return NextResponse.json(
        { success: false, message: "Kod topilmadi" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Kod yangilandi",
    });
  } catch (error) {
    console.error("Update code error:", error);
    return NextResponse.json(
      { success: false, message: "Kod yangilashda xatolik" },
      { status: 500 }
    );
  }
}

// DELETE - Kodni o'chirish
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const id = params.id;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID majburiy" },
        { status: 400 }
      );
    }

    const pool = getPool();
    
    // Kodni o'chirish
    const [result] = await pool.execute(
      "DELETE FROM access_codes WHERE id = ?",
      [id]
    );

    if ((result as any).affectedRows === 0) {
      return NextResponse.json(
        { success: false, message: "Kod topilmadi" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Kod o'chirildi",
    });
  } catch (error) {
    console.error("Delete code error:", error);
    return NextResponse.json(
      { success: false, message: "Kod o'chirishda xatolik" },
      { status: 500 }
    );
  }
}
