// Selector to get search type
export const getSearchType = state => state.search.searchType;

// Selector to get coordinatess of the bounding box
export const getSearchCoordinates = state => state.search.coordinates;

// Selector to pass draw tool globally
export const getDraw = state => state.search.draw;

// Selector to get whether option to receive results only related to the settlements is enabled
export const getOnlySettlements = state => state.search.onlySettlements;

// Selector to get search textes used previously in current app session
export const getPreviousSearchedPlaceNames = state => state.search.previousSearchedPlaceNames;

// Selector to get all gazetteers available in the app
export const getGazetteers = state => state.search.gazetteers;

// Selector to get current matching value (disabled ot enabled) from the input form in the search area
export const getIsMatchingEnabled = state => state.search.isMatchingEnabled;
