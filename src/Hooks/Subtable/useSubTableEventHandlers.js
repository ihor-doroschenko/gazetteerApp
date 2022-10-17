import { useDispatch } from 'react-redux';
import { handleDetail } from 'redux/details-reducer';
import { mouseOutInfinite, mouseOverInfinite } from 'redux/map-interaction-reducer';

// Hook to export required global event handlers for sub tables

export function useSubTableEventHandlers() {
  const dispatch = useDispatch();
  return { dispatch, handleDetail, mouseOutInfinite, mouseOverInfinite };
}
