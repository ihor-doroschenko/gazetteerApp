import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getExternEntities, getUsedGazetteers } from 'selectors/simple-selectors/results-selectors';
import { filterEntitiesWithCoordinates } from 'utils/Filtering/filterEntitiesWithCoordinates';
import { IsGazetteerInUsedGazetteers } from 'utils/validators/IsGazetteerInUsedGazetteers';

// Hook to provide marker visualization on the map for extern entities

export function useExternEntityMarkers() {
  const externEntities = useSelector(getExternEntities);
  const usedGazetteers = useSelector(getUsedGazetteers);
  let [separateEntriesWithValidCoordinates, setSeparateEntriesWithValidCoordinates] = useState([]);
  useEffect(() => {
    for (let key of Object.keys(externEntities)) {
      const isUsedGazetteer = IsGazetteerInUsedGazetteers(usedGazetteers, key);
      if (!isUsedGazetteer) {
        setSeparateEntriesWithValidCoordinates(filterEntitiesWithCoordinates(externEntities));
      }
    }
  }, [externEntities]);
  return separateEntriesWithValidCoordinates;
}
