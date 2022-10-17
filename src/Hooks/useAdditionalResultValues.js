import { useHiddenValuesForAllResultWindows } from 'Hooks/useHiddenValuesForAllResultWindows';
import { useSelector } from 'react-redux';
import { getIsCompareTool, getIsMatching } from 'selectors/simple-selectors/nav-selectors';

// Hook to extract availability and visibility values for additional results (Matching and Compare)

export function useAdditionalResultValues() {
  const isMatching = useSelector(getIsMatching);
  const isCompareTool = useSelector(getIsCompareTool);
  const { isMatchingTableHidden, isCompareHidden } = useHiddenValuesForAllResultWindows();
  return { isMatching, isCompareTool, isMatchingTableHidden, isCompareHidden };
}
