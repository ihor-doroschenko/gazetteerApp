// Replace keys by indexes in an object

export const replaceKeysByIndexes = keyObj => {
  const indexObj = {};
  for (const el in Object.keys(keyObj)) {
    indexObj[el] = keyObj[Object.keys(keyObj)[el]];
  }
  return indexObj;
};
