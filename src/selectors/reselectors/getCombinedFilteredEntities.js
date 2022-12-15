import { createSelector } from 'reselect';
import {
  getNameFilterValues,
  getTypeFilterValues,
} from 'selectors/simple-selectors/filter-selectors';
import { getEntries } from 'selectors/simple-selectors/matching-selectors';
import { getExternEntities, getUsedGazetteers } from 'selectors/simple-selectors/results-selectors';
import { handleEntitiesFilter } from 'utils/Filtering/handleEntitiesFilter';
import { handleNamesAndTypeFilter } from 'utils/Filtering/handleNamesAndTypeFilter';
import { shouldThisGazBeFiltered } from 'utils/Filtering/shouldThisGazBeFiltered';
import { IsGazetteerInUsedGazetteers } from 'utils/validators/IsGazetteerInUsedGazetteers';

// Selector to get entities by one or two filters (by type and/or by name) in results table
export const getCombinedFilteredEntities = createSelector(
  [
    getNameFilterValues,
    getTypeFilterValues,
    getEntries,
    getUsedGazetteers,
    getExternEntities,
    (state, gazName) => gazName,
  ],
  (nameValues, typeValues, entries, usedGazetteers, externEntities, gazName) => {
    const isUsedGazetteer = IsGazetteerInUsedGazetteers(usedGazetteers, gazName);
    const entities = isUsedGazetteer ? entries : externEntities;
    if (gazName) {
      if (
        shouldThisGazBeFiltered(nameValues, gazName) &&
        shouldThisGazBeFiltered(typeValues, gazName)
      ) {
        return handleNamesAndTypeFilter(nameValues, typeValues, entities, gazName);
      } else if (shouldThisGazBeFiltered(nameValues, gazName)) {
        return handleEntitiesFilter(nameValues, entities, gazName);
      } else if (shouldThisGazBeFiltered(typeValues, gazName)) {
        return handleEntitiesFilter(typeValues, entities, gazName);
      }
    }
    return [];
  }
);
