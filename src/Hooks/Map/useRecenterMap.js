import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getEntries } from 'selectors/simple-selectors/matching-selectors';
import { getStatus } from 'selectors/simple-selectors/results-selectors';
import { filterEntitiesWithCoordinates } from 'utils/Filtering/filterEntitiesWithCoordinates';
import { setFitBounds } from 'utils/Helpers/MapHelpers/setFitBounds';
import { validateStatus } from 'utils/validators/PropertyValidators/validateStatus';

// Hook to recenter map

export function useRecenterMap(mapRef, params) {
  const status = useSelector(getStatus);
  const entries = useSelector(getEntries);
  const bounds = filterEntitiesWithCoordinates(entries).map(element => element.entity.position);
  const { paddingTopLeft, paddingBottomRight, seconds, dependencies } = params;
  useEffect(() => {
    if (validateStatus(status)) {
      const mapInst = mapRef.current.leafletElement;
      setTimeout(() => setFitBounds(mapInst, bounds, paddingTopLeft, paddingBottomRight), seconds);
      setTimeout(() => mapInst.invalidateSize(), seconds);
    }
  }, dependencies);
}
