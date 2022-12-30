// Get styles for grid property depending on the matchings value availability for the results table

export const getGridStyleForResultsSide = isMatching => {
  return isMatching ? `45px 35px calc(100% - 45px)` : `45px calc(100% - 45px)`;
};
