import Preloader from 'components/Preloader/Preloader';
import AdditionalTablesContainer from 'modules/Content/Results/AdditionalResults/AdditionalTablesContainer';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getResultsBottomHeight } from 'selectors/simple-selectors/table-state-selectors';
import ResultsTableSideViewClasses from '../Side/ResultsTableSideView.module.css';
import ResultsTableBottomResizerContainer from './ResultsTableBottomResizerContainer';
const CompareTable = React.lazy(() =>
  import('../../../AdditionalResults/Compare/CompareTable/CompareTable')
);
const MatchingsTable = React.lazy(() =>
  import('../../../AdditionalResults/MatchingsTable/MatchingsTable')
);

const ResultsTableBottomDataContainer = () => {
  const resultsBottomHeight = useSelector(getResultsBottomHeight);
  return (
    <>
      <div
        className={ResultsTableSideViewClasses.rightWrapper}
        style={{ height: `calc(100% - ${resultsBottomHeight}px)` }}>
        {[
          {
            value: true,
            component: (
              <Suspense fallback={<Preloader message='The compare table is loading...' />}>
                <CompareTable />
              </Suspense>
            ),
          },
          {
            value: false,
            component: (
              <Suspense fallback={<Preloader message='The matching table is loading...' />}>
                <MatchingsTable />
              </Suspense>
            ),
          },
        ].map(el => (
          <AdditionalTablesContainer value={el.value}>{el.component}</AdditionalTablesContainer>
        ))}
      </div>
      <ResultsTableBottomResizerContainer />
    </>
  );
};

export default ResultsTableBottomDataContainer;
