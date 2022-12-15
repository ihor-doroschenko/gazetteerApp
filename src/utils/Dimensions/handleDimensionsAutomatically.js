import { defaultElementWidth } from 'constants/numericConstants';
import { switchAdditionalResult, switchResultsHidden } from 'redux/nav-reducer';
import { setCompareWidth, setMatchingsWidth, setResultsWidth } from 'redux/table-state-reducer';
import {
  getIsCompareHidden,
  getIsMatchingTableHidden,
  getIsResultsHidden,
} from 'selectors/simple-selectors/nav-selectors';
import { getWindowDimensions } from 'selectors/simple-selectors/table-state-selectors';
import { areAllResultWidthsBiggerThatFreeSpace } from './areAllResultWidthsBiggerThatFreeSpace';
import { getFreeSpace } from './getFreeSpace';
import { getWidthPercentage, getWidthPercentages } from './getWidthPercentage';

export const handleDimensionsAutomatically = (dispatch, getState) => {
  const { width } = getWindowDimensions(getState());
  const isResultsHidden = getIsResultsHidden(getState());
  const isMatchingTableHidden = getIsMatchingTableHidden(getState());
  const isCompareHidden = getIsCompareHidden(getState());
  const { widthResultsPercentage, widthMatchingsPercentage, widthComparePercentage } =
    getWidthPercentages(getState);
  const freeSpace = getFreeSpace(getState);
  if (areAllResultWidthsBiggerThatFreeSpace(getState)) {
    if (!isResultsHidden && !isCompareHidden && !isMatchingTableHidden) {
      dispatch(setCompareWidth(defaultElementWidth));
      const newWidthComparePercentage = getWidthPercentage(
        isCompareHidden,
        defaultElementWidth,
        width
      );
      if (
        widthResultsPercentage + widthMatchingsPercentage + newWidthComparePercentage <
        freeSpace
      ) {
        return;
      }
      dispatch(switchAdditionalResult(true, true));
    } else if (!isResultsHidden && !isMatchingTableHidden) {
      dispatch(setMatchingsWidth(defaultElementWidth));
      const newWidthMatchingsPercentage = getWidthPercentage(
        isMatchingTableHidden,
        defaultElementWidth,
        width
      );
      if (
        widthResultsPercentage + newWidthMatchingsPercentage + widthComparePercentage <
        freeSpace
      ) {
        return;
      }
      dispatch(switchAdditionalResult(true));
    } else if (!isResultsHidden && !isCompareHidden) {
      dispatch(setCompareWidth(defaultElementWidth));
      const newWidthComparePercentage = getWidthPercentage(
        isCompareHidden,
        defaultElementWidth,
        width
      );
      if (
        widthResultsPercentage + widthMatchingsPercentage + newWidthComparePercentage <
        freeSpace
      ) {
        return;
      }
      dispatch(switchAdditionalResult(true, true));
    } else if (!isCompareHidden && !isMatchingTableHidden) {
      dispatch(setCompareWidth(defaultElementWidth));
      const newWidthComparePercentage = getWidthPercentage(
        isCompareHidden,
        defaultElementWidth,
        width
      );
      if (
        widthResultsPercentage + widthMatchingsPercentage + newWidthComparePercentage <
        freeSpace
      ) {
        return;
      }
      dispatch(switchAdditionalResult(true, true));
    } else if (!isResultsHidden) {
      dispatch(setResultsWidth(defaultElementWidth));
      const newWidthResultsPercentage = getWidthPercentage(
        isResultsHidden,
        defaultElementWidth,
        width
      );
      if (
        newWidthResultsPercentage + widthMatchingsPercentage + widthComparePercentage <
        freeSpace
      ) {
        return;
      }
      dispatch(switchResultsHidden(true));
    } else if (!isCompareHidden) {
      dispatch(setCompareWidth(defaultElementWidth));
      const newWidthComparePercentage = getWidthPercentage(
        isCompareHidden,
        defaultElementWidth,
        width
      );
      if (
        widthResultsPercentage + widthMatchingsPercentage + newWidthComparePercentage <
        freeSpace
      ) {
        return;
      }
      dispatch(switchAdditionalResult(true, true));
    } else if (!isMatchingTableHidden) {
      dispatch(setMatchingsWidth(defaultElementWidth));
      const newWidthMatchingsPercentage = getWidthPercentage(
        isMatchingTableHidden,
        defaultElementWidth,
        width
      );
      if (
        widthResultsPercentage + newWidthMatchingsPercentage + widthComparePercentage <
        freeSpace
      ) {
        return;
      }
      dispatch(switchAdditionalResult(true));
    }
  }
};
