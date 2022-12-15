import Preloader from 'components/Preloader/Preloader';
import { useRightContainerTableDimensions } from 'Hooks/RightResults/useRightContainerTableDimensions';
import React, { Suspense } from 'react';
import AdditionalTablesContainer from '../../../AdditionalResults/AdditionalTablesContainer';
import ResultsTableSideResizerContainer from './ResultsTableSideResizerContainer';
import ResultsTableSideViewClasses from './ResultsTableSideView.module.css';
const CompareTable = React.lazy(() =>
  import('../../../AdditionalResults/Compare/CompareTable/CompareTable')
);
const MatchingsTable = React.lazy(() =>
  import('../../../AdditionalResults/MatchingsTable/MatchingsTable')
);
const ResultsTableSideDataContainer = props => {
  const { compareDimensions, matchingsDimensions, resultsDimensions } =
    useRightContainerTableDimensions();
  return (
    <div className={ResultsTableSideViewClasses.rightWrapper}>
      {[
        {
          key: 1,
          value: true,
          component: (
            <Suspense fallback={<Preloader message='The compare table is loading...' />}>
              <CompareTable />
            </Suspense>
          ),
          dimensions: compareDimensions,
        },
        {
          key: 2,
          value: false,
          component: (
            <Suspense fallback={<Preloader message='The matching table is loading...' />}>
              <MatchingsTable />
            </Suspense>
          ),
          dimensions: matchingsDimensions,
        },
      ].map(el => (
        <AdditionalTablesContainer
          key={el.key}
          value={el.value}
          {...el.dimensions}
          {...resultsDimensions}>
          {el.component}
        </AdditionalTablesContainer>
      ))}
      <ResultsTableSideResizerContainer {...resultsDimensions} />
    </div>
  );
};

export default React.memo(ResultsTableSideDataContainer);
