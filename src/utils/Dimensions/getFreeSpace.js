import {
  getSearchWidth,
  getWindowDimensions,
} from 'selectors/simple-selectors/table-state-selectors';

export const getFreeSpace = getState => {
  const { width } = getWindowDimensions(getState());
  const searchWidth = getSearchWidth(getState());
  return 100 - (100 * searchWidth) / width;
};
