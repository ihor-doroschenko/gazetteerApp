// Get width for map container if results are in bottom view

export const getMapWidthBottom = (matchingOrCompare, additionalResultsBottomWidth, value) => {
  return matchingOrCompare ? `calc(${value} - ${additionalResultsBottomWidth}px)` : value;
};
