import { defaultSearchWidthPercentage } from 'constants/numericConstants';
import useWindowDimensions from 'Hooks/useWindowDimensions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchGlobalWidth } from 'redux/table-state-reducer';
import { getSearchWidth } from 'selectors/simple-selectors/table-state-selectors';

// Hook to control search width

export function useSearchWidth(newWidth) {
  const dispatch = useDispatch();
  const searchWidthGlobal = useSelector(getSearchWidth);
  const [searchWidth, setSearchWidth] = useState(searchWidthGlobal);
  let { width } = useWindowDimensions();

  useEffect(() => {
    // set standard search width of 30% of window width
    let actualWidth = (defaultSearchWidthPercentage * width) / 100;
    setSearchWidth(actualWidth);
    dispatch(setSearchGlobalWidth(actualWidth));
  }, [width]);

  useEffect(() => {
    if (newWidth) {
      setSearchWidth(newWidth);
    }
  }, [newWidth]);

  return { searchWidth, setSearchWidth };
}
