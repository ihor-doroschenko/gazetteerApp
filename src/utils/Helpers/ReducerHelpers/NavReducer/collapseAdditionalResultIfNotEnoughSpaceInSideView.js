import { defaultElementWidth, rightContainerMaxWidthPercentage } from 'constants/numericConstants';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { getWindowDimensions } from 'selectors/simple-selectors/table-state-selectors';

// Check whether one of the additional results should be collapsed if there is not enough space, while results are in side view

export const collapseAdditionalResultIfNotEnoughSpaceInSideView = (getState, isHidden) => {
  const isSideSwitched = getIsSideSwitched(getState());
  if (!isSideSwitched) {
    const { width } = getWindowDimensions(getState());
    const maxWidth = (rightContainerMaxWidthPercentage * width) / 100;
    if (!isHidden && defaultElementWidth * 3 > maxWidth) {
      return true;
    }
  }
};
