import React, { useState } from 'react';
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { useDispatch } from 'react-redux';
import { draw, setCoordinates } from 'redux/search-reducer';

const SpatialSelection = props => {
  const dispatch = useDispatch();
  const [customRef, setRef] = useState(null);

  const onRefChange = node => {
    setRef(node);
  };

  const getCoords = ref => {
    const item = ref.leafletElement._layers;
    const bounds = item[Object.keys(item)]._bounds;
    const coordinates = [
      { lat: bounds._southWest.lat, lng: bounds._southWest.lng },
      { lat: bounds._northEast.lat, lng: bounds._southWest.lng },
      { lat: bounds._northEast.lat, lng: bounds._northEast.lng },
      { lat: bounds._southWest.lat, lng: bounds._northEast.lng },
    ];
    dispatch(setCoordinates(coordinates));
  };

  const mountDrawControl = drawControl => {
    dispatch(draw(drawControl));
  };

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
