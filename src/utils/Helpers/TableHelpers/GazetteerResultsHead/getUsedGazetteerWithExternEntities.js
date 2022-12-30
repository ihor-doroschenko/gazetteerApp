// Get header for gazetteer that was originally requested and contain also the entities that were not originally sent from the server, e.g. those entities that were requested separately (e.g. via matchings tool, the so-called "separate entities")

export const getUsedGazetteerWithExternEntities = (
  text,
  resultsLength,
  externEntitiesGazetteer,
  matchingsLength
) => {
  const originalEntitiesLength = resultsLength - externEntitiesGazetteer.length;
  return {
    mainText: text,
    resLength: ` [${originalEntitiesLength}] `,
    matchLength: `[${matchingsLength}]`,
    externEntities: ` + [${externEntitiesGazetteer.length}]`,
  };
};
