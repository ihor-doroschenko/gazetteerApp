import { useBottomMapBounds } from './useBottomMapBounds';
import { useInitialZoomValue } from './useInitialZoomValue';
import { useRecenterMapWrapper } from './useRecenterMapWrapper';
import { useSwitchSatelliteBasemap } from './useSwitchSatelliteBasemap';
import { useZoomTo } from './useZoomTo';

// Container hook to use various sub-hooks to control map state and effects

export function useMainMap(mapRef, actualMapWidth) {
  useInitialZoomValue(mapRef);
  useZoomTo(mapRef);
  useBottomMapBounds(mapRef, actualMapWidth);
  useRecenterMapWrapper(mapRef);
  useSwitchSatelliteBasemap(mapRef);
}
