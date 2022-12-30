import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import TooltipContainer from 'components/Tooltip/TooltipContainer';
import React from 'react';
import TabSwitchButtonClasses from './TabSwitchButton.module.css';

// Component to contain buttons to switch between pages of tabs (next and previous)

const TabSwitchButton = ({ length, value, pages, role, currentPage, setCurrentPage }) => {
  const icon = role === 'next' ? faChevronCircleRight : faChevronCircleLeft;
  const text = role === 'next' ? 'tt_go_to_next_set_of_tabs' : 'tt_go_to_previous_set_of_tabs';
  const newCurrentPage = role === 'next' ? currentPage + 1 : currentPage - 1;
  return (
    <div
      className={TabSwitchButtonClasses.tabSwitch}
      onClick={() => setCurrentPage(newCurrentPage)}>
      {length > value && currentPage !== pages && (
        <TooltipContainer placement='left' icon={icon} text={text} delay={true} />
      )}
    </div>
  );
};

export default TabSwitchButton;
