import { checkSeparateEntities } from 'utils/validators/checkSeparateEntities';
import { getUsedGazetteerWithoutSeparateEntries } from './getUsedGazetteerWithoutSeparateEntries';
import { getUsedGazetteerWithSeparateEntries } from './getUsedGazetteerWithSeparateEntries';

// Wrapper function to get head for gazetteers originally requested in the search

export const getHeadForUsedGazetteers = ({
  text,
  startEntries,
  gazName,
  externEntities,
  matchingsLength,
}) => {
  const resultsLength = startEntries[gazName] ? startEntries[gazName].length : 0;
  const separateEntriesGazetteer = checkSeparateEntities(externEntities) && externEntities[gazName];
  if (separateEntriesGazetteer) {
    return getUsedGazetteerWithSeparateEntries(
      text,
      resultsLength,
      separateEntriesGazetteer,
      matchingsLength
    );
  } else {
    return getUsedGazetteerWithoutSeparateEntries(text, resultsLength, matchingsLength);
  }
};
