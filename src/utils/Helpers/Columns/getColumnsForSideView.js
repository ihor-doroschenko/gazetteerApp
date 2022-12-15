import ResultsSubTableHead from 'modules/Content/Results/ResultsTable/TableWrapperBody/ResultsSubTableHead/ResultsSubTableHead';
import React from 'react';

// Get columns for side view to contain gazetteer headers

export const getColumnsForSideView = getOrCreateRef => {
  return [
    {
      Cell: props => {
        const { original } = props;
        return (
          <ResultsSubTableHead original={original} newRef={getOrCreateRef(original.gazName)} />
        );
      },
      style: { padding: '0' },
    },
  ];
};
