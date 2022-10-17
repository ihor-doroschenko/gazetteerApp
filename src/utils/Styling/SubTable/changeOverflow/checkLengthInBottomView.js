import { checkEntriesLengthInBottomView } from './checkEntriesLengthInBottomView';
import { checkFilteredLengthInBottomView } from './checkFilteredLengthInBottomView';

export const checkLengthInBottomView = (
  isSideSwitched,
  entries,
  filteredValues,
  filteredEntries,
  minVisibleRowsBottomView
) => {
  return (
    isSideSwitched &&
    (checkEntriesLengthInBottomView(entries.length, minVisibleRowsBottomView) ||
      checkFilteredLengthInBottomView(filteredValues, filteredEntries, minVisibleRowsBottomView))
  );
};
