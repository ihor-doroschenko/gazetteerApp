import { createSelector } from 'reselect';
import { getMatchingsEntities } from 'selectors/simple-selectors/matching-selectors';

// Selector to get matchings (only those that have entities)
export const getMatchings = createSelector([getMatchingsEntities], matchings => {
  return Object.keys(matchings)
    .filter(key => matchings[key].length !== 0)
    .reduce((res, key) => ((res[key] = matchings[key]), res), {});
});
