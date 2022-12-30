import MarkerContainer from 'components/MarkerContainer/MarkerContainer';
import { withReactMemo } from 'HOCs/withReactMemo';
import { divIcon } from 'leaflet';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Marker, Popup } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { handleMouseClick, mouseOutMarker, mouseOverMarker } from 'redux/map-interaction-reducer';
import { getMouseOverElementInfinite } from 'selectors/simple-selectors/map-interaction-selectors';
import { areIdAndGazNameEqual } from 'utils/EqualComparing/areIdAndGazNameEqual';
import CustomPopup from './CustomPopup/CustomPopup';

// Wrapper component to contain marker element to be visualized on the map (based on react-leaflet). It includes mouseClick, mouseOver, and mouseOut events as well as popup and custom icon. It react on the interaction with the results table

const Markers = props => {
  const { id, gazName, position, internId, name } = props;
  const dispatch = useDispatch();
  const mouseOverElementInfinite = useSelector(getMouseOverElementInfinite);
  const isMouseOverElementInfinite = areIdAndGazNameEqual(id, gazName, mouseOverElementInfinite);
  return (
    <Marker
      position={position}
      icon={divIcon({
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
        html: renderToString(
          <MarkerContainer
            internId={internId}
            gazName={gazName}
            isMouseOverElementInfinite={isMouseOverElementInfinite}
            position={position}
            mapMarker
          />
        ),
      })}
      onMouseOver={() => dispatch(mouseOverMarker({ gazName: gazName, id: id }))}
      onMouseOut={() => dispatch(mouseOutMarker())}
      onClick={() => dispatch(handleMouseClick({ gazName: gazName, id: id }))}>
      <Popup maxWidth='400' maxHeight='100'>
        <CustomPopup gazName={gazName} name={name} id={id} />
      </Popup>
    </Marker>
  );
};

export default withReactMemo(Markers);
