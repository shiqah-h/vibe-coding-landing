import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';
import { validateFormData, sanitizeFormData } from '../../../lib/validation';
import { SignupData } from '../../../types';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate request body
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { name, email, newsletter_consent } = body;

    // Check required fields
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate form data
    const validation = validateFormData({ name, email, newsletter_consent });
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed',
          details: validation.errors 
        },
        { status: 400 }
      );
    }

    // Sanitize input data
    const sanitizedData = sanitizeFormData({ name, email, newsletter_consent });

    // Check for duplicate email
    const { data: existingUser, error: checkError } = await supabase
      .from('vibe_coding_signups')
      .select('id')
      .eq('email', sanitizedData.email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 = no rows returned
      console.error('Database check error:', checkError);
      return NextResponse.json(
        { success: false, error: 'Database error occurred' },
        { status: 500 }
      );
    }

    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Insert new signup
    const { data: newSignup, error: insertError } = await supabase
      .from('vibe_coding_signups')
      .insert([sanitizedData])
      .select()
      .single();

    if (insertError) {
      console.error('Database insert error:', insertError);
      return NextResponse.json(
        { success: false, error: 'Failed to create signup' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        data: newSignup,
        message: 'Signup created successfully' 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Signup API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
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