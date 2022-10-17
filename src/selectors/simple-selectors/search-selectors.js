// Selector to get all gazetteers available in the app
export const getGazetteers = state => {
  return state.search.gazetteers;
};

// Selector to get whether option to receive results only related to the settlements is enabled
export const getOnlySettlements = state => {
  return state.search.onlySettlements;
};

// Selector to get search type
export const getSearchType = state => {
  return state.search.searchType;
};

// Selector to get coordinatess of the bounding box
export const getSearchCoordinates = state => {
  return state.search.coordinates;
};

// Selector to pass draw tool globally
export const getDraw = state => {
  return state.search.draw;
};

// Selector to get current matching value (disabled ot enabled) from the input form in the search window
export const getIsMatchingEnabled = state => {
  return state.search.isMatchingEnabled;
};

// Selector to get search textes used previously in current app session
export const getPreviousSearchTextes = state => {
  return state.search.previousSearchTextes;
};

// Selector to get actual search text
export const getSearchText = state => {
  return state.search.searchText;
};
