// Reducer to control part of the store related to the navigation (binary operations). It contains state and take actions as arguments to modify the state and return new state

import {
  getIsCompareHidden,
  getIsMatchingTableHidden,
} from 'selectors/simple-selectors/nav-selectors';
import { getParametersAtSwitchingAdditionalResults } from 'utils/Helpers/ReducerHelpers/NavReducer/getParametersAtSwitchingAdditionalResults';
import { handleAdditionalResultAtSwitchingAdditionalResults } from 'utils/Helpers/ReducerHelpers/NavReducer/handleAdditionalResultAtSwitchingAdditionalResults';
import { handleAdditionalResultAtSwitchingResultsView } from 'utils/Helpers/ReducerHelpers/NavReducer/handleAdditionalResultAtSwitchingResultsView';
import { setCompareReducerToInitial } from './compare-reducer';
import { setDetailsReducerToInitial } from './details-reducer';
import { setFilterReducerToInitial } from './filter-reducer';
import { setMatchingReducerToInitial } from './matching-reducer';
import { setExternEntitiesToInitial, setResultsReducerToInitial } from './results-reducer';
import { conditionallyHideSearch, setStateOfExpandedToInitial } from './table-state-reducer';

// Constants for actions names written using the rule of the redux-ducks - reducer/actions
// Switch view value (side or bottom)
const SWITCH_SIDE_VIEW = 'gazetteer-app/nav/SWITCH_SIDE_VIEW';
// Switch search value (shown or hidden)
const SWITCH_SATELLITE_BASEMAP = 'gazetteer-app/nav/SWITCH_SATELLITE_BASEMAP';
// Switch the value whether the results are shown or hidden
const SWITCH_SEARCH_IS_SHOWN = 'gazetteer-app/nav/SWITCH_SEARCH_IS_SHOWN';
// Switch the results value (enabled or disabled)
const SWITCH_RESULTS = 'gazetteer-app/nav/SWITCH_RESULTS';
// Switch the value whether the results view (in side view) should be hidden or shown
const SWITCH_RESULTS_HIDDEN = 'gazetteer-app/nav/SWITCH_RESULTS_HIDDEN';
// Switch the value whether the matchings view should be hidden or shown
const SWITCH_MATCHING_TABLE_HIDDEN = 'gazetteer-app/nav/SWITCH_MATCHING_TABLE_HIDDEN';
// Switch the value whether the compare view should be hidden or shown
const SWITCH_COMPARE_TABLE_HIDDEN = 'gazetteer-app/nav/SWITCH_COMPARE_TABLE_HIDDEN';
// Switch the value whether matchings should be in entities as attributes
const SWITCH_IS_MATCHING = 'gazetteer-app/nav/SWITCH_IS_MATCHING';
// Switch compare tool availability
const SWITCH_COMPARE_TOOL = 'gazetteer-app/nav/SWITCH_COMPARE_TOOL';
// Switch the value whether the surface of the app was clicked
const SWITCH_SURFACE_CLICKED_VALUE = 'gazetteer-app/nav/SWITCH_SURFACE_CLICKED_VALUE';
// Set view mode to initial value (side)
const SET_SWITCH_VIEW_TO_INITIAL = 'gazetteer-app/nav/SET_SWITCH_VIEW_TO_INITIAL';
// Set selected state properties to initial
const SET_NAV_PARTLY_TO_INITIAL = 'gazetteer-app/nav/SET_NAV_PARTLY_TO_INITIAL';

// State to contain data
let initialState = {
  isSideSwitched: false,
  isSatellite: false,
  isSearch: true,
  isResults: false,
  isResultsHidden: false,
  isMatchingTableHidden: true,
  isCompareHidden: true,
  isMatching: false,
  isCompareTool: false,
  isSurfaceClickedValue: false,
};

// Reducer that takes state and action to modify it
const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_SIDE_VIEW: {
      return {
        ...state,
        isSideSwitched: !state.isSideSwitched,
      };
    }
    case SWITCH_SATELLITE_BASEMAP: {
      return {
        ...state,
        isSatellite: action.value,
      };
    }
    case SWITCH_SEARCH_IS_SHOWN: {
      return {
        ...state,
        isSearch: action.value,
      };
    }
    case SWITCH_RESULTS: {
      return {
        ...state,
        isResults: action.value,
      };
    }
    case SWITCH_RESULTS_HIDDEN: {
      return {
        ...state,
        isResultsHidden: action.value,
      };
    }
    case SWITCH_MATCHING_TABLE_HIDDEN: {
      return {
        ...state,
        isMatchingTableHidden: action.value,
      };
    }
    case SWITCH_COMPARE_TABLE_HIDDEN: {
      return {
        ...state,
        isCompareHidden: action.value,
      };
    }
    case SWITCH_IS_MATCHING: {
      return {
        ...state,
        isMatching: action.value,
      };
    }
    case SWITCH_COMPARE_TOOL: {
      return {
        ...state,
        isCompareTool: action.value,
      };
    }
    case SWITCH_SURFACE_CLICKED_VALUE: {
      return {
        ...state,
        isSurfaceClickedValue: !state.isSurfaceClickedValue,
      };
    }
    case SET_SWITCH_VIEW_TO_INITIAL: {
      return {
        ...state,
        isSideSwitched: initialState.isSideSwitched,
      };
    }
    case SET_NAV_PARTLY_TO_INITIAL: {
      return {
        ...state,
        isResults: initialState.isResults,
        isCompareTool: initialState.isCompareTool,
        isMatching: initialState.isMatching,
        isSearch: initialState.isSearch,
        isCompareHidden: initialState.isCompareHidden,
        isMatchingTableHidden: initialState.isMatchingTableHidden,
      };
    }
    default:
      return state;
  }
};

