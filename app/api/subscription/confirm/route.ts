import { NextRequest, NextResponse } from "next/server";
import { getCurrentUserFromCookies } from "@/lib/auth-server";
import { getPool } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUserFromCookies();

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Tizimga kiring" },
        { status: 401 }
      );
    }

    const { paymentId } = await req.json();

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
        "SELECT * FROM payments WHERE payment_id = ? AND status = 'pending'",
        [paymentId]
      );

      if (payments.length === 0) {
        return NextResponse.json(
          { success: false, message: "To'lov topilmadi" },
          { status: 404 }
        );
      }

      const payment = payments[0];

      // Foydalanuvchini topish
      const [users]: any = await connection.query(
        "SELECT id FROM users WHERE phone = ?",
        [user.phone]
      );

      if (users.length === 0 || users[0].id !== payment.user_id) {
        return NextResponse.json(
          { success: false, message: "Ruxsat yo'q" },
          { status: 403 }
        );
      }

      // Obuna muddatini hisoblash (30 kun)
      const subscriptionEnd = new Date();
      subscriptionEnd.setDate(subscriptionEnd.getDate() + 30);

      // Foydalanuvchi obunasini yangilash
      await connection.query(
        `UPDATE users 
         SET subscription_status = 'active', 
             subscription_end = ?,
             updated_at = NOW()
         WHERE id = ?`,
        [subscriptionEnd, payment.user_id]
      );

      // To'lov statusini yangilash
      await connection.query(
        `UPDATE payments 
         SET status = 'completed', 
             updated_at = NOW()
         WHERE payment_id = ?`,
        [paymentId]
      );

      return NextResponse.json({
        success: true,
        message: "Obuna muvaffaqiyatli faollashtirildi",
        subscriptionEnd,
      });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Subscription confirm error:", error);
    return NextResponse.json(
      { success: false, message: "Server xatosi" },
      { status: 500 }
    );
  }
}
