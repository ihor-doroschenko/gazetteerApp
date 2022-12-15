import { maxVisibleRowsSideView } from 'constants/numericConstants';

// Get current length of entities to calculate page size

export const getCurrentEntitiesLength = (filteredEntities, entities, filterValues) => {
  if (filterValues.length !== 0) {
    if (entities.length <= maxVisibleRowsSideView) {
      return entities.length;
    } else {
      if (filteredEntities.length <= maxVisibleRowsSideView) {
        return maxVisibleRowsSideView;
      }
      return filteredEntities.length;
    }
  }
  return entities.length;
};
