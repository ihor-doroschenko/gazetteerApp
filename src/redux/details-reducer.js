import { partOfAPI } from 'dal/DALproduction';
import { resultsAPI } from 'dal/DALWrapper';
import { getDetailById } from 'selectors/reselectors/getDetailById';
import {
  checkUsedGazetteersStatus,
  findUsedGazetteer,
} from 'selectors/reselectors/simple-reselectors';
import { getDetails } from 'selectors/simple-selectors/details-selectors';
import { getIsResultsHidden } from 'selectors/simple-selectors/nav-selectors';
import { getSeparateEntries } from 'selectors/simple-selectors/results-selectors';
import { handlePartOfRequestWrapper } from 'utils/API/handlePartOfRequestWrapper';
import { getDetailsObject } from 'utils/FactoryFunctions/getDetailsObject';
import { handleDetailRequestError } from 'utils/Helpers/ReducerHelpers/DetailsReducer/handleDetailRequestError';
import { setInternId } from 'utils/Helpers/ReducerHelpers/DetailsReducer/setInternId';
import { normalize } from 'utils/Preprocessing/normalizeResults';
import { checkOpenedDetails } from 'utils/validators/PropertyValidators/checkOpenedDetails';
import { isObject } from 'utils/validators/ValidateDataTypes/validateObject';
import { handleZoomTo, mouseOut } from './map-interaction-reducer';
import { switchResultsHidden } from './nav-reducer';
import {
  addNotAvailableEntityToOriginalData,
  closeSeparateEntry,
  setSeparateEntries,
} from './results-reducer';
import { setStateOfExpandedOfAGazetteer } from './table-state-reducer';

const ADD_TO_DETAILS = 'gazetteer-app/details/ADD_TO_DETAILS';
const REMOVE_FROM_DETAILS = 'gazetteer-app/details/REMOVE_FROM_DETAILS';
const SWITCH_DETAILS_STATUS = 'gazetteer-app/details/SWITCH_DETAILS_STATUS';
const SET_DETAILS_STATUS_TO_PASSIVE = 'gazetteer-app/details/SET_DETAILS_STATUS_TO_PASSIVE';
const SET_DETAILS_REDUCER_TO_INITIAL = 'gazetteer-app/details/SET_DETAILS_REDUCER_TO_INITIAL';
const SWITCH_IS_FILLED = 'gazetteer-app/details/SWITCH_IS_FILLED';
const SWITCH_IS_ESSENTIAL = 'gazetteer-app/details/SWITCH_IS_ESSENTIAL';
const REFERENCE_PART_OF = 'gazetteer-app/details/REFERENCE_PART_OF';
const REFERENCE_PART_OF_IMG = 'gazetteer-app/details/REFERENCE_PART_OF_IMG';
const CHANGE_PART_OF_IS_OPENED = 'gazetteer-app/details/CHANGE_PART_OF_IS_OPENED';
const UPDATE_DETAILS = 'gazetteer-app/details/UPDATE_DETAILS';
const SWITCH_DETAILS_STATUS_TO_LATEST = 'gazetteer-app/details/SWITCH_DETAILS_STATUS_TO_LATEST';
const CHANGE_PART_OF_IS_ENLARGED = 'gazetteer-app/details/CHANGE_PART_OF_IS_ENLARGED';

