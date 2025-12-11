import { NextResponse } from 'next/server';
import { testConnection } from '@/lib/db';

export async function GET() {
  try {
    const isConnected = await testConnection();
    
    if (isConnected) {
      return NextResponse.json({ 
        success: true, 
        message: 'Ma\'lumotlar bazasiga muvaffaqiyatli ulandi!' 
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Ma\'lumotlar bazasiga ulanishda xatolik!' 
      }, { status: 500 });
    }
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      message: 'Xatolik: ' + error.message,
      error: error.toString()
    }, { status: 500 });
  }
}