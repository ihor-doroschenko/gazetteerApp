import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addEntityToCompare } from 'redux/compare-reducer';
import { switchAdditionalResult, switchCompareTool } from 'redux/nav-reducer';
import CompareToolClasses from './CompareTool.module.css';

// Ccomponent to call compare table by click on respective icon. The table will appear to the left of the results window as separate window.

const CompareTool = ({ id, gazName }) => {
  const dispatch = useDispatch();

  const handleCompareTool = () => {
    dispatch(switchCompareTool(true));
    dispatch(switchAdditionalResult(false, true));
    dispatch(addEntityToCompare(id, gazName));
  };

  return (
    <div onClick={handleCompareTool}>
      <TooltipContainer
        placement='left'
        icon={faClipboardList}
        text='tt_compare'
        styleProp={CompareToolClasses.compareToolIcon}
      />
    </div>
  );
};

export default withReactMemo(CompareTool);
