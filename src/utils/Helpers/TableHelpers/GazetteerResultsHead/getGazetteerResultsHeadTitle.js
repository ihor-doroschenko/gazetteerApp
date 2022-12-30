import { getUsedGazetteerWithExternEntities } from './getUsedGazetteerWithExternEntities';
import { getUsedGazetteerWithoutExternEntities } from './getUsedGazetteerWithoutExternEntities';

// Wrapper function to get head for gazetteers originally requested in the search

export const getHeadForUsedGazetteers = ({
  text,
  startEntities,
  gazName,
  externEntities,
  matchingsLength,
}) => {
  const resultsLength = startEntities[gazName] ? startEntities[gazName].length : 0;
  const externEntitiesGazetteer = externEntities[gazName];
  if (externEntitiesGazetteer) {
    return getUsedGazetteerWithExternEntities(
      text,
      resultsLength,
      externEntitiesGazetteer,
      matchingsLength
    );
  } else {
    return getUsedGazetteerWithoutExternEntities(text, resultsLength, matchingsLength);
  }
};
