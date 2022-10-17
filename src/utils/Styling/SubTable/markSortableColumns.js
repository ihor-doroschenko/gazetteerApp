export const markSortableColumns = value => {
  if (value) {
    return {
      className: 'sort',
    };
  }
  return {};
};
