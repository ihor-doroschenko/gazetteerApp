// Find marker in cluster to make animated interaction between table and map possible (in this case direction of the intercation is from the table to the map)

import { areIdAndGazNameEqual } from 'utils/EqualComparing/areIdAndGazNameEqual';

export const findMarkerInCluster = (markers, mouseOverElementInfinite) => {
  const layersProps = markers.map(el => el.options.children._owner.pendingProps);
  const { gazName, id } = mouseOverElementInfinite;
  return layersProps.some(el => areIdAndGazNameEqual(id, gazName, el));
};
