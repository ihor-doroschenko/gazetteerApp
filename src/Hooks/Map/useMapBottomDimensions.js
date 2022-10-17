import { useSelector } from 'react-redux';
import { getIsSearch, getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import {
  getCompareToolDashboardWidth,
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
  const compareToolDashboardWidth = useSelector(getCompareToolDashboardWidth);
  const { width } = useSelector(getWindowDimensions);
  const matchingOrCompare = useIsMatchingsOrCompare();

  if (isSideSwitched) {
    const marginRight = matchingOrCompare ? compareToolDashboardWidth : '0px';
    if (isSearch) {
      let marginLeft = searchWidth;
      let actualWidth = getMapWidthBottom(matchingOrCompare, `${width - searchWidth}px`);
      return { actualWidth, marginLeft, marginRight };
    }
    let marginLeft = '0%';
    let actualWidth = getMapWidthBottom(matchingOrCompare, '100%');
    return { actualWidth, marginLeft, marginRight };
  }
};
