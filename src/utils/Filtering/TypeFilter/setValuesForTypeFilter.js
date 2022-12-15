import { getTypeValues } from './getTypeValues';

// Set all possible type values for filtering entities of a gazetteer by type (in subtable)

export const setValuesForTypeFilter = (data, gazName) => {
  const newSet = new Set();
  data.forEach(el => {
    getTypeValues(newSet, gazName, el.type);
  });
  return newSet;
};
