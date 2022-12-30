import { defaultExtraSpace } from 'constants/numericConstants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCompareWidthWrapper } from 'redux/table-state-reducer';
import { getEntitiesToCompare, getSlideAmount } from 'selectors/simple-selectors/compare-selectors';
import { getCompareWidth } from 'selectors/simple-selectors/table-state-selectors';

// Hook to automatically calculate amount of slides in compare table depending on the width

export function useCompareTableAutomaticSlideAmountCalculation(maxCompareWidth, setCompareWidth) {
  const dispatch = useDispatch();
  const entitiesToCompare = useSelector(getEntitiesToCompare);
  const slideAmount = useSelector(getSlideAmount);
  const compareSideWidth = useSelector(getCompareWidth);
  useEffect(() => {
    // if new entity is added to the compare table, it will check, whether the compare table can be automatically resized to show as many added entities to compare as possible
    if (entitiesToCompare.length > slideAmount) {
      const newWidth = compareSideWidth + defaultExtraSpace;
      if (newWidth < maxCompareWidth) {
        setCompareWidth(newWidth);
        dispatch(setCompareWidthWrapper(newWidth));
      }
    }
  }, [entitiesToCompare]);
}
