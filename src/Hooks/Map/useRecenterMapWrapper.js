import { defaultElementWidth } from 'constants/numericConstants';
import { useSelector } from 'react-redux';
import { getIsMatched } from 'selectors/simple-selectors/matching-selectors';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { getOriginalStatus } from 'selectors/simple-selectors/results-selectors';
import { getSearchWidth } from 'selectors/simple-selectors/table-state-selectors';
import { useRecenterMap } from './useRecenterMap';

// Container hook for recenter map hook

export function useRecenterMapWrapper(mapRef) {
  const originalStatus = useSelector(getOriginalStatus);
  const isSideSwitched = useSelector(getIsSideSwitched);
  const isMatched = useSelector(getIsMatched);
  const searchWidth = useSelector(getSearchWidth);

  const paramsForStartRecentering = {
    paddingTopLeft: [searchWidth, 50],
    paddingBottomRight: [defaultElementWidth, 50],
    // 100 because of initial values, less costly operation, and absence of animation
    seconds: 100,
    dependencies: [originalStatus, isMatched],
  };
  const paramsForSwitchingView = {
    paddingTopLeft: [100, 100],
    paddingBottomRight: [100, 100],
    // 500 on view switch because of animation set in the app for 0.5 sec
    seconds: 500,
    dependencies: [isSideSwitched],
  };

  useRecenterMap(mapRef, paramsForStartRecentering);
  useRecenterMap(mapRef, paramsForSwitchingView);
}
