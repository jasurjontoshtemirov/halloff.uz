import { NextRequest, NextResponse } from "next/server";
import { getPool } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    // Cookie'dan user ID olish
    const authToken = req.cookies.get('auth_token');
    
    if (!authToken) {
      return NextResponse.json(
        { success: false, message: "Tizimga kiring" },
        { status: 401 }
      );
    }

    // JWT token'ni decode qilish
    const jwt = require('jsonwebtoken');
    let decoded;
    try {
      decoded = jwt.verify(authToken.value, process.env.JWT_SECRET || 'secret');
    } catch (error) {
      return NextResponse.json(
        { success: false, message: "Token noto'g'ri" },
        { status: 401 }
      );
    }

    const pool = getPool();
    const connection = await pool.getConnection();

    try {
      // Foydalanuvchini topish
      const [users]: any = await connection.query(
        "SELECT id, name, email, role, subscription_status, subscription_end FROM users WHERE id = ?",
        [decoded.id]
      );

      if (users.length === 0) {
        return NextResponse.json(
          { success: false, message: "Foydalanuvchi topilmadi" },
          { status: 404 }
        );
      }

      const dbUser = users[0];

      // Admin'lar uchun obuna kerak emas
      if (dbUser.role === 'admin') {
        return NextResponse.json(
          { success: false, message: "Admin'lar uchun obuna kerak emas" },
          { status: 400 }
        );
      }

      // Agar allaqachon aktiv obuna bo'lsa
      if (dbUser.subscription_status === "active") {
        const endDate = new Date(dbUser.subscription_end);
        if (endDate > new Date()) {
          return NextResponse.json(
            { 
              success: false, 
              message: "Sizda aktiv obuna mavjud",
              subscriptionEnd: dbUser.subscription_end
            },
            { status: 400 }
          );
        }
      }

      // To'lov ID yaratish
      const paymentId = `PAY_${Date.now()}_${dbUser.id}`;

      // To'lov ma'lumotlarini saqlash
      await connection.query(
        `INSERT INTO payments (user_id, amount, status, payment_id, created_at) 
         VALUES (?, ?, ?, ?, NOW())`,
        [dbUser.id, 10000, "pending", paymentId]
      );

      // Console'ga log qilish (admin ko'rishi uchun)
      console.log('💳 Yangi obuna so\'rovi:');
      console.log('   Foydalanuvchi:', dbUser.name, '(' + dbUser.email + ')');
      console.log('   To\'lov ID:', paymentId);
      console.log('   Summa: 10,000 so\'m');
      console.log('   Admin panel:', 'http://localhost:3001/admin/subscriptions');

      // Admin panelga yo'naltirish (manual tasdiqlash uchun)
      const paymentUrl = `/subscription/pending?id=${paymentId}`;

      return NextResponse.json({
        success: true,
        paymentUrl,
        paymentId,
      });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Subscription create error:", error);
    return NextResponse.json(
      { success: false, message: "Server xatosi" },
      { status: 500 }
    );
  }
}
