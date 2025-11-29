import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();

    // Admin code tekshirish (case-insensitive)
    const adminCode = "K6YD2007@GMAIL";
    if (code.toUpperCase() !== adminCode.toUpperCase()) {
      return NextResponse.json(
        { success: false, message: "Admin kodi noto'g'ri!" },
        { status: 401 }
      );
    }

    // Response yaratish
    const response = NextResponse.json({
      success: true,
      message: "Admin kirish muvaffaqiyatli!",
    });

    // Admin cookie'larini o'rnatish
    response.cookies.set('has_access', 'true', {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 kun
      path: '/',
    });

    response.cookies.set('is_admin', 'true', {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });

    response.cookies.set('auth_token', 'admin-token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error("Admin access error:", error);
    return NextResponse.json(
      { success: false, message: "Server xatosi" },
      { status: 500 }
    );
  }
}
