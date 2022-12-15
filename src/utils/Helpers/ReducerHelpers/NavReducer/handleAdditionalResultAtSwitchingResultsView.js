import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { collapseAdditionalResultIfNotEnoughSpaceInSideView } from './collapseAdditionalResultIfNotEnoughSpaceInSideView';
import { isAdditionalTableNotHiddenAtViewSwitching } from './isAdditionalTableNotHiddenAtViewSwitching';

// Handle additional results (compare or matchings view) while the results view is switched (e.g. from side to bottom)

export const handleAdditionalResultAtSwitchingResultsView = params => {
  const { dispatch, getState, value, isHidden, switchAnother } = params;
  const isSwitched = getIsSideSwitched(getState());
  if (isAdditionalTableNotHiddenAtViewSwitching(isSwitched, value, isHidden)) {
    dispatch(switchAnother(true));
  }
  if (collapseAdditionalResultIfNotEnoughSpaceInSideView(getState, isHidden)) {
    dispatch(switchAnother(true));
  }
};
