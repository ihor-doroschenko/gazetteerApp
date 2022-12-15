import { findElementByGazetteerName } from 'utils/ObjectOperations/findElementByGazetteerName';
import { isFilterValueName } from './isFilterValueName';

// Filter entities by type or name (gazetteer specific results, subtable)

export const handleEntitiesFilter = (filterValues, entries, gazName) => {
  const elements = findElementByGazetteerName(filterValues, gazName);
  if (elements) {
    const filteredArray = [];
    for (let row of entries[gazName]) {
      if (isFilterValueName(elements.values, row, gazName)) {
        filteredArray.push(row);
      }
    }
    return filteredArray;
  }
};
