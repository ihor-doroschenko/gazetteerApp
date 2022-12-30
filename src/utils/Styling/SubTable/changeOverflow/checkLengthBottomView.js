import { minVisibleRowsBottomView } from 'constants/numericConstants';
import { checkFilteredLengthInBottomView } from './checkFilteredLengthInBottomView';

// Get length of current available entities for a gazetteer specific subtable in bottom view

export const checkLengthBottomView = (
  isSideSwitched,
  entities,
  filteredValues,
  filteredEntities
) => {
  const entitiesLength = entities.length <= minVisibleRowsBottomView;
  const filteredEntitiesLength = checkFilteredLengthInBottomView(filteredValues, filteredEntities);
  return isSideSwitched && (entitiesLength || filteredEntitiesLength);
};
