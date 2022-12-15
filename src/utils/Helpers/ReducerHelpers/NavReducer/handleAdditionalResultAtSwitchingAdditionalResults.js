import {
  getIsCompareTool,
  getIsMatching,
  getIsSideSwitched,
} from 'selectors/simple-selectors/nav-selectors';

// Handle additional results (compare or matchings view) at switching them, while the results are in bottom view

export const handleAdditionalResultAtSwitchingAdditionalResults = params => {
  const { dispatch, getState, value, switchAnother } = params;
  const isSwitched = getIsSideSwitched(getState());
  const isCompareTool = getIsCompareTool(getState());
  const isMatchings = getIsMatching(getState());
  if (isSwitched && isCompareTool && isMatchings) {
    setTimeout(() => dispatch(switchAnother(value)), 1500);
  } else {
    dispatch(switchAnother(value));
  }
};
