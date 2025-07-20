import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

// Simple in-memory cache (in production, use Redis or similar)
let cache = {
  count: null as number | null,
  timestamp: 0,
  ttl: 5 * 60 * 1000, // 5 minutes
};

export async function GET() {
  try {
    const now = Date.now();
    
    // Check cache first
    if (cache.count !== null && (now - cache.timestamp) < cache.ttl) {
      return NextResponse.json(
        { 
          success: true, 
          data: cache.count,
          cached: true,
          timestamp: cache.timestamp 
        },
        { status: 200 }
      );
    }

    // Query database for count
    const { count, error } = await supabase
      .from('vibe_coding_signups')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('Database count error:', error);
      
      // Return cached value if available, otherwise error
      if (cache.count !== null) {
        return NextResponse.json(
          { 
            success: true, 
            data: cache.count,
            cached: true,
            error: 'Using cached data due to database error',
            timestamp: cache.timestamp 
          },
          { status: 200 }
        );
      }
      
      return NextResponse.json(
        { success: false, error: 'Failed to retrieve count' },
        { status: 500 }
      );
    }

    // Update cache
    const actualCount = count || 0;
    cache.count = actualCount;
    cache.timestamp = now;

    // Return fresh data
    return NextResponse.json(
      { 
        success: true, 
        data: actualCount,
        cached: false,
        timestamp: now 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Count API error:', error);
    
    // Return cached value if available, otherwise error
    if (cache.count !== null) {
      return NextResponse.json(
        { 
          success: true, 
          data: cache.count,
          cached: true,
          error: 'Using cached data due to server error',
          timestamp: cache.timestamp 
        },
        { status: 200 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function POST() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  );
} 