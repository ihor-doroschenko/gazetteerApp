// Reducer to control part of the store related to the results and processes happening immediately after requesting the main results. It contains state and take actions as arguments to modify the state and return new state

import { resultsAPI } from 'dal/DALWrapper';
import { getIsMatching } from 'selectors/simple-selectors/nav-selectors';
import {
  getGazetteers,
  getIsMatchingEnabled,
  getOnlySettlements,
  getSearchCoordinates,
  getSearchType,
} from 'selectors/simple-selectors/search-selectors';
import { filterEntitiesByMatchingProperty } from 'utils/Filtering/Matchings/filterEntitiesByMatchingProperty';
import { setValuesForTypeFilter } from 'utils/Filtering/TypeFilter/setValuesForTypeFilter';
import { getMatchingsGazetteers } from 'utils/Helpers/ReducerHelpers/ResultsReducer/getMatchingsGazetteers';
import { preprocessResults } from 'utils/Preprocessing/preprocessResults';
import { getRequestErrorText } from 'utils/TextHandlers/getRequestErrorText';
import { setTypes } from './filter-reducer';
import { setMatchingDBs, setMatchings } from './matching-reducer';
import { setIsMatching } from './nav-reducer';
import { setPreviousSearchedPlaceNames } from './search-reducer';
import { setStateOfExpandedOfAGazetteer } from './table-state-reducer';

// Constants for actions names written using the rule of the redux-ducks - reducer/actions
// Set entities (main results) from the request
const SET_ENTITIES = 'gazetteer-app/results/SET_ENTITIES';
// Set entities (main results) from the request in original to work with non-normalized data
const SET_ORIGINAL_ENTITIES = 'gazetteer-app/results/SET_ORIGINAL_ENTITIES';
// Set place name being searched
const SET_SEARCHED_PLACE_NAME = 'gazetteer-app/results/SET_SEARCHED_PLACE_NAME';
// Set gazetteers being used in current search
const SET_USED_GAZETTEERS = 'gazetteer-app/results/SET_USED_GAZETTEERS';
// Turn on fetching mode to show the request for main results still being processed
const TURN_ON_FETCHING = 'gazetteer-app/results/TURN_ON_FETCHING';
// Turn off fetching mode to show that the processing of the request has been done
const TURN_OFF_FETCHING = 'gazetteer-app/results/TURN_OFF_FETCHING';
// Handle error if main results request has failed
const CATCH_MAIN_RESULTS_ERROR = 'gazetteer-app/results/CATCH_MAIN_RESULTS_ERROR';
// Add to main results an extern entity
const ADD_EXTERN_ENTITY_TO_MAIN_RESULTS = 'gazetteer-app/results/ADD_EXTERN_ENTITY_TO_MAIN_RESULTS';
// Add an extern entity to original data (for compare data)
const ADD_EXTERN_ENTITY_TO_ORIGINAL_DATA =
  'gazetteer-app/results/ADD_EXTERN_ENTITY_TO_ORIGINAL_DATA';
// Close an extern entity
const CLOSE_EXTERN_ENTITY = 'gazetteer-app/results/CLOSE_EXTERN_ENTITY';
// Set extern entities into separate storage
const SET_EXTERN_ENTITIES = 'gazetteer-app/results/SET_EXTERN_ENTITIES';
// Set separate storage for extern entities to initial
const SET_EXTERN_ENTITIES_TO_INITIAL = 'gazetteer-app/results/SET_EXTERN_ENTITIES_TO_INITIAL';
// Set this part of the store that controlls this reducer to initial values
const SET_RESULTS_REDUCER_TO_INITIAL = 'gazetteer-app/results/SET_RESULTS_REDUCER_TO_INITIAL';

// State to contain data
let initialState = {
  entries: {},
  originalEntries: {},
  searchedText: null,
  usedGazetteers: [],
  status: {},
  externEntities: {},
};

