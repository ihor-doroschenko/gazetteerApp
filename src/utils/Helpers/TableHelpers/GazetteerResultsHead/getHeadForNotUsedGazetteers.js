// Get header for not used gazetteers

import { checkSeparateEntities } from 'utils/validators/checkSeparateEntities';

export const getHeadForNotUsedGazetteers = ({ text, externEntities, gazName }) => {
  const separateEntitiesGazetteer =
    checkSeparateEntities(externEntities) && externEntities[gazName];
  if (separateEntitiesGazetteer) {
    return { mainText: `Matched entities from ${text} [${separateEntitiesGazetteer.length}]` };
  }
};
