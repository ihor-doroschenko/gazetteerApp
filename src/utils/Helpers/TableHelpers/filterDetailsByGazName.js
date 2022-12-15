// Filter details (entities selected to be shown in the detail view) by gazetteer name

export const filterDetailsByGazName = (details, gazName) => {
  return details.filter(el => el.gazName === gazName);
};
