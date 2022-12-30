import { useSelector } from 'react-redux';
import { getEntities } from 'selectors/simple-selectors/matching-selectors';
import { getExternEntities, getUsedGazetteers } from 'selectors/simple-selectors/results-selectors';
import { isGazetteerInUsedGazetteers } from 'utils/validators/isGazetteerInUsedGazetteers';

// Hook to pass data to the SubTableDataContainer component depending on whether the data are extern or not

export function useSubTableDataContainer(gazName) {
  const entities = useSelector(getEntities);
  const externEntities = useSelector(getExternEntities);
  const usedGazetteers = useSelector(getUsedGazetteers);
  const isUsedGazetteer = isGazetteerInUsedGazetteers(usedGazetteers, gazName);
  return isUsedGazetteer ? entities[gazName] : externEntities[gazName];
}
