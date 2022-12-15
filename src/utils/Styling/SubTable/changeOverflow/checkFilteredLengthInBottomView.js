import { minVisibleRowsBottomView } from 'constants/numericConstants';

// Get length of filtered entries for a gazetteer specific subtable in bottom view

export const checkFilteredLengthInBottomView = (values, entries) => {
  return values.length !== 0 && entries.length <= minVisibleRowsBottomView;
};
