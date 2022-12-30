// Selector to get value whether results table was switched
export const getIsSideSwitched = state => state.nav.isSideSwitched;

// Selector to get value of whether the map view was switched to satellite view
export const getIsSatellite = state => state.nav.isSatellite;

// Selector to get value whether the search area is active
export const getIsSearch = state => state.nav.isSearch;

// Selector to get value whether the results table is active
export const getIsResults = state => state.nav.isResults;

// Selector to get value whether the results table is visible
export const getIsResultsHidden = state => state.nav.isResultsHidden;

// Selector to get value whether the matchings table is visible
export const getIsMatchingTableHidden = state => state.nav.isMatchingTableHidden;

// Selector to get value whether compare table is visible
export const getIsCompareHidden = state => state.nav.isCompareHidden;

// Selector to get value whether matchings are enabled
export const getIsMatching = state => state.nav.isMatching;

// Selector to get value whether the compare table is active
export const getIsCompareTool = state => state.nav.isCompareTool;

// Selector to get value whether the surface of the app was clicked
export const getIsSurfaceClickedValue = state => state.nav.isSurfaceClickedValue;
