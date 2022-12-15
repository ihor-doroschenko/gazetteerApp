// Validate if place name input for intended request is correct

export const validatePlaceNameInput = value => {
  return value && value !== ' ' && value.indexOf('?') === -1;
};
