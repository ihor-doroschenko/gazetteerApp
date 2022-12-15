// Redux store that contains and combines all reducers

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import compareReducer from './compare-reducer';
import detailsReducer from './details-reducer';
import filterReducer from './filter-reducer';
import mapInteractionReducer from './map-interaction-reducer';
import matchingReducer from './matching-reducer';
import navReducer from './nav-reducer';
import resultsReducer from './results-reducer';
import searchReducer from './search-reducer';
import tableStateReducer from './table-state-reducer';

// List of used reducers
let reducers = combineReducers({
  search: searchReducer,
  results: resultsReducer,
  nav: navReducer,
  details: detailsReducer,
  filter: filterReducer,
  tableState: tableStateReducer,
  mapInteraction: mapInteractionReducer,
  matching: matchingReducer,
  compare: compareReducer,
});

// Middleware applied to use thunk-functionalities in react-redux environment
const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

// For development (to check actual values in the console of the browser) can be commented out
window.store = store;

export default store;
