import { checkFilteredLengthInSideView } from './changeOverflow/checkFilteredLengthInSideView';
import { checkLengthInBottomView } from './changeOverflow/checkLengthInBottomView';

export const changeOverflow = (isSideSwitched, entries, filteredEntries, filteredValues) => {
  const maxVisibleRowsSideView = 5;
  const minVisibleRowsBottomView = 3;
  return {
    style: {
      overflow:
        checkLengthInBottomView(
          isSideSwitched,
          entries,
          filteredValues,
          filteredEntries,
          minVisibleRowsBottomView
        ) ||
        checkFilteredLengthInSideView(
          isSideSwitched,
          filteredEntries,
          maxVisibleRowsSideView,
          filteredValues
        )
          ? 'hidden'
          : 'auto',
    },
  };
};
