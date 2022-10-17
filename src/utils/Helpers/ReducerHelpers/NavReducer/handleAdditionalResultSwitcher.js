import {
  getIsCompareTool,
  getIsMatching,
  getIsSideSwitched,
} from 'selectors/simple-selectors/nav-selectors';
import { collapseAdditionalResultIfWindowTooSmall } from './collapseAdditionalResultIfWindowTooSmall';
import { isAdditionalTableNotHiddenAtViewSwitching } from './isAdditionalTableNotHiddenAtViewSwitching';

export const handleAdditionalResultSwitcher = params => {
  const {
    dispatch,
    getState,
    value,
    isHidden,
    switchAnotherAdditionalResult,
    switchThisAdditionalResult,
  } = params;
  const isSwitched = getIsSideSwitched(getState());
  const isCompareTool = getIsCompareTool(getState());
  const isMatchings = getIsMatching(getState());
  if (isAdditionalTableNotHiddenAtViewSwitching(isSwitched, value, isHidden)) {
    dispatch(switchAnotherAdditionalResult(true));
  }
  if (collapseAdditionalResultIfWindowTooSmall(getState, isHidden)) {
    dispatch(switchAnotherAdditionalResult(true));
  }
  if (isSwitched && isCompareTool && isMatchings) {
    setTimeout(() => dispatch(switchThisAdditionalResult(value)), 1500);
  } else {
    dispatch(switchThisAdditionalResult(value));
  }
};
