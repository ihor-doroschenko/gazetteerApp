import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredMatchings } from 'redux/matching-reducer';
import { getMatchings } from 'selectors/reselectors/getMatchings';
import {
  getMatchingCurrentGazetteer,
  getMatchingCurrentSourceGazetteer,
} from 'selectors/simple-selectors/matching-selectors';
import { filterBySourceGazetteer } from 'utils/Helpers/Matchings/filterBySourceGazetteer';
import { filterMatchingsByProperty } from '../../utils/Helpers/Matchings/filterMatchingsByProperty';

// Hook to wrap two filters for matching table in matching view: filter by source gazetteer and by matched gazetteer

export function useMatchingsFilterData() {
  const matchings = useSelector(getMatchings);
  const currentSourceGazetteer = useSelector(getMatchingCurrentSourceGazetteer);
  const currentGazetteer = useSelector(getMatchingCurrentGazetteer);
  const dispatch = useDispatch();
  useEffect(() => {
    let filtered = filterBySourceGazetteer(matchings, currentSourceGazetteer);
    filtered = filterMatchingsByProperty(filtered, currentGazetteer, 'db');
    dispatch(setFilteredMatchings(filtered));
  }, [currentSourceGazetteer, currentGazetteer]);
}
