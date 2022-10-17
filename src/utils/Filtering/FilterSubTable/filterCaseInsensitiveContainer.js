import { filterCaseInsensitive } from './filterCaseInsensitive';
import { filterTypes } from './filterTypes';

export const filterCaseInsensitiveContainer = (filter, row, gazName) => {
  const id = filter.pivotId || filter.id;
  if (row[id] !== null) {
    if (id === 'name') {
      return filterCaseInsensitive(filter.value, row);
    } else if (id === 'type') {
      return filterTypes(filter.value, row, gazName);
    }
  }
};