// Reducer that takes state and action to modify it
const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ENTITIES: {
      const { gazName, entries } = action;
      return {
        ...state,
        entries: {
          ...state.entries,
          [gazName]: entries,
        },
      };
    }
    case SET_ORIGINAL_ENTITIES: {
      const { gazName, originalEntries } = action;
      return {
        ...state,
        originalEntries: {
          ...state.originalEntries,
          [gazName]: originalEntries,
        },
      };
    }
    case SET_SEARCHED_PLACE_NAME: {
      return {
        ...state,
        searchedText: action.text,
      };
    }
    case SET_USED_GAZETTEERS: {
      const { gazetteers } = action;
      return {
        ...state,
        usedGazetteers: gazetteers,
      };
    }
    case TURN_ON_FETCHING: {
      let { gazName } = action;
      return {
        ...state,
        status: {
          ...state.status,
          [gazName]: 'isFetching',
        },
      };
    }
    case TURN_OFF_FETCHING: {
      const { gazName } = action;
      return {
        ...state,
        status: {
          ...state.status,
          [gazName]:
            state.entries[gazName] === null || state.entries[gazName].length === 0
              ? 'noData'
              : 'done',
        },
      };
    }
    case CATCH_MAIN_RESULTS_ERROR: {
      const { gazName, message } = action;
      return {
        ...state,
        status: {
          ...state.status,
          [gazName]: message,
        },
      };
    }
    case ADD_EXTERN_ENTITY_TO_MAIN_RESULTS: {
      const { gazName, entity } = action;
      return {
        ...state,
        entries: {
          ...state.entries,
          [gazName]: [...state.entries[gazName], entity],
        },
      };
    }
    case ADD_EXTERN_ENTITY_TO_ORIGINAL_DATA: {
      const { gazName, entity } = action;
      const index = Object.keys(state.originalEntries).findIndex(el => el === gazName);
      if (index === -1) {
        return {
          ...state,
          originalEntries: {
            ...state.originalEntries,
            [gazName]: [entity],
          },
        };
      }
      return {
        ...state,
        originalEntries: {
          ...state.originalEntries,
          [gazName]: [...state.originalEntries[gazName], entity],
        },
      };
    }
    case CLOSE_EXTERN_ENTITY: {
      const { gazName, id } = action;
      if (state.externEntities[gazName].length === 1) {
        let { [gazName]: value, ...other } = state.externEntities;
        return {
          ...state,
          externEntities: other,
        };
      }
      return {
        ...state,
        externEntities: {
          [gazName]: state.externEntities[gazName].filter(el => el !== id),
        },
      };
    }
    case SET_EXTERN_ENTITIES: {
      const { gazName, entity } = action;
      const index = Object.keys(state.externEntities).findIndex(el => el === gazName);
      if (index === -1) {
        return {
          ...state,
          externEntities: {
            ...state.externEntities,
            [gazName]: [entity],
          },
        };
      }
      return {
        ...state,
        externEntities: {
          ...state.externEntities,
          [gazName]: [...state.externEntities[gazName], entity],
        },
      };
    }
    case SET_EXTERN_ENTITIES_TO_INITIAL: {
      return {
        ...state,
        externEntities: {},
      };
    }
    case SET_RESULTS_REDUCER_TO_INITIAL:
      return initialState;
    default:
      return state;
  }
};

// Action creators to modify the state
export const setEntities = (entries, gazName) => ({
  type: SET_ENTITIES,
  entries,
  gazName,
});
export const setOriginalEntities = (originalEntries, gazName) => ({
  type: SET_ORIGINAL_ENTITIES,
  originalEntries,
  gazName,
});
export const setSearchedPlaceName = text => ({
  type: SET_SEARCHED_PLACE_NAME,
  text,
});
export const setUsedGazetteers = gazetteers => ({
  type: SET_USED_GAZETTEERS,
  gazetteers,
});
export const turnOnFetching = gazName => ({
  type: TURN_ON_FETCHING,
  gazName,
});
export const turnOffFetching = gazName => ({
  type: TURN_OFF_FETCHING,
  gazName,
});
export const catchMainResultsError = (message, gazName) => ({
  type: CATCH_MAIN_RESULTS_ERROR,
  message,
  gazName,
});
export const addExternEntityToMainResults = (gazName, entity) => ({
  type: ADD_EXTERN_ENTITY_TO_MAIN_RESULTS,
  gazName,
  entity,
});
export const addExternEntityToOriginalData = (gazName, entity) => ({
  type: ADD_EXTERN_ENTITY_TO_ORIGINAL_DATA,
  gazName,
  entity,
});
export const closeExternEntity = (gazName, id) => ({
  type: CLOSE_EXTERN_ENTITY,
  gazName,
  id,
});
export const setExternEntities = (gazName, entity) => ({
  type: SET_EXTERN_ENTITIES,
  gazName,
  entity,
});
export const setExternEntitiesToInitial = () => ({
  type: SET_EXTERN_ENTITIES_TO_INITIAL,
});
export const setResultsReducerToInitial = () => ({
  type: SET_RESULTS_REDUCER_TO_INITIAL,
});

