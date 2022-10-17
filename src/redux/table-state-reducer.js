import { AreAllResultWidthsBiggerThatFreeSpace } from 'utils/Dimensions/AreAllResultWidthsBiggerThatFreeSpace';
import { handleDimensionsAutomatically } from 'utils/Dimensions/handleDimensionsAutomatically';
import { switchSearch } from './nav-reducer';

const SET_STATE_OF_EXPANDED_OF_A_GAZETTEER =
  'gazetteer-app/table-state/SET_STATE_OF_EXPANDED_OF_A_GAZETTEER';
const SET_STATE_OF_EXPANDED_TO_INITIAL =
  'gazetteer-app/table-state/SET_STATE_OF_EXPANDED_TO_INITIAL';
const SET_RESULTS_WIDTH = 'gazetteer-app/table-state/SET_RESULTS_WIDTH';
const SET_COMPARE_WIDTH = 'gazetteer-app/table-state/SET_COMPARE_WIDTH';
const SET_MATCHINGS_WIDTH = 'gazetteer-app/table-state/SET_MATCHINGS_WIDTH';
const SET_RESULTS_SIDE_HEIGHT = 'gazetteer-app/table-state/SET_RESULTS_SIDE_HEIGHT';
const SET_COMPARE_SIDE_HEIGHT = 'gazetteer-app/table-state/SET_COMPARE_SIDE_HEIGHT';
const SET_MATCHINGS_SIDE_HEIGHT = 'gazetteer-app/table-state/SET_MATCHINGS_SIDE_HEIGHT';
const SET_WINDOW_DIMENSIONS = 'gazetteer-app/table-state/SET_WINDOW_DIMENSIONS';
const SET_SEARCH_WIDTH = 'gazetteer-app/table-state/SET_SEARCH_WIDTH';
const SET_ALL_RESULT_WINDOW_WIDTHS_TO_INITIAL =
  'gazetteer-app/table-state/SET_ALL_RESULT_WINDOW_WIDTHS_TO_INITIAL';
const SET_ADDITIONAL_ELEMENT_ORIGINAL_HEIGHT =
  'gazetteer-app/table-state/SET_ADDITIONAL_ELEMENT_ORIGINAL_HEIGHT';

let initialState = {
  expanded: {},
  resultsWidth: 400,
  compareWidth: 400,
  matchingsWidth: 400,
  resultsSideHeight: 400,
  compareSideHeight: 300,
  matchingsSideHeight: 300,
  additionalElementsOriginalHeight: 300,
  compareToolDashboardWidth: 400,
  searchWidth: 400,
  windowDimensions: { width: 0, height: 0 },
};

const tableStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE_OF_EXPANDED_OF_A_GAZETTEER: {
      return {
        ...state,
        expanded: {
          ...state.expanded,
          [action.gazName]: action.value,
        },
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
        searchWidth: action.searchWidth,
      };
    }
    case SET_WINDOW_DIMENSIONS: {
      return {
        ...state,
        windowDimensions: action.dimensions,
      };
    }
    case SET_STATE_OF_EXPANDED_TO_INITIAL: {
      return {
        ...state,
        expanded: initialState.expanded,
      };
    }
    case SET_RESULTS_SIDE_HEIGHT: {
      return {
        ...state,
        resultsSideHeight: action.height,
      };
    }
    case SET_ADDITIONAL_ELEMENT_ORIGINAL_HEIGHT: {
      return {
        ...state,
        additionalElementsOriginalHeight: action.height,
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
    case SET_RESULTS_WIDTH: {
      return {
        ...state,
        resultsWidth: action.width,
      };
    }
    case SET_COMPARE_WIDTH: {
      return {
        ...state,
        compareWidth: action.width,
      };
    }
    case SET_MATCHINGS_WIDTH: {
      return {
        ...state,
        matchingsWidth: action.width,
      };
    }
    case SET_ALL_RESULT_WINDOW_WIDTHS_TO_INITIAL: {
      return {
        ...state,
        resultsWidth: initialState.resultsWidth,
        compareWidth: initialState.compareWidth,
        matchingsWidth: initialState.matchingsWidth,
      };
    }
    default:
      return state;
  }
};

export const setWindowDimensions = dimensions => ({
  type: SET_WINDOW_DIMENSIONS,
  dimensions,
});
export const setSearchWidth = searchWidth => ({
  type: SET_SEARCH_WIDTH,
  searchWidth,
});
export const setStateOfExpandedOfAGazetteer = (gazName, value) => ({
  type: SET_STATE_OF_EXPANDED_OF_A_GAZETTEER,
  gazName,
  value,
});
export const setStateOfExpandedToInitial = () => ({
  type: SET_STATE_OF_EXPANDED_TO_INITIAL,
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
export const setAdditionalElementOriginalHeight = height => ({
  type: SET_ADDITIONAL_ELEMENT_ORIGINAL_HEIGHT,
  height,
});
export const setAllResultWindowWidthsToInitial = () => ({
  type: SET_ALL_RESULT_WINDOW_WIDTHS_TO_INITIAL,
});

export const setAdditionalResultsSideHeights = height => (dispatch, getState) => {
  dispatch(setCompareSideHeight(height));
  dispatch(setMatchingsSideHeight(height));
  dispatch(setAdditionalElementOriginalHeight(height));
};

export const setResultsWidthWrapper = width => dispatch => {
  dispatch(setResultsWidth(width));
  dispatch(conditionallyHideSearch());
};

export const setCompareWidthWrapper = width => dispatch => {
  dispatch(setCompareWidth(width));
  dispatch(conditionallyHideSearch());
};

export const setMatchingsWidthWrapper = width => dispatch => {
  dispatch(setMatchingsWidth(width));
  dispatch(conditionallyHideSearch());
};

export const conditionallyHideSearch = () => (dispatch, getState) => {
  if (AreAllResultWidthsBiggerThatFreeSpace(getState)) {
    dispatch(switchSearch(false));
  }
};

export const setSearchGlobalWidth = searchWidth => (dispatch, getState) => {
  handleDimensionsAutomatically(dispatch, getState);
  dispatch(setSearchWidth(searchWidth));
};

export default tableStateReducer;
