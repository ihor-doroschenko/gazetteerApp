import { getTypeValues } from './getTypeValues';

// Filter gazetteer entities by type (in subtable)

export const filterTypes = (value, row, gazName) => {
  const newSet = new Set();
  if (row.type !== undefined) {
    getTypeValues(newSet, gazName, row.type);
    return newSet.has(value);
  }
  return false;
};
