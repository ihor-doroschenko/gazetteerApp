import classNames from 'classnames';
import { divIcon, point } from 'leaflet';
import ClustersClasses from './Clusters.module.css';
import { findMarkerInCluster } from './findMarkerInCluster';

// Generate clusters on the map (if needed) and style them depending on amount of entities and interaction status

export const getCluster = (cluster, mouseOverElementInfinite) => {
  const childCount = cluster.getChildCount();
  const childMarkers = cluster.getAllChildMarkers();
  const isMousedMarkerInCluster = findMarkerInCluster(childMarkers, mouseOverElementInfinite);
  return divIcon({
    className: classNames(ClustersClasses.cluster, {
      [ClustersClasses.cluster50]: 50 < childCount && childCount < 100,
      [ClustersClasses.cluster100]: 100 < childCount,
      [ClustersClasses.mousedCluster]: isMousedMarkerInCluster,
    }),
    html: `<div><p>${childCount}</p></div>`,
    iconSize: point(40, 40, true),
  });
};
