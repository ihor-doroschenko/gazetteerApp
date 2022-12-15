import { useHiddenValuesForAllResultWindows } from 'Hooks/useHiddenValuesForAllResultWindows';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getIsSearch, getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import {
  getAdditionalResultsBottomWidth,
  getResultsBottomHeight,
} from 'selectors/simple-selectors/table-state-selectors';

// Hook to control map dimensions if results view in switched to bottom.

export function useBottomMapBounds(mapRef, actualMapWidth) {
  const isSwitched = useSelector(getIsSideSwitched);
  const resultsBottomHeight = useSelector(getResultsBottomHeight);
  const isSearch = useSelector(getIsSearch);
  const { isCompareHidden, isMatchingTableHidden, isResultsHidden } =
    useHiddenValuesForAllResultWindows();
  const additionalResultsBottomWidth = useSelector(getAdditionalResultsBottomWidth);
  useEffect(() => {
    if (isSwitched) {
      const mapInst = mapRef.current.leafletElement;
      // Wait till map animation (throughout the app it is 0.5 sec) is over
      setTimeout(() => mapInst && mapInst.invalidateSize(), 500);
    }
  }, [
    isSearch,
    resultsBottomHeight,
    additionalResultsBottomWidth,
    isCompareHidden,
    isResultsHidden,
    isMatchingTableHidden,
    actualMapWidth,
  ]);
}
