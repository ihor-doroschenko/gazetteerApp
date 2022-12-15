import { useTheLowestValidResolution } from 'Hooks/useTheLowestValidResolution';
import { useSelector } from 'react-redux';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { getResultsWidth, getSearchWidth } from 'selectors/simple-selectors/table-state-selectors';
import { getMapWidthSideView } from 'utils/Helpers/MapHelpers/getMapWidthSideView';
import { useCheckHightSideResultsForMap } from './useCheckHightSideResultsForMap';

// Hook to get dimensions for map if the results are in side view

export const useMapSideDimensions = () => {
  const isSideSwitched = useSelector(getIsSideSwitched);
  const resultsSideWidth = useSelector(getResultsWidth);
  const searchWidth = useSelector(getSearchWidth);
  const lowestResolution = useTheLowestValidResolution();
  const hightSideResultsForMap = useCheckHightSideResultsForMap();

  if (!isSideSwitched) {
    let marginLeft = lowestResolution ? `${searchWidth}px` : '0%';
    if (hightSideResultsForMap) {
      let actualWidth = getMapWidthSideView(resultsSideWidth, searchWidth, lowestResolution);
      let marginRight = `${resultsSideWidth}px)`;
      return { actualWidth, marginLeft, marginRight };
    }
    let actualWidth = `calc(100% - ${lowestResolution ? searchWidth : 0}px)`;
    let marginRight = '0%';
    return { actualWidth, marginLeft, marginRight };
  }
};
