export const getRequestErrorText = response => {
  if (response) {
    return `${response.statusText} (code ${response.status})`;
  }
  return 'unknown error occured';
};
