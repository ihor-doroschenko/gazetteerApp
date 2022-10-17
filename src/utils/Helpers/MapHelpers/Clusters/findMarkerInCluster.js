export const findMarkerInCluster = (markers, mouseOverElementInfinite) => {
  const layersProps = markers.map(el => el.options.children._owner.pendingProps);
  const { gazName, id } = mouseOverElementInfinite;
  return layersProps.some(el => el.gazName === gazName && el.id === id);
};
