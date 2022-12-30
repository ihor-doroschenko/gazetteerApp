import { createSelector } from 'reselect';
import { getEntities } from 'selectors/simple-selectors/matching-selectors';
import {
  getExternEntities,
  getStatus,
  getUsedGazetteers,
} from 'selectors/simple-selectors/results-selectors';
import { getDataFromExternEntities } from 'utils/ReselectorHelpers/getDataFromExternEntities';
import { getDataFromOriginalEntities } from 'utils/ReselectorHelpers/getDataFromOriginalEntities';

// Selector to get results - both for originally requested and for separate requested

export const getResults = createSelector(
  getStatus,
  getUsedGazetteers,
  getEntities,
  getExternEntities,
  (status, usedGazetteers, entities, externEntities) => {
    const data = [];
    getDataFromOriginalEntities(data, status, entities, usedGazetteers);
    getDataFromExternEntities(data, externEntities, usedGazetteers);
    return data;
  }
);
