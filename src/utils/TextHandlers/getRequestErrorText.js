// Get text for request error (resultsAPI.getMainResults, resultsAPI.getEntityById)

export const getRequestErrorText = response => {
  if (response) {
    return `${response.statusText} (code ${response.status})`;
  }
  return 'unknown error occured';
};
