import { NextRequest, NextResponse } from "next/server";
import { getCurrentUserFromCookies } from "@/lib/auth";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  try {
    const user = await getCurrentUserFromCookies();

    if (!user || user.role !== "admin") {
      return NextResponse.json(
        { success: false, message: "Ruxsat yo'q" },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(req.url);
    const filePath = searchParams.get("path");

    if (!filePath) {
      return NextResponse.json(
        { success: false, message: "File path topilmadi" },
        { status: 400 }
      );
    }

    // File path'ni to'g'rilash
    const fullPath = path.join(process.cwd(), "app", filePath);

    try {
      const content = fs.readFileSync(fullPath, "utf-8");
      
      return NextResponse.json({
        success: true,
        content,
        path: filePath,
      });
    } catch (error) {
      console.error("File read error:", error);
      return NextResponse.json(
        { success: false, message: "File o'qilmadi" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Get content error:", error);
    return NextResponse.json(
      { success: false, message: "Server xatosi" },
      { status: 500 }
    );
  }
}