// Thunk creators to modify state under more complex conditions. Often contains asynchronous operations or multiple action calls

// Do additional operations (e.g. handling of expand/collapse state of the subtables) while turning on or off fetching mode for the requestiong of the results
export const turnOnFetchingWrapper = gazName => dispatch => {
  dispatch(turnOnFetching(gazName));
  dispatch(setStateOfExpandedOfAGazetteer(gazName, true));
};
export const turnOffFetchingWrapper = gazName => dispatch => {
  dispatch(turnOffFetching(gazName));
  dispatch(setStateOfExpandedOfAGazetteer(gazName, false));
};

// Wrapper to request the results and do additional operations while it happens to prepare app for the results. It includes handling of the response and of the error, if the request failes.
export const getMainResultsThunkCreator =
  (selectedGazetteers, placeName) => (dispatch, getState) => {
    const coordinates = getSearchCoordinates(getState());
    const mode = getSearchType(getState());
    const match = getIsMatchingEnabled(getState());
    const settlements = getOnlySettlements(getState());
    dispatch(doAdditionalOperationsForResults(selectedGazetteers, placeName, match));
    for (let i of selectedGazetteers) {
      dispatch(turnOnFetchingWrapper(i));
      resultsAPI
        .getMainResults(i, placeName, coordinates, mode, match, settlements)
        .then(response => {
          dispatch(handleMainResults(response.data, i));
        })
        .catch(error => {
          dispatch(handleMainResultsFailure(error, i));
        });
    }
  };

// Do additional operations while the results are being requested, e.g. setting static data needed for the representation of the results and checking whether matching search parameter is enabled or not
const doAdditionalOperationsForResults =
  (selectedGazetteersObjects, placeName, match) => dispatch => {
    dispatch(setStaticDataForResults(selectedGazetteersObjects, placeName));
    dispatch(setIsMatching(match));
  };

// Set static data for results. It includes setting of the used gazetteers in current request, setting the searched place name for the results table head and saving the place name being searched to show it in autocomplete field for next search.
const setStaticDataForResults = (selectedGazetteers, placeName) => (dispatch, getState) => {
  const usedGazetteers = getGazetteers(getState()).filter(g =>
    selectedGazetteers.includes(g.gazName)
  );
  dispatch(setUsedGazetteers(usedGazetteers));
  dispatch(setSearchedPlaceName(placeName));
  dispatch(setPreviousSearchedPlaceNames(placeName));
};

// Handling of the response of the request. It includes setting the results in raw, storing the results, storing filter types of the results, turning off the fetching mode and, if the matching search parameter was enabled for this search, handling the matchings
const handleMainResults = (data, gazName) => (dispatch, getState) => {
  const preprocessedEntries = preprocessResults(data, gazName);
  dispatch(setOriginalEntities(data, gazName));
  dispatch(setEntities(preprocessedEntries, gazName));
  const filterTypeUniqueValues = setValuesForTypeFilter(preprocessedEntries, gazName);
  dispatch(setTypes(filterTypeUniqueValues, gazName));
  dispatch(turnOffFetchingWrapper(gazName));
  if (getIsMatching(getState())) {
    dispatch(handleMatchings(preprocessedEntries, gazName));
  }
};

// Handling the request failure. It includes setting an empty array for request gazettteer, storing error message to show it in results representation for respective gazetteer and turning the fetching mode off
const handleMainResultsFailure = (error, gazName) => dispatch => {
  dispatch(setEntities([], gazName));
  const errorMessage = getRequestErrorText(error.response);
  dispatch(catchMainResultsError(errorMessage, gazName));
  dispatch(turnOffFetchingWrapper(gazName));
};

// Handling the matchings. It includes storing the entities that have matchings, storing matchings themselves and their repsective gazetteers.
const handleMatchings = (preprocessedEntries, gazName) => dispatch => {
  const entitiesWithMatchings = filterEntitiesByMatchingProperty(preprocessedEntries);
  dispatch(setMatchings(entitiesWithMatchings, gazName));
  const matchings = entitiesWithMatchings.map(el => el.matchings);
  const dbs = getMatchingsGazetteers(matchings);
  dispatch(setMatchingDBs(dbs, gazName));
};

export default resultsReducer;
