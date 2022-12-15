import { useSelector } from 'react-redux';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { getAdditionalResultsBottomWidth } from 'selectors/simple-selectors/table-state-selectors';

export const useAdditionalTableStyle = (isToolHidden, elementWidth) => {
  const isSideSwitched = useSelector(getIsSideSwitched);
  const additionalResultsBottomWidth = useSelector(getAdditionalResultsBottomWidth);
  return {
    marginRight: !isToolHidden
      ? '0px'
      : `-${!isSideSwitched ? elementWidth : additionalResultsBottomWidth}px`,
    zIndex: isToolHidden && '-1',
    visibility: !isSideSwitched && isToolHidden && 'hidden',
  };
};
