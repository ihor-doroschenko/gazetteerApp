import { filterCaseInsensitive } from 'utils/Filtering/FilterSubTable/filterCaseInsensitive';
import { filterTypes } from 'utils/Filtering/FilterSubTable/filterTypes';
import { findElementByGazetteerName } from 'utils/Finding/findElementByGazetteerName';
import { getIsAName } from './getIsAName';

export const handleFilter = (filterValues, entries, gazName) => {
  const elements = findElementByGazetteerName(filterValues, gazName);
  if (elements) {
    const { value } = elements.values;
    const filteredArray = [];
    for (let row of entries[gazName]) {
      const isAName = getIsAName(value, row, gazName);
      if (isAName) {
        filteredArray.push(row);
      }
    }
    return filteredArray;
  }
};

export const handleNamesAndTypeFilter = (nameFilterValues, typeFilterValues, entries, gazName) => {
  const names = findElementByGazetteerName(nameFilterValues, gazName);
  const types = findElementByGazetteerName(typeFilterValues, gazName);
  if (names && types) {
    const namesValue = names.values.value;
    const typeValue = types.values.value;
    const filteredArray = [];
    for (let row of entries[gazName]) {
      if (filterTypes(typeValue, row, gazName) && filterCaseInsensitive(namesValue, row)) {
        filteredArray.push(row);
      }
    }
    return filteredArray;
  }
};
