import { createSelector } from 'reselect';
import { areExternEntitiesOfUsedGazetteers } from 'utils/Helpers/TableHelpers/areExternEntitiesOfUsedGazetteers';
import { getTypes } from '../simple-selectors/filter-selectors';
import { getEntities } from '../simple-selectors/matching-selectors';
import {
  getExternEntities,
  getStatus,
  getUsedGazetteers,
} from '../simple-selectors/results-selectors';

// Selector to get results for specific gazetteer

export const getSelectedEntities = createSelector(
  [getEntities, getUsedGazetteers, getExternEntities, (state, gazName) => gazName],
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
  [getTypes, (state, gazName) => gazName],
  (types, gazName) => {
    return types[gazName];
  }
);

export const getGazetteerStatus = createSelector(
  [getStatus, (state, gazName) => gazName],
  (status, gazName) => {
    return status[gazName];
  }
);

export const getGazetteerEntities = createSelector(
  [getEntities, (state, gazName) => gazName],
  (entities, gazName) => {
    return entities[gazName];
  }
);

export const getExternGazetteerEntities = createSelector(
  [getExternEntities, (state, gazName) => gazName],
  (externEntities, gazName) => {
    return externEntities[gazName];
  }
);