//TODO: Rename details.details or detail.details
let initialState = {
  details: [],
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DETAILS: {
      return {
        ...state,
        details: [...state.details, action.element],
      };
    }
    case REMOVE_FROM_DETAILS: {
      return {
        ...state,
        details: state.details.filter(detail => detail.details.id !== action.id),
      };
    }
    case SWITCH_DETAILS_STATUS: {
      return {
        ...state,
        details: state.details.map(d => {
          if (d.gazName === action.gazName) {
            if (d.details.id === action.id) {
              return {
                ...d,
                status: true,
              };
            } else {
              return {
                ...d,
                status: false,
              };
            }
          } else {
            return d;
          }
        }),
      };
    }
    case SET_DETAILS_STATUS_TO_PASSIVE: {
      return {
        ...state,
        details: state.details.map(d => {
          if (d.gazName === action.gazName) {
            return {
              ...d,
              status: false,
            };
          } else {
            return d;
          }
        }),
      };
    }
    case SWITCH_IS_FILLED: {
      return {
        ...state,
        details: state.details.map(d => {
          if (d.details.id === action.id) {
            return {
              ...d,
              isFilled: !d.isFilled,
            };
          } else {
            return d;
          }
        }),
      };
    }
    case SWITCH_IS_ESSENTIAL: {
      return {
        ...state,
        details: state.details.map(d => {
          if (d.details.id === action.id) {
            return {
              ...d,
              isEssential: !d.isEssential,
            };
          } else {
            return d;
          }
        }),
      };
    }
    case REFERENCE_PART_OF: {
      return {
        ...state,
        details: state.details.map(d => {
          if (d.details.id === action.id) {
            return {
              ...d,
              loading: false,
              details: {
                ...d.details,
                ['part-of']: action.element,
              },
            };
          }
          return d;
        }),
      };
    }
    case REFERENCE_PART_OF_IMG: {
      return {
        ...state,
        details: state.details.map(d => {
          if (d.details.id === action.id) {
            return {
              ...d,
              image: {
                status: action.status,
                isOpened: action.isOpened,
                isEnlarged: action.isEnlarged,
                info: action.image,
              },
            };
          }
          return d;
        }),
      };
    }
    case CHANGE_PART_OF_IS_OPENED: {
      return {
        ...state,
        details: state.details.map(d => {
          if (d.details.id === action.id) {
            return {
              ...d,
              image: {
                ...d.image,
                isOpened: action.value,
              },
            };
          }
          return d;
        }),
      };
    }
    case CHANGE_PART_OF_IS_ENLARGED: {
      return {
        ...state,
        details: state.details.map(d => {
          if (d.details.id === action.id) {
            return {
              ...d,
              image: {
                ...d.image,
                isEnlarged: action.value,
              },
            };
          }
          return d;
        }),
      };
    }
    case UPDATE_DETAILS: {
      return {
        ...state,
        details: state.details.map(d => {
          if (d.details.id === action.id) {
            return {
              ...d,
              loading: false,
              details: action.details,
            };
          }
          return d;
        }),
      };
    }
    case SWITCH_DETAILS_STATUS_TO_LATEST: {
      const index = state.details.findIndex(d => d.gazName === action.gazName);
      if (index !== -1) {
        return {
          ...state,
          details: state.details.map((d, i) => {
            if (i === index) {
              return {
                ...d,
                status: true,
              };
            }
            return d;
          }),
        };
      }
      return state;
    }
    case SET_DETAILS_REDUCER_TO_INITIAL: {
      return initialState;
    }
    default:
      return state;
  }
};

export const addToDetails = element => ({
  type: ADD_TO_DETAILS,
  element,
});
export const removeDetail = id => ({
  type: REMOVE_FROM_DETAILS,
  id,
});
export const switchDetailsStatus = (gazName, id) => ({
  type: SWITCH_DETAILS_STATUS,
  gazName,
  id,
});
export const setDetailsStatusToPassive = gazName => ({
  type: SET_DETAILS_STATUS_TO_PASSIVE,
  gazName,
});
export const setDetailsReducerToInitial = () => ({
  type: SET_DETAILS_REDUCER_TO_INITIAL,
});
export const switchIsFilled = id => ({
  type: SWITCH_IS_FILLED,
  id,
});
export const switchIsEssential = id => ({
  type: SWITCH_IS_ESSENTIAL,
  id,
});
export const referencePartOf = (id, element) => ({
  type: REFERENCE_PART_OF,
  id,
  element,
});
export const referencePartOfImage = (id, status, isOpened, isEnlarged, image) => ({
  type: REFERENCE_PART_OF_IMG,
  id,
  status,
  isOpened,
  isEnlarged,
  image,
});
export const changePartOfIsOpened = (id, value) => ({
  type: CHANGE_PART_OF_IS_OPENED,
  id,
  value,
});
export const changePartOfIsEnlarged = (id, value) => ({
  type: CHANGE_PART_OF_IS_ENLARGED,
  id,
  value,
});
export const updateDetails = (id, details) => ({
  type: UPDATE_DETAILS,
  id,
  details,
});
export const switchDetailsStatusToLatest = gazName => ({
  type: SWITCH_DETAILS_STATUS_TO_LATEST,
  gazName,
});

