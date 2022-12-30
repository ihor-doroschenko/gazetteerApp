import { usePrevious } from 'Hooks/usePrevious';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getDetails } from 'selectors/simple-selectors/details-selectors';
import { getDifferenceArraysOfObjects } from 'utils/ObjectOperations/getDifferenceArraysOfObjects';

// Hook to use auto-scroll for the results side on the changes in the details list

export const useAutoScrollForResultsSide = handleAutoScroll => {
  const detailsList = useSelector(getDetails);
  const previousDetails = usePrevious(detailsList);
  useEffect(() => {
    if (previousDetails) {
      const results = getDifferenceArraysOfObjects(detailsList, previousDetails);
      if (results.length !== 0) {
        handleAutoScroll(results[0].gazName);
      }
    }
  }, [detailsList]);
};
