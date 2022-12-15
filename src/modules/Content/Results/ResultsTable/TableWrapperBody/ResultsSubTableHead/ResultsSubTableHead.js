import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import ResultsSubTableHeadClasses from './ResultsSubTableHead.module.css';
import ResultsSubTableHeadText from './ResultsSubTableHeadText';

// Wrapper component to contain head for a subtable (table which contain actual gazetteer specific data)

const ResultsSubTableHead = ({ original, newRef }) => {
  return (
    <div className={ResultsSubTableHeadClasses.head} ref={newRef}>
      <span
        className={ResultsSubTableHeadClasses.dot}
        style={{ backgroundColor: original.color }}></span>
      <ResultsSubTableHeadText original={original} />
    </div>
  );
};

export default withReactMemo(ResultsSubTableHead);
