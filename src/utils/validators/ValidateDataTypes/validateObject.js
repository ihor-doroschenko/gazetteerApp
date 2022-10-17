export const isObject = value => {
  return typeof value === 'object' && !Array.isArray(value) && value !== null;
};
