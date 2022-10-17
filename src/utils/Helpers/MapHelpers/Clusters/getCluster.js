import classNames from 'classnames';
import { divIcon, point } from 'leaflet';
import ClustersClasses from './Clusters.module.css';
import { findMarkerInCluster } from './findMarkerInCluster';

export const getCluster = (cluster, mouseOverElementInfinite) => {
  const actual = cluster.getChildCount();
  const value = findMarkerInCluster(cluster.getAllChildMarkers(), mouseOverElementInfinite);
  return divIcon({
    className: classNames(ClustersClasses.cluster, {
      [ClustersClasses.cluster50]: 50 < actual && actual < 100,
      [ClustersClasses.cluster100]: 100 < actual,
      [ClustersClasses.mousedCluster]: value,
    }),
    html: `<div><p>${cluster.getChildCount()}</p></div>`,
    iconSize: point(40, 40, true),
  });
};
