import { useEffect, useRef } from 'react';

interface UseAutoPlayProps {
  enabled: boolean;
  interval: number;
  onNext: () => void;
}

/**
 * Hook para auto-play del slider
 */
export function useAutoPlay({ enabled, interval, onNext }: UseAutoPlayProps) {
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }

    intervalRef.current = globalThis.setInterval(onNext, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [enabled, interval, onNext]);

  const pause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return { pause };
}