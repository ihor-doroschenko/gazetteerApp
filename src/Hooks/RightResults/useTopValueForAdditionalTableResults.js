import { useHiddenValuesForAllResultWindows } from 'Hooks/useHiddenValuesForAllResultWindows';
import { useSelector } from 'react-redux';
import { getIsMatching, getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { getTopValueForBottom } from 'utils/Dimensions/getTopValueForBottom';
import { getTopValueSideContainer } from 'utils/Styling/MainTable/getTopValueSideContainer';

// Hook to set top value for additional result table switcher

export function useTopValueForAdditionalTableResults(value) {
  const isSideSwitched = useSelector(getIsSideSwitched);
  const isMatching = useSelector(getIsMatching);
  const { isMatchingTableHidden, isResultsHidden } = useHiddenValuesForAllResultWindows();
  if (isSideSwitched) {
    const AreValueAndMatchingsTrue = value && isMatching;
    return getTopValueForBottom(AreValueAndMatchingsTrue, isMatchingTableHidden);
  }
  return value
    ? getTopValueSideContainer(isMatching, isMatchingTableHidden, isResultsHidden)
    : isResultsHidden
    ? 100
    : 0;
}
