// Filter all entities (for all gazetteers) by whether they have mathings or not
// TODO: entities instead of entries
export const filterEntitiesByMatchingProperty = entities => {
  return entities.filter(el => el.matchings && el.matchings.length !== 0);
};
