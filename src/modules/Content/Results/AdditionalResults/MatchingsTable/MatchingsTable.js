import Preloader from 'components/Preloader/Preloader';
import { useMatchingsDataToExport } from 'Hooks/Export/useMatchingsDataToExport';
import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMatchingTable } from 'redux/matching-reducer';
import { switchAdditionalResult } from 'redux/nav-reducer';
import { getIsMatchingTableHidden } from 'selectors/simple-selectors/nav-selectors';
import AdditionalResultsTableHead from '../AdditionalResultsTableHead';
const MatchingsTableBody = React.lazy(() => import('./MatchingsTableBody'));

// Wrapper component to contain matchings table - body (with Preloader-funktionality) and head with table tools (close, export, help) in it

const MatchingsTable = props => {
  const dispatch = useDispatch();
  const isMatchingTableHidden = useSelector(getIsMatchingTableHidden);
  const { matchingsDataToExport, headers } = useMatchingsDataToExport();
  return (
    <div>
      <AdditionalResultsTableHead
        close={closeMatchingTable}
        value={isMatchingTableHidden}
        switchValue={() => dispatch(switchAdditionalResult(!isMatchingTableHidden))}
        title='Matchings'
        data={matchingsDataToExport}
        headers={headers}
      />
      <Suspense fallback={<Preloader message='The matchings table is loading...' />}>
        <MatchingsTableBody />
      </Suspense>
    </div>
  );
};

export default MatchingsTable;
