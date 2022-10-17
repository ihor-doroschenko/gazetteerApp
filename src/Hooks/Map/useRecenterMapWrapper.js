import { getRightContainerElementDefaultWidth } from 'constants/getRightContainerMaxWidth';
import { useSelector } from 'react-redux';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { getStatus } from 'selectors/simple-selectors/results-selectors';
import { getSearchWidth } from 'selectors/simple-selectors/table-state-selectors';
import { useRecenterMap } from './useRecenterMap';

// Container hook for recenter map hook

export function useRecenterMapWrapper(mapRef) {
  const status = useSelector(getStatus);
  const isSideSwitched = useSelector(getIsSideSwitched);
  const searchWidth = useSelector(getSearchWidth);
  const rightContainerElementDefaultWidth = getRightContainerElementDefaultWidth();

  const paramsForStartRecentering = {
    paddingTopLeft: [searchWidth, 50],
    paddingBottomRight: [rightContainerElementDefaultWidth, 50],
    // 100 because of initial values, less costly operation, and absence of animation
    seconds: 100,
    dependencies: [status],
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
