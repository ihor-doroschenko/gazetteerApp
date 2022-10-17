const checkStatus = el => {
  return el.status;
};

const getShouldOpen = array => {
  const index = array.findIndex(checkStatus);
  return index === -1 ? 0 : index + 1;
};

export const handleTabState = detailsFiltered => {
  return getShouldOpen(detailsFiltered);
};
