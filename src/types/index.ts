export interface SignupData {
  name: string;
  email: string;
  newsletter_consent?: boolean;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface VibeCodingSignup {
  id: string;
  name: string;
  email: string;
  newsletter_consent: boolean;
  created_at: string;
  updated_at: string;
} 