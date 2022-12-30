// Filter details (entities selected to be shown in the detail view) by gazetteer name

export const filterDetailsByGazName = (detailsList, gazName) => {
  return detailsList.filter(el => el.gazName === gazName);
};
