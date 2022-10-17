import Preloader from 'components/Preloader/Preloader';
import TableHead from 'components/TableHead/TableHead';
import { useMatchingsDataToExport } from 'Hooks/Export/useMatchingsDataToExport';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { closeMatchingTable } from 'redux/matching-reducer';
import { switchMatchingTable } from 'redux/nav-reducer';
import { getIsMatchingTableHidden } from 'selectors/simple-selectors/nav-selectors';
const MatchingsTableBody = React.lazy(() => import('./MatchingsTableBody'));

const MatchingsTable = props => {
  const isMatchingTableHidden = useSelector(getIsMatchingTableHidden);
  const { matchingsDataToExport, headers } = useMatchingsDataToExport();
  return (
    <div>
      <TableHead
        close={closeMatchingTable}
        value={isMatchingTableHidden}
        switchValue={switchMatchingTable}
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
