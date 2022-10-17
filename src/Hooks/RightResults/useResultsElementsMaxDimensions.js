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
  }, [props.compareWidth]);

  useEffect(() => {
    if (!isResultsHidden && !isCompareHidden) {
      handleAllElementMaxDimensions(props);
    } else if (!isResultsHidden) {
      handlResultsAndMatchingsMaxDimensions(props);
    } else if (!isCompareHidden) {
      handleCompareAndMatchingMaxDimensions(props);
    }
  }, [props.matchingsWidth]);
}

const handleAllElementMaxDimensions = props => {
  const {
    maxWidth,
    resultsLocalWidth,
    matchingsWidth,
    compareWidth,
    setMaxResultsWidth,
    setMaxMatchingsWidth,
    setMaxCompareWidth,
  } = props;
  setMaxResultsWidth(maxWidth - matchingsWidth - compareWidth);
  setMaxMatchingsWidth(maxWidth - resultsLocalWidth - compareWidth);
  setMaxCompareWidth(maxWidth - resultsLocalWidth - matchingsWidth);
};

const handleCompareAndMatchingMaxDimensions = props => {
  const { maxWidth, matchingsWidth, compareWidth, setMaxMatchingsWidth, setMaxCompareWidth } =
    props;
  setMaxMatchingsWidth(maxWidth - compareWidth);
  setMaxCompareWidth(maxWidth - matchingsWidth);
};

const handleCompareAndResultsMaxDimensions = props => {
  const { maxWidth, resultsLocalWidth, compareWidth, setMaxResultsWidth, setMaxCompareWidth } =
    props;
  setMaxResultsWidth(maxWidth - compareWidth);
  setMaxCompareWidth(maxWidth - resultsLocalWidth);
};

const handlResultsAndMatchingsMaxDimensions = props => {
  const { maxWidth, resultsLocalWidth, matchingsWidth, setMaxResultsWidth, setMaxMatchingsWidth } =
    props;
  setMaxResultsWidth(maxWidth - matchingsWidth);
  setMaxMatchingsWidth(maxWidth - resultsLocalWidth);
};
