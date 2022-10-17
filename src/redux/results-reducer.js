import { resultsAPI } from 'dal/DALWrapper';
import { getIsMatching } from 'selectors/simple-selectors/nav-selectors';
import {
  getGazetteers,
  getIsMatchingEnabled,
  getOnlySettlements,
  getSearchCoordinates,
  getSearchType,
} from 'selectors/simple-selectors/search-selectors';
import { filterEntitiesByMatchingProperty } from 'utils/Filtering/Matching/filterEntitiesByMatchingProperty';
import { setValuesForTypeFilter } from 'utils/Filtering/TypeFilter/setValuesForTypeFilter';
import { getMatchingsDBs } from 'utils/Helpers/ReducerHelpers/ResultsReducer/getMatchingsDBs';
import { preprocessResults } from 'utils/Preprocessing/preprocessResults';
import { getRequestErrorText } from 'utils/TextHandlers/getRequestErrorText';
import { setTypes } from './filter-reducer';
import { setMatchingDBs, setMatchings } from './matching-reducer';
import { setIsMatching } from './nav-reducer';
import { setPreviousSearchText } from './search-reducer';
import { setStateOfExpandedOfAGazetteer } from './table-state-reducer';

const SET_ENTRIES = 'gazetteer-app/results/SET_ENTRIES';
const SET_ORIGINAL_ENTRIES = 'gazetteer-app/results/SET_ORIGINAL_ENTRIES';
const SET_SEARCHEDTEXT = 'gazetteer-app/results/SET_SEARCHEDTEXT';
const SET_GAZETTEERS = 'gazetteer-app/results/SET_GAZETTEERS';
const SET_RESULTS_REDUCER_TO_INITIAL = 'gazetteer-app/results/SET_RESULTS_REDUCER_TO_INITIAL';
const TURN_ON_FETCHING = 'gazetteer-app/results/TURN_ON_FETCHING';
const TURN_OFF_FETCHING = 'gazetteer-app/results/TURN_OFF_FETCHING';
const CATCH_ERROR = 'gazetteer-app/results/CATCH_ERROR';
const SET_SEPARATE_ENTRIES = 'gazetteer-app/results/SET_SEPARATE_ENTRIES';
const CLOSE_SEPARATE_ENTRY = 'gazetteer-app/results/CLOSE_SEPARATE_ENTRY';
const SET_SEPARATE_ENTRIES_TO_INITIAL = 'gazetteer-app/results/SET_SEPARATE_ENTRIES_TO_INITIAL';
const ADD_NOT_AVAILABLE_ENTITY_TO_ORIGINAL_DATA =
  'gazetteer-app/results/ADD_NOT_AVAILABLE_ENTITY_TO_ORIGINAL_DATA';

let initialState = {
  entries: {},
  originalEntries: {},
  status: {},
  gazetteers: [],
  searchedText: null,
  separateEntries: {},
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULTS_REDUCER_TO_INITIAL:
      return initialState;
    case TURN_ON_FETCHING: {
      let gazetteername = action.gaz;
      return {
        ...state,
        status: {
          ...state.status,
          [gazetteername]: 'isFetching',
        },
      };
    }
    case SET_GAZETTEERS: {
      return {
        ...state,
        gazetteers: action.gaz,
      };
    }
    case SET_ENTRIES: {
      const { gazetteer, entries } = action;
      return {
        ...state,
        entries: {
          ...state.entries,
          [gazetteer]: entries,
        },
      };
    }
    case SET_ORIGINAL_ENTRIES: {
      const { gazetteer, originalEntries } = action;
      return {
        ...state,
        originalEntries: {
          ...state.originalEntries,
          [gazetteer]: originalEntries,
        },
      };
    }
    case TURN_OFF_FETCHING: {
      return {
        ...state,
        status: {
          ...state.status,
          [action.gazetteer]:
            state.entries[action.gazetteer] === null || state.entries[action.gazetteer].length === 0
              ? 'noData'
              : 'done',
        },
      };
    }
    case CATCH_ERROR: {
      return {
        ...state,
        status: {
          ...state.status,
          [action.gazetteer]: action.errorMessage,
        },
      };
    }
    case SET_SEARCHEDTEXT: {
      return {
        ...state,
        searchedText: action.text,
      };
    }
    case SET_SEPARATE_ENTRIES: {
      const index = Object.keys(state.separateEntries).findIndex(el => el === action.gazName);
      if (index === -1) {
        return {
          ...state,
          separateEntries: {
            ...state.separateEntries,
            [action.gazName]: [action.entity],
          },
        };
      }
      return {
        ...state,
        separateEntries: {
          ...state.separateEntries,
          [action.gazName]: [...state.separateEntries[action.gazName], action.entity],
        },
      };
    }
    case CLOSE_SEPARATE_ENTRY: {
      if (state.separateEntries[action.gazName].length === 1) {
        let { [action.gazName]: value, ...other } = state.separateEntries;
        return {
          ...state,
          separateEntries: other,
        };
      }
      return {
        ...state,
        separateEntries: {
          [action.gazName]: state.separateEntries[action.gazName].filter(el => el !== action.id),
        },
      };
    }
    case SET_SEPARATE_ENTRIES_TO_INITIAL: {
      return {
        ...state,
        separateEntries: {},
      };
    }
    case ADD_NOT_AVAILABLE_ENTITY_TO_ORIGINAL_DATA: {
      const index = Object.keys(state.originalEntries).findIndex(el => el === action.gazName);
      if (index === -1) {
        return {
          ...state,
          originalEntries: {
            ...state.originalEntries,
            [action.gazName]: [action.entity],
          },
        };
      }
      return {
        ...state,
        originalEntries: {
          ...state.originalEntries,
          [action.gazName]: [...state.originalEntries[action.gazName], action.entity],
        },
      };
    }
    default:
      return state;
  }
};

