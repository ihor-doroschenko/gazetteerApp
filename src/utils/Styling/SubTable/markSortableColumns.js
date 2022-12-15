// Assign additional class "sort" to sortable columns for subtables of the results table

export const markSortableColumns = value => {
  if (value) {
    return {
      className: 'sort',
    };
  }
  return {};
};
