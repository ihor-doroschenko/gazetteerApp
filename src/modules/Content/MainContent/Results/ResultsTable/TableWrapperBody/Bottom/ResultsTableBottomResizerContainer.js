import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResizableBox } from 'react-resizable';
import { setBottomContainerActualHeight } from 'redux/map-interaction-reducer';
import {
  getBottomContainerMaxHeight,
  getBottomContainerMinHeight,
} from 'selectors/simple-selectors/map-interaction-selectors';
import TableWrapperHead from '../../TableWrapperHead/TableWrapperHead';
import ResultsTableBottomFunctionalContainer from './ResultsTableBottomFunctionalContainer';
import ResultsTableBottomViewClasses from './ResultsTableBottomView.module.css';

const ResultsTableBottomResizerContainer = props => {
  const bottomContainerMinHeight = useSelector(getBottomContainerMinHeight);
  const bottomContainerMaxHeight = useSelector(getBottomContainerMaxHeight);
  const dispatch = useDispatch();
  return (
    <ResizableBox
      resizeHandles={['n']}
      width={Infinity}
      height={bottomContainerMinHeight}
      minConstraints={[Infinity, bottomContainerMinHeight]}
      maxConstraints={[Infinity, bottomContainerMaxHeight]}
      onResize={(e, data) => dispatch(setBottomContainerActualHeight(data.size.height))}
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
      <TableWrapperHead />
      <ResultsTableBottomFunctionalContainer />
    </ResizableBox>
  );
};

export default ResultsTableBottomResizerContainer;
