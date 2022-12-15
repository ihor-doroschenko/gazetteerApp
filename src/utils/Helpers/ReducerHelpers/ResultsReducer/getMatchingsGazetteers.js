// Get source gazetteer matchings were matched to

export const getMatchingsGazetteers = matchings => {
  const matchingsGazetteer = new Set();
  for (let matchedElement of matchings) {
    for (let matching of matchedElement) {
      matchingsGazetteer.add(matching.db);
    }
  }
  return matchingsGazetteer;
};
