import { checkStatus } from 'utils/validators/checkStatus';

// Get length of gazetteer specific results to show in gazetteer head

export const getResultsLength = original => {
  const { actualState, types } = original;
  if (checkStatus(actualState, 'done')) {
    return types.length;
  } else if (checkStatus(actualState, 'isFetching')) {
    return '...is Loading';
  }
  return '0';
};
