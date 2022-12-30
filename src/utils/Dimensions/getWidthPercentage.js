import {
  getIsCompareHidden,
  getIsMatchingTableHidden,
  getIsResultsHidden,
} from 'selectors/simple-selectors/nav-selectors';
import {
  getCompareWidth,
  getMatchingsWidth,
  getResultsWidth,
  getWindowDimensions,
} from 'selectors/simple-selectors/table-state-selectors';

export const getWidthPercentage = (isHidden, elementWidth, width) => {
  return !isHidden ? (elementWidth * 100) / width : 0;
};

// Get width percentages for all results

export const getWidthPercentages = getState => {
  const { width } = getWindowDimensions(getState());
  const isResultsHidden = getIsResultsHidden(getState());
  const isMatchingTableHidden = getIsMatchingTableHidden(getState());
  const isCompareHidden = getIsCompareHidden(getState());
  const resultsSideWidth = getResultsWidth(getState());
  const matchingsSideWidth = getMatchingsWidth(getState());
  const compareSideWidth = getCompareWidth(getState());
  const widthResultsPercentage = getWidthPercentage(isResultsHidden, resultsSideWidth, width);
  const widthMatchingsPercentage = getWidthPercentage(
    isMatchingTableHidden,
    matchingsSideWidth,
    width
  );
  const widthComparePercentage = getWidthPercentage(isCompareHidden, compareSideWidth, width);

  return { widthResultsPercentage, widthMatchingsPercentage, widthComparePercentage };
};
