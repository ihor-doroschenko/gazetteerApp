import { isGazetteerInUsedGazetteers } from 'utils/validators/isGazetteerInUsedGazetteers';

// Get extern entities or entities from original request

export const areExternEntitiesOfUsedGazetteers = params => {
  const { usedGazetteers, gazName, entities, externEntities } = params;
  const isUsedGazetteer = isGazetteerInUsedGazetteers(usedGazetteers, gazName);
  if (!isUsedGazetteer) {
    return externEntities[gazName];
  }
  return entities[gazName];
};
