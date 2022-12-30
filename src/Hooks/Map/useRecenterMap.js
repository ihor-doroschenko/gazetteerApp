import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getEntities } from 'selectors/simple-selectors/matching-selectors';
import { getOriginalStatus, getUsedGazetteers } from 'selectors/simple-selectors/results-selectors';
import { filterEntitiesWithCoordinates } from 'utils/Filtering/filterEntitiesWithCoordinates';
import { setFitBounds } from 'utils/Helpers/MapHelpers/setFitBounds';
import { validateStatus } from 'utils/validators/PropertyValidators/validateStatus';

// Hook to recenter map depending on changes in the dependency array

export function useRecenterMap(mapRef, params) {
  const originalStatus = useSelector(getOriginalStatus);
  const usedGazetteers = useSelector(getUsedGazetteers);
  const entities = useSelector(getEntities);
  const bounds = filterEntitiesWithCoordinates(entities).map(element => element.entity.position);
  const { paddingTopLeft, paddingBottomRight, seconds, dependencies } = params;
  useEffect(() => {
    const isLengthTheSame = Object.keys(originalStatus).length === usedGazetteers.length;
    if (validateStatus(originalStatus) && isLengthTheSame) {
      const mapInst = mapRef.current.leafletElement;
      setTimeout(() => setFitBounds(mapInst, bounds, paddingTopLeft, paddingBottomRight), seconds);
      setTimeout(() => mapInst.invalidateSize(), seconds);
    }
  }, dependencies);
}
