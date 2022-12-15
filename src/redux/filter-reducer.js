// Reducer to control part of the store related to the filters in the results table. It contains state and take actions as arguments to modify the state and return new state

import { getNewFilteredValuesWrapper } from 'utils/Helpers/FilterHelpers/getNewFilteredValuesWrapper';

// Constants for actions names written using the rule of the redux-ducks - reducer/actions
// Set value to filter gazetteer entities in results table by name
const SET_NAME_FILTER_VALUES = 'filter/SET_NAME_FILTER_VALUES';
// Set value to filter gazetteer entities in results table by type
const SET_TYPE_FILTER_VALUES = 'filter/SET_TYPE_FILTER_VALUES';
// Set all possible type values for given gazetteer
const SET_TYPES = 'filter/SET_TYPES';
// Update type values for given gazetteer
const UPDATE_TYPES = 'filter/UPDATE_TYPES';
// Set this part of the store that controlls this reducer to initial values
const SET_FILTER_REDUCER_TO_INITIAL = 'filter/SET_FILTER_REDUCER_TO_INITIAL';

// State to contain data
let initialState = {
  nameFilterValues: [],
  typeFilterValues: [],
  types: {},
};

// Reducer that takes state and action to modify it
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME_FILTER_VALUES: {
      const newFiltered = getNewFilteredValuesWrapper(state.nameFilterValues, action);
      return {
        ...state,
        nameFilterValues: newFiltered.filter(el => el.values.value),
      };
    }
    case SET_TYPE_FILTER_VALUES: {
      const newFiltered = getNewFilteredValuesWrapper(state.typeFilterValues, action);
      return {
        ...state,
        typeFilterValues: newFiltered.filter(el => el.values.value),
      };
    }
    case SET_TYPES: {
      const { gazName, values } = action;
      return {
        ...state,
        types: { ...state.types, [gazName]: Array.from(values) },
      };
    }
    case UPDATE_TYPES: {
      const { gazName, value } = action;
      return {
        ...state,
        types: { ...state.types, [gazName]: [...state.types[gazName], value] },
      };
    }
    case SET_FILTER_REDUCER_TO_INITIAL: {
      return initialState;
    }
    default:
      return state;
  }
};

// Action creators to modify the state
export const setNameFilterValues = (filterValuesUpdated, gazetteer) => ({
  type: SET_NAME_FILTER_VALUES,
  gazetteer,
  filterValuesUpdated,
});
export const setTypeFilterValues = (filterValuesUpdated, gazetteer) => ({
  type: SET_TYPE_FILTER_VALUES,
  filterValuesUpdated,
  gazetteer,
});
export const setTypes = (values, gazName) => ({
  type: SET_TYPES,
  values,
  gazName,
});
export const updateTypes = (value, gazName) => ({
  type: UPDATE_TYPES,
  value,
  gazName,
});
export const setFilterReducerToInitial = () => ({
  type: SET_FILTER_REDUCER_TO_INITIAL,
});

export default filterReducer;
