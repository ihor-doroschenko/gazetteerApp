import { getRightContainerDimensions } from 'constants/getRightContainerMaxWidth';
import { useHiddenValuesForAllResultWindows } from 'Hooks/useHiddenValuesForAllResultWindows';
import useWindowDimensions from 'Hooks/useWindowDimensions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllResultWindowWidthsToInitial } from 'redux/table-state-reducer';
import {
  getCompareWidth,
  getMatchingsWidth,
  getResultsBlockRightWidth,
} from 'selectors/simple-selectors/table-state-selectors';
import { useCompareTableAutomaticSlideAmountCalculation } from './useCompareTableAutomaticSlideAmountCalculation';
import { useDimensionSynchronisation } from './useDimensionSynchronisation';
import { useResultsElementsMaxDimensions } from './useResultsElementsMaxDimensions';
import { useSearchSwitchController } from './useSearchSwitchController';
//TODO
export function useRightContainerTableDimensions() {
  const dispatch = useDispatch();
  const { isMatchingTableHidden, isCompareHidden } = useHiddenValuesForAllResultWindows();
  const resultsWidth = useSelector(getResultsBlockRightWidth);
  const compareGlobalWidth = useSelector(getCompareWidth);
  const matchingsGlobalWidth = useSelector(getMatchingsWidth);
  const { width } = useWindowDimensions();
  const { rightContainerMaxWidth, rightContainerElementDefaultWidth } =
    getRightContainerDimensions();

  const maxWidth = (rightContainerMaxWidth * width) / 100;

  const [maxResultsWidth, setMaxResultsWidth] = useState(maxWidth);
  const [resultsLocalWidth, setResultsLocalWidth] = useState(resultsWidth);
  const [maxCompareWidth, setMaxCompareWidth] = useState(maxWidth - resultsLocalWidth);
  const [compareWidth, setCompareWidth] = useState(compareGlobalWidth);
  const [maxMatchingsWidth, setMaxMatchingsWidth] = useState(
    maxWidth - resultsLocalWidth - compareWidth
  );
  const [matchingsWidth, setMatchingsWidth] = useState(matchingsGlobalWidth);

  useSearchSwitchController();

  useCompareTableAutomaticSlideAmountCalculation(maxCompareWidth, setCompareWidth);

  useDimensionSynchronisation(setResultsLocalWidth, setCompareWidth, setMatchingsWidth);

  useResultsElementsMaxDimensions({
    maxWidth,
    resultsLocalWidth,
    matchingsWidth,
    compareWidth,
    setMaxResultsWidth,
    setMaxMatchingsWidth,
    setMaxCompareWidth,
  });

  useEffect(() => {
    if (!isCompareHidden || !isMatchingTableHidden) {
      setMaxResultsWidth(maxWidth - compareWidth - matchingsWidth);
      setMaxCompareWidth(maxWidth - resultsLocalWidth - matchingsWidth);
      setMaxMatchingsWidth(maxWidth - resultsLocalWidth - compareWidth);
      if (
        !isCompareHidden &&
        !isMatchingTableHidden &&
        resultsLocalWidth + compareWidth + matchingsWidth > maxWidth
      ) {
        setCompareWidth(rightContainerElementDefaultWidth);
        setResultsLocalWidth(rightContainerElementDefaultWidth);
        setMatchingsWidth(rightContainerElementDefaultWidth);
        dispatch(setAllResultWindowWidthsToInitial());
      }
    } else {
      setMaxResultsWidth(maxWidth);
    }
  }, [isCompareHidden, isMatchingTableHidden]);

  return {
    compareDimensions: {
      setElementWidth: setCompareWidth,
      elementWidth: compareWidth,
      maxWidth,
      maxElementWidth: maxCompareWidth,
    },
    matchingsDimensions: {
      setElementWidth: setMatchingsWidth,
      elementWidth: matchingsWidth,
      maxWidth,
      maxElementWidth: maxMatchingsWidth,
    },
    resultsDimensions: { setResultsLocalWidth, resultsLocalWidth, maxResultsWidth },
  };
}
