import { withReactMemo } from 'HOCs/withReactMemo';
import { useMapBounds } from 'Hooks/Map/useMapBounds';
import { useSwitchSatellite } from 'Hooks/Map/useSwitchSatellite';
import React from 'react';
import { Map, ZoomControl } from 'react-leaflet';
import Control from 'react-leaflet-control';
import { useDispatch } from 'react-redux';
import { setZoomToNull } from 'redux/map-interaction-reducer';
import { setSurfaceClickedValue } from 'redux/nav-reducer';
import MainMapClasses from './MainMap.module.css';
import Baselayers from './MapElements/Baselayers/Baselayers';
import InitialZoomButton from './MapElements/InitialZoomButton/InitialZoomButton';
import MarkerClusterGroupWrapper from './MapElements/Markers/MarkerClusterGroupWrapper';
import SpatialSelection from './MapElements/SpatialSelection/SpatialSelection';

const MainMap = ({ actualMapWidth }) => {
  const dispatch = useDispatch();
  const mapRef = React.createRef();
  useMapBounds(mapRef, actualMapWidth);
  useSwitchSatellite(mapRef);
  return (
    <Map
      ref={mapRef}
      onClick={() => dispatch(setSurfaceClickedValue())}
      zoom={5}
      className={MainMapClasses.container}
      zoomControl={false}
      center={[55.86852, 18.14585]}
      onZoomEnd={() => dispatch(setZoomToNull())}>
      <ZoomControl position='bottomleft' />
      <Control position='bottomleft'>
        <InitialZoomButton />
      </Control>
      <Baselayers />
      <SpatialSelection />
      <MarkerClusterGroupWrapper />
    </Map>
  );
};

export default withReactMemo(MainMap);
