// Reducer to control part of the store related to the detail view. It contains state and take actions as arguments to modify the state and return new state

import { partOfAPI } from 'dal/DALproduction';
import { resultsAPI } from 'dal/DALWrapper';
import { getDetailById } from 'selectors/reselectors/getDetailById';
import { getDetails } from 'selectors/simple-selectors/details-selectors';
import { getIsResultsHidden } from 'selectors/simple-selectors/nav-selectors';
import { getStatus, getUsedGazetteers } from 'selectors/simple-selectors/results-selectors';
import { handlePartOfRequestWrapper } from 'utils/API/handlePartOfRequestWrapper';
import { getDetailsWrapperStructure } from 'utils/FactoryFunctions/getDetailsWrapperStructure';
import { handleDetailRequestError } from 'utils/Helpers/ReducerHelpers/DetailsReducer/handleDetailRequestError';
import { setInternIdForExternEntities } from 'utils/Helpers/ReducerHelpers/DetailsReducer/setInternIdForExternEntities';
import { normalize } from 'utils/Preprocessing/normalizeResults';
import { checkStatus } from 'utils/validators/checkStatus';
import { IsGazetteerInUsedGazetteers } from 'utils/validators/IsGazetteerInUsedGazetteers';
import { checkEntityInOpenedDetails } from 'utils/validators/PropertyValidators/checkEntityInOpenedDetails';
import { isObject } from 'utils/validators/ValidateDataTypes/validateObject';
import { updateTypes } from './filter-reducer';
import { handleZoomToEntity, mouseOutMarker } from './map-interaction-reducer';
import { switchResultsHidden } from './nav-reducer';
import {
  addExternEntityToMainResults,
  addExternEntityToOriginalData,
  setExternEntities,
} from './results-reducer';
import { setStateOfExpandedOfAGazetteer } from './table-state-reducer';

// Constants for actions names written using the rule of the redux-ducks - reducer/actions
// Adds new entity to detail view
const ADD_TO_DETAILS = 'details/ADD_TO_DETAILS';
// Remove entity to detail view
const REMOVE_FROM_DETAILS = 'details/REMOVE_FROM_DETAILS';
// Update detail entity
const UPDATE_DETAILS = 'details/UPDATE_DETAILS';
// Switch status of the entity in detail view
const SWITCH_DETAILS_STATUS = 'details/SWITCH_DETAILS_STATUS';
// Switch all statuses of opened detail views for current gazetteer to passive
const SET_DETAILS_STATUSES_OF_GAZETTEER_TO_PASSIVE =
  'details/SET_DETAILS_STATUSES_OF_GAZETTEER_TO_PASSIVE';
// Change property of entity opened in detail view
const SWITCH_DETAIL_META_PROPERTY = 'details/SWITCH_DETAIL_META_PROPERTY';
// Reference property "part-of" of the GOV entity
const REFERENCE_PART_OF = 'details/REFERENCE_PART_OF';
// Add "image" property for the GOV entity containing part-of image and meta data to it
const REFERENCE_PART_OF_IMAGE = 'details/REFERENCE_PART_OF_IMAGE';
// Change property of the image property for the GOV entity controlling whether the part-of image is enlarged
const CHANGE_PART_OF_IMAGE_PROPERTY = 'details/CHANGE_PART_OF_IMAGE_PROPERTY';
// Set this part of the store that controlls this reducer to initial values
const SET_DETAILS_REDUCER_TO_INITIAL = 'details/SET_DETAILS_REDUCER_TO_INITIAL';

//TODO: Rename details.details or detail.details
// State to contain data
let initialState = {
  details: [],
};

