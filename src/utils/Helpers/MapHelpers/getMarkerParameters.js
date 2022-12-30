import { isGazetteerInUsedGazetteers } from 'utils/validators/isGazetteerInUsedGazetteers';

// Get parameters for marker geo-validation function

export const getMarkerParameters = ({ usedGazetteers, gazName, entities, externEntities }) => {
  const isUsedGazetteer = isGazetteerInUsedGazetteers(usedGazetteers, gazName);
  return isUsedGazetteer
    ? {
        [gazName]: entities,
      }
    : {
        [gazName]: externEntities,
      };
};
