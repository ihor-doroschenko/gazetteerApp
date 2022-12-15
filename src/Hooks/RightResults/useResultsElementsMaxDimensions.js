import { useHiddenValuesForAllResultWindows } from 'Hooks/useHiddenValuesForAllResultWindows';
import { useEffect } from 'react';
// TODO
export function useResultsElementsMaxDimensions(props) {
  const { isCompareHidden, isMatchingTableHidden, isResultsHidden } =
    useHiddenValuesForAllResultWindows();

  useEffect(() => {
    if (!isMatchingTableHidden && !isCompareHidden) {
      handleAllElementMaxDimensions(props);
    } else if (!isMatchingTableHidden) {
      handlResultsAndMatchingsMaxDimensions(props);
    } else if (!isCompareHidden) {
      handleCompareAndResultsMaxDimensions(props);
    }
  }, [props.resultsLocalWidth]);

  useEffect(() => {
    if (!isResultsHidden && !isMatchingTableHidden) {
      handleAllElementMaxDimensions(props);
    } else if (!isResultsHidden) {
      handleCompareAndResultsMaxDimensions(props);
    } else if (!isMatchingTableHidden) {
      handleCompareAndMatchingMaxDimensions(props);
    }
  }, [props.compareSideWidth]);

  useEffect(() => {
    if (!isResultsHidden && !isCompareHidden) {
      handleAllElementMaxDimensions(props);
    } else if (!isResultsHidden) {
      handlResultsAndMatchingsMaxDimensions(props);
    } else if (!isCompareHidden) {
      handleCompareAndMatchingMaxDimensions(props);
    }
  }, [props.matchingsSideWidth]);
}

const handleAllElementMaxDimensions = props => {
  const {
    maxWidth,
    resultsLocalWidth,
    matchingsSideWidth,
    compareSideWidth,
    setMaxResultsWidth,
    setMaxMatchingsWidth,
    setMaxCompareWidth,
  } = props;
  setMaxResultsWidth(maxWidth - matchingsSideWidth - compareSideWidth);
  setMaxMatchingsWidth(maxWidth - resultsLocalWidth - compareSideWidth);
  setMaxCompareWidth(maxWidth - resultsLocalWidth - matchingsSideWidth);
};

const handleCompareAndMatchingMaxDimensions = props => {
  const {
    maxWidth,
    matchingsSideWidth,
    compareSideWidth,
    setMaxMatchingsWidth,
    setMaxCompareWidth,
  } = props;
  setMaxMatchingsWidth(maxWidth - compareSideWidth);
  setMaxCompareWidth(maxWidth - matchingsSideWidth);
};

const handleCompareAndResultsMaxDimensions = props => {
  const { maxWidth, resultsLocalWidth, compareSideWidth, setMaxResultsWidth, setMaxCompareWidth } =
    props;
  setMaxResultsWidth(maxWidth - compareSideWidth);
  setMaxCompareWidth(maxWidth - resultsLocalWidth);
};

const handlResultsAndMatchingsMaxDimensions = props => {
  const {
    maxWidth,
    resultsLocalWidth,
    matchingsSideWidth,
    setMaxResultsWidth,
    setMaxMatchingsWidth,
  } = props;
  setMaxResultsWidth(maxWidth - matchingsSideWidth);
  setMaxMatchingsWidth(maxWidth - resultsLocalWidth);
};
