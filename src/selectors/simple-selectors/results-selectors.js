// Selector to get entities (normalized)
export const getStartEntities = state => state.results.entities;

// Selector to get original entities (non-normalized)
export const getOriginalEntities = state => state.results.originalEntities;

// Selector to get searched text sent in the request
export const getSearchedText = state => state.results.searchedText;

// Selector to get gazetteers used by user for search
export const getUsedGazetteers = state => state.results.usedGazetteers.map(el => el.gazName);

// Selector to get original status of requested results
export const getOriginalStatus = state => state.results.originalStatus;

// Selector to get status of requested results
export const getStatus = state => state.results.status;

// Selector to get entities originally not included by search (e.g. via matchings, if requested entity is available in database)
export const getExternEntities = state => state.results.externEntities;
