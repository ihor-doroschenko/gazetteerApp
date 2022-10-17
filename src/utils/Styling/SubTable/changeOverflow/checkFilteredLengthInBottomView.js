export const checkFilteredLengthInBottomView = (
  filteredValues,
  filteredEntries,
  minVisibleRowsBottomView
) => {
  return filteredValues.length !== 0 && filteredEntries.length <= minVisibleRowsBottomView;
};
