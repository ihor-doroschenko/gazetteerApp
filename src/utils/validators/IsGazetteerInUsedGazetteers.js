// Check if a gazetteer was been enabled for current request (if it is in used gazetteers)

export const isGazetteerInUsedGazetteers = (usedGazetteers, gazName) => {
  return usedGazetteers.some(el => el === gazName);
};
