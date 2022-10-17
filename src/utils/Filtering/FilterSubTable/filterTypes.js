import { getTypeValues } from '../TypeFilter/getTypeValues';

export const filterTypes = (value, row, gazName) => {
  const newSet = new Set();
  if (row.type !== undefined) {
    getTypeValues(newSet, gazName, row.type);
    return newSet.has(value);
  }
  return false;
};
