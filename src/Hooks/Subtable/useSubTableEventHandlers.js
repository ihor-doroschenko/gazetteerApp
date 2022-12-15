import { useDispatch } from 'react-redux';
import { handleDetail } from 'redux/details-reducer';
import { mouseOutMarkerInfinite, mouseOverMarkerInfinite } from 'redux/map-interaction-reducer';

// Hook to export required global event handlers for sub tables

export function useSubTableEventHandlers() {
  const dispatch = useDispatch();
  return { dispatch, handleDetail, mouseOutMarkerInfinite, mouseOverMarkerInfinite };
}
