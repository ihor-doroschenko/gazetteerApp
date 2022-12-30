import { lowestResolution } from 'constants/numericConstants';
import { useSelector } from 'react-redux';
import { getWindowDimensions } from 'selectors/simple-selectors/table-state-selectors';

// Hoow to check whether the styles for the lowest valid resolution should be applied

export function useTheLowestValidResolution() {
  const { height } = useSelector(getWindowDimensions);
  return height < lowestResolution;
}
