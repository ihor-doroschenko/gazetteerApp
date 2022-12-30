// Get top value for the switchers in the bottom view

export const getTopValueForBottom = (AreValueAndMatchingsTrue, isMatchingTableHidden) => {
  if (AreValueAndMatchingsTrue && !isMatchingTableHidden) {
    return 0;
  }
  if (AreValueAndMatchingsTrue && isMatchingTableHidden) {
    return 100;
  }
  return 0;
};
