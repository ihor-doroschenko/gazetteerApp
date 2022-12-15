import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getResultsBottomHeight,
  getResultsBottomMinHeight,
} from 'selectors/simple-selectors/table-state-selectors';

// Hook to control dimensions of search window if results table is in bottom view

export function useSearchBottomDimensions() {
  const [resized, setResized] = useState(false);
  const bottomMinHeight = useSelector(getResultsBottomMinHeight);
  const bottomHeight = useSelector(getResultsBottomHeight);

  useEffect(() => {
    if (bottomHeight > bottomMinHeight) {
      setResized(true);
    } else {
      setResized(false);
    }
  }, [bottomHeight]);

  const actualHeight = bottomHeight > bottomMinHeight ? bottomHeight : bottomMinHeight;

  return { resized, actualHeight };
}
