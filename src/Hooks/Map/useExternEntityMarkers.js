import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getExternEntities, getUsedGazetteers } from 'selectors/simple-selectors/results-selectors';
import { filterEntitiesWithCoordinates } from 'utils/Filtering/filterEntitiesWithCoordinates';
import { isGazetteerInUsedGazetteers } from 'utils/validators/isGazetteerInUsedGazetteers';

// Hook to provide marker visualization on the map for extern entities

export function useExternEntityMarkers() {
  const externEntities = useSelector(getExternEntities);
  const usedGazetteers = useSelector(getUsedGazetteers);
  let [externEntitiesWithValidCoordinates, setExternEntitiesWithValidCoordinates] = useState([]);
  useEffect(() => {
    for (let key of Object.keys(externEntities)) {
      const isUsedGazetteer = isGazetteerInUsedGazetteers(usedGazetteers, key);
      if (!isUsedGazetteer) {
        setExternEntitiesWithValidCoordinates(filterEntitiesWithCoordinates(externEntities));
      }
    }
  }, [externEntities]);
  return externEntitiesWithValidCoordinates;
}
