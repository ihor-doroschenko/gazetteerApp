import { findElementByGazetteerName } from 'utils/ObjectOperations/findElementByGazetteerName';
import { filterNames } from './filterNames';
import { filterTypes } from './TypeFilter/filterTypes';

// Filter entities both by type and name (gazetteer specific results, subtable)

export const handleNamesAndTypeFilter = (nameFilterValues, typeFilterValues, entries, gazName) => {
  const names = findElementByGazetteerName(nameFilterValues, gazName);
  const types = findElementByGazetteerName(typeFilterValues, gazName);
  if (names && types) {
    const namesValue = names.values.value;
    const typeValue = types.values.value;
    const filteredArray = [];
    for (let row of entries[gazName]) {
      if (filterTypes(typeValue, row, gazName) && filterNames(namesValue, row.name)) {
        filteredArray.push(row);
      }
    }
    return filteredArray;
  }
};
