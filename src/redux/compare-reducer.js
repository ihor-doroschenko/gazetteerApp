// Reducer to control part of the store related to the compare view. It contains state and take actions as arguments to modify the state and return new state

import { resultsAPI } from 'dal/DALWrapper';
import { getDetailById } from 'selectors/reselectors/getDetailById';
import { getEntitiesToCompare } from 'selectors/simple-selectors/compare-selectors';
import { handleDetailRequestError } from 'utils/Helpers/ReducerHelpers/DetailsReducer/handleDetailRequestError';
import { normalize } from 'utils/Preprocessing/normalizeResults';
import { switchAdditionalResult, switchCompareTool } from './nav-reducer';
import { addExternEntityToOriginalData } from './results-reducer';

// Constants for actions names written using the rule of the redux-ducks - reducer/actions
// Adds new entity to compare view
const ADD_ENTITY = 'compare-tool/ADD_ENTITY';
// Updates loading property of the object of the entity in compare view
const UPDATE_ENTITY = 'compare-tool/UPDATE_ENTITY';
// Removes entity from the compare view
const REMOVE_ENTITY = 'compare-tool/REMOVE_ENTITY';
// Set amount of slides considering current width of the compare view
const SET_SLIDE_AMOUNT = 'compare-tool/SET_SLIDE_AMOUNT';
// Set this part of the store that controlls this reducer to initial values
const SET_COMPARE_REDUCER_TO_INITIAL = 'compare-tool/SET_COMPARE_REDUCER_TO_INITIAL';

// State to contain data
let initialState = {
  entitiesToCompare: [],
  slideAmount: 2,
};

// Reducer that takes state and action to modify it
const compareReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTITY: {
      const { entity, gazName, loading } = action;
      const element = { entity, gazName, loading };
      return {
        ...state,
        entitiesToCompare:
          state.entitiesToCompare.findIndex(el => el.entity.id === action.entity.id) === -1
            ? [...state.entitiesToCompare, { ...element }]
            : state.entitiesToCompare,
      };
    }
    case UPDATE_ENTITY: {
      return {
        ...state,
        entitiesToCompare: state.entitiesToCompare.map(el => {
          if (el.entity.id === action.id) {
            return {
              ...el,
              loading: action.loading,
            };
          }
          return el;
        }),
      };
    }
    case REMOVE_ENTITY: {
      return {
        ...state,
        entitiesToCompare: state.entitiesToCompare.filter(el => el.entity.id !== action.id),
      };
    }
    case SET_SLIDE_AMOUNT: {
      return {
        ...state,
        slideAmount: action.slideAmount,
      };
    }
    case SET_COMPARE_REDUCER_TO_INITIAL: {
      return {
        ...state,
        entitiesToCompare: initialState.entitiesToCompare,
      };
    }
    default:
      return state;
  }
};

// Action creators to modify the state
export const addEntity = (entity, gazName, loading) => ({
  type: ADD_ENTITY,
  entity,
  gazName,
  loading,
});
export const updateEntity = (id, loading) => ({
  type: UPDATE_ENTITY,
  id,
  loading,
});
export const removeEntity = id => ({
  type: REMOVE_ENTITY,
  id,
});
export const setSlideAmount = slideAmount => ({
  type: SET_SLIDE_AMOUNT,
  slideAmount,
});
export const setCompareReducerToInitial = () => ({
  type: SET_COMPARE_REDUCER_TO_INITIAL,
});

// Thunk creators to modify state under more complex conditions. Often contains asynchronous operations or multiple action calls
// Hide compare view if it was last entity in compare view
export const removeEntityFromCompareTool = id => (dispatch, getState) => {
  const currentEntitiesToCompare = getEntitiesToCompare(getState());
  if (currentEntitiesToCompare.length === 1) {
    dispatch(switchCompareTool(false));
  }
  dispatch(removeEntity(id));
};

// Add entity to compare view. If it is not in requested entities, make extra request to get this entity from the server. This extra request works only for gazetteers that are available in the app (even if they were not enabled for current request/search)
export const addEntityToCompare = (id, gazName) => (dispatch, getState) => {
  const entity = getDetailById(getState(), id);
  if (!entity) {
    dispatch(addEntity({ id: id }, gazName, true));
    resultsAPI
      .getEntityById(gazName, id)
      .then(response => {
        dispatch(addExternEntityToOriginalData(gazName, response.data));
        const [details] = normalize([response.data], gazName);
        dispatch(updateEntity(details.id, false));
      })
      .catch(error => {
        const details = handleDetailRequestError(id, error);
        dispatch(updateEntity(details.id, false));
      });
  } else {
    dispatch(addEntity(entity, gazName, false));
  }
};

// Close compare view
export const closeCompareTable = () => dispatch => {
  dispatch(setCompareReducerToInitial());
  dispatch(switchCompareTool(false));
  dispatch(switchAdditionalResult(true, true));
};

export default compareReducer;
