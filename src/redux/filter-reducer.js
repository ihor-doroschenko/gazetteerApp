const SET_NAME_FILTER_VALUES = 'gazetteer-app/filter/SET_NAME_FILTER_VALUES';
const SET_FILTER_REDUCER_TO_INITIAL = 'gazetteer-app/filter/SET_FILTER_REDUCER_TO_INITIAL';
const SET_TYPES = 'gazetteer-app/filter/SET_TYPES';
const SET_TYPE_FILTER_VALUES = 'gazetteer-app/filter/SET_TYPE_FILTER_VALUES';

let initialState = {
  nameFilterValues: [],
  typeFilterValues: [],
  types: {},
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPE_FILTER_VALUES: {
      let newFiltered;
      if (
        state.typeFilterValues.length === 0 ||
        !state.typeFilterValues.some(el => el.gazetteer === action.gazetteer)
      ) {
        newFiltered = [
          ...state.typeFilterValues,
          { values: action.filterTypesUpdated, gazetteer: action.gazetteer },
        ];
      } else if (state.typeFilterValues.some(element => element.gazetteer === action.gazetteer)) {
        newFiltered = state.typeFilterValues.map(el => {
          if (el.gazetteer === action.gazetteer) {
            return {
              ...el,
              values: action.filterTypesUpdated,
            };
          }
          return el;
        });
      }
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
    case SET_NAME_FILTER_VALUES: {
      let newFiltered;
      if (
        state.nameFilterValues.length === 0 ||
        !state.nameFilterValues.some(el => el.gazetteer === action.gazetteer)
      ) {
        newFiltered = [
          ...state.nameFilterValues,
          { values: action.filterValuesUpdated, gazetteer: action.gazetteer },
        ];
      } else if (state.nameFilterValues.some(element => element.gazetteer === action.gazetteer)) {
        newFiltered = state.nameFilterValues.map(el => {
          if (el.gazetteer === action.gazetteer) {
            return {
              ...el,
              values: action.filterValuesUpdated,
            };
          }
          return el;
        });
      }
      return {
        ...state,
        nameFilterValues: newFiltered.filter(el => el.values.value),
      };
    }
    case SET_FILTER_REDUCER_TO_INITIAL: {
      return initialState;
    }
    default:
      return state;
  }
};

export const setTypes = (values, gazName) => ({
  type: SET_TYPES,
  values,
  gazName,
});
export const setNameFilterValues = (filterValuesUpdated, gazetteer) => ({
  type: SET_NAME_FILTER_VALUES,
  filterValuesUpdated,
  gazetteer,
});
export const setTypeFilterValues = (filterTypesUpdated, gazetteer) => ({
  type: SET_TYPE_FILTER_VALUES,
  filterTypesUpdated,
  gazetteer,
});
export const setFilterReducerToInitial = () => ({
  type: SET_FILTER_REDUCER_TO_INITIAL,
});

export default filterReducer;
