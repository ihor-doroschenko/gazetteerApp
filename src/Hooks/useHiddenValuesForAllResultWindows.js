import { useSelector } from 'react-redux';
import {
  getIsCompareHidden,
  getIsMatchingTableHidden,
  getIsResultsHidden,
} from './../selectors/simple-selectors/nav-selectors';

// Hook to extract all visibility values related to results (results, matchings, compare)

export function useHiddenValuesForAllResultWindows() {
  const isCompareHidden = useSelector(getIsCompareHidden);
  const isMatchingTableHidden = useSelector(getIsMatchingTableHidden);
  const isResultsHidden = useSelector(getIsResultsHidden);
  return { isCompareHidden, isMatchingTableHidden, isResultsHidden };
}