// Reducer that takes state and action to modify it
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
    case UPDATE_DETAILS: {
      return {
        ...state,
        details: state.details.map(el => {
          if (el.details.id === action.id) {
            return {
              ...el,
              loading: false,
              details: action.details,
            };
          }
          return el;
        }),
      };
    }
    case SWITCH_DETAILS_STATUS: {
      return {
        ...state,
        details: state.details.map(el => {
          if (el.gazName === action.gazName) {
            if (el.details.id === action.id) {
              return {
                ...el,
                status: true,
              };
            } else {
              return {
                ...el,
                status: false,
              };
            }
          } else {
            return el;
          }
        }),
      };
    }
    case SET_DETAILS_STATUSES_OF_GAZETTEER_TO_PASSIVE: {
      return {
        ...state,
        details: state.details.map(el => {
          if (el.gazName === action.gazName) {
            return {
              ...el,
              status: false,
            };
          } else {
            return el;
          }
        }),
      };
    }
    case SWITCH_DETAIL_META_PROPERTY: {
      const { id, property } = action;
      return {
        ...state,
        details: state.details.map(el => {
          if (el.details.id === id) {
            return {
              ...el,
              [property]: !el[property],
            };
          } else {
            return el;
          }
        }),
      };
    }
    case REFERENCE_PART_OF: {
      return {
        ...state,
        details: state.details.map(el => {
          if (el.details.id === action.id) {
            return {
              ...el,
              loading: false,
              details: {
                ...el.details,
                ['part-of']: action.element,
              },
            };
          }
          return el;
        }),
      };
    }
    case REFERENCE_PART_OF_IMAGE: {
      return {
        ...state,
        details: state.details.map(el => {
          if (el.details.id === action.id) {
            return {
              ...el,
              image: {
                status: action.status,
                isOpened: action.isOpened,
                isEnlarged: action.isEnlarged,
                info: action.image,
              },
            };
          }
          return el;
        }),
      };
    }
    case CHANGE_PART_OF_IMAGE_PROPERTY: {
      const { id, value, property } = action;
      return {
        ...state,
        details: state.details.map(el => {
          if (el.details.id === id) {
            return {
              ...el,
              image: {
                ...el.image,
                [property]: value,
              },
            };
          }
          return el;
        }),
      };
    }
    case SET_DETAILS_REDUCER_TO_INITIAL: {
      return initialState;
    }
    default:
      return state;
  }
};

// Action creators to modify the state
export const addToDetails = element => ({
  type: ADD_TO_DETAILS,
  element,
});
export const removeDetail = id => ({
  type: REMOVE_FROM_DETAILS,
  id,
});
export const updateDetails = (id, details) => ({
  type: UPDATE_DETAILS,
  id,
  details,
});
export const switchDetailsStatus = (gazName, id) => ({
  type: SWITCH_DETAILS_STATUS,
  gazName,
  id,
});
export const setDetailsStatusesOfGazetteerToPassive = gazName => ({
  type: SET_DETAILS_STATUSES_OF_GAZETTEER_TO_PASSIVE,
  gazName,
});
export const switchDetailMetaProperty = (id, property) => ({
  type: SWITCH_DETAIL_META_PROPERTY,
  id,
  property,
});
export const referencePartOf = (id, element) => ({
  type: REFERENCE_PART_OF,
  id,
  element,
});
export const referencePartOfImage = (id, status, isOpened, isEnlarged, image) => ({
  type: REFERENCE_PART_OF_IMAGE,
  id,
  status,
  isOpened,
  isEnlarged,
  image,
});
export const changePartOfImageProperty = (id, property, value) => ({
  type: CHANGE_PART_OF_IMAGE_PROPERTY,
  id,
  property,
  value,
});
export const setDetailsReducerToInitial = () => ({
  type: SET_DETAILS_REDUCER_TO_INITIAL,
});

// Thunk creators to modify state under more complex conditions. Often contains asynchronous operations or multiple action calls

// Open detail view for required entity
export const handleDetail = (gazName, id) => (dispatch, getState) => {
  const checkedEntityInOpenedDetails = checkEntityInOpenedDetails(getDetails(getState()), id);
  // If the entity is not opened
  if (!checkedEntityInOpenedDetails) {
    dispatch(handleNewDetail(gazName, id));
    // If the entity is opened, but not selected
  } else {
    const details = getDetailById(getState(), id);
    dispatch(handleZoomToEntity(details, gazName));
    dispatch(switchDetailsStatus(gazName, id));
  }
  if (getIsResultsHidden(getState())) {
    dispatch(switchResultsHidden(false));
  }
  dispatch(mouseOutMarker());
};

