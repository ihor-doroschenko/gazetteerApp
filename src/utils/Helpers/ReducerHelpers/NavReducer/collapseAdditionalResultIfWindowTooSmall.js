import { getRightContainerDimensions } from 'constants/getRightContainerMaxWidth';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { getWindowDimensions } from 'selectors/simple-selectors/table-state-selectors';

export const collapseAdditionalResultIfWindowTooSmall = (getState, isHidden) => {
  const isSideSwitched = getIsSideSwitched(getState());
  if (!isSideSwitched) {
    const { width } = getWindowDimensions(getState());
    const { rightContainerMaxWidth, rightContainerElementDefaultWidth } =
      getRightContainerDimensions();
    const maxWidth = (rightContainerMaxWidth * width) / 100;
    if (!isHidden && rightContainerElementDefaultWidth * 3 > maxWidth) {
      return true;
    }
  }
};
