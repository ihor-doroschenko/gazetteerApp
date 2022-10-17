import { useSelector } from 'react-redux';
import {
  getNameFilterValues,
  getTypeFilterValues,
} from 'selectors/simple-selectors/filter-selectors';
import { addFilteredValuesToCombined } from 'utils/Helpers/TableHelpers/GazetteerResultsHead/addFilteredValuesToCombined';

// Hook to combine filter values (type and name), if applied, for specific gazetteer

export function useSubTableFilter(gazName) {
  const nameFilterValues = useSelector(getNameFilterValues);
  const typeFilterValues = useSelector(getTypeFilterValues);

  const combined = [];

  addFilteredValuesToCombined(combined, nameFilterValues, gazName);
  addFilteredValuesToCombined(combined, typeFilterValues, gazName);

  return combined;
}
