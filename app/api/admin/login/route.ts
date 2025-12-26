import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { phone, password } = await request.json();

    // Admin ma'lumotlari (serverda)
    const ADMIN_PHONE = "+998990022701";
    const ADMIN_PASSWORD = "@Qwer1234";

    // Ma'lumotlarni tekshirish
    if (phone === ADMIN_PHONE && password === ADMIN_PASSWORD) {
      return NextResponse.json({
        success: true,
        message: "Muvaffaqiyatli kirish",
        admin: {
          phone: ADMIN_PHONE,
          role: "admin"
        }
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Telefon raqam yoki parol noto'g'ri!"
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