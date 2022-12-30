import { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getIsSearch } from 'selectors/simple-selectors/nav-selectors';
import { getIsSideContainerBiggerThanMaxWidth } from 'utils/Dimensions/getIsSideContainerBiggerThanMaxWidth';
import { handleDimensionsAutomatically } from 'utils/Dimensions/handleDimensionsAutomatically';

// Hook to show/hide search area

export function useSearchSwitchController() {
  const dispatch = useDispatch();
  const { getState } = useStore();
  const isSearch = useSelector(getIsSearch);
  useEffect(() => {
    // if the size of Results and/or Matchings and/or Compare tables together are more than 70% of the screen width, then hide Compare Table
    // is run only on change in isSearch, that is why getState is used instead of nested hook for better code readability
    const isRightContainerBiggerThanMaxWidth = getIsSideContainerBiggerThanMaxWidth(getState);
    if (isSearch && isRightContainerBiggerThanMaxWidth) {
      handleDimensionsAutomatically(dispatch, getState);
    }
  }, [isSearch]);
}
