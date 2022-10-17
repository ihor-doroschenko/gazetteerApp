import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCompareWidthWrapper } from 'redux/table-state-reducer';
import { getEntitiesToCompare, getSlideAmount } from 'selectors/simple-selectors/compare-selectors';
import { getCompareWidth } from 'selectors/simple-selectors/table-state-selectors';

// TODO: refactoring

export function useCompareTableAutomaticSlideAmountCalculation(maxCompareWidth, setCompareWidth) {
  const dispatch = useDispatch();
  const entitiesToCompare = useSelector(getEntitiesToCompare);
  const slideAmount = useSelector(getSlideAmount);
  const compareWidth = useSelector(getCompareWidth);
  useEffect(() => {
    // if new entity is added to the compare table, it will check, whether the compare table can be automatically resized to show as many added entities to compare as possible
    if (entitiesToCompare.length > slideAmount) {
      const compareWidthUpdated = compareWidth + 200;
      if (compareWidthUpdated < maxCompareWidth) {
        setCompareWidth(compareWidthUpdated);
        dispatch(setCompareWidthWrapper(compareWidthUpdated));
      }
    }
  }, [entitiesToCompare]);
}
