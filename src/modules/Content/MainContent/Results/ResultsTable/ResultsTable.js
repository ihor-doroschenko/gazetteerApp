import Preloader from 'components/Preloader/Preloader';
import { useMatchingsFilter } from 'Hooks/Matchings/useMatchingsFilter';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import ResultsTableSideDataContainer from './TableWrapperBody/Side/ResultsTableSideDataContainer';

const ResultsTableBottomDataContainer = React.lazy(() =>
  import('./TableWrapperBody/Bottom/ResultsTableBottomDataContainer')
);

const ResultsTable = props => {
  const isSideSwitched = useSelector(getIsSideSwitched);
  useMatchingsFilter();
  return (
    <>
      {isSideSwitched ? (
        <Suspense
          fallback={<Preloader heightValue={true} message='The bottom view is loading...' />}>
          <ResultsTableBottomDataContainer />
        </Suspense>
      ) : (
        <ResultsTableSideDataContainer />
      )}
    </>
  );
};

export default ResultsTable;
