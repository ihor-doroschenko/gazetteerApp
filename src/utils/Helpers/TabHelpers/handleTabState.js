// Handle index of tabs by changing the details (entities selected for the detail view) array

export const handleTabState = detailsFiltered => {
  const index = detailsFiltered.findIndex(el => el.status);
  return index === -1 ? 0 : index + 1;
};
