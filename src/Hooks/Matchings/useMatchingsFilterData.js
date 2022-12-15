import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredMatchings } from 'redux/matching-reducer';
import { getMatchings } from 'selectors/reselectors/getMatchings';
import {
  getMatchingCurrentGazetteer,
  getMatchingCurrentSourceGazetteer,
} from 'selectors/simple-selectors/matching-selectors';
import { filterMatchingsByMatchingsGazetteer } from 'utils/Filtering/Matchings/filterMatchingsByMatchingsGazetteer';
import { filterMatchingsBySourceGazetteer } from 'utils/Filtering/Matchings/filterMatchingsBySourceGazetteer';

// Hook to wrap two filters for matching table in matching view: filter by source gazetteer and by matched gazetteer

export function useMatchingsFilterData() {
  const matchings = useSelector(getMatchings);
  const currentSourceGazetteer = useSelector(getMatchingCurrentSourceGazetteer);
  const currentGazetteer = useSelector(getMatchingCurrentGazetteer);
  const dispatch = useDispatch();
  useEffect(() => {
    let filtered = filterMatchingsBySourceGazetteer(matchings, currentSourceGazetteer);
    filtered = filterMatchingsByMatchingsGazetteer(filtered, currentGazetteer, 'db');
    dispatch(setFilteredMatchings(filtered));
  }, [currentSourceGazetteer, currentGazetteer]);
}
