import { useSelector } from 'react-redux';
import {
  getCompareWidth,
  getMatchingsWidth,
  getResultsWidth,
} from 'selectors/simple-selectors/table-state-selectors';
import { useSynchronisation } from './useSynchronisation';

// Hook to synchronise values between local state and global state

export function useDimensionSynchronisation(setResultsWidth, setCompareWidth, setMatchingsWidth) {
  const resultsSideWidth = useSelector(getResultsWidth);
  const compareGlobalWidth = useSelector(getCompareWidth);
  const matchingsGlobalWidth = useSelector(getMatchingsWidth);

  useSynchronisation(resultsSideWidth, setResultsWidth);
  useSynchronisation(compareGlobalWidth, setCompareWidth);
  useSynchronisation(matchingsGlobalWidth, setMatchingsWidth);
}
