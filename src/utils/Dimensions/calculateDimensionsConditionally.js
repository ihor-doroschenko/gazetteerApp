import { getWindowDimensions } from 'selectors/simple-selectors/table-state-selectors';
import { getFreeSpace } from './getFreeSpace';

// Calculate dimensions depending on the amount of the free space

export function calculateDimensionsConditionally(value, getState) {
  const { width } = getWindowDimensions(getState());
  const freeSpace = getFreeSpace(getState);
  return width ? value / width >= freeSpace : false;
}
