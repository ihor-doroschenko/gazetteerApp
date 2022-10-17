import { filterCaseInsensitive } from 'utils/Filtering/FilterSubTable/filterCaseInsensitive';
import { filterTypes } from 'utils/Filtering/FilterSubTable/filterTypes';

export const getIsAName = (value, row, gazName) => {
  return value.id === 'name' ? filterCaseInsensitive(value, row) : filterTypes(value, row, gazName);
};
