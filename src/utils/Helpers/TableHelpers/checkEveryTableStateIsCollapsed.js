export function checkEveryTableStateIsCollapsed(tableState) {
  return Object.values(tableState).every(el => !el);
}
