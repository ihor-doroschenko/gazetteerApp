import { maxVisibleRowsSideView } from 'constants/numericConstants';

// Get length of current available entities for a gazetteer specific subtable in side view

export const checkLengthSideView = (isSideSwitched, entries, values) => {
  return !isSideSwitched && values.length !== 0 && entries.length <= maxVisibleRowsSideView;
};
