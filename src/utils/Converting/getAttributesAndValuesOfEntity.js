export const getAttributesAndValuesOfEntity = data => {
  let processedData = [];
  Object.entries(data).forEach(([key, value]) => {
    processedData = [...processedData, { attribute: key, value: value }];
  });
  return processedData;
};
