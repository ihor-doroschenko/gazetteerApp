import { isObject } from 'utils/validators/ValidateDataTypes/validateObject';

// Get name of GOV entity. As the "name" attribute originally contains multiple values, only one of them is taken as the "name" attribute and all others are listed in "names" attribute. Original "name" attribute can be seen in compare view

export const getNameGOV = govName => {
  if (isObject(govName) && govName.hasOwnProperty('value')) {
    return govName.value;
  } else if (Array.isArray(govName) && govName.length > 0) {
    return govName[0].value;
  }
};
