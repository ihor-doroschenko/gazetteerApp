import { useSelector } from 'react-redux';
import {
  getCompareWidth,
  getMatchingsWidth,
  getResultsBlockRightWidth,
} from 'selectors/simple-selectors/table-state-selectors';
import { useSynchronisation } from './useSynchronisation';

// Hook to synchronise values between local state and global state

export function useDimensionSynchronisation(setResultsWidth, setCompareWidth, setMatchingsWidth) {
  const resultsWidth = useSelector(getResultsBlockRightWidth);
  const compareGlobalWidth = useSelector(getCompareWidth);
  const matchingsGlobalWidth = useSelector(getMatchingsWidth);

  useSynchronisation(resultsWidth, setResultsWidth);
  useSynchronisation(compareGlobalWidth, setCompareWidth);
  useSynchronisation(matchingsGlobalWidth, setMatchingsWidth);
}
