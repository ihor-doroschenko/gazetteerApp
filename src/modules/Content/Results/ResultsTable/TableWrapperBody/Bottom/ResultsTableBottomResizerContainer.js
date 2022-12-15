import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResizableBox } from 'react-resizable';
import { setResultsBottomHeight } from 'redux/table-state-reducer';
import {
  getResultsBottomMaxHeight,
  getResultsBottomMinHeight,
} from 'selectors/simple-selectors/table-state-selectors';
import ResultsTableHead from '../../ResultsTableHead/ResultsTableHead';
import ResultsTableBottomFunctionalContainer from './ResultsTableBottomFunctionalContainer';
import ResultsTableBottomViewClasses from './ResultsTableBottomView.module.css';

const ResultsTableBottomResizerContainer = props => {
  const resultsBottomMinHeight = useSelector(getResultsBottomMinHeight);
  const resultsBottomMaxHeight = useSelector(getResultsBottomMaxHeight);
  const dispatch = useDispatch();
  return (
    <ResizableBox
      resizeHandles={['n']}
      width={Infinity}
      height={resultsBottomMinHeight}
      minConstraints={[Infinity, resultsBottomMinHeight]}
      maxConstraints={[Infinity, resultsBottomMaxHeight]}
      onResize={(e, data) => dispatch(setResultsBottomHeight(data.size.height))}
      className={classNames(
        ResultsTableBottomViewClasses.tableBottom,
        'table-ResultsTableSideResizerContainer'
      )}
      handle={() => (
        <span className={ResultsTableBottomViewClasses.resizerWrapper}>
          <div className={ResultsTableBottomViewClasses.resizer}>
            <span></span>
          </div>
        </span>
      )}>
      <ResultsTableHead />
      <ResultsTableBottomFunctionalContainer />
    </ResizableBox>
  );
};

export default ResultsTableBottomResizerContainer;
