// Get parameters for handleAdditionalResultAtSwitchingResultsView and handleAdditionalResultAtSwitchingAdditionalResults being called in switchAdditionalResult in nav-reducer

import { switchCompareHiddenWrapper, switchMatchingsHiddenWrapper } from 'redux/nav-reducer';
import {
  getIsCompareHidden,
  getIsMatchingTableHidden,
} from 'selectors/simple-selectors/nav-selectors';

export const getParametersAtSwitchingAdditionalResults = (
  dispatch,
  getState,
  value,
  isCompare = false
) => {
  const isHidden = isCompare
    ? getIsMatchingTableHidden(getState())
    : getIsCompareHidden(getState());
  const paramsForResultsView = {
    dispatch,
    getState,
    value,
    isHidden,
    switchAnother: isCompare ? switchMatchingsHiddenWrapper : switchCompareHiddenWrapper,
  };
  const paramsForAdditionalResults = {
    dispatch,
    getState,
    value,
    switchAnother: isCompare ? switchCompareHiddenWrapper : switchMatchingsHiddenWrapper,
  };
  return { paramsForResultsView, paramsForAdditionalResults };
};
