import { NextResponse } from 'next/server';
import { initDatabase, testConnection } from '@/lib/db';

export async function GET() {
  try {
    // Test connection first
    const isConnected = await testConnection();
    
    if (!isConnected) {
      return NextResponse.json({
        success: false,
        message: 'Database connection failed! Check your .env.local settings.',
      }, { status: 500 });
    }

    // Initialize database
    await initDatabase();

    return NextResponse.json({
      success: true,
      message: 'Database initialized successfully!',
    });
  } catch (error: any) {
    console.error('Database init error:', error);
    return NextResponse.json({
      success: false,
      message: error.message || 'Database initialization failed!',
    }, { status: 500 });
  }
}
