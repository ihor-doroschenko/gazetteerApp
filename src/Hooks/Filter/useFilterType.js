import { useSelector } from 'react-redux';
import { getGazetteerFilterTypesValues } from 'selectors/reselectors/simple-reselectors';
import { getTypeFilterValues } from 'selectors/simple-selectors/filter-selectors';

// Hook to get values necessary to perform filter type in a subtable

export function useFilterType(gazName) {
  const types = useSelector(state => getGazetteerFilterTypesValues(state, gazName));
  const typeFilterValues = useSelector(getTypeFilterValues);
  const filterValue = typeFilterValues.find(el => el.gazetteer === gazName);
  const typelessGazetteer = (!types || types.length === 0) && true;
  return { types, filterValue, typelessGazetteer };
}
