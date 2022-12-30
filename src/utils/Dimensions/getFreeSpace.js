import {
  getSearchWidth,
  getWindowDimensions,
} from 'selectors/simple-selectors/table-state-selectors';

// Get amount of free space left in the app

export const getFreeSpace = getState => {
  const { width } = getWindowDimensions(getState());
  const searchWidth = getSearchWidth(getState());
  return 100 - (100 * searchWidth) / width;
};
