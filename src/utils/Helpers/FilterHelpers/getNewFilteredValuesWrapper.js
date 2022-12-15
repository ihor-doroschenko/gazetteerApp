import { getNewFilteredValues } from './getNewFilteredValues';

// Conditional wrapper to get updated filtered state (for filter in gazetteer-specific results in subtable)

export const getNewFilteredValuesWrapper = (values, action) => {
  const { filterValuesUpdated, gazetteer } = action;
  if (values.length === 0 || !values.some(el => el.gazetteer === gazetteer)) {
    return getNewFilteredValues(values, filterValuesUpdated, gazetteer);
  } else if (values.some(element => element.gazetteer === gazetteer)) {
    return values.map(el => {
      if (el.gazetteer === gazetteer) {
        return {
          ...el,
          values: filterValuesUpdated,
        };
      }
      return el;
    });
  }
};
