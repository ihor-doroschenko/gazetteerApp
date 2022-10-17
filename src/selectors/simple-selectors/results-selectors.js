// Selector to get searched text sent in the request
export const getSearchedText = state => {
  return state.results.searchedText;
};

// Selector to get gazetteers selected by user for search
export const getUsedGazetteers = state => {
  return state.results.gazetteers.map(el => el.gazName);
};

// Selector to get status of requested results
export const getStatus = state => {
  return state.results.status;
};

// Selector to get entities (normalized)
export const getStartEntries = state => {
  return state.results.entries;
};

// Selector to get original entities (non-normalized)
export const getOriginalEntries = state => {
  return state.results.originalEntries;
};

// Selector to get entities originally not included by search (e.g. via matchings, if requested entity is available in database)
export const getSeparateEntries = state => {
  return state.results.separateEntries;
};
