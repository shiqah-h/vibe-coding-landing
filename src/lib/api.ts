import { SignupData, ApiResponse, VibeCodingSignup } from '../types';

function validateSignup(data: SignupData): string | null {
  if (!data.name || data.name.trim().length === 0) return 'Name is required.';
  if (!data.email || data.email.trim().length === 0) return 'Email is required.';
  // Simple email regex
  if (!/^\S+@\S+\.\S+$/.test(data.email)) return 'Invalid email address.';
  return null;
}

export async function submitSignup(data: SignupData): Promise<ApiResponse<VibeCodingSignup>> {
  const validationError = validateSignup(data);
  if (validationError) return { success: false, error: validationError };
  
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (!response.ok) {
      return { 
        success: false, 
        error: result.error || `HTTP ${response.status}: ${response.statusText}` 
      };
    }

    return { success: true, data: result.data };
  } catch (err: any) {
    return { success: false, error: err.message || 'Network error' };
  }
}

export async function getSignupCount(): Promise<ApiResponse<number>> {
  try {
    const response = await fetch('/api/count', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    
    if (!response.ok) {
      return { 
        success: false, 
        error: result.error || `HTTP ${response.status}: ${response.statusText}` 
      };
    }

    return { success: true, data: result.data || 0 };
  } catch (err: any) {
    return { success: false, error: err.message || 'Network error' };
  }
} 