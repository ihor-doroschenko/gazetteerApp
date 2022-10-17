export const isAdditionalTableNotHiddenAtViewSwitching = (isSwitched, value, isHidden) => {
  if (isSwitched && !value && !isHidden) {
    return true;
  }
};
