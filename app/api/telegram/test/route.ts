import { NextRequest, NextResponse } from 'next/server';
import { telegramService } from '@/lib/telegram';

// GET - Telegram bot test
export async function GET(request: NextRequest) {
  try {
    const success = await telegramService.sendTestMessage();
    
    return NextResponse.json({
      success,
      message: success 
        ? 'Test xabar muvaffaqiyatli yuborildi!' 
        : 'Telegram konfiguratsiya qilinmagan yoki xatolik yuz berdi'
    });
  } catch (error) {
    console.error('Telegram test error:', error);
    return NextResponse.json(
      { success: false, message: 'Test xabar yuborishda xatolik' },
      { status: 500 }
    );
  }
}