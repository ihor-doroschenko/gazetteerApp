// Get value of the margin-top for the switcher (for results table, compare table or matchings table) if results are in side view

export const getTopValueSideContainer = (isMatching, isMatchingTableHidden, isResultsHidden) => {
  if (isMatching && isMatchingTableHidden && isResultsHidden) {
    return 200;
  }
  if ((isMatching && isMatchingTableHidden) || isResultsHidden) {
    return 100;
  }
  return 0;
};
