import { sortObjectByNameProperty } from '../Sorting/sortObjectByNameProperty';
import { assignInternId } from './AdditionalNormalizing/assignInternId';
import { normalize } from './normalizeResults';

// Proprocessing operations for results

export const preprocessResults = (entities, gazName) => {
  if (entities || entities.length !== 0) {
    // Firstly, the results are normalized
    const normalized = normalize(entities, gazName);
    // Secondly, already normalized results are sorted
    const sorted = normalized.sort(sortObjectByNameProperty);
    // Finally, already normalized and sorted results are assigned intern ids to provide intern indexing
    return assignInternId(sorted);
  }
  return entities;
};
