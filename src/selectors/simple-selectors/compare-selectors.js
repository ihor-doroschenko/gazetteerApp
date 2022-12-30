// Selector to get entities selected for comparison
export const getEntitiesToCompare = state => state.compare.entitiesToCompare;

// Selector to get amount of slides that can be shown at once in current dimensions of the compare table
export const getSlideAmount = state => state.compare.slideAmount;
