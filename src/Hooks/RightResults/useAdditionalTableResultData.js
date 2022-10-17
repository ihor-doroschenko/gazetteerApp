import { useSelector } from 'react-redux';
import { switchCompareTable, switchMatchingTable } from 'redux/nav-reducer';
import {
  setCompareSideHeight,
  setCompareWidthWrapper,
  setMatchingsSideHeight,
  setMatchingsWidthWrapper,
} from 'redux/table-state-reducer';
import {
  getIsCompareHidden,
  getIsCompareTool,
  getIsMatching,
  getIsMatchingTableHidden,
} from 'selectors/simple-selectors/nav-selectors';
import {
  getCompareSideHeight,
  getMatchingsSideHeight,
} from 'selectors/simple-selectors/table-state-selectors';
import { useTopValueForAdditionalTableResults } from './useTopValueForAdditionalTableResults';

// Hook get props for addtional result data (matchings table or compare table)

export function useAdditionalTableResultData(value) {
  const isToolEnabled = useSelector(value ? getIsCompareTool : getIsMatching);
  const isToolHidden = useSelector(value ? getIsCompareHidden : getIsMatchingTableHidden);
  const switchValue = value ? switchCompareTable : switchMatchingTable;
  const setElementWidthGlobally = value ? setCompareWidthWrapper : setMatchingsWidthWrapper;
  const setElementHeightGlobally = value ? setCompareSideHeight : setMatchingsSideHeight;
  const elementHeight = useSelector(value ? getCompareSideHeight : getMatchingsSideHeight);

  const topValue = useTopValueForAdditionalTableResults(value);

  return {
    isToolEnabled,
    isToolHidden,
    switchValue,
    setElementWidthGlobally,
    setElementHeightGlobally,
    elementHeight,
    topValue,
  };
}
