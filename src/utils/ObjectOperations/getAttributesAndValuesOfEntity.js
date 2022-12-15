// Extract keys and values from data (usually an object) and store them as attributes and attribute values pairs (as multiple objects) in an array

export const getAttributesAndValuesOfEntity = data => {
  let processedData = [];
  Object.entries(data).forEach(([key, value]) => {
    processedData = [...processedData, { attribute: key, value: value }];
  });
  return processedData;
};
