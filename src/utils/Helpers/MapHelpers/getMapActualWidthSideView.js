export const getMapActualWidthSideView = (resultsWidth, searchWidth, lowestResolution) => {
  return `calc(100% - ${resultsWidth}px - ${lowestResolution ? searchWidth : 0}px)`;
};
