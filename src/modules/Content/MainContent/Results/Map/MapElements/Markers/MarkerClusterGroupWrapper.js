import React, { useEffect, useState } from 'react';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { useSelector } from 'react-redux';
import { getMouseOverElementInfinite } from 'selectors/simple-selectors/map-interaction-selectors';
import { getCluster } from 'utils/Helpers/MapHelpers/Clusters/getCluster';
import MarkersWrapper from './MarkersElements/MarkersWrapper';

const MarkerClusterGroupWrapper = props => {
  const [key, setKey] = useState('key');
  const mouseOverElementInfinite = useSelector(getMouseOverElementInfinite);
  useEffect(() => {
    setKey(`key-${mouseOverElementInfinite.id}`);
  }, [mouseOverElementInfinite.id]);
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
