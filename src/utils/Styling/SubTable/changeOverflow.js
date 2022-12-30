import { checkLengthBottomView } from './changeOverflow/checkLengthBottomView';
import { checkLengthSideView } from './changeOverflow/checkLengthSideView';

// Conditionally change overflow value for subtables in the results table

export const changeOverflow = (isSideSwitched, entities, filteredEntities, filteredValues) => {
  const lengthBottomView = checkLengthBottomView(
    isSideSwitched,
    entities,
    filteredValues,
    filteredEntities
  );
  const lengthSideView = checkLengthSideView(isSideSwitched, filteredEntities, filteredValues);
  return {
    style: {
      overflow: lengthBottomView || lengthSideView ? 'hidden' : 'auto',
      maxHeight: !isSideSwitched && '225px',
    },
  };
};
