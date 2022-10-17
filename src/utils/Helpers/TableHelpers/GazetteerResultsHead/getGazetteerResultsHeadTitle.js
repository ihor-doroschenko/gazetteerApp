export const getHeadForUsedGazetteers = ({
  text,
  startEntries,
  gazName,
  separateEntries,
  matchingsLength,
}) => {
  const resultsLength = startEntries[gazName] ? startEntries[gazName].length : 0;
  const separateEntriesGazetteer = separateEntries && separateEntries[gazName];
  if (separateEntriesGazetteer) {
    return getIsUsedGazetteerWithSeparateEntries(
      text,
      resultsLength,
      separateEntriesGazetteer,
      matchingsLength
    );
  } else {
    return getIsUsedGazetteerWithoutSeparateEntries(text, resultsLength, matchingsLength);
  }
};

export const getHeadForNotUsedGazetteers = ({ text, separateEntries, gazName }) => {
  const separateEntriesGazetteer = separateEntries && separateEntries[gazName];
  if (separateEntriesGazetteer) {
    return getIsNotUsedGazetteer(text, separateEntriesGazetteer);
  }
};

export const getIsUsedGazetteerWithSeparateEntries = (
  text,
  resultsLength,
  separateEntriesGazetteer,
  matchingsLength
) => {
  return {
    mainText: text,
    resLength: ` [${resultsLength}] `,
    matchLength: matchingsLength !== undefined && `[${matchingsLength}]`,
    description: ` , additional matched entities [${separateEntriesGazetteer.length}]`,
  };
};
export const getIsUsedGazetteerWithoutSeparateEntries = (text, resultsLength, matchingsLength) => {
  return {
    mainText: text,
    resLength: ` [${resultsLength}]`,
    matchLength: matchingsLength !== undefined && `[${matchingsLength}]`,
  };
};
export const getIsNotUsedGazetteer = (text, separateEntriesGazetteer) => {
  return { mainText: `Matched entities from ${text} [${separateEntriesGazetteer.length}]` };
};
