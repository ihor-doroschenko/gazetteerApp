import {
  getIsCompareHidden,
  getIsMatchingTableHidden,
  getIsResultsHidden,
} from 'selectors/simple-selectors/nav-selectors';
import {
  getCompareWidth,
  getMatchingsWidth,
  getResultsWidth,
} from 'selectors/simple-selectors/table-state-selectors';
import { calculateDimensionsConditionally } from './calculateDimensionsConditionally';

export const getIsRightContainerBiggerThanMaxWidth = getState => {
  const isResultsHidden = getIsResultsHidden(getState());
  const isMatchingTableHidden = getIsMatchingTableHidden(getState());
  const isCompareHidden = getIsCompareHidden(getState());
  const resultsSideWidth = getResultsWidth(getState());
  const compareSideWidth = getCompareWidth(getState());
  const matchingsSideWidth = getMatchingsWidth(getState());

  if (!isResultsHidden && !isCompareHidden && !isMatchingTableHidden) {
    let value = (compareSideWidth + resultsSideWidth + matchingsSideWidth) * 100;
    return calculateDimensionsConditionally(value, getState);
  }
  if (!isResultsHidden && !isMatchingTableHidden) {
    let value = (matchingsSideWidth + resultsSideWidth) * 100;
    return calculateDimensionsConditionally(value, getState);
  }
  if (!isResultsHidden && !isCompareHidden) {
    let value = (compareSideWidth + resultsSideWidth) * 100;
    return calculateDimensionsConditionally(value, getState);
  }
  if (!isCompareHidden && !isMatchingTableHidden) {
    let value = (matchingsSideWidth + compareSideWidth) * 100;
    return calculateDimensionsConditionally(value, getState);
  }
  if (!isResultsHidden) {
    let value = resultsSideWidth * 100;
    return calculateDimensionsConditionally(value, getState);
  }
  if (!isCompareHidden) {
    let value = compareSideWidth * 100;
    return calculateDimensionsConditionally(value, getState);
  }
  if (!isMatchingTableHidden) {
    let value = matchingsSideWidth * 100;
    return calculateDimensionsConditionally(value, getState);
  }
};
