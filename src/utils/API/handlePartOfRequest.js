import { partOfAPI } from 'dal/DALproduction';
import { referenceTypes } from '../Preprocessing/AdditionalNormalizing/referenceTypesGOV/referenceTypes';
import { getPartOfErrorMessage } from './getPartOfErrorMessage';

// Handle part-of request for GOV
export const handlePartOfRequest = element => {
  const { ref, ...rest } = element;
  return partOfAPI
    .getPartOf(ref)
    .then(res => ({ name: res.data.name, type: referenceTypes(res.data.type), ...rest }))
    .catch(error => getPartOfErrorMessage(error, element));
};
