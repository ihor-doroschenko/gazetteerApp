export const getResultsLength = original => {
  if (original.actualState === 'done') {
    return original.types.length;
  } else if (original.actualState === 'isFetching') {
    return '...is Loading';
  }
  return '0';
};
