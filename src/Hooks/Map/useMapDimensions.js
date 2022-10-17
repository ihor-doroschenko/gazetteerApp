import { useMapBottomDimensions } from 'Hooks/Map/useMapBottomDimensions';
import { useMapSideDimensions } from 'Hooks/Map/useMapSideDimensions';

// Container hook to control map dimensions for both views

export function useMapDimensions() {
  const mapBottomDimensions = useMapBottomDimensions();
  const mapSideDimensions = useMapSideDimensions();
  return mapBottomDimensions || mapSideDimensions;
}
