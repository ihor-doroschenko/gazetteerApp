// Selector to get value whether all results are shown or only those having matchings as additional attribute
export const getIsMatched = state => state.matching.onlyMatchedResults;

// Selector to get either entities with matchings or all entities (based on value onlyMatchedResults)
export const getEntities = state =>
  state.matching.onlyMatchedResults ? state.matching.matchings : state.results.entities;

// Selector to get only entities with matchings
export const getMatchingsEntities = state => state.matching.matchings;

// Selector to get only filtered matchings
export const getFilteredMatchingsEntities = state => state.matching.filteredMatching;

// Selector to get names of gazetteers of matchings
export const getMatchingDBs = state => state.matching.matchingDBs;

// Selector to get gazetteer name set in filter by matchings gazetteer in matchings table (gazetteer of a concrete matching)
export const getMatchingCurrentGazetteer = state => state.matching.currentGazetteer;

// Selector to get source gazetteer name set in filter by source gazetteer in matchings table (gazetteer of a concrete entity to which there are matchings)
export const getMatchingCurrentSourceGazetteer = state => state.matching.currentSourceGazetteer;
