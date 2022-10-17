import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredMatchings } from 'redux/matching-reducer';
import { getMatchingsEntities } from 'selectors/simple-selectors/matching-selectors';
import { getIsMatching } from 'selectors/simple-selectors/nav-selectors';
import { getStatus } from 'selectors/simple-selectors/results-selectors';
import { getStatusIsFinished } from 'utils/Helpers/Matchings/getStatusIsFinished';

// Hook to show all results in results table or to show results only with matchings

export function useMatchingsFilter() {
  const matchings = useSelector(getMatchingsEntities);
  const status = useSelector(getStatus);
  const dispatch = useDispatch();
  const isMatching = useSelector(getIsMatching);
  useEffect(() => {
    const statusIsFinished = getStatusIsFinished(status);
    if (isMatching && statusIsFinished) {
      dispatch(setFilteredMatchings(matchings));
    }
  }, [matchings]);
}
