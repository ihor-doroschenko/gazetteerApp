import { minVisibleRowsBottomView } from 'constants/numericConstants';
import { checkFilteredLengthInBottomView } from './checkFilteredLengthInBottomView';

// Get length of current available entities for a gazetteer specific subtable in bottom view

export const checkLengthBottomView = (isSideSwitched, entries, filteredValues, filteredEntries) => {
  const entriesLength = entries.length <= minVisibleRowsBottomView;
  const filteredEntriesLength = checkFilteredLengthInBottomView(filteredValues, filteredEntries);
  return isSideSwitched && (entriesLength || filteredEntriesLength);
};
