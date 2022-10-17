export const filterEntitiesByMatchingProperty = entries => {
  return entries.filter(el => el.matchings && el.matchings.length !== 0);
};
