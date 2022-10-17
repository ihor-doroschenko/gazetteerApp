export const checkOpenedDetails = (array, id) => {
  return array.length !== 0 ? array.some(el => el.details.id === id) : false;
};
