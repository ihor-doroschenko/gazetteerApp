export const checkFilteredLengthInSideView = (val1, val2, val3, val4) => {
  return !val1 && val4.length !== 0 && val2.length <= val3;
};
