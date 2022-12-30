import Preloader from 'components/Preloader/Preloader';
import { useSideContainerTableDimensions } from 'Hooks/RightResults/useSideContainerTableDimensions';
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

// Wrapper component to contain results table as well as additional result tables (matchings and/or compare) in side view. The wrapper is of the third order for the ResultsTableSide component

const ResultsTableSideDataContainer = props => {
  const { compareDimensions, matchingsDimensions, resultsDimensions } =
    useSideContainerTableDimensions();
  return (
    <div className={ResultsTableSideViewClasses.rightWrapper}>
      {[
        {
          key: 'compareTableSide',
          value: true,
          component: (
            <Suspense fallback={<Preloader message='The compare table is loading...' />}>
              <CompareTable />
            </Suspense>
          ),
          dimensions: compareDimensions,
        },
        {
          key: 'matchingsTableSide',
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
