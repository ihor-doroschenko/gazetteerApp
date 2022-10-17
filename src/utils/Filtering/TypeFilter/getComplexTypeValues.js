import { isObject } from '../../validators/ValidateDataTypes/validateObject';

export const getComplexTypeValues = (newSet, type) => {
  if (type) {
    if (isObject(type)) {
      if (type.type) {
        return newSet.add(type.type);
      }
    } else if (Array.isArray(type)) {
      if (type.some(entity => entity.type)) {
        return type.forEach(entity => entity.type && newSet.add(entity.type));
      } else {
        return type.forEach(newSet.add, newSet);
      }
    }
  }
};
