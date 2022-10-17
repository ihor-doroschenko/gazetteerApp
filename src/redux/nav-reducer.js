import {
  getIsCompareHidden,
  getIsMatchingTableHidden,
} from 'selectors/simple-selectors/nav-selectors';
import { AreAdditionalResultsTablesNotHidden } from 'utils/Helpers/ReducerHelpers/NavReducer/AreAdditionalResultsTablesNotHidden';
import { handleAdditionalResultSwitcher } from 'utils/Helpers/ReducerHelpers/NavReducer/handleAdditionalResultSwitcher';
import { setCompareReducerToInitial } from './compare-reducer';
import { setDetailsReducerToInitial } from './details-reducer';
import { setFilterReducerToInitial } from './filter-reducer';
import { setMatchingReducerToInitial } from './matching-reducer';
import { setResultsReducerToInitial, setSeparateEntriesToInitial } from './results-reducer';
import { conditionallyHideSearch, setStateOfExpandedToInitial } from './table-state-reducer';

const SWITCH_IS_SIDE_SWITCHED = 'gazetteer-app/nav/SWITCH_IS_SIDE_SWITCHED';
const SWITCH_SEARCH = 'gazetteer-app/nav/SWITCH_SEARCH';
const SWITCH_RESULTS = 'gazetteer-app/nav/SWITCH_RESULTS';
const SWITCH_SATELLITE = 'gazetteer-app/nav/SWITCH_SATELLITE';
const SWITCH_RESULTS_HIDDEN = 'gazetteer-app/nav/SWITCH_RESULTS_HIDDEN';
const SWITCH_COMPARE_TOOL = 'gazetteer-app/nav/SWITCH_COMPARE_TOOL';
const SET_IS_MATCHING = 'gazetteer-app/nav/SET_IS_MATCHING';
const SWITCH_MATCHING_TABLE_HIDDEN = 'gazetteer-app/nav/SWITCH_MATCHING_TABLE_HIDDEN';
const SWITCH_COMPARE_TABLE_HIDDEN = 'gazetteer-app/nav/SWITCH_COMPARE_TABLE_HIDDEN';
const SWITCH_GOV_PART_OF_IMAGE = 'gazetteer-app/nav/SWITCH_GOV_PART_OF_IMAGE';
const SET_SWITCH_VIEW_TO_INITIAL = 'gazetteer-app/nav/SET_SWITCH_VIEW_TO_INITIAL';
const SET_NAV_PARTLY_TO_INITIAL = 'gazetteer-app/nav/SET_NAV_PARTLY_TO_INITIAL';
const SET_SURFACE_CLICKED_VALUE = 'gazetteer-app/nav/SET_SURFACE_CLICKED_VALUE';

let initialState = {
  isSurfaceClickedValue: false,
  isSideSwitched: false,
  isSatellite: false,
  isSearch: true,
  isResults: false,
  isMatching: false,
  isCompareTool: false,
  isResultsHidden: false,
  isMatchingTableHidden: true,
  isCompareHidden: true,
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_MATCHING: {
      return {
        ...state,
        isMatching: action.value,
      };
    }
    case SWITCH_IS_SIDE_SWITCHED: {
      return {
        ...state,
        isSideSwitched: !state.isSideSwitched,
      };
    }
    case SWITCH_SEARCH: {
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
    case SWITCH_SATELLITE: {
      return {
        ...state,
        isSatellite: action.value,
      };
    }
    case SWITCH_RESULTS_HIDDEN: {
      return {
        ...state,
        isResultsHidden: action.value,
      };
    }
    case SWITCH_COMPARE_TOOL: {
      return {
        ...state,
        isCompareTool: action.value,
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
    case SWITCH_GOV_PART_OF_IMAGE: {
      return {
        ...state,
        isGOVPartOfImage: !state.isGOVPartOfImage,
      };
    }
    case SET_SURFACE_CLICKED_VALUE: {
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

export const setIsMatching = value => ({
  type: SET_IS_MATCHING,
  value,
});
export const switchResults = value => ({
  type: SWITCH_RESULTS,
  value,
});
export const switchIsSideSwitched = value => ({
  type: SWITCH_IS_SIDE_SWITCHED,
  value,
});
export const switchViewToInitial = () => ({
  type: SET_SWITCH_VIEW_TO_INITIAL,
});
export const setNavPartlyToInitial = () => ({
  type: SET_NAV_PARTLY_TO_INITIAL,
});
export const switchSatellite = value => ({
  type: SWITCH_SATELLITE,
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
export const switchSearch = value => ({
  type: SWITCH_SEARCH,
  value,
});
export const switchGOVPartOfImage = () => ({
  type: SWITCH_GOV_PART_OF_IMAGE,
});
export const setSurfaceClickedValue = () => ({
  type: SET_SURFACE_CLICKED_VALUE,
});
export const switchResultsHidden = value => ({
  type: SWITCH_RESULTS_HIDDEN,
  value,
});
export const switchCompareHidden = value => ({
  type: SWITCH_COMPARE_TABLE_HIDDEN,
  value,
});

export const switchView = value => (dispatch, getState) => {
  dispatch(switchIsSideSwitched(value));
  if (value && AreAdditionalResultsTablesNotHidden(getState)) {
    dispatch(switchCompareHidden(true));
  }
};

export const switchCompareHiddenWrapper = value => dispatch => {
  dispatch(switchCompareHidden(value));
  dispatch(conditionallyHideSearch());
};

export const switchMatchingsHiddenWrapper = value => dispatch => {
  dispatch(switchMatchingHidden(value));
  dispatch(conditionallyHideSearch());
};

export const switchMatchingTable = value => (dispatch, getState) => {
  const isCompareHidden = getIsCompareHidden(getState());
  const params = {
    dispatch,
    getState,
    value,
    isHidden: isCompareHidden,
    switchAnotherAdditionalResult: switchCompareHiddenWrapper,
    switchThisAdditionalResult: switchMatchingsHiddenWrapper,
  };
  handleAdditionalResultSwitcher(params);
};
export const switchCompareTable = value => (dispatch, getState) => {
  const isMatchingHidden = getIsMatchingTableHidden(getState());
  const params = {
    dispatch,
    getState,
    value,
    isHidden: isMatchingHidden,
    switchAnotherAdditionalResult: switchMatchingsHiddenWrapper,
    switchThisAdditionalResult: switchCompareHiddenWrapper,
  };
  handleAdditionalResultSwitcher(params);
};
export const closeResults = () => dispatch => {
  dispatch(switchViewToInitial());
  dispatch(removeResultsGlobally());
  dispatch(setNavPartlyToInitial());
};
export const removeResultsGlobally = () => dispatch => {
  dispatch(setResultsReducerToInitial());
  dispatch(setMatchingReducerToInitial());
  dispatch(switchResults(false));
  dispatch(resetInitialData());
  dispatch(setStateOfExpandedToInitial());
  dispatch(setCompareReducerToInitial());
};
export const resetInitialData = () => dispatch => {
  dispatch(setDetailsReducerToInitial());
  dispatch(setFilterReducerToInitial());
  dispatch(setSeparateEntriesToInitial());
};
export default navReducer;
