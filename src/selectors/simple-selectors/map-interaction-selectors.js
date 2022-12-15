// Selector to get initial zoom level for the map
export const getInitialZoom = state => {
  return state.mapInteraction.initialZoomValue;
};

// Selector to get coordinates of an entity which was zoomed on the map to
export const getZoomTo = state => {
  return state.mapInteraction.zoomTo;
};

// Selector to get entity id and gazName of entity whose marker was clicked on the map
export const getMouseClickedElement = state => {
  return state.mapInteraction.mouseClickedElement;
};

// Selector to get entity id and gazName of entity when the mouse pointer is moved onto his marker on the map
export const getMouseOverElement = state => {
  return state.mapInteraction.mouseOverElement;
};

// Selector to get entity id and gazName of entity when the mouse pointer is moved onto it in the results table
export const getMouseOverElementInfinite = state => {
  return state.mapInteraction.mouseOverElementInfinite;
};
