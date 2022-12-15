import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCoordinates } from 'redux/search-reducer';
import { getDraw } from 'selectors/simple-selectors/search-selectors';
import { useStopDrawingBoundingBox } from './useStopDrawingBoundingBox';
import { useSurfaceClicked } from './useSurfaceClicked';

// Hook to manage bounding box tool states

export function useBoundingBox() {
  const draw = useSelector(getDraw);
  const dispatch = useDispatch();
  const [shouldDraw, setShouldDraw] = useState(false);
  const [shouldRemove, setShouldRemove] = useState(false);

  useSurfaceClicked(setShouldDraw);
  useStopDrawingBoundingBox({ setShouldDraw, setShouldRemove });

  const enableDrawing = () => {
    if (shouldDraw) {
      draw._toolbars.draw._modes.rectangle.handler.disable();
      setShouldDraw(false);
    } else {
      draw._toolbars.draw._modes.rectangle.handler.enable();
      setShouldDraw(true);
      setShouldRemove(false);
    }
  };

  const disableDrawing = () => {
    let layer = draw._toolbars.edit.options.featureGroup._layers;
    let layerElement = layer[Object.keys(layer)[0]];
    draw._toolbars.edit.options.featureGroup.removeLayer(layerElement);
    setShouldRemove(false);
    dispatch(setCoordinates([]));
  };

  return { shouldDraw, shouldRemove, enableDrawing, disableDrawing };
}
