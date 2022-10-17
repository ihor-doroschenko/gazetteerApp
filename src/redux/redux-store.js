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

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;
