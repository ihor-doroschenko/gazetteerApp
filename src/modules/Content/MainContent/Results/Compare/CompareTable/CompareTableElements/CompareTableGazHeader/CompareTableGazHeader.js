import { faTimes } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeEntityFromCompareTool } from 'redux/compare-reducer';
import CompareTableGazHeaderClasses from './CompareTableGazHeader.module.css';

const CompareTableGazHeader = ({ gazName, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={CompareTableGazHeaderClasses.gazHeader}>
      <p>{gazName}</p>
      <div onClick={() => dispatch(removeEntityFromCompareTool(id))}>
        <TooltipContainer
          placement='top'
          text='tt_remove_entity_from_compare'
          icon={faTimes}
          delay={true}
        />
      </div>
    </div>
  );
};

export default CompareTableGazHeader;
