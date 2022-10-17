export const getMinRows = (isSideSwitched, length) => {
  if (isSideSwitched) {
    return length < 10 ? 10 : length;
  }
  return length === 0 ? 4 : length;
};
