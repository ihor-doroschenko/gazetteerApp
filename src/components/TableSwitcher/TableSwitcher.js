import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import { useDispatch } from 'react-redux';
import TableSwitcherClasses from './TableSwitcher.module.css';

// Component to provide hide/show functionalities for the results tables (compare and matchings in both views and main results in side view)

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
        onClick={() => dispatch(switchValue(!isToolHidden, name === 'Compare'))}>
        <p>{name}</p>
        <TooltipContainer
          placement='left'
          icon={faAngleLeft}
          text={`tt_${name.toLowerCase()}_switcher_on`}
          delay={true}
        />
      </div>
    </div>
  );
};
export default TableSwitcher;
