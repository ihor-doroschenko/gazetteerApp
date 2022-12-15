import { useSelector } from 'react-redux';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import { getResultsBottomHeight } from 'selectors/simple-selectors/table-state-selectors';

// Hook to control map height

export const useMapHeight = () => {
  const isSideSwitched = useSelector(getIsSideSwitched);
  const resultsBottomHeight = useSelector(getResultsBottomHeight);
  return isSideSwitched ? `calc(100% - ${resultsBottomHeight}px)` : '100%';
};
