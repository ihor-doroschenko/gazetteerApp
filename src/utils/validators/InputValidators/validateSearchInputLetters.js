export const validateSearchInputLetters = value => {
  return value && value !== ' ' && value.indexOf('?') === -1;
};
