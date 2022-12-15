// Get gazetteer results that are currently expanded in the results table

export const findExpandedRow = (expanded, gazName) => {
  return Object.keys(expanded).some(el => el === gazName && expanded[el] === true);
};
