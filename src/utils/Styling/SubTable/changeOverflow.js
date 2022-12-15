import { checkLengthBottomView } from './changeOverflow/checkLengthBottomView';
import { checkLengthSideView } from './changeOverflow/checkLengthSideView';

// Conditionally change overflow value for subtables in the results table

export const changeOverflow = (isSideSwitched, entries, filteredEntries, filteredValues) => {
  const lengthBottomView = checkLengthBottomView(
    isSideSwitched,
    entries,
    filteredValues,
    filteredEntries
  );
  const lengthSideView = checkLengthSideView(isSideSwitched, filteredEntries, filteredValues);
  return {
    style: {
      overflow: lengthBottomView || lengthSideView ? 'hidden' : 'auto',
    },
  };
};
