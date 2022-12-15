import { getEntries } from 'selectors/simple-selectors/matching-selectors';
import { getExternEntities, getUsedGazetteers } from 'selectors/simple-selectors/results-selectors';
import { IsGazetteerInUsedGazetteers } from 'utils/validators/IsGazetteerInUsedGazetteers';

// Add to each entity in the results new property "internId" to produce a numberic list for current gazetteer specific results (only for separate entities)

export const setInternIdForExternEntities = (getState, gazName) => {
  const entries = getEntries(getState());
  const externEntities = getExternEntities(getState());
  const usedGazetteers = getUsedGazetteers(getState());
  const isUsedGazetteer = IsGazetteerInUsedGazetteers(usedGazetteers, gazName);
  if (isUsedGazetteer) {
    return entries[gazName].length + 1;
  } else {
    return externEntities.hasOwnProperty(gazName) ? externEntities[gazName].length : 1;
  }
};
