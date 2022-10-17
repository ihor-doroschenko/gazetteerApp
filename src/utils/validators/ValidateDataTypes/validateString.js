export const validateString = value => {
  return typeof value === 'string' || value instanceof String;
};
