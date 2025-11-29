import { NextRequest, NextResponse } from "next/server";
import { getPool } from "@/lib/db";

export async function POST(req: NextRequest) {
  console.log("=== POST /api/access/verify START ===");
  
  try {
    const { code } = await req.json();
    console.log("Checking code:", code);

    if (!code) {
      return NextResponse.json(
        { success: false, message: "Kod kiriting" },
        { status: 400 }
      );
    }

    // VAQTINCHALIK: Hardcoded test kodlar (database'siz)
    const validCodes = [
      "A4RZ-RAP7-KLB5-KZP9",
      "TEST-CODE-1234-5678",
      "DEMO-DEMO-DEMO-DEMO"
    ];

    if (validCodes.includes(code.toUpperCase())) {
      console.log(`✅ Access granted with code: ${code} (hardcoded)`);
      
      // Response yaratish
      const response = NextResponse.json({
        success: true,
        message: "Kirish muvaffaqiyatli!",
        code: {
          name: "Test Code",
        },
      });

      // Cookie o'rnatish - 7 kun amal qiladi
      response.cookies.set('has_access', 'true', {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 kun
        path: '/',
      });

      // Access code'ni ham cookie'ga saqlash
      response.cookies.set('access_code', code, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      });

      return response;
    }

    // Database'dan tekshirish (agar ulanish bo'lsa)
    try {
      const pool = getPool();

      // Kodni database'dan topish
      const [rows] = await pool.execute(
        `SELECT * FROM access_codes WHERE code = ? AND is_active = 1`,
        [code]
      );

      const accessCodes = rows as any[];
      console.log("Found codes:", accessCodes.length);

      if (accessCodes.length === 0) {
        console.log("Code not found or inactive");
        return NextResponse.json(
          { success: false, message: "Kod noto'g'ri yoki nofaol!" },
          { status: 401 }
        );
      }

      const accessCode = accessCodes[0];

      // Muddati tugaganligini tekshirish
      if (accessCode.expires_at) {
        const expiryDate = new Date(accessCode.expires_at);
        const now = new Date();
        console.log("Expiry date:", expiryDate);
        console.log("Current date:", now);
        console.log("Is expired:", expiryDate < now);
        
        if (expiryDate < now) {
          console.log("Code is expired/blocked");
          return NextResponse.json(
            { 
              success: false, 
              message: "Bu kod blockdan chiqarilgan!\n\nMuddat tugagan: " + 
                expiryDate.toLocaleDateString("uz-UZ") + 
                "\n\nAdmin bilan bog'laning.",
              blocked: true
            },
            { status: 403 }
          );
        }
      }

      // Max uses tekshirish
      if (accessCode.max_uses !== null && accessCode.used_count >= accessCode.max_uses) {
        return NextResponse.json(
          { 
            success: false, 
            message: "Bu kod limitga yetdi!\n\nAdmin bilan bog'laning.",
            blocked: true
          },
          { status: 403 }
        );
      }

      // Foydalanish sonini oshirish
      await pool.execute(
        `UPDATE access_codes 
         SET used_count = used_count + 1, 
             last_used_at = NOW() 
         WHERE id = ?`,
        [accessCode.id]
      );

      console.log(`✅ Access granted with code: ${code}`);
    } catch (dbError) {
      console.log("Database error, kod topilmadi:", dbError);
      return NextResponse.json(
        { success: false, message: "Kod noto'g'ri!" },
        { status: 401 }
      );
    }

    // Response yaratish
    const response = NextResponse.json({
      success: true,
      message: "Kirish muvaffaqiyatli!",
      code: {
        name: accessCode.name,
      },
    });

    // Cookie o'rnatish - 7 kun amal qiladi
    response.cookies.set('has_access', 'true', {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 kun
      path: '/',
    });

    // Access code'ni ham cookie'ga saqlash (agar kerak bo'lsa)
    response.cookies.set('access_code', code, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error("Access verify error:", error);
    return NextResponse.json(
      { success: false, message: "Server xatosi" },
      { status: 500 }
    );
  } finally {
    console.log("=== POST /api/access/verify END ===");
  }
}