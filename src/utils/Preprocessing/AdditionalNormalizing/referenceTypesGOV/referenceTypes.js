import { getGOVTypes } from 'constants/getGOVTypes';
import { isObject } from '../../../validators/ValidateDataTypes/validateObject';
import { referenceTypesEntity } from './referenceTypesEntity';

export const referenceTypes = types => {
  const GOVtypes = getGOVTypes();
  if (GOVtypes) {
    if (Array.isArray(types)) {
      return types.map(el => referenceTypesEntity(el));
    }
    if (isObject(types)) {
      return referenceTypesEntity(types);
    }
  }
  return types;
};
