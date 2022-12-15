// Get header for gazetteer that was originally requested and contain only the entities that were originally sent from the server

export const getUsedGazetteerWithoutSeparateEntries = (text, resultsLength, matchingsLength) => {
  return {
    mainText: text,
    resLength: ` [${resultsLength}]`,
    matchLength: `[${matchingsLength}]`,
  };
};
