import { filterNames } from './filterNames';
import { filterTypes } from './TypeFilter/filterTypes';

// Filter gazetteer specific entities by name or type (in subtable)

export const filterEntities = (filter, row, gazName) => {
  const id = filter.pivotId || filter.id;
  if (row[id] !== null) {
    if (id === 'name') {
      return filterNames(filter.value, row.name);
    } else if (id === 'type') {
      return filterTypes(filter.value, row, gazName);
    }
  }
};
