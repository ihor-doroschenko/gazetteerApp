import { isObject } from '../validators/ValidateDataTypes/validateObject';
import { handlePartOfRequest } from './handlePartOfRequest';

// Handle part-of request for GOV for one or multiple elements
export const handlePartOfRequestWrapper = partOf => {
  if (Array.isArray(partOf)) {
    return partOf.map(el => handlePartOfRequest(el));
  }
  if (isObject(partOf)) {
    return handlePartOfRequest(partOf);
  }
};
