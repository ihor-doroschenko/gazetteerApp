export const replaceKeysByIndexes = expanded => {
  const expandedRows = {};
  for (const el in Object.keys(expanded)) {
    expandedRows[el] = expanded[Object.keys(expanded)[el]];
  }
  return expandedRows;
};
