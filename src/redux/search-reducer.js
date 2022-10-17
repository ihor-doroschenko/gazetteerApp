import { removeResultsGlobally, setNavPartlyToInitial, switchResults } from './nav-reducer';
import { getMainResultsThunkCreator } from './results-reducer';

const TEXT_ERROR = 'gazetteer-app/search/TEXT_ERROR';
const DATABASES_ERROR = 'gazetteer-app/search/DATABASES_ERROR';
const SET_COORDINATES = 'gazetteer-app/search/SET_COORDINATES';
const DRAW = 'gazetteer-app/search/DRAW';
const SET_PREVIOUS_SEARCH_TEXTES = 'gazetteer-app/search/SET_PREVIOUS_SEARCH_TEXTES';
const SET_GAZETTEER_VALUE = 'gazetteer-app/search/SET_GAZETTEER_VALUE';
const SELECT_ALL_GAZETTEERS = 'gazetteer-app/search/SELECT_ALL_GAZETTEERS';
const DESELECT_ALL_GAZETTEERS = 'gazetteer-app/search/DESELECT_ALL_GAZETTEERS';
const SET_SEARCH_TEXT = 'gazetteer-app/search/SET_SEARCH_TEXT';
const SET_ONLY_SETTLEMENTS = 'gazetteer-app/search/SET_ONLY_SETTLEMENTS';
const SET_SEARCH_TYPE = 'gazetteer-app/search/SET_SEARCH_TYPE';
const SET_IS_MATCHING_ENABLED = 'gazetteer-app/search/SET_IS_MATCHING_ENABLED';

let initialState = {
  gazetteers: [
    {
      id: 1,
      gazName: 'geonames',
      text: 'GeoNames.org',
      link: 'http://geonames.org',
      color: '#a0a0a0',
      value: true,
    },
    {
      id: 2,
      gazName: 'gov',
      text: 'Geschichtliches Ortsverzeichnis (GOV)',
      link: 'http://gov.genealogy.net',
      color: '#33a02c',
      value: true,
    },
    {
      id: 3,
      gazName: 'gnd',
      text: 'Gemeinsame Normdatei (GND)',
      link: 'https://dnb.de',
      color: '#8756bc',
      value: true,
    },
    {
      id: 4,
      gazName: 'wikidata',
      text: 'Wikidata',
      link: 'https://www.wikidata.org',
      color: '#cab2d6',
      value: true,
    },
    {
      id: 5,
      gazName: 'prng',
      text: 'National Geographical Names Register (PRNG)',
      link: 'http://gugik.gov.pl',
      color: '#ff7f00',
      value: true,
    },
    {
      id: 6,
      gazName: 'histonamen',
      text: 'BKG Historische Ortsnamen',
      link: 'https://gdz.bkg.bund.de/index.php/default/historische-ortsnamen.html',
      color: '#fdbf6f',
      value: true,
    },
    {
      id: 7,
      gazName: 'poland16thc',
      text: 'Historical Atlas of Poland, 16th Century',
      link: 'https://ontohgis.pl/przykladowa-strona/ontohgis/',
      color: '#e31a1c',
      value: true,
    },
    {
      id: 8,
      gazName: 'naszekaszuby',
      text: 'Naszekaszuby',
      link: 'http://naszekaszuby.pl',
      color: '#fb9a99',
      value: true,
    },
    {
      id: 9,
      gazName: 'carpathorusyn',
      text: 'Carpathorusyn',
      link: 'http://carpatho-rusyn.org',
      color: '#ffff99',
      value: true,
    },
    {
      id: 10,
      gazName: 'prusijalit',
      text: 'Interaktyvus Rytų Prūsijos žemėlapis IV (Prusijalit)',
      link: 'http://prusija.lki.lt',
      color: '#b2df8a',
      value: true,
    },
  ],
  textError: false,
  databasesError: false,
  coordinates: [],
  draw: null,
  previousSearchTextes: [],
  isMatchingEnabled: false,
  searchText: '',
  onlySettlements: false,
  searchType: 'word',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.searchText,
      };
    }
    case SET_SEARCH_TYPE: {
      return {
        ...state,
        searchType: action.value,
      };
    }
    case SET_IS_MATCHING_ENABLED: {
      return {
        ...state,
        isMatchingEnabled: action.value,
      };
    }
    case TEXT_ERROR: {
      return {
        ...state,
        textError: action.value,
      };
    }
    case DATABASES_ERROR: {
      return {
        ...state,
        databasesError: action.value,
      };
    }
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
    case SET_COORDINATES: {
      return {
        ...state,
        coordinates:
          action.array.length !== 0
            ? [action.array[1].lat, action.array[0].lat, action.array[0].lng, action.array[3].lng]
            : action.array,
      };
    }
    case DRAW:
      return {
        ...state,
        draw: action.draw,
      };
    case SET_PREVIOUS_SEARCH_TEXTES:
      return {
        ...state,
        previousSearchTextes:
          state.previousSearchTextes.indexOf(action.searchText) === -1
            ? [...state.previousSearchTextes, action.searchText]
            : state.previousSearchTextes,
      };
    case SET_ONLY_SETTLEMENTS:
      return {
        ...state,
        onlySettlements: action.value,
      };
    default:
      return state;
  }
};

export const setSearchText = searchText => ({
  type: SET_SEARCH_TEXT,
  searchText,
});
export const setSearchType = value => ({
  type: SET_SEARCH_TYPE,
  value,
});
export const switchTextError = value => ({
  type: TEXT_ERROR,
  value,
});
export const switchDatabasesError = value => ({
  type: DATABASES_ERROR,
  value,
});
export const setGazetteerValue = (gazName, value) => ({
  type: SET_GAZETTEER_VALUE,
  gazName,
  value,
});
export const setIsMatchingEnabled = value => ({
  type: SET_IS_MATCHING_ENABLED,
  value,
});
export const selectAllGazetteers = () => ({
  type: SELECT_ALL_GAZETTEERS,
});
export const deselectAllGazetteers = () => ({
  type: DESELECT_ALL_GAZETTEERS,
});
export const setCoordinates = array => ({
  type: SET_COORDINATES,
  array,
});
export const draw = draw => ({
  type: DRAW,
  draw,
});
export const setPreviousSearchText = searchText => ({
  type: SET_PREVIOUS_SEARCH_TEXTES,
  searchText,
});
export const setOnlySettlements = value => ({
  type: SET_ONLY_SETTLEMENTS,
  value,
});

export const startSearch = (databases, placename) => dispatch => {
  dispatch(startNewSearch());
  dispatch(switchResults(true));
  dispatch(getMainResultsThunkCreator(databases, placename));
};

const startNewSearch = () => dispatch => {
  dispatch(removeResultsGlobally());
  dispatch(setNavPartlyToInitial());
};

export default searchReducer;
