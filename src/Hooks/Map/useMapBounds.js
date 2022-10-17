import { useBottomMapBounds } from './useBottomMapBounds';
import { useInitialZoomValue } from './useInitialZoomValue';
import { useRecenterMapWrapper } from './useRecenterMapWrapper';
import { useZoomTo } from './useZoomTo';

// Container hook to use various sub-hooks to control map state and effects

export function useMapBounds(mapRef, actualMapWidth) {
  useInitialZoomValue(mapRef);
  useZoomTo(mapRef);
  useBottomMapBounds(mapRef, actualMapWidth);
  useRecenterMapWrapper(mapRef);
}
