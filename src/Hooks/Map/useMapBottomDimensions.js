import { useSelector } from 'react-redux';
import { getIsSearch, getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import {
  getAdditionalResultsBottomWidth,
  getSearchWidth,
  getWindowDimensions,
} from 'selectors/simple-selectors/table-state-selectors';
import { getMapWidthBottom } from '../../utils/Helpers/MapHelpers/getMapWidthBottom';
import { useIsMatchingsOrCompare } from '../useIsMatchingsOrCompare';

// Hook to get dimensions for map if the results are in bottom view

export const useMapBottomDimensions = () => {
  const isSideSwitched = useSelector(getIsSideSwitched);
  const isSearch = useSelector(getIsSearch);
  const searchWidth = useSelector(getSearchWidth);
  const additionalResultsBottomWidth = useSelector(getAdditionalResultsBottomWidth);
  const { width } = useSelector(getWindowDimensions);
  const matchingOrCompare = useIsMatchingsOrCompare();

  if (isSideSwitched) {
    const marginRight = matchingOrCompare ? additionalResultsBottomWidth : '0px';
    if (isSearch) {
      let marginLeft = searchWidth;
      let actualWidth = getMapWidthBottom(
        matchingOrCompare,
        additionalResultsBottomWidth,
        `${width - searchWidth}px`
      );
      return { actualWidth, marginLeft, marginRight };
    }
    let marginLeft = '0%';
    let actualWidth = getMapWidthBottom(matchingOrCompare, additionalResultsBottomWidth, '100%');
    return { actualWidth, marginLeft, marginRight };
  }
};
