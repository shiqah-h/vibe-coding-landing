'use client';

import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSignupCount } from '../../lib/api';
import { 
  formatSignupCount, 
  getSkeletonText, 
  FALLBACK_COUNT, 
  LOADING_TEXTS,
  ERROR_MESSAGES 
} from '../../lib/formatters';
import LoadingSpinner from '../ui/LoadingSpinner';

interface SignupCounterProps {
  className?: string;
  showLoadingSpinner?: boolean;
  autoRefresh?: boolean;
}

export default function SignupCounter({ 
  className = '', 
  showLoadingSpinner = true,
  autoRefresh = true 
}: SignupCounterProps) {
  const {
    data: count,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['signupCount'],
    queryFn: async () => {
      const response = await getSignupCount();
      if (!response.success) {
        throw new Error(response.error || ERROR_MESSAGES.COUNTER_FETCH);
      }
      return response.data || 0;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: autoRefresh,
    retry: 2,
    retryDelay: 1000,
  });

  // Memoize formatted text to prevent unnecessary re-renders
  const displayText = useMemo(() => {
    if (isLoading) {
      return getSkeletonText();
    }
    
    if (isError) {
      return formatSignupCount(FALLBACK_COUNT);
    }
    
    return formatSignupCount(count || 0);
  }, [count, isLoading, isError]);

  // Handle retry on error
  const handleRetry = () => {
    refetch();
  };

  return (
    <div className={`text-center ${className}`}>
      <div className="flex items-center justify-center space-x-2">
        {isLoading && showLoadingSpinner && (
          <LoadingSpinner size="sm" className="text-blue-600" />
        )}
        
        <p className="text-lg font-medium text-gray-700">
          {displayText}
        </p>
        
        {isError && (
          <button
            onClick={handleRetry}
            className="ml-2 text-sm text-blue-600 hover:text-blue-700 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
            title="Retry loading signup count"
          >
            Retry
          </button>
        )}
      </div>
      
      {isLoading && (
        <p className="text-sm text-gray-500 mt-1">
          {LOADING_TEXTS.COUNTER}
        </p>
      )}
      
      {isError && (
        <p className="text-xs text-gray-400 mt-1">
          Showing cached data
        </p>
      )}
    </div>
  );
} 