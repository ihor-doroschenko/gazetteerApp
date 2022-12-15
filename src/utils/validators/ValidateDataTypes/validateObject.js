// Check whether value is a valid object

export const isObject = value => {
  return typeof value === 'object' && !Array.isArray(value) && value !== null;
};
