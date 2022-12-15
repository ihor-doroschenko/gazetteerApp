import cloneDeep from 'lodash.clonedeep';
import { validateString } from 'utils/validators/ValidateDataTypes/validateString';
import { replacer } from './exportReplacer';

// Clone the data (to avoid mutating of original data) and stringify non-string properties

export const stringifyProperties = data => {
  const convertedData = cloneDeep(data, replacer);
  Object.keys(convertedData).forEach(key => {
    convertedData[key] = validateString(convertedData[key])
      ? convertedData[key]
      : JSON.stringify(convertedData[key]);
  });
  return convertedData;
};
