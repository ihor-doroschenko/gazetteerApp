import { createSelector } from 'reselect';
import { getTypes } from '../simple-selectors/filter-selectors';
import { getEntries } from '../simple-selectors/matching-selectors';
import {
  getSeparateEntries,
  getStatus,
  getUsedGazetteers,
} from '../simple-selectors/results-selectors';

// Selector to get results for specific gazetteer
export const getSelectedEntries = createSelector(
  [getEntries, getSeparateEntries, (state, gazName) => gazName],
  (entries, separateEntries, gazName) => {
    return separateEntries[gazName] ? separateEntries[gazName] : entries[gazName];
  }
);

// Selector to check whether required gazetteer is in used (selected) gazetteers from original search
export const findUsedGazetteer = createSelector(
  [getUsedGazetteers, (state, gazName) => gazName],
  (gazetteers, gazName) => {
    return gazetteers.some(g => g === gazName);
  }
);

// Selector to check whether status of required gazetteer is "done" (which means that there are some results of current search)
export const checkUsedGazetteersStatus = createSelector(
  [getStatus, (state, gazName) => gazName],
  (status, gazName) => {
    return status[gazName] === 'done';
  }
);

// Selector to get type values for required gazetteer
export const getGazetteerFilterTypesValues = createSelector(
  [getTypes, getSeparateEntries, (state, gazName) => gazName],
  (types, separateEntries, gazName) => {
    return separateEntries[gazName] ? [] : types[gazName];
  }
);
