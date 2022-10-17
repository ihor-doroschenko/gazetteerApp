import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAdditionalResultsSideHeights } from 'redux/table-state-reducer';
import { getStatus } from 'selectors/simple-selectors/results-selectors';
import { getTableStateExpanded } from 'selectors/simple-selectors/table-state-selectors';
import { checkEveryTableStateIsCollapsed } from 'utils/Helpers/TableHelpers/checkEveryTableStateIsCollapsed';
import { validateStatus } from 'utils/validators/PropertyValidators/validateStatus';

// Hook to use actual height of the results table to set height for additional results such as matchings table or compare table

export function useActualHightToSetAdditionalResultHeights(actualHeight) {
  const dispatch = useDispatch();
  const status = useSelector(getStatus);
  const tableStateExpanded = useSelector(getTableStateExpanded);
  useEffect(() => {
    if (validateStatus(status) && checkEveryTableStateIsCollapsed(tableStateExpanded)) {
      dispatch(setAdditionalResultsSideHeights(actualHeight));
    }
  }, [actualHeight]);
}
