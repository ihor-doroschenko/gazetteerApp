import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import CellClasses from './Cell.module.css';
import CellTree from './CellTree';

const Cell = ({ values, icon, callback, tooltipText, text }) => {
  return (
    <>
      <div>
        <CellTree data={values} />
      </div>
      <div className={CellClasses.truncateWrapper}>
        <div onClick={callback}>
          <TooltipContainer text={tooltipText} icon={icon} delay={true} />
        </div>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Cell;
