export const filterDetailsByGazName = (details, gazName) => {
  return details.filter(el => el.gazName === gazName);
};
