// Get length of mathings of a gazetteer as soon as the search (requesting) is over

import { checkStatus } from 'utils/validators/checkStatus';

export const getMatchingsLength = (entities, actualState) => {
  if (checkStatus(actualState, 'done')) {
    return entities.reduce(
      (total, el) => (el.matchings && el.matchings.length !== 0 ? total + 1 : total),
      0
    );
  }
  return 0;
};
