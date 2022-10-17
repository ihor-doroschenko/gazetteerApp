export const getResultsTableSideMaxHeight = isMatching => {
  return isMatching ? `calc(95vh - 45px - 35px)` : `calc(95vh - 45px)`;
};
