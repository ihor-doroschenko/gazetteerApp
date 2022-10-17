// Selector to get state of subtables of gazetteer-specific results in the results table (expanded or collapsed)
export const getTableStateExpanded = state => state.tableState.expanded;

// Selector to get width of the results table in side view
export const getResultsBlockRightWidth = state => state.tableState.resultsWidth;

// Selector to get current dimensions of the window
export const getWindowDimensions = state => state.tableState.windowDimensions;

// Selector to get width of the search window
export const getSearchWidth = state => state.tableState.searchWidth;

// Selector to get width of the compare table in side view
export const getCompareWidth = state => state.tableState.compareWidth;

// Selector to get width of the matchings table in side view
export const getMatchingsWidth = state => state.tableState.matchingsWidth;

// Selector to get height of the results table in side view
export const getResultsSideHeight = state => state.tableState.resultsSideHeight;

// Selector to get height of the compare table in side view
export const getCompareSideHeight = state => state.tableState.compareSideHeight;

// Selector to get height of the compare table in side view
export const getMatchingsSideHeight = state => state.tableState.matchingsSideHeight;

// Selector to get height either of matchings table or compare table in bottom view
export const getAdditionalElementOriginalHeight = state =>
  state.tableState.additionalElementsOriginalHeight;

// Selector to get width either of matchings table or compare table in bottom view
export const getCompareToolDashboardWidth = state => state.tableState.compareToolDashboardWidth;
