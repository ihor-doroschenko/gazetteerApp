import { sortArrayByNameProperty } from '../Sorting/sortArrayByNameProperty';
import { assignInternId } from './AdditionalNormalizing/assignInternId';
import { normalize } from './normalizeResults';

// Proprocessing operations for results

export const preprocessResults = (entries, gazName) => {
  if (entries || entries.length !== 0) {
    // Firstly, the results are normalized
    const normalized = normalize(entries, gazName);
    // Secondly, already normalized results are sorted
    const sorted = normalized.sort(sortArrayByNameProperty);
    // Finally, already normalized and sorted results are assigned intern ids to provide intern indexing
    return assignInternId(sorted);
  }
  return entries;
};
