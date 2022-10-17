import classNames from 'classnames';
import { getRightContainerElementDefaultWidth } from 'constants/getRightContainerMaxWidth';
import { useAdditionalTableResultData } from 'Hooks/RightResults/useAdditionalTableResultData';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResizableBox } from 'react-resizable';
import { getIsSatellite, getIsSideSwitched } from 'selectors/simple-selectors/nav-selectors';
import {
  getAdditionalElementOriginalHeight,
  getWindowDimensions,
} from 'selectors/simple-selectors/table-state-selectors';
import { addNoShadow } from 'utils/Styling/addNoShadow';
import AdditionalTablesWrapperClasses from './AdditionalTablesWrapper.module.css';

const AdditionalTables = props => {
  const dispatch = useDispatch();
  const isSatellite = useSelector(getIsSatellite);
  const isSideSwitched = useSelector(getIsSideSwitched);
  const additionalElementOriginalHeight = useSelector(getAdditionalElementOriginalHeight);
  const { height } = useSelector(getWindowDimensions);

  const { isToolHidden, setElementWidthGlobally, setElementHeightGlobally, elementHeight } =
    useAdditionalTableResultData(props.value);

  const rightContainerElementDefaultWidth = getRightContainerElementDefaultWidth();

  return (
    <ResizableBox
      onResize={(e, data) => {
        if (!isSideSwitched) {
          props.setElementWidth(data.size.width);
          dispatch(setElementWidthGlobally(data.size.width));
          dispatch(setElementHeightGlobally(data.size.height));
        }
      }}
      resizeHandles={!isSideSwitched ? ['w', 's'] : []}
      width={props.elementWidth ? props.elementWidth : rightContainerElementDefaultWidth}
      height={!isSideSwitched && elementHeight}
      minConstraints={[rightContainerElementDefaultWidth, additionalElementOriginalHeight]}
      maxConstraints={[
        props.maxElementWidth ? props.maxElementWidth : rightContainerElementDefaultWidth,
        (height * 92) / 100,
      ]}
      className={addNoShadow(
        classNames(
          { [AdditionalTablesWrapperClasses.rightResizeWrapper]: !isSideSwitched },
          { [AdditionalTablesWrapperClasses.bottomResizeWrapper]: isSideSwitched }
        ),
        isSatellite
      )}
      style={{
        marginRight: !isToolHidden ? '0px' : `-${!isSideSwitched ? props.elementWidth : 400}px`,
        zIndex: isToolHidden && '-1',
        visibility: !isSideSwitched && isToolHidden && 'hidden',
      }}>
      {props.children}
    </ResizableBox>
  );
};
export default AdditionalTables;
