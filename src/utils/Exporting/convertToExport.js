import { validateString } from '../validators/ValidateDataTypes/validateString';

export const convertToExport = dataset => dataset.map(el => convertIfIsNotValidString(el));

const convertIfIsNotValidString = function (data) {
  const replacer = (key, value) => (!value ? '' : value);
  const convertedData = JSON.parse(JSON.stringify(data, replacer));
  Object.keys(convertedData).forEach(key => {
    convertedData[key] = validateString(convertedData[key])
      ? convertedData[key]
      : JSON.stringify(convertedData[key]);
  });
  return convertedData;
};
