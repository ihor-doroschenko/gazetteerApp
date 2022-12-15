import { IsGazetteerInUsedGazetteers } from 'utils/validators/IsGazetteerInUsedGazetteers';

// Get parameters for marker geo-validation function

export const getMarkerParameters = ({ usedGazetteers, gazName, entities, externEntities }) => {
  const isUsedGazetteer = IsGazetteerInUsedGazetteers(usedGazetteers, gazName);
  return isUsedGazetteer
    ? {
        [gazName]: entities[gazName],
      }
    : {
        [gazName]: externEntities[gazName],
      };
};
