import { getRequestErrorText } from 'utils/TextHandlers/getRequestErrorText';

export const handleDetailRequestError = (id, error) => {
  return {
    id: id,
    name: '',
    error: getRequestErrorText(error.response),
  };
};
