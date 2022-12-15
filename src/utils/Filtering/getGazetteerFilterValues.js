// Get all possible values for filter to filter matchings in the matching view

import { getDefaultValueForMatchingsFilter } from 'constants/getDefaultValueForMatchingsFilter';

export const getGazetteerFilterValues = values => {
  const obj = getDefaultValueForMatchingsFilter();
  for (const key of values) {
    obj[key] = key;
  }
  return obj;
};
