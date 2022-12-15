// Combine filter values to filter gazetteer specific results in subtable

export function addFilteredValuesToCombined(combinedFilterValues, filterValues, gazName) {
  filterValues.forEach(
    element => element.gazetteer === gazName && combinedFilterValues.push(element.values)
  );
}
