import { createSelector } from 'reselect';
import { getEntries } from 'selectors/simple-selectors/matching-selectors';

// Selector to get a detail entity by id
export const getDetailById = createSelector([getEntries, (state, id) => id], (entries, id) => {
  for (let value of Object.values(entries)) {
    for (let el of value) {
      if (el.id === id) {
        return el;
      }
    }
  }
});
