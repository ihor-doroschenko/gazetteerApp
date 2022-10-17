import {
  getHeadForNotUsedGazetteers,
  getHeadForUsedGazetteers,
} from './getGazetteerResultsHeadTitle';

export function getHeadForGazetteersWrapper({
  usedGazetteers,
  text,
  startEntries,
  gazName,
  separateEntries,
  matchingsLength,
}) {
  const isUsedGazetteer = usedGazetteers.some(el => el === gazName);
  if (isUsedGazetteer) {
    return getHeadForUsedGazetteers({
      text,
      startEntries,
      gazName,
      separateEntries,
      matchingsLength,
    });
  }
  return getHeadForNotUsedGazetteers({ text, separateEntries, gazName });
}
