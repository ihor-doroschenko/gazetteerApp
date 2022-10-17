import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mouseClickClear } from 'redux/map-interaction-reducer';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { autoScroll } from 'utils/Autoscroll/AutoScrollTools';

// Hook used for subtable autoscrolling (only)

export function useAutoscroll(customRef, mouseClickedElement) {
  const isSideSwitched = useSelector(getIsSideSwitched);
  const dispatch = useDispatch();
  const params = {
    ref: customRef,
    mouseClickClear: () => dispatch(mouseClickClear()),
    id: mouseClickedElement.id,
    isSwitched: isSideSwitched,
  };
  useEffect(() => {
    autoScroll(params);
  }, [mouseClickedElement.id]);
}
