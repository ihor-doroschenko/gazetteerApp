// Get gazetteer status depending on the status of the data from the request

export const getCurrentStatusOfRequest = data => {
  if (data === undefined) {
    return 'error';
  }
  return data === null || data.length === 0 ? 'noData' : 'done';
};
