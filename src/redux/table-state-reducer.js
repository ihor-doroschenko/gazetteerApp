// Reducer to control part of the store related to the dimensions and state of the tables and windows in the app. It contains state and take actions as arguments to modify the state and return new state

import {
  defaultAdditionalResultHeight,
  defaultElementWidth,
  defaultResultsBottomHeight,
  defaultResultsSideHeight,
} from 'constants/numericConstants';
import { getWindowDimensions } from 'selectors/simple-selectors/table-state-selectors';
import { areAllResultWidthsBiggerThatFreeSpace } from 'utils/Dimensions/areAllResultWidthsBiggerThatFreeSpace';
import { handleDimensionsAutomatically } from 'utils/Dimensions/handleDimensionsAutomatically';
import { switchSearchIsShown } from './nav-reducer';

// TODO: side view, bottom view, but not results or compare view - results and compare table!
// TODO: search area better than search block or search window
// Constants for actions names written using the rule of the redux-ducks - reducer/actions
// Set state of whether the subtable of respective gazetteer is collapsed or expanded
const SET_STATE_OF_EXPANDED_OF_A_GAZETTEER =
  'gazetteer-app/table-state/SET_STATE_OF_EXPANDED_OF_A_GAZETTEER';
// Set states of whether the subtables are collapsed or expanded to initial
const SET_STATE_OF_EXPANDED_TO_INITIAL =
  'gazetteer-app/table-state/SET_STATE_OF_EXPANDED_TO_INITIAL';
// Set current app dimensions (depending on the screen resolution)
const SET_WINDOW_DIMENSIONS = 'gazetteer-app/table-state/SET_WINDOW_DIMENSIONS';
// Set current width for the search area
const SET_SEARCH_WIDTH = 'gazetteer-app/table-state/SET_SEARCH_WIDTH';
// Set current width for the results table in side view
const SET_RESULTS_WIDTH = 'gazetteer-app/table-state/SET_RESULTS_WIDTH';
// Set current width for the compare table in side view
const SET_COMPARE_WIDTH = 'gazetteer-app/table-state/SET_COMPARE_WIDTH';
// Set current width for the matchings table in side view
const SET_MATCHINGS_WIDTH = 'gazetteer-app/table-state/SET_MATCHINGS_WIDTH';
// Set additional result (compare and/or matchings tables) width in bottom view
const SET_ADDITIONAL_RESULTS_BOTTOM_WIDTH =
  'gazetteer-app/table-state/SET_ADDITIONAL_RESULTS_BOTTOM_WIDTH';
// Set current height for the results table in side view
const SET_RESULTS_SIDE_HEIGHT = 'gazetteer-app/table-state/SET_RESULTS_SIDE_HEIGHT';
// Set current height for the compare table in side view
const SET_COMPARE_SIDE_HEIGHT = 'gazetteer-app/table-state/SET_COMPARE_SIDE_HEIGHT';
// Set current height for the matchings table in side view
const SET_MATCHINGS_SIDE_HEIGHT = 'gazetteer-app/table-state/SET_MATCHINGS_SIDE_HEIGHT';
// Set current height for the results table in bottom view
const SET_RESULTS_BOTTOM_HEIGHT = 'gazetteer-app/table-state/SET_RESULTS_BOTTOM_HEIGHT';
// Set minimal height for the results table in bottom view
const SET_RESULTS_BOTTOM_MIN_HEIGHT = 'gazetteer-app/table-state/SET_RESULTS_BOTTOM_MIN_HEIGHT';
// Set maximal height for the results table in bottom view
const SET_RESULTS_BOTTOM_MAX_HEIGHT = 'gazetteer-app/table-state/SET_RESULTS_BOTTOM_MAX_HEIGHT';
// Set all result window widths for side view to initial
const SET_ALL_RESULT_WINDOW_WIDTHS_TO_INITIAL =
  'gazetteer-app/table-state/SET_ALL_RESULT_WINDOW_WIDTHS_TO_INITIAL';

// State to contain data
let initialState = {
  expanded: {},
  windowDimensions: { width: 0, height: 0 },
  searchWidth: defaultElementWidth,
  resultsSideWidth: defaultElementWidth,
  compareSideWidth: defaultElementWidth,
  matchingsSideWidth: defaultElementWidth,
  additionalResultsBottomWidth: defaultElementWidth,
  resultsSideHeight: defaultResultsSideHeight,
  compareSideHeight: defaultAdditionalResultHeight,
  matchingsSideHeight: defaultAdditionalResultHeight,
  resultsBottomHeight: defaultResultsBottomHeight,
  resultsBottomMinHeight: defaultResultsBottomHeight,
  resultsBottomMaxHeight: defaultResultsBottomHeight * 2,
};

