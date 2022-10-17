import { isObject } from 'utils/validators/ValidateDataTypes/validateObject';

export const getNameGOV = govName => {
  if (isObject(govName) && govName.hasOwnProperty('value')) {
    return govName.value;
  } else if (Array.isArray(govName) && govName.length > 0) {
    return govName[0].value;
  }
};
