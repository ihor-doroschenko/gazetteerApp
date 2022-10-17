export const getCurrentEntriesLength = (filteredEntries, entries, combinedFilterValues) => {
  const maxVisibleRowsSideView = 5;
  if (combinedFilterValues.length !== 0) {
    if (entries.length <= maxVisibleRowsSideView) {
      return entries.length;
    } else {
      if (filteredEntries.length <= maxVisibleRowsSideView) {
        return maxVisibleRowsSideView;
      }
      return filteredEntries.length;
    }
  }
  return entries.length;
};
