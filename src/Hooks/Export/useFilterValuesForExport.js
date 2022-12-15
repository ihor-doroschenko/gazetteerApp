import { useSelector } from 'react-redux';
import {
  getNameFilterValues,
  getTypeFilterValues,
} from 'selectors/simple-selectors/filter-selectors';
import { shouldThisGazBeFiltered } from 'utils/Filtering/shouldThisGazBeFiltered';

// Hook for checking whether the entities are filtered. If yes, the new (filtered) entities will be exported, if not, the original entities will be exported

export function useFilterValuesForExport(gazName) {
  const nameFilterValues = useSelector(getNameFilterValues);
  const typeFilterValues = useSelector(getTypeFilterValues);
  const isFilteredByName = shouldThisGazBeFiltered(nameFilterValues, gazName);
  const isFilteredByType = shouldThisGazBeFiltered(typeFilterValues, gazName);
  return isFilteredByName || isFilteredByType;
}
