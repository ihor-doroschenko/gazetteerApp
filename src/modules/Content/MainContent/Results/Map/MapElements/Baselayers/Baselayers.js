import React from 'react';
import { LayersControl, TileLayer } from 'react-leaflet';

const Baselayers = () => {
  return (
    <LayersControl position='bottomleft'>
      <LayersControl.BaseLayer checked name='OSM standard view'>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name='Grayscale CartoDB.Positron view'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name='Satellite view'>
        <TileLayer
          attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        />
      </LayersControl.BaseLayer>
    </LayersControl>
  );
};

export default Baselayers;
