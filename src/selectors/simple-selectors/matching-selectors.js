// Selector to get value whether all results are shown or only those having matchings as additional attribute
export const getIsMatched = state => {
  return state.matching.isMatched;
};

// Selector to get only entities with matchings
export const getMatchingsEntities = state => {
  return state.matching.matchings;
};

// Selector to get only filtered matchings
export const getFilteredMatchingsEntities = state => {
  return state.matching.filteredMatching;
};

// Selector to get gazetteer name set in filter by matchings gazetteer in matchings table (gazetteer of a concrete matching)
export const getMatchingCurrentGazetteer = state => {
  return state.matching.currentGazetteer;
};

// Selector to get source gazetteer name set in filter by source gazetteer in matchings table (gazetteer of a concrete entity to which there are matchings)
export const getMatchingCurrentSourceGazetteer = state => {
  return state.matching.currentSourceGazetteer;
};

// Selector to get names of gazetteers of matchings
export const getMatchingDBs = state => {
  return state.matching.matchingDBs;
};

// Selector to get either entities with matchings or all entities (based on value isMatched)
export const getEntries = state => {
  return state.matching.isMatched ? state.matching.matchings : state.results.entries;
};
