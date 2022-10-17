import GazetteerResultsHead from 'modules/Content/MainContent/Results/ResultsTable/TableWrapperBody/GazetteerResultsHead/GazetteerResultsHead';
import React from 'react';

export const getColumnsForSideView = getOrCreateRef => {
  return [
    {
      Cell: props => {
        const { original } = props;
        return (
          <GazetteerResultsHead original={original} newRef={getOrCreateRef(original.gazName)} />
        );
      },
      style: { padding: '0' },
    },
  ];
};
