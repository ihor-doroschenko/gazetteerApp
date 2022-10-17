import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCoordinates } from 'redux/search-reducer';
import { getIsSurfaceClickedValue } from 'selectors/simple-selectors/nav-selectors';
import { getDraw, getSearchCoordinates } from 'selectors/simple-selectors/search-selectors';
import BoundingBoxClasses from './BoundingBox.module.css';
import BoundingBoxRemoveElement from './BoundingBoxElement';
import BoundingBoxLabel from './BoundingBoxLabel';

const BoundingBox = props => {
  const draw = useSelector(getDraw);
  const coordinates = useSelector(getSearchCoordinates);
  const isSurfaceClickedValue = useSelector(getIsSurfaceClickedValue);
  const dispatch = useDispatch();
  const [shouldDraw, setShouldDraw] = useState(false);
  const [shouldRemove, setShouldRemove] = useState(false);

  useEffect(() => {
    if (draw && coordinates.length === 0) {
      setShouldDraw(false);
      draw._toolbars.draw._modes.rectangle.handler.disable();
    }
  }, [isSurfaceClickedValue]);

  useEffect(() => {
    if (coordinates.length !== 0) {
      setShouldDraw(false);
      setShouldRemove(true);
    }
  }, [coordinates]);

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
  return (
    <div
      className={BoundingBoxClasses.boundingBox}
      onClick={!shouldRemove ? enableDrawing : disableDrawing}>
      <TooltipContainer
        placement='top'
        customElement={
          <BoundingBoxRemoveElement shouldDraw={shouldDraw} shouldRemove={shouldRemove} />
        }
        text={shouldRemove ? 'tt_bounding_box_remove' : 'tt_bounding_box_open'}
        delay={true}
      />
      <BoundingBoxLabel shouldDraw={shouldDraw} shouldRemove={shouldRemove} />
    </div>
  );
};

export default BoundingBox;
