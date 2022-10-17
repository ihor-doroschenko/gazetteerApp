export const getMatchingsLength = (entities, isMatching, actualState) => {
  if (isMatching && actualState === 'done') {
    return entities.reduce(
      (total, el) => (el.matchings && el.matchings.length !== 0 ? total + 1 : total),
      0
    );
  }
};
