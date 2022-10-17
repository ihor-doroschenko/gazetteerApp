import { useTheLowestValidResolution } from 'Hooks/useTheLowestValidResolution';
import { useSelector } from 'react-redux';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import {
  getResultsBlockRightWidth,
  getSearchWidth,
} from 'selectors/simple-selectors/table-state-selectors';
import { getMapActualWidthSideView } from 'utils/Helpers/MapHelpers/getMapActualWidthSideView';
import { useCheckHightSideResultsForMap } from './useCheckHightSideResultsForMap';

// Hook to get dimensions for map if the results are in side view

export const useMapSideDimensions = () => {
  const isSideSwitched = useSelector(getIsSideSwitched);
  const resultsWidth = useSelector(getResultsBlockRightWidth);
  const searchWidth = useSelector(getSearchWidth);
  const lowestResolution = useTheLowestValidResolution();
  const hightSideResultsForMap = useCheckHightSideResultsForMap();

  if (!isSideSwitched) {
    let marginLeft = lowestResolution ? `${searchWidth}px` : '0%';
    if (hightSideResultsForMap) {
      let actualWidth = getMapActualWidthSideView(resultsWidth, searchWidth, lowestResolution);
      let marginRight = `${resultsWidth}px)`;
      return { actualWidth, marginLeft, marginRight };
    }
    let actualWidth = `calc(100% - ${lowestResolution ? searchWidth : 0}px)`;
    let marginRight = '0%';
    return { actualWidth, marginLeft, marginRight };
  }
};
