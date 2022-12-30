// Selector to get state of subtables of gazetteer-specific results in the results table (expanded or collapsed)
export const getTableStateExpanded = state => state.tableState.expanded;

// Selector to get current dimensions of the window
export const getWindowDimensions = state => state.tableState.windowDimensions;

// Selector to get width of the search area
export const getSearchWidth = state => state.tableState.searchWidth;

// Selector to get width of the results table in side view
export const getResultsWidth = state => state.tableState.resultsSideWidth;

// Selector to get width of the compare table in side view
export const getCompareWidth = state => state.tableState.compareSideWidth;

// Selector to get width of the matchings table in side view
export const getMatchingsWidth = state => state.tableState.matchingsSideWidth;

// Selector to get width either of matchings table or compare table in bottom view
export const getAdditionalResultsBottomWidth = state =>
  state.tableState.additionalResultsBottomWidth;

// Selector to get height of the results table in side view
export const getResultsSideHeight = state => state.tableState.resultsSideHeight;

// Selector to get height of the compare table in side view
export const getCompareSideHeight = state => state.tableState.compareSideHeight;

// Selector to get height of the compare table in side view
export const getMatchingsSideHeight = state => state.tableState.matchingsSideHeight;

// Selector to get actual height for results in bottom view
export const getResultsBottomHeight = state => state.tableState.resultsBottomHeight;

// Selector to get minimum height for results in bottom view
export const getResultsBottomMinHeight = state => state.tableState.resultsBottomMinHeight;

// Selector to get maximum height for results in bottom view
export const getResultsBottomMaxHeight = state => state.tableState.resultsBottomMaxHeight;
