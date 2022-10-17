export const findExpandedRow = (expanded, gazName) => {
  return Object.keys(expanded).some(el => el === gazName && expanded[el] === true);
};
