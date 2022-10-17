import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBottomContainerHeight } from 'redux/map-interaction-reducer';
import { getIsResults, getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { getWindowDimensions } from 'selectors/simple-selectors/table-state-selectors';

// Hook to keep height of bottom container actual on changes in dependency array

export function useBottomContainerHeight() {
  const dispatch = useDispatch();
  const { height } = useSelector(getWindowDimensions);
  const isResults = useSelector(getIsResults);
  const isSideSwitched = useSelector(getIsSideSwitched);
  useEffect(() => {
    if (isSideSwitched) {
      dispatch(setBottomContainerHeight());
    }
  }, [isSideSwitched, isResults, height]);
}
