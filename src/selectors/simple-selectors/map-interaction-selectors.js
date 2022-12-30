// Selector to get coordinates of an entity which was zoomed on the map to
export const getZoomTo = state => state.mapInteraction.zoomTo;

// Selector to get initial zoom level for the map
export const getInitialZoom = state => state.mapInteraction.initialZoomValue;

// Selector to get entity id and gazName of entity whose marker was clicked on the map
export const getMouseClickedElement = state => state.mapInteraction.mouseClickedElement;

// Selector to get entity id and gazName of entity when the mouse pointer is moved onto it in the results table
export const getMouseOverElementInfinite = state => state.mapInteraction.mouseOverElementInfinite;

// Selector to get entity id and gazName of entity when the mouse pointer is moved onto his marker on the map
export const getMouseOverElement = state => state.mapInteraction.mouseOverElement;
