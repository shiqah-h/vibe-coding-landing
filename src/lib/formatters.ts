// Number formatting utilities
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

// Pluralization helper
export function pluralize(count: number, singular: string, plural?: string): string {
  const pluralForm = plural || `${singular}s`;
  return count === 1 ? singular : pluralForm;
}

// Loading text variants
export const LOADING_TEXTS = {
  DEFAULT: 'Loading...',
  COUNTER: 'Counting signups...',
  FETCHING: 'Fetching latest data...',
} as const;

// Error fallback messages
export const ERROR_MESSAGES = {
  COUNTER_FETCH: 'Unable to load signup count',
  NETWORK_ERROR: 'Network connection issue',
  DEFAULT: 'Something went wrong',
} as const;

// Counter-specific formatting
export function formatSignupCount(count: number): string {
  const formattedCount = formatNumber(count);
  const developer = pluralize(count, 'developer');
  
  if (count === 0) {
    return 'Be the first to join!';
  }
  
  if (count < 10) {
    return `Join ${formattedCount} ${developer} already signed up`;
  }
  
  if (count < 100) {
    return `Join ${formattedCount} ${developer} and counting`;
  }
  
  if (count < 1000) {
    return `Join ${formattedCount} ${developer} in our community`;
  }
  
  return `Join ${formattedCount}+ ${developer} worldwide`;
}

// Skeleton loading text
export function getSkeletonText(): string {
  return 'Join ••• developers already signed up';
}

// Fallback count for errors
export const FALLBACK_COUNT = 1234;

// Cache duration in milliseconds (5 minutes)
export const CACHE_DURATION = 5 * 60 * 1000; 