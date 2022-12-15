import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import TabSwitchButtonClasses from './TabSwitchButton.module.css';

const TabSwitchButton = ({ length, value, pages, role, currentPage, setCurrentPage }) => {
  const icon = role === 'next' ? faChevronCircleRight : faChevronCircleLeft;
  const text = role === 'next' ? 'tt_go_to_next_set_of_tabs' : 'tt_go_to_previous_set_of_tabs';
  return (
    <div
      className={TabSwitchButtonClasses.tabSwitch}
      onClick={() => setCurrentPage(role === 'next' ? currentPage + 1 : currentPage - 1)}>
      {length > value && currentPage !== pages && (
        <TooltipContainer placement='left' icon={icon} text={text} delay={true} />
      )}
    </div>
  );
};

export default TabSwitchButton;
