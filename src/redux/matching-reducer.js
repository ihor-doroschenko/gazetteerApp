import { getMatchingsEntities } from 'selectors/simple-selectors/matching-selectors';
import { getStartEntries, getStatus } from 'selectors/simple-selectors/results-selectors';
import { setValuesForTypeFilter } from 'utils/Filtering/TypeFilter/setValuesForTypeFilter';
import { validateStatus } from 'utils/validators/PropertyValidators/validateStatus';
import { setTypes } from './filter-reducer';
import { resetInitialData, setIsMatching, switchMatchingTable } from './nav-reducer';

const CHANGE_IS_MATCHED = 'gazetteer-app/matching/CHANGE_IS_MATCHED';
const SET_MATCHINGS = 'gazetteer-app/matching/SET_MATCHINGS';
const SET_MATCHINGS_TO_INITIAL = 'gazetteer-app/matching/SET_MATCHINGS_TO_INITIAL';
const SET_MATCHING_REDUCER_TO_INITIAL = 'gazetteer-app/matching/SET_MATCHING_REDUCER_TO_INITIAL';
const SET_MATCHING_DBS = 'gazetteer-app/matching/SET_MATCHING_DBS';
const SET_FILTERED_MATCHINGS = 'gazetteer-app/matching/SET_FILTERED_MATCHINGS';
const SET_CURRENT_GAZETTEER = 'gazetteer-app/matching/SET_CURRENT_GAZETTEER';
const SET_CURRENT_SOURCE_GAZETTEER = 'gazetteer-app/matching/SET_CURRENT_SOURCE_GAZETTEER';

let initialState = {
  isMatched: false,
  matchings: [],
  filteredMatching: {},
  matchingDBs: new Set(),
  currentGazetteer: 'all',
  currentSourceGazetteer: 'all',
};

const matchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_IS_MATCHED: {
      return {
        ...state,
        isMatched: action.value,
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
    case SET_MATCHINGS: {
      return {
        ...state,
        matchings: {
          ...state.matchings,
          [action.gazName]: action.matchings,
        },
      };
    }
    case SET_MATCHING_DBS: {
      return {
        ...state,
        matchingDBs: new Set([...state.matchingDBs, ...action.matchingDBs]),
      };
    }
    case SET_FILTERED_MATCHINGS: {
      return {
        ...state,
        filteredMatching: action.filteredMatching,
      };
    }
    case SET_MATCHINGS_TO_INITIAL: {
      return {
        ...state,
        matchings: initialState.matchings,
      };
    }
    case SET_MATCHING_REDUCER_TO_INITIAL: {
      return initialState;
    }
    default:
      return state;
  }
};

export const setCurrentSourceGazetteer = value => ({
  type: SET_CURRENT_SOURCE_GAZETTEER,
  value,
});
export const setCurrentGazetteer = value => ({
  type: SET_CURRENT_GAZETTEER,
  value,
});
export const changeIsMatched = value => ({
  type: CHANGE_IS_MATCHED,
  value,
});
export const setMatchingsToInitial = () => ({
  type: SET_MATCHINGS_TO_INITIAL,
});
export const setMatchings = (matchings, gazName) => ({
  type: SET_MATCHINGS,
  matchings,
  gazName,
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
export const setMatchingReducerToInitial = () => ({
  type: SET_MATCHING_REDUCER_TO_INITIAL,
});

const setFilterTypes = getSelector => (dispatch, getState) => {
  const entries = getSelector(getState());
  for (let key of Object.keys(entries)) {
    dispatch(setTypes(setValuesForTypeFilter(entries[key], key), key));
  }
};

export const filterMatchings = value => (dispatch, getState) => {
  const status = getStatus(getState());
  if (validateStatus(status)) {
    dispatch(resetInitialData());
    dispatch(changeIsMatched(value));
    dispatch(setFilterTypes(value ? getMatchingsEntities : getStartEntries));
  }
};

export const closeMatchingTable = () => dispatch => {
  dispatch(setMatchingReducerToInitial());
  dispatch(switchMatchingTable(true));
  dispatch(setIsMatching(false));
};

export default matchingReducer;
