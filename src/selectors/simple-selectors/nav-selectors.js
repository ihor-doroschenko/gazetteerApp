// Selector to get value of whether the map view was switched to satellite view
export const getIsSatellite = state => {
  return state.nav.isSatellite;
};

// Selector to get value whether the results table is active
export const getIsResults = state => {
  return state.nav.isResults;
};

// Selector to get value whether the compare table is active
export const getIsCompareTool = state => {
  return state.nav.isCompareTool;
};

// Selector to get value whether the search window is active
export const getIsSearch = state => {
  return state.nav.isSearch;
};

// Selector to get value whether results view was switched
export const getIsSideSwitched = state => {
  return state.nav.isSideSwitched;
};

// Selector to get value whether the results table is visible
export const getIsResultsHidden = state => {
  return state.nav.isResultsHidden;
};

// Selector to get value whether compare table is visible
export const getIsCompareHidden = state => {
  return state.nav.isCompareHidden;
};

// Selector to get value whether the matchings table is visible
export const getIsMatchingTableHidden = state => {
  return state.nav.isMatchingTableHidden;
};

// Selector to get value whether the surface of the app was clicked
export const getIsSurfaceClickedValue = state => {
  return state.nav.isSurfaceClickedValue;
};

// Selector to get value whether matchings are enabled
export const getIsMatching = state => {
  return state.nav.isMatching;
};
