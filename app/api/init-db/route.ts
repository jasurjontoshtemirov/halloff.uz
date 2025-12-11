import { NextResponse } from 'next/server';
import { initDatabase, testConnection } from '@/lib/db';

export async function GET() {
  try {
    // Test connection first
    const isConnected = await testConnection();
    if (!isConnected) {
      return NextResponse.json(
        { success: false, message: 'Database connection failed' },
        { status: 500 }
      );
    }

    // Initialize database
    await initDatabase();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database initialized successfully' 
    });
  } catch (error) {
    console.error('Database initialization error:', error);
    return NextResponse.json(
      { success: false, message: 'Database initialization failed', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}