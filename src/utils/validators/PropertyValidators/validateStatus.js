export const validateStatus = value => {
  if (Object.values(value).length !== 0 && !Object.values(value).includes('isFetching')) {
    return true;
  }
  return false;
};
