// Reducer to control part of the store related to the matchings. It contains state and take actions as arguments to modify the state and return new state

import { getMatchingsEntities } from 'selectors/simple-selectors/matching-selectors';
import { getStartEntities, getStatus } from 'selectors/simple-selectors/results-selectors';
import { setValuesForTypeFilter } from 'utils/Filtering/TypeFilter/setValuesForTypeFilter';
import { validateStatus } from 'utils/validators/PropertyValidators/validateStatus';
import { setTypes } from './filter-reducer';
import { resetInitialData, setIsMatching, switchAdditionalResult } from './nav-reducer';

// Constants for actions names written using the rule of the redux-ducks - reducer/actions
// Set value whether only results with matchings should be shown
const SET_ONLY_MATCHED_RESULTS = 'gazetteer-app/matching/SET_ONLY_MATCHED_RESULTS';
// Set storage for all matchings
const SET_MATCHINGS = 'gazetteer-app/matching/SET_MATCHINGS';
// Clear storage for all matchings
const SET_MATCHINGS_TO_INITIAL = 'gazetteer-app/matching/SET_MATCHINGS_TO_INITIAL';
// Set matchings that are corresponding to actual filter requirements
const SET_FILTERED_MATCHINGS = 'gazetteer-app/matching/SET_FILTERED_MATCHINGS';
// Set storage for gazetteer names of the matchings
const SET_MATCHING_DBS = 'gazetteer-app/matching/SET_MATCHING_DBS';
// Set gazetteer name of the matchings currently selected in the filter
const SET_CURRENT_GAZETTEER = 'gazetteer-app/matching/SET_CURRENT_GAZETTEER';
// Set gazetteer source name of the entities to which there are matchings currently selected in the filter
const SET_CURRENT_SOURCE_GAZETTEER = 'gazetteer-app/matching/SET_CURRENT_SOURCE_GAZETTEER';
// Set this part of the store that controlls this reducer to initial values
const SET_MATCHING_REDUCER_TO_INITIAL = 'gazetteer-app/matching/SET_MATCHING_REDUCER_TO_INITIAL';

// State to contain data
let initialState = {
  onlyMatchedResults: false,
  matchings: [],
  filteredMatching: {},
  matchingDBs: new Set(),
  currentGazetteer: 'all',
  currentSourceGazetteer: 'all',
};

const matchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ONLY_MATCHED_RESULTS: {
      return {
        ...state,
        onlyMatchedResults: action.value,
      };
    }
    case SET_MATCHINGS: {
      return {
        ...state,
        matchings: {
          ...state.matchings,
          [action.gazName]: action.matchings,
        },
      };
    }
    case SET_MATCHINGS_TO_INITIAL: {
      return {
        ...state,
        matchings: initialState.matchings,
      };
    }
    case SET_FILTERED_MATCHINGS: {
      return {
        ...state,
        filteredMatching: action.filteredMatching,
      };
    }
    case SET_MATCHING_DBS: {
      return {
        ...state,
        matchingDBs: new Set([...state.matchingDBs, ...action.matchingDBs]),
      };
    }
    case SET_CURRENT_GAZETTEER: {
      return {
        ...state,
        currentGazetteer: action.value,
      };
    }
    case SET_CURRENT_SOURCE_GAZETTEER: {
      return {
        ...state,
        currentSourceGazetteer: action.value,
      };
    }
    case SET_MATCHING_REDUCER_TO_INITIAL: {
      return initialState;
    }
    default:
      return state;
  }
};

// Action creators to modify the state
export const setOnlyMatchedResults = value => ({
  type: SET_ONLY_MATCHED_RESULTS,
  value,
});
export const setMatchings = (matchings, gazName) => ({
  type: SET_MATCHINGS,
  matchings,
  gazName,
});
export const setMatchingsToInitial = () => ({
  type: SET_MATCHINGS_TO_INITIAL,
});
export const setFilteredMatchings = filteredMatching => ({
  type: SET_FILTERED_MATCHINGS,
  filteredMatching,
});
export const setMatchingDBs = (matchingDBs, gazName) => ({
  type: SET_MATCHING_DBS,
  matchingDBs,
  gazName,
});
export const setCurrentGazetteer = value => ({
  type: SET_CURRENT_GAZETTEER,
  value,
});
export const setCurrentSourceGazetteer = value => ({
  type: SET_CURRENT_SOURCE_GAZETTEER,
  value,
});
export const setMatchingReducerToInitial = () => ({
  type: SET_MATCHING_REDUCER_TO_INITIAL,
});

const setFilterTypes = getSelector => (dispatch, getState) => {
  const entities = getSelector(getState());
  for (let key of Object.keys(entities)) {
    dispatch(setTypes(setValuesForTypeFilter(entities[key], key), key));
  }
};

// Thunk creators to modify state under more complex conditions. Often contains asynchronous operations or multiple action calls

// Filter results by whether the entities have mathings or not
export const filterOnlyMatchedResults = value => (dispatch, getState) => {
  const status = getStatus(getState());
  if (validateStatus(status)) {
    dispatch(resetInitialData());
    dispatch(setOnlyMatchedResults(value));
    dispatch(setFilterTypes(value ? getMatchingsEntities : getStartEntities));
  }
};

// Close matchings table
export const closeMatchingTable = () => dispatch => {
  dispatch(setMatchingReducerToInitial());
  dispatch(switchAdditionalResult(true));
  dispatch(setIsMatching(false));
};

export default matchingReducer;
