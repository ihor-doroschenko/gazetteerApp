// Get header for not used gazetteers

export const getHeadForNotUsedGazetteers = ({ text, externEntities, gazName }) => {
  const separateEntitiesGazetteer = externEntities[gazName];
  if (separateEntitiesGazetteer) {
    return { mainText: `Matched entities from ${text} [${separateEntitiesGazetteer.length}]` };
  }
};
