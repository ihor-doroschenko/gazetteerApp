import { getInitialZoom } from 'selectors/simple-selectors/map-interaction-selectors';
import { getIsResultsHidden } from 'selectors/simple-selectors/nav-selectors';
import { getSeparateEntries } from 'selectors/simple-selectors/results-selectors';
import {
  getTableStateExpanded,
  getWindowDimensions,
} from 'selectors/simple-selectors/table-state-selectors';
import { isEntryInSeparatedEntries } from 'utils/Finding/isEntryInSeparatedEntries';
import { validateLocations } from 'utils/validators/PropertyValidators/validateLocations';
import { setDetailsStatusToPassive } from './details-reducer';
import { switchResultsHidden } from './nav-reducer';
import { setStateOfExpandedOfAGazetteer } from './table-state-reducer';

const SET_ZOOM_TO = 'gazetteer-app/map-interaction/SET_ZOOM_TO';
const SET_INITIAL_ZOOM = 'gazetteer-app/map-interaction/SET_INITIAL_ZOOM';
const SET_ZOOM_TO_NULL = 'gazetteer-app/map-interaction/SET_ZOOM_TO_NULL';
const MOUSE_CLICK = 'gazetteer-app/map-interaction/MOUSE_CLICK';
const MOUSE_CLICK_CLEAR = 'gazetteer-app/map-interaction/MOUSE_CLICK_CLEAR';
const MOUSE_OVER_INFINITE = 'gazetteer-app/map-interaction/MOUSE_OVER_INFINITE';
const MOUSE_OVER = 'gazetteer-app/map-interaction/MOUSE_OVER';
const MOUSE_OUT = 'gazetteer-app/map-interaction/MOUSE_OUT';
const MOUSE_OUT_INFINITE = 'gazetteer-app/map-interaction/MOUSE_OUT_INFINITE';
const SET_MAP_HEIGHT = 'gazetteer-app/map-interaction/SET_MAP_HEIGHT';
const SET_BOTTOM_CONTAINER_MIN_HEIGHT =
  'gazetteer-app/map-interaction/SET_BOTTOM_CONTAINER_MIN_HEIGHT';
const SET_BOTTOM_CONTAINER_MAX_HEIGHT =
  'gazetteer-app/map-interaction/SET_BOTTOM_CONTAINER_MAX_HEIGHT';

let initialState = {
  zoomTo: [],
  initialZoomValue: false,
  actualBottomContainerHeight: 300,
  bottomContainerMinHeight: 300,
  bottomContainerMaxHeight: 600,
  mouseClickedElement: {},
  mouseOverElement: {},
  mouseOverElementInfinite: {},
};

const mapInteractionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ZOOM_TO:
      return {
        ...state,
        zoomTo: action.position,
      };
    case SET_INITIAL_ZOOM:
      return {
        ...state,
        initialZoomValue: action.value,
      };
    case SET_ZOOM_TO_NULL:
      return {
        ...state,
        zoomTo: initialState.zoomTo,
      };
    case MOUSE_CLICK:
      return {
        ...state,
        mouseClickedElement: action.element,
      };
    case MOUSE_CLICK_CLEAR:
      return {
        ...state,
        mouseClickedElement: initialState.mouseClickedElement,
      };
    case MOUSE_OVER_INFINITE:
      return {
        ...state,
        mouseOverElementInfinite: action.element,
      };
    case MOUSE_OVER:
      return {
        ...state,
        mouseOverElement: action.element,
      };
    case MOUSE_OUT:
      return {
        ...state,
        mouseOverElement: initialState.mouseOverElement,
      };
    case MOUSE_OUT_INFINITE:
      return {
        ...state,
        mouseOverElementInfinite: initialState.mouseOverElementInfinite,
      };
    case SET_MAP_HEIGHT:
      return {
        ...state,
        actualBottomContainerHeight: action.value,
      };
    case SET_BOTTOM_CONTAINER_MIN_HEIGHT: {
      return {
        ...state,
        bottomContainerMinHeight: action.value,
      };
    }
    case SET_BOTTOM_CONTAINER_MAX_HEIGHT: {
      return {
        ...state,
        bottomContainerMaxHeight: action.value,
      };
    }
    default:
      return state;
  }
};

export const setInitialZoom = value => ({
  type: SET_INITIAL_ZOOM,
  value,
});
const setZoomTo = position => ({
  type: SET_ZOOM_TO,
  position,
});
export const setZoomToNull = () => ({
  type: SET_ZOOM_TO_NULL,
});
export const mouseClick = element => ({
  type: MOUSE_CLICK,
  element,
});
export const mouseClickClear = () => ({
  type: MOUSE_CLICK_CLEAR,
});
export const setBottomContainerActualHeight = value => ({
  type: SET_MAP_HEIGHT,
  value,
});
export const setBottomContainerMinHeight = value => ({
  type: SET_BOTTOM_CONTAINER_MIN_HEIGHT,
  value,
});
export const setBottomContainerMaxHeight = value => ({
  type: SET_BOTTOM_CONTAINER_MAX_HEIGHT,
  value,
});
export const mouseOver = element => ({
  type: MOUSE_OVER,
  element,
});
export const mouseOverInfinite = element => ({
  type: MOUSE_OVER_INFINITE,
  element,
});
export const mouseOut = () => ({
  type: MOUSE_OUT,
});
export const mouseOutInfinite = () => ({
  type: MOUSE_OUT_INFINITE,
});

export const setInitialZoomContainer = () => (dispatch, getState) => {
  const initialZoomValue = getInitialZoom(getState());
  dispatch(setInitialZoom(!initialZoomValue));
};

export const setBottomContainerHeight = () => (dispatch, getState) => {
  const { height } = getWindowDimensions(getState());
  const minHeight = height / 3;
  const maxHeight = height / 2;
  dispatch(setBottomContainerMaxHeight(maxHeight));
  dispatch(setBottomContainerMinHeight(minHeight));
  dispatch(setBottomContainerActualHeight(minHeight));
};

export const handleZoomTo = element => dispatch => {
  if (validateLocations(element)) {
    dispatch(setZoomTo(element.position));
  }
};

export const handleMouseClick = element => (dispatch, getState) => {
  const isResultsHidden = getIsResultsHidden(getState());
  if (isResultsHidden) {
    dispatch(switchResultsHidden(false));
  }

  const separateEntries = getSeparateEntries(getState());
  if (!isEntryInSeparatedEntries(element, separateEntries)) {
    dispatch(setDetailsStatusToPassive(element.gazName));
    const tableStateExpanded = getTableStateExpanded(getState());
    if (tableStateExpanded[element.gazName] === false) {
      dispatch(setStateOfExpandedOfAGazetteer(element.gazName, true));
    }
  }
  dispatch(mouseClick(element));
};

export default mapInteractionReducer;