// Reducer that takes state and action to modify it
const tableStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE_OF_EXPANDED_OF_A_GAZETTEER: {
      const { gazName, value } = action;
      return {
        ...state,
        expanded: {
          ...state.expanded,
          [gazName]: value,
        },
      };
    }
    case SET_STATE_OF_EXPANDED_TO_INITIAL: {
      return {
        ...state,
        expanded: initialState.expanded,
      };
    }
    case SET_WINDOW_DIMENSIONS: {
      return {
        ...state,
        windowDimensions: action.dimensions,
      };
    }
    case SET_SEARCH_WIDTH: {
      return {
        ...state,
        searchWidth: action.width,
      };
    }
    case SET_RESULTS_WIDTH: {
      return {
        ...state,
        resultsSideWidth: action.width,
      };
    }
    case SET_COMPARE_WIDTH: {
      return {
        ...state,
        compareSideWidth: action.width,
      };
    }
    case SET_MATCHINGS_WIDTH: {
      return {
        ...state,
        matchingsSideWidth: action.width,
      };
    }
    case SET_ADDITIONAL_RESULTS_BOTTOM_WIDTH: {
      return {
        ...state,
        additionalResultsBottomWidth: action.width,
      };
    }
    case SET_RESULTS_SIDE_HEIGHT: {
      return {
        ...state,
        resultsSideHeight: action.height,
      };
    }
    case SET_COMPARE_SIDE_HEIGHT: {
      return {
        ...state,
        compareSideHeight: action.height,
      };
    }
    case SET_MATCHINGS_SIDE_HEIGHT: {
      return {
        ...state,
        matchingsSideHeight: action.height,
      };
    }
    case SET_RESULTS_BOTTOM_HEIGHT:
      return {
        ...state,
        resultsBottomHeight: action.value,
      };
    case SET_RESULTS_BOTTOM_MIN_HEIGHT: {
      return {
        ...state,
        resultsBottomMinHeight: action.value,
      };
    }
    case SET_RESULTS_BOTTOM_MAX_HEIGHT: {
      return {
        ...state,
        resultsBottomMaxHeight: action.value,
      };
    }
    case SET_ALL_RESULT_WINDOW_WIDTHS_TO_INITIAL: {
      return {
        ...state,
        resultsSideWidth: initialState.resultsSideWidth,
        compareSideWidth: initialState.compareSideWidth,
        matchingsSideWidth: initialState.matchingsSideWidth,
      };
    }
    default:
      return state;
  }
};

// Action creators to modify the state
export const setStateOfExpandedOfAGazetteer = (gazName, value) => ({
  type: SET_STATE_OF_EXPANDED_OF_A_GAZETTEER,
  gazName,
  value,
});
export const setStateOfExpandedToInitial = () => ({
  type: SET_STATE_OF_EXPANDED_TO_INITIAL,
});
export const setWindowDimensions = dimensions => ({
  type: SET_WINDOW_DIMENSIONS,
  dimensions,
});
export const setSearchWidth = width => ({
  type: SET_SEARCH_WIDTH,
  width,
});
export const setResultsWidth = width => ({
  type: SET_RESULTS_WIDTH,
  width,
});
export const setCompareWidth = width => ({
  type: SET_COMPARE_WIDTH,
  width,
});
export const setMatchingsWidth = width => ({
  type: SET_MATCHINGS_WIDTH,
  width,
});
export const setAdditionalResultsBottomWidth = width => ({
  type: SET_ADDITIONAL_RESULTS_BOTTOM_WIDTH,
  width,
});
export const setResultsSideHeight = height => ({
  type: SET_RESULTS_SIDE_HEIGHT,
  height,
});
export const setCompareSideHeight = height => ({
  type: SET_COMPARE_SIDE_HEIGHT,
  height,
});
export const setMatchingsSideHeight = height => ({
  type: SET_MATCHINGS_SIDE_HEIGHT,
  height,
});
export const setResultsBottomHeight = value => ({
  type: SET_RESULTS_BOTTOM_HEIGHT,
  value,
});
export const setResultsBottomMinHeight = value => ({
  type: SET_RESULTS_BOTTOM_MIN_HEIGHT,
  value,
});
export const setResultsBottomMaxHeight = value => ({
  type: SET_RESULTS_BOTTOM_MAX_HEIGHT,
  value,
});
export const setAllResultWindowWidthsToInitial = () => ({
  type: SET_ALL_RESULT_WINDOW_WIDTHS_TO_INITIAL,
});

// Thunk creators to modify state under more complex conditions. Often contains asynchronous operations or multiple action calls

// Set height for additional result tables (matchings and/or compare) only one time as the height for the results table is set to make all tables having the same height
export const setAdditionalResultsSideHeights = height => dispatch => {
  dispatch(setCompareSideHeight(height));
  dispatch(setMatchingsSideHeight(height));
};

// Set width for the results table and conditionally hide search area
export const setResultsWidthWrapper = width => dispatch => {
  dispatch(setResultsWidth(width));
  dispatch(conditionallyHideSearch());
};

// Set width for the compare table and conditionally hide search area
export const setCompareWidthWrapper = width => dispatch => {
  dispatch(setCompareWidth(width));
  dispatch(conditionallyHideSearch());
};

// Set width for the matchings table and conditionally hide search area
export const setMatchingsWidthWrapper = width => dispatch => {
  dispatch(setMatchingsWidth(width));
  dispatch(conditionallyHideSearch());
};

// Hide search area if three results tables - results, matchings, and compare - are opened and shown and the place they take is bigger than place remained for the search area
export const conditionallyHideSearch = () => (dispatch, getState) => {
  if (areAllResultWidthsBiggerThatFreeSpace(getState)) {
    dispatch(switchSearchIsShown(false));
  }
};

// Set search width and handle dimensions of other elements
export const setSearchGlobalWidth = searchWidth => (dispatch, getState) => {
  handleDimensionsAutomatically(dispatch, getState);
  dispatch(setSearchWidth(searchWidth));
};

// Reset height values for results table in bottom view
export const setBottomContainerHeight = () => (dispatch, getState) => {
  const { height } = getWindowDimensions(getState());
  const minHeight = height / 3;
  const maxHeight = height / 2;
  dispatch(setResultsBottomMaxHeight(maxHeight));
  dispatch(setResultsBottomMinHeight(minHeight));
  dispatch(setResultsBottomHeight(minHeight));
};

export default tableStateReducer;
