import { checkSeparateEntities } from 'utils/validators/checkSeparateEntities';
import { IsGazetteerInUsedGazetteers } from 'utils/validators/IsGazetteerInUsedGazetteers';

// TODO

export const areExternEntitiesOfUsedGazetteers = params => {
  const { usedGazetteers, gazName, entities, externEntities } = params;
  const isUsedGazetteer = IsGazetteerInUsedGazetteers(usedGazetteers, gazName);
  if (checkSeparateEntities(externEntities) && externEntities[gazName]) {
    if (!isUsedGazetteer) {
      return externEntities[gazName];
    }
  }
  return entities[gazName];
};
