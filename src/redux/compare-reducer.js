import { resultsAPI } from 'dal/DALWrapper';
import { getDetailById } from 'selectors/reselectors/getDetailById';
import { getEntitiesToCompare } from 'selectors/simple-selectors/compare-selectors';
import { handleDetailRequestError } from 'utils/Helpers/ReducerHelpers/DetailsReducer/handleDetailRequestError';
import { normalize } from 'utils/Preprocessing/normalizeResults';
import { switchCompareTable, switchCompareTool } from './nav-reducer';
import { addNotAvailableEntityToOriginalData } from './results-reducer';

const ADD_ENTITY = 'gazetteer-app/compare-tool/ADD_ENTITY';
const UPDATE_ENTITY = 'gazetteer-app/compare-tool/UPDATE_ENTITY';
const REMOVE_ENTITY = 'gazetteer-app/compare-tool/REMOVE_ENTITY';
const SET_COMPARE_REDUCER_TO_INITIAL = 'gazetteer-app/compare-tool/SET_COMPARE_REDUCER_TO_INITIAL';
const SET_SLIDE_AMOUNT = 'gazetteer-app/compare-tool/SET_SLIDE_AMOUNT';

let initialState = {
  entitiesToCompare: [],
  slideAmount: 2,
};

const compareReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTITY: {
      const entity = { entity: action.entity, gazName: action.gazName, loading: action.loading };
      return {
        ...state,
        entitiesToCompare:
          state.entitiesToCompare.findIndex(el => el.entity.id === action.entity.id) === -1
            ? [...state.entitiesToCompare, { ...entity }]
            : state.entitiesToCompare,
      };
    }
    case UPDATE_ENTITY: {
      return {
        ...state,
        entitiesToCompare: state.entitiesToCompare.map(d => {
          if (d.entity.id === action.id) {
            return {
              ...d,
              loading: action.loading,
            };
          }
          return d;
        }),
      };
    }
    case REMOVE_ENTITY: {
      return {
        ...state,
        entitiesToCompare: state.entitiesToCompare.filter(el => el.entity.id !== action.id),
      };
    }
    case SET_COMPARE_REDUCER_TO_INITIAL: {
      return {
        ...state,
        entitiesToCompare: initialState.entitiesToCompare,
      };
    }
    case SET_SLIDE_AMOUNT: {
      return {
        ...state,
        slideAmount: action.slideAmount,
      };
    }
    default:
      return state;
  }
};

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

export const removeEntityFromCompareTool = id => (dispatch, getState) => {
  const currentEntitiesToCompare = getEntitiesToCompare(getState());
  if (currentEntitiesToCompare.length === 1) {
    dispatch(switchCompareTool(false));
  }
  dispatch(removeEntity(id));
};
export const addEntityToCompare = (id, gazName) => (dispatch, getState) => {
  const entity = getDetailById(getState(), id);
  if (!entity) {
    dispatch(addEntity({ id: id }, gazName, true));
    resultsAPI
      .getEntityById(gazName, id)
      .then(response => {
        dispatch(addNotAvailableEntityToOriginalData(gazName, response.data));
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
export const closeCompareTable = () => dispatch => {
  dispatch(setCompareReducerToInitial());
  dispatch(switchCompareTool(false));
  dispatch(switchCompareTable(true));
};

export default compareReducer;