export const removeFromDetails = (gazName, id) => (dispatch, getState) => {
  dispatch(removeDetail(id));
  const separateEntries = getSeparateEntries(getState());
  if (Object.keys(separateEntries).length !== 0) {
    if (separateEntries[gazName].some(separateEntryId => separateEntryId === id)) {
      dispatch(closeSeparateEntry(gazName, id));
      if (separateEntries[gazName]) {
        dispatch(switchDetailsStatusToLatest(gazName));
      }
    }
  }
};

export const handleDetail = (gazName, id) => (dispatch, getState) => {
  dispatch(mouseOut());
  if (getIsResultsHidden(getState())) {
    dispatch(switchResultsHidden(false));
  }
  if (!checkOpenedDetails(getDetails(getState()), id)) {
    dispatch(handleNewDetail(gazName, id));
  } else {
    dispatch(switchDetailsStatus(gazName, id));
    const details = getDetailById(getState(), id);
    dispatch(handleZoomTo(details));
  }
};

const handleNewDetail = (gazName, id) => (dispatch, getState) => {
  if (findUsedGazetteer(getState(), gazName) && checkUsedGazetteersStatus(getState(), gazName)) {
    dispatch(handleEntityFromUsedGazetteers(gazName, id));
  } else {
    dispatch(handleEntityFromNotUsedGazetteers(gazName, id));
  }
};

const handleEntityFromNotUsedGazetteers = (gazName, id) => dispatch => {
  dispatch(expandGazetteers(gazName));
  dispatch(handleNotAvailableEntity(gazName, id));
};

const handleEntityFromUsedGazetteers = (gazName, id) => (dispatch, getState) => {
  dispatch(expandGazetteers(gazName));
  const details = getDetailById(getState(), id);
  if (details) {
    const element = getDetailsObject(gazName, details);
    dispatch(handleZoomTo(element.details));
    dispatch(handleAvailableEntity(element));
  } else {
    dispatch(handleNotAvailableEntity(gazName, id));
  }
};

const handleAvailableEntity = element => dispatch => {
  if (element.gazName === 'gov' && element.details['part-of']) {
    dispatch(handleGOVEntity(element));
  } else {
    dispatch(addToDetails({ loading: false, ...element }));
  }
  dispatch(switchDetailsStatus(element.gazName, element.details.id));
};

const handleNotAvailableEntity = (gazName, id) => (dispatch, getState) => {
  const detail = getDetailsObject(gazName, { id: id });
  dispatch(addToDetails({ loading: true, ...detail }));
  dispatch(switchDetailsStatus(gazName, id));
  resultsAPI
    .getEntityById(gazName, id)
    .then(response => {
      const entity = response.data;
      dispatch(addNotAvailableEntityToOriginalData(gazName, entity));
      const [details] = normalize([entity], gazName);
      details.internId = setInternId(getState, gazName);
      dispatch(setSeparateEntries(gazName, details));
      dispatch(updateDetails(id, details));
      dispatch(handleZoomTo(details));
    })
    .catch(error => {
      const details = handleDetailRequestError(id, error);
      details.internId = setInternId(getState, gazName);
      dispatch(setSeparateEntries(gazName, details));
      dispatch(updateDetails(id, details));
    });
};

const handleGOVEntity = element => dispatch => {
  dispatch(addToDetails({ loading: true, ...element }));
  dispatch(getPartOfInfo(element.details['part-of'], element.details.id));
  dispatch(getPartOfImage(element.details.id));
};

const expandGazetteers = gazName => dispatch => {
  dispatch(setStateOfExpandedOfAGazetteer(gazName, true));
};

const getPartOfInfo = (partOf, id) => dispatch => {
  const promises = handlePartOfRequestWrapper(partOf);
  if (Array.isArray(promises)) {
    Promise.all(promises).then(data => {
      dispatch(referencePartOf(id, data));
    });
  } else if (isObject(promises)) {
    promises.then(data => {
      dispatch(referencePartOf(id, data));
    });
  }
};

const getPartOfImage = id => dispatch => {
  partOfAPI
    .getPartOfPicture(id)
    .then(response => {
      dispatch(
        referencePartOfImage(id, true, false, false, `data:image/gif;base64,${response.data}`)
      );
    })
    .catch(error => {
      const errorMessage = `The part-of image is not found (code ${error.response.status})`;
      dispatch(referencePartOfImage(id, false, false, false, errorMessage));
    });
};

export default detailsReducer;
