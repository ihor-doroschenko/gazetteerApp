// Check whether value is a valid string

export const validateString = value => {
  return typeof value === 'string' || value instanceof String;
};
