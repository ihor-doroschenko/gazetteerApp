import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getIsSurfaceClickedValue } from 'selectors/simple-selectors/nav-selectors';
import { getDraw, getSearchCoordinates } from 'selectors/simple-selectors/search-selectors';

// Hook to stop drawing bounding box if the surface of the map was clicked double - the bounding box should appear only after one click and dragging happen

export function useSurfaceClicked(setShouldDraw) {
  const draw = useSelector(getDraw);
  const coordinates = useSelector(getSearchCoordinates);
  const isSurfaceClickedValue = useSelector(getIsSurfaceClickedValue);
  useEffect(() => {
    if (draw && coordinates.length === 0) {
      setShouldDraw(false);
      draw._toolbars.draw._modes.rectangle.handler.disable();
    }
  }, [isSurfaceClickedValue]);
}
