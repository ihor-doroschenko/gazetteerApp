export const isNumeric = value => {
  return !isNaN(value - parseFloat(value));
};
