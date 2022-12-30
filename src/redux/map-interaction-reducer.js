// Reducer to control part of the store related to the map and interaction with the map. It contains state and take actions as arguments to modify the state and return new state

import { getInitialZoom } from 'selectors/simple-selectors/map-interaction-selectors';
import { getIsResultsHidden } from 'selectors/simple-selectors/nav-selectors';
import { getTableStateExpanded } from 'selectors/simple-selectors/table-state-selectors';
import { validateLocations } from 'utils/validators/PropertyValidators/validateLocations';
import { setDetailsStatusesOfGazetteerToPassive } from './details-reducer';
import { switchResultsHidden } from './nav-reducer';
import { setStateOfExpandedOfAGazetteer } from './table-state-reducer';

// Constants for actions names written using the rule of the redux-ducks - reducer/actions
// Set parameters for zooming to the entity on the map
const SET_ZOOM_TO_ENTITY = 'gazetteer-app/map-interaction/SET_ZOOM_TO_ENTITY';
// Set parameters for zooming to the entity on the map to initial
const SET_ZOOM_TO_ENTITY_TO_INITIAL = 'gazetteer-app/map-interaction/SET_ZOOM_TO_ENTITY_TO_INITIAL';
// Set initial zoom level for the map
const SET_INITIAL_ZOOM_LEVEL = 'gazetteer-app/map-interaction/SET_INITIAL_ZOOM_LEVEL';
// Set id and gazetteer name of the marker of the entity being clicked on the map
const MOUSE_CLICK_MARKER = 'gazetteer-app/map-interaction/MOUSE_CLICK_MARKER';
// Set id and gazetteer name of the marker of the entity being clicked on the map to empty
const MOUSE_CLICK_MARKER_TO_INITIAL = 'gazetteer-app/map-interaction/MOUSE_CLICK_MARKER_TO_INITIAL';
// Set id and gazetteer name of the entity being moved by the mouse in the table
const MOUSE_OVER_MARKER_INFINITE = 'gazetteer-app/map-interaction/MOUSE_OVER_MARKER_INFINITE';
// Set id and gazetteer name of the entity being moved by the mouse in the table to empty
const MOUSE_OUT_MARKER_INFINITE = 'gazetteer-app/map-interaction/MOUSE_OUT_MARKER_INFINITE';
// Set id and gazetteer name of the entity being moved by the mouse on the map
const MOUSE_OVER_MARKER = 'gazetteer-app/map-interaction/MOUSE_OVER_MARKER';
// Set id and gazetteer name of the entity being moved by the mouse on the map to empty
const MOUSE_OUT_MARKER = 'gazetteer-app/map-interaction/MOUSE_OUT_MARKER';

let initialState = {
  zoomTo: { id: '', gazName: '', position: [] },
  initialZoomValue: false,
  mouseClickedElement: {},
  mouseOverElementInfinite: {},
  mouseOverElement: {},
};

// Reducer that takes state and action to modify it
const mapInteractionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ZOOM_TO_ENTITY:
      const { id, gazName, position } = action;
      return {
        ...state,
        zoomTo: { id, gazName, position },
      };
    case SET_ZOOM_TO_ENTITY_TO_INITIAL:
      return {
        ...state,
        zoomTo: initialState.zoomTo,
      };
    case SET_INITIAL_ZOOM_LEVEL:
      return {
        ...state,
        initialZoomValue: action.value,
      };
    case MOUSE_CLICK_MARKER:
      return {
        ...state,
        mouseClickedElement: action.element,
      };
    case MOUSE_CLICK_MARKER_TO_INITIAL:
      return {
        ...state,
        mouseClickedElement: initialState.mouseClickedElement,
      };
    case MOUSE_OVER_MARKER_INFINITE:
      return {
        ...state,
        mouseOverElementInfinite: action.element,
      };
    case MOUSE_OUT_MARKER_INFINITE:
      return {
        ...state,
        mouseOverElementInfinite: initialState.mouseOverElementInfinite,
      };
    case MOUSE_OVER_MARKER:
      return {
        ...state,
        mouseOverElement: action.element,
      };
    case MOUSE_OUT_MARKER:
      return {
        ...state,
        mouseOverElement: initialState.mouseOverElement,
      };
    default:
      return state;
  }
};

// Action creators to modify the state
const setZoomToEntity = (id, gazName, position) => ({
  type: SET_ZOOM_TO_ENTITY,
  id,
  gazName,
  position,
});
export const setZoomToEntityToInitial = () => ({
  type: SET_ZOOM_TO_ENTITY_TO_INITIAL,
});
export const setInitialZoomLevel = value => ({
  type: SET_INITIAL_ZOOM_LEVEL,
  value,
});
export const mouseClickMarker = element => ({
  type: MOUSE_CLICK_MARKER,
  element,
});
export const mouseClickMarkerToInitial = () => ({
  type: MOUSE_CLICK_MARKER_TO_INITIAL,
});
export const mouseOverMarkerInfinite = element => ({
  type: MOUSE_OVER_MARKER_INFINITE,
  element,
});
export const mouseOutMarkerInfinite = () => ({
  type: MOUSE_OUT_MARKER_INFINITE,
});
export const mouseOverMarker = element => ({
  type: MOUSE_OVER_MARKER,
  element,
});
export const mouseOutMarker = () => ({
  type: MOUSE_OUT_MARKER,
});

// Thunk creators to modify state under more complex conditions. Often contains asynchronous operations or multiple action calls

// Changes current value whether the map has initial zoom level to update map state and to get back to initial zoom level on demand
export const setInitialZoomContainer = () => (dispatch, getState) => {
  const initialZoomValue = getInitialZoom(getState());
  dispatch(setInitialZoomLevel(!initialZoomValue));
};

// Validate location of the entity and, if it is valid, zoom to this entity on the map
export const handleZoomToEntity = (element, gazName) => dispatch => {
  if (validateLocations(element)) {
    dispatch(setZoomToEntity(element.id, gazName, element.position));
  }
};

// Handle mouse click on the marker on the map: check if the results table is hidden - if yes, show it; hide opened detail views; check, if current gazetteer subtable is expanded - if no, expand the subtable
export const handleMouseClick = element => (dispatch, getState) => {
  const { gazName } = element;
  const isResultsHidden = getIsResultsHidden(getState());
  if (isResultsHidden) {
    dispatch(switchResultsHidden(false));
  }
  dispatch(setDetailsStatusesOfGazetteerToPassive(gazName));
  const tableStateExpanded = getTableStateExpanded(getState());
  if (tableStateExpanded[gazName] === false) {
    dispatch(setStateOfExpandedOfAGazetteer(gazName, true));
  }
  dispatch(mouseClickMarker(element));
};

export default mapInteractionReducer;
