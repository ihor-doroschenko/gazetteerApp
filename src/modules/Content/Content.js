import classNames from 'classnames';
import { useTheLowestValidResolution } from 'Hooks/useTheLowestValidResolution';
import React from 'react';
import ContentClasses from './Content.module.css';
import ResultsContainer from './MainContent/Results/ResultsContainer';
import SearchContainer from './MainContent/Search/SearchContainer';

const Content = () => {
  const theLowestValidResolution = useTheLowestValidResolution();
  return (
    <div
      className={classNames(ContentClasses.content, {
        [ContentClasses.lowResolution]: theLowestValidResolution,
      })}>
      <SearchContainer />
      <ResultsContainer />
    </div>
  );
};

export default Content;
