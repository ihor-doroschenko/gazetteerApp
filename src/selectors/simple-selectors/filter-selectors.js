// Selector to get gazetteer-specific name for filter by name in result table (main view)
export const getNameFilterValues = state => state.filter.nameFilterValues;

// Selector to get gazetteer-specific types for filter by type in result table (main view)
export const getTypeFilterValues = state => state.filter.typeFilterValues;

// Selector to get gazetteer-specific types from received entities
export const getTypes = state => state.filter.types;
