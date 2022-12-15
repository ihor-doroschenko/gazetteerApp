// Container to functionality "fly to bounds" of the leaflet library

export const setFitBounds = (mapInst, bounds, paddingTopLeft, paddingBottomRight) => {
  if (bounds.length !== 0) {
    mapInst &&
      mapInst.flyToBounds(bounds, {
        paddingTopLeft,
        paddingBottomRight,
        duration: 1,
        easeLinearity: 0.1,
      });
  }
};
