import { getRequestErrorText } from 'utils/TextHandlers/getRequestErrorText';

// Generate an object containing necessary information about failure in request to get an entity by id (the getEntityById method of the resultsAPI API of the DAL)

export const handleDetailRequestError = (id, error) => {
  return {
    id: id,
    name: '',
    error: getRequestErrorText(error.response),
  };
};