export const setGazetteersForTable = gaz => ({
  type: SET_GAZETTEERS,
  gaz,
});
export const setEntries = (entries, gazetteer) => ({
  type: SET_ENTRIES,
  entries,
  gazetteer,
});
export const setOriginalEntries = (originalEntries, gazetteer) => ({
  type: SET_ORIGINAL_ENTRIES,
  originalEntries,
  gazetteer,
});
export const turnOffFetching = gazetteer => ({
  type: TURN_OFF_FETCHING,
  gazetteer,
});
export const catchError = (errorMessage, gazetteer) => ({
  type: CATCH_ERROR,
  errorMessage,
  gazetteer,
});
export const setResultsReducerToInitial = () => ({
  type: SET_RESULTS_REDUCER_TO_INITIAL,
});
export const turnOnFetching = gaz => ({
  type: TURN_ON_FETCHING,
  gaz,
});
export const setSearchedText = text => ({
  type: SET_SEARCHEDTEXT,
  text,
});
export const setSeparateEntries = (gazName, entity) => ({
  type: SET_SEPARATE_ENTRIES,
  gazName,
  entity,
});
export const closeSeparateEntry = (gazName, id) => ({
  type: CLOSE_SEPARATE_ENTRY,
  gazName,
  id,
});
export const setSeparateEntriesToInitial = () => ({
  type: SET_SEPARATE_ENTRIES_TO_INITIAL,
});
export const addNotAvailableEntityToOriginalData = (gazName, entity) => ({
  type: ADD_NOT_AVAILABLE_ENTITY_TO_ORIGINAL_DATA,
  gazName,
  entity,
});

export const turnOnFetchingWrapper = gaz => dispatch => {
  dispatch(turnOnFetching(gaz));
  dispatch(setStateOfExpandedOfAGazetteer(gaz, true));
};
export const turnOffFetchingWrapper = gaz => dispatch => {
  dispatch(turnOffFetching(gaz));
  dispatch(setStateOfExpandedOfAGazetteer(gaz, false));
};

export const getMainResultsThunkCreator =
  (selectedGazetteers, searchText) => (dispatch, getState) => {
    const coordinates = getSearchCoordinates(getState());
    const mode = getSearchType(getState());
    const match = getIsMatchingEnabled(getState());
    const settlements = getOnlySettlements(getState());
    dispatch(doAdditionalOperationsForResults(selectedGazetteers, searchText, match));
    for (let i of selectedGazetteers) {
      dispatch(turnOnFetchingWrapper(i));
      resultsAPI
        .getMainResults(i, searchText, coordinates, mode, match, settlements)
        .then(response => {
          dispatch(handleMainResults(response.data, i));
        })
        .catch(error => {
          dispatch(handleMainResultsFailure(error, i));
        });
    }
  };

const doAdditionalOperationsForResults =
  (selectedGazetteersObjects, searchText, match) => dispatch => {
    dispatch(setStaticDataForResults(selectedGazetteersObjects, searchText));
    dispatch(setIsMatching(match));
  };

const setStaticDataForResults = (selectedGazetteers, searchText) => (dispatch, getState) => {
  const gazetteers = getGazetteers(getState()).filter(g => selectedGazetteers.includes(g.gazName));
  dispatch(setGazetteersForTable(gazetteers));
  dispatch(setSearchedText(searchText));
  dispatch(setPreviousSearchText(searchText));
};

const handleMainResults = (data, gazName) => (dispatch, getState) => {
  const preprocessedEntries = preprocessResults(data, gazName);
  dispatch(setOriginalEntries(data, gazName));
  dispatch(setEntries(preprocessedEntries, gazName));
  const filterTypeUniqueValues = setValuesForTypeFilter(preprocessedEntries, gazName);
  dispatch(setTypes(filterTypeUniqueValues, gazName));
  dispatch(turnOffFetchingWrapper(gazName));
  if (getIsMatching(getState())) {
    dispatch(handleMatchingsInResults(preprocessedEntries, gazName));
  }
};

const handleMatchingsInResults = (preprocessedEntries, gazName) => dispatch => {
  const entitiesWithMatchings = filterEntitiesByMatchingProperty(preprocessedEntries);
  dispatch(setMatchings(entitiesWithMatchings, gazName));
  const matchings = entitiesWithMatchings.map(el => el.matchings);
  const dbs = getMatchingsDBs(matchings);
  dispatch(setMatchingDBs(dbs, gazName));
};

const handleMainResultsFailure = (error, gazName) => dispatch => {
  dispatch(setEntries([], gazName));
  const errorMessage = getRequestErrorText(error.response);
  dispatch(catchError(errorMessage, gazName));
  dispatch(turnOffFetchingWrapper(gazName));
};

export default resultsReducer;
