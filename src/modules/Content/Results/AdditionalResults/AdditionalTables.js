import classNames from 'classnames';
import {
  contentHeight,
  defaultAdditionalResultBottomMaxWidth,
  defaultAdditionalResultHeight,
  defaultElementWidth,
} from 'constants/numericConstants';
import { useAdditionalTableResultData } from 'Hooks/RightResults/useAdditionalTableResultData';
import { useSearchBottomDimensions } from 'Hooks/Search/useSearchBottomDimensions';
import { useAdditionalTableStyle } from 'Hooks/useAdditionalTableStyle';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResizableBox } from 'react-resizable';
import { setAdditionalResultsBottomWidth } from 'redux/table-state-reducer';
import { getIsSatellite, getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import {
  getAdditionalResultsBottomWidth,
  getWindowDimensions,
} from 'selectors/simple-selectors/table-state-selectors';
import { getAdditionalResultMaxHeight } from 'utils/Dimensions/getAdditionalResultMaxHeight';
import { addNoShadow } from 'utils/Styling/addNoShadow';
import AdditionalTablesWrapperClasses from './AdditionalTablesWrapper.module.css';

// Wrapper component to control resizing, dimensions, and styles conditionally for additional tables (compare and/or matchings) depending on view mode and resizing of another results tables

const AdditionalTables = ({ value, setElementWidth, elementWidth, maxElementWidth, children }) => {
  const dispatch = useDispatch();
  const isSatellite = useSelector(getIsSatellite);
  const isSideSwitched = useSelector(getIsSideSwitched);
  const { height } = useSelector(getWindowDimensions);
  const { isToolHidden, setElementWidthGlobally, setElementHeightGlobally, elementHeight } =
    useAdditionalTableResultData(value);
  const { actualHeight } = useSearchBottomDimensions();
  const additionalResultsBottomWidth = useSelector(getAdditionalResultsBottomWidth);
  const styles = useAdditionalTableStyle(isToolHidden, elementWidth);
  const maxHeight = getAdditionalResultMaxHeight(height);

  return (
    <ResizableBox
      onResize={(e, data) => {
        if (!isSideSwitched) {
          setElementWidth(data.size.width);
          dispatch(setElementWidthGlobally(data.size.width));
          dispatch(setElementHeightGlobally(data.size.height));
        } else {
          dispatch(setAdditionalResultsBottomWidth(data.size.width));
        }
      }}
      resizeHandles={!isSideSwitched ? ['w', 's'] : ['w']}
      width={!isSideSwitched ? elementWidth : additionalResultsBottomWidth}
      height={!isSideSwitched ? elementHeight : (height * contentHeight) / 100 - actualHeight}
      minConstraints={[defaultElementWidth, defaultAdditionalResultHeight]}
      maxConstraints={[
        !isSideSwitched ? maxElementWidth : defaultAdditionalResultBottomMaxWidth,
        maxHeight,
      ]}
      className={addNoShadow(
        classNames(
          { [AdditionalTablesWrapperClasses.rightResizeWrapper]: !isSideSwitched },
          { [AdditionalTablesWrapperClasses.bottomResizeWrapper]: isSideSwitched }
        ),
        isSatellite
      )}
      style={styles}>
      {children}
    </ResizableBox>
  );
};
export default AdditionalTables;
