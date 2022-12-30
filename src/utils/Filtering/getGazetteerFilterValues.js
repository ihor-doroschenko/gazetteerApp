import { getDefaultValueForMatchingsFilter } from 'constants/getDefaultValueForMatchingsFilter';

// Get all possible values for filter to filter matchings in the matchings table

export const getGazetteerFilterValues = values => {
  const obj = getDefaultValueForMatchingsFilter();
  for (const key of values) {
    obj[key] = key;
  }
  return obj;
};
