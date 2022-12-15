import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import ValueCellClasses from './ValueCell.module.css';
import ValueCellTree from './ValueCellTree';

// Wrapper component to contain ValueCellTree component with the truncation functionality (if the attribute value is long, i.e. longer than the limit)

const ValueCell = ({ values, icon, callback, tooltipText, text }) => {
  return (
    <>
      <div>
        <ValueCellTree data={values} />
      </div>
      <div className={ValueCellClasses.truncateWrapper}>
        <div onClick={callback}>
          <TooltipContainer text={tooltipText} icon={icon} delay={true} />
        </div>
        <p>{text}</p>
      </div>
    </>
  );
};

export default ValueCell;
