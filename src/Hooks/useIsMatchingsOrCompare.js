import { useAdditionalResultValues } from 'Hooks/useAdditionalResultValues';

// Hook to check whether at least one of additional results (matching and compare) is used and applied

export function useIsMatchingsOrCompare() {
  const { isMatching, isCompareTool, isMatchingTableHidden, isCompareHidden } =
    useAdditionalResultValues();
  return (!isCompareHidden && isCompareTool) || (!isMatchingTableHidden && isMatching);
}
