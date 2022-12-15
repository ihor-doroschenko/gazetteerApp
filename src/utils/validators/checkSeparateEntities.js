// Check whether there are any separate entries in current session

export const checkSeparateEntities = separateEntities => {
  return Object.keys(separateEntities).length !== 0;
};
