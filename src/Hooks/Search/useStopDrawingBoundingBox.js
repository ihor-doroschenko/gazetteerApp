import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSearchCoordinates } from 'selectors/simple-selectors/search-selectors';

// Hook to stop drawing bounding box and to switch the tool to remove mode

export function useStopDrawingBoundingBox({ setShouldDraw, setShouldRemove }) {
  const coordinates = useSelector(getSearchCoordinates);
  useEffect(() => {
    if (coordinates.length !== 0) {
      setShouldDraw(false);
      setShouldRemove(true);
    }
  }, [coordinates]);
}
