import React from 'react';
import { useSelector } from 'react-redux';
import { getIsResults } from 'selectors/simple-selectors/nav-selectors';
import MainMapContainer from './Map/MainMapContainer';
import ResultsTable from './ResultsTable/ResultsTable';

// Wrapper component to contain results table and map. The results table appears only if isResults is true

const ResultsContainer = () => {
  const isResults = useSelector(getIsResults);
  return (
    <>
      <MainMapContainer />
      {isResults && <ResultsTable />}
    </>
  );
};

export default ResultsContainer;
