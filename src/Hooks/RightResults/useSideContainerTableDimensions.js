import { defaultElementWidth, rightContainerMaxWidthPercentage } from 'constants/numericConstants';
import { useHiddenValuesForAllResultWindows } from 'Hooks/useHiddenValuesForAllResultWindows';
import useWindowDimensions from 'Hooks/useWindowDimensions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllResultWindowWidthsToInitial } from 'redux/table-state-reducer';
import {
  getCompareWidth,
  getMatchingsWidth,
  getResultsWidth,
} from 'selectors/simple-selectors/table-state-selectors';
import { useCompareTableAutomaticSlideAmountCalculation } from './useCompareTableAutomaticSlideAmountCalculation';
import { useDimensionSynchronisation } from './useDimensionSynchronisation';
import { useResultsElementsMaxDimensions } from './useResultsElementsMaxDimensions';
import { useSearchSwitchController } from './useSearchSwitchController';

// Hook to control dimensions of the results tables in side view

export function useSideContainerTableDimensions() {
  const dispatch = useDispatch();
  const { isMatchingTableHidden, isCompareHidden } = useHiddenValuesForAllResultWindows();
  const resultsSideWidth = useSelector(getResultsWidth);
  const compareGlobalWidth = useSelector(getCompareWidth);
  const matchingsGlobalWidth = useSelector(getMatchingsWidth);
  const { width } = useWindowDimensions();
  const maxWidth = (rightContainerMaxWidthPercentage * width) / 100;

  const [maxResultsWidth, setMaxResultsWidth] = useState(maxWidth);
  const [resultsLocalWidth, setResultsLocalWidth] = useState(resultsSideWidth);
  const [maxCompareWidth, setMaxCompareWidth] = useState(maxWidth - resultsLocalWidth);
  const [compareSideWidth, setCompareWidth] = useState(compareGlobalWidth);
  const [maxMatchingsWidth, setMaxMatchingsWidth] = useState(
    maxWidth - resultsLocalWidth - compareSideWidth
  );
  const [matchingsSideWidth, setMatchingsWidth] = useState(matchingsGlobalWidth);

  useSearchSwitchController();

  useCompareTableAutomaticSlideAmountCalculation(maxCompareWidth, setCompareWidth);

  useDimensionSynchronisation(setResultsLocalWidth, setCompareWidth, setMatchingsWidth);

  useResultsElementsMaxDimensions({
    maxWidth,
    resultsLocalWidth,
    matchingsSideWidth,
    compareSideWidth,
    setMaxResultsWidth,
    setMaxMatchingsWidth,
    setMaxCompareWidth,
  });

  useEffect(() => {
    if (!isCompareHidden || !isMatchingTableHidden) {
      setMaxResultsWidth(maxWidth - compareSideWidth - matchingsSideWidth);
      setMaxCompareWidth(maxWidth - resultsLocalWidth - matchingsSideWidth);
      setMaxMatchingsWidth(maxWidth - resultsLocalWidth - compareSideWidth);
      if (
        !isCompareHidden &&
        !isMatchingTableHidden &&
        resultsLocalWidth + compareSideWidth + matchingsSideWidth > maxWidth
      ) {
        setCompareWidth(defaultElementWidth);
        setResultsLocalWidth(defaultElementWidth);
        setMatchingsWidth(defaultElementWidth);
        dispatch(setAllResultWindowWidthsToInitial());
      }
    } else {
      setMaxResultsWidth(maxWidth);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCompareHidden, isMatchingTableHidden]);

  return {
    compareDimensions: {
      setElementWidth: setCompareWidth,
      elementWidth: compareSideWidth,
      maxWidth,
      maxElementWidth: maxCompareWidth,
    },
    matchingsDimensions: {
      setElementWidth: setMatchingsWidth,
      elementWidth: matchingsSideWidth,
      maxWidth,
      maxElementWidth: maxMatchingsWidth,
    },
    resultsDimensions: { setResultsLocalWidth, resultsLocalWidth, maxResultsWidth },
  };
}
