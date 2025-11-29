import { NextRequest, NextResponse } from "next/server";
import { getCurrentUserFromCookies } from "@/lib/auth";
import { getPool } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const user = await getCurrentUserFromCookies();

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Tizimga kiring" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const paymentId = searchParams.get("id");

    if (!paymentId) {
      return NextResponse.json(
        { success: false, message: "Payment ID topilmadi" },
        { status: 400 }
      );
    }

    const pool = getPool();
    const connection = await pool.getConnection();

    try {
      // To'lovni tekshirish
      const [payments]: any = await connection.query(
        "SELECT status FROM payments WHERE payment_id = ?",
        [paymentId]
      );

      if (payments.length === 0) {
        return NextResponse.json(
          { success: false, message: "To'lov topilmadi" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        status: payments[0].status,
      });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Status check error:", error);
    return NextResponse.json(
      { success: false, message: "Server xatosi" },
      { status: 500 }
    );
  }
}
