import { useSelector } from 'react-redux';
import { getActualBottomContainerHeight } from 'selectors/simple-selectors/map-interaction-selectors';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';

// Hook to control map height

export const useMapHeight = () => {
  const isSideSwitched = useSelector(getIsSideSwitched);
  const actualBottomContainerHeight = useSelector(getActualBottomContainerHeight);
  return isSideSwitched ? `calc(100% - ${actualBottomContainerHeight}px)` : '100%';
};
