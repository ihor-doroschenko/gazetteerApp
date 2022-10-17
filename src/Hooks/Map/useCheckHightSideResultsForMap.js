import { maxHeightForResultsSideViewPercentage } from 'constants/numericConstants';
import { useSelector } from 'react-redux';
import { getIsResults, getIsResultsHidden } from 'selectors/simple-selectors/nav-selectors';
import {
  getResultsSideHeight,
  getWindowDimensions,
} from 'selectors/simple-selectors/table-state-selectors';

// Hook to check whether actual height of side results table is more than 94% to adjust map width, as 94% together with 6% of head hight are 100% which could overlap the map and make some elements on it not visible completely

export function useCheckHightSideResultsForMap() {
  const isResultsHidden = useSelector(getIsResultsHidden);
  const isResults = useSelector(getIsResults);
  const resultsSideHeight = useSelector(getResultsSideHeight);
  const { height } = useSelector(getWindowDimensions);

  const actualHeight = (resultsSideHeight * 100) / height;
  return isResults && !isResultsHidden && actualHeight > maxHeightForResultsSideViewPercentage;
}
