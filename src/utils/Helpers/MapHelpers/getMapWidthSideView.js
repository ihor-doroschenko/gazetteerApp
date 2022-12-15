// Get width for map container if results are in side view

export const getMapWidthSideView = (resultsSideWidth, searchWidth, lowestResolution) => {
  return `calc(100% - ${resultsSideWidth}px - ${lowestResolution ? searchWidth : 0}px)`;
};
