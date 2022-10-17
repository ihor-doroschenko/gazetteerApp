import { getRightContainerDimensions } from 'constants/getRightContainerMaxWidth';
import { switchCompareTable, switchMatchingTable, switchResultsHidden } from 'redux/nav-reducer';
import { setCompareWidth, setMatchingsWidth, setResultsWidth } from 'redux/table-state-reducer';
import {
  getIsCompareHidden,
  getIsMatchingTableHidden,
  getIsResultsHidden,
} from 'selectors/simple-selectors/nav-selectors';
import { getWindowDimensions } from 'selectors/simple-selectors/table-state-selectors';
import { AreAllResultWidthsBiggerThatFreeSpace } from './AreAllResultWidthsBiggerThatFreeSpace';
import { getFreeSpace } from './getFreeSpace';
import { getWidthPercentage, getWidthPercentages } from './getWidthPercentage';

export const handleDimensionsAutomatically = (dispatch, getState) => {
  const { width } = getWindowDimensions(getState());
  const isResultsHidden = getIsResultsHidden(getState());
  const isMatchingTableHidden = getIsMatchingTableHidden(getState());
  const isCompareHidden = getIsCompareHidden(getState());
  const { rightContainerElementDefaultWidth } = getRightContainerDimensions();
  const { widthResultsPercentage, widthMatchingsPercentage, widthComparePercentage } =
    getWidthPercentages(getState);
  const freeSpace = getFreeSpace(getState);
  if (AreAllResultWidthsBiggerThatFreeSpace(getState)) {
    if (!isResultsHidden && !isCompareHidden && !isMatchingTableHidden) {
      dispatch(setCompareWidth(rightContainerElementDefaultWidth));
      const newWidthComparePercentage = getWidthPercentage(
        isCompareHidden,
        rightContainerElementDefaultWidth,
        width
      );
      if (
        widthResultsPercentage + widthMatchingsPercentage + newWidthComparePercentage <
        freeSpace
      ) {
        return;
      }
      dispatch(switchCompareTable(true));
    } else if (!isResultsHidden && !isMatchingTableHidden) {
      dispatch(setMatchingsWidth(rightContainerElementDefaultWidth));
      const newWidthMatchingsPercentage = getWidthPercentage(
        isMatchingTableHidden,
        rightContainerElementDefaultWidth,
        width
      );
      if (
        widthResultsPercentage + newWidthMatchingsPercentage + widthComparePercentage <
        freeSpace
      ) {
        return;
      }
      dispatch(switchMatchingTable(true));
    } else if (!isResultsHidden && !isCompareHidden) {
      dispatch(setCompareWidth(rightContainerElementDefaultWidth));
      const newWidthComparePercentage = getWidthPercentage(
        isCompareHidden,
        rightContainerElementDefaultWidth,
        width
      );
      if (
        widthResultsPercentage + widthMatchingsPercentage + newWidthComparePercentage <
        freeSpace
      ) {
        return;
      }
      dispatch(switchCompareTable(true));
    } else if (!isCompareHidden && !isMatchingTableHidden) {
      dispatch(setCompareWidth(rightContainerElementDefaultWidth));
      const newWidthComparePercentage = getWidthPercentage(
        isCompareHidden,
        rightContainerElementDefaultWidth,
        width
      );
      if (
        widthResultsPercentage + widthMatchingsPercentage + newWidthComparePercentage <
        freeSpace
      ) {
        return;
      }
      dispatch(switchCompareTable(true));
    } else if (!isResultsHidden) {
      dispatch(setResultsWidth(rightContainerElementDefaultWidth));
      const newWidthResultsPercentage = getWidthPercentage(
        isResultsHidden,
        rightContainerElementDefaultWidth,
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
      dispatch(setCompareWidth(rightContainerElementDefaultWidth));
      const newWidthComparePercentage = getWidthPercentage(
        isCompareHidden,
        rightContainerElementDefaultWidth,
        width
      );
      if (
        widthResultsPercentage + widthMatchingsPercentage + newWidthComparePercentage <
        freeSpace
      ) {
        return;
      }
      dispatch(switchCompareTable(true));
    } else if (!isMatchingTableHidden) {
      dispatch(setMatchingsWidth(rightContainerElementDefaultWidth));
      const newWidthMatchingsPercentage = getWidthPercentage(
        isMatchingTableHidden,
        rightContainerElementDefaultWidth,
        width
      );
      if (
        widthResultsPercentage + newWidthMatchingsPercentage + widthComparePercentage <
        freeSpace
      ) {
        return;
      }
      dispatch(switchMatchingTable(true));
    }
  }
};
