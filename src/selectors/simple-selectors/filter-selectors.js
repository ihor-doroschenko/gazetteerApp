// Selector to get gazetteer-specific types from received entities
export const getTypes = state => {
  return state.filter.types;
};

// Selector to get gazetteer-specific types for filter by type in result table (main view)
export const getTypeFilterValues = state => {
  return state.filter.typeFilterValues;
};

// Selector to get gazetteer-specific name for filter by name in result table (main view)
export const getNameFilterValues = state => {
  return state.filter.nameFilterValues;
};
