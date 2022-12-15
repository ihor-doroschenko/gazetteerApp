// Get first index of current page and first index of next page

export const getFirstIndexesOfCurrentAndNextPages = (currentPage, tabsPerPage) => {
  return [currentPage * tabsPerPage - tabsPerPage, currentPage * tabsPerPage];
};
