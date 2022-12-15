// Check whether all subtables i nthe results table are collapsed

export function checkEveryTableStateIsCollapsed(tableState) {
  return Object.values(tableState).every(el => !el);
}
