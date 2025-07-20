import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase: SupabaseClient = createClient<unknown>(supabaseUrl, supabaseAnonKey);

// Generic error handling wrapper for Supabase calls
export async function withSupabase<T>(fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Supabase error');
  }
} 