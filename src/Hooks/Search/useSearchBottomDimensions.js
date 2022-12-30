import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import {
  getResultsBottomHeight,
  getResultsBottomMinHeight,
} from 'selectors/simple-selectors/table-state-selectors';

// Hook to control dimensions of search area if results table is in bottom view

export function useSearchBottomDimensions() {
  const [resized, setResized] = useState(false);
  const bottomMinHeight = useSelector(getResultsBottomMinHeight);
  const bottomHeight = useSelector(getResultsBottomHeight);
  const isSideSwitched = useSelector(getIsSideSwitched);

  useEffect(() => {
    if (bottomHeight > bottomMinHeight) {
      setResized(true);
    } else {
      setResized(false);
    }
  }, [bottomHeight]);

  useEffect(() => {
    if (!isSideSwitched) {
      setResized(false);
    }
  }, [isSideSwitched]);

  const actualHeight = bottomHeight > bottomMinHeight ? bottomHeight : bottomMinHeight;

  return { resized, actualHeight };
}
