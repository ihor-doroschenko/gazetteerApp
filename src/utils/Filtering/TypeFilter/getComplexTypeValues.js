import { isObject } from '../../validators/ValidateDataTypes/validateObject';
import { getStandardTypeValues } from './getStandardTypeValues';

// Get all possible complex data types

export const getComplexTypeValues = (newSet, type) => {
  if (type) {
    if (isObject(type)) {
      return getStandardTypeValues(newSet, type.type);
    } else if (Array.isArray(type)) {
      if (type.some(entity => entity.type)) {
        return type.forEach(entity => entity.type && newSet.add(entity.type));
      } else {
        return type.forEach(newSet.add, newSet);
      }
    }
  }
};
