import {
  getIsCompareHidden,
  getIsMatchingTableHidden,
} from 'selectors/simple-selectors/nav-selectors';

export const AreAdditionalResultsTablesNotHidden = getState => {
  const isMatchingTableHidden = getIsMatchingTableHidden(getState());
  const isCompareHidden = getIsCompareHidden(getState());
  return !isMatchingTableHidden && !isCompareHidden;
};
