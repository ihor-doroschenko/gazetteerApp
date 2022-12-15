// Check whether value can be converted to number

export const isNumeric = value => {
  return !isNaN(value - parseFloat(value));
};
