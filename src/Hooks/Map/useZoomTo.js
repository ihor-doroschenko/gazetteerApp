import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getZoomTo } from 'selectors/simple-selectors/map-interaction-selectors';
import { findMarkerInCluster } from 'utils/Helpers/MapHelpers/Clusters/findMarkerInCluster';
import { setFitBounds } from 'utils/Helpers/MapHelpers/setFitBounds';

// Hook to control bounds for new zoom level e.g. if it was zoomed to one entity
// If it is a cluster having at least two entities on the lowest zoom level, spiderfy it automatically

export function useZoomTo(mapRef) {
  const zoomTo = useSelector(getZoomTo);
  useEffect(() => {
    const { id, gazName, position } = zoomTo;
    if (position.length !== 0) {
      const mapInst = mapRef.current.leafletElement;
      setTimeout(() => {
        Object.values(mapInst._layers).map(value => {
          if (value.getChildCount) {
            const childMarkers = value.getAllChildMarkers();
            const isMousedMarkerInCluster = findMarkerInCluster(childMarkers, { id, gazName });
            if (isMousedMarkerInCluster) {
              value.spiderfy();
            }
          }
        });
      }, 1500);
      setFitBounds(mapInst, [position, position], [0, 0], [0, 0]);
    }
  }, [zoomTo]);
}
