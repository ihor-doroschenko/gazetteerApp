import { getEntities } from 'selectors/simple-selectors/matching-selectors';
import { getExternEntities, getUsedGazetteers } from 'selectors/simple-selectors/results-selectors';
import { isGazetteerInUsedGazetteers } from 'utils/validators/isGazetteerInUsedGazetteers';

// Add to each entity in the results new property "internId" to produce a numberic list for current gazetteer specific results (only for separate entities)

export const setInternIdForExternEntities = (getState, gazName) => {
  const entities = getEntities(getState());
  const externEntities = getExternEntities(getState());
  const usedGazetteers = getUsedGazetteers(getState());
  const isUsedGazetteer = isGazetteerInUsedGazetteers(usedGazetteers, gazName);
  if (isUsedGazetteer) {
    return entities[gazName].length + 1;
  } else {
    return externEntities.hasOwnProperty(gazName) ? externEntities[gazName].length + 1 : 1;
  }
};
