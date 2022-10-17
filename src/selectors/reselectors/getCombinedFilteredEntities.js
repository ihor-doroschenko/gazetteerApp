import { createSelector } from 'reselect';
import {
  getNameFilterValues,
  getTypeFilterValues,
} from 'selectors/simple-selectors/filter-selectors';
import { getEntries } from 'selectors/simple-selectors/matching-selectors';
import { checkGazetteer } from 'utils/Finding/checkGazetteer';
import {
  handleFilter,
  handleNamesAndTypeFilter,
} from 'utils/ReselectorHelpers/getCombinedFilteredValuesHelpers';

// Selector to get entities by one or two filters (by type and/or by name) in results table
export const getCombinedFilteredEntities = createSelector(
  [getNameFilterValues, getTypeFilterValues, getEntries, (state, gazName) => gazName],
  (nameValues, typeValues, entries, gazName) => {
    if (gazName) {
      if (checkGazetteer(nameValues, gazName) && checkGazetteer(typeValues, gazName)) {
        return handleNamesAndTypeFilter(nameValues, typeValues, entries, gazName);
      } else if (checkGazetteer(nameValues, gazName)) {
        return handleFilter(nameValues, entries, gazName);
      } else if (checkGazetteer(typeValues, gazName)) {
        return handleFilter(typeValues, entries, gazName);
      }
    }
    return [];
  }
);
