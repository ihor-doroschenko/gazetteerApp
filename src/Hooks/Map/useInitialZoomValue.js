import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getInitialZoom } from 'selectors/simple-selectors/map-interaction-selectors';
import { setFitBounds } from 'utils/Helpers/MapHelpers/setFitBounds';

// Hook to use functionality to come back to initial zoom level on the map. There is only one initial zoom level - the one in initial app state (before search)

export function useInitialZoomValue(mapRef) {
  const [noResultsBounds, setNoResultsBounds] = useState();
  const initialZoomValue = useSelector(getInitialZoom);

  useEffect(() => {
    const mapInst = mapRef.current.leafletElement;
    setNoResultsBounds(mapInst.getBounds());
  }, []);

  useEffect(() => {
    if (noResultsBounds) {
      const mapInst = mapRef.current.leafletElement;
      setFitBounds(mapInst, noResultsBounds, [0, 0], [0, 0]);
    }
  }, [initialZoomValue]);
}
