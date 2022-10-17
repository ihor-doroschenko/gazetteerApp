import { useEffect } from 'react';

// Hook to synchronise local state with global one one global change

export function useSynchronisation(propGlobal, setLocal) {
  useEffect(() => {
    setLocal(propGlobal);
  }, [propGlobal]);
}
