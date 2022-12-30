import { useHiddenValuesForAllResultWindows } from 'Hooks/useHiddenValuesForAllResultWindows';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getIsSearch, getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import {
  getAdditionalResultsBottomWidth,
  getResultsWidth,
  getSearchWidth,
  getTableStateExpanded,
} from 'selectors/simple-selectors/table-state-selectors';

// Hoot to switch between dependencies that switch isAnimation to true (apply animation to all style changes for the map) and those that switch isAnimation to false (turn off animation to all style changes for the map)

export const useMapAnimation = (isAnimation, setIsAnimation) => {
  const { isCompareHidden, isMatchingTableHidden, isResultsHidden } =
    useHiddenValuesForAllResultWindows();
  const resultsSideWidth = useSelector(getResultsWidth);
  const tableStateExpanded = useSelector(getTableStateExpanded);
  const isSearch = useSelector(getIsSearch);
  const searchWidth = useSelector(getSearchWidth);
  const isSwitched = useSelector(getIsSideSwitched);
  const additionalResultsBottomWidth = useSelector(getAdditionalResultsBottomWidth);

  useEffect(() => {
    if (!isAnimation) {
      setIsAnimation(true);
    }
  }, [isCompareHidden, isMatchingTableHidden, isResultsHidden, isSearch, isSwitched]);

  useEffect(() => {
    if (isAnimation) {
      setIsAnimation(false);
    }
  }, [tableStateExpanded, resultsSideWidth, additionalResultsBottomWidth]);

  // useEffect for setting isAnimation to false to prevent animation on search area resize and simultaneously to allow further animation effects immediately

  useEffect(() => {
    if (isAnimation && isSwitched) {
      setIsAnimation(false);
      if (isSwitched) {
        setTimeout(() => setIsAnimation(true), 200);
      }
    }
  }, [searchWidth]);
};
