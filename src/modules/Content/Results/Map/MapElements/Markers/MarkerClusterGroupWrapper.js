import { useMarkerClusterKey } from 'Hooks/Map/useMarkerClusterKey';
import React from 'react';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { useSelector } from 'react-redux';
import { getMouseOverElementInfinite } from 'selectors/simple-selectors/map-interaction-selectors';
import { getCluster } from 'utils/Helpers/MapHelpers/Clusters/getCluster';
import MarkersWrapper from './MarkersElements/MarkersWrapper';

// Wrapper component to contain marker cluster group element of the react-leaflet, to form clusters and to assign them styles as well as other properties, and to provide unique key for each rendering of this group

const MarkerClusterGroupWrapper = props => {
  const key = useMarkerClusterKey();
  const mouseOverElementInfinite = useSelector(getMouseOverElementInfinite);
  return (
    <MarkerClusterGroup
      key={key}
      animate={true}
      polygonOptions={{ color: 'rgb(158,202,225)' }}
      iconCreateFunction={cluster => getCluster(cluster, mouseOverElementInfinite)}
      maxClusterRadius={50}>
      <MarkersWrapper />
    </MarkerClusterGroup>
  );
};

export default MarkerClusterGroupWrapper;
