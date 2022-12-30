import { getTypeValues } from './getTypeValues';

// Wrapper function to get all possible type values for setting them into a filter to filter entities of a gazetteer by type (in subtable)

export const getTypeValuesWrapper = (gazName, type) => {
  const newSet = new Set();
  getTypeValues(newSet, gazName, type);
  const typeList = newSet ? Array.from(newSet).join(', ') : '';
  return typeList;
};
