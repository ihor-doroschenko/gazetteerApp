import {
  getIsCompareHidden,
  getIsMatchingTableHidden,
  getIsResultsHidden,
} from 'selectors/simple-selectors/nav-selectors';
import {
  getCompareWidth,
  getMatchingsWidth,
  getResultsBlockRightWidth,
} from 'selectors/simple-selectors/table-state-selectors';
import { calculateDimensionsConditionally } from './calculateDimensionsConditionally';

export const getIsRightContainerBiggerThanMaxWidth = getState => {
  const isResultsHidden = getIsResultsHidden(getState());
  const isMatchingTableHidden = getIsMatchingTableHidden(getState());
  const isCompareHidden = getIsCompareHidden(getState());
  const resultsWidth = getResultsBlockRightWidth(getState());
  const compareWidth = getCompareWidth(getState());
  const matchingsWidth = getMatchingsWidth(getState());

  if (!isResultsHidden && !isCompareHidden && !isMatchingTableHidden) {
    let value = (compareWidth + resultsWidth + matchingsWidth) * 100;
    return calculateDimensionsConditionally(value, getState);
  }
  if (!isResultsHidden && !isMatchingTableHidden) {
    let value = (matchingsWidth + resultsWidth) * 100;
    return calculateDimensionsConditionally(value, getState);
  }
  if (!isResultsHidden && !isCompareHidden) {
    let value = (compareWidth + resultsWidth) * 100;
    return calculateDimensionsConditionally(value, getState);
  }
  if (!isCompareHidden && !isMatchingTableHidden) {
    let value = (matchingsWidth + compareWidth) * 100;
    return calculateDimensionsConditionally(value, getState);
  }
  if (!isResultsHidden) {
    let value = resultsWidth * 100;
    return calculateDimensionsConditionally(value, getState);
  }
  if (!isCompareHidden) {
    let value = compareWidth * 100;
    return calculateDimensionsConditionally(value, getState);
  }
  if (!isMatchingTableHidden) {
    let value = matchingsWidth * 100;
    return calculateDimensionsConditionally(value, getState);
  }
};
