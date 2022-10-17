export const getEntitiesWithMatchings = (entries, gazName) => {
  return entries[gazName].filter(el => el.matchings && el.matchings.length !== 0);
};
