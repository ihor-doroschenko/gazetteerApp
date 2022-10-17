import { getRightContainerElementDefaultWidth } from 'constants/getRightContainerMaxWidth';
import { useActualHightToSetAdditionalResultHeights } from 'Hooks/RightResults/useActualHightToSetAdditionalResultHeights';
import React, { useState } from 'react';
import Measure from 'react-measure';
import { useDispatch, useSelector } from 'react-redux';
import { ResizableBox } from 'react-resizable';
import { switchResultsHidden } from 'redux/nav-reducer';
import { setResultsSideHeight, setResultsWidthWrapper } from 'redux/table-state-reducer';
import {
  getIsMatching,
  getIsResultsHidden,
  getIsSatellite,
} from 'selectors/simple-selectors/nav-selectors';
import { getResultsSideHeight } from 'selectors/simple-selectors/table-state-selectors';
import { addNoShadow } from 'utils/Styling/addNoShadow';
import TableSwitcher from '../../TableSwitcher/TableSwitcher';
import TableWrapperHead from '../../TableWrapperHead/TableWrapperHead';
import ResultsTableSideFunctionalContainer from './ResultsTableSideFunctionalContainer';
import ResultsTableSideViewClasses from './ResultsTableSideView.module.css';

const ResultsTableSideResizerContainer = props => {
  const isSatellite = useSelector(getIsSatellite);
  const isMatching = useSelector(getIsMatching);
  const isResultsHidden = useSelector(getIsResultsHidden);
  const dispatch = useDispatch();
  const rightContainerElementDefaultWidth = getRightContainerElementDefaultWidth();
  const resultsSideHeight = useSelector(getResultsSideHeight);
  const [actualHeight, setActualHeight] = useState(resultsSideHeight);
  useActualHightToSetAdditionalResultHeights(actualHeight);
  return (
    <>
      <Measure
        bounds
        onResize={contentRect => {
          if (resultsSideHeight !== contentRect.bounds.height) {
            dispatch(setResultsSideHeight(contentRect.bounds.height));
            setActualHeight(contentRect.bounds.height);
          }
        }}>
        {({ measureRef }) => (
          <div ref={measureRef} style={{ height: 'inherit' }}>
            <ResizableBox
              onResize={(e, data) => {
                dispatch(setResultsWidthWrapper(data.size.width));
                props.setResultsLocalWidth(data.size.width);
              }}
              resizeHandles={['w']}
              width={props.resultsLocalWidth}
              height={Infinity}
              minConstraints={[rightContainerElementDefaultWidth, Infinity]}
              maxConstraints={[props.maxResultsWidth, Infinity]}
              className={addNoShadow(ResultsTableSideViewClasses.tableRight, isSatellite)}
              style={{
                marginRight: isResultsHidden ? `-${props.resultsLocalWidth}px` : '0px',
              }}>
              <div
                className={ResultsTableSideViewClasses.resultsTableResizeWrapper}
                style={{
                  gridTemplateRows: isMatching
                    ? `45px 35px calc(100% - 45px)`
                    : `45px calc(100% - 45px)`,
                }}>
                <TableWrapperHead />
                <ResultsTableSideFunctionalContainer />
              </div>
            </ResizableBox>
          </div>
        )}
      </Measure>
      {isResultsHidden && (
        <TableSwitcher
          isToolHidden={isResultsHidden}
          topValue={0}
          switchValue={switchResultsHidden}
          name='Results'
        />
      )}
    </>
  );
};

export default ResultsTableSideResizerContainer;
