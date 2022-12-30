// Reducer to control part of the store related to the detail view. It contains state and take actions as arguments to modify the state and return new state

import { partOfAPI } from 'dal/DALproduction';
import { resultsAPI } from 'dal/DALWrapper';
import { getDetailById } from 'selectors/reselectors/getDetailById';
import { getDetails } from 'selectors/simple-selectors/details-selectors';
import { getEntities } from 'selectors/simple-selectors/matching-selectors';
import { getIsResultsHidden } from 'selectors/simple-selectors/nav-selectors';
import { getExternEntities, getUsedGazetteers } from 'selectors/simple-selectors/results-selectors';
import { handlePartOfRequestWrapper } from 'utils/API/handlePartOfRequestWrapper';
import { getDetailsWrapperStructure } from 'utils/FactoryFunctions/getDetailsWrapperStructure';
import { handleAdditionalOperationsForNotAvailableEntity } from 'utils/Helpers/ReducerHelpers/DetailsReducer/handleAdditionalOperationsForNotAvailableEntity';
import { handleDetailRequestError } from 'utils/Helpers/ReducerHelpers/DetailsReducer/handleDetailRequestError';
import { setInternIdForExternEntities } from 'utils/Helpers/ReducerHelpers/DetailsReducer/setInternIdForExternEntities';
import { normalize } from 'utils/Preprocessing/normalizeResults';
import { isGazetteerInUsedGazetteers } from 'utils/validators/isGazetteerInUsedGazetteers';
import { checkEntityInOpenedDetails } from 'utils/validators/PropertyValidators/checkEntityInOpenedDetails';
import { isObject } from 'utils/validators/ValidateDataTypes/validateObject';
import {
  handleZoomToEntity,
  mouseOutMarker,
  mouseOutMarkerInfinite,
} from './map-interaction-reducer';
import { switchResultsHidden } from './nav-reducer';
import { addExternEntityToOriginalData, setExternEntities } from './results-reducer';
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

// State to contain data
let initialState = {
  detailsList: [],
};

// Reducer that takes state and action to modify it
const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DETAILS: {
      return {
        ...state,
        detailsList: [...state.detailsList, action.element],
      };
    }
    case REMOVE_FROM_DETAILS: {
      return {
        ...state,
        detailsList: state.detailsList.filter(detail => detail.detail.id !== action.id),
      };
    }
    case UPDATE_DETAILS: {
      return {
        ...state,
        detailsList: state.detailsList.map(el => {
          if (el.detail.id === action.id) {
            return {
              ...el,
              loading: false,
              detail: action.detail,
            };
          }
          return el;
        }),
      };
    }
    case SWITCH_DETAILS_STATUS: {
      return {
        ...state,
        detailsList: state.detailsList.map(el => {
          if (el.gazName === action.gazName) {
            if (el.detail.id === action.id) {
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
        detailsList: state.detailsList.map(el => {
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
        detailsList: state.detailsList.map(el => {
          if (el.detail.id === id) {
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
        detailsList: state.detailsList.map(el => {
          if (el.detail.id === action.id) {
            return {
              ...el,
              loading: false,
              detail: {
                ...el.detail,
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
        detailsList: state.detailsList.map(el => {
          if (el.detail.id === action.id) {
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
        detailsList: state.detailsList.map(el => {
          if (el.detail.id === id) {
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
export const updateDetails = (id, detail) => ({
  type: UPDATE_DETAILS,
  id,
  detail,
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
    const details = getDetails(getState());
    const entity = details.find(el => el.gazName === gazName && el.detail.id === id);
    dispatch(handleZoomToEntity(entity, gazName));
    dispatch(switchDetailsStatus(gazName, id));
  }
  if (getIsResultsHidden(getState())) {
    dispatch(switchResultsHidden(false));
  }
  dispatch(mouseOutMarker());
  dispatch(mouseOutMarkerInfinite());
};

// Open new entity in detail view
const handleNewDetail = (gazName, id) => (dispatch, getState) => {
  const usedGazetteers = getUsedGazetteers(getState());
  const gazetteerInUsedGazetteers = isGazetteerInUsedGazetteers(usedGazetteers, gazName);
  if (gazetteerInUsedGazetteers) {
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
  const entities = getEntities(getState());
  const detail = getDetailById(entities, id);
  if (detail) {
    const element = getDetailsWrapperStructure(gazName, detail);
    dispatch(handleZoomToEntity(element.detail, gazName));
    dispatch(handleAvailableEntity(element));
  } else {
    // Handle detail view for entity of the gazetteer that was requested in the original search, but does not contain requested entity
    dispatch(handleNotAvailableEntity(gazName, id));
  }
};

// Handle detail view for requested entity of the gazetteer that was not requested in the original search
const handleEntityFromNotUsedGazetteers = (gazName, id) => (dispatch, getState) => {
  dispatch(setStateOfExpandedOfAGazetteer(gazName, true));
  const externEntities = getExternEntities(getState());
  const detail = getDetailById(externEntities, id);
  if (detail) {
    const entity = externEntities[gazName].find(el => el.id === id);
    const element = getDetailsWrapperStructure(gazName, entity);
    dispatch(handleAvailableEntity(element));
  } else {
    dispatch(handleNotAvailableEntity(gazName, id));
  }
};

// Handle detail view for entity of the gazetteer that was requested in the original search and contain requested entity
const handleAvailableEntity = element => dispatch => {
  if (element.gazName === 'gov' && element.detail['part-of']) {
    dispatch(handleGOVEntity(element));
  } else {
    dispatch(addToDetails({ loading: false, ...element }));
  }
  dispatch(switchDetailsStatus(element.gazName, element.detail.id));
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
      const [detail] = normalize([data], gazName);
      detail.internId = setInternIdForExternEntities(getState, gazName);
      handleAdditionalOperationsForNotAvailableEntity(getState, dispatch, gazName, detail);
      dispatch(updateDetails(id, detail));
      dispatch(setExternEntities(gazName, detail));
      dispatch(handleZoomToEntity(detail, gazName));
    })
    // If error, then still set the entity, but with error description
    .catch(error => {
      const detail = handleDetailRequestError(id, error);
      detail.internId = setInternIdForExternEntities(getState, gazName);
      handleAdditionalOperationsForNotAvailableEntity(getState, dispatch, gazName, detail);
      dispatch(setExternEntities(gazName, detail));
      dispatch(updateDetails(id, detail));
    });
};

// Handle additional operations (only for GOV-entities)
const handleGOVEntity = element => dispatch => {
  dispatch(addToDetails({ loading: true, ...element }));
  dispatch(getPartOfInfo(element.detail['part-of'], element.detail.id));
  dispatch(getPartOfImage(element.detail.id));
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
