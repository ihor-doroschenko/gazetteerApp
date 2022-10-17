import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import { useDispatch } from 'react-redux';
import TableSwitcherClasses from './TableSwitcher.module.css';

const TableSwitcher = ({ isToolHidden, topValue, switchValue, name }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={classNames(TableSwitcherClasses.navSwitchedOn, {
        [TableSwitcherClasses.navSwitchedOnMatching]: name === 'Matchings',
        [TableSwitcherClasses.navSwitchedOnCompare]: name === 'Compare',
      })}
      style={{ top: `${topValue}px` }}>
      <div
        className={TableSwitcherClasses.navElement}
        onClick={() => dispatch(switchValue(!isToolHidden))}>
        <p>{name}</p>
        <TooltipContainer
          placement='left'
          icon={isToolHidden ? faAngleLeft : faAngleRight}
          text={
            isToolHidden
              ? `tt_${name.toLowerCase()}_switcher_on`
              : `tt_${name.toLowerCase()}_switcher_off`
          }
          delay={true}
        />
      </div>
    </div>
  );
};
export default TableSwitcher;
