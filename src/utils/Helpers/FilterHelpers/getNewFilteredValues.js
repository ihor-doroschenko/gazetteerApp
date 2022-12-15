// Get updated filtered state (for filter in gazetteer-specific results in subtable)

export const getNewFilteredValues = (values, valuesUpdated, gazetteer) => {
  return [...values, { values: valuesUpdated, gazetteer: gazetteer }];
};
