import {
  getIsCompareHidden,
  getIsMatchingTableHidden,
  getIsResultsHidden,
} from 'selectors/simple-selectors/nav-selectors';
import {
  getCompareWidth,
  getMatchingsWidth,
  getResultsBlockRightWidth,
  getWindowDimensions,
} from 'selectors/simple-selectors/table-state-selectors';

export const getWidthPercentage = (isHidden, elementWidth, width) => {
  return !isHidden ? (elementWidth * 100) / width : 0;
};

export const getWidthPercentages = getState => {
  const { width } = getWindowDimensions(getState());
  const isResultsHidden = getIsResultsHidden(getState());
  const isMatchingTableHidden = getIsMatchingTableHidden(getState());
  const isCompareHidden = getIsCompareHidden(getState());
  const resultsWidth = getResultsBlockRightWidth(getState());
  const matchingsWidth = getMatchingsWidth(getState());
  const compareWidth = getCompareWidth(getState());
  const widthResultsPercentage = getWidthPercentage(isResultsHidden, resultsWidth, width);
  const widthMatchingsPercentage = getWidthPercentage(isMatchingTableHidden, matchingsWidth, width);
  const widthComparePercentage = getWidthPercentage(isCompareHidden, compareWidth, width);

  return { widthResultsPercentage, widthMatchingsPercentage, widthComparePercentage };
};
