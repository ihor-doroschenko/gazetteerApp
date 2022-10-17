import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import { withReactMemo } from 'HOCs/withReactMemo';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addEntityToCompare } from 'redux/compare-reducer';
import { switchCompareTable, switchCompareTool } from 'redux/nav-reducer';
import CompareToolClasses from './CompareTool.module.css';

/**
 * The component calls compare table by click on respective icon.
 * The table will appear to the left of the results window as separate window.
 * The main task of the table is to give a possibility to compare different entities, e.g. their attributes - structure, attribute names, values, etc.
 */

const CompareTool = ({ id, gazName }) => {
  const dispatch = useDispatch();

  const handleCompareTool = () => {
    dispatch(switchCompareTool(true));
    dispatch(switchCompareTable(false));
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
