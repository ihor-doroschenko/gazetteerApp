import { getTypeValues } from './getTypeValues';

export const setValuesForTypeFilter = (data, gazName) => {
  const newSet = new Set();
  data.forEach(el => {
    getTypeValues(newSet, gazName, el.type);
  });
  return newSet;
};
