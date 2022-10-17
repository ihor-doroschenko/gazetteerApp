// Selector to get entities selected for comparison
export const getEntitiesToCompare = state => {
  return state.compare.entitiesToCompare;
};

// Selector to get amount of slides that can be shown at once in current dimensions of the compare table
export const getSlideAmount = state => {
  return state.compare.slideAmount;
};
