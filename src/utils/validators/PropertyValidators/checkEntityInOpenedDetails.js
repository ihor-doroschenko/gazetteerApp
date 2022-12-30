// Check whether entity is opened in details view

export const checkEntityInOpenedDetails = (array, id) => {
  return array.length !== 0 ? array.some(el => el.detail.id === id) : false;
};
