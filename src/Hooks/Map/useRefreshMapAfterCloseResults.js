import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getIsResults } from 'selectors/simple-selectors/nav-selectors';

// Hook to refresh map after closing results

export function useRefreshMapAfterCloseResults(mapRef) {
  const isResults = useSelector(getIsResults);

  useEffect(() => {
    if (!isResults) {
      const mapInst = mapRef.current.leafletElement;
      setTimeout(() => mapInst.invalidateSize(), 500);
    }
  }, [isResults]);
}
