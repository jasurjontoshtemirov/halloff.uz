import { NextRequest, NextResponse } from "next/server";
import { getPool } from "@/lib/db";
import bcrypt from "bcryptjs";
import { RowDataPacket } from "mysql2";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({
        success: false,
        message: "Email va parol kiritilishi shart!"
      }, { status: 400 });
    }

    const pool = getPool();
    const [rows] = await pool.execute<RowDataPacket[]>(
      'SELECT * FROM users WHERE email = ? AND role = ?',
      [email, 'admin']
    );

    const user = rows[0];

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "Email yoki parol noto'g'ri!"
      }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
      // Remove password from response
      const { password: _, ...userWithoutPassword } = user;

      return NextResponse.json({
        success: true,
        message: "Muvaffaqiyatli kirish",
        admin: userWithoutPassword
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Email yoki parol noto'g'ri!"
      }, { status: 401 });
    }

  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json({
      success: false,
      message: "Server xatosi"
    }, { status: 500 });
  }
}