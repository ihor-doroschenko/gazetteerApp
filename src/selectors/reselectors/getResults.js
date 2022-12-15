import { createSelector } from 'reselect';
import { getEntries } from 'selectors/simple-selectors/matching-selectors';
import {
  getExternEntities,
  getStatus,
  getUsedGazetteers,
} from 'selectors/simple-selectors/results-selectors';
import { getDataFromOriginalEntities } from 'utils/ReselectorHelpers/getDataFromOriginalEntities';
import { getDataFromSeparateEntries } from 'utils/ReselectorHelpers/getDataFromSeparateEntries';

// Selector to get results - both for originally requested and for separate requested
export const getResults = createSelector(
  getStatus,
  getUsedGazetteers,
  getEntries,
  getExternEntities,
  (status, usedGazetteers, entries, externEntities) => {
    const data = [];
    getDataFromOriginalEntities(data, status, entries, usedGazetteers);
    getDataFromSeparateEntries(data, externEntities, usedGazetteers);
    return data;
  }
);
