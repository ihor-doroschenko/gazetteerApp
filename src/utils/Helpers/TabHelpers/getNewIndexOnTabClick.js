export const getNewIndexOnTabClick = (index, currentPage, tabsPerPage) => {
  return index !== 0 ? (currentPage - 1) * tabsPerPage + index : index;
};
