import { isGazetteerInUsedGazetteers } from 'utils/validators/isGazetteerInUsedGazetteers';
import { getHeadForUsedGazetteers } from './getGazetteerResultsHeadTitle';
import { getHeadForNotUsedGazetteers } from './getHeadForNotUsedGazetteers';

// Wrapper function to generate actual header for subtale containing gazetteer specific results in the results table

export function getHeadForGazetteersWrapper(params) {
  const { usedGazetteers, text, startEntities, gazName, externEntities, matchingsLength } = params;
  const isUsedGazetteer = isGazetteerInUsedGazetteers(usedGazetteers, gazName);
  if (isUsedGazetteer) {
    let params = {
      text,
      startEntities,
      gazName,
      externEntities,
      matchingsLength,
    };
    return getHeadForUsedGazetteers(params);
  }
  return getHeadForNotUsedGazetteers({ text, externEntities, gazName });
}
