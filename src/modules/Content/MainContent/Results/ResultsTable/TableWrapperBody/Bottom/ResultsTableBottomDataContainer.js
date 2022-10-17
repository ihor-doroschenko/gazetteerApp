import Preloader from 'components/Preloader/Preloader';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getActualBottomContainerHeight } from 'selectors/simple-selectors/map-interaction-selectors';
import AdditionalTablesWrapper from '../../../AdditionalResults/AdditionalTablesWrapper';
import ResultsTableSideViewClasses from '../Side/ResultsTableSideView.module.css';
import ResultsTableBottomResizerContainer from './ResultsTableBottomResizerContainer';
const CompareTable = React.lazy(() => import('../../../Compare/CompareTable/CompareTable'));
const MatchingsTable = React.lazy(() => import('../../../MatchingsTable/MatchingsTable'));

const ResultsTableBottomDataContainer = () => {
  const actualBottomContainerHeight = useSelector(getActualBottomContainerHeight);
  return (
    <>
      <div
        className={ResultsTableSideViewClasses.rightWrapper}
        style={{ height: `calc(100% - ${actualBottomContainerHeight}px)` }}>
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
          <AdditionalTablesWrapper value={el.value}>{el.component}</AdditionalTablesWrapper>
        ))}
      </div>
      <ResultsTableBottomResizerContainer />
    </>
  );
};

export default ResultsTableBottomDataContainer;
