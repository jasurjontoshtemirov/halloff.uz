import { NextResponse } from "next/server";
import { getCurrentUserFromCookies } from "@/lib/auth-server";
import { getPool } from "@/lib/db";

export async function GET() {
  try {
    const user = await getCurrentUserFromCookies();

    if (!user || user.role !== "admin") {
      return NextResponse.json(
        { success: false, message: "Ruxsat yo'q" },
        { status: 403 }
      );
    }

    const pool = getPool();
    const connection = await pool.getConnection();

    try {
      // Barcha to'lovlarni olish (user ma'lumotlari bilan)
      const [payments]: any = await connection.query(
        `SELECT 
          p.*,
          u.name as user_name,
          u.phone as user_phone,
          u.subscription_end
        FROM payments p
        JOIN users u ON p.user_id = u.id
        ORDER BY p.created_at DESC`
      );

      return NextResponse.json({
        success: true,
        payments,
      });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Get payments error:", error);
    return NextResponse.json(
      { success: false, message: "Server xatosi" },
      { status: 500 }
    );
  }
}
