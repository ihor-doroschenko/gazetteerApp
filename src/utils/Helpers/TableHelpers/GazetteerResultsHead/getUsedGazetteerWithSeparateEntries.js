// Get header for gazetteer that was originally requested and contain also the entities that were not originally sent from the server, e.g. those entities that were requested separately (e.g. via matchings tool, the so-called "separate entities")

export const getUsedGazetteerWithSeparateEntries = (
  text,
  resultsLength,
  separateEntriesGazetteer,
  matchingsLength
) => {
  return {
    mainText: text,
    resLength: ` [${resultsLength}] `,
    matchLength: `[${matchingsLength}]`,
    externEntities: ` + [${separateEntriesGazetteer.length}]`,
  };
};
