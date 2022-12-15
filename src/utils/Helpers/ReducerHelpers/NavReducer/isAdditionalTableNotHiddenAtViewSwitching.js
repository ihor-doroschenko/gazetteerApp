// Check whether another table with additional results (if called handling matchings, compare view is meant; if called handling compare, matching is meant) is visible at results view switching (e.g. from side to bottom)

export const isAdditionalTableNotHiddenAtViewSwitching = (isSwitched, value, isHidden) => {
  if (isSwitched && !value && !isHidden) {
    return true;
  }
};
