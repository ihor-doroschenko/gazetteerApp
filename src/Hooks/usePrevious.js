import { useEffect, useRef } from 'react';

// Hook to use previous values for provided data

export function usePrevious(data) {
  const ref = useRef();
  useEffect(() => {
    ref.current = data;
  });
  return ref.current;
}
