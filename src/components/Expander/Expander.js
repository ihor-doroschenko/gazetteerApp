import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import { findExpandedRow } from 'utils/Helpers/TableHelpers/findExpandedRow';
import ExpanderClasses from './Expander.module.css';

const Expander = ({ expanded, handleAutoScroll, gazName }) => {
  const found = findExpandedRow(expanded, gazName);
  return (
    <div className={ExpanderClasses.expander} onClick={() => handleAutoScroll(gazName)}>
      <TooltipContainer
        placement='left'
        icon={found ? faAngleDown : faAngleRight}
        text={found ? 'tt_collapse_results' : 'tt_expand_results'}
        delay={true}
      />
    </div>
  );
};

export default Expander;
