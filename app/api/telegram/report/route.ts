import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, title, message, page } = await request.json();

    if (!name || !title || !message) {
      return NextResponse.json(
        { success: false, message: "Barcha maydonlarni to'ldiring" },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram credentials not configured");
      return NextResponse.json(
        { success: false, message: "Telegram sozlanmagan" },
        { status: 500 }
      );
    }

    // Telegram xabar matni
    const telegramMessage = `
🚨 *Muammo haqida xabar*

👤 *Ism:* ${name}
📋 *Sarlavha:* ${title}
📄 *Sahifa:* ${page || "Noma'lum"}

💬 *Batafsil:*
${message}

⏰ *Vaqt:* ${new Date().toLocaleString("uz-UZ")}
    `.trim();

    // Telegramga yuborish
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramResponse.ok) {
      console.error("Telegram API error:", await telegramResponse.text());
      return NextResponse.json(
        { success: false, message: "Telegram xatosi" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Xabar yuborildi",
    });
  } catch (error) {
    console.error("Report error:", error);
    return NextResponse.json(
      { success: false, message: "Server xatosi" },
      { status: 500 }
    );
  }
}
