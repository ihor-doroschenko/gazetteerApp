export const getFirstAndLastPages = (currentPage, tabsPerPage) => {
  return [currentPage * tabsPerPage - tabsPerPage, currentPage * tabsPerPage];
};
