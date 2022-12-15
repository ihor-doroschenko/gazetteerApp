// Convert items of an array to type number (float)
export const convertArrayItemsToNumbers = arr => {
  return arr.map(item => parseFloat(item));
};
