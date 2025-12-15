import { NextRequest, NextResponse } from "next/server";
import { getCurrentUserFromCookies } from "@/lib/auth-server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUserFromCookies();

    if (!user || user.role !== "admin") {
      return NextResponse.json(
        { success: false, message: "Ruxsat yo'q" },
        { status: 403 }
      );
    }

    const { path: filePath, content, title } = await req.json();

    if (!filePath || content === undefined) {
      return NextResponse.json(
        { success: false, message: "Path va content kerak" },
        { status: 400 }
      );
    }

    // File path'ni to'g'rilash
    const fullPath = path.join(process.cwd(), "app", filePath);

    try {
      // Backup yaratish
      const backupPath = fullPath + ".backup." + Date.now();
      if (fs.existsSync(fullPath)) {
        fs.copyFileSync(fullPath, backupPath);
      }

      // Yangi content'ni yozish
      fs.writeFileSync(fullPath, content, "utf-8");
      
      console.log(`✅ Content saqlandi: ${filePath}`);
      console.log(`📁 Backup: ${backupPath}`);
      
      return NextResponse.json({
        success: true,
        message: "Content muvaffaqiyatli saqlandi",
        path: filePath,
        backupPath,
      });
    } catch (error) {
      console.error("File write error:", error);
      return NextResponse.json(
        { success: false, message: "File saqlanmadi" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Save content error:", error);
    return NextResponse.json(
      { success: false, message: "Server xatosi" },
      { status: 500 }
    );
  }
}