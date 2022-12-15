import { filterNames } from 'utils/Filtering/filterNames';
import { filterTypes } from 'utils/Filtering/TypeFilter/filterTypes';

// Check whether current filter value to filter gazetteer specific results is a name. If yes, filter entities by name property, if no, filter entities by type property (as there are only two types of filter for gazetteer specific results in subtables)

export const isFilterValueName = (values, row, gazName) => {
  return values.id === 'name'
    ? filterNames(values.value, row.name)
    : filterTypes(values.value, row, gazName);
};
