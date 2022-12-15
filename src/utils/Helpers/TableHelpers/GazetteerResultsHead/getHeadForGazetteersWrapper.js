import { IsGazetteerInUsedGazetteers } from 'utils/validators/IsGazetteerInUsedGazetteers';
import { getHeadForUsedGazetteers } from './getGazetteerResultsHeadTitle';
import { getHeadForNotUsedGazetteers } from './getHeadForNotUsedGazetteers';

// Wrapper function to generate actual header for subtale containing gazetteer specific results in the results table

export function getHeadForGazetteersWrapper(params) {
  const { usedGazetteers, text, startEntries, gazName, externEntities, matchingsLength } = params;
  const isUsedGazetteer = IsGazetteerInUsedGazetteers(usedGazetteers, gazName);
  if (isUsedGazetteer) {
    let params = {
      text,
      startEntries,
      gazName,
      externEntities,
      matchingsLength,
    };
    return getHeadForUsedGazetteers(params);
  }
  return getHeadForNotUsedGazetteers({ text, externEntities, gazName });
}
