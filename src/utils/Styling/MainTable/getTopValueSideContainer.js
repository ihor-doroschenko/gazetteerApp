export const getTopValueSideContainer = (isMatching, isMatchingTableHidden, isResultsHidden) => {
  return isMatching && isMatchingTableHidden && isResultsHidden
    ? 200
    : (isMatching && isMatchingTableHidden) || isResultsHidden
    ? 100
    : 0;
};
