import { useSelector } from 'react-redux';
import { getEntitiesToCompare } from 'selectors/simple-selectors/compare-selectors';
import { getCompareTableColumns } from 'utils/Helpers/Columns/getCompareTableColumns';

// Hoot to generate one header column and required number of columns with entities to compare

export function useCompareTableColumns() {
  const entitiesToCompare = useSelector(getEntitiesToCompare);
  const cols = getCompareTableColumns(entitiesToCompare);
  const [headerCol, gazetteerCols] = cols.reduce(
    ([item1, item2], el) =>
      el.accessor === 'attribute' ? [[...item1, el], item2] : [item1, [...item2, el]],
    [[], []]
  );
  return { headerCol, gazetteerCols };
}
