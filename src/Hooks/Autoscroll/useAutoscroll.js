import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mouseClickMarkerToInitial } from 'redux/map-interaction-reducer';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { autoScrollWrapper } from 'utils/Autoscroll/autoScrollWrapper';

// Hook used for subtable autoscrolling (only)

export function useAutoscroll(customRef, mouseClickedElement) {
  const isSideSwitched = useSelector(getIsSideSwitched);
  const dispatch = useDispatch();
  const params = {
    ref: customRef,
    mouseClickMarkerToInitial: () => dispatch(mouseClickMarkerToInitial()),
    id: mouseClickedElement.id,
    isSwitched: isSideSwitched,
  };
  useEffect(() => {
    autoScrollWrapper(params);
  }, [mouseClickedElement.id]);
}
