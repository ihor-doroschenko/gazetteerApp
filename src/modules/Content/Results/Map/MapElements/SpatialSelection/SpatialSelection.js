import React, { useState } from 'react';
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { useDispatch } from 'react-redux';
import { passDraw, setCoordinates } from 'redux/search-reducer';
import { getCoordinatesForBB } from 'utils/Helpers/MapHelpers/getCoordinatesForBB';

// Wrapper component to contain spatial selecion, i.e. drawing tool. It allows to draw a figure on the map (in this case, a bounding box), to extract coordinates from it, to form valied bounding box object, and then to send it as a part of a GET-request to the server

const SpatialSelection = props => {
  const dispatch = useDispatch();
  const [customRef, setRef] = useState(null);
  const onRefChange = node => setRef(node);
  const getCoords = ref => {
    const item = ref.leafletElement._layers;
    const coordinates = getCoordinatesForBB(item);
    dispatch(setCoordinates(coordinates));
  };
  const mountDrawControl = drawControl => dispatch(passDraw(drawControl));

  return (
    <FeatureGroup ref={onRefChange}>
      <EditControl
        onMounted={mountDrawControl}
        onCreated={e => getCoords(customRef)}
        draw={{
          polyline: false,
          circlemarker: false,
          circle: false,
          marker: false,
          polygon: false,
          rectangle: {
            shapeOptions: {
              color: '#636363',
              interactive: false,
            },
            metric: ['km', 'm'],
            repeatMode: false,
          },
        }}
      />
    </FeatureGroup>
  );
};

export default SpatialSelection;
