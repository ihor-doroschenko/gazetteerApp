import classNames from 'classnames';
import { useTheLowestValidResolution } from 'Hooks/useTheLowestValidResolution';
import React from 'react';
import ContentClasses from './Content.module.css';
import ResultsContainer from './Results/ResultsContainer';
import SearchValidationContainer from './Search/SearchValidationContainer';

// Wrapper component to contain two main areas of the content in the app (except of the header, that is theoretically a content too, but in this definition the content means the whole app except of the header): search and results. This wrapper component will adjust the content to the lowest valid resolution of the screen if needed

const Content = () => {
  const theLowestValidResolution = useTheLowestValidResolution();
  return (
    <div
      className={classNames(ContentClasses.content, {
        [ContentClasses.lowResolution]: theLowestValidResolution,
      })}>
      <SearchValidationContainer />
      <ResultsContainer />
    </div>
  );
};

export default Content;
