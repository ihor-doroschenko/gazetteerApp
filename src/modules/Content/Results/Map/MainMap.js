import { withReactMemo } from 'HOCs/withReactMemo';
import { useMainMap } from 'Hooks/Map/useMainMap';
import React from 'react';
import { Map, ZoomControl } from 'react-leaflet';
import Control from 'react-leaflet-control';
import { useDispatch } from 'react-redux';
import { setZoomToEntityToInitial } from 'redux/map-interaction-reducer';
import { switchSurfaceClickedValue } from 'redux/nav-reducer';
import MainMapClasses from './MainMap.module.css';
import Baselayers from './MapElements/Baselayers/Baselayers';
import InitialZoomTool from './MapElements/InitialZoomTool/InitialZoomTool';
import MarkerClusterGroupWrapper from './MapElements/Markers/MarkerClusterGroupWrapper';
import SpatialSelection from './MapElements/SpatialSelection/SpatialSelection';

// Wrapper component to provide to the map such additional functionalities as dynamic bound adjustment, dynamic recentering, custom zooming, and reseting to the initial zoom level. Furthermore, it adds to the base map such custom elements as zoom control, initial zoom level button, baselayer switcher, drawing, and clusters of the markers

const MainMap = ({ actualWidth }) => {
  const dispatch = useDispatch();
  const mapRef = React.createRef();
  useMainMap(mapRef, actualWidth);

  return (
    <Map
      ref={mapRef}
      onClick={() => dispatch(switchSurfaceClickedValue())}
      zoom={5}
      className={MainMapClasses.container}
      zoomControl={false}
      center={[55.86852, 18.14585]}
      onZoomEnd={() => dispatch(setZoomToEntityToInitial())}>
      <ZoomControl position='bottomleft' />
      <Control position='bottomleft'>
        <InitialZoomTool />
      </Control>
      <Baselayers />
      <SpatialSelection />
      <MarkerClusterGroupWrapper />
    </Map>
  );
};

export default withReactMemo(MainMap);
