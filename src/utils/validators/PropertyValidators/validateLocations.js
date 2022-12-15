import { isNumeric } from '../ValidateDataTypes/validateNumber';

// Check whether the element has valid spatial coordinates

export const validateLocations = element => {
  if (element.hasOwnProperty('position')) {
    const [lat, lng] = element.position;
    if (isNumeric(lat) && isNumeric(lng)) {
      return true;
    }
  }
  return false;
};
