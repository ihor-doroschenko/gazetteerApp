// Get length of gazetteer specific results to show in gazetteer head

import { checkStatus } from 'utils/validators/checkStatus';

export const getResultsLength = original => {
  const { actualState, types } = original;
  if (checkStatus(actualState, 'done')) {
    return types.length;
  } else if (checkStatus(actualState, 'isFetching')) {
    return '...is Loading';
  }
  return '0';
};
