import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import ResultsSubTableHead from '../ResultsSubTableHead/ResultsSubTableHead';
import TableBodyContainer from '../TableBodyContainer/TableBodyContainer';
import ResultsTableBottomViewClasses from './ResultsTableBottomView.module.css';

// Wrapper component to contain results subtable in bottom view. It includes subtable head and subtable body

const ResultsTableBottom = ({ data }) => {
  return (
    <div className={ResultsTableBottomViewClasses.wrapBottomTable}>
      <div className={ResultsTableBottomViewClasses.gazNamesBottomTable}>
        <ResultsSubTableHead original={data} />
      </div>
      <TableBodyContainer gazName={data.gazName} />
    </div>
  );
};

export default withReactMemo(ResultsTableBottom);
