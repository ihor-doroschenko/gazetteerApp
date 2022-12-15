// Reducer to control part of the store related to the search. It contains state and take actions as arguments to modify the state and return new state

import { removeResultsGlobally, setNavPartlyToInitial, switchResults } from './nav-reducer';
import { getMainResultsThunkCreator } from './results-reducer';

// Constants for actions names written using the rule of the redux-ducks - reducer/actions
// Set value currently being in the input field (should be a place name)
const SET_PLACE_NAME = 'gazetteer-app/search/SET_PLACE_NAME';
// Set search type
const SET_SEARCH_TYPE = 'gazetteer-app/search/SET_SEARCH_TYPE';
// Set coordinates (happens only if bounding box is used, otherweise an empty array is set)
const SET_COORDINATES = 'gazetteer-app/search/SET_COORDINATES';
// Pass draw object between components
const PASS_DRAW = 'gazetteer-app/search/PASS_DRAW';
// Set value for onlySettlements search parameter
const SET_ONLY_SETTLEMENTS = 'gazetteer-app/search/SET_ONLY_SETTLEMENTS';
// Set place name to separate storage to show it in autocomplete in input field  by next click on it
const SET_PREVIOUS_SEARCHED_PLACE_NAMES = 'gazetteer-app/search/SET_PREVIOUS_SEARCHED_PLACE_NAMES';
// Change value of requested gazetteer
const SET_GAZETTEER_VALUE = 'gazetteer-app/search/SET_GAZETTEER_VALUE';
// Set values of all gazetteers to true (select all of them for the search)
const SELECT_ALL_GAZETTEERS = 'gazetteer-app/search/SELECT_ALL_GAZETTEERS';
// Set values of all gazetteers to false (deselect all of them for the search)
const DESELECT_ALL_GAZETTEERS = 'gazetteer-app/search/DESELECT_ALL_GAZETTEERS';
// Enable or disable parameter that defines whether matchings should be requested in current search
const SET_IS_MATCHING_ENABLED = 'gazetteer-app/search/SET_IS_MATCHING_ENABLED';

// State to contain data
let initialState = {
  placeName: '',
  searchType: 'word',
  coordinates: [],
  draw: null,
  onlySettlements: false,
  previousSearchedPlaceNames: [],
  gazetteers: [
    {
      gazName: 'geonames',
      value: true,
    },
    {
      gazName: 'gov',
      value: true,
    },
    {
      gazName: 'gnd',
      value: true,
    },
    {
      gazName: 'wikidata',
      value: true,
    },
    {
      gazName: 'prng',
      value: true,
    },
    {
      gazName: 'histonamen',
      value: true,
    },
    {
      gazName: 'poland16thc',
      value: true,
    },
    {
      gazName: 'naszekaszuby',
      value: true,
    },
    {
      gazName: 'carpathorusyn',
      value: true,
    },
    {
      gazName: 'prusijalit',
      value: true,
    },
  ],
  isMatchingEnabled: false,
};

// Reducer that takes state and action to modify it
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACE_NAME: {
      return {
        ...state,
        placeName: action.placeName,
      };
    }
    case SET_SEARCH_TYPE: {
      return {
        ...state,
        searchType: action.searchType,
      };
    }
    case SET_COORDINATES: {
      return {
        ...state,
        coordinates:
          action.array.length !== 0
            ? [action.array[1].lat, action.array[0].lat, action.array[0].lng, action.array[3].lng]
            : action.array,
      };
    }
    case PASS_DRAW:
      return {
        ...state,
        draw: action.draw,
      };
    case SET_ONLY_SETTLEMENTS:
      return {
        ...state,
        onlySettlements: action.value,
      };
    case SET_PREVIOUS_SEARCHED_PLACE_NAMES:
      return {
        ...state,
        previousSearchedPlaceNames:
          state.previousSearchedPlaceNames.indexOf(action.placeName) === -1
            ? [...state.previousSearchedPlaceNames, action.placeName]
            : state.previousSearchedPlaceNames,
      };
    case SET_GAZETTEER_VALUE: {
      return {
        ...state,
        gazetteers: state.gazetteers.map(g => {
          if (g.gazName === action.gazName) {
            return {
              ...g,
              value: action.value,
            };
          } else {
            return g;
          }
        }),
      };
    }
    case SELECT_ALL_GAZETTEERS: {
      return {
        ...state,
        gazetteers: state.gazetteers.map(g => {
          return {
            ...g,
            value: true,
          };
        }),
      };
    }
    case DESELECT_ALL_GAZETTEERS: {
      return {
        ...state,
        gazetteers: state.gazetteers.map(g => {
          return {
            ...g,
            value: false,
          };
        }),
      };
    }
    case SET_IS_MATCHING_ENABLED: {
      return {
        ...state,
        isMatchingEnabled: action.value,
      };
    }
    default:
      return state;
  }
};

// Action creators to modify the state
export const setPlaceName = placeName => ({
  type: SET_PLACE_NAME,
  placeName,
});
export const setSearchType = searchType => ({
  type: SET_SEARCH_TYPE,
  searchType,
});
export const setCoordinates = array => ({
  type: SET_COORDINATES,
  array,
});
export const passDraw = draw => ({
  type: PASS_DRAW,
  draw,
});
export const setOnlySettlements = value => ({
  type: SET_ONLY_SETTLEMENTS,
  value,
});
export const setPreviousSearchedPlaceNames = placeName => ({
  type: SET_PREVIOUS_SEARCHED_PLACE_NAMES,
  placeName,
});
export const setGazetteerValue = (gazName, value) => ({
  type: SET_GAZETTEER_VALUE,
  gazName,
  value,
});
export const selectAllGazetteers = () => ({
  type: SELECT_ALL_GAZETTEERS,
});
export const deselectAllGazetteers = () => ({
  type: DESELECT_ALL_GAZETTEERS,
});
export const setIsMatchingEnabled = value => ({
  type: SET_IS_MATCHING_ENABLED,
  value,
});

// Thunk creators to modify state under more complex conditions. Often contains asynchronous operations or multiple action calls

// Wrapper to do operations at search starting and immediately after it. It includes starting new search, activating results window and requesting results
export const startSearch = (databases, placename) => dispatch => {
  dispatch(startNewSearch());
  dispatch(switchResults(true));
  dispatch(getMainResultsThunkCreator(databases, placename));
};

// Wrapper to do operations at search starting. It includes removing the results and all operations related to it and setting nav-reducer to initial (partly)
const startNewSearch = () => dispatch => {
  dispatch(removeResultsGlobally());
  dispatch(setNavPartlyToInitial());
};

export default searchReducer;
