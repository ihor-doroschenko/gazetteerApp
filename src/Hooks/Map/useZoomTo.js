import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getZoomTo } from 'selectors/simple-selectors/map-interaction-selectors';
import { setFitBounds } from 'utils/Helpers/MapHelpers/setFitBounds';

// Hook to control bounds for new zoom level e.g. if it was zoomed to one entity

export function useZoomTo(mapRef) {
  const zoomTo = useSelector(getZoomTo);
  useEffect(() => {
    if (zoomTo.length !== 0) {
      const mapInst = mapRef.current.leafletElement;
      setFitBounds(mapInst, [zoomTo, zoomTo], [0, 0], [0, 0]);
    }
  }, [zoomTo]);
}
