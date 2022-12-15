import { createSelector } from 'reselect';
import { areExternEntitiesOfUsedGazetteers } from 'utils/Helpers/TableHelpers/areExternEntitiesOfUsedGazetteers';
import { IsGazetteerInUsedGazetteers } from 'utils/validators/IsGazetteerInUsedGazetteers';
import { getTypes } from '../simple-selectors/filter-selectors';
import { getEntries } from '../simple-selectors/matching-selectors';
import { getExternEntities, getUsedGazetteers } from '../simple-selectors/results-selectors';

// Selector to get results for specific gazetteer
export const getSelectedEntries = createSelector(
  [getEntries, getUsedGazetteers, getExternEntities, (state, gazName) => gazName],
  (entities, usedGazetteers, externEntities, gazName) => {
    return areExternEntitiesOfUsedGazetteers({
      entities,
      usedGazetteers,
      externEntities,
      gazName,
    });
  }
);

// Selector to check whether required gazetteer is in used (selected) gazetteers from original search
export const findUsedGazetteer = createSelector(
  [getUsedGazetteers, (state, gazName) => gazName],
  (usedGazetteers, gazName) => {
    return usedGazetteers.some(g => g === gazName);
  }
);

// Selector to get type values for required gazetteer
export const getGazetteerFilterTypesValues = createSelector(
  [getTypes, getUsedGazetteers, (state, gazName) => gazName],
  (types, usedGazetteers, gazName) => {
    const isUsedGazetteer = IsGazetteerInUsedGazetteers(usedGazetteers, gazName);
    return isUsedGazetteer ? types[gazName] : [];
  }
);

/* export const getGazetteerFilterTypesValuesss = createSelector(
  [getEntries, getStatus, (state, gazName) => gazName],
  (entities, status) => {
    const isUsedGazetteer = IsGazetteerInUsedGazetteers(usedGazetteers, gazName);
    return isUsedGazetteer ? types[gazName] : [];
  }
);
 */
