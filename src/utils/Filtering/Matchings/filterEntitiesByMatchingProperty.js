// Filter all entities (for all gazetteers) by whether they have mathings or not

export const filterEntitiesByMatchingProperty = entities => {
  return entities.filter(el => el.matchings && el.matchings.length !== 0);
};