// Action creators to modify the state
export const setIsMatching = value => ({
  type: SWITCH_IS_MATCHING,
  value,
});
export const switchResults = value => ({
  type: SWITCH_RESULTS,
  value,
});
export const switchView = value => ({
  type: SWITCH_SIDE_VIEW,
  value,
});
export const switchViewToInitial = () => ({
  type: SET_SWITCH_VIEW_TO_INITIAL,
});
export const setNavPartlyToInitial = () => ({
  type: SET_NAV_PARTLY_TO_INITIAL,
});
export const switchSatelliteBasemap = value => ({
  type: SWITCH_SATELLITE_BASEMAP,
  value,
});
export const switchCompareTool = value => ({
  type: SWITCH_COMPARE_TOOL,
  value,
});
export const switchMatchingHidden = value => ({
  type: SWITCH_MATCHING_TABLE_HIDDEN,
  value,
});
export const switchSearchIsShown = value => ({
  type: SWITCH_SEARCH_IS_SHOWN,
  value,
});
export const switchSurfaceClickedValue = () => ({
  type: SWITCH_SURFACE_CLICKED_VALUE,
});
export const switchResultsHidden = value => ({
  type: SWITCH_RESULTS_HIDDEN,
  value,
});
export const switchCompareHidden = value => ({
  type: SWITCH_COMPARE_TABLE_HIDDEN,
  value,
});

// Thunk creators to modify state under more complex conditions. Often contains asynchronous operations or multiple action calls

// Wrapper to do additional operations at switching the view (such as handling the visibility of matchings and compare view)
export const switchViewWrapper = value => (dispatch, getState) => {
  const isMatchingTableHidden = getIsMatchingTableHidden(getState());
  const isCompareHidden = getIsCompareHidden(getState());
  dispatch(switchView(value));
  if (value && !isMatchingTableHidden && !isCompareHidden) {
    dispatch(switchCompareHidden(true));
  }
};

// Wrapper to do additional operations at switching the visibility of the compare view (such as coniditinal hiding of the search window)
export const switchCompareHiddenWrapper = value => dispatch => {
  dispatch(switchCompareHidden(value));
  dispatch(conditionallyHideSearch());
};

// Wrapper to do additional operations at switching the visibility of the matchings view (such as coniditinal hiding of the search window)
export const switchMatchingsHiddenWrapper = value => dispatch => {
  dispatch(switchMatchingHidden(value));
  dispatch(conditionallyHideSearch());
};

// Wrapper to do additional operations at switching additional results ( in relation to each other, e.g. whether there is enough space or, if both are active, whether one of the additional results should be hidden)
export const switchAdditionalResult =
  (value, isCompare = false) =>
  (dispatch, getState) => {
    const { paramsForResultsView, paramsForAdditionalResults } =
      getParametersAtSwitchingAdditionalResults(dispatch, getState, value, isCompare);
    handleAdditionalResultAtSwitchingResultsView(paramsForResultsView);
    handleAdditionalResultAtSwitchingAdditionalResults(paramsForAdditionalResults);
  };

// Wrapper to do additional operations at closing the results view
export const closeResults = () => dispatch => {
  dispatch(switchViewToInitial());
  dispatch(removeResultsGlobally());
  dispatch(setNavPartlyToInitial());
};

// Wrapper to do reset initial values at starting new search
export const removeResultsGlobally = () => dispatch => {
  dispatch(setResultsReducerToInitial());
  dispatch(setMatchingReducerToInitial());
  dispatch(switchResults(false));
  dispatch(resetInitialData());
  dispatch(setStateOfExpandedToInitial());
  dispatch(setCompareReducerToInitial());
  dispatch(setExternEntitiesToInitial());
};

// Wrapper to reset initial values in selected reducers
export const resetInitialData = () => dispatch => {
  dispatch(setDetailsReducerToInitial());
  dispatch(setFilterReducerToInitial());
};

export default navReducer;