// Open new entity in detail view
const handleNewDetail = (gazName, id) => (dispatch, getState) => {
  const usedGazetteers = getUsedGazetteers(getState());
  const statuses = getStatus(getState());
  const gazetteerInUsedGazetteers = IsGazetteerInUsedGazetteers(usedGazetteers, gazName);
  const checkedStatus = checkStatus(statuses[gazName], 'done');
  if (gazetteerInUsedGazetteers && checkedStatus) {
    // If the gazetteer of requested entity was requested in the original search
    dispatch(handleEntityFromUsedGazetteers(gazName, id));
  } else {
    // If the gazetteer of requested entity was not requested in the original search
    dispatch(handleEntityFromNotUsedGazetteers(gazName, id));
  }
};

// Handle detail view for requested entity of the gazetteer that was requested in the original search
const handleEntityFromUsedGazetteers = (gazName, id) => (dispatch, getState) => {
  dispatch(setStateOfExpandedOfAGazetteer(gazName, true));
  const details = getDetailById(getState(), id);
  if (details) {
    const element = getDetailsWrapperStructure(gazName, details);
    dispatch(handleZoomToEntity(element.details, gazName));
    dispatch(handleAvailableEntity(element));
  } else {
    // Handle detail view for entity of the gazetteer that was requested in the original search, but does not contain requested entity
    dispatch(handleNotAvailableEntity(gazName, id));
  }
};

// Handle detail view for requested entity of the gazetteer that was not requested in the original search
const handleEntityFromNotUsedGazetteers = (gazName, id) => dispatch => {
  dispatch(setStateOfExpandedOfAGazetteer(gazName, true));
  dispatch(handleNotAvailableEntity(gazName, id));
};

// Handle detail view for entity of the gazetteer that was requested in the original search and contain requested entity
const handleAvailableEntity = element => dispatch => {
  if (element.gazName === 'gov' && element.details['part-of']) {
    dispatch(handleGOVEntity(element));
  } else {
    dispatch(addToDetails({ loading: false, ...element }));
  }
  dispatch(switchDetailsStatus(element.gazName, element.details.id));
};

// Handle detail view for entity of the gazetteer that was either not requested in the original search or does not contain requested entity
const handleNotAvailableEntity = (gazName, id) => (dispatch, getState) => {
  const detail = getDetailsWrapperStructure(gazName, { id: id });
  dispatch(addToDetails({ loading: true, ...detail }));
  dispatch(switchDetailsStatus(gazName, id));
  resultsAPI
    .getEntityById(gazName, id)
    .then(({ data }) => {
      dispatch(addExternEntityToOriginalData(gazName, data));
      const [details] = normalize([data], gazName);
      details.internId = setInternIdForExternEntities(getState, gazName);
      const usedGazetteers = getUsedGazetteers(getState());
      const isUsedGazetteer = IsGazetteerInUsedGazetteers(usedGazetteers, gazName);
      if (isUsedGazetteer) {
        dispatch(addExternEntityToMainResults(gazName, details));
        if (details.hasOwnProperty('type')) {
          dispatch(updateTypes(details.type, gazName));
        }
      }
      dispatch(setExternEntities(gazName, details));
      dispatch(updateDetails(id, details));
      dispatch(handleZoomToEntity(details, gazName));
    })
    // If error, then still set the entity, but with error description
    .catch(error => {
      const details = handleDetailRequestError(id, error);
      dispatch(setExternEntities(gazName, details));
      details.internId = setInternIdForExternEntities(getState, gazName);
      dispatch(updateDetails(id, details));
    });
};

// Handle additional operations (only for GOV-entities)
const handleGOVEntity = element => dispatch => {
  dispatch(addToDetails({ loading: true, ...element }));
  dispatch(getPartOfInfo(element.details['part-of'], element.details.id));
  dispatch(getPartOfImage(element.details.id));
};

// Get administative information about GOV entity
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

// Get administative information about GOV entity in form of graph visualization
const getPartOfImage = id => dispatch => {
  partOfAPI
    .getPartOfPicture(id)
    .then(response => {
      dispatch(
        referencePartOfImage(id, true, false, false, `data:image/gif;base64,${response.data}`)
      );
    })
    // if error, show error message
    .catch(error => {
      const errorMessage = `The part-of image is not found (code ${error.response.status})`;
      dispatch(referencePartOfImage(id, false, false, false, errorMessage));
    });
};

export default detailsReducer;
