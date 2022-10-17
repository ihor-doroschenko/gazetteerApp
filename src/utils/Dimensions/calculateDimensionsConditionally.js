import { getWindowDimensions } from 'selectors/simple-selectors/table-state-selectors';
import { getFreeSpace } from './getFreeSpace';

export function calculateDimensionsConditionally(value, getState) {
  const { width } = getWindowDimensions(getState());
  const freeSpace = getFreeSpace(getState);
  return width ? value / width >= freeSpace : false;
}
