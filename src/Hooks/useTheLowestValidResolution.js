import { lowestResolution } from 'constants/numericConstants';
import { useSelector } from 'react-redux';
import { getWindowDimensions } from 'selectors/simple-selectors/table-state-selectors';

export function useTheLowestValidResolution() {
  const { height } = useSelector(getWindowDimensions);
  return height < lowestResolution;
}
