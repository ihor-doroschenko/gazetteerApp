import { createSelector } from 'reselect';
import { getDetails } from 'selectors/simple-selectors/details-selectors';
import { getEntries } from 'selectors/simple-selectors/matching-selectors';
import { getSeparateEntries, getStatus } from 'selectors/simple-selectors/results-selectors';
import { getGazetteers } from 'selectors/simple-selectors/search-selectors';
import { getDataFromOriginalEntities } from 'utils/ReselectorHelpers/getDataFromOriginalEntities';
import { getDataFromSeparateEntries } from 'utils/ReselectorHelpers/getDataFromSeparateEntries';

// Selector to get results - both for originally requested and for separate requested
export const getResults = createSelector(
  getStatus,
  getGazetteers,
  getEntries,
  getSeparateEntries,
  getDetails,
  (status, gazetteers, entries, separateEntries, details) => {
    const data = [];
    getDataFromOriginalEntities(data, status, entries, gazetteers);
    getDataFromSeparateEntries(data, separateEntries, gazetteers, details);
    return data;
  }
);
