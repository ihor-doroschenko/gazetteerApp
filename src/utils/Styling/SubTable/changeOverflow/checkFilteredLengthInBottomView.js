import { minVisibleRowsBottomView } from 'constants/numericConstants';

// Get length of filtered entities for a gazetteer specific subtable in bottom view

export const checkFilteredLengthInBottomView = (values, entities) => {
  return values.length !== 0 && entities.length <= minVisibleRowsBottomView;
};
