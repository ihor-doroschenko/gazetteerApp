import { useSelector } from 'react-redux';
import { getMatchings } from 'selectors/reselectors/getMatchings';
import {
  getMatchingCurrentGazetteer,
  getMatchingCurrentSourceGazetteer,
  getMatchingDBs,
} from 'selectors/simple-selectors/matching-selectors';
import { getGazetteerFilterValues } from 'utils/Helpers/Matchings/getGazetteerFilterValues';

// Hook to extract values for matching filters

export function useMatchingsTableFilterValuesExtraction() {
  const currentSourceGazetteer = useSelector(getMatchingCurrentSourceGazetteer);
  const currentGazetteer = useSelector(getMatchingCurrentGazetteer);
  const matchings = useSelector(getMatchings);
  const matchingDBs = useSelector(getMatchingDBs);
  const currentSourceGazetteers = getGazetteerFilterValues(Object.keys(matchings));
  const currentGazetteers = getGazetteerFilterValues(Array.from(matchingDBs));
  return { currentSourceGazetteer, currentGazetteer, currentSourceGazetteers, currentGazetteers };
}
