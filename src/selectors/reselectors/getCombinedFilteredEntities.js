import { createSelector } from 'reselect';
import {
  getNameFilterValues,
  getTypeFilterValues,
} from 'selectors/simple-selectors/filter-selectors';
import { getEntities } from 'selectors/simple-selectors/matching-selectors';
import { getExternEntities, getUsedGazetteers } from 'selectors/simple-selectors/results-selectors';
import { handleEntitiesFilter } from 'utils/Filtering/handleEntitiesFilter';
import { handleNamesAndTypeFilter } from 'utils/Filtering/handleNamesAndTypeFilter';
import { shouldThisGazBeFiltered } from 'utils/Filtering/shouldThisGazBeFiltered';
import { isGazetteerInUsedGazetteers } from 'utils/validators/isGazetteerInUsedGazetteers';

// Selector to get entities by one or two filters (by type and/or by name) in results table

export const getCombinedFilteredEntities = createSelector(
  [
    getNameFilterValues,
    getTypeFilterValues,
    getEntities,
    getUsedGazetteers,
    getExternEntities,
    (state, gazName) => gazName,
  ],
  (nameValues, typeValues, entities, usedGazetteers, externEntities, gazName) => {
    const isUsedGazetteer = isGazetteerInUsedGazetteers(usedGazetteers, gazName);
    const entitiesUsedGazetteers = isUsedGazetteer ? entities : externEntities;
    if (gazName) {
      if (
        shouldThisGazBeFiltered(nameValues, gazName) &&
        shouldThisGazBeFiltered(typeValues, gazName)
      ) {
        return handleNamesAndTypeFilter(nameValues, typeValues, entitiesUsedGazetteers, gazName);
      } else if (shouldThisGazBeFiltered(nameValues, gazName)) {
        return handleEntitiesFilter(nameValues, entitiesUsedGazetteers, gazName);
      } else if (shouldThisGazBeFiltered(typeValues, gazName)) {
        return handleEntitiesFilter(typeValues, entitiesUsedGazetteers, gazName);
      }
    }
    return [];
  }
);